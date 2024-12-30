from django.db import models
from datetime import date
from django.utils.timezone import now

# JobPosts Model
class JobPosts(models.Model):
    Job_Role = models.CharField(max_length=100)
    Pay = models.IntegerField()
    State = models.CharField(max_length=100)
    City = models.CharField(max_length=100)
    Job_Description = models.TextField()
    Reporting_Address = models.TextField()
    Application_Exp_Date = models.DateField()
    Posted_Date = models.DateField(default=now)
    Manager = models.ForeignKey("ManagerProfile", on_delete=models.PROTECT, null=True, related_name="Job_Posts")

    def __str__(self):
        return f"{self.Job_Role} in {self.State}, {self.City} (Pay: {self.Pay})"

# ApplicantProfile Model
class ApplicantProfile(models.Model):
    Applicant = models.OneToOneField("users.UserDetails", on_delete=models.CASCADE, null=True)
    Skills = models.TextField(max_length=350, null=True, blank=True, default="Not Updated")

    def __str__(self):
        return f"Applicant: {self.Applicant} Skills: {self.Skills}"

class ManagerProfile(models.Model):
    Manager = models.OneToOneField("users.UserDetails", on_delete=models.CASCADE)
    Organization_Name = models.CharField(max_length=250, default="Not Updated")

# JobApplication Model
class JobApplication(models.Model):
    STATUS = [
        ("Accepted", "Accepted"),
        ("Rejected", "Rejected"),
        ("Pending", "Pending"),
    ]

    Manager = models.ForeignKey("ManagerProfile", on_delete=models.PROTECT)
    Applied_date = models.DateTimeField(default=now)
    Applied_app_id = models.ForeignKey("ApplicantProfile", on_delete=models.PROTECT, related_name="JobApplication")
    Job = models.ForeignKey("JobPosts", on_delete=models.PROTECT, related_name="JobApplication")
    Application_status = models.CharField(max_length=100, choices=STATUS, default="Pending")

    def __str__(self):
        return f"Application by Applicant ID {self.Applied_app_id} for Job ID {self.Job}"
