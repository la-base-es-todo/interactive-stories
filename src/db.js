const stories = [
    {
        ifid: 1,
        route: "escape-a-marte",
        cover: "https://source.unsplash.com/250x200/?space",
        title: "Escape a Marte",
        synopsis: `En un futuro distante la tierra ya no es un lugar habitable. La raza humana está dividida en dos facciones: los "Rebeldes" y los "Ciudadanos". Ayuda a Rick el ciudadano a escapar de la catástrofe hacia el planeta rojo.`,
        passages: [{
            pid: "home",
            name: "En el Apartamento",
            text: `Finalmente llegó el día. Planeo este viaje a Marte hace tiempo.
        La Tierra ya no es un lugar habitable. Los gases en la atmósfera son cada día más tóxicos y la guerra está cerca.
        Además, no me queda nadie. Todos... se fueron... o están muertos.
        Temo por mi seguridad. En la extranet se dice que en unos días los rebeldes llegarán a la ciudad. Aún hay tiempo...
        ¿Qué fue eso? ¡una explosión!`,
            links: [{
                pid: "A4",
                text: "Ve por la ventana el origen de la explosión",
            },
            {
                pid: "A2",
                text: "Toma tu FlotoMoto y vuela al EspacioPuerto",
            },
            ],
        },
        {
            pid: "A4",
            name: null,
            text: `La explosión fue a unos pocos bloques de aquí. ¡Los Rebeldes llegaron a la ciudad antes de lo esperado!
        Debo huir. Pronto.
        Ir volando en FlotoMoto puede ser peligroso si hay una batalla en las calles.
        Sería un blanco muy fácil, aunque llegaría rápido al Espacio-Puerto`,
            links: [{
                pid: "A2",
                text: "Toma tu FlotoMoto y vuela al EspacioPuerto",
            },
            { pid: "A5", text: "Ve al EspacioPuerto a pie" },
            ],
        },
        {
            pid: "A2",
            name: null,
            text: `Menos mal que cargué las baterías de mi moto voladora!
        ¡Logré aterrizar bien!
        Debería llegar al Espacio Puerto con tiempo de sobra.
        Apenas levanté vuelo escuché disparos ¡Me dieron! Me están persiguiendo los rebeldes. No quieren que nadie huya de la ciudad.
        La Floto-Moto pierde velocidad.`,
            links: [
                { pid: "A3", text: "Aterriza en el tejado más cercano" },
                { pid: "C1", text: "Intenta seguir volando" },
            ],
        },
        {
            pid: "A3",
            name: null,
            text: `¡Logre aterrizar bien!
        Los rebeldes aun me persiguen pero puedo entrar al edificio y bajar por las escaleras.
        Creo que no me vieron. ¡Los perdi!
        En la planta baja escucho una voz pidiendo ayuda.`,
            links: [
                { pid: "C2", text: "Asiste a quien pide ayuda" },
                {
                    pid: "A6",
                    text: "Ignora el pedido de auxilio y salir del edificio",
                },
            ],
        },
        {
            pid: "C2",
            name: null,
            text: `Era una trampa.
        Los rebeldes usaron una grabación de una niña para atraer ciudadanos y encarcelarlos.
        Me enviarán a las colonias de esclavos.`,
            links: [],
        },
        {
            pid: "A6",
            name: null,
            text: `Por mucho que me cueste tengo que seguir. La nave partira dentro de una hora rumbo a Marte.
        Mientras te alejas del edificio se escucha un disparo y los gritos de auxilio se transforma en suplicas.`,
            links: [{
                pid: "C3",
                text: "Vuelve y ayuda a la persona que suplica por su vida",
            },
            {
                pid: "B1",
                text: "Sigue adelante, el cohete no esperara a nadie que se retrase",
            },
            ],
        },
        {
            pid: "B1",
            name: null,
            text: `Ir con cautela hizo que demore un poco más pero por suerte la nave aún no despegó.
        Llegé a tiempo.
        Otra explosión!
        Por suerte ya estoy en la nave.
        Despegamos.. rumbo a Marte.`,
            links: [],
        },
        {
            pid: "C3",
            name: null,
            text: `Los rebeldes usaron grabaciones falsas para atraer ciudadanos.
        Me enviarán a las colonias de esclavos.`,
            links: [],
        },
        {
            pid: "C1",
            name: null,
            text: `La Floto-Moto no puede continuar. Los Rebeldes me alcanzaron.
        Me dispararon por la espalda.
        Perdí mucha sangre.`,
            links: [],
        },
        {
            pid: "A5",
            name: null,
            text: `Al ir a pie puedo esconderme mejor en las callejuelas de la ciudad. Debido a la superpoblación no quedan muchos espacios abiertos.
        Luego de recorrer media ciudad a pie miro el reloj y veo que el tiempo se acaba y la nave está por despegar en 15 minutos`,
            links: [
                { pid: "B1", text: "Continúa andando con cautela" },
                { pid: "C4", text: "Corre sin importar quién te vea" },
            ],
        },
        {
            pid: "C4",
            name: null,
            text: `Al correr mi presencia fue notada por los rebeldes.
        Me atraparon inmediatamente.
        Me enviarán a las colonias de esclavos.`,
            links: [],
        },
        ],
    },
    {
        ifid: 2,
        route: "escape-a-marte-dos",
        cover: "https://source.unsplash.com/250x200/?cats",
        title: "Cat Paw",
        synopsis: `En un futuro distante la tierra ya no es un lugar habitable. La raza humana está dividida en dos facciones: los "Rebeldes" y los "Ciudadanos". Ayuda a Rick el ciudadano a escapar de la catástrofe hacia el planeta rojo.`,
        passages: [{
            pid: "home",
            name: "En el Apartamento",
            text: `Finalmente llegó el día. Planeo este viaje a Marte hace tiempo.
        La Tierra ya no es un lugar habitable. Los gases en la atmósfera son cada día más tóxicos y la guerra está cerca.
        Además, no me queda nadie. Todos... se fueron... o están muertos.
        Temo por mi seguridad. En la extranet se dice que en unos días los rebeldes
        llegarán a la ciudad. Aún hay tiempo...
        ¿Qué fue eso? ¡una explosión!`,
            links: [{
                pid: "A4",
                text: "...ver por la ventana el origen de la explosion?",
            },
            {
                pid: "A2",
                text: "...tomar tu FlotoMoto y volar al EspacioPuerto?",
            },
            ],
        },
        {
            pid: "A4",
            name: null,
            text: `La explosión fue a unos pocos bloques de aquí. ¡Los Rebeldes llegaron a la
        ciudad antes de lo esperado!
        Debo huir. Pronto.
        Ir volando en FlotoMoto puede ser peligroso si hay una batalla en las calles.
        Sería un blanco muy fácil, aunque llegaría rápido al Espacio-Puerto`,
            links: [{
                pid: "A2",
                text: "...tomar tu FlotoMoto y volar al EspacioPuerto?",
            },
            { pid: "A5", text: "...ir al EspacioPuerto a pie?" },
            ],
        },
        {
            pid: "A2",
            name: 'Persecución frenética',
            text: `Menos mal que cargué las baterías de mi moto voladora!
        ¡Logré aterrizar bien!
        Debería llegar al Espacio Puerto con tiempo de sobra.
        Apenas levanté vuelo escuché disparos ¡Me dieron! Me están persiguiendo
        los rebeldes. No quieren que nadie huya de la ciudad.
        La Floto-Moto pierde velocidad.
        Apenas levanté vuelo escuché disparos ¡Me dieron! 
        Me están persiguiendo los rebeldes. No quieren que nadie huya de la ciudad.
        La Floto-Moto pierde velocidad.
        Apenas levanté vuelo escuché disparos ¡Me dieron! Me están persiguiendo
        los rebeldes. No quieren que nadie huya de la ciudad.
        La Floto-Moto pierde velocidad.
        Apenas levanté vuelo escuché disparos ¡Me dieron! Me están persiguiendo
        los rebeldes. No quieren que nadie huya de la ciudad.
        La Floto-Moto pierde velocidad.
        Apenas levanté vuelo escuché disparos ¡Me dieron! Me están persiguiendo
        los rebeldes. No quieren que nadie huya de la ciudad.
        La Floto-Moto pierde velocidad.
        `,
            links: [
                { pid: "A3", text: "...aterrizar en el tejado más cercano?" },
                { pid: "C1", text: "...intentar seguir volando?" },
            ],
        },
        {
            pid: "A3",
            name: null,
            text: `¡Logre aterrizar bien!
        Los rebeldes aun me persiguen pero puedo entrar al edificio y bajar por las escaleras.
        Creo que no me vieron. ¡Los perdi!
        En la planta baja escucho una voz pidiendo ayuda.`,
            links: [
                { pid: "C2", text: "...asistir a quien pide ayuda?" },
                {
                    pid: "A6",
                    text: "...ignorar el pedido de auxilio y salir del edificio?",
                },
            ],
        },
        {
            pid: "C2",
            name: null,
            text: `Era una trampa.
        Los rebeldes usaron una grabación de una niña para atraer ciudadanos y
        encarcelarlos.
        Me enviarán a las colonias de esclavos.`,
            links: [],
        },
        {
            pid: "A6",
            name: null,
            text: `Por mucho que me cueste tengo que seguir. La nave partira dentro de una hora rumbo a Marte.
        Mientras te alejas del edificio se escucha un disparo y los gritos de auxilio se transforma en suplicas.`,
            links: [{
                pid: "C3",
                text: "...volver y ayudar a la persona que suplica por su vida?",
            },
            {
                pid: "B1",
                text: "...seguir adelante, el cohete no esperara a nadie que se retrase?",
            },
            ],
        },
        {
            pid: "B1",
            name: null,
            text: `Ir con cautela hizo que demore un poco más pero por suerte la nave aún no
        despegó.
        Llegé a tiempo.
        Otra explosión!
        Por suerte ya estoy en la nave.
        Despegamos.. rumbo a Marte.`,
            links: [],
        },
        {
            pid: "C3",
            name: null,
            text: `Los rebeldes usaron grabaciones falsas para atraer ciudadanos.
        Me enviarán a las colonias de esclavos.`,
            links: [],
        },
        {
            pid: "C1",
            name: null,
            text: `La Floto-Moto no puede continuar. Los Rebeldes me alcanzaron.
        Me dispararon por la espalda.
        Perdí mucha sangre.`,
            links: [],
        },
        {
            pid: "A5",
            name: null,
            text: `Al ir a pie puedo esconderme mejor en las callejuelas de la ciudad. Debido a
        la superpoblación no quedan muchos espacios abiertos.
        Luego de recorrer media ciudad a pie miro el reloj y veo que el tiempo se
        acaba y la nave está por despegar en 15 minutos`,
            links: [
                { pid: "B1", text: "...continuar andando con cautela?" },
                { pid: "C4", text: "...correr sin importar quién me vea?" },
            ],
        },
        {
            pid: "C4",
            name: null,
            text: `Al correr mi presencia fue notada por los rebeldes.
        Me atraparon inmediatamente.
        Me enviarán a las colonias de esclavos.`,
            links: [],
        },
        ],
    },

];

export default stories;
