from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework import status
from .models import *
from .serializers import *

@csrf_exempt
@api_view(['GET', 'POST'])
# Create your views here.
def task_list(request):
    '''
    List tasks or create a new task
    '''
    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskSerializer(
            tasks,
            context={'request', request},
            many=True
        )
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TaskSerializer(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status.HTTP_201_CREATED
                )
        return Response(
            serializer.data,
            status.HTTP_400_BAD_REQUEST
            )

@csrf_exempt
@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'POST':
        serializer = CategorySerializer(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status.HTTP_201_CREATED
                )
        return Response(
            serializer.data,
            status.HTTP_400_BAD_REQUEST
            )
