import p1 from '../assets/p1.svg';
import p2 from '../assets/p2.svg';
import p3 from '../assets/p3.svg';
import p4 from '../assets/p4.svg';
import p5 from '../assets/p5.svg';
import p6 from '../assets/p6.svg';
import p7 from '../assets/p7.svg';
import p8 from '../assets/p8.svg';
import p9 from '../assets/p9.svg';
import p10 from '../assets/p10.svg';
import p11 from '../assets/p11.svg';
import p12 from '../assets/p12.svg';
import github from '../assets/github.png'
import { useContext } from 'react';
import { UserContext } from "../context/UserProvider";

const projects = [
  {
    name: 'Pagina oficial de ENMICE',
    role: 'Es el sitio oficial del Encuentro Mexicano de Ingeniería en Cohetería experimental. Proyecto en el que colaboré activamente durante mi voluntariado en dicha empresa mientras era supervisado por personal de la AEM. Desarrollado con react, tailwind, python y django. Para más informacion del proyecto revisar mi carta de recomendación laboral.',
    imageUrl: p12,
    githubUrl: 'https://github.com/EmmanuelRamirezz/',
    projectUrl: 'https://enmice.mx/',
  },
  {
    name: 'Pokedex',
    role: 'Aplicación donde despliega información de pokemones la cual se puede paginar y filtrar. Es consumida desde la api pokeapi.co y fue creada usando React, Tailwind y diversos react hooks como: useEffect, useContext, useState, react-router entre otros. Esta lógica es ideal para realizar diversos proyectos web.',
    imageUrl: p11,
    githubUrl: 'https://github.com/EmmanuelRamirezz/pokemon-app',
    projectUrl: 'https://ramirez-pokemons-app.netlify.app',
  },
  {
    name: 'Lógica de un e-comerce',
    role: 'Proyecto donde se implementa la lógica funcional de un e-comerce. Los productos vienen desde una api, estos se pueden filtrar y agregar a un carrito de compras para obtener un total. Creada con react, typescript, tailwind y diversos react hooks.',
    imageUrl: p10,
    githubUrl: 'https://github.com/EmmanuelRamirezz/carrito-de-compras',
    projectUrl: 'https://cartslogic.netlify.app',
  },
  {
    name: 'Calculadora con React',
    role: 'App basica creada para practicar conceptos fundamentales de React. Donde se manejan estados, props, comunicación entre componentes, buenas practicas, lógica de JS y estilos con CSS.',
    imageUrl: p9,
    githubUrl: 'https://github.com/EmmanuelRamirezz/react-calculator',
    projectUrl: 'https://ramirez-react-calculator.netlify.app',
  },
  {
    name: 'App de tareas pendientes con React',
    role: 'Mi primera app de React funcional donde se implementan conceptos clave como: componentes, elementos, estados, hooks, effects, portals, context y props. Proyecto creado a partir de una certificación de Platzi.',
    imageUrl: p7,
    githubUrl: 'https://github.com/EmmanuelRamirezz/react-todo-list',
    projectUrl: 'https://react-basic-ex.netlify.app/',
  },
  {
    name: 'Frontend-movies',
    role: 'Pagina web donde se implementa el consumo de una API REST profecional. Al igual que la metodología de desarrollo "single page aplication". Orientado a un sitio de peliculas. API usada: themoviedb.org',
    imageUrl: p8,
    githubUrl: 'https://github.com/EmmanuelRamirezz/advanced-api-rest-proyect',
    projectUrl: 'https://frontendmovies.netlify.app/',
  },
  {
    name: 'App de perritos',
    role: 'App basica donde se aplican conceptos clave de consumo de API REST. Donde se puede consumir, filtrar y subir contenido. Al mismo tiempo que se manipula la información para ser mostrada correctamente.',
    imageUrl: p1,
    githubUrl: 'https://github.com/EmmanuelRamirezz/perritos-api-rest',
    projectUrl: 'https://doggysapp.netlify.app/',
  },
  {
    name: 'Gestor de inventario y aulas',
    role: 'Proyecto completo (full-stack) que se elaboró para el Tecnologico Superior de Jalisco. Utilizando HTML, CSS, JS y Firebase. Para dar solución a una problematica real.',
    imageUrl: p2,
    githubUrl: 'https://github.com/EmmanuelRamirezz/gestion-de-inventario-aulas',
    projectUrl: 'https://sistemagastronomia.netlify.app/',
  },
  {
    name: 'Herramientas estadisticas',
    role: 'Proyecto con 6 herramientas estadisticas, enfocado a la resolución de problemas y de buenas practicas de maquetación. Desarrollando la logica de Javascript moderno (ECMAScript 6).',
    imageUrl:
      p3,
    githubUrl: 'https://github.com/EmmanuelRamirezz/curso-practico-javascript',
    projectUrl: 'https://estadisticas-js.netlify.app/',
  },
  {
    name: 'Sitio de divisas Batatabit',
    role: 'Proyecto elaborado siguiendo la metodologia de desarrollo "Mobile first" donde se muestra un sitio ficticio de finanzas y divisas. Elaborado a partir de un curso en Platzi.',
    imageUrl:
      p4,
    githubUrl: 'https://github.com/EmmanuelRamirezz/divisas-batatabit',
    projectUrl: 'https://batatabit-divisas.netlify.app/',
  },
  {
    name: 'Blogs de Café',
    role: 'Este proyecto sigue la estructura de maquetación de un blog de café ficticio donde destaca el uso de: normalize css, flexbox, grid, responsive design.',
    imageUrl:
      p5,
    githubUrl: 'https://github.com/EmmanuelRamirezz/coffee-blog',
    projectUrl: 'https://cafe-ramirez.netlify.app/',
  },
  {
    name: 'E-commerce Rubios Mandalas',
    role: 'Maquetacion de tienda online de un proyecto familiar que vende mandalas siguiendo patrones de diseño modernos implementando flexbox, grid, normilize y html semantico.',
    imageUrl:
      p6,
    githubUrl: 'https://github.com/EmmanuelRamirezz/rubios-mandalas',
    projectUrl: 'https://rubios-mandalas.netlify.app/',
  },
];
const projectsEN = [
  {
    name: 'ENMICE official page',
    role: 'It is the official site of the: Encuentro Mexicano de Ingeniería en Cohetería experimental. Project in which I actively collaborated during my volunteering in this company while being supervised by AEM personnel. Developed with react, tailwind, python and django. For more information about the project, check my job recommendation letter.',
    imageUrl: p12,
    githubUrl: 'https://github.com/EmmanuelRamirezz/',
    projectUrl: 'https://enmice.mx/',
  },
  {
    name: 'Pokedex',
    role: 'Application where it displays pokemon information which can be paginated and filtered. It is consumed from the pokeapi.co api and was created using react, tailwind and various react hooks such as: useEffect, useContext, useState, react-router among others. This logic is ideal for carrying out various web projects.',
    imageUrl: p11,
    githubUrl: 'https://github.com/EmmanuelRamirezz/pokemon-app',
    projectUrl: 'https://ramirez-pokemons-app.netlify.app',
  },
  {
    name: 'Logic of a shopping cart with React',
    role: 'Project where the functional logic of an e-commerce is implemented. Products come from an api, these can be filtered and added to a shopping cart to get a total. Created with react, typescript, tailwind and various react hooks.',
    imageUrl: p10,
    githubUrl: 'https://github.com/EmmanuelRamirezz/carrito-de-compras',
    projectUrl: 'https://cartslogic.netlify.app',
  },
  {
    name: 'Calculator with React',
    role: 'Basic app created to practice fundamental React concepts. Where states, props, communication between components, JS logic and styles with CSS are handled',
    imageUrl: p9,
    githubUrl: 'https://github.com/EmmanuelRamirezz/react-calculator',
    projectUrl: 'https://ramirez-react-calculator.netlify.app',
  },
  {
    name: 'To-do app with React',
    role: 'My first functional React app where you can find key concepts such as: components, elements, states, hooks, effects, portals, context and props are implemented. Project created from a Platzi certification.',
    imageUrl: p7,
    githubUrl: 'https://github.com/EmmanuelRamirezz/react-todo-list',
    projectUrl: 'https://react-basic-ex.netlify.app/',
  },
  {
    name: 'Frontend-movies',
    role: 'Web page where the consumption of a professional REST API is implemented. The concept of "single page application" is implemented creating a site about movie. API used: themoviedb.org',
    imageUrl: p8,
    githubUrl: 'https://github.com/EmmanuelRamirezz/advanced-api-rest-proyect',
    projectUrl: 'https://frontendmovies.netlify.app/',
  },
  {
    name: 'Puppys app',
    role: 'App where key REST API consumption concepts are applied. Where you can consume, filter and upload content. At the same time that the information is manipulated to be displayed correctly',
    imageUrl: p1,
    githubUrl: 'https://github.com/EmmanuelRamirezz/perritos-api-rest',
    projectUrl: 'https://doggysapp.netlify.app/',
  },
  {
    name: 'Inventory and classroom manager',
    role: 'Complete project (full-stack) that was developed for the Tecnologico Superior de Jalisco. Using HTML, CSS, JS and Firebase. To solve a real problem.',
    imageUrl: p2,
    githubUrl: 'https://github.com/EmmanuelRamirezz/gestion-de-inventario-aulas',
    projectUrl: 'https://sistemagastronomia.netlify.app/',
  },
  {
    name: 'Statistical tools',
    role: 'Project with 6 statistical tools, focused on problem solving and good layout practices. Developing modern Javascript logic (ECMAScript 6)',
    imageUrl:
      p3,
    githubUrl: 'https://github.com/EmmanuelRamirezz/curso-practico-javascript',
    projectUrl: 'https://estadisticas-js.netlify.app/',
  },
  {
    name: 'Batatabit forex trade site',
    role: 'Project elaborated following the "Mobile first" development methodology where a fictitious finance and currency site is shown. Created from a course in platzi.',
    imageUrl:
      p4,
    githubUrl: 'https://github.com/EmmanuelRamirezz/divisas-batatabit',
    projectUrl: 'https://batatabit-divisas.netlify.app/',
  },
  {
    name: 'Coffee Blog',
    role: 'This project follows the layout structure of a fictional coffee blog where the use of: normalize css, flexbox, grid, responsive design stands out.',
    imageUrl:
      p5,
    githubUrl: 'https://github.com/EmmanuelRamirezz/coffee-blog',
    projectUrl: 'https://cafe-ramirez.netlify.app/',
  },
  {
    name: 'E-commerce Rubios Mandalas',
    role: 'Online store layout of a family project that sells mandalas following modern design patterns implementing flexbox, grid, normilize and semantic html.',
    imageUrl:
      p6,
    githubUrl: 'https://github.com/EmmanuelRamirezz/rubios-mandalas',
    projectUrl: 'https://rubios-mandalas.netlify.app/',
  },
];
const title = "Projects";
const subTitle = "Projects that I have developed since 2020 where university, personal and work projects are found. All my projects have a good score in lighthouse, have responsive design and are available on github. Explore them!";

export default function Proyectos() {
  const [lan, setLan] = useContext(UserContext);
  return (
    <div className="py-24 sm:py-32 bg-footerL dark:bg-footerD" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black dark:text-white">
            {lan ? title : "Proyectos"}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {lan ?
              subTitle
              :
              "Proyectos que he desarrollado desde el 2020 donde se encuentran proyectos universitarios, personales y laborales. Todos mis proyectos tienen buena puntuación en lighthouse, cuentan con responsive design y están disponibles en github. Exploralos!"
            }
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {
            lan ?
              projectsEN.map((person) => (
                <li key={person.name}>
                  <img className="aspect-[3/2] w-full rounded-2xl object-cover hover:scale-110 ease-out duration-300" src={person.imageUrl} alt="" />
                  <h3 className="mt-6 text-xl font-semibold leading-8 tracking-tight text-black dark:text-white">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{person.role}</p>
                  <ul role="list" className="mt-6 flex gap-x-6">
                    <li>
                      <a href={person.githubUrl} target="_blank" className="text-gray-400 hover:text-gray-500" title='Ver repositorio'>
                        <span className="sr-only">github</span>
                        <img src={github} alt="Github button" className='h-8 w-8 hover:bg-gray-300 hover:h-9 hover:w-9 rounded-full ease-out duration-300' />
                      </a>
                    </li>

                    <li>
                      <a href={person.projectUrl} target="_blank" className="text-gray-400 hover:text-black dark:hover:text-white" title='Ver proyecto'>
                        <span className="sr-only">ProjectUrl</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-9 w-9  hover:h-10 hover:w-10 ease-out duration-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                      </a>
                    </li>
                  </ul>
                </li>
              ))
              :
              projects.map((person) => (
                <li key={person.name}>
                  <img className="aspect-[3/2] w-full rounded-2xl object-cover hover:scale-110 ease-out duration-300" src={person.imageUrl} alt="" />
                  <h3 className="mt-6 text-xl font-semibold leading-8 tracking-tight text-black dark:text-white">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{person.role}</p>
                  <ul role="list" className="mt-6 flex gap-x-6">
                    <li>
                      <a href={person.githubUrl} target="_blank" className="text-gray-400 hover:text-gray-500" title='Ver repositorio'>
                        <span className="sr-only">github</span>
                        <img src={github} alt="Github button" className='h-8 w-8 hover:bg-gray-300 hover:h-9 hover:w-9 rounded-full ease-out duration-300' />
                      </a>
                    </li>
                    <li>
                      <a href={person.projectUrl} target="_blank" className="text-gray-400 hover:text-black dark:hover:text-white" title='Ver proyecto'>
                        <span className="sr-only">ProjectUrl</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-9 w-9  hover:h-10 hover:w-10 ease-out duration-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                      </a>
                    </li>
                  </ul>
                </li>
              ))
          }
        </ul>
      </div>
    </div>
  )
}
