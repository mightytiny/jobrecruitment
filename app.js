/* ---------- data dictionaries ---------- */
const PROV=[["pp","ភ្នំពេញ","Phnom Penh"],["bmc","បន្ទាយមានជ័យ","Banteay Meanchey"],["btb","បាត់ដំបង","Battambang"],["kpc","កំពង់ចាម","Kampong Cham"],["kpch","កំពង់ឆ្នាំង","Kampong Chhnang"],["kps","កំពង់ស្ពឺ","Kampong Speu"],["kpt","កំពង់ធំ","Kampong Thom"],["kam","កំពត","Kampot"],["kdl","កណ្ដាល","Kandal"],["kep","កែប","Kep"],["kkg","កោះកុង","Koh Kong"],["krt","ក្រចេះ","Kratie"],["mdk","មណ្ឌលគិរី","Mondulkiri"],["odm","ឧត្តរមានជ័យ","Oddar Meanchey"],["pln","ប៉ៃលិន","Pailin"],["psh","ព្រះសីហនុ","Preah Sihanouk"],["pvh","ព្រះវិហារ","Preah Vihear"],["pvg","ព្រៃវែង","Prey Veng"],["pst","ពោធិ៍សាត់","Pursat"],["rtk","រតនគិរី","Ratanakiri"],["sr","សៀមរាប","Siem Reap"],["stg","ស្ទឹងត្រែង","Stung Treng"],["svr","ស្វាយរៀង","Svay Rieng"],["tko","តាកែវ","Takeo"],["tkm","ត្បូងឃ្មុំ","Tboung Khmum"]];
const CAT=[["con","សំណង់","Construction"],["hos","បដិសណ្ឋារកិច្ច","Hospitality"],["ret","លក់រាយ","Retail"],["gar","កាត់ដេរ","Garment"],["drv","បើកបរ","Driving"],["dom","ការងារផ្ទះ","Domestic"],["it","ព័ត៌មានវិទ្យា","IT"],["adm","រដ្ឋបាល","Admin"],["agr","កសិកម្ម","Agriculture"]];
const EXP=[["0","គ្មានបទពិសោធន៍","No experience"],["1","១–៣ ឆ្នាំ","1–3 years"],["3","៣ ឆ្នាំឡើងទៅ","3+ years"]];
const TYPE=[["ft","ពេញម៉ោង","Full-time"],["pt","ក្រៅម៉ោង","Part-time"]];

const T={
 km:{nav_home:"ទំព័រដើម",nav_seeker:"ស្វែងរកការងារ",nav_employer:"ជ្រើសរើសបុគ្គលិក",nav_jobs:"ស្វែងរកការងារ",nav_workers:"រកកម្មករ",
  nav_login:"ចូល",nav_signup:"ចុះឈ្មោះ",nav_logout:"ចេញ",nav_myposts:"ប្រវត្តិរូប",tab_posts:"ប្រកាសរបស់ខ្ញុំ",
  eyebrow:"វេទិកាជ្រើសរើសបុគ្គលិកអាជីព",
  hero_h:"ភ្ជាប់ទេពកោសល្យកម្ពុជា ជាមួយឱកាសការងារ",hero_p:"វេទិកាដ៏ទុកចិត្តសម្រាប់អ្នកស្វែងរកការងារ និងនិយោជកនៅទូទាំងព្រះរាជាណាចក្រកម្ពុជា។",
  path_seeker_h:"ខ្ញុំស្វែងរកការងារ",path_seeker_p:"បង្កើតប្រវត្តិរូប និងស្វែងរកឱកាសការងារ",cta_register:"ចុះឈ្មោះ →",
  path_emp_h:"ខ្ញុំជ្រើសរើសបុគ្គលិក",path_emp_p:"ប្រកាសការងារ និងស្វែងរកបុគ្គលិក",cta_post:"ប្រកាសការងារ →",
  seeker_h:"ចុះឈ្មោះអ្នកស្វែងរកការងារ",seeker_sub:"បំពេញព័ត៌មានរបស់អ្នក",
  emp_h:"ប្រកាសការងារ",emp_sub:"បំពេញព័ត៌មានការងារ",
  jobs_h:"ស្វែងរកការងារ",jobs_sub:"ត្រងតាមប្រភេទ ខេត្ត ឬពាក្យគន្លឹះ",
  workers_h:"ស្វែងរកកម្មករ",workers_sub:"ត្រងតាមប្រភេទ ខេត្ត បទពិសោធន៍",
  login_h:"ចូលប្រើគណនី",login_sub:"ប្រើគណនីរបស់អ្នកដើម្បីប្រកាស",login_alt:"មិនទាន់មានគណនី? ចុះឈ្មោះថ្មី",
  login_forgot:"ភ្លេចពាក្យសម្ងាត់?",forgot_h:"កំណត់ពាក្យសម្ងាត់ឡើងវិញ",forgot_sub:"បញ្ចូលអ៊ីមែលរបស់អ្នក យើងនឹងផ្ញើតំណកំណត់ឡើងវិញ",
  forgot_btn:"ផ្ញើតំណកំណត់ឡើងវិញ",forgot_back:"← ត្រឡប់ទៅចូលប្រើ",
  forgot_sent:"✓ ប្រសិនបើមានគណនីសម្រាប់អ៊ីមែលនេះ យើងបានផ្ញើតំណកំណត់ឡើងវិញ។ សូមពិនិត្យប្រអប់សំបុត្រ (និងបន្ទប់ Spam)។",
  reset_h:"កំណត់ពាក្យសម្ងាត់ថ្មី",reset_sub:"បញ្ចូលពាក្យសម្ងាត់ថ្មីសម្រាប់គណនីរបស់អ្នក",reset_btn:"រក្សាទុកពាក្យសម្ងាត់ថ្មី",reset_done:"✓ បានធ្វើបច្ចុប្បន្នភាពពាក្យសម្ងាត់",
  signup_h:"បង្កើតគណនី",signup_sub:"ដើម្បីប្រកាសការងារ ឬប្រវត្តិរូប",signup_alt:"មានគណនីរួចហើយ? ចូលប្រើ",
  verify_h:"សូមពិនិត្យអ៊ីមែលរបស់អ្នក",verify_help:"ចុចលើតំណបញ្ជាក់ក្នុងអ៊ីមែល បន្ទាប់មកត្រឡប់មកវិញដើម្បីចូលប្រើ។ បើមិនឃើញ សូមពិនិត្យបន្ទប់ Spam។",
  verify_msg:"យើងបានផ្ញើតំណបញ្ជាក់ទៅ",
  myposts_h:"ប្រវត្តិរូបរបស់ខ្ញុំ",myposts_sub:"គ្រប់គ្រងព័ត៌មាន និងការងាររបស់អ្នក",
  myposts_profile:"ប្រកាសរបស់ខ្ញុំ",myposts_jobs:"ប្រកាសការងាររបស់ខ្ញុំ",myposts_empty:"អ្នកមិនទាន់មានព័ត៌មានឬប្រកាសទេ។",
  section_account_emp:"ប្រវត្តិរូបក្រុមហ៊ុនរបស់ខ្ញុំ",section_account_self:"ព័ត៌មានប្រវត្តិរូបរបស់ខ្ញុំ",section_posts:"ការងាររបស់ខ្ញុំ",
  add_listing:"+ បន្ថែមប្រកាស",add_job_listing:"+ បន្ថែមប្រកាសការងារ",
  f_full_name:"ឈ្មោះ",f_family_name:"នាមត្រកូល",f_telegram:"លេខ Telegram",
  f_contact_name:"ឈ្មោះអ្នកទំនាក់ទំនង",f_industry:"លេខ Telegram",f_location:"ទីតាំង",f_website:"គេហទំព័រ",
  need_company:"សូមបំពេញព័ត៌មានក្រុមហ៊ុនមុនពេលប្រកាសការងារ",
  no_account_emp:"អ្នកមិនទាន់មានព័ត៌មានក្រុមហ៊ុនទេ",no_account_seeker:"អ្នកមិនទាន់មានប្រវត្តិរូបការងារទេ",
  create_seeker_link:"បង្កើតប្រវត្តិរូបការងារ →",create_company_inline:"បំពេញព័ត៌មាននេះដើម្បីចាប់ផ្ដើមប្រកាសការងារ",
  modal_confirm_h:"បញ្ជាក់ការលុប",modal_yes_del:"លុប",
  role_q:"ខ្ញុំជា...",role_seeker:"អ្នកស្វែងរកការងារ",role_employer:"និយោជក",
  back_to_jobs:"← ត្រឡប់ទៅការងារ",back_to_workers:"← ត្រឡប់ទៅកម្មករ",job_description:"ការពិពណ៌នាការងារ",contact:"ទំនាក់ទំនង",
  contact_locked:"សូមចូលគណនីដើម្បីមើលព័ត៌មានទំនាក់ទំនង",
  delete_profile_btn:"លុបប្រវត្តិរូបរបស់ខ្ញុំ",
  delete_profile_warn_emp:"សកម្មភាពនេះនឹងលុបព័ត៌មានក្រុមហ៊ុន និងការងារទាំងអស់របស់អ្នកជាអចិន្ត្រៃយ៍។ មិនអាចត្រឡប់វិញបានទេ។",
  delete_profile_warn_seeker:"សកម្មភាពនេះនឹងលុបប្រវត្តិរូបការងាររបស់អ្នកជាអចិន្ត្រៃយ៍។ មិនអាចត្រឡប់វិញបានទេ។",
  f_name:"ឈ្មោះ",f_phone:"លេខទូរស័ព្ទ",f_email:"អ៊ីមែល",f_prov:"ខេត្ត",f_cat:"ប្រភេទការងារ",f_exp:"បទពិសោធន៍",
  f_esal:"ប្រាក់ខែរំពឹងទុក ($)",f_skills:"ជំនាញ / ប្រវត្តិសង្ខេប",f_submit:"ដាក់ស្នើ",saved:"✓ បានរក្សាទុក",
  f_company:"ឈ្មោះក្រុមហ៊ុន",f_title:"ចំណងជើងការងារ",f_type:"ប្រភេទ",f_smin:"ប្រាក់ខែ អប្បបរមា ($)",f_smax:"ប្រាក់ខែ អតិបរមា ($)",
  f_desc:"ការពិពណ៌នាការងារ",f_post:"ប្រកាសការងារ",posted:"✓ បានប្រកាស",
  f_password:"ពាក្យសម្ងាត់",f_password_confirm:"បញ្ជាក់ពាក្យសម្ងាត់",f_login_btn:"ចូល",f_signup_btn:"បង្កើតគណនី",
  btn_edit:"កែ",btn_delete:"លុប",btn_save:"រក្សាការផ្លាស់ប្ដូរ",btn_cancel:"បោះបង់",
  edit_profile_h:"កែប្រវត្តិរូបរបស់អ្នក",edit_job_h:"កែការងាររបស់អ្នក",
  confirm_del:"តើអ្នកប្រាកដជាចង់លុបប្រកាសនេះមែនទេ?",
  f_keyword:"ពាក្យគន្លឹះ",all:"ទាំងអស់",empty:"រកមិនឃើញលទ្ធផល",mo:"/ខែ",footer:"KarKhmer — គំរូបង្ហាញ",
  saving:"កំពុងរក្សាទុក...",err_required:"សូមបំពេញព័ត៌មានដែលត្រូវការ",err_email:"អ៊ីមែលមិនត្រឹមត្រូវ",err_phone:"លេខទូរស័ព្ទមិនត្រឹមត្រូវ",
  err_password:"ពាក្យសម្ងាត់ត្រូវមានយ៉ាងតិច ៦ តួ",err_password_match:"ពាក្យសម្ងាត់មិនដូចគ្នា",
  err_login:"អ៊ីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ",err_signup:"មិនអាចបង្កើតគណនីបាន",err_need_login:"សូមចូលប្រើដើម្បីប្រកាស",
  ago_today:"ថ្ងៃនេះ",ago_yesterday:"ម្សិលមិញ",ago_days:"ថ្ងៃមុន",ago_months:"ខែមុន",ago_years:"ឆ្នាំមុន"},
 en:{nav_home:"Home",nav_seeker:"Find work",nav_employer:"Hire",nav_jobs:"Find jobs",nav_workers:"Find workers",
  nav_login:"Log in",nav_signup:"Sign up",nav_logout:"Log out",nav_myposts:"Profile",tab_posts:"My posts",
  eyebrow:"Professional Recruitment Platform",
  hero_h:"Connecting Cambodian talent with opportunity",hero_p:"The trusted platform for job seekers and employers across the Kingdom of Cambodia.",
  path_seeker_h:"I'm looking for work",path_seeker_p:"Build a profile and discover opportunities",cta_register:"Register →",
  path_emp_h:"I'm hiring",path_emp_p:"Post jobs and find qualified candidates",cta_post:"Post a job →",
  seeker_h:"Job seeker sign-up",seeker_sub:"Fill in your details",
  emp_h:"Post a job",emp_sub:"Fill in the job details",
  jobs_h:"Search jobs",jobs_sub:"Filter by category, province or keyword",
  workers_h:"Search workers",workers_sub:"Filter by category, province, experience",
  login_h:"Log in",login_sub:"Use your account to post",login_alt:"No account yet? Sign up",
  login_forgot:"Forgot password?",forgot_h:"Reset your password",forgot_sub:"Enter your email and we'll send you a reset link",
  forgot_btn:"Send reset link",forgot_back:"← Back to log in",
  forgot_sent:"✓ If an account exists for that email, we've sent a reset link. Check your inbox (and spam).",
  reset_h:"Set a new password",reset_sub:"Enter a new password for your account",reset_btn:"Save new password",reset_done:"✓ Password updated",
  signup_h:"Create account",signup_sub:"To post jobs or your profile",signup_alt:"Already have an account? Log in",
  verify_h:"Check your email",verify_help:"Click the confirmation link in your email, then come back here to log in. If you don't see it, check your spam folder.",
  verify_msg:"We sent a confirmation link to",
  myposts_h:"My profile",myposts_sub:"Manage your account and jobs",
  myposts_profile:"My listings",myposts_jobs:"My job listings",myposts_empty:"Nothing here yet.",
  section_account_emp:"My company profile",section_account_self:"My profile info",section_posts:"My jobs",
  add_listing:"+ Add listing",add_job_listing:"+ Add job listing",
  f_full_name:"Name",f_family_name:"Family name",f_telegram:"Telegram number",
  f_contact_name:"Contact name",f_industry:"Telegram number",f_location:"Location",f_website:"Website",
  need_company:"Please complete your company info before posting a job",
  no_account_emp:"You don't have company info yet",no_account_seeker:"You don't have a job-seeker profile yet",
  create_seeker_link:"Create job-seeker profile →",create_company_inline:"Fill this in to start posting jobs",
  modal_confirm_h:"Confirm delete",modal_yes_del:"Delete",
  role_q:"I am a...",role_seeker:"Job seeker",role_employer:"Employer",
  back_to_jobs:"← Back to jobs",back_to_workers:"← Back to workers",job_description:"Description",contact:"Contact",
  contact_locked:"Log in to view contact details",
  delete_profile_btn:"Delete my profile",
  delete_profile_warn_emp:"This will permanently remove your company info and all your jobs. This cannot be undone.",
  delete_profile_warn_seeker:"This will permanently remove your job-seeker profile. This cannot be undone.",
  f_name:"Name",f_phone:"Phone",f_email:"Email",f_prov:"Province",f_cat:"Category",f_exp:"Experience",
  f_esal:"Expected salary ($)",f_skills:"Skills / short bio",f_submit:"Submit",saved:"✓ Saved",
  f_company:"Company name",f_title:"Job title",f_type:"Type",f_smin:"Salary min ($)",f_smax:"Salary max ($)",
  f_desc:"Job description",f_post:"Post job",posted:"✓ Posted",
  f_password:"Password",f_password_confirm:"Confirm password",f_login_btn:"Log in",f_signup_btn:"Create account",
  btn_edit:"Edit",btn_delete:"Delete",btn_save:"Save changes",btn_cancel:"Cancel",
  edit_profile_h:"Editing your profile",edit_job_h:"Editing your job",
  confirm_del:"Delete this post?",
  f_keyword:"Keyword",all:"All",empty:"No results found",mo:"/mo",footer:"KarKhmer — demo prototype",
  saving:"Saving...",err_required:"Please fill in all required fields",err_email:"Please enter a valid email",err_phone:"Please enter a valid phone number",
  err_password:"Password must be at least 6 characters",err_password_match:"Passwords do not match",
  err_login:"Invalid email or password",err_signup:"Could not create account",err_need_login:"Please log in to post",
  ago_today:"today",ago_yesterday:"yesterday",ago_days:"days ago",ago_months:"months ago",ago_years:"years ago"}
};

let lang="km";
const lab=arr=>arr[lang==="km"?1:2];

/* ---------- helpers ---------- */
// DEV: set to false before launching publicly. When true, accepts literal "email"/"phone" for fast testing.
const DEV=true;
const $=id=>document.getElementById(id);
const esc=s=>s==null?"":String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const EMAIL_RE=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE=/^[\d\s+\-()]{6,20}$/;
const validEmail=v=>(DEV&&v==="email")||EMAIL_RE.test(v);
const validPhone=v=>(DEV&&v==="phone")||PHONE_RE.test(v);
function timeAgo(iso){
  if(!iso)return"";
  const d=Math.floor((Date.now()-new Date(iso).getTime())/86400000);
  if(d<1)return T[lang].ago_today;
  if(d===1)return T[lang].ago_yesterday;
  if(d<30)return d+" "+T[lang].ago_days;
  const mo=Math.floor(d/30);
  if(mo<12)return mo+" "+T[lang].ago_months;
  return Math.floor(mo/12)+" "+T[lang].ago_years;
}

/* ---------- supabase client ---------- */
const SUPABASE_URL="https://xhgkcydmnydtnykjkoun.supabase.co";
const SUPABASE_KEY="sb_publishable_mgN6fq_78zOh7dgdPLkDog_ZnAv_HPY";
const sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

/* ---------- auth state ---------- */
let session=null;
let editMode=null; // null | {kind:"seeker"|"job", id, employer_id?}
let pendingNav=null; // page to return to after login
let pendingPostJob=false; // set when user tried Hire without an employer record
const userRole=()=>(session&&session.user&&session.user.user_metadata&&session.user.user_metadata.role)||null;

async function load(key){
  if(key==="seekers"){
    // Public list: phone/email are withheld from anon by RLS column grants, so
    // request only the non-contact columns. Contact info is shown on the detail
    // page to logged-in users only.
    const {data,error}=await sb.from("seekers")
      .select("id,name,province,category,experience_level,expected_salary,bio,created_at")
      .order("created_at",{ascending:false});
    if(error){console.error("load seekers:",error);return [];}
    return (data||[]).map(s=>({
      id:s.id,name:s.name,prov:s.province,cat:s.category,
      exp:s.experience_level,sal:s.expected_salary,bio:s.bio,created_at:s.created_at
    }));
  }
  if(key==="jobs"){
    const {data,error}=await sb.from("jobs")
      .select("*,employers(company_name,phone,email)")
      .order("created_at",{ascending:false});
    if(error){console.error("load jobs:",error);return [];}
    return (data||[]).map(j=>({
      id:j.id,co:j.employers?.company_name,phone:j.employers?.phone,email:j.employers?.email,
      title:j.title,cat:j.category,prov:j.province,type:j.employment_type,
      smin:j.salary_min,smax:j.salary_max,desc:j.description,created_at:j.created_at
    }));
  }
  return [];
}

/* ---------- build selects ---------- */
function fillSelect(el,arr,withAll){
  el.innerHTML="";
  if(withAll){const o=document.createElement("option");o.value="";o.textContent=T[lang].all;el.appendChild(o);}
  arr.forEach(a=>{const o=document.createElement("option");o.value=a[0];o.textContent=lab(a);el.appendChild(o);});
}
function buildSelects(){
  fillSelect(s_prov,PROV);fillSelect(s_cat,CAT);fillSelect(s_exp,EXP);
  fillSelect(e_prov,PROV);fillSelect(e_cat,CAT);fillSelect(e_type,TYPE);
  fillSelect(j_cat,CAT,1);fillSelect(j_prov,PROV,1);
  fillSelect(w_cat,CAT,1);fillSelect(w_prov,PROV,1);fillSelect(w_exp,EXP,1);
}

/* ---------- translation render ---------- */
function applyLang(){
  document.body.dataset.lang=lang;
  document.querySelectorAll("[data-t]").forEach(el=>{el.textContent=T[lang][el.dataset.t]||"";});
  setAccountSectionH();
  buildSelects();
  updateAuthUI();
  setSubmitText();
  renderJobs();renderWorkers();
  if(document.getElementById("myposts").classList.contains("show"))renderMyPosts();
}

// Top card on the profile page: "My company profile" for employers, "My profile info" for everyone else.
function setAccountSectionH(){
  const el=$("account_section_h");
  if(el)el.textContent=userRole()==="employer"?T[lang].section_account_emp:T[lang].section_account_self;
}

/* ---------- navigation ---------- */
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.toggle("show",p.id===id));
  document.querySelectorAll("nav button,[data-go]").forEach(b=>{
    if(b.dataset.go)b.classList.toggle("active",b.dataset.go===id);
  });
  window.scrollTo({top:0,behavior:"smooth"});
}
async function go(id){
  // Gate post forms behind login
  if((id==="seeker"||id==="employer")&&!session){
    pendingNav=id;
    return go("login");
  }
  if(id==="myposts"&&!session){
    pendingNav="myposts";
    return go("login");
  }
  // Role gate: silently ignore cross-role nav attempts
  const r=userRole();
  if(session&&r){
    if(id==="seeker"&&r==="employer")return;
    if(id==="employer"&&r==="seeker")return;
  }
  // Posting a job needs an employer record first — divert to Profile
  if(id==="employer"&&session&&!(editMode&&editMode.kind==="job")){
    const {data:emp}=await sb.from("employers").select("id").eq("user_id",session.user.id).maybeSingle();
    if(!emp){pendingPostJob=true;return go("myposts");}
  }
  showPage(id);
  if(id==="jobs")renderJobs();
  else if(id==="workers")renderWorkers();
  else if(id==="myposts"){await prepAccountForm();await renderMyPosts();updateDangerZone();}
  else if(id==="seeker")await prepSeekerForm();
  else if(id==="employer")await prepEmployerForm();
}
document.addEventListener("click",e=>{
  const g=e.target.closest("[data-go]");if(g){go(g.dataset.go);return;}
  const vj=e.target.closest("[data-view-job]");if(vj){viewJob(vj.dataset.viewJob);return;}
  const vs=e.target.closest("[data-view-seeker]");if(vs){viewSeeker(vs.dataset.viewSeeker);return;}
  const lb=e.target.closest(".lang button");if(lb){lang=lb.dataset.lang;
    document.querySelectorAll(".lang button").forEach(x=>x.classList.toggle("active",x===lb));applyLang();return;}
  const c=e.target.closest("[data-cancel]");if(c){cancelEdit(c.dataset.cancel);return;}
});

/* ---------- save handlers ---------- */
const num=v=>v===""||v==null?null:parseInt(v);
const trim=v=>(v||"").trim();

function showErr(errEl,msg){errEl.textContent=msg;errEl.classList.add("show");setTimeout(()=>errEl.classList.remove("show"),4000);}

async function withBusy(btn,fn){
  const orig=btn.textContent;
  btn.disabled=true;
  btn.textContent=T[lang].saving;
  try{return await fn();}
  finally{btn.disabled=false;btn.textContent=orig;}
}

const SAVE_ERR_ID={seeker:"s_err",employer:"e_err","account-emp":"ap_err"};
document.querySelectorAll("[data-save]").forEach(btn=>{
  btn.addEventListener("click",()=>withBusy(btn,async()=>{
    const kind=btn.dataset.save;
    if(!session){return showErr($(SAVE_ERR_ID[kind]),T[lang].err_need_login);}
    if(kind==="seeker")await saveSeeker();
    else if(kind==="account-emp")await saveAccountEmployer();
    else await saveEmployer();
  }));
});
$("del_profile_btn").addEventListener("click",deleteMyProfile);

async function saveSeeker(){
  const errEl=$("s_err");
  const name=trim($("s_name").value),phone=trim($("s_phone").value),email=trim($("s_email").value);
  const telegram=trim($("s_telegram").value);
  if(!name||!phone||!email||!$("s_prov").value||!$("s_cat").value||!$("s_exp").value)
    return showErr(errEl,T[lang].err_required);
  if(!validEmail(email))return showErr(errEl,T[lang].err_email);
  if(!validPhone(phone))return showErr(errEl,T[lang].err_phone);
  const payload={
    name,phone,email,telegram_phone:telegram||null,
    province:$("s_prov").value,category:$("s_cat").value,
    experience_level:$("s_exp").value,expected_salary:num($("s_sal").value),
    bio:trim($("s_bio").value)
  };
  let error;
  if(editMode&&editMode.kind==="seeker"){
    ({error}=await sb.from("seekers").update(payload).eq("id",editMode.id));
  }else{
    ({error}=await sb.from("seekers").insert({...payload,user_id:session.user.id}));
  }
  if(error){console.error("save seeker:",error);return showErr(errEl,error.message);}
  $("s_ok").classList.add("show");setTimeout(()=>$("s_ok").classList.remove("show"),2500);
  clearEditState();
  await renderWorkers();
  go("myposts");
}

async function saveEmployer(){
  const errEl=$("e_err");
  const title=trim($("e_title").value);
  if(!title||!$("e_cat").value||!$("e_prov").value||!$("e_type").value)
    return showErr(errEl,T[lang].err_required);
  const {data:emp}=await sb.from("employers").select("id").eq("user_id",session.user.id).maybeSingle();
  if(!emp){pendingPostJob=true;return go("myposts");}
  const jobPayload={
    title,category:$("e_cat").value,province:$("e_prov").value,
    employment_type:$("e_type").value,
    salary_min:num($("e_smin").value),salary_max:num($("e_smax").value),
    description:trim($("e_desc").value)
  };
  let error;
  if(editMode&&editMode.kind==="job"){
    ({error}=await sb.from("jobs").update(jobPayload).eq("id",editMode.id));
  }else{
    ({error}=await sb.from("jobs").insert({...jobPayload,user_id:session.user.id,employer_id:emp.id}));
  }
  if(error){console.error("save job:",error);return showErr(errEl,error.message);}
  $("e_ok").classList.add("show");setTimeout(()=>$("e_ok").classList.remove("show"),2500);
  clearEditState();
  await renderJobs();
  go("myposts");
}

async function saveAccountEmployer(){
  const errEl=$("ap_err");
  const co=trim($("ap_co").value),phone=trim($("ap_phone").value),email=trim($("ap_email").value);
  if(!co||!phone||!email)return showErr(errEl,T[lang].err_required);
  if(!validEmail(email))return showErr(errEl,T[lang].err_email);
  if(!validPhone(phone))return showErr(errEl,T[lang].err_phone);
  const payload={
    company_name:co,phone,email,
    contact_name:trim($("ap_contact").value)||null,
    industry:trim($("ap_industry").value)||null,
    location:trim($("ap_location").value)||null,
    website:trim($("ap_website").value)||null
  };
  const {data:emp}=await sb.from("employers").select("id").eq("user_id",session.user.id).maybeSingle();
  let error;
  if(emp){
    ({error}=await sb.from("employers").update(payload).eq("id",emp.id));
  }else{
    ({error}=await sb.from("employers").insert({...payload,user_id:session.user.id}));
  }
  if(error){console.error("save account-emp:",error);return showErr(errEl,error.message);}
  $("ap_ok").classList.add("show");setTimeout(()=>$("ap_ok").classList.remove("show"),2500);
  $("ap_hint").style.display="none";
  await renderJobs(); // company name shown in public listings
  updateDangerZone();
  if(pendingPostJob){
    pendingPostJob=false;
    $("need_company_banner").classList.remove("show");
    setTimeout(()=>go("employer"),700);
  }
}

/* ---------- form prep / edit mode ---------- */
function clearEditState(){
  editMode=null;
  $("s_edit_banner").classList.remove("show");
  $("e_edit_banner").classList.remove("show");
  ["s_name","s_phone","s_email","s_sal","s_bio","s_telegram"].forEach(id=>$(id).value="");
  ["e_title","e_smin","e_smax","e_desc"].forEach(id=>$(id).value="");
  setSubmitText();
}
function cancelEdit(){
  clearEditState();
  go("myposts");
}
function setSubmitText(){
  const sBtn=document.querySelector('[data-save="seeker"]');
  const eBtn=document.querySelector('[data-save="employer"]');
  if(sBtn)sBtn.textContent=editMode&&editMode.kind==="seeker"?T[lang].btn_save:T[lang].f_submit;
  if(eBtn)eBtn.textContent=editMode&&editMode.kind==="job"?T[lang].btn_save:T[lang].f_post;
}
async function prepSeekerForm(){
  // If user already has a profile and not explicitly editing, prefill and switch to edit mode
  if(!editMode){
    const {data}=await sb.from("seekers").select("*").eq("user_id",session.user.id).maybeSingle();
    if(data){
      editMode={kind:"seeker",id:data.id};
      $("s_name").value=data.name||"";$("s_phone").value=data.phone||"";$("s_email").value=data.email||"";
      $("s_telegram").value=data.telegram_phone||"";
      $("s_prov").value=data.province||"";$("s_cat").value=data.category||"";$("s_exp").value=data.experience_level||"";
      $("s_sal").value=data.expected_salary||"";$("s_bio").value=data.bio||"";
    }
  }
  $("s_edit_banner").classList.toggle("show",!!(editMode&&editMode.kind==="seeker"));
  $("e_edit_banner").classList.remove("show");
  setSubmitText();
}
async function prepEmployerForm(){
  // Employer record is guaranteed by go() before reaching here for new posts; edits pass through too.
  $("e_edit_banner").classList.toggle("show",!!(editMode&&editMode.kind==="job"));
  $("s_edit_banner").classList.remove("show");
  setSubmitText();
}

async function prepAccountForm(){
  $("need_company_banner").classList.toggle("show",!!pendingPostJob);
  if(!session)return;
  const r=userRole();
  setAccountSectionH();
  const isEmp=!r||r==="employer";
  $("account_emp_section").style.display=isEmp?"":"none";
  if(!isEmp)return;
  const {data:emp}=await sb.from("employers").select("*").eq("user_id",session.user.id).maybeSingle();
  const fields=[["ap_co","company_name"],["ap_contact","contact_name"],["ap_phone","phone"],
    ["ap_email","email"],["ap_industry","industry"],["ap_location","location"],["ap_website","website"]];
  if(emp){
    fields.forEach(([el,col])=>{$(el).value=emp[col]||"";});
    $("ap_hint").style.display="none";
  }else{
    fields.forEach(([el])=>{$(el).value="";});
    $("ap_hint").style.display="";
  }
}

/* ---------- my posts ---------- */
async function renderMyPosts(){
  const box=$("mp_content");
  if(!session){box.innerHTML="";return;}
  const uid=session.user.id;
  const r=userRole();
  const isSeeker=!r||r==="seeker";
  const isEmployer=r==="employer";
  const [seekerRes,jobsRes]=await Promise.all([
    isSeeker?sb.from("seekers").select("*").eq("user_id",uid).maybeSingle():Promise.resolve({data:null}),
    isEmployer?sb.from("jobs").select("*,employers(company_name,phone,email)").eq("user_id",uid).order("created_at",{ascending:false}):Promise.resolve({data:[]})
  ]);
  const seeker=seekerRes.data;
  const jobs=jobsRes.data||[];
  let html="";
  if(isSeeker){
    html+=`<div class="mp-head"><h3 class="mp-h">${esc(T[lang].myposts_profile)}</h3>
      <button class="btn-sm add" data-add-listing>${esc(T[lang].add_listing)}</button></div>`;
    if(seeker){
      const sal=seeker.expected_salary?`<span class="tag sal">$${esc(seeker.expected_salary)} ${esc(T[lang].mo)}</span>`:"";
      html+=`<div class="rc mp-card">
        <div class="t">${esc(seeker.name)}</div>
        <div class="m">${esc(seeker.phone||"")} · ${esc(seeker.email||"")}${seeker.telegram_phone?` · Telegram: ${esc(seeker.telegram_phone)}`:""}</div>
        <span class="tag">${esc(labelOf(CAT,seeker.category))}</span>
        <span class="tag">${esc(labelOf(PROV,seeker.province))}</span>
        <span class="tag">${esc(labelOf(EXP,seeker.experience_level))}</span>${sal}
        <div class="d">${esc(seeker.bio||"")}</div>
        <div class="mp-actions">
          <button class="btn-sm" data-edit-seeker="${esc(seeker.id)}">${esc(T[lang].btn_edit)}</button>
          <button class="btn-sm danger" data-del-seeker="${esc(seeker.id)}">${esc(T[lang].btn_delete)}</button>
        </div>
      </div>`;
    }else{
      html+=`<div class="empty">${esc(T[lang].myposts_empty)}</div>`;
    }
  }
  if(isEmployer){
    html+=`<div class="mp-head"><h3 class="mp-h">${esc(T[lang].myposts_jobs)}</h3>
      <button class="btn-sm add" data-add-job>${esc(T[lang].add_job_listing)}</button></div>`;
    if(jobs.length){
      html+=`<div class="cards">`;
      jobs.forEach(j=>{
        const sal=(j.salary_min||j.salary_max)?`<span class="tag sal">$${esc(j.salary_min||"?")}–${esc(j.salary_max||"?")} ${esc(T[lang].mo)}</span>`:"";
        const age=j.created_at?`<div class="age">${esc(timeAgo(j.created_at))}</div>`:"";
        html+=`<div class="rc mp-card">
          <div class="t">${esc(j.title)}</div>
          <div class="m">${esc(j.employers?.company_name||"")}</div>
          <span class="tag">${esc(labelOf(CAT,j.category))}</span>
          <span class="tag">${esc(labelOf(PROV,j.province))}</span>
          <span class="tag">${esc(labelOf(TYPE,j.employment_type))}</span>${sal}
          <div class="d">${esc(j.description||"")}</div>${age}
          <div class="mp-actions">
            <button class="btn-sm" data-edit-job="${esc(j.id)}">${esc(T[lang].btn_edit)}</button>
            <button class="btn-sm danger" data-del-job="${esc(j.id)}">${esc(T[lang].btn_delete)}</button>
          </div>
        </div>`;
      });
      html+=`</div>`;
    }else{
      html+=`<div class="empty">${esc(T[lang].myposts_empty)}</div>`;
    }
  }
  box.innerHTML=html;
  box.querySelectorAll("[data-add-listing]").forEach(b=>b.onclick=()=>{clearEditState();go("seeker");});
  box.querySelectorAll("[data-add-job]").forEach(b=>b.onclick=()=>{clearEditState();go("employer");});
  box.querySelectorAll("[data-edit-seeker]").forEach(b=>b.onclick=()=>editSeeker(b.dataset.editSeeker));
  box.querySelectorAll("[data-del-seeker]").forEach(b=>b.onclick=()=>delSeeker(b.dataset.delSeeker));
  box.querySelectorAll("[data-edit-job]").forEach(b=>b.onclick=()=>editJob(b.dataset.editJob));
  box.querySelectorAll("[data-del-job]").forEach(b=>b.onclick=()=>delJob(b.dataset.delJob));
}

async function editSeeker(id){
  const {data,error}=await sb.from("seekers").select("*").eq("id",id).single();
  if(error){console.error(error);return;}
  editMode={kind:"seeker",id};
  $("s_name").value=data.name||"";$("s_phone").value=data.phone||"";$("s_email").value=data.email||"";
  $("s_prov").value=data.province||"";$("s_cat").value=data.category||"";$("s_exp").value=data.experience_level||"";
  $("s_sal").value=data.expected_salary||"";$("s_bio").value=data.bio||"";
  showPage("seeker");
  $("s_edit_banner").classList.add("show");
  $("e_edit_banner").classList.remove("show");
  setSubmitText();
}
async function editJob(id){
  const {data,error}=await sb.from("jobs").select("*").eq("id",id).single();
  if(error){console.error(error);return;}
  editMode={kind:"job",id,employer_id:data.employer_id};
  $("e_title").value=data.title||"";
  $("e_cat").value=data.category||"";$("e_prov").value=data.province||"";$("e_type").value=data.employment_type||"";
  $("e_smin").value=data.salary_min||"";$("e_smax").value=data.salary_max||"";$("e_desc").value=data.description||"";
  showPage("employer");
  $("e_edit_banner").classList.add("show");
  $("s_edit_banner").classList.remove("show");
  setSubmitText();
}
async function delSeeker(id){
  if(!(await showModal(T[lang].confirm_del)))return;
  const {error}=await sb.from("seekers").delete().eq("id",id);
  if(error){console.error(error);return;}
  await renderWorkers();
  renderMyPosts();
}
async function delJob(id){
  if(!(await showModal(T[lang].confirm_del)))return;
  const {error}=await sb.from("jobs").delete().eq("id",id);
  if(error){console.error(error);return;}
  await renderJobs();
  renderMyPosts();
}

/* ---------- danger zone (delete profile) ---------- */
async function updateDangerZone(){
  const zone=$("danger_zone");
  if(!session){zone.hidden=true;return;}
  const r=userRole(),uid=session.user.id;
  let kind=null;
  if(r==="employer"||!r){
    const {data}=await sb.from("employers").select("id").eq("user_id",uid).maybeSingle();
    if(data)kind="employer";
  }
  if(!kind&&(r==="seeker"||!r)){
    const {data}=await sb.from("seekers").select("id").eq("user_id",uid).maybeSingle();
    if(data)kind="seeker";
  }
  if(!kind){zone.hidden=true;return;}
  zone.hidden=false;
  $("danger_warn").textContent=T[lang][kind==="employer"?"delete_profile_warn_emp":"delete_profile_warn_seeker"];
  $("del_profile_btn").textContent=T[lang].delete_profile_btn;
  $("del_profile_btn").dataset.deleteKind=kind;
}

async function deleteMyProfile(){
  const btn=$("del_profile_btn");
  const kind=btn.dataset.deleteKind;
  if(!kind||!session)return;
  const warnKey=kind==="employer"?"delete_profile_warn_emp":"delete_profile_warn_seeker";
  if(!(await showModal(T[lang][warnKey])))return;
  await withBusy(btn,async()=>{
    const table=kind==="employer"?"employers":"seekers";
    const {error}=await sb.from(table).delete().eq("user_id",session.user.id);
    if(error){console.error("delete profile:",error);return;}
    if(kind==="employer"){
      ["ap_co","ap_contact","ap_phone","ap_email","ap_industry","ap_location","ap_website"].forEach(id=>$(id).value="");
      $("ap_hint").style.display="";
      await renderJobs();
    }else{
      await renderWorkers();
    }
    go("home");
  });
}

/* ---------- modal ---------- */
function showModal(msg){
  return new Promise(resolve=>{
    const root=$("modal_root");
    $("modal_title").textContent=T[lang].modal_confirm_h;
    $("modal_msg").textContent=msg;
    $("modal_cancel").textContent=T[lang].btn_cancel;
    $("modal_ok").textContent=T[lang].modal_yes_del;
    root.hidden=false;
    const close=val=>{
      root.hidden=true;
      $("modal_cancel").onclick=null;
      $("modal_ok").onclick=null;
      root.onclick=null;
      document.removeEventListener("keydown",keyHandler);
      resolve(val);
    };
    const keyHandler=e=>{
      if(e.key==="Escape")close(false);
      else if(e.key==="Enter")close(true);
    };
    $("modal_cancel").onclick=()=>close(false);
    $("modal_ok").onclick=()=>close(true);
    root.onclick=e=>{if(e.target===root)close(false);};
    document.addEventListener("keydown",keyHandler);
    $("modal_ok").focus();
  });
}

/* ---------- auth ---------- */
async function initAuth(){
  // Recovery links land back here with a one-time session — read the hash before
  // supabase-js processes (and clears) it, so we can show the reset form.
  const recovering=/type=recovery/.test(window.location.hash);
  const {data}=await sb.auth.getSession();
  session=data.session;
  updateAuthUI();
  sb.auth.onAuthStateChange((event,s)=>{
    const wasLoggedIn=!!session;
    session=s;
    updateAuthUI();
    if(event==="PASSWORD_RECOVERY"){go("reset");return;}
    if(s&&!wasLoggedIn){
      const t=pendingNav;pendingNav=null;
      go(t||"home");
    }else if(!s&&wasLoggedIn){
      pendingPostJob=false;
      ["ap_co","ap_contact","ap_phone","ap_email","ap_industry","ap_location","ap_website"].forEach(id=>$(id).value="");
      $("mp_content").innerHTML="";
      go("home");
    }
  });
  if(recovering&&session)go("reset");
}
function updateAuthUI(){
  const auth=$("auth_area");
  if(!auth)return;
  if(session){
    auth.innerHTML=`
      <button data-go="myposts" class="auth-btn"></button>
      <button id="btn_logout" class="auth-btn ghost"></button>`;
    auth.querySelector('[data-go="myposts"]').textContent=T[lang].nav_myposts;
    $("btn_logout").textContent=T[lang].nav_logout;
    $("btn_logout").onclick=async()=>{await sb.auth.signOut();};
  }else{
    auth.innerHTML=`
      <button data-go="login" class="auth-btn ghost"></button>
      <button data-go="signup" class="auth-btn amber"></button>`;
    auth.querySelector('[data-go="login"]').textContent=T[lang].nav_login;
    auth.querySelector('[data-go="signup"]').textContent=T[lang].nav_signup;
  }
  updateRoleVisibility();
}

function updateRoleVisibility(){
  const r=userRole();
  const showSeeker=!session||!r||r==="seeker";
  const showEmployer=!session||!r||r==="employer";
  const apply=(sel,show)=>document.querySelectorAll(sel).forEach(el=>{el.style.display=show?"":"none";});
  apply('nav [data-go="seeker"]',showSeeker);
  apply('nav [data-go="employer"]',showEmployer);
  apply('.path[data-go="seeker"]',showSeeker);
  apply('.path[data-go="employer"]',showEmployer);
  const paths=document.querySelector('.paths');
  if(paths)paths.classList.toggle('compact',showSeeker!==showEmployer);
}

document.querySelectorAll("[data-auth]").forEach(btn=>{
  btn.addEventListener("click",()=>withBusy(btn,async()=>{
    const a=btn.dataset.auth;
    if(a==="login")await doLogin();
    else if(a==="forgot")await doForgot();
    else if(a==="reset")await doReset();
    else await doSignup();
  }));
});

async function doLogin(){
  const errEl=$("li_err");
  const email=trim($("li_email").value),pw=$("li_pw").value;
  if(!email||!pw)return showErr(errEl,T[lang].err_required);
  if(!validEmail(email))return showErr(errEl,T[lang].err_email);
  const {error}=await sb.auth.signInWithPassword({email,password:pw});
  if(error){console.error("login:",error);return showErr(errEl,T[lang].err_login);}
  $("li_pw").value="";
  // onAuthStateChange handles navigation via pendingNav
}
async function doSignup(){
  const errEl=$("su_err");
  const email=trim($("su_email").value),pw=$("su_pw").value,pw2=$("su_pw2").value;
  if(!email||!pw||!pw2)return showErr(errEl,T[lang].err_required);
  if(!validEmail(email))return showErr(errEl,T[lang].err_email);
  if(pw.length<6)return showErr(errEl,T[lang].err_password);
  if(pw!==pw2)return showErr(errEl,T[lang].err_password_match);
  const role=(document.querySelector('input[name="su_role"]:checked')||{}).value||"seeker";
  const {error}=await sb.auth.signUp({
    email,password:pw,
    options:{
      emailRedirectTo:window.location.origin+window.location.pathname,
      data:{role}
    }
  });
  if(error){console.error("signup:",error);return showErr(errEl,error.message||T[lang].err_signup);}
  $("verify_msg").textContent=`${T[lang].verify_msg} ${email}`;
  ["su_email","su_pw","su_pw2"].forEach(id=>$(id).value="");
  go("verify");
}
async function doForgot(){
  const errEl=$("fp_err");
  const email=trim($("fp_email").value);
  if(!email)return showErr(errEl,T[lang].err_required);
  if(!validEmail(email))return showErr(errEl,T[lang].err_email);
  const {error}=await sb.auth.resetPasswordForEmail(email,{
    redirectTo:window.location.origin+window.location.pathname
  });
  // A non-existent email returns no error (Supabase avoids account enumeration);
  // only real failures (e.g. rate limit) surface here.
  if(error){console.error("forgot:",error);return showErr(errEl,error.message);}
  $("fp_email").value="";
  $("fp_ok").classList.add("show");
}
async function doReset(){
  const errEl=$("rp_err");
  const pw=$("rp_pw").value,pw2=$("rp_pw2").value;
  if(!pw||!pw2)return showErr(errEl,T[lang].err_required);
  if(pw.length<6)return showErr(errEl,T[lang].err_password);
  if(pw!==pw2)return showErr(errEl,T[lang].err_password_match);
  // The recovery link established a session; updateUser sets the new password on it.
  const {error}=await sb.auth.updateUser({password:pw});
  if(error){console.error("reset:",error);return showErr(errEl,error.message);}
  ["rp_pw","rp_pw2"].forEach(id=>$(id).value="");
  $("rp_ok").classList.add("show");
  setTimeout(()=>{$("rp_ok").classList.remove("show");go("home");},1500);
}

/* ---------- search renderers ---------- */
const labelOf=(arr,id)=>{const f=arr.find(a=>a[0]===id);return f?lab(f):"";};
function card(html){const d=document.createElement("div");d.className="rc";d.innerHTML=html;return d;}
const KHMER_DIGITS="០១២៣៤៥៦៧៨៩";
const toKhmerNum=n=>String(n).replace(/\d/g,d=>KHMER_DIGITS[+d]);
function countLine(n,kind){
  if(lang==="km") return "មាន "+toKhmerNum(n)+" "+(kind==="jobs"?"ការងារ":"កម្មករ");
  const noun=kind==="jobs"?(n===1?"job":"jobs"):(n===1?"worker":"workers");
  return n+" "+noun+" found";
}

async function renderJobs(){
  const arr=await load("jobs");const box=$("j_results");box.innerHTML="";
  const kw=$("j_kw").value.toLowerCase(),c=$("j_cat").value,p=$("j_prov").value;
  const out=arr.filter(j=>(!c||j.cat===c)&&(!p||j.prov===p)&&
    (!kw||((j.title+" "+(j.desc||"")+" "+(j.co||"")).toLowerCase().includes(kw))));
  $("j_count").textContent=countLine(out.length,"jobs");
  if(!out.length){box.innerHTML=`<div class="empty">${esc(T[lang].empty)}</div>`;return;}
  out.forEach(j=>{
    const sal=(j.smin||j.smax)?`<span class="tag sal">$${esc(j.smin||"?")}–${esc(j.smax||"?")} ${esc(T[lang].mo)}</span>`:"";
    const age=j.created_at?`<div class="age">${esc(timeAgo(j.created_at))}</div>`:"";
    const div=card(
      `<div class="t">${esc(j.title)}</div><div class="m">${esc(j.co)}</div>
       <span class="tag">${esc(labelOf(CAT,j.cat))}</span><span class="tag">${esc(labelOf(PROV,j.prov))}</span>
       <span class="tag">${esc(labelOf(TYPE,j.type))}</span>${sal}
       <div class="d">${esc(j.desc)}</div>${age}`);
    div.classList.add("clickable");
    div.dataset.viewJob=j.id;
    box.appendChild(div);
  });
}
async function renderWorkers(){
  const arr=await load("seekers");const box=$("w_results");box.innerHTML="";
  const kw=$("w_kw").value.toLowerCase(),c=$("w_cat").value,p=$("w_prov").value,x=$("w_exp").value;
  const out=arr.filter(s=>(!c||s.cat===c)&&(!p||s.prov===p)&&(!x||s.exp===x)&&
    (!kw||((s.name+" "+(s.bio||"")).toLowerCase().includes(kw))));
  $("w_count").textContent=countLine(out.length,"workers");
  if(!out.length){box.innerHTML=`<div class="empty">${esc(T[lang].empty)}</div>`;return;}
  out.forEach(s=>{
    const sal=s.sal?`<span class="tag sal">$${esc(s.sal)} ${esc(T[lang].mo)}</span>`:"";
    const age=s.created_at?`<div class="age">${esc(timeAgo(s.created_at))}</div>`:"";
    const div=card(
      `<div class="t">${esc(s.name)}</div>
       <span class="tag">${esc(labelOf(CAT,s.cat))}</span><span class="tag">${esc(labelOf(PROV,s.prov))}</span>
       <span class="tag">${esc(labelOf(EXP,s.exp))}</span>${sal}
       <div class="d">${esc(s.bio)}</div>${age}`);
    div.classList.add("clickable");
    div.dataset.viewSeeker=s.id;
    box.appendChild(div);
  });
}
["j_kw","j_cat","j_prov"].forEach(id=>$(id).addEventListener("input",renderJobs));
["w_kw","w_cat","w_prov","w_exp"].forEach(id=>$(id).addEventListener("input",renderWorkers));

/* ---------- job detail ---------- */
async function viewJob(id){
  const {data,error}=await sb.from("jobs")
    .select("*,employers(company_name,phone,email,contact_name,location,website)")
    .eq("id",id).maybeSingle();
  if(error){console.error("view job:",error);return;}
  if(!data){go("jobs");return;}
  fillJobDetail(data);
  showPage("jobdetail");
}

function fillJobDetail(j){
  const emp=j.employers||{};
  $("jd_title").textContent=j.title||"";
  $("jd_meta").textContent=emp.company_name||"";
  const sal=(j.salary_min||j.salary_max)?`$${j.salary_min||"?"}–${j.salary_max||"?"} ${T[lang].mo}`:"";
  $("jd_tags").innerHTML=
    `<span class="tag">${esc(labelOf(CAT,j.category))}</span>`+
    `<span class="tag">${esc(labelOf(PROV,j.province))}</span>`+
    `<span class="tag">${esc(labelOf(TYPE,j.employment_type))}</span>`+
    (sal?`<span class="tag sal">${esc(sal)}</span>`:"");
  $("jd_age").textContent=j.created_at?timeAgo(j.created_at):"";
  $("jd_desc").textContent=j.description||"";
  const rows=[];
  const row=(k,v)=>`<div class="contact-row"><span class="k">${esc(T[lang][k])}</span><span class="v">${v}</span></div>`;
  if(emp.contact_name)rows.push(row("f_contact_name",esc(emp.contact_name)));
  if(emp.phone)rows.push(row("f_phone",`<a href="tel:${esc(emp.phone)}">${esc(emp.phone)}</a>`));
  if(emp.email)rows.push(row("f_email",`<a href="mailto:${esc(emp.email)}">${esc(emp.email)}</a>`));
  if(emp.location)rows.push(row("f_location",esc(emp.location)));
  if(emp.website){
    const url=/^https?:/i.test(emp.website)?emp.website:`https://${emp.website}`;
    rows.push(row("f_website",`<a href="${esc(url)}" target="_blank" rel="noopener">${esc(emp.website)}</a>`));
  }
  $("jd_contact").innerHTML=rows.join("")||`<div class="empty">—</div>`;
}

async function viewSeeker(id){
  // Contact columns are only readable by authenticated users (RLS column grants).
  // Request them only when logged in; anon visitors get a "log in to view" prompt.
  const cols=session
    ?"id,name,phone,email,province,category,experience_level,expected_salary,bio,created_at"
    :"id,name,province,category,experience_level,expected_salary,bio,created_at";
  const {data,error}=await sb.from("seekers").select(cols).eq("id",id).maybeSingle();
  if(error){console.error("view seeker:",error);return;}
  if(!data){go("workers");return;}
  fillSeekerDetail(data);
  showPage("seekerdetail");
}

function fillSeekerDetail(s){
  $("sd_title").textContent=s.name||"";
  const sal=s.expected_salary?`$${s.expected_salary} ${T[lang].mo}`:"";
  $("sd_tags").innerHTML=
    `<span class="tag">${esc(labelOf(CAT,s.category))}</span>`+
    `<span class="tag">${esc(labelOf(PROV,s.province))}</span>`+
    `<span class="tag">${esc(labelOf(EXP,s.experience_level))}</span>`+
    (sal?`<span class="tag sal">${esc(sal)}</span>`:"");
  $("sd_age").textContent=s.created_at?timeAgo(s.created_at):"";
  $("sd_bio").textContent=s.bio||"";
  if(!session){
    $("sd_contact").innerHTML=
      `<div class="contact-locked"><span>${esc(T[lang].contact_locked)}</span>`+
      `<button class="btn-sm" data-go="login">${esc(T[lang].nav_login)}</button></div>`;
    return;
  }
  const rows=[];
  const row=(k,v)=>`<div class="contact-row"><span class="k">${esc(T[lang][k])}</span><span class="v">${v}</span></div>`;
  if(s.phone)rows.push(row("f_phone",`<a href="tel:${esc(s.phone)}">${esc(s.phone)}</a>`));
  if(s.email)rows.push(row("f_email",`<a href="mailto:${esc(s.email)}">${esc(s.email)}</a>`));
  $("sd_contact").innerHTML=rows.join("")||`<div class="empty">—</div>`;
}

document.querySelectorAll(".page").forEach(page=>{
  if(["home","jobdetail","seekerdetail"].includes(page.id))return;
  const h2=page.querySelector(":scope > h2");
  if(!h2)return;
  const sub=page.querySelector(":scope > .sub");
  const band=document.createElement("div");
  band.className="page-band";
  page.insertBefore(band,h2);
  band.appendChild(h2);
  if(sub)band.appendChild(sub);
});

applyLang();
initAuth();
