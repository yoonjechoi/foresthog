from django.urls import path

from accounts.views import SignupView, WhoAmIView

app_name = 'accounts'

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('whoami/', WhoAmIView.as_view(), name='whoami'),
]
