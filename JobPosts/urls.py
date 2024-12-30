from django.urls import path
from .views import post_job, job_posts, profile, apply_job, update_profile, update_job_status

urlpatterns = [
    path("post_job/", post_job, name="post_job"),
    path("job_posts/", job_posts, name="job_posts"),
    path("job_posts/apply_job",apply_job, name="apply_job"),
    path("profile/", profile, name="profile"),
    path("profile/update_profile", update_profile, name="update_profile"),
    path("profile/update_job_status", update_job_status, name="update_job_status"),
]

