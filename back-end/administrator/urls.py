from django.urls import path
from . import views



urlpatterns = [
    path('get_callbacks/', views.get_callback),
    path('delete_callback/<int:pk>/', views.delete_callback),
]
