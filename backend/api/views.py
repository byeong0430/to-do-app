from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import *
from .serializers import *

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
        return Response({'data': serializer.data})
