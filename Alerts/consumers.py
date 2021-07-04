import json
from urllib.parse import parse_qs

from channels.db import database_sync_to_async
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer
from django.db.models.signals import post_save
from django.dispatch import receiver
from icecream import ic
from rest_framework import serializers

from Alerts.models import Alert
from Functions.Permissions import get_user_permissions
from Functions.queryset_filtering import queryset_filtering


from users.models import User


class AlertsSer(serializers.ModelSerializer):
    class Meta:
        model = Alert
        fields = '__all__'
from asgiref.sync import sync_to_async, async_to_sync


class AlertsChannle(WebsocketConsumer):
    def connect(self):

        self.accept()
        self.send('connectted')
        user = self.scope.get('user')

        queries = self.scope['query_string']
        queries = parse_qs(queries.decode("utf8"))
        for i in queries.keys():
            queries[i] = queries[i][0]
        related_only = queries.get('related_only')



        try:
            self.send(user.username + ' is connected.')
        except:
            self.send(user)
            self.close()


        user_permission = get_user_permissions(user)
        is_permited = bool(set(user_permission) & set(['view_alert','change_alert']))

        if user:
            if not related_only and (user.is_staff or user.is_superuser or is_permited):
                alerts = queryset_filtering(Alert, queries)
                serializer = AlertsSer(Alert.objects.all(), many=True)
                self.send(json.dumps(serializer.data))
            else:
                alerts = queryset_filtering(Alert, queries)
                alerts = alerts.filter(users__in=[user])
                serializer = AlertsSer(alerts, many=True)
                self.send(json.dumps(serializer.data))


        @receiver(post_save, sender=Alert)
        def __init__(sender, created, instance, **kwargs):
            if created:
                new_alert = Alert.objects.filter(id=instance.id)
                if related_only:
                    new_alert = Alert.objects.filter(users__in=[user])
                serializer = AlertsSer(new_alert.first(), many=False)
                # TODO users ids dont't appear try to add m2m
                self.send(json.dumps(serializer.data))

    def receive(self, text_data):
        errors = []
        user = self.scope.get('user')
        # data = json.loads(text_data)
        # TODO date= Date.objects.get(id=data.id)
        # date = date.seen_by.add(user)
        # notifcation = return_notifcations(self.scope)
        # self.send(notifcation)

        # notifcation = return_notifcations(self.scope)

    def disconnect(self, close_code):
        print(close_code)
        print(self)
