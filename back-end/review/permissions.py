from rest_framework.permissions import BasePermission, SAFE_METHODS

class WriteOnlyOrAuthenticated(BasePermission):
    """
    Custom permission to only allow write actions for any user and read actions for authenticated users.
    """
    def has_permission(self, request, view):
        # Allow write permissions for any user
        if request.method in ['POST']:
            return True

        # Allow read permissions only for authenticated users
        return request.method in SAFE_METHODS and request.user and request.user.is_authenticated
