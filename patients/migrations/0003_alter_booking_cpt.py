# Generated by Django 3.2.4 on 2021-07-04 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='cpt',
            field=models.ManyToManyField(blank=True, related_name='cpts', to='patients.CPTcode'),
        ),
    ]