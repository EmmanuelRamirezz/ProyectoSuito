import p1 from '../assets/p1.svg';
import p2 from '../assets/p2.svg';
import p3 from '../assets/p3.svg';
import p4 from '../assets/p4.svg';
import p5 from '../assets/p5.svg';
import p6 from '../assets/p6.svg';
import p7 from '../assets/p7.svg';
import p8 from '../assets/p8.png';

import github from '../assets/github.png'
const people = [
  {
    name: 'App de tareas pendientes',
    role: 'Mi primera app de React funcional donde se implementan conceptos clave como: componentes, elementos, estados, hooks, effects, portals, context y props. Más proyectos con esta librería están en proceso.',
    imageUrl: p7,
    githubUrl: 'https://github.com/EmmanuelRamirezz/react-todo-list',
    projectUrl: 'https://react-basic-ex.netlify.app/',
  },
  {
    name: 'Frontend-movies',
    role: 'Pagina web donde se implementa el consumo de una API REST profecional. Al igual que la metodología de desarrollo "single page aplication". Orientado a un sitio de peliculas. Cabe destacar que todos mis proyectos cuentan con responsive design y buenas practicas, avaladas por lighthouse. API usada: themoviedb.org',
    imageUrl: p8,
    githubUrl: 'https://github.com/EmmanuelRamirezz/advanced-api-rest-proyect',
    projectUrl: 'https://frontendmovies.netlify.app/',
  },
  {
    name: 'App de perritos',
    role: 'App basica donde se aplican conceptos clave de consumo de API REST. Donde se puedeconsumir, filtrar y subir contenido. Al mismo tiempo que se manipula la información paraser mostrada correctamente',
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
    role: 'Proyecto con 6 herramientas estadisticas, enfocado a la resolución de problemas y de buenas practicas de maquetación. Desarrollando la logica de Javascript moderno (ECMAScript 6)',
    imageUrl:
    p3,
    githubUrl: 'https://github.com/EmmanuelRamirezz/curso-practico-javascript',
    projectUrl: 'https://estadisticas-js.netlify.app/',
  },
  {
    name: 'Sitio de divisas Batatabit',
    role: 'Proyecto elaborado siguiendo la metodologia de desarrollo "Mobile first" donde se muestra un sitio ficticio de finanzas y divisas. Elaborado a partir de un curso en platzi.',
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

    // More people...
  ]
  
  export default function Proyectos() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Proyectos</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proyectos que he desarrollado desde el 2020 donde se encuentran proyectos universitarios, personales y laborales. Todos mis proyectos tienen buena puntuación en lighthouse, cuentan con responsive design y están disponibles en github. Exploralos
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover hover:scale-110 ease-out duration-300" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                  <a href={person.githubUrl} target="_blank" className="text-gray-400 hover:text-gray-500" title='Ver repositorio'>
                      <span className="sr-only">github</span>
                      <img src={github} alt="Github button" className='h-8 w-8 hover:bg-gray-300 hover:h-9 hover:w-9 rounded-full ease-out duration-300'/>
                      {/* <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg> */}
                    </a>
                  </li>

                  <li>
                    <a href={person.projectUrl} target="_blank" className="text-gray-400 hover:text-gray-500" title='Ver proyecto'>
                      <span className="sr-only">ProjectUrl</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-9 w-9  hover:h-10 hover:w-10 ease-out duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  