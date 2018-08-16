from django.urls import path

from .views import ImageView

app_name = 'images'

urlpatterns = [
    path('', ImageView.as_view(), name='feed'),
]
