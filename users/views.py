from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import UserDetails
from django.urls import reverse
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages
from JobPosts.views import job_posts
from JobPosts.models import ApplicantProfile, ManagerProfile


def home(request):
    print(request)
    if request.method == "POST":
        button = request.POST.get("signup_button")
        if button == "to_signup":
            return redirect(reverse("signup"))
    return render(request=request, template_name="home_page.html")

def to_signup(request):
    if request.method == "POST":
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        age = request.POST.get("age")
        contact_number = request.POST.get("phone")
        role = request.POST.get("Roles")
        password = request.POST.get("password")
        email = request.POST.get("email")
        organization_name = request.POST.get("org_name")

        # Check if contact number already exists
        if UserDetails.objects.filter(contact_number=contact_number).exists():
            return HttpResponse("Contact number already registered. Please use a different one.")
        if UserDetails.objects.filter(email=email).exists():
            return HttpResponse("Email already registered. Please use a different one.")

        user = UserDetails(first_name=first_name, last_name=last_name, age=age, contact_number=contact_number, email=email, role=role)
        
        if(first_name != None and last_name != None and age != None and contact_number != None and organization_name != None and email != None and password != None):
            user.set_password(password)  # Hash the password
            user.save()
            if role=="Manager":
                manager_profile = ManagerProfile(Organization_Name=organization_name, Manager=user)
                manager_profile.save()
            else:
                applicant_profile = ApplicantProfile(Applicant=user)
                applicant_profile.save()
            
            return redirect(to_signin)

        return redirect(to_signin)

    return render(request=request, template_name="signup.html")

def to_signin(request):
    if request.method == "POST":
        contact_number = request.POST.get('mobile_number')
        password = request.POST.get('signin_password')

        # Authenticate using email and password
        user = authenticate(request, username=contact_number, password=password)
        if user is not None:
            login(request, user)
            return redirect(job_posts) 
        else:
            return HttpResponse("Invalid login credentials")

    return render(request=request, template_name="signin.html")