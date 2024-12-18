# Generated by Django 5.0.7 on 2024-07-16 20:16

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                        verbose_name="id",
                    ),
                ),
                ("name", models.CharField(max_length=256, verbose_name="name")),
                (
                    "created_at",
                    models.DateTimeField(auto_now_add=True, verbose_name="created at"),
                ),
                (
                    "updated_at",
                    models.DateTimeField(auto_now=True, verbose_name="updated at"),
                ),
            ],
            options={
                "verbose_name": "category",
                "verbose_name_plural": "categories",
                "db_table": "categories",
                "ordering": ("-created_at",),
            },
        ),
        migrations.CreateModel(
            name="City",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                        verbose_name="id",
                    ),
                ),
                ("name", models.CharField(max_length=256, verbose_name="name")),
                (
                    "created_at",
                    models.DateTimeField(auto_now_add=True, verbose_name="created at"),
                ),
                (
                    "updated_at",
                    models.DateTimeField(auto_now=True, verbose_name="updated at"),
                ),
            ],
            options={
                "verbose_name": "city",
                "verbose_name_plural": "cities",
                "db_table": "cities",
                "ordering": ("-created_at",),
            },
        ),
        migrations.CreateModel(
            name="Property",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                        verbose_name="id",
                    ),
                ),
                ("cover", models.ImageField(upload_to="images/", verbose_name="cover")),
                (
                    "phone_number",
                    models.CharField(max_length=256, verbose_name="phone number"),
                ),
                ("address", models.TextField(verbose_name="address")),
                (
                    "number_of_bedrooms",
                    models.PositiveIntegerField(
                        default=0, verbose_name="number of bedrooms"
                    ),
                ),
                (
                    "number_of_bathrooms",
                    models.PositiveIntegerField(
                        default=0, verbose_name="number of bathrooms"
                    ),
                ),
                (
                    "price",
                    models.DecimalField(
                        decimal_places=2, max_digits=10, verbose_name="price"
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(auto_now_add=True, verbose_name="created at"),
                ),
                (
                    "updated_at",
                    models.DateTimeField(auto_now=True, verbose_name="updated at"),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.RESTRICT,
                        to="property.category",
                        verbose_name="category",
                    ),
                ),
                (
                    "city",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.RESTRICT,
                        to="property.city",
                        verbose_name="city",
                    ),
                ),
            ],
            options={
                "verbose_name": "property",
                "verbose_name_plural": "properties",
                "db_table": "properties",
                "ordering": ("-created_at",),
            },
        ),
    ]
