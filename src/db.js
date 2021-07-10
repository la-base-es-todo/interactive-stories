const stories = [
  {
    id: 1,
    cover: "https://source.unsplash.com/250x200/?space",
    title: "Escape a Marte",
    synopsis: `En un futuro distante la tierra ya no es un lugar habitable. La raza humana está dividida en dos facciones: los "Rebeldes" y los "Ciudadanos". Ayuda a Rick el ciudadano a escapar de la catástrofe hacia el planeta rojo.`,
    story: [
      {
        page: "home",
        title: "En el Apartamento",
        text: `Finalmente llegó el día. Planeo este viaje a Marte hace tiempo.
        La Tierra ya no es un lugar habitable. Los gases en la atmósfera son cada día más tóxicos y la guerra está cerca.
        Además, no me queda nadie. Todos... se fueron... o están muertos.
        Temo por mi seguridad. En la extranet se dice que en unos días los rebeldes llegarán a la ciudad. Aún hay tiempo...
        ¿Qué fue eso? ¡una explosión!`,
        options: [
          {
            link: "A4",
            text: "...ver por la ventana el origen de la explosion?",
          },
          {
            link: "A2",
            text: "...tomar tu FlotoMoto y volar al EspacioPuerto?",
          },
        ],
      },
      {
        page: "A4",
        title: null,
        text: `La explosión fue a unos pocos bloques de aquí. ¡Los Rebeldes llegaron a la ciudad antes de lo esperado!
        Debo huir. Pronto.
        Ir volando en FlotoMoto puede ser peligroso si hay una batalla en las calles.
        Sería un blanco muy fácil, aunque llegaría rápido al Espacio-Puerto`,
        options: [
          {
            link: "A2",
            text: "...tomar tu FlotoMoto y volar al EspacioPuerto?",
          },
          { link: "A5", text: "...ir al EspacioPuerto a pie?" },
        ],
      },
      {
        page: "A2",
        title: null,
        text: `Menos mal que cargué las baterías de mi moto voladora!
        ¡Logré aterrizar bien!
        Debería llegar al Espacio Puerto con tiempo de sobra.
        Apenas levanté vuelo escuché disparos ¡Me dieron! Me están persiguiendo los rebeldes. No quieren que nadie huya de la ciudad.
        La Floto-Moto pierde velocidad.`,
        options: [
          { link: "A3", text: "...aterrizar en el tejado más cercano?" },
          { link: "C1", text: "...intentar seguir volando?" },
        ],
      },
      {
        page: "A3",
        title: null,
        text: `¡Logre aterrizar bien!
        Los rebeldes aun me persiguen pero puedo entrar al edificio y bajar por las escaleras.
        Creo que no me vieron. ¡Los perdi!
        En la planta baja escucho una voz pidiendo ayuda.`,
        options: [
          { link: "C2", text: "...asistir a quien pide ayuda?" },
          {
            link: "A6",
            text: "...ignorar el pedido de auxilio y salir del edificio?",
          },
        ],
      },
      {
        page: "C2",
        title: null,
        text: `Era una trampa.
        Los rebeldes usaron una grabación de una niña para atraer ciudadanos y encarcelarlos.
        Me enviarán a las colonias de esclavos.`,
        options: [],
      },
      {
        page: "A6",
        title: null,
        text: `Por mucho que me cueste tengo que seguir. La nave partira dentro de una hora rumbo a Marte.
        Mientras te alejas del edificio se escucha un disparo y los gritos de auxilio se transforma en suplicas.`,
        options: [
          {
            link: "C3",
            text: "...volver y ayudar a la persona que suplica por su vida?",
          },
          {
            link: "B1",
            text: "...seguir adelante, el cohete no esperara a nadie que se retrase?",
          },
        ],
      },
      {
        page: "B1",
        title: null,
        text: `Ir con cautela hizo que demore un poco más pero por suerte la nave aún no despegó.
        Llegé a tiempo.
        Otra explosión!
        Por suerte ya estoy en la nave.
        Despegamos.. rumbo a Marte.`,
        options: [],
      },
      {
        page: "C3",
        title: null,
        text: `Los rebeldes usaron grabaciones falsas para atraer ciudadanos.
        Me enviarán a las colonias de esclavos.`,
        options: [],
      },
      {
        page: "C1",
        title: null,
        text: `La Floto-Moto no puede continuar. Los Rebeldes me alcanzaron.
        Me dispararon por la espalda.
        Perdí mucha sangre.`,
        options: [],
      },
      {
        page: "A5",
        title: null,
        text: `Al ir a pie puedo esconderme mejor en las callejuelas de la ciudad. Debido a la superpoblación no quedan muchos espacios abiertos.
        Luego de recorrer media ciudad a pie miro el reloj y veo que el tiempo se acaba y la nave está por despegar en 15 minutos`,
        options: [
          { link: "B1", text: "...continuar andando con cautela?" },
          { link: "C4", text: "...correr sin importar quién me vea?" },
        ],
      },
      {
        page: "C4",
        title: null,
        text: `Al correr mi presencia fue notada por los rebeldes.
        Me atraparon inmediatamente.
        Me enviarán a las colonias de esclavos.`,
        options: [],
      },
    ],
  },
  {
    id: 2,
    cover: "https://source.unsplash.com/250x200/?cats",
    title: "Escape CATS",
    synopsis: `mIAU`,
    story: [
      {
        page: "home",
        title: "En el Apartamento",
        text: `Finalmente llegó el día. Planeo este viaje a Marte hace tiempo.
        La Tierra ya no es un lugar habitable. Los gases en la atmósfera son cada día más tóxicos y la guerra está cerca.
        Además, no me queda nadie. Todos... se fueron... o están muertos.
        Temo por mi seguridad. En la extranet se dice que en unos días los rebeldes
        llegarán a la ciudad. Aún hay tiempo...
        ¿Qué fue eso? ¡una explosión!`,
        options: [
          {
            link: "A4",
            text: "...ver por la ventana el origen de la explosion?",
          },
          {
            link: "A2",
            text: "...tomar tu FlotoMoto y volar al EspacioPuerto?",
          },
        ],
      },
      {
        page: "A4",
        title: null,
        text: `La explosión fue a unos pocos bloques de aquí. ¡Los Rebeldes llegaron a la
        ciudad antes de lo esperado!
        Debo huir. Pronto.
        Ir volando en FlotoMoto puede ser peligroso si hay una batalla en las calles.
        Sería un blanco muy fácil, aunque llegaría rápido al Espacio-Puerto`,
        options: [
          {
            link: "A2",
            text: "...tomar tu FlotoMoto y volar al EspacioPuerto?",
          },
          { link: "A5", text: "...ir al EspacioPuerto a pie?" },
        ],
      },
      {
        page: "A2",
        title: null,
        text: `Menos mal que cargué las baterías de mi moto voladora!
        ¡Logré aterrizar bien!
        Debería llegar al Espacio Puerto con tiempo de sobra.
        Apenas levanté vuelo escuché disparos ¡Me dieron! Me están persiguiendo
        los rebeldes. No quieren que nadie huya de la ciudad.
        La Floto-Moto pierde velocidad.`,
        options: [
          { link: "A3", text: "...aterrizar en el tejado más cercano?" },
          { link: "C1", text: "...intentar seguir volando?" },
        ],
      },
      {
        page: "A3",
        title: null,
        text: `¡Logre aterrizar bien!
        Los rebeldes aun me persiguen pero puedo entrar al edificio y bajar por las escaleras.
        Creo que no me vieron. ¡Los perdi!
        En la planta baja escucho una voz pidiendo ayuda.`,
        options: [
          { link: "C2", text: "...asistir a quien pide ayuda?" },
          {
            link: "A6",
            text: "...ignorar el pedido de auxilio y salir del edificio?",
          },
        ],
      },
      {
        page: "C2",
        title: null,
        text: `Era una trampa.
        Los rebeldes usaron una grabación de una niña para atraer ciudadanos y
        encarcelarlos.
        Me enviarán a las colonias de esclavos.`,
        options: [],
      },
      {
        page: "A6",
        title: null,
        text: `Por mucho que me cueste tengo que seguir. La nave partira dentro de una hora rumbo a Marte.
        Mientras te alejas del edificio se escucha un disparo y los gritos de auxilio se transforma en suplicas.`,
        options: [
          {
            link: "C3",
            text: "...volver y ayudar a la persona que suplica por su vida?",
          },
          {
            link: "B1",
            text: "...seguir adelante, el cohete no esperara a nadie que se retrase?",
          },
        ],
      },
      {
        page: "B1",
        title: null,
        text: `Ir con cautela hizo que demore un poco más pero por suerte la nave aún no
        despegó.
        Llegé a tiempo.
        Otra explosión!
        Por suerte ya estoy en la nave.
        Despegamos.. rumbo a Marte.`,
        options: [],
      },
      {
        page: "C3",
        title: null,
        text: `Los rebeldes usaron grabaciones falsas para atraer ciudadanos.
        Me enviarán a las colonias de esclavos.`,
        options: [],
      },
      {
        page: "C1",
        title: null,
        text: `La Floto-Moto no puede continuar. Los Rebeldes me alcanzaron.
        Me dispararon por la espalda.
        Perdí mucha sangre.`,
        options: [],
      },
      {
        page: "A5",
        title: null,
        text: `Al ir a pie puedo esconderme mejor en las callejuelas de la ciudad. Debido a
        la superpoblación no quedan muchos espacios abiertos.
        Luego de recorrer media ciudad a pie miro el reloj y veo que el tiempo se
        acaba y la nave está por despegar en 15 minutos`,
        options: [
          { link: "B1", text: "...continuar andando con cautela?" },
          { link: "C4", text: "...correr sin importar quién me vea?" },
        ],
      },
      {
        page: "C4",
        title: null,
        text: `Al correr mi presencia fue notada por los rebeldes.
        Me atraparon inmediatamente.
        Me enviarán a las colonias de esclavos.`,
        options: [],
      },
    ],
  },
];

const stories_alt = [
  {
    passages: [
      {
        text: "Finalmente llegó el día. Planeo este viaje a Marte hace tiempo.\n\nLa Tierra ya no es un lugar habitable. Los gases en la atmósfera son cada día más tóxicos y la guerra está cerca.\n\nAdemás, no me queda nadie. Todos... se fueron... o están muertos.\n\nTemo por mi seguridad. En la extranet se dice que en unos días los rebeldes llegarán a la ciudad. Aún hay tiempo...\n\n¿Qué fue eso? ¡una explosión!\n\n\n[[Ver por la ventana el origen de la explosion]] \n\n[[Tomar tu FlotoMoto y volar al EspacioPuerto]] ",
        links: [
          {
            name: "Ver por la ventana el origen de la explosion",
            link: "Ver por la ventana el origen de la explosion",
            pid: "2",
          },
          {
            name: "Tomar tu FlotoMoto y volar al EspacioPuerto",
            link: "Tomar tu FlotoMoto y volar al EspacioPuerto",
            pid: "3",
          },
        ],
        name: "El Apartamento",
        pid: "1",
        position: {
          x: "400",
          y: "100",
        },
      },
      {
        text: "La explosión fue a unos pocos bloques de aquí. ¡Los Rebeldes llegaron a la ciudad antes de lo esperado!\n\nDebo huir. Pronto.\n\nIr volando en FlotoMoto puede ser peligroso si hay una batalla en las calles.\n\nSería un blanco muy fácil, aunque llegaría rápido al Espacio-Puerto\n\n[[Tomar tu FlotoMoto y volar al EspacioPuerto]]\n[[Ir al EspacioPuerto a pie]]",
        links: [
          {
            name: "Tomar tu FlotoMoto y volar al EspacioPuerto",
            link: "Tomar tu FlotoMoto y volar al EspacioPuerto",
            pid: "3",
          },
          {
            name: "Ir al EspacioPuerto a pie",
            link: "Ir al EspacioPuerto a pie",
            pid: "10",
          },
        ],
        name: "Ver por la ventana el origen de la explosion",
        pid: "2",
        position: {
          x: "400",
          y: "300",
        },
      },
      {
        text: "Menos mal que cargué las baterías de mi moto voladora!\n\n¡Logré aterrizar bien!\n\nDebería llegar al Espacio Puerto con tiempo de sobra.\n\nApenas levanté vuelo escuché disparos ¡Me dieron! Me están persiguiendo los rebeldes. No quieren que nadie huya de la ciudad.\n\nLa Floto-Moto pierde velocidad.\n\n[[Aterrizar en el tejado más cercano]]\n[[Intentar seguir volando]]",
        links: [
          {
            name: "Aterrizar en el tejado más cercano",
            link: "Aterrizar en el tejado más cercano",
            pid: "4",
          },
          {
            name: "Intentar seguir volando",
            link: "Intentar seguir volando",
            pid: "5",
          },
        ],
        name: "Tomar tu FlotoMoto y volar al EspacioPuerto",
        pid: "3",
        position: {
          x: "600",
          y: "100",
        },
      },
      {
        text: "¡Logre aterrizar bien!\n\nLos rebeldes aun me persiguen pero puedo entrar al edificio y bajar por las escaleras.\n\nCreo que no me vieron. ¡Los perdi!\n\nEn la planta baja escucho una voz pidiendo ayuda.\n\n[[Asistir a quien pide ayuda]]\n[[Ignorar el pedido de auxilio y salir del edificio]]",
        links: [
          {
            name: "Asistir a quien pide ayuda",
            link: "Asistir a quien pide ayuda",
            pid: "6",
          },
          {
            name: "Ignorar el pedido de auxilio y salir del edificio",
            link: "Ignorar el pedido de auxilio y salir del edificio",
            pid: "7",
          },
        ],
        name: "Aterrizar en el tejado más cercano",
        pid: "4",
        position: {
          x: "600",
          y: "300",
        },
      },
      {
        text: "La Floto-Moto no puede continuar. Los Rebeldes me alcanzaron.\n\nMe dispararon por la espalda.\n\nPerdí mucha sangre.",
        name: "Intentar seguir volando",
        pid: "5",
        position: {
          x: "800",
          y: "100",
        },
        tags: ["sad"],
      },
      {
        text: "Era una trampa.\n\nLos rebeldes usaron una grabación de una niña para atraer ciudadanos y encarcelarlos.\n\nMe enviarán a las colonias de esclavos.",
        name: "Asistir a quien pide ayuda",
        pid: "6",
        position: {
          x: "1025",
          y: "300",
        },
        tags: ["sad"],
      },
      {
        text: "Por mucho que me cueste tengo que seguir. La nave partira dentro de una hora rumbo a Marte.\n\nMientras te alejas del edificio se escucha un disparo y los gritos de auxilio se transforma en suplicas.\n\n[[Volver y ayudar a la persona que suplica por su vida]]\n[[Seguir adelante, el cohete no esperara a nadie que se retrase]]",
        links: [
          {
            name: "Volver y ayudar a la persona que suplica por su vida",
            link: "Volver y ayudar a la persona que suplica por su vida",
            pid: "8",
          },
          {
            name: "Seguir adelante, el cohete no esperara a nadie que se retrase",
            link: "Seguir adelante, el cohete no esperara a nadie que se retrase",
            pid: "9",
          },
        ],
        name: "Ignorar el pedido de auxilio y salir del edificio",
        pid: "7",
        position: {
          x: "900",
          y: "425",
        },
      },
      {
        text: "Los rebeldes usaron grabaciones falsas para atraer ciudadanos.\n\nMe enviarán a las colonias de esclavos.",
        name: "Volver y ayudar a la persona que suplica por su vida",
        pid: "8",
        position: {
          x: "1025",
          y: "550",
        },
        tags: ["sad"],
      },
      {
        text: "Ir con cautela hizo que demore un poco más pero por suerte la nave aún no despegó.\n\nLlegé a tiempo.\n\nOtra explosión!\n\nPor suerte ya estoy en la nave.\n\nDespegamos.. rumbo a Marte.",
        name: "Seguir adelante, el cohete no esperara a nadie que se retrase",
        pid: "9",
        position: {
          x: "700",
          y: "550",
        },
        tags: ["happy"],
      },
      {
        text: "Al ir a pie puedo esconderme mejor en las callejuelas de la ciudad. Debido a\nla superpoblación no quedan muchos espacios abiertos.\n\nLuego de recorrer media ciudad a pie miro el reloj y veo que el tiempo se\nacaba y la nave está por despegar en 15 minutos.\n\n[[Seguir adelante, el cohete no esperara a nadie que se retrase]]\n[[Correr sin importar quién me vea]]",
        links: [
          {
            name: "Seguir adelante, el cohete no esperara a nadie que se retrase",
            link: "Seguir adelante, el cohete no esperara a nadie que se retrase",
            pid: "9",
          },
          {
            name: "Correr sin importar quién me vea",
            link: "Correr sin importar quién me vea",
            pid: "11",
          },
        ],
        name: "Ir al EspacioPuerto a pie",
        pid: "10",
        position: {
          x: "400",
          y: "500",
        },
      },
      {
        text: "Al correr mi presencia fue notada por los rebeldes.\n\nMe atraparon inmediatamente.\n\nMe enviarán a las colonias de esclavos.",
        name: "Correr sin importar quién me vea",
        pid: "11",
        position: {
          x: "400",
          y: "675",
        },
        tags: ["sad"],
      },
    ],
    name: "Example",
    startnode: "1",
    creator: "Twine",
    "creator-version": "2.3.14",
    ifid: "EA8005BB-69BB-49EB-8B2B-A4BC6EDE30DB",
  },
];

export default stories;
export {stories_alt};

