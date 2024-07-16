from rest_framework import routers

from .views import (CityViewSet, CategoryViewSet,
                    PropertyViewSet)

router = routers.DefaultRouter(trailing_slash=False)

router.register(r'cities', CityViewSet, basename="cities")
router.register(r'categories', CategoryViewSet, basename="categories")
router.register(r'properties', PropertyViewSet, basename="properties")

urlpatterns = router.urls
