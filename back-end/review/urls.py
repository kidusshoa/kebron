from rest_framework import routers

from .views import ReviewViewSet

router = routers.DefaultRouter(trailing_slash=False)

router.register(r'reviews', ReviewViewSet, basename="reviews")

urlpatterns = router.urls
