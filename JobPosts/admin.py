from django.contrib import admin
from .models import JobPosts, ApplicantProfile,ManagerProfile, JobApplication
# Register your models here.
admin.site.register(JobPosts)
admin.site.register(ApplicantProfile)
admin.site.register(JobApplication)
admin.site.register(ManagerProfile)