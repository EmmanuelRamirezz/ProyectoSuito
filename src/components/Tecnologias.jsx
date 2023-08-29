import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import vite from '../assets/vite.png'
import database from '../assets/database.png'
import typescript from '../assets/typescript.png'
import { useContext } from 'react';
import { UserContext } from "../context/UserProvider";

const tecs = [
  {
    name: 'HTML 5',
    role: 'Avanzado',
    imageUrl: html,
  },
  {
    name: 'React',
    role: 'Intermedio',
    imageUrl: react,
  },
  {
    name: 'Github',
    role: 'Avanzado',
    imageUrl: github,
  },
  {
    name: 'CSS 3',
    role: 'Avanzado',
    imageUrl: css,
  },
  {
    name: 'Typescript',
    role: 'Intermedio',
    imageUrl: typescript,
  },
  {
    name: 'Vite',
    role: 'Avanzado',
    imageUrl: vite,
  },
  {
    name: 'Javascript (ES6)',
    role: 'Avanzado',
    imageUrl: js,
  },
  {
    name: 'Tailwind',
    role: 'Avanzado',
    imageUrl: tailwind,
  },
  {
    name: 'Bases de datos SQL',
    role: 'Basico',
    imageUrl: database,
  },
]
const tecsEN = [
  {
    name: 'HTML 5',
    role: 'Advanced',
    imageUrl: html,
  },
  {
    name: 'React',
    role: 'Intermediate',
    imageUrl: react,
  },
  {
    name: 'Github',
    role: 'Advanced',
    imageUrl: github,
  },
  {
    name: 'CSS 3',
    role: 'Advanced',
    imageUrl: css,
  },
  {
    name: 'Typescript',
    role: 'Intermediate',
    imageUrl: typescript,
  },
  {
    name: 'Vite',
    role: 'Advanced',
    imageUrl: vite,
  },
  {
    name: 'Javascript (ES6)',
    role: 'Advanced',
    imageUrl: js,
  },
  {
    name: 'Tailwind',
    role: 'Advanced',
    imageUrl: tailwind,
  },
  {
    name: 'Bases de datos SQL',
    role: 'Basic',
    imageUrl: database,
  },
]
const title = "Technologies";
const subTitle = "These are the technologies that I currently master and that are of great relevance in the area of web development. I always try to be updated and expanding my knowledge.";
export default function Tecnologias() {
  const [lan, setLan] = useContext(UserContext);
  return (
    <div className="py-24 sm:py-32 bg-mainL dark:bg-mainD" id='techs'>
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl mr-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black dark:text-white">
            {lan ? title : "Tecnologías"}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {lan ? subTitle : "Estas son las tecnologías que domino actualmente y que son de gran relevancía en el area del desarrollo web.  Siempre trato de estar actualizado y expandiendo mis conocimientos."}
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
          {
            lan ?
              tecsEN.map((tec) => (
                <li key={tec.name}>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16" src={tec.imageUrl} alt="Tecnologias que manejo" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-black dark:text-white">{tec.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-buttons">{tec.role}</p>
                    </div>
                  </div>
                </li>
              ))
              :
              tecs.map((tec) => (
                <li key={tec.name}>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16" src={tec.imageUrl} alt="Tecnologias que manejo" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-black dark:text-white">{tec.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-buttons">{tec.role}</p>
                    </div>
                  </div>
                </li>
              ))
          }
        </ul>
      </div>
    </div>
  )
}
