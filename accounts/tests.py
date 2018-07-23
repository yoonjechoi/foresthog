import pytest
from django.contrib import auth
from rest_framework import status
from rest_framework.reverse import reverse


@pytest.mark.django_db
def test_signup_success(faker, api_client):
    # Given:
    profile = faker.profile()
    username = profile['username']
    email = profile['mail']
    password = faker.password()

    user_model = auth.get_user_model()
    before_user_count = user_model.objects.count()

    # When:
    url = reverse('accounts:signup')
    data = {
        'username': username,
        'email': email,
        'password': password
    }

    response = api_client.post(url, data)

    # Then:
    assert 201 == response.status_code
    response_data = response.data
    assert username == response_data['username']
    assert email == response_data['email']
    assert 'password' not in response_data

    assert before_user_count + 1 == user_model.objects.count()


@pytest.mark.django_db
def test_whoami_success(access_token, api_client):
    # Given:
    user = access_token.user

    # When:
    url = reverse('accounts:whoami')
    response = api_client.post(url, HTTP_AUTHORIZATION=f"Bearer {access_token.token}")

    # Then:
    assert response.status_code == status.HTTP_200_OK
    assert user.username == response.data['username']


@pytest.mark.django_db
def test_whoami_fail(api_client):
    # Given:

    # When:
    url = reverse('accounts:whoami')
    response = api_client.post(url, HTTP_AUTHORIZATION=f"Bearer {abcd1234}")

    # Then:
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
