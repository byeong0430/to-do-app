from django.urls import path
from . import views

urlpatterns = [
    path('tasks', views.task_list, name='task'),
    path('categories', views.category_list, name='category')
]