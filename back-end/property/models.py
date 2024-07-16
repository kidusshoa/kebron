from django.db import models
from django.utils.translation import gettext_lazy as _

import uuid


class City(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
        verbose_name=_("id")
        )

    name = models.CharField(
        max_length=256,
        verbose_name=_("name")
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name=_("created at"),
    )

    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name=_("updated at"),
    )

    class Meta:
        verbose_name = _("city")
        verbose_name_plural = _("cities")
        ordering = ("-created_at",)
        db_table = "cities"

    def __str__(self):
        return self.name


class Category(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
        verbose_name=_("id")
        )

    name = models.CharField(
        max_length=256,
        verbose_name=_("name")
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name=_("created at"),
    )

    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name=_("updated at"),
    )

    class Meta:
        verbose_name = _("category")
        verbose_name_plural = _("categories")
        ordering = ("-created_at",)
        db_table = "categories"

    def __str__(self):
        return self.name


class Property(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
        verbose_name=_("id")
        )

    cover = models.ImageField(
        upload_to="images/",
        verbose_name=_("cover"),
    )

    phone_number = models.CharField(
        max_length=256,
        verbose_name=_("phone number"),
    )

    address = models.TextField(
        verbose_name=_("address"),
    )

    number_of_bedrooms = models.PositiveIntegerField(
        default=0,
        verbose_name=_("number of bedrooms"),
    )

    number_of_bathrooms = models.PositiveIntegerField(
        default=0,
        verbose_name=_("number of bathrooms"),
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        verbose_name=_("price"),
    )

    city = models.ForeignKey(
        City,
        on_delete=models.RESTRICT,
        verbose_name=_("city"),
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.RESTRICT,
        verbose_name=_("category"),
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name=_("created at"),
    )

    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name=_("updated at"),
    )

    class Meta:
        verbose_name = _("property")
        verbose_name_plural = _("properties")
        ordering = ("-created_at",)
        db_table = "properties"

    def __str__(self):
        return f"{self.city} - {self.category}"
