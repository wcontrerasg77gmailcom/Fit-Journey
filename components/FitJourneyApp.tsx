"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Exercise, Experience, exercises, plans, weeklySchedules } from "@/lib/data";

type Tab = "today" | "plan" | "library" | "progress" | "settings";
type Profile = {
  name: string;
  experience: Experience;
  weight: number;
  height: number;
  sound: boolean;
  completedOnboarding: boolean;
};
type SetLog = { weight: string; reps: string; done: boolean };
type ExerciseLog = Record<string, SetLog[]>;
type Metrics = { date: string; weight: number; waist?: number };
type AppState = {
  profile: Profile;
  activePlan: keyof typeof plans;
  logs: ExerciseLog;
  metrics: Metrics[];
  completedSessions: number;
};

const defaultState: AppState = {
  profile: { name:"", experience:"beginner", weight:70, height:168, sound:true, completedOnboarding:false },
  activePlan:"Superior A",
  logs:{},
  metrics:[],
  completedSessions:0
};

const STORAGE = "fit-journey-v2-state";

function beep(frequency:number, duration:number, volume=0.12) {
  const AudioContextClass = window.AudioContext || (window as typeof window & {webkitAudioContext?: typeof AudioContext}).webkitAudioContext;
  if (!AudioContextClass) return;
  const ctx = new AudioContextClass();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = "sine";
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration/1000);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + duration/1000);
  setTimeout(()=>ctx.close(), duration+150);
}

function playTenSecondWarning() {
  beep(880,120,.10);
  setTimeout(()=>beep(880,120,.10),190);
}
function playFinishedAlarm() {
  beep(660,220,.14);
  setTimeout(()=>beep(880,220,.14),270);
  setTimeout(()=>beep(1040,500,.16),540);
  navigator.vibrate?.([250,100,250,100,500]);
}

export default function FitJourneyApp() {
  const [state,setState] = useState<AppState>(defaultState);
  const [ready,setReady] = useState(false);
  const [tab,setTab] = useState<Tab>("today");
  const [selectedExercise,setSelectedExercise] = useState<Exercise|null>(null);
  const [search,setSearch] = useState("");
  const [timer,setTimer] = useState<{open:boolean; remaining:number; initial:number; running:boolean; warned:boolean}>({open:false,remaining:90,initial:90,running:false,warned:false});
  const intervalRef = useRef<number|null>(null);

  useEffect(()=>{
    const saved=localStorage.getItem(STORAGE);
    if(saved) {
      try { setState({...defaultState,...JSON.parse(saved)}); } catch {}
    }
    setReady(true);
    if("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(()=>{});
  },[]);

  useEffect(()=>{ if(ready) localStorage.setItem(STORAGE,JSON.stringify(state)); },[state,ready]);

  useEffect(()=>{
    if(timer.running) {
      intervalRef.current=window.setInterval(()=>{
        setTimer(t=>{
          const next=t.remaining-1;
          if(next===10 && !t.warned && state.profile.sound) playTenSecondWarning();
          if(next<=0) {
            if(state.profile.sound) playFinishedAlarm();
            if(intervalRef.current) clearInterval(intervalRef.current);
            return {...t,remaining:0,running:false,warned:true};
          }
          return {...t,remaining:next,warned:t.warned||next===10};
        });
      },1000);
    }
    return ()=>{ if(intervalRef.current) clearInterval(intervalRef.current); };
  },[timer.running,state.profile.sound]);

  const schedule = weeklySchedules[state.profile.experience];
  const jsDay = new Date().getDay();
  const dayIndex = jsDay===0?6:jsDay-1;
  const todayItem = schedule[dayIndex];
  const todayIsPlan = Object.keys(plans).includes(todayItem.plan);
  const todayPlan = todayIsPlan ? todayItem.plan as keyof typeof plans : state.activePlan;
  const activeExercises = plans[state.activePlan].map(id=>exercises.find(e=>e.id===id)!).filter(Boolean);

  if(!ready) return <main className="loading">Cargando Fit Journey…</main>;
  if(!state.profile.completedOnboarding) return <Onboarding onFinish={(profile)=>setState(s=>({...s,profile:{...profile,completedOnboarding:true}}))}/>;

  const updateSet=(exerciseId:string,index:number,patch:Partial<SetLog>)=>{
    setState(s=>{
      const old=s.logs[exerciseId]||[];
      const next=Array.from({length:exercises.find(e=>e.id===exerciseId)?.sets||0},(_,i)=>old[i]||{weight:"",reps:"",done:false});
      next[index]={...next[index],...patch};
      return {...s,logs:{...s.logs,[exerciseId]:next}};
    });
  };

  const startTimer=(seconds:number)=>{
    if(state.profile.sound) beep(440,70,.05); // user gesture unlocks audio on iOS
    setTimer({open:true,remaining:seconds,initial:seconds,running:true,warned:false});
  };

  const finishWorkout=()=>{
    setState(s=>({...s,completedSessions:s.completedSessions+1}));
    alert("Sesión guardada. La próxima vez conservarás tus pesos y repeticiones.");
    setTab("progress");
  };

  return <div className="app-shell">
    <header className="app-header">
      <div><span className="kicker">FIT JOURNEY 2.0</span><h1>{state.profile.name?`Hola, ${state.profile.name}`:"Fit Journey"}</h1></div>
      <button className="icon-btn" onClick={()=>setTab("settings")} aria-label="Configuración">⚙︎</button>
    </header>

    <main className="content">
      {tab==="today" && <section>
        <article className="hero">
          <span className="kicker">{todayItem.day.toUpperCase()}</span>
          <h2>{todayItem.plan}</h2>
          <p>{todayIsPlan ? (state.profile.experience==="beginner"?"Sesión guiada para aprender técnica sin agotarte.":"Sesión de progresión con registro por serie.") : "La recuperación también forma parte del programa."}</p>
          {todayIsPlan && <button className="primary" onClick={()=>{setState(s=>({...s,activePlan:todayPlan}));setTab("plan")}}>Comenzar sesión</button>}
        </article>
        <div className="stats">
          <article><strong>{state.completedSessions}</strong><span>sesiones completadas</span></article>
          <article><strong>{state.profile.experience==="beginner"?"3":"4–5"}</strong><span>días de fuerza por semana</span></article>
        </div>
        <h3>Tu semana</h3>
        <div className="week-list">{schedule.map((item,i)=><div className={i===dayIndex?"today-line":""} key={item.day}><b>{item.day}</b><span>{item.plan}</span></div>)}</div>
        <aside className="notice"><b>Principiante:</b> las primeras 2–3 semanas, termina cada serie sintiendo que podrías hacer 2–3 repeticiones más. El objetivo es aprender, no demostrar fuerza.</aside>
      </section>}

      {tab==="plan" && <section>
        <div className="plan-selector">{(Object.keys(plans) as (keyof typeof plans)[]).map(p=><button key={p} className={p===state.activePlan?"active":""} onClick={()=>setState(s=>({...s,activePlan:p}))}>{p}</button>)}</div>
        <div className="section-title"><div><span className="kicker">SESIÓN ACTIVA</span><h2>{state.activePlan}</h2></div><span>{activeExercises.length} ejercicios</span></div>
        <article className="warmup"><b>Calentamiento guiado · 7–10 min</b><p>3–5 min de caminata o bicicleta suave, movimientos articulares y 2–4 series de aproximación antes del primer ejercicio.</p></article>
        {activeExercises.map((e,idx)=>{
          const rows=state.logs[e.id]||Array.from({length:e.sets},()=>({weight:"",reps:"",done:false}));
          return <article className="exercise-card" key={e.id}>
            <button className="exercise-heading" onClick={()=>setSelectedExercise(e)}>
              <div><small>{idx+1} · {e.group}</small><h3>{e.es}</h3><p>{e.en}</p></div><span>Ver técnica ›</span>
            </button>
            <div className="prescription"><span>{e.sets} series</span><span>{e.reps} reps</span><span>{e.rest}s descanso</span></div>
            <p className="weight-guide">{state.profile.experience==="beginner"?e.beginnerWeight:e.regularWeight}</p>
            <div className="set-head"><span>Serie</span><span>Peso</span><span>Reps</span><span>✓</span></div>
            {Array.from({length:e.sets},(_,i)=>{
              const row=rows[i]||{weight:"",reps:"",done:false};
              return <div className="set-row" key={i}>
                <b>{i+1}</b>
                <input aria-label={`Peso serie ${i+1}`} inputMode="decimal" placeholder="kg" value={row.weight} onChange={ev=>updateSet(e.id,i,{weight:ev.target.value})}/>
                <input aria-label={`Repeticiones serie ${i+1}`} inputMode="numeric" placeholder="reps" value={row.reps} onChange={ev=>updateSet(e.id,i,{reps:ev.target.value})}/>
                <button className={row.done?"done":""} onClick={()=>{updateSet(e.id,i,{done:!row.done});if(!row.done)startTimer(e.rest)}}>{row.done?"✓":"○"}</button>
              </div>
            })}
          </article>
        })}
        <button className="primary full" onClick={finishWorkout}>Finalizar y guardar entrenamiento</button>
      </section>}

      {tab==="library" && <section>
        <div className="section-title"><div><span className="kicker">BIBLIOTECA</span><h2>Ejercicios</h2></div><span>{exercises.length}</span></div>
        <input className="search" placeholder="Buscar ejercicio, músculo o grupo" value={search} onChange={e=>setSearch(e.target.value)}/>
        <div className="library-list">
          {exercises.filter(e=>(`${e.es} ${e.en} ${e.group} ${e.primary}`).toLowerCase().includes(search.toLowerCase())).map(e=>
            <button key={e.id} onClick={()=>setSelectedExercise(e)}><div><b>{e.es}</b><small>{e.en}</small><span>{e.group} · {e.primary}</span></div><strong>›</strong></button>
          )}
        </div>
      </section>}

      {tab==="progress" && <Progress state={state} setState={setState}/>}

      {tab==="settings" && <Settings state={state} setState={setState}/>}
    </main>

    <nav className="bottom-nav">
      <button className={tab==="today"?"active":""} onClick={()=>setTab("today")}><span>⌂</span>Hoy</button>
      <button className={tab==="plan"?"active":""} onClick={()=>setTab("plan")}><span>▣</span>Entrenar</button>
      <button className={tab==="library"?"active":""} onClick={()=>setTab("library")}><span>≡</span>Ejercicios</button>
      <button className={tab==="progress"?"active":""} onClick={()=>setTab("progress")}><span>↗</span>Progreso</button>
    </nav>

    {selectedExercise && <ExerciseModal exercise={selectedExercise} onClose={()=>setSelectedExercise(null)}/>}
    {timer.open && <TimerModal timer={timer} setTimer={setTimer} sound={state.profile.sound}/>}
  </div>;
}

function Onboarding({onFinish}:{onFinish:(profile:Profile)=>void}) {
  const [step,setStep]=useState(1);
  const [name,setName]=useState("");
  const [experience,setExperience]=useState<Experience>("beginner");
  const [weight,setWeight]=useState(70);
  const [height,setHeight]=useState(168);
  return <main className="onboarding">
    <div className="brand-mark">FJ</div>
    <span className="kicker">CONFIGURACIÓN INICIAL · {step}/3</span>
    {step===1 && <><h1>Tu entrenador debe empezar por conocerte.</h1><p>La app adaptará frecuencia, instrucciones y progresión a tu experiencia real.</p><label>¿Cómo quieres que te llamemos?<input value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre"/></label><button className="primary full" onClick={()=>setStep(2)}>Continuar</button></>}
    {step===2 && <><h1>¿Cuál describe mejor tu experiencia?</h1>
      <button className={`choice ${experience==="beginner"?"selected":""}`} onClick={()=>setExperience("beginner")}><b>Nunca he entrenado o estoy comenzando</b><span>3 días de fuerza, explicaciones completas y cargas conservadoras.</span></button>
      <button className={`choice ${experience==="regular"?"selected":""}`} onClick={()=>setExperience("regular")}><b>Entreno habitualmente</b><span>4 días de fuerza y una sesión opcional en casa.</span></button>
      <button className="primary full" onClick={()=>setStep(3)}>Continuar</button></>}
    {step===3 && <><h1>Datos de referencia</h1><p>Se guardan únicamente en este dispositivo durante esta primera etapa.</p>
      <div className="two-fields"><label>Peso (kg)<input type="number" value={weight} onChange={e=>setWeight(+e.target.value)}/></label><label>Estatura (cm)<input type="number" value={height} onChange={e=>setHeight(+e.target.value)}/></label></div>
      <button className="primary full" onClick={()=>onFinish({name,experience,weight,height,sound:true,completedOnboarding:true})}>Crear mi programa</button></>}
  </main>;
}

function ExerciseModal({exercise,onClose}:{exercise:Exercise;onClose:()=>void}) {
  return <div className="modal-backdrop" onClick={onClose}><article className="modal" onClick={e=>e.stopPropagation()}>
    <button className="close" onClick={onClose}>×</button><span className="kicker">{exercise.group.toUpperCase()}</span><h2>{exercise.es}</h2><p className="subtitle">{exercise.en}</p>
    <div className="muscle-grid"><div><small>PRINCIPAL</small><b>{exercise.primary}</b></div><div><small>SECUNDARIOS</small><b>{exercise.secondary}</b></div></div>
    <Info title="Preparación" items={exercise.setup}/><Info title="Ejecución paso a paso" items={exercise.execution}/><Info title="Errores que debes evitar" items={exercise.errors}/>
    <div className="detail-grid"><div><small>TEMPO</small><b>{exercise.tempo}</b></div><div><small>RESPIRACIÓN</small><b>{exercise.breathing}</b></div></div>
    <h3>Cómo progresar</h3><p>{exercise.progression}</p><h3>Alternativa si está ocupado</h3><p>{exercise.alternative}</p>
    <a className="primary video" href={exercise.video} target="_blank" rel="noreferrer">Abrir demostraciones en video</a>
    <aside className="notice">Detén el ejercicio ante dolor agudo, mareo o pérdida de control. Las explicaciones no reemplazan la supervisión presencial cuando estás aprendiendo movimientos complejos.</aside>
  </article></div>;
}
function Info({title,items}:{title:string;items:string[]}) {return <><h3>{title}</h3><ol className="info-list">{items.map(x=><li key={x}>{x}</li>)}</ol></>}

function TimerModal({timer,setTimer,sound}:{timer:{open:boolean;remaining:number;initial:number;running:boolean;warned:boolean};setTimer:React.Dispatch<React.SetStateAction<{open:boolean;remaining:number;initial:number;running:boolean;warned:boolean}>>;sound:boolean}) {
  const urgent=timer.remaining<=10;
  return <div className="modal-backdrop"><article className={`timer-modal ${urgent?"urgent":""}`}>
    <button className="close" onClick={()=>setTimer(t=>({...t,open:false,running:false}))}>×</button>
    <span className="kicker">DESCANSO</span><div className="timer-number">{timer.remaining}</div><p>{timer.remaining===0?"Serie siguiente lista":urgent?"Prepárate: quedan 10 segundos o menos":"Recupérate y prepara la siguiente serie"}</p>
    <div className="timer-controls"><button onClick={()=>setTimer(t=>({...t,remaining:Math.max(0,t.remaining-15)}))}>−15</button><button className="primary" onClick={()=>{if(sound)beep(440,60,.05);setTimer(t=>({...t,running:!t.running}))}}>{timer.running?"Pausar":"Continuar"}</button><button onClick={()=>setTimer(t=>({...t,remaining:t.remaining+15}))}>+15</button></div>
  </article></div>;
}

function Progress({state,setState}:{state:AppState;setState:React.Dispatch<React.SetStateAction<AppState>>}) {
  const [weight,setWeight]=useState(state.profile.weight);
  const [waist,setWaist]=useState<number|undefined>();
  const latest=state.metrics[state.metrics.length-1];
  const add=()=>{setState(s=>({...s,profile:{...s.profile,weight},metrics:[...s.metrics,{date:new Date().toISOString().slice(0,10),weight,waist}]}));setWaist(undefined)};
  return <section><div className="section-title"><div><span className="kicker">SEGUIMIENTO</span><h2>Progreso</h2></div></div>
    <div className="stats"><article><strong>{latest?.weight||state.profile.weight} kg</strong><span>último peso</span></article><article><strong>{state.completedSessions}</strong><span>sesiones</span></article></div>
    <article className="panel"><h3>Registrar medición</h3><div className="two-fields"><label>Peso (kg)<input type="number" step=".1" value={weight} onChange={e=>setWeight(+e.target.value)}/></label><label>Cintura (cm)<input type="number" step=".1" value={waist??""} onChange={e=>setWaist(e.target.value?+e.target.value:undefined)}/></label></div><button className="primary" onClick={add}>Guardar</button></article>
    <h3>Historial</h3>{[...state.metrics].reverse().map((m,i)=><article className="history" key={i}><b>{m.date}</b><span>{m.weight} kg {m.waist?`· cintura ${m.waist} cm`:""}</span></article>)}
  </section>;
}

function Settings({state,setState}:{state:AppState;setState:React.Dispatch<React.SetStateAction<AppState>>}) {
  const exportData=()=>{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(state,null,2)],{type:"application/json"}));a.download="fit-journey-respaldo.json";a.click()};
  return <section><div className="section-title"><div><span className="kicker">AJUSTES</span><h2>Configuración</h2></div></div>
    <article className="panel settings-list">
      <label><span>Sonidos y alarmas</span><input type="checkbox" checked={state.profile.sound} onChange={e=>setState(s=>({...s,profile:{...s.profile,sound:e.target.checked}}))}/></label>
      <label><span>Nivel</span><select value={state.profile.experience} onChange={e=>setState(s=>({...s,profile:{...s.profile,experience:e.target.value as Experience}}))}><option value="beginner">Principiante</option><option value="regular">Habitual</option></select></label>
      <button onClick={exportData}>Descargar respaldo de mis datos</button>
      <button className="danger" onClick={()=>{if(confirm("¿Borrar todos los datos de este dispositivo?")){localStorage.removeItem(STORAGE);location.reload()}}}>Reiniciar aplicación</button>
    </article>
    <aside className="notice">Para que el sonido funcione en iPhone, quita el modo silencio, permite volumen multimedia y toca “Continuar” o completa una serie al menos una vez; iOS exige una interacción del usuario antes de reproducir audio.</aside>
  </section>;
}
