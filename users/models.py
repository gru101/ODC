from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin


class UserDetailManager(BaseUserManager):
    """
    Custom manager for UserDetails model to handle user and superuser creation.
    """

    def create_user(self, email, contact_number, password=None, **extra_fields):
        """
        Create and save a regular user with the given email, contact_number, and password.
        """
        if not email:
            raise ValueError("The Email field is required.")
        if not contact_number:
            raise ValueError("The Contact Number field is required.")

        email = self.normalize_email(email)
        user = self.model(email=email, contact_number=contact_number, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, contact_number, password=None, **extra_fields):
        """
        Create and save a superuser with the given email, contact_number, and password.
        """
        extra_fields['is_staff'] = True
        extra_fields['is_superuser'] = True

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        
        print(extra_fields)

        return self.create_user(email=email, contact_number=contact_number, password=password, **extra_fields)


class UserDetails(AbstractBaseUser, PermissionsMixin):
    """
    Custom User model that extends AbstractBaseUser and includes role-based fields.
    """

    ROLE_CHOICES = [
        ('Manager', 'Manager'),
        ('Applicant', 'Applicant'),
    ]

    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)
    age = models.IntegerField(default=18)
    contact_number = models.BigIntegerField(unique=True)  # Changed to BigIntegerField
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=15, choices=ROLE_CHOICES)

    # Required fields for Django's admin
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'contact_number'
    REQUIRED_FIELDS = ['email']

    objects = UserDetailManager()

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.email} - {self.contact_number})"
