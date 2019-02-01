from rest_framework import serializers
from .models import *

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = (
            'pk', 'title', 'note', 'starred', 'start_date',
            'end_date', 'category_id'
        )

    def create(self, validated_data):
        return Task.objects.create(**validated_data)

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('pk', 'name')

    def create(self, validated_data):
        return Category.objects.create(**validated_data)