import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import vite from '../assets/vite.png'
import database from '../assets/database.png'
const people = [
    {
      name: 'HTML 5',
      role: 'Avanzado',
      imageUrl: html,
    },
    {
      name: 'CSS 3',
      role: 'Avanzado',
      imageUrl: css,
    },
    {
      name: 'Javascript (ES5)',
      role: 'Avanzado',
      imageUrl: js,
    },
    {
      name: 'React',
      role: 'Intermedio',
      imageUrl: react,
    },
    {
      name: 'Tailwind',
      role: 'Avanzado',
      imageUrl: tailwind,
    },
    {
      name: 'Vite',
      role: 'Avanzado',
      imageUrl: vite,
    },
    {
      name: 'Github',
      role: 'Avanzado',
      imageUrl: github,
    },
    {
      name: 'Bases de datos SQL',
      role: 'Basico',
      imageUrl: database,
    },
    // More people...
  ]
  
  export default function Tecnologias() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tecnologías</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Estas son las tecnologías que domino actualmente y que son de gran relevancía en el area del desarrollo web
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16" src={person.imageUrl} alt="Tecnologias que manejo" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  