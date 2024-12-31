const posted_jobs = document.querySelector('#posted_jobs');
const applicants_container = document.querySelector('#applied_applicants');

const applicants_section = document.querySelector(".Applicants");
const job_section = document.querySelector(".jobs");

const show_applicant_button = document.querySelectorAll(".Show_applicant_button")
show_applicant_button.forEach((button)=>{
    console.log(button)
})
// console.log(show_applicant_button)
// console.log(show_applicant_button[0].value)


document.addEventListener("DOMContentLoaded",()=>{
    // Initially hide both sections
applicants_section.classList.add('hidden');

posted_jobs.addEventListener('click', () => {
    posted_jobs.style.background = 'blue';
    posted_jobs.style.color = 'white';
    applicants_container.style.background = 'white';
    applicants_container.style.color = 'black';

    job_section.classList.add('hidden');
    // Toggle visibility for the jobs section
    job_section.classList.toggle('hidden');
    // Ensure applicants section is hidden
    applicants_section.classList.add('hidden');

applicants_container.addEventListener('click', () => {
    applicants_container.style.background = 'blue';
    applicants_container.style.color = 'white';
    posted_jobs.style.background = 'white';
    posted_jobs.style.color = 'black';

    applicants_section.classList.add('hidden');
    job_section.classList.add('hidden');
    // Toggle visibility for the applicants section
    applicants_section.classList.toggle('hidden');
    // Ensure jobs section is hidden
    job_section.classList.add('hidden');
});

show_applicant_button.forEach((button)=>{
    button.addEventListener("click",()=>{
        const job_id = button.value 
        console.log(job_id)
        const applicants = document.querySelectorAll('.applicant')
        applicants.forEach((applicant)=>{
            applicant.classList.add("hidden");
        });
        const visible_jobs = document.querySelectorAll(`.job${job_id}`);
        visible_jobs.forEach((visible_job)=>{
            visible_job.classList.remove("hidden");
        })
        
    })
})
});
})
