const state_and_cities = {"Andaman and Nicobar Islands": ["All","Nicobars", "North And Middle Andaman", "South Andamans" ],
    "Andhra Pradesh": ["All","Alluri Sitharama Raju", "Anakapalli", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor", "Dr. B.R. Ambedkar Konaseema", "East Godavari", "Eluru", "Guntur", "Kakinada", "Krishna", "Kurnool", "Nandyal", "Ntr", "Palnadu", "Parvathipuram Manyam", "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam", "Tirupati", "Visakhapatnam", "Vizianagaram", "West Godavari" ], 
    "Arunachal Pradesh": ["All","Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kra Daadi", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Subansiri", "Namsai", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang" ], 
    "Assam": ["All","Bajali", "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metro", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli" ], 
    "Bihar": ["All","Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur (Bhabua)", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Pashchim Champaran" ], 
    "Chandigarh": ["All","Chandigarh" ], 
    "Chhattisgarh": ["All","Balod", "Balodabazar-Bhatapara", "Balrampur-Ramanujganj", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dakshin Bastar Dantewada", "Dhamtari", "Durg", "Gariyaband", "Gaurela-Pendra-Marwahi", "Janjgir-Champa", "Jashpur", "Kabeerdham", "Kondagaon", "Korba", "Korea", "Mahasamund", "Mohla-Manpur-Ambagarh Chouki", "Mungeli", "Narayanpur", "Raigarh" ], 
    "Dadra and Nagar Haveli and Daman and Diu": ["All","Dadra And Nagar Haveli", "Daman", "Diu" ], 
    "Delhi": ["All","Central", "East", "New Delhi", "North", "North East", "North West", "Shahdara", "South", "South East", "South West", "West" ], 
    "Goa": ["All","North Goa","South Goa","Canacona","Dharbandora","Mormugao","Ponda","Quepem","Salcete","Sanguem","Bardez","Bicholim","Pernem","Satari","Tiswadi" ], 
    "Gujarat": ["All","Ahmedabad", "Amreli", "Anand", "Arvalli", "Banas Kantha", "Bharuch", "Bhavnagar", "Botad", "Chhotaudepur", "Dahod", "Dangs", "Devbhumi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kachchh", "Kheda", "Mahesana", "Mahisagar", "Morbi", "Narmada", "Navsari", "Panch Mahals", "Patan" ], 
    "Haryana": ["All","Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar" ], 
    "Himachal Pradesh": ["All","Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul And Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una" ], 
    "Jammu and Kashmir": ["All","Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur" ], 
    "Jharkhand": ["All","Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Saraikela Kharsawan", "Simdega", "West Singhbhum" ], 
    "Karnataka": ["All","Bagalkote", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapura", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga" ], 
    "Kerala": ["All","Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad" ], 
    "Ladakh": ["All","Kargil", "Leh Ladakh" ], 
    "Lakshadweep": ["All","Lakshadweep District" ], 
    "Madhya Pradesh": ["All","Agar-Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa (East Nimar)" ], 
    "Maharashtra": ["All","Ahilyanagar", "Akola", "Amravati", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Chhatrapati Sambhajinagar", "Dharashiv", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Palghar", "Parbhani","Pune" ], 
    "Manipur": ["All","Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Kakching", "Kamjong", "Kangpokpi", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul" ], 
    "Meghalaya": ["All","East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills" ], 
    "Mizoram": ["All","Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Serchhip", "Siaha" ], 
    "Nagaland": ["All","Chumoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Noklak", "Peren", "Phek", "Shamator", "Tseminyu", "Tuensang", "Wokha", "Zunheboto" ], 
    "Odisha": ["All","Anugul", "Balangir", "Baleshwar", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghapur", "Jajapur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada" ], 
    "Puducherry": ["All","Karaikal", "Puducherry" ], 
    "Punjab": ["All","Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Malerkotla", "Mansa", "Moga", "Pathankot", "Patiala", "Rupnagar", "S.A.S Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Sri Muktsar Sahib", "Tarn Taran" ], 
    "Rajasthan": ["All","Ajmer", "Alwar", "Anupgarh", "Balotra", "Banswara", "Baran", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Deeg", "Dholpur", "Dudu", "Dungarpur", "Ganganagar", "Gangapurcity", "Hanumangarh", "Jaipur" ], 
    "Sikkim": ["All","Mangan", "Soreng" ], 
    "Tamil Nadu": ["All","Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Kanniyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Tenkasi", "Thanjavur" ], 
    "Telangana": ["All","Adilabad", "Bhadradri Kothagudem", "Hanumakonda", "Hyderabad", "Jagitial", "Jangoan", "Jayashankar Bhupalapally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla" ], 
    "Tripura": ["All","Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura" ], 
    "Uttar Pradesh": ["All","Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Bara Banki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah" ], 
    "Uttarakhand": ["All","Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudra Prayag", "Tehri Garhwal", "Udam Singh Nagar", "Uttar Kashi" ], 
    "West Bengal": ["All","Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur" ]}
  
  const select = document.querySelector('#States');
  const cities = document.querySelector('#Cities');
  
  if(select !== "All"){
    select.addEventListener('change', (event) => {
      console.log(select.value)
      let corresponding_cities = state_and_cities[select.value];
  
      cities.innerHTML = '';
  
      for(let city of corresponding_cities){
        let option = document.createElement('option');
        option.text = city;
        option.value = city;
        cities.appendChild(option);
        console.log(option);
      }
    });
  }


// If the user has already applied for the job then the button for appliying will be 
// disabled and background color will be changed.
const job_apply_buttons = document.querySelectorAll(".job_apply_button")
const applied_jobs = document.querySelectorAll(".applied_job")

applied_jobs.forEach((job)=>{
  job_apply_buttons.forEach((button)=>{
    job_id = job.value  
    if(button.value.slice(4) === job_id){
      button.style.backgroundColor = "hsl(0, 0%, 85%)";
      button.textContent = "Applied";
      button.disabled = true;
    }
  })
})


document.querySelectorAll('.job_apply_button').forEach((apply_button) => {
    apply_button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevents the form from submitting immediately
      const jobs = document.querySelector('.Jobs');
      jobs.classList.add('hidden');

      let form_id = `#${apply_button.value}`;
      console.log(form_id)
      console.log(typeof(form_id))
      const form = document.querySelector(form_id);

      console.log(form)

      // Create confirmation message box
      const message_box = document.createElement('div');
      message_box.classList.add("confirm_message");
      message_box.innerHTML = "<p>Are you sure you want to apply for this job?</p>";
  
      // Create Yes and No buttons
      const yes_button = document.createElement('button');
      yes_button.id = "yes_button";
      yes_button.textContent = "Yes";
  
      const no_button = document.createElement('button');
      no_button.id = "no_button";
      no_button.textContent = "No";
  
      // Create a container for Yes and No buttons
      const yes_no_buttons = document.createElement('div');
      yes_no_buttons.class = "yes_no_buttons"
      yes_no_buttons.appendChild(yes_button);
      yes_no_buttons.appendChild(no_button);
  
      // Add buttons to message box
      message_box.appendChild(yes_no_buttons);
  
      // Append the message box to the body or a parent container
      document.body.appendChild(message_box);
  
      // Handle Yes button click
      yes_button.addEventListener('click', () => {
        document.body.removeChild(message_box); // Remove confirmation box
        jobs.classList.remove("hidden");
        form.submit()
      });
  
      // Handle No button click
      no_button.addEventListener('click', () => {
        document.body.removeChild(message_box); // Remove confirmation box
        jobs.classList.remove("hidden");
      });
  
    });
  });
  

const user_role = document.querySelector("#role").value 
const apply_buttons = document.querySelectorAll(".job_apply_button")

if(user_role === "Manager"){
  apply_buttons.forEach((button)=>{
    button.classList.add("hidden")
  })
}