from django.urls import path

from accounts.views import SignupView

urlpattenrs = [
    path('signup/', SignupView.as_view(), name='signup')
]
