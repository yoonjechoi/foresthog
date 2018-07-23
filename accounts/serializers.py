from rest_framework import serializers


class SignupSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=128)
    username = serializers.CharField(max_length=32)
    password = serializers.CharField(max_length=16)


class UserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=32)
