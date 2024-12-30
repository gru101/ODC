from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from .models import JobPosts, JobApplication, ApplicantProfile, ManagerProfile
from users.models import UserDetails
from django.contrib.auth import login, logout, authenticate
from django.db.models import query_utils




# Create your views here.
@login_required(redirect_field_name="signin", login_url="signin/")
def post_job(request):
    if request.method == "POST":
        job_role = request.POST.get("job_role")
        pay = request.POST.get("pay")
        state = request.POST.get("State")
        city = request.POST.get("City")
        job_description = request.POST.get("job_description")
        reporting_address = request.POST.get("address") 
        application_exp_date = request.POST.get("application_end_date")

        manager = UserDetails.objects.get(id=request.user.id)
        
        if(job_role != None and pay != None and state != None and city != None and job_description != None and reporting_address != None and application_exp_date != None):
            job = JobPosts(
                Job_Role = job_role,
                Pay = pay,
                State = state,
                City = city,
                Job_Description = job_description,
                Reporting_Address = reporting_address,
                Application_Exp_Date = application_exp_date,
                Manager=manager)
            job.save()
            return redirect(reverse("job_posts"))

    return render(request=request, template_name="post_job.html")
        

@login_required(redirect_field_name="signin", login_url="signin/")
def job_posts(request):
    job_ids = JobApplication.objects.filter(Applied_app_id__Applicant__id=request.user.id).values("Job_id")
    job_posts = JobPosts.objects.all()
        
    context = {
        "jobs": job_posts,
        "job_ids":job_ids,
    }

    if request.method == "POST" and ("City" in request.POST or "State" in request.POST):
        state = request.POST.get("State")
        city = request.POST.get("City")

        print(state, city)


        if state != "All" and city == "All":
            job_posts = JobPosts.objects.filter(State=state)
        elif state != "All" and city != "All":
            job_posts = JobPosts.objects.filter(State=state, City=city)
        elif state != "All":
            job_posts = JobPosts.objects.filter(State=state)

        context = {
            "jobs": job_posts,
            "job_ids":job_ids,
        }

        return render(request=request, template_name="Job_postings.html", context=context)
            
    context = {
        "jobs": job_posts,
        "job_ids":job_ids,
    }

    return render(request=request, template_name="Job_postings.html", context=context)


@login_required(redirect_field_name="signin", login_url="signin/")
def apply_job(request):
    if request.method == "POST" and "job_id" in request.POST:
        job_id = request.POST.get("job_id")
        user_id = request.user.id
        # When the user applies for the job there will be only a single job.
        # That's why [0]['manager_id']. 
        manager = JobPosts.objects.filter(id=job_id)[0].Manager
        applicant = ApplicantProfile.objects.get(Applicant_id=user_id)
        job = JobPosts.objects.get(id=job_id)
        job_application = JobApplication(Manager=manager, Applied_app_id=applicant, Job=job)
        job_application.save()

        return redirect(reverse('job_posts'))

def update_job_status(request):
    if request.method == "POST":
        application_id = request.POST.get("application_id")
        application_status = request.POST.get("application_status")

        job_application = JobApplication.objects.get(id=application_id)
        job_application.Application_status = application_status
        job_application.save()

        return redirect("profile")


@login_required(redirect_field_name="signin", login_url="signin/")
def profile(request):
    if request.user.role == "Applicant":
        logout_button = request.POST.get("Logout")
        if logout_button == "Logout":
            logout(request)
            return redirect("signin")
    
        job_applications = JobApplication.objects.filter(Applied_app_id__Applicant=request.user.id).values("Job")
        jobs = JobPosts.objects.filter(id__in=[row["Job"] for row in job_applications])
        skills = ApplicantProfile.objects.filter(Applicant_id=request.user.id).values("Skills")[0]["Skills"]

        return render(request=request, template_name="applicant_profile.html", context={"user": request.user , "jobs":jobs, "skills":skills})
    
    elif request.user.role == "Manager":
        logout = request.POST.get("Logout")
        if logout == "Logout":
            return redirect(reverse("signin"))
        
        # get all the applicant profile id from JobApplication table where the 
        # manager_id is equal to user_id
        manager_id = ManagerProfile.objects.filter(Manager__id=request.user.id)[0].id
        org_name = ManagerProfile.objects.filter(Manager__id=request.user.id)[0].Organization_Name
        print(org_name)
        jobs_posted = JobPosts.objects.filter(Manager=manager_id)
        applications = JobApplication.objects.filter(Manager_id=manager_id).values("Applied_app_id")
        print(type(applications))
        applicants = JobApplication.objects.filter(Manager_id=manager_id).select_related("Applied_app_id","Job").values("Applied_app_id__Applicant__id",
                                                                                    "Applied_app_id__Applicant__first_name",
                                                                                    "Applied_app_id__Applicant__last_name",
                                                                                    "Applied_app_id__Applicant__contact_number" , 
                                                                                    "Applied_app_id__Skills",
                                                                                    "Job__id",
                                                                                    "Job__Posted_Date",
                                                                                    "Application_status",
                                                                                    "id")

        return render(request=request, template_name="manager_profile.html", context={"user": request.user,"org_name":org_name, "jobs":jobs_posted, "applicants":applicants})
    
    
@login_required(redirect_field_name="signin", login_url="signin/")
def update_profile(request):
    user_id = request.user.id
    if request.method == "POST" and "skills" in request.POST:
        updated_skills = request.POST.get("skills")
        user = UserDetails.objects.get(id=user_id)
        profile = ApplicantProfile.objects.get(Applicant_id=user)
        profile.Skills=updated_skills
        profile.save()      

        return redirect(reverse("profile"))
    
    if request.method == "POST" and "new_org_name" in request.POST:
        updated_org_name = request.POST.get("new_org_name")
        user_profile=UserDetails.objects.get(id=request.user.id)
        user_profile.Organization_name=updated_org_name
        user_profile.save()

    if request.method ==  "POST" and ("new_email" in request.POST or "new_number" in request.POST):
        updated_email = request.POST.get("new_email")
        updated_contact_number = request.POST.get("new_number")

        user_details = UserDetails.objects.all()
        user = UserDetails.objects.get(id=request.user.id)

        if len(updated_email.strip()) == 0 and len(updated_contact_number.strip()) != 0:
            number_check = user_details.filter(contact_number=updated_contact_number).exists()
            if number_check==True:
                return render(request=request, template_name="applicant_profile.html", context={"number_exists":number_check})
            else:
                user.contact_number = updated_contact_number
                user.save()
        elif len(updated_contact_number.strip()) == 0 and len(updated_email.strip()) != 0:
            email_check = user_details.filter(email=updated_email).exists()
            if email_check==True:
                return render(request=request, template_name="applicant_profile.html", context={"email_exists":email_check})
            else:
                user.email = updated_email
                user.save()
        else:
            user.email=updated_email
            user.contact_number=updated_contact_number
            
        user.save()

        return redirect(reverse("profile"))

    return redirect(reverse("profile"))

        

