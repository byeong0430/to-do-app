from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import *
from .serializers import *


def get_object(Model, pk):
    '''
    Retrieve an object based on its pk
    '''
    try:
        return Model.objects.get(pk=pk)
    except Model.DoesNotExist:
        raise Http404

class CategoryList(APIView):
    '''
    Retrieve a list of categories or add a category
    '''
    def get(self, request, format=None):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CategoryDetail(APIView):
    '''
    Retrieve, update, or delete a category instance
    '''
    def get(self, request, category_id, format=None):
        category = get_object(Category, category_id)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def put(self, request, category_id, format=None):
        category = get_object(Category, category_id)
        serializer = CategorySerializer(category, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, category_id, format=None):
        category = get_object(Category, category_id)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CategoryTaskList(APIView):
    '''
    Retrieve a list of tasks within a category
    '''
    def get(self, request, category_id, format=None):
        tasks = Task.objects.filter(category_id=category_id)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)


class TaskList(APIView):
    '''
    Retrieve a list of tasks or add a task
    '''
    def get(self, request, format=None):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TaskDetail(APIView):
    '''
    Retrieve, update, or delete a task
    '''
    def get(self, request, task_id, format=None):
        task = get_object(Task, task_id)
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    # Set partial=True to allow partial change
    def put(self, request, task_id, format=None):
        task = get_object(Task, task_id)
        serializer = TaskSerializer(task, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, task_id, format=None):
        task = get_object(Task, task_id)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)