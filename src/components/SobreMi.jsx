import { CodeBracketIcon, LanguageIcon, UserIcon, AcademicCapIcon} from '@heroicons/react/20/solid'
import perfil from '../assets/perfil.jpg'

const features = [
  {
    name: 'Egresado.',
    description:
      'Graduado de Ingeniero en sistemas computacionales del Tecnológico superior de jalisco en diciembre del 2022. Espero optener mi titulo en agosto del 2023.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Experiencia laboral.',
    description: 'Desde marzo del 2023 he estado trabajando como voluntario en ENMICE en el area de desarrollo web. Donde soy supervisado por miembros de la AEM. Las tecnologías que manejamos son: React, tailwind, python, django.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Inglés.',
    description: 'Me siento comodo con el inglés, actualmente tengo una certificación de ingles de oxford con puntuacion de B2 según el Marco Común Europeo de Referencia.',
    icon: LanguageIcon,
  },
  {
    name: 'Sobre mí.',
    description: 'Actualmente viviendo en Puerto Vallarta Jalisco pero con planes de mudarme a Guadalajara. Me encanta el desarrollo de software, leer, entrenar calistenia y jugar videojuegos.',
    icon: UserIcon,
  },
]

export default function SobreMi() {
  return (
    <div className="overflow-hidden py-10 sm:py-32 bg-mainL dark:bg-mainD">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-semibold leading-7 text-buttons dark:buttons">Hola!</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-black dark:text-white">Mi nombre es: <br /> Emmanuel Ramirez Rubio</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
               Graduado de la carrera de Ingeniería en Sistemas Computacionales, con dos años de experiencia en el desarrollo de sitios web personales y actualmente trabajando como voluntario en ENMICE en el área de desarrollo, bajo la supervisión del personal de la Agencia Espacial Mexicana (AEM). Me considero un desarrollador Jr. Front-End apasionado por la tecnología. Siempre estoy en busca de nuevos retos y nunca paro de aprender. Espero poder tener la oportunidad de trabajar juntos. Disfruta mi portafolio.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600  dark:text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-black dark:text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-buttons dark:titleD" aria-hidden="true" />
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
