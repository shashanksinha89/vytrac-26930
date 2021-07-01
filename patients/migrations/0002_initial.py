# Generated by Django 3.2.5 on 2021-07-01 14:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('timesheets', '0001_initial'),
        ('patients', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='symptomshistory',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='symptoms_history', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='rpmplan',
            name='muserments',
            field=models.ManyToManyField(blank=True, related_name='RPMplan', to='timesheets.Column'),
        ),
        migrations.AddField(
            model_name='rpmplan',
            name='users',
            field=models.ManyToManyField(blank=True, related_name='RPMplan', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='reports',
            name='related_to',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='Reports_related_name', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='payment',
            name='qualified_CPTs',
            field=models.ManyToManyField(blank=True, related_name='who_can_see_comment', to='patients.CPTcode'),
        ),
        migrations.AddField(
            model_name='payment',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='Payment_user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='patient',
            name='booked_servces',
            field=models.ManyToManyField(blank=True, related_name='booked_servces', to='patients.Roster'),
        ),
        migrations.AddField(
            model_name='patient',
            name='care_taker',
            field=models.ManyToManyField(blank=True, help_text='providers, doktors, neuroses..', related_name='Patient_Profile_created_care_taker', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='patient',
            name='created_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='Patient_Profile_created_by', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='patient',
            name='ethnicity',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='patients.ethnicity'),
        ),
        migrations.AddField(
            model_name='patient',
            name='insurance',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='patients.insurance'),
        ),
        migrations.AddField(
            model_name='patient',
            name='native_langauge',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='patients.language'),
        ),
        migrations.AddField(
            model_name='patient',
            name='other_langauge',
            field=models.ManyToManyField(blank=True, related_name='Profileother_langauge', to='patients.Language'),
        ),
        migrations.AddField(
            model_name='patient',
            name='primary_care_physician',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='patients.primarycarephysician'),
        ),
        migrations.AddField(
            model_name='patient',
            name='race',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='patients.race'),
        ),
        migrations.AddField(
            model_name='patient',
            name='religion',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='patients.religion'),
        ),
        migrations.AddField(
            model_name='patient',
            name='user',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='patient_profile', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='emergencycontact',
            name='patient',
            field=models.ManyToManyField(blank=True, related_name='emergency_contact', to='patients.Patient'),
        ),
        migrations.AddField(
            model_name='diseasehistory',
            name='symptom',
            field=models.ManyToManyField(to='patients.Disease'),
        ),
        migrations.AddField(
            model_name='diseasehistory',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='Disease', to=settings.AUTH_USER_MODEL),
        ),
    ]
