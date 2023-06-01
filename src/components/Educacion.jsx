import tsj from '../assets/tsj.jpg';
import platzi from '../assets/plazi.jpg'
import oxford from '../assets/oxford.jpg'
import talent2019 from '../assets/talent2019.jpg'
import talent2021 from '../assets/talent2021.png'
import talent2022 from '../assets/talent2022.png'
import talent2023 from '../assets/talent2023.png'

import React from 'react';


const posts = [
    {
      id: 0,
      title: 'Tecnológico Superior de Jalisco',
      href: '#',
      description:
        'Egresado en diciembre del 2022 de la carrera de ingeniería en sistemas computacionales con promedio de 90. Durante este periodo aprendí las bases del area de la tecnología.',
      imageUrl:
        tsj,
      date: '2018 - 2022',
      datetime: '2020-03-16',
      category: { title: 'Universidad', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 1,
        title: 'Platzi',
        href: '#',
        description:
          'Platzi es una plataforma de cursos y certificaciones que utilicé para complementar mi educación y enfocarme en el desarrollo web.',
        imageUrl:
          platzi,
        date: 'Alumno desde el 2020',
        datetime: '2020-03-16',
        category: { title: 'Cursos y certificaciones', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Certificación de ingles oxford',
        href: '#',
        description:
          'Sin duda el idioma más importante en el area de IT. Tomé la certifición en febrero del 2023 y considero que mi nivel es avnzado. Obteniendo una calificación de B2',
        imageUrl:
          oxford,
        date: '2023',
        datetime: '2020-03-16',
        category: { title: 'Inglés', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      }
    // More posts...
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

  export default function Educacion() {
    const [showModal, setShowModal] = React.useState(false);

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Educación</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Mi trayectoria como estudiante y certificaciones obtenidas
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className='flex'>
          <button
          type="button"
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-md mt-20 mx-auto font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          id='certificationsModal'
          onClick={() => setShowModal(true)}
              >
            Mira mis certificaciones
          </button>
          </div>
          {/* modal */}
          {showModal ? (
        <>
        {/* items-center */}
          <div className="flex justify-center align-middle overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bgmodal">
            <div className="relative h-4/5 w-11/12 my-6 mx-auto mb-5">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-center p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mis certificaciones</h2>
                </div>
                <div className="p-6 flex-auto bg-white">
              {/*content star*/}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 ">
                {certificaciones.map((certificado) => (
                   <img
                    key={certificado.id}
                    className="object-cover w-full border ease-in duration-500 image-size"
                    src={certificado.img}
                    id={certificado.id}
                   />
                ))}

                {/* <img
                className="object-cover w-full border"
                src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
                /> */}
              </div>
              {/* Content end */}
                </div>
                <div className="flex items-center justify-center  border-t border-solid border-blueGray-200 rounded-md mb-5">
                  <button
                    className="rounded-md bg-indigo-500 px-10 py-2.5 text-center text-md mt-20 mx-auto font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
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
