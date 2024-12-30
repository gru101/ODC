from django.urls import path
from .views import home, to_signup, to_signin

urlpatterns  =  [
    path("", home, name="home"),
    path("signup/", to_signup, name="signup"),
    path("signin/", to_signin, name="signin"),
]