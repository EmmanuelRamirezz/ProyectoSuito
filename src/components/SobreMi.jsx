import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import perfil from '../assets/perfil.jpg'

const features = [
  {
    name: 'Egresado.',
    description:
      'Graduado de Ingeniero en sistemas computacionales del Tecnológico superior de jalisco en diciembre del 2022. Espero optener mi titulo en agosto del 2023.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Experiencia en ENMICE.',
    description: 'Desde marzo del 2023 he estado trabajando como voluntario en ENMICE donde soy supervisado por miembros de la agencia espacial mexicana. Las tecnologías que he manejamos son: React, tailwind, python, django.',
    icon: LockClosedIcon,
  },
  {
    name: 'Inglés.',
    description: 'Me siento comodo con el inglés, actualmente tengo una certificación de ingles de oxford con puntuacion de B2.',
    icon: ServerIcon,
  },
  {
    name: 'Sobre mí.',
    description: 'Actualmente viviendo en Puerto Vallarta Jalisco pero con planes de mudarme a Guadalajara. Me encanta el desarrollo de software, leer hacer calistenia y jugar videojuegos.',
    icon: ServerIcon,
  },
]

export default function SobreMi() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-semibold leading-7 text-indigo-400">Hola!</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Mi nombre es Emmanuel Ramirez Rubio</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
               Graduado de la carrera de Ingeniería en Sistemas Computacionales, con dos años de experiencia en el desarrollo de sitios web personales y actualmente trabajando como voluntario en ENMICE en el área de desarrollo, bajo la supervisión del personal de la Agencia Espacial Mexicana (AEM). Me considero un desarrollador Jr. Front-End apasionado por la tecnología. Siempre estoy en busca de nuevos retos y nunca paro de aprender. Espero poder tener la oportunidad de trabajar juntos. Revisa mis proyectos
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={perfil}
            alt="Product screenshot"
            className="rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={1432}
            height={442}
          />
        </div>
      </div>
    </div>
  )
}
