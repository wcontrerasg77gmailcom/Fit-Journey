
const exercises = [
{id:"bench",es:"Press de banca con barra",en:"Barbell Bench Press",group:"Pecho",muscle:"Pectoral mayor; tríceps y deltoide anterior como secundarios",sets:4,reps:"6–8",rest:150,weight:"30–40 kg",video:"https://www.youtube.com/results?search_query=barbell+bench+press+proper+form+Jeff+Nippard",cues:["Escápulas retraídas y apoyadas","Pies firmes; glúteos en el banco","Baja la barra al pecho medio","Antebrazos verticales","Termina con 2 repeticiones en reserva"]},
{id:"lat",es:"Jalón al pecho",en:"Lat Pulldown",group:"Espalda",muscle:"Dorsal ancho; bíceps, romboides y trapecio inferior",sets:4,reps:"8–10",rest:90,weight:"35–50 kg",video:"https://www.youtube.com/results?search_query=lat+pulldown+proper+form+Renaissance+Periodization",cues:["Pecho alto y ligera inclinación","Lleva los codos hacia las costillas","No tires detrás de la nuca","Controla la subida"]},
{id:"incline",es:"Press inclinado con mancuernas",en:"Incline Dumbbell Press",group:"Pecho",muscle:"Porción clavicular del pectoral; tríceps y deltoide anterior",sets:3,reps:"8–10",rest:90,weight:"10–16 kg c/u",video:"https://www.youtube.com/results?search_query=incline+dumbbell+press+proper+form+Jeff+Nippard",cues:["Banco a 20–35°","Muñecas neutras","Codos a 30–60° del torso","Baja con control"]},
{id:"cableRow",es:"Remo sentado en polea",en:"Seated Cable Row",group:"Espalda",muscle:"Dorsal ancho, romboides y trapecio medio; bíceps",sets:3,reps:"10–12",rest:90,weight:"25–40 kg",video:"https://www.youtube.com/results?search_query=seated+cable+row+proper+form",cues:["Torso estable","Inicia llevando hombros atrás","Tira hacia abdomen alto","No balancees la espalda"]},
{id:"lateral",es:"Elevación lateral con mancuernas",en:"Dumbbell Lateral Raise",group:"Hombros",muscle:"Deltoide lateral",sets:3,reps:"12–15",rest:60,weight:"3–6 kg c/u",video:"https://www.youtube.com/results?search_query=dumbbell+lateral+raise+proper+form+Jeff+Nippard",cues:["Codos ligeramente flexionados","Eleva en el plano escapular","No uses impulso","Detén cerca de altura de hombros"]},
{id:"curl",es:"Curl de bíceps con mancuernas",en:"Dumbbell Biceps Curl",group:"Brazos",muscle:"Bíceps braquial; braquial y braquiorradial",sets:3,reps:"10–12",rest:60,weight:"6–10 kg c/u",video:"https://www.youtube.com/results?search_query=dumbbell+biceps+curl+proper+form",cues:["Codos quietos","Supina la palma","No balancees el torso","Baja completamente"]},
{id:"pushdown",es:"Extensión de tríceps en polea",en:"Cable Triceps Pushdown",group:"Brazos",muscle:"Tríceps braquial",sets:3,reps:"10–12",rest:60,weight:"15–25 kg",video:"https://www.youtube.com/results?search_query=cable+triceps+pushdown+proper+form",cues:["Codos pegados al torso","Extiende sin mover hombros","Controla el retorno"]},
{id:"squat",es:"Sentadilla con barra",en:"Barbell Back Squat",group:"Piernas",muscle:"Cuádriceps y glúteo mayor; aductores y erectores",sets:4,reps:"6–8",rest:180,weight:"Barra de 20 kg; agregar solo tras dominar técnica",video:"https://www.youtube.com/results?search_query=barbell+back+squat+proper+form+Squat+University",cues:["Respira y bloquea el abdomen","Rodillas siguen la dirección de los pies","Mantén el centro de presión sobre pie medio","Profundidad sin perder postura"]},
{id:"rdl",es:"Peso muerto rumano",en:"Romanian Deadlift",group:"Piernas",muscle:"Isquiotibiales y glúteo mayor; erectores espinales",sets:4,reps:"8",rest:150,weight:"20–35 kg",video:"https://www.youtube.com/results?search_query=romanian+deadlift+proper+form+Jeff+Nippard",cues:["Empuja caderas atrás","Barra pegada a las piernas","Rodillas levemente flexionadas","Detén cuando pierdas tensión o neutralidad"]},
{id:"legpress",es:"Prensa de piernas",en:"Leg Press",group:"Piernas",muscle:"Cuádriceps; glúteos y aductores",sets:3,reps:"10",rest:120,weight:"Trineo vacío o 40–80 kg añadidos",video:"https://www.youtube.com/results?search_query=leg+press+proper+form+Renaissance+Periodization",cues:["Espalda y pelvis apoyadas","Rodillas alineadas con pies","No bloquees violentamente","Usa recorrido tolerable"]},
{id:"lyingcurl",es:"Curl femoral acostado",en:"Lying Leg Curl",group:"Piernas",muscle:"Isquiotibiales; gastrocnemio secundario",sets:3,reps:"10–12",rest:75,weight:"15–30 kg",video:"https://www.youtube.com/results?search_query=lying+leg+curl+proper+form",cues:["Alinea la rodilla con eje de la máquina","Caderas pegadas al banco","Flexiona sin arquear la espalda"]},
{id:"extension",es:"Extensión de cuádriceps",en:"Leg Extension",group:"Piernas",muscle:"Cuádriceps",sets:3,reps:"12",rest:75,weight:"15–30 kg",video:"https://www.youtube.com/results?search_query=leg+extension+proper+form",cues:["Alinea rodilla con eje","Controla la bajada","No uses impulso"]},
{id:"calfstand",es:"Elevación de pantorrillas de pie",en:"Standing Calf Raise",group:"Pantorrillas",muscle:"Gastrocnemio; sóleo",sets:4,reps:"12–15",rest:60,weight:"Peso corporal o carga ligera",video:"https://www.youtube.com/results?search_query=standing+calf+raise+proper+form",cues:["Baja el talón con control","Pausa arriba","No rebotes"]},
{id:"pullup",es:"Dominada asistida",en:"Assisted Pull-up",group:"Espalda",muscle:"Dorsal ancho; bíceps, romboides y trapecio inferior",sets:4,reps:"6–10",rest:120,weight:"Asistencia suficiente para dejar 2 RIR",video:"https://www.youtube.com/results?search_query=assisted+pullup+proper+form",cues:["Inicia con depresión escapular","Pecho hacia la barra","No balancees","Reduce asistencia gradualmente"]},
{id:"ohp",es:"Press militar con barra",en:"Barbell Overhead Press",group:"Hombros",muscle:"Deltoide anterior y lateral; tríceps",sets:4,reps:"6–8",rest:150,weight:"Barra ligera de 10–20 kg",video:"https://www.youtube.com/results?search_query=overhead+press+proper+form+Jeff+Nippard",cues:["Glúteos y abdomen firmes","Barra pasa cerca del rostro","Termina sobre mitad del pie","No hiperextiendas lumbar"]},
{id:"barrow",es:"Remo con barra",en:"Barbell Row",group:"Espalda",muscle:"Dorsal ancho, romboides y trapecio medio; bíceps",sets:3,reps:"8",rest:120,weight:"20–30 kg",video:"https://www.youtube.com/results?search_query=barbell+row+proper+form+Jeff+Nippard",cues:["Bisagra de cadera estable","Columna neutral","Tira hacia abdomen","Evita convertirlo en encogimiento"]},
{id:"chestmachine",es:"Press de pecho en máquina",en:"Machine Chest Press",group:"Pecho",muscle:"Pectoral mayor; tríceps y deltoide anterior",sets:3,reps:"10",rest:90,weight:"15–30 kg",video:"https://www.youtube.com/results?search_query=machine+chest+press+proper+form",cues:["Ajusta manijas a pecho medio","Escápulas estables","No eleves hombros"]},
{id:"facepull",es:"Jalón facial",en:"Face Pull",group:"Hombros / espalda",muscle:"Deltoide posterior; rotadores externos y trapecio medio",sets:3,reps:"12–15",rest:60,weight:"7.5–15 kg",video:"https://www.youtube.com/results?search_query=face+pull+proper+form+Jeff+Nippard",cues:["Tira hacia ojos/frente","Separa manos al final","No arquees lumbar"]},
{id:"hammer",es:"Curl martillo",en:"Hammer Curl",group:"Brazos",muscle:"Braquial y braquiorradial; bíceps",sets:3,reps:"10",rest:60,weight:"6–10 kg c/u",video:"https://www.youtube.com/results?search_query=hammer+curl+proper+form",cues:["Agarre neutro","Codos quietos","Sin balanceo"]},
{id:"dips",es:"Fondos asistidos",en:"Assisted Dips",group:"Pecho / tríceps",muscle:"Tríceps y pectoral inferior; deltoide anterior",sets:3,reps:"8–10",rest:90,weight:"Asistencia suficiente para dejar 2 RIR",video:"https://www.youtube.com/results?search_query=assisted+dips+proper+form",cues:["Hombros abajo","Recorrido sin dolor","Torso más vertical prioriza tríceps"]},
{id:"hack",es:"Sentadilla Hack",en:"Hack Squat",group:"Piernas",muscle:"Cuádriceps; glúteo mayor y aductores",sets:4,reps:"8",rest:150,weight:"Trineo vacío o carga mínima",video:"https://www.youtube.com/results?search_query=hack+squat+proper+form",cues:["Espalda apoyada","Rodillas siguen pies","Profundidad controlada","No bloquees con violencia"]},
{id:"hipthrust",es:"Empuje de cadera con barra",en:"Barbell Hip Thrust",group:"Glúteos",muscle:"Glúteo mayor; isquiotibiales",sets:4,reps:"8–10",rest:120,weight:"20–40 kg",video:"https://www.youtube.com/results?search_query=barbell+hip+thrust+proper+form",cues:["Banco bajo escápulas","Mentón levemente recogido","Termina con pelvis neutra","No hiperextiendas lumbar"]},
{id:"bulgarian",es:"Sentadilla búlgara",en:"Bulgarian Split Squat",group:"Piernas",muscle:"Cuádriceps y glúteo mayor; aductores",sets:3,reps:"8–10 por lado",rest:90,weight:"Peso corporal o 4–8 kg c/u",video:"https://www.youtube.com/results?search_query=bulgarian+split+squat+proper+form",cues:["Paso suficientemente largo","Rodilla sigue el pie","Desciende verticalmente","Apóyate si mejora la estabilidad"]},
{id:"seatedcurl",es:"Curl femoral sentado",en:"Seated Leg Curl",group:"Piernas",muscle:"Isquiotibiales",sets:3,reps:"12",rest:75,weight:"15–30 kg",video:"https://www.youtube.com/results?search_query=seated+leg+curl+proper+form",cues:["Ajusta rodilla al eje","Fija muslos","Controla la extensión"]},
{id:"abductor",es:"Abducción de cadera en máquina",en:"Hip Abduction Machine",group:"Glúteos",muscle:"Glúteo medio y menor; tensor de fascia lata",sets:3,reps:"12–15",rest:60,weight:"20–40 kg",video:"https://www.youtube.com/results?search_query=hip+abduction+machine+proper+form",cues:["Pelvis estable","Abre sin impulso","Pausa breve"]},
{id:"calfseat",es:"Elevación de pantorrillas sentado",en:"Seated Calf Raise",group:"Pantorrillas",muscle:"Sóleo; gastrocnemio secundario",sets:4,reps:"12–15",rest:60,weight:"20–40 kg",video:"https://www.youtube.com/results?search_query=seated+calf+raise+proper+form",cues:["Recorrido completo","Pausa arriba","Baja lento"]},
{id:"kbswing",es:"Balanceo con kettlebell",en:"Kettlebell Swing",group:"Cadena posterior / acondicionamiento",muscle:"Glúteos e isquiotibiales; core",sets:4,reps:"12–15",rest:75,weight:"25 lb",video:"https://www.youtube.com/results?search_query=kettlebell+swing+proper+form+StrongFirst",cues:["Es bisagra, no sentadilla","Impulsa con caderas","Brazos como ganchos","No eleves por encima del control"]},
{id:"goblet",es:"Sentadilla copa",en:"Goblet Squat",group:"Piernas",muscle:"Cuádriceps y glúteos; core",sets:3,reps:"10–15",rest:75,weight:"15–25 lb",video:"https://www.youtube.com/results?search_query=goblet+squat+proper+form",cues:["Carga junto al pecho","Rodillas siguen pies","Torso firme"]},
{id:"kbrow",es:"Remo con kettlebell a una mano",en:"One-arm Kettlebell Row",group:"Espalda",muscle:"Dorsal ancho y romboides; bíceps",sets:3,reps:"10–12 por lado",rest:60,weight:"15–25 lb",video:"https://www.youtube.com/results?search_query=one+arm+kettlebell+row+proper+form",cues:["Torso estable","Lleva codo hacia cadera","No gires el cuerpo"]},
{id:"kbpress",es:"Press de hombro con kettlebell",en:"Kettlebell Overhead Press",group:"Hombros",muscle:"Deltoide anterior y tríceps; core",sets:3,reps:"8–10 por lado",rest:75,weight:"15 lb; 25 lb solo con control",video:"https://www.youtube.com/results?search_query=kettlebell+overhead+press+proper+form",cues:["Muñeca neutra","Costillas abajo","Termina con brazo alineado"]},
{id:"carry",es:"Caminata del granjero",en:"Farmer Carry",group:"Core / agarre",muscle:"Antebrazos, trapecio y estabilizadores del tronco",sets:4,reps:"30–45 s",rest:60,weight:"15 lb + 25 lb; alterna lados",video:"https://www.youtube.com/results?search_query=farmer+carry+proper+form",cues:["Camina alto","Costillas sobre pelvis","Pasos cortos y controlados","Alterna la carga asimétrica"]},
];

const plans = {
  "Superior A":["bench","lat","incline","cableRow","lateral","curl","pushdown"],
  "Pierna A":["squat","rdl","legpress","lyingcurl","extension","calfstand"],
  "Superior B":["pullup","ohp","barrow","chestmachine","facepull","hammer","dips"],
  "Pierna B":["hack","hipthrust","bulgarian","seatedcurl","abductor","calfseat"],
  "Kettlebell opcional":["kbswing","goblet","kbrow","kbpress","carry"]
};
const schedule = {1:"Superior A",2:"Pierna A",3:"Recuperación activa",4:"Superior B",5:"Pierna B",6:"Kettlebell opcional",0:"Descanso"};

let state = JSON.parse(localStorage.getItem("fitJourneyState")||'{"week":1,"sessions":{},"metrics":[],"nutrition":{"calories":1800,"protein":130,"fat":50}}');
let selectedPlan="Superior A", timer=90, timerId=null, deferredPrompt=null;
const save=()=>localStorage.setItem("fitJourneyState",JSON.stringify(state));
const ex=id=>exercises.find(x=>x.id===id);

function nav(view){
 document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===view));
 document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
 if(view==="home") renderHome(); if(view==="workout") renderWorkout(); if(view==="library") renderLibrary();
 if(view==="nutrition") renderNutrition(); if(view==="progress") renderProgress();
}
document.querySelectorAll(".bottom-nav button").forEach(b=>b.onclick=()=>nav(b.dataset.view));

function phase(){
 const w=state.week;
 if(w<=8)return ["Fundamentos y técnica","Déficit moderado","1700–1800 kcal"];
 if(w<=16)return ["Fuerza base","Mantenimiento ligero","1850–1950 kcal"];
 if(w<=28)return ["Hipertrofia","Mantenimiento / leve superávit","1900–2100 kcal"];
 if(w<=40)return ["Especialización","Leve superávit","1950–2150 kcal"];
 return ["Definición","Déficit moderado","1700–1850 kcal"];
}
function renderHome(){
 const today=schedule[new Date().getDay()], p=phase();
 const completed=Object.values(state.sessions).filter(Boolean).length;
 home.innerHTML=`<div class="hero"><span class="eyebrow">SEMANA ${state.week} DE 52</span><h2>${today}</h2><p>${p[0]} · ${p[1]}</p>
 ${plans[today]?`<button class="primary" onclick="selectedPlan='${today}';nav('workout')">Comenzar entrenamiento</button>`:`<button class="secondary" onclick="selectedPlan='Kettlebell opcional';nav('workout')">Ver opción en casa</button>`}</div>
 <div class="grid"><div class="stat"><b>${completed}</b><span>sesiones registradas</span></div><div class="stat"><b>${p[2]}</b><span>rango de fase</span></div></div>
 <h2 class="section">Reglas de esta semana</h2><div class="card">
 <p><b>Intensidad:</b> termina la mayoría de las series con 2 repeticiones en reserva.</p>
 <p><b>Progresión:</b> primero completa el máximo de repeticiones; luego aumenta la carga mínima disponible.</p>
 <p><b>Miércoles:</b> 30–45 min de caminata fácil + movilidad. No es otro día duro.</p>
 </div>
 <div class="notice">Los pesos son puntos de partida conservadores. Si alteran tu técnica o provocan dolor articular, reduce la carga.</div>`;
}
function renderWorkout(){
 workout.innerHTML=`<div class="day-tabs">${Object.keys(plans).map(p=>`<button class="${p===selectedPlan?'active':''}" onclick="selectedPlan='${p}';renderWorkout()">${p}</button>`).join("")}</div>
 <h2 class="section">${selectedPlan}</h2>
 <div class="card"><b>Calentamiento dinámico · 7–10 min</b><p class="muted">3–5 min de cardio suave, movilidad específica y 2–4 series de aproximación antes del primer ejercicio pesado.</p></div>
 <div id="exerciseRows">${plans[selectedPlan].map(renderExerciseRow).join("")}</div>
 <button class="primary" style="width:100%;margin-top:16px" onclick="completeSession()">Finalizar y guardar sesión</button>
 <div class="card" style="margin-top:12px"><b>Vuelta a la calma · 5 min</b><p class="muted">Respiración, caminata suave y movilidad sin forzar rangos.</p></div>`;
}
function renderExerciseRow(id){
 const e=ex(id), key=`${state.week}-${selectedPlan}-${id}`, log=state.sessions[key]||{};
 let sets="";
 for(let i=1;i<=e.sets;i++){
   const v=(log.sets||[])[i-1]||{};
   sets+=`<div class="set-grid"><b>${i}</b><input inputmode="decimal" placeholder="kg" value="${v.weight||''}" onchange="logSet('${id}',${i},'weight',this.value)"><input inputmode="numeric" placeholder="reps" value="${v.reps||''}" onchange="logSet('${id}',${i},'reps',this.value)"><button onclick="openTimer(${e.rest})">⏱</button></div>`;
 }
 return `<div class="exercise-row"><div><h3 onclick="showExercise('${id}')">${e.es}</h3><p>${e.en} · ${e.group}</p><span class="pill">${e.sets} × ${e.reps}</span><span class="pill">${e.rest}s</span><span class="pill">${e.weight}</span>${sets}</div><button class="secondary" onclick="showExercise('${id}')">Técnica</button></div>`;
}
function logSet(id,i,field,val){
 const key=`${state.week}-${selectedPlan}-${id}`; state.sessions[key]=state.sessions[key]||{sets:[]};
 state.sessions[key].sets[i-1]=state.sessions[key].sets[i-1]||{}; state.sessions[key].sets[i-1][field]=val; save();
}
function completeSession(){
 const key=`done-${state.week}-${selectedPlan}-${new Date().toISOString().slice(0,10)}`;state.sessions[key]=true;save();
 alert("Sesión guardada. Registra también cómo te sentiste y evita subir carga si la técnica se deterioró.");renderHome();
}
function showExercise(id){
 const e=ex(id); exerciseDetail.innerHTML=`<span class="eyebrow">${e.group}</span><h2>${e.es}</h2><p class="muted">${e.en}</p>
 <p><b>Músculo:</b> ${e.muscle}</p><p><b>Prescripción:</b> ${e.sets} series × ${e.reps}; descanso ${e.rest}s.</p><p><b>Peso inicial:</b> ${e.weight}</p>
 <ul class="detail-list">${e.cues.map(c=>`<li>${c}</li>`).join("")}</ul>
 <a class="primary" style="display:inline-block;text-decoration:none" target="_blank" rel="noopener" href="${e.video}">Ver demostraciones</a>
 <div class="notice">Una demostración en video no reemplaza la revisión presencial de un entrenador, especialmente en sentadillas, press y bisagras.</div>`;
 exerciseDialog.showModal();
}
function renderLibrary(filter=""){
 const list=exercises.filter(e=>(e.es+" "+e.en+" "+e.group+" "+e.muscle).toLowerCase().includes(filter.toLowerCase()));
 library.innerHTML=`<input class="search" placeholder="Buscar ejercicio o músculo" oninput="renderLibrary(this.value)" value="${filter}">
 ${list.map(e=>`<div class="exercise-row" onclick="showExercise('${e.id}')"><div><h3>${e.es}</h3><p>${e.en}</p><span class="pill">${e.group}</span><span class="pill">${e.muscle}</span></div><b>›</b></div>`).join("")}`;
}
function renderNutrition(){
 const n=state.nutrition;
 nutrition.innerHTML=`<div class="hero"><span class="eyebrow">FASE ACTUAL</span><h2>${phase()[0]}</h2><p>Objetivos diarios ajustables</p></div>
 <div class="form-grid card">
 <label>Calorías<input id="cal" type="number" value="${n.calories}"></label>
 <label>Proteína (g)<input id="pro" type="number" value="${n.protein}"></label>
 <label>Grasa (g)<input id="fat" type="number" value="${n.fat}"></label>
 <label>Carbohidratos calculados<input id="carbs" disabled value="${Math.round((n.calories-n.protein*4-n.fat*9)/4)} g"></label>
 </div><button class="primary" style="margin-top:12px" onclick="saveNutrition()">Guardar objetivos</button>
 <h2 class="section">Distribución práctica</h2><div class="card">
 <p><b>3–5 tomas de proteína:</b> aproximadamente 25–35 g por comida.</p>
 <p><b>Antes de entrenar:</b> carbohidrato fácil de tolerar + agua.</p>
 <p><b>Después:</b> una comida completa con proteína; la banana puede complementar, no sustituirla.</p>
 <p><b>Seguimiento:</b> ajusta calorías solo después de 2–3 semanas de tendencia, no por un solo día.</p></div>`;
}
function saveNutrition(){state.nutrition={calories:+cal.value,protein:+pro.value,fat:+fat.value};save();renderNutrition()}
function renderProgress(){
 const last=state.metrics[state.metrics.length-1];
 progress.innerHTML=`<div class="grid"><div class="stat"><b>${last?last.weight+" kg":"—"}</b><span>último peso</span></div><div class="stat"><b>${state.week}/52</b><span>semana actual</span></div></div>
 <h2 class="section">Registrar medición</h2><div class="form-grid card">
 <label>Peso (kg)<input id="mWeight" type="number" step=".1"></label><label>Cintura (cm)<input id="mWaist" type="number" step=".1"></label>
 <label>Pecho (cm)<input id="mChest" type="number" step=".1"></label><label>Brazo (cm)<input id="mArm" type="number" step=".1"></label>
 </div><button class="primary" style="margin-top:12px" onclick="addMetric()">Guardar medición</button>
 <h2 class="section">Avance anual</h2><div class="card"><div class="progressbar"><div style="width:${state.week/52*100}%"></div></div>
 <p>${Math.round(state.week/52*100)}% del programa</p><button class="secondary" onclick="changeWeek(-1)">Semana anterior</button> <button class="secondary" onclick="changeWeek(1)">Semana siguiente</button></div>
 <h2 class="section">Historial</h2>${state.metrics.slice().reverse().map(m=>`<div class="card" style="margin-bottom:9px"><b>${m.date}</b><p>${m.weight} kg · cintura ${m.waist||"—"} cm · pecho ${m.chest||"—"} cm · brazo ${m.arm||"—"} cm</p></div>`).join("")||'<p class="muted">Aún no hay mediciones.</p>'}
 <button class="danger" onclick="exportData()">Exportar respaldo JSON</button>`;
}
function addMetric(){state.metrics.push({date:new Date().toISOString().slice(0,10),weight:+mWeight.value,waist:+mWaist.value||"",chest:+mChest.value||"",arm:+mArm.value||""});save();renderProgress()}
function changeWeek(d){state.week=Math.max(1,Math.min(52,state.week+d));save();renderProgress()}
function exportData(){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(state,null,2)],{type:"application/json"}));a.download="fit-journey-respaldo.json";a.click()}
function openTimer(seconds){timer=seconds;timerValue.textContent=timer;timerToggle.textContent="Iniciar";clearInterval(timerId);timerId=null;timerDialog.showModal()}
function changeTimer(d){timer=Math.max(0,timer+d);timerValue.textContent=timer}
function toggleTimer(){if(timerId){clearInterval(timerId);timerId=null;timerToggle.textContent="Continuar"}else{timerToggle.textContent="Pausar";timerId=setInterval(()=>{timer--;timerValue.textContent=timer;if(timer<=0){clearInterval(timerId);timerId=null;timerToggle.textContent="Listo";navigator.vibrate&&navigator.vibrate([200,100,200])}},1000)}}
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;installBtn.classList.remove("hidden")});
installBtn.onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();deferredPrompt=null}else alert("En iPhone: abre en Safari, toca Compartir y luego Agregar a pantalla de inicio.")};
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
nav("home");
