from datetime import timedelta

import pytest
from django.contrib.auth import get_user_model
from django.utils import timezone
from faker import Faker
from oauth2_provider.models import get_access_token_model, get_application_model
from rest_framework.test import APIClient


@pytest.fixture
def faker():
    fake = Faker()
    return fake


@pytest.fixture
def api_client():
    api_client = APIClient()
    return api_client


@pytest.fixture
def admin_user(faker):
    UserModel = get_user_model()
    admin = UserModel(username="admin", email="admin@foresthog")
    admin.set_password("adminadmin")
    admin.save()
    return admin


@pytest.fixture
def test_user(faker):
    profile = faker.profile()
    password = faker.password()
    UserModel = get_user_model()

    user = UserModel(username=profile['username'],
                     email=profile['mail'])
    user.set_password(password)
    user.save()

    return user


@pytest.fixture
def application(admin_user):
    Application = get_application_model()
    app = Application.objects.create(
        name="Test Application",
        user=admin_user,
        client_type=Application.CLIENT_CONFIDENTIAL,
        authorization_grant_type=Application.GRANT_AUTHORIZATION_CODE,
    )
    return app


@pytest.fixture
def access_token(test_user, application):
    AccessToken = get_access_token_model()
    token = AccessToken.objects.create(
        user=test_user,
        token="secret-access-token-key",
        expires=timezone.now() + timedelta(seconds=300),
        application=application
    )

    return token
