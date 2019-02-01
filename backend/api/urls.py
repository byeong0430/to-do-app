from django.urls import path
from . import views

urlpatterns = [
    path('categories', views.CategoryList.as_view(), name='category_list'),
    path('categories/<int:category_id>', views.CategoryDetail.as_view(), name='category_detail'),
    path('categories/<int:category_id>/tasks', views.CategoryTaskList.as_view(), name='category_task_list'),
    path('tasks', views.TaskList.as_view(), name='task_list'),
    path('tasks/<int:task_id>', views.TaskDetail.as_view(), name='task_detail')
]