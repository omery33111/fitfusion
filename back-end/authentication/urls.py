from django.urls import path
from . import views



urlpatterns = [
    path('', views.index),
    path('login/', views.MyTokenObtainPairView.as_view(), name = 'token_obtain_pair'),
]