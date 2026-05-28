/* ---------- data dictionaries ---------- */
const PROV=[["pp","ភ្នំពេញ","Phnom Penh"],["bmc","បន្ទាយមានជ័យ","Banteay Meanchey"],["btb","បាត់ដំបង","Battambang"],["kpc","កំពង់ចាម","Kampong Cham"],["kpch","កំពង់ឆ្នាំង","Kampong Chhnang"],["kps","កំពង់ស្ពឺ","Kampong Speu"],["kpt","កំពង់ធំ","Kampong Thom"],["kam","កំពត","Kampot"],["kdl","កណ្ដាល","Kandal"],["kep","កែប","Kep"],["kkg","កោះកុង","Koh Kong"],["krt","ក្រចេះ","Kratie"],["mdk","មណ្ឌលគិរី","Mondulkiri"],["odm","ឧត្តរមានជ័យ","Oddar Meanchey"],["pln","ប៉ៃលិន","Pailin"],["psh","ព្រះសីហនុ","Preah Sihanouk"],["pvh","ព្រះវិហារ","Preah Vihear"],["pvg","ព្រៃវែង","Prey Veng"],["pst","ពោធិ៍សាត់","Pursat"],["rtk","រតនគិរី","Ratanakiri"],["sr","សៀមរាប","Siem Reap"],["stg","ស្ទឹងត្រែង","Stung Treng"],["svr","ស្វាយរៀង","Svay Rieng"],["tko","តាកែវ","Takeo"],["tkm","ត្បូងឃ្មុំ","Tboung Khmum"]];
const CAT=[["con","សំណង់","Construction"],["hos","បដិសណ្ឋារកិច្ច","Hospitality"],["ret","លក់រាយ","Retail"],["gar","កាត់ដេរ","Garment"],["drv","បើកបរ","Driving"],["dom","ការងារផ្ទះ","Domestic"],["it","ព័ត៌មានវិទ្យា","IT"],["adm","រដ្ឋបាល","Admin"],["agr","កសិកម្ម","Agriculture"]];
const EXP=[["0","គ្មានបទពិសោធន៍","No experience"],["1","១–៣ ឆ្នាំ","1–3 years"],["3","៣ ឆ្នាំឡើងទៅ","3+ years"]];
const TYPE=[["ft","ពេញម៉ោង","Full-time"],["pt","ក្រៅម៉ោង","Part-time"]];

const T={
 km:{nav_home:"ទំព័រដើម",nav_seeker:"ស្វែងរកការងារ",nav_employer:"ជ្រើសរើសបុគ្គលិក",nav_jobs:"ការងារទំនេរ",nav_workers:"រកកម្មករ",
  eyebrow:"វេទិកាជ្រើសរើសបុគ្គលិកអាជីព",
  hero_h:"ភ្ជាប់ទេពកោសល្យកម្ពុជា ជាមួយឱកាសការងារ",hero_p:"វេទិកាដ៏ទុកចិត្តសម្រាប់អ្នកស្វែងរកការងារ និងនិយោជកនៅទូទាំងព្រះរាជាណាចក្រកម្ពុជា។",
  path_seeker_h:"ខ្ញុំស្វែងរកការងារ",path_seeker_p:"បង្កើតប្រវត្តិរូប និងស្វែងរកឱកាសការងារ",cta_register:"ចុះឈ្មោះ →",
  path_emp_h:"ខ្ញុំជ្រើសរើសបុគ្គលិក",path_emp_p:"ប្រកាសការងារ និងស្វែងរកបុគ្គលិក",cta_post:"ប្រកាសការងារ →",
  seeker_h:"ចុះឈ្មោះអ្នកស្វែងរកការងារ",seeker_sub:"បំពេញព័ត៌មានរបស់អ្នក",
  emp_h:"និយោជក — ប្រកាសការងារ",emp_sub:"បំពេញព័ត៌មានក្រុមហ៊ុន និងការងារ",
  jobs_h:"ស្វែងរកការងារ",jobs_sub:"ត្រងតាមប្រភេទ ខេត្ត ឬពាក្យគន្លឹះ",
  workers_h:"ស្វែងរកកម្មករ",workers_sub:"ត្រងតាមប្រភេទ ខេត្ត បទពិសោធន៍",
  f_name:"ឈ្មោះ",f_phone:"លេខទូរស័ព្ទ",f_email:"អ៊ីមែល",f_prov:"ខេត្ត",f_cat:"ប្រភេទការងារ",f_exp:"បទពិសោធន៍",
  f_esal:"ប្រាក់ខែរំពឹងទុក ($)",f_skills:"ជំនាញ / ប្រវត្តិសង្ខេប",f_submit:"ដាក់ស្នើ",saved:"✓ បានរក្សាទុក",
  f_company:"ឈ្មោះក្រុមហ៊ុន",f_title:"ចំណងជើងការងារ",f_type:"ប្រភេទ",f_smin:"ប្រាក់ខែ អប្បបរមា ($)",f_smax:"ប្រាក់ខែ អតិបរមា ($)",
  f_desc:"ការពិពណ៌នាការងារ",f_post:"ប្រកាសការងារ",posted:"✓ បានប្រកាស",
  f_keyword:"ពាក្យគន្លឹះ",all:"ទាំងអស់",empty:"រកមិនឃើញលទ្ធផល",mo:"/ខែ",footer:"KarKhmer — គំរូបង្ហាញ",
  saving:"កំពុងរក្សាទុក...",err_required:"សូមបំពេញព័ត៌មានដែលត្រូវការ",err_email:"អ៊ីមែលមិនត្រឹមត្រូវ",err_phone:"លេខទូរស័ព្ទមិនត្រឹមត្រូវ",
  ago_today:"ថ្ងៃនេះ",ago_yesterday:"ម្សិលមិញ",ago_days:"ថ្ងៃមុន",ago_months:"ខែមុន",ago_years:"ឆ្នាំមុន"},
 en:{nav_home:"Home",nav_seeker:"Find work",nav_employer:"Hire",nav_jobs:"Jobs",nav_workers:"Find workers",
  eyebrow:"Professional Recruitment Platform",
  hero_h:"Connecting Cambodian talent with opportunity",hero_p:"The trusted platform for job seekers and employers across the Kingdom of Cambodia.",
  path_seeker_h:"I'm looking for work",path_seeker_p:"Build a profile and discover opportunities",cta_register:"Register →",
  path_emp_h:"I'm hiring",path_emp_p:"Post jobs and find qualified candidates",cta_post:"Post a job →",
  seeker_h:"Job seeker sign-up",seeker_sub:"Fill in your details",
  emp_h:"Employer — post a job",emp_sub:"Fill in company and job details",
  jobs_h:"Search jobs",jobs_sub:"Filter by category, province or keyword",
  workers_h:"Search workers",workers_sub:"Filter by category, province, experience",
  f_name:"Name",f_phone:"Phone",f_email:"Email",f_prov:"Province",f_cat:"Category",f_exp:"Experience",
  f_esal:"Expected salary ($)",f_skills:"Skills / short bio",f_submit:"Submit",saved:"✓ Saved",
  f_company:"Company name",f_title:"Job title",f_type:"Type",f_smin:"Salary min ($)",f_smax:"Salary max ($)",
  f_desc:"Job description",f_post:"Post job",posted:"✓ Posted",
  f_keyword:"Keyword",all:"All",empty:"No results found",mo:"/mo",footer:"KarKhmer — demo prototype",
  saving:"Saving...",err_required:"Please fill in all required fields",err_email:"Please enter a valid email",err_phone:"Please enter a valid phone number",
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
function maskPhone(p){
  if(!p)return"";
  const s=String(p).replace(/\D/g,"");
  if(s.length<6)return"***";
  return s.slice(0,3)+"••• "+s.slice(-3);
}
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

async function load(key){
  if(key==="seekers"){
    const {data,error}=await sb.from("seekers").select("*").order("created_at",{ascending:false});
    if(error){console.error("load seekers:",error);return [];}
    return (data||[]).map(s=>({
      name:s.name,phone:s.phone,email:s.email,prov:s.province,cat:s.category,
      exp:s.experience_level,sal:s.expected_salary,bio:s.bio,created_at:s.created_at
    }));
  }
  if(key==="jobs"){
    const {data,error}=await sb.from("jobs")
      .select("*,employers(company_name,phone,email)")
      .order("created_at",{ascending:false});
    if(error){console.error("load jobs:",error);return [];}
    return (data||[]).map(j=>({
      co:j.employers?.company_name,phone:j.employers?.phone,email:j.employers?.email,
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
  buildSelects();
  renderJobs();renderWorkers();
}

/* ---------- navigation ---------- */
function go(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.toggle("show",p.id===id));
  document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active",b.dataset.go===id));
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="jobs")renderJobs();
  if(id==="workers")renderWorkers();
}
document.addEventListener("click",e=>{
  const g=e.target.closest("[data-go]");if(g)go(g.dataset.go);
  const lb=e.target.closest(".lang button");if(lb){lang=lb.dataset.lang;
    document.querySelectorAll(".lang button").forEach(x=>x.classList.toggle("active",x===lb));applyLang();}
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

document.querySelectorAll("[data-save]").forEach(btn=>{
  btn.addEventListener("click",()=>withBusy(btn,async()=>{
    if(btn.dataset.save==="seeker"){
      const name=trim($("s_name").value),phone=trim($("s_phone").value),email=trim($("s_email").value);
      const errEl=$("s_err");
      if(!name||!phone||!email||!$("s_prov").value||!$("s_cat").value||!$("s_exp").value)
        return showErr(errEl,T[lang].err_required);
      if(!validEmail(email))return showErr(errEl,T[lang].err_email);
      if(!validPhone(phone))return showErr(errEl,T[lang].err_phone);
      const {error}=await sb.from("seekers").insert({
        name,phone,email,
        province:$("s_prov").value,category:$("s_cat").value,
        experience_level:$("s_exp").value,expected_salary:num($("s_sal").value),
        bio:trim($("s_bio").value)
      });
      if(error){console.error("save seeker:",error);return showErr(errEl,error.message);}
      $("s_ok").classList.add("show");setTimeout(()=>$("s_ok").classList.remove("show"),2500);
      ["s_name","s_phone","s_email","s_sal","s_bio"].forEach(id=>$(id).value="");
      renderWorkers();
    }else{
      const co=trim($("e_co").value),phone=trim($("e_phone").value),email=trim($("e_email").value),title=trim($("e_title").value);
      const errEl=$("e_err");
      if(!co||!phone||!email||!title||!$("e_cat").value||!$("e_prov").value||!$("e_type").value)
        return showErr(errEl,T[lang].err_required);
      if(!validEmail(email))return showErr(errEl,T[lang].err_email);
      if(!validPhone(phone))return showErr(errEl,T[lang].err_phone);
      const {data:emp,error:eErr}=await sb.from("employers").insert({
        company_name:co,phone,email
      }).select().single();
      if(eErr){console.error("save employer:",eErr);return showErr(errEl,eErr.message);}
      const {error:jErr}=await sb.from("jobs").insert({
        employer_id:emp.id,title,category:$("e_cat").value,
        province:$("e_prov").value,employment_type:$("e_type").value,
        salary_min:num($("e_smin").value),salary_max:num($("e_smax").value),
        description:trim($("e_desc").value)
      });
      if(jErr){console.error("save job:",jErr);return showErr(errEl,jErr.message);}
      $("e_ok").classList.add("show");setTimeout(()=>$("e_ok").classList.remove("show"),2500);
      ["e_co","e_phone","e_email","e_title","e_smin","e_smax","e_desc"].forEach(id=>$(id).value="");
      renderJobs();
    }
  }));
});

/* ---------- search renderers ---------- */
const labelOf=(arr,id)=>{const f=arr.find(a=>a[0]===id);return f?lab(f):"";};
function card(html){const d=document.createElement("div");d.className="rc";d.innerHTML=html;return d;}

async function renderJobs(){
  const arr=await load("jobs");const box=$("j_results");box.innerHTML="";
  const kw=$("j_kw").value.toLowerCase(),c=$("j_cat").value,p=$("j_prov").value;
  const out=arr.filter(j=>(!c||j.cat===c)&&(!p||j.prov===p)&&
    (!kw||((j.title+" "+(j.desc||"")+" "+(j.co||"")).toLowerCase().includes(kw))));
  if(!out.length){box.innerHTML=`<div class="empty">${esc(T[lang].empty)}</div>`;return;}
  out.forEach(j=>{
    const sal=(j.smin||j.smax)?`<span class="tag sal">$${esc(j.smin||"?")}–${esc(j.smax||"?")} ${esc(T[lang].mo)}</span>`:"";
    const age=j.created_at?`<div class="age">${esc(timeAgo(j.created_at))}</div>`:"";
    box.appendChild(card(
      `<div class="t">${esc(j.title)}</div><div class="m">${esc(j.co)}</div>
       <span class="tag">${esc(labelOf(CAT,j.cat))}</span><span class="tag">${esc(labelOf(PROV,j.prov))}</span>
       <span class="tag">${esc(labelOf(TYPE,j.type))}</span>${sal}
       <div class="d">${esc(j.desc)}</div>${age}`));
  });
}
async function renderWorkers(){
  const arr=await load("seekers");const box=$("w_results");box.innerHTML="";
  const kw=$("w_kw").value.toLowerCase(),c=$("w_cat").value,p=$("w_prov").value,x=$("w_exp").value;
  const out=arr.filter(s=>(!c||s.cat===c)&&(!p||s.prov===p)&&(!x||s.exp===x)&&
    (!kw||((s.name+" "+(s.bio||"")).toLowerCase().includes(kw))));
  if(!out.length){box.innerHTML=`<div class="empty">${esc(T[lang].empty)}</div>`;return;}
  out.forEach(s=>{
    const sal=s.sal?`<span class="tag sal">$${esc(s.sal)} ${esc(T[lang].mo)}</span>`:"";
    const age=s.created_at?`<div class="age">${esc(timeAgo(s.created_at))}</div>`:"";
    box.appendChild(card(
      `<div class="t">${esc(s.name)}</div><div class="m">${esc(maskPhone(s.phone))}</div>
       <span class="tag">${esc(labelOf(CAT,s.cat))}</span><span class="tag">${esc(labelOf(PROV,s.prov))}</span>
       <span class="tag">${esc(labelOf(EXP,s.exp))}</span>${sal}
       <div class="d">${esc(s.bio)}</div>${age}`));
  });
}
["j_kw","j_cat","j_prov"].forEach(id=>$(id).addEventListener("input",renderJobs));
["w_kw","w_cat","w_prov","w_exp"].forEach(id=>$(id).addEventListener("input",renderWorkers));

applyLang();
