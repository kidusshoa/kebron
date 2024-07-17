from rest_framework import serializers
from .models import City, Category, Property


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

# class PropertyResponseSerializer(serializers.ModelSerializer):
#     city = CitySerializer()
#     category = CategorySerializer()
#     class Meta:
#         model = Property
#         fields = '__all__'


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'
    
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['city'] = CitySerializer(instance.city).data
        response['category'] = CategorySerializer(instance.category).data
        return response
    
