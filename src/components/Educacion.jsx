import tsj from '../assets/tsj.jpg';
import platzi from '../assets/plazi.jpg'
import oxford from '../assets/oxford.jpg'
import talent2019 from '../assets/talent2019.jpg'
import talent2022 from '../assets/talent2022.png'
import talent2023 from '../assets/talent2023.png'
import React from 'react';
import { useContext } from 'react';
import { UserContext } from "../context/UserProvider";

const posts = [
  {
    id: 0,
    title: 'Tecnológico Superior de Jalisco',
    href: '#',
    description:
      'Egresado en diciembre del 2022 de la carrera de ingeniería en sistemas computacionales con promedio de 90. Durante este periodo aprendí las bases del area de la tecnología y del trabajo en equipo.',
    imageUrl: tsj,
    date: '2018 - 2022',
    datetime: '2020-03-16',
    category: { title: 'Universidad', href: '#' },
  },
  {
    id: 1,
    title: 'Platzi',
    href: '#',
    description:
      'Platzi es una plataforma de cursos y certificaciones que utilicé para complementar mi educación universitaria para especializarme en el desarrollo web y mejorar mis habilidades blandas.',
    imageUrl: platzi,
    date: 'Alumno desde el 2020',
    datetime: '2020-03-16',
    category: { title: 'Cursos y certificaciones', href: '#' },
  },
  {
    id: 2,
    title: 'Certificación de ingles oxford',
    href: '#',
    description:
      'Sin duda el idioma más importante en el area de IT. Tomé la certifición en febrero del 2023 y considero que mi nivel es avnzado. Obteniendo una calificación de B2 según el Marco Común Europeo de Referencia',
    imageUrl: oxford,
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'Inglés', href: '#' },

  }
]
const postsEN = [
  {
    id: 0,
    title: 'Tecnológico Superior de Jalisco',
    href: '#',
    description:
      'Graduated in December 2022 from the engineering degree in computer systems with an average grade of 90. During this period I learned the basics of the area of technology and teamwork.',
    imageUrl: tsj,
    date: '2018 - 2022',
    datetime: '2020-03-16',
    category: { title: 'University', href: '#' },
  },
  {
    id: 1,
    title: 'Platzi',
    href: '#',
    description:
      'Platzi is a platform for courses and certifications that I used to complement my university education and specialize myself in web development and develop my soft skills.',
    imageUrl: platzi,
    date: 'Stundent since 2020',
    datetime: '2020-03-16',
    category: { title: 'Courses and certifications', href: '#' },
  },
  {
    id: 2,
    title: 'Oxford english certification',
    href: '#',
    description:
      'Undoubtedly the most important language in the IT area. I took the certification in February 2023 and I consider my level to be advanced. Obtaining a B2 qualification according to the Common European Framework of Reference.',
    imageUrl: oxford,
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'English language', href: '#' },

  }
]
const certificaciones = [
  {
    id: 0,
    img: 'https://i.imgur.com/GHugG5c.jpg',
  },
  {
    id: 1,
    img: 'https://i.imgur.com/fx6OGiL.jpg',
  },
  {
    id: 2,
    img: 'https://i.imgur.com/o51201U.jpg',
  },
  {
    id: 3,
    img: 'https://i.imgur.com/eInHlbf.jpg',
  },
  {
    id: 4,
    img: 'https://i.imgur.com/mJLAUrs.jpg',
  },
  {
    id: 5,
    img: 'https://i.imgur.com/9SQXcxM.jpg',
  },
  {
    id: 6,
    img: 'https://i.imgur.com/J81bBDm.jpg',
  },
  {
    id: 7,
    img: 'https://i.imgur.com/vCH8kRw.jpg',
  },
  {
    id: 8,
    img: 'https://i.imgur.com/e1MdfGT.jpg',
  },
  {
    id: 9,
    img: 'https://i.imgur.com/cPNGph8.jpg',
  },
  {
    id: 10,
    img: 'https://i.imgur.com/ucRfuGU.jpg',
  },
  {
    id: 11,
    img: 'https://i.imgur.com/U7cUlNj.jpg',
  },
  {
    id: 12,
    img: 'https://i.imgur.com/ozQlkE1.jpg',
  },
  {
    id: 13,
    img: talent2019,
  },
  {
    id: 14,
    img: talent2022,
  },
  {
    id: 15,
    img: talent2023,
  },
]
const title = "Education";
const subTitle = "My background as a student and certifications obtained";
const buttonText = "Check my certifications";
const certificationTitle = "My certifications";
const buttonClose = "Close";

export default function Educacion() {
  const [showModal, setShowModal] = React.useState(false);
  const [lan, setLan] = useContext(UserContext);
  return (

    <div className="py-24 sm:py-32 bg-footerL dark:bg-footerD" id='education'>
      <a name='education' className='pt-24'></a>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            {lan ? title : "Educación"}
          </h2>
          <p className="mt-2 text-lg leading-8 text-black dark:text-white">
            {lan ? subTitle : "Mi trayectoria como estudiante y certificaciones obtenidas"}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {lan ?
            postsEN.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full hover:scale-110 ease-out duration-500">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] "
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-black dark:text-white">
                      {post.date}
                    </time>
                    <div
                      href={post.category.href}
                      className="relative z-10 rounded-full  px-3 py-1.5 font-medium hover:bg-gray-100 text-white dark:text-gray-600 bg-gray-400 dark:bg-gray-50"
                    >
                      {post.category.title}
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-black dark:text-white">
                      <div href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </div>
                    </h3>
                    <p className="mt-5 line-clamp-4 text-md leading-6 text-gray-600 dark:text-gray-300">{post.description}</p>
                  </div>
                </div>
              </article>
            ))
            :
            posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full hover:scale-110 ease-out duration-500">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] "
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-black dark:text-white">
                      {post.date}
                    </time>
                    <div
                      href={post.category.href}
                      className="relative z-10 rounded-full  px-3 py-1.5 font-medium hover:bg-gray-100 text-white dark:text-gray-600 bg-gray-400 dark:bg-gray-50"
                    >
                      {post.category.title}
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-black dark:text-white">
                      <div href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </div>
                    </h3>
                    <p className="mt-5 line-clamp-4 text-md leading-6 text-gray-600 dark:text-gray-300">{post.description}</p>
                  </div>
                </div>
              </article>
            ))
          }
        </div>
        <div className='flex'>
          <button
            type="button"
            className="rounded-md bg-buttons px-3.5 py-2.5 text-center text-md mt-20 mx-auto font-semibold text-white shadow-sm hover:bg-buttonsH focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            id='certificationsModal'
            onClick={() => setShowModal(true)}
          >
            {lan ? buttonText : "Mira mis certificaciones"}
          </button>
        </div>
        {showModal ? (
          <>
            <div className="flex justify-center align-middle overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-mainL dark:bg-gray-800">
              <div className="relative h-4/5 w-11/12 my-6 mx-auto mb-5 ">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full footerD outline-none focus:outline-none">
                  <div className="flex justify-center p-5   rounded-t text-black dark:text-white bg-footerL dark:bg-footerD">
                    <h2 className="text-2xl font-bold tracking-tight  sm:text-4xl ">
                      {lan ? certificationTitle : "Mis certificaciones"}
                    </h2>
                  </div>
                  <div className="p-6 flex-auto bg-footerL dark:bg-footerD">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 ">
                      {certificaciones.map((certificado) => (
                        <img
                          key={certificado.id}
                          className="object-cover w-full ease-in duration-500 image-size"
                          src={certificado.img}
                          id={certificado.id}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center pb-5 dark:text-white bg-footerL dark:bg-footerD">
                    <button
                      className="rounded-md bg-buttons px-8 py-2.5 text-center text-md mt-20 mx-auto font-semibold text-white shadow-sm hover:bg-buttonsH focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      {lan ? buttonClose : "Cerrar"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}
