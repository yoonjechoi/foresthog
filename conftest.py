import pytest
from faker import Faker
from rest_framework.test import APIClient

@pytest.fixture
def faker():
    fake = Faker()
    return fake

@pytest.fixture
def api_client():
    api_client = APIClient()
    return api_client
