from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import (User)

from .forms import UserCreationForm, UserChangeForm


class UserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    add_form = UserCreationForm
    form = UserChangeForm
    model = User

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ['full_name', 'email', 'is_admin']
    list_filter = ['is_admin']
    fieldsets = [
        (None, {'fields': ['email', 'password']}),
        ("Personal info", {"fields": ['full_name']}),
        ('Permissions', {'fields': ['is_active', 'is_admin']}),
        ('Important dates', {'fields': ['created_at', 'updated_at']})
    ]

    add_fieldsets = [
        (None, {
            'classes': ['wide'],
            'fields': ['full_name', 'email', 'password1',
                       'password2', 'is_active', 'is_admin']})
    ]

    search_fields = ['full_name', 'email']
    ordering = ['-created_at']
    readonly_fields = ['created_at', 'updated_at']
    filter_horizontal = []


admin.site.register(User, UserAdmin)

# since we're not using Django's built-in permissions,
# unregister the Group model from admin.
admin.site.unregister(Group)
