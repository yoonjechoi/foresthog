from django.contrib import auth
# Create your views here.
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from accounts.serializers import SignupSerializer


class SignupView(CreateAPIView):
    serializer_class = SignupSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        user_model = auth.get_user_model()
        return user_model.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        raw_data = serializer.data
        raw_data.pop('password', None)
        headers = self.get_success_headers(raw_data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        validated_data = serializer.validated_data
        username = validated_data['username']
        password = validated_data['password']
        email = validated_data['email']

        user_model = auth.get_user_model()
        user = user_model(username=username, email=email)
        user.set_password(password)
        user.save()


