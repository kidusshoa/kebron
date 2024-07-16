from django.db import models
from django.utils.translation import gettext_lazy as _

import uuid


class Review(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
        verbose_name=_("id")
        )

    full_name = models.CharField(
        max_length=256,
        verbose_name=_("full name")
    )

    email = models.EmailField(
        max_length=256,
        verbose_name=_("email")
    )

    comment = models.TextField(
        verbose_name=_("comment")
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
        verbose_name = _("review")
        verbose_name_plural = _("reviews")
        ordering = ("-created_at",)
        db_table = "reviews"

    def __str__(self):
        return self.full_name
