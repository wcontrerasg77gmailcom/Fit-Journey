export type Experience = "beginner" | "regular";
export type Exercise = {
  id: string;
  es: string;
  en: string;
  group: string;
  primary: string;
  secondary: string;
  sets: number;
  reps: string;
  rest: number;
  beginnerWeight: string;
  regularWeight: string;
  tempo: string;
  breathing: string;
  setup: string[];
  execution: string[];
  errors: string[];
  progression: string;
  alternative: string;
  video: string;
};

export const exercises: Exercise[] = [
  {
    id:"bench", es:"Press de banca con barra", en:"Barbell Bench Press", group:"Pecho",
    primary:"Pectoral mayor", secondary:"Tríceps y deltoide anterior", sets:4, reps:"6–8", rest:150,
    beginnerWeight:"Barra técnica o 20 kg", regularWeight:"Carga que deje 2 repeticiones en reserva",
    tempo:"3-1-1", breathing:"Inhala antes de bajar, mantén el abdomen firme y exhala al superar la parte difícil.",
    setup:["Ojos debajo de la barra.","Pies firmes en el suelo.","Escápulas juntas y hacia abajo.","Agarre que deje antebrazos verticales abajo."],
    execution:["Saca la barra con brazos extendidos.","Baja al pecho medio con control.","Mantén muñecas sobre codos.","Empuja hacia arriba y ligeramente atrás."],
    errors:["Rebotar la barra.","Levantar los glúteos.","Abrir los codos a 90°.","Usar una carga que cambie el recorrido."],
    progression:"Cuando completes 4×8 con técnica estable y RIR 2, aumenta 2–2.5 kg.",
    alternative:"Press de pecho en máquina o con mancuernas.",
    video:"https://www.youtube.com/results?search_query=barbell+bench+press+proper+form"
  },
  {
    id:"lat", es:"Jalón al pecho", en:"Lat Pulldown", group:"Espalda",
    primary:"Dorsal ancho", secondary:"Bíceps, romboides y trapecio inferior", sets:4, reps:"8–10", rest:90,
    beginnerWeight:"Carga ligera que permita 10 repeticiones limpias", regularWeight:"Carga que deje RIR 2",
    tempo:"2-1-3", breathing:"Exhala al bajar la barra; inhala al subirla.",
    setup:["Ajusta el soporte sobre los muslos.","Agarre un poco más ancho que hombros.","Pecho alto y torso apenas inclinado."],
    execution:["Inicia bajando los hombros.","Lleva los codos hacia las costillas.","Acerca la barra al pecho superior.","Regresa hasta estirar sin perder control."],
    errors:["Tirar detrás de la nuca.","Balancear el torso.","Convertirlo en curl de bíceps.","Soltar el peso al subir."],
    progression:"Al completar 4×10 con RIR 2, sube un bloque de la máquina.",
    alternative:"Dominada asistida o jalón unilateral.",
    video:"https://www.youtube.com/results?search_query=lat+pulldown+proper+form"
  },
  {
    id:"incline", es:"Press inclinado con mancuernas", en:"Incline Dumbbell Press", group:"Pecho",
    primary:"Pectoral superior", secondary:"Tríceps y deltoide anterior", sets:3, reps:"8–10", rest:90,
    beginnerWeight:"4–8 kg por mancuerna", regularWeight:"Carga que deje RIR 2",
    tempo:"3-0-1", breathing:"Inhala al bajar y exhala al empujar.",
    setup:["Banco entre 20° y 35°.","Pies apoyados.","Escápulas estables.","Mancuernas a los lados del pecho."],
    execution:["Baja con codos a 30–60° del torso.","Mantén muñecas neutras.","Empuja sin chocar las mancuernas."],
    errors:["Banco demasiado vertical.","Encoger hombros.","Recorrido corto.","Perder el apoyo de los pies."],
    progression:"Cuando completes 3×10 con RIR 2, aumenta el menor salto disponible.",
    alternative:"Press inclinado en máquina.",
    video:"https://www.youtube.com/results?search_query=incline+dumbbell+press+proper+form"
  },
  {
    id:"row", es:"Remo sentado en polea", en:"Seated Cable Row", group:"Espalda",
    primary:"Dorsal ancho y romboides", secondary:"Trapecio medio, deltoide posterior y bíceps", sets:3, reps:"10–12", rest:90,
    beginnerWeight:"Carga ligera que permita pausa al final", regularWeight:"Carga que deje RIR 2",
    tempo:"2-1-3", breathing:"Exhala al tirar; inhala al extender.",
    setup:["Pies firmes.","Rodillas ligeramente flexionadas.","Torso alto y columna neutra."],
    execution:["Lleva hombros atrás.","Tira hacia abdomen alto.","Pausa sin sacar el pecho exageradamente.","Extiende brazos con control."],
    errors:["Balancear el torso.","Elevar hombros.","Tirar solo con brazos.","Redondear la espalda."],
    progression:"Al completar 3×12 limpio, sube un bloque.",
    alternative:"Remo con pecho apoyado.",
    video:"https://www.youtube.com/results?search_query=seated+cable+row+proper+form"
  },
  {
    id:"lateral", es:"Elevación lateral", en:"Dumbbell Lateral Raise", group:"Hombros",
    primary:"Deltoide lateral", secondary:"Supraespinoso", sets:3, reps:"12–15", rest:60,
    beginnerWeight:"2–4 kg por mancuerna", regularWeight:"Carga sin impulso y con RIR 1–2",
    tempo:"2-1-3", breathing:"Exhala al elevar; inhala al bajar.",
    setup:["Pies firmes.","Codos levemente flexionados.","Mancuernas al lado del cuerpo."],
    execution:["Eleva en el plano de la escápula.","Llega cerca de la altura de hombros.","Baja lentamente."],
    errors:["Encoger hombros.","Usar impulso.","Levantar demasiado peso.","Girar exageradamente los pulgares hacia abajo."],
    progression:"Primero llega a 15 repeticiones; luego aumenta 1–2 kg total.",
    alternative:"Elevación lateral en polea o máquina.",
    video:"https://www.youtube.com/results?search_query=dumbbell+lateral+raise+proper+form"
  },
  {
    id:"curl", es:"Curl de bíceps con mancuernas", en:"Dumbbell Biceps Curl", group:"Brazos",
    primary:"Bíceps braquial", secondary:"Braquial y braquiorradial", sets:3, reps:"10–12", rest:60,
    beginnerWeight:"3–6 kg por mancuerna", regularWeight:"Carga sin balanceo y con RIR 2",
    tempo:"2-1-3", breathing:"Exhala al flexionar; inhala al bajar.",
    setup:["Torso alto.","Codos junto al cuerpo.","Muñecas neutras."],
    execution:["Flexiona sin mover hombros.","Supina la palma.","Aprieta arriba.","Baja hasta extensión controlada."],
    errors:["Balancear el torso.","Adelantar codos.","Doblar muñecas.","Soltar la bajada."],
    progression:"Al completar 3×12, aumenta el salto mínimo.",
    alternative:"Curl en polea.",
    video:"https://www.youtube.com/results?search_query=dumbbell+biceps+curl+proper+form"
  },
  {
    id:"pushdown", es:"Extensión de tríceps en polea", en:"Cable Triceps Pushdown", group:"Brazos",
    primary:"Tríceps braquial", secondary:"Ancóneo", sets:3, reps:"10–12", rest:60,
    beginnerWeight:"Carga ligera con codos quietos", regularWeight:"Carga con RIR 2",
    tempo:"2-1-3", breathing:"Exhala al extender; inhala al volver.",
    setup:["Codos pegados al torso.","Hombros abajo.","Postura estable."],
    execution:["Extiende hasta casi bloquear.","Pausa abajo.","Regresa sin desplazar codos."],
    errors:["Mover hombros.","Abrir codos.","Inclinarse demasiado.","Usar impulso."],
    progression:"Al completar 3×12, sube un bloque.",
    alternative:"Extensión de tríceps en máquina.",
    video:"https://www.youtube.com/results?search_query=cable+triceps+pushdown+proper+form"
  },
  {
    id:"squat", es:"Sentadilla con barra", en:"Barbell Back Squat", group:"Piernas",
    primary:"Cuádriceps y glúteo mayor", secondary:"Aductores, abdomen y erectores espinales", sets:4, reps:"6–8", rest:180,
    beginnerWeight:"Primero sentadilla al banco o barra técnica", regularWeight:"Carga que deje RIR 3 al aprender",
    tempo:"3-1-1", breathing:"Inhala y crea presión abdominal antes de bajar; exhala al terminar la subida.",
    setup:["Barra sobre trapecios, no sobre cuello.","Pies a ancho cómodo.","Abdomen firme.","Mira al frente o ligeramente abajo."],
    execution:["Baja entre las caderas.","Rodillas siguen la dirección de los pies.","Mantén presión en todo el pie.","Sube sin colapsar rodillas."],
    errors:["Aumentar peso antes de dominar profundidad.","Talones levantados.","Rodillas hacia adentro.","Perder neutralidad lumbar."],
    progression:"Solo aumenta cuando 4×8 sea estable; salto de 2.5–5 kg.",
    alternative:"Sentadilla Hack o prensa de piernas.",
    video:"https://www.youtube.com/results?search_query=barbell+back+squat+proper+form"
  },
  {
    id:"rdl", es:"Peso muerto rumano", en:"Romanian Deadlift", group:"Piernas",
    primary:"Isquiotibiales y glúteos", secondary:"Erectores espinales y agarre", sets:4, reps:"8", rest:150,
    beginnerWeight:"Kettlebell de 15–25 lb o barra vacía", regularWeight:"Carga con RIR 2",
    tempo:"3-1-1", breathing:"Inhala antes de bajar, mantén presión y exhala al extender la cadera.",
    setup:["Pies al ancho de cadera.","Rodillas apenas flexionadas.","Carga junto a muslos.","Columna neutra."],
    execution:["Empuja caderas atrás.","Desliza la carga pegada a piernas.","Detén donde mantengas postura y tensión.","Aprieta glúteos al subir."],
    errors:["Convertirlo en sentadilla.","Alejar la carga.","Redondear espalda.","Bajar por obligación hasta el piso."],
    progression:"Al completar todas las series con igual recorrido, aumenta 2.5–5 kg.",
    alternative:"Bisagra con kettlebell o curl femoral.",
    video:"https://www.youtube.com/results?search_query=romanian+deadlift+proper+form"
  },
  {
    id:"legpress", es:"Prensa de piernas", en:"Leg Press", group:"Piernas",
    primary:"Cuádriceps", secondary:"Glúteos y aductores", sets:3, reps:"10", rest:120,
    beginnerWeight:"Trineo vacío o mínimo de la máquina", regularWeight:"Carga con RIR 2",
    tempo:"3-1-1", breathing:"Inhala al bajar; exhala al empujar.",
    setup:["Pelvis y espalda apoyadas.","Pies a ancho cómodo.","Rodillas alineadas."],
    execution:["Baja hasta antes de despegar la pelvis.","Empuja con todo el pie.","No bloquees violentamente."],
    errors:["Despegar la cadera.","Cerrar rodillas.","Recorrido mínimo.","Cargar discos sin considerar el peso del trineo."],
    progression:"Completa 3×10 con RIR 2 y añade el menor salto.",
    alternative:"Sentadilla Hack.",
    video:"https://www.youtube.com/results?search_query=leg+press+proper+form"
  },
  {
    id:"legcurl", es:"Curl femoral", en:"Leg Curl", group:"Piernas",
    primary:"Isquiotibiales", secondary:"Gastrocnemio", sets:3, reps:"10–12", rest:75,
    beginnerWeight:"Carga que permita 12 repeticiones lentas", regularWeight:"RIR 1–2",
    tempo:"2-1-3", breathing:"Exhala al flexionar; inhala al extender.",
    setup:["Alinea rodilla con el eje.","Ajusta almohadilla sobre el tobillo.","Fija la pelvis."],
    execution:["Flexiona sin levantar cadera.","Pausa.","Extiende lentamente."],
    errors:["Recorrido corto.","Arquear espalda.","Golpear las placas.","Desalinear la rodilla."],
    progression:"Al completar 3×12, sube un bloque.",
    alternative:"Curl femoral sentado o deslizamientos.",
    video:"https://www.youtube.com/results?search_query=leg+curl+proper+form"
  },
  {
    id:"legextension", es:"Extensión de cuádriceps", en:"Leg Extension", group:"Piernas",
    primary:"Cuádriceps", secondary:"—", sets:3, reps:"12", rest:75,
    beginnerWeight:"Carga ligera sin molestias de rodilla", regularWeight:"RIR 1–2",
    tempo:"2-1-3", breathing:"Exhala al extender; inhala al bajar.",
    setup:["Alinea rodilla con eje.","Rodillo sobre la parte baja de la tibia.","Espalda apoyada."],
    execution:["Extiende con control.","Pausa arriba.","Baja lentamente."],
    errors:["Patada explosiva.","Despegar cadera.","Carga excesiva.","Recorrido doloroso."],
    progression:"Al completar 3×12 sin molestias, sube un bloque.",
    alternative:"Prensa con pies bajos.",
    video:"https://www.youtube.com/results?search_query=leg+extension+proper+form"
  },
  {
    id:"calf", es:"Elevación de pantorrillas", en:"Calf Raise", group:"Pantorrillas",
    primary:"Gastrocnemio y sóleo", secondary:"Músculos estabilizadores del pie", sets:4, reps:"12–15", rest:60,
    beginnerWeight:"Peso corporal", regularWeight:"Carga con recorrido completo",
    tempo:"2-1-3", breathing:"Respira de manera continua.",
    setup:["Apoya la parte anterior del pie.","Rodillas según variante.","Sujétate para estabilidad."],
    execution:["Baja el talón lentamente.","Sube al máximo controlado.","Pausa arriba."],
    errors:["Rebotar.","Recorrido corto.","Girar tobillos.","Priorizar carga sobre control."],
    progression:"Llega a 15 y luego aumenta la carga mínima.",
    alternative:"Prensa para pantorrillas.",
    video:"https://www.youtube.com/results?search_query=calf+raise+proper+form"
  },
  {
    id:"pullup", es:"Dominada asistida", en:"Assisted Pull-up", group:"Espalda",
    primary:"Dorsal ancho", secondary:"Bíceps, romboides y trapecio inferior", sets:4, reps:"6–10", rest:120,
    beginnerWeight:"Alta asistencia", regularWeight:"Asistencia que deje RIR 2",
    tempo:"2-1-3", breathing:"Exhala al subir; inhala al bajar.",
    setup:["Agarre cómodo.","Hombros lejos de orejas.","Rodillas o pies firmes en soporte."],
    execution:["Inicia bajando escápulas.","Lleva pecho hacia barra.","Baja hasta extensión controlada."],
    errors:["Balancearse.","Encoger hombros.","Acortar recorrido.","Reducir asistencia demasiado rápido."],
    progression:"Al completar 4×10, reduce un bloque de asistencia.",
    alternative:"Jalón al pecho.",
    video:"https://www.youtube.com/results?search_query=assisted+pullup+proper+form"
  },
  {
    id:"ohp", es:"Press de hombro", en:"Overhead Press", group:"Hombros",
    primary:"Deltoide anterior", secondary:"Deltoide lateral, tríceps y core", sets:4, reps:"6–8", rest:150,
    beginnerWeight:"Máquina o mancuernas de 3–6 kg", regularWeight:"Carga con RIR 2",
    tempo:"2-0-2", breathing:"Inhala abajo y exhala al empujar.",
    setup:["Costillas sobre pelvis.","Glúteos firmes.","Agarre apenas más ancho que hombros."],
    execution:["Empuja sobre la cabeza.","Mantén antebrazos verticales.","Termina con brazos alineados."],
    errors:["Arquear lumbar.","Encoger hombros.","Empujar hacia delante.","Forzar un recorrido doloroso."],
    progression:"Al completar 4×8, aumenta 1–2 kg por lado o el salto mínimo.",
    alternative:"Press de hombro en máquina.",
    video:"https://www.youtube.com/results?search_query=overhead+press+proper+form"
  },
  {
    id:"facepull", es:"Jalón facial", en:"Face Pull", group:"Hombros / espalda",
    primary:"Deltoide posterior", secondary:"Trapecio medio y rotadores externos", sets:3, reps:"12–15", rest:60,
    beginnerWeight:"Carga muy ligera", regularWeight:"Carga que permita pausa",
    tempo:"2-1-3", breathing:"Exhala al tirar; inhala al regresar.",
    setup:["Polea a altura de rostro.","Agarre de cuerda.","Torso estable."],
    execution:["Tira hacia ojos o frente.","Separa manos al final.","Pausa y vuelve."],
    errors:["Carga excesiva.","Arquear espalda.","Tirar hacia el pecho.","Encoger hombros."],
    progression:"Al completar 15 limpias, sube un bloque pequeño.",
    alternative:"Pájaros en máquina.",
    video:"https://www.youtube.com/results?search_query=face+pull+proper+form"
  },
  {
    id:"hack", es:"Sentadilla Hack", en:"Hack Squat", group:"Piernas",
    primary:"Cuádriceps", secondary:"Glúteos y aductores", sets:4, reps:"8", rest:150,
    beginnerWeight:"Trineo vacío", regularWeight:"Carga con RIR 2",
    tempo:"3-1-1", breathing:"Inhala al bajar; exhala al subir.",
    setup:["Espalda y hombros apoyados.","Pies a posición cómoda.","Rodillas alineadas."],
    execution:["Baja con control.","Mantén pelvis apoyada.","Empuja con todo el pie."],
    errors:["Rebotar abajo.","Cerrar rodillas.","Bloquear violentamente.","Exceso de carga."],
    progression:"Completa 4×8 y agrega el menor salto.",
    alternative:"Prensa o sentadilla al banco.",
    video:"https://www.youtube.com/results?search_query=hack+squat+proper+form"
  },
  {
    id:"hipthrust", es:"Empuje de cadera", en:"Hip Thrust", group:"Glúteos",
    primary:"Glúteo mayor", secondary:"Isquiotibiales", sets:4, reps:"8–10", rest:120,
    beginnerWeight:"Peso corporal o 15 lb", regularWeight:"Carga con RIR 2",
    tempo:"2-1-2", breathing:"Exhala al elevar; inhala al bajar.",
    setup:["Borde del banco bajo escápulas.","Pies firmes.","Mentón ligeramente recogido."],
    execution:["Eleva cadera hasta pelvis neutra.","Pausa contrayendo glúteos.","Baja con control."],
    errors:["Hiperextender espalda.","Pies demasiado lejos.","Empujar con puntas.","Perder estabilidad del banco."],
    progression:"Al completar 4×10, aumenta 2.5–5 kg.",
    alternative:"Puente de glúteos.",
    video:"https://www.youtube.com/results?search_query=hip+thrust+proper+form"
  },
  {
    id:"bulgarian", es:"Sentadilla búlgara", en:"Bulgarian Split Squat", group:"Piernas",
    primary:"Cuádriceps y glúteo mayor", secondary:"Aductores y core", sets:3, reps:"8–10 por lado", rest:90,
    beginnerWeight:"Peso corporal y apoyo de una mano", regularWeight:"Mancuernas con RIR 2",
    tempo:"3-1-1", breathing:"Inhala al bajar; exhala al subir.",
    setup:["Pie trasero sobre banco bajo.","Pie delantero lo bastante lejos.","Sujétate si mejora la estabilidad."],
    execution:["Baja verticalmente.","Rodilla sigue el pie.","Empuja con el pie delantero."],
    errors:["Perder equilibrio por no usar apoyo.","Paso demasiado corto.","Rodilla colapsa.","Impulsarse con pierna trasera."],
    progression:"Primero 10 por lado sin perder equilibrio; después añade carga.",
    alternative:"Zancada estática o prensa unilateral.",
    video:"https://www.youtube.com/results?search_query=bulgarian+split+squat+proper+form"
  },
  {
    id:"abduction", es:"Abducción de cadera en máquina", en:"Hip Abduction Machine", group:"Glúteos",
    primary:"Glúteo medio y menor", secondary:"Tensor de fascia lata", sets:3, reps:"12–15", rest:60,
    beginnerWeight:"Carga ligera", regularWeight:"Carga con pausa y RIR 1–2",
    tempo:"2-1-3", breathing:"Exhala al abrir; inhala al cerrar.",
    setup:["Pelvis centrada.","Espalda apoyada o ligera inclinación estable.","Pies sobre soportes."],
    execution:["Abre las rodillas sin impulso.","Pausa.","Cierra lentamente."],
    errors:["Golpear placas.","Mover torso.","Recorrido mínimo.","Carga excesiva."],
    progression:"Al completar 15 con pausa, sube un bloque.",
    alternative:"Abducción en polea.",
    video:"https://www.youtube.com/results?search_query=hip+abduction+machine+proper+form"
  },
  {
    id:"kbswing", es:"Balanceo con kettlebell", en:"Kettlebell Swing", group:"Cadena posterior",
    primary:"Glúteos e isquiotibiales", secondary:"Core, espalda alta y agarre", sets:4, reps:"12–15", rest:75,
    beginnerWeight:"15 lb hasta dominar bisagra", regularWeight:"25 lb",
    tempo:"Explosivo-controlado", breathing:"Exhala corto al extender la cadera; inhala al regresar.",
    setup:["Kettlebell delante de los pies.","Pies algo más anchos que cadera.","Columna neutra."],
    execution:["Lleva la pesa atrás como pase de fútbol.","Extiende cadera con fuerza.","Deja que la pesa flote.","Recíbela con nueva bisagra."],
    errors:["Hacer sentadilla.","Elevar con brazos.","Hiperextender espalda.","Perder control de la trayectoria."],
    progression:"Primero añade repeticiones; luego usa 25 lb.",
    alternative:"Peso muerto con kettlebell.",
    video:"https://www.youtube.com/results?search_query=kettlebell+swing+proper+form"
  },
  {
    id:"goblet", es:"Sentadilla copa", en:"Goblet Squat", group:"Piernas",
    primary:"Cuádriceps y glúteos", secondary:"Core y aductores", sets:3, reps:"10–15", rest:75,
    beginnerWeight:"15 lb", regularWeight:"25 lb",
    tempo:"3-1-1", breathing:"Inhala antes de bajar; exhala al subir.",
    setup:["Sujeta la pesa frente al pecho.","Pies a ancho cómodo.","Codos debajo de la carga."],
    execution:["Baja entre las caderas.","Rodillas siguen pies.","Mantén torso firme.","Sube empujando el suelo."],
    errors:["Separar la pesa del cuerpo.","Talones levantados.","Rodillas hacia dentro.","Apresurar el descenso."],
    progression:"Llega a 15 con 15 lb; luego usa 25 lb y vuelve a 10.",
    alternative:"Sentadilla al banco.",
    video:"https://www.youtube.com/results?search_query=goblet+squat+proper+form"
  },
  {
    id:"kbrow", es:"Remo con kettlebell a una mano", en:"One-arm Kettlebell Row", group:"Espalda",
    primary:"Dorsal ancho y romboides", secondary:"Bíceps, deltoide posterior y core", sets:3, reps:"10–12 por lado", rest:60,
    beginnerWeight:"15 lb", regularWeight:"25 lb",
    tempo:"2-1-3", breathing:"Exhala al tirar; inhala al bajar.",
    setup:["Apoya una mano.","Cadera atrás.","Espalda neutra."],
    execution:["Lleva el codo hacia la cadera.","Pausa.","Baja hasta estirar sin girar el torso."],
    errors:["Rotar el cuerpo.","Encoger hombro.","Tirar hacia el pecho.","Redondear espalda."],
    progression:"Llega a 12 con 15 lb; después usa 25 lb.",
    alternative:"Remo en polea.",
    video:"https://www.youtube.com/results?search_query=one+arm+kettlebell+row+proper+form"
  },
  {
    id:"kbpress", es:"Press de hombro con kettlebell", en:"Kettlebell Overhead Press", group:"Hombros",
    primary:"Deltoide anterior", secondary:"Tríceps y core", sets:3, reps:"8–10 por lado", rest:75,
    beginnerWeight:"15 lb, o menos si no hay control", regularWeight:"15–25 lb",
    tempo:"2-0-2", breathing:"Exhala al empujar; inhala al bajar.",
    setup:["Pesa en posición rack.","Muñeca neutra.","Costillas abajo."],
    execution:["Empuja sobre la cabeza.","Termina alineado.","Baja a rack con control."],
    errors:["Inclinarse lateralmente.","Arquear espalda.","Muñeca doblada.","Forzar 25 lb demasiado pronto."],
    progression:"Llega a 10 por lado con 15 lb; solo entonces prueba 25 lb.",
    alternative:"Press con mancuerna o máquina.",
    video:"https://www.youtube.com/results?search_query=kettlebell+overhead+press+proper+form"
  },
  {
    id:"carry", es:"Caminata del granjero", en:"Farmer Carry", group:"Core y agarre",
    primary:"Antebrazos y estabilizadores del tronco", secondary:"Trapecio, glúteos y piernas", sets:4, reps:"30–45 segundos", rest:60,
    beginnerWeight:"15 lb en una mano; alterna", regularWeight:"15 + 25 lb, alternando lados",
    tempo:"Paso controlado", breathing:"Respira corto y controlado sin perder presión abdominal.",
    setup:["Carga segura.","Postura alta.","Hombros abajo.","Espacio despejado."],
    execution:["Camina con pasos cortos.","Evita inclinarte.","Gira con control.","Cambia lados."],
    errors:["Correr.","Encoger hombros.","Inclinarse.","Aguantar la respiración demasiado tiempo."],
    progression:"Aumenta primero tiempo o distancia; después carga.",
    alternative:"Suitcase carry o marcha estática.",
    video:"https://www.youtube.com/results?search_query=farmer+carry+proper+form"
  }
];

export const plans = {
  "Superior A": ["bench","lat","incline","row","lateral","curl","pushdown"],
  "Pierna A": ["squat","rdl","legpress","legcurl","legextension","calf"],
  "Superior B": ["pullup","ohp","row","bench","facepull","curl","pushdown"],
  "Pierna B": ["hack","hipthrust","bulgarian","legcurl","abduction","calf"],
  "Casa Kettlebell": ["kbswing","goblet","kbrow","kbpress","carry"]
} as const;

export const weeklySchedules = {
  beginner: [
    {day:"Lunes", plan:"Superior A"},
    {day:"Martes", plan:"Caminata y movilidad"},
    {day:"Miércoles", plan:"Pierna A"},
    {day:"Jueves", plan:"Descanso"},
    {day:"Viernes", plan:"Superior B"},
    {day:"Sábado", plan:"Caminata suave"},
    {day:"Domingo", plan:"Descanso"}
  ],
  regular: [
    {day:"Lunes", plan:"Superior A"},
    {day:"Martes", plan:"Pierna A"},
    {day:"Miércoles", plan:"Recuperación activa"},
    {day:"Jueves", plan:"Superior B"},
    {day:"Viernes", plan:"Pierna B"},
    {day:"Sábado", plan:"Casa Kettlebell"},
    {day:"Domingo", plan:"Descanso"}
  ]
} as const;
