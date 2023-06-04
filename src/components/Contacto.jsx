import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import cv from '../assets/CV_Emmanuel_Ramirez_Rubio.pdf'
import React, { useState } from 'react';

export default function Contacto() {
  const conf = document.getElementById('conf')
//Validacion del formulario

  //Declaracion de los estados de error  
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  });

  const [errores, setErrores] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  // Función para manejar el envío del formulario
  function handleSubmit(event){
    
   
    // Validar campos antes del envío
    if (!formulario.nombre) {
      setErrores({ ...errores, nombre: 'El nombre es requerido' });
      event.preventDefault();
      return;
    }

    if (!formulario.apellido) {
      setErrores({ ...errores, nombre: 'El apellido es requerido' });
      event.preventDefault();
      return;
    }

    if (!formulario.email) {
      setErrores({ ...errores, email: 'El email es requerido' });
      event.preventDefault();
      return;
    }

    if (!formulario.mensaje) {
      setErrores({ ...errores, mensaje: 'El mensaje es requerido' });
      event.preventDefault();
      return;
    }
    conf.classList.remove('hidden') 

    // Si todos los campos están completos, puedes continuar con el envío del formulario
    // Aquí puedes realizar la lógica para enviar los datos a tu backend o hacer cualquier otra acción necesaria

    // Reiniciar el formulario y los errores después del envío exitoso
    //setFormulario({ nombre: '', apellido: '', email: '', mensaje: '' });
    setErrores({ nombre: '', apellido: '', email: '', mensaje: '' });
  };

  return (
    <div className="relative isolate mainD">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute left-0 -z-10 w-full overflow-hidden  lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Contacto</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              ¿Tienes un proyecto en mente? Ponte en contacto conmigo llenando el siguiente formulario y me comunicaré contigo lo antes posible. Mientras puedes revisar mi linkedin y mi curriculum.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>

                  <svg className="h-7 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </dt>
                <dd>
                  Puerto Vallarta, Jalisco
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                      <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                </dt>
                <dd>
                  <a className="hover:text-white" href="https://www.linkedin.com/in/emmanuel-ramirez-rubio" target="_blank">
                    linkedin.com/in/emmanuel-ramirez-rubio
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>

                </dt>
                <dd>
                  <a className="hover:text-white" href= {cv} download="CV_Emmanuel_Ramirez_Rubio.pdf">
                    Curriculum
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form action="https://formsubmit.co/df720a2ba759d1019e49fff26a32a50a" method="POST" onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="footerD block w-full rounded-md border-0 contact px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />

                </div>
                {errores.nombre && <p className="mt-6 text-lg leading-8 text-red-400">{errores.nombre}</p>}
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formulario.apellido}
                    onChange={handleChange}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 footerD px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />

                </div>
                {errores.apellido && <p className="mt-6 text-lg leading-8 text-red-400">{errores.apellido}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formulario.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 footerD px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                  {errores.email && <p className="mt-6 text-lg leading-8 text-red-400">{errores.email}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formulario.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full rounded-md border-0 footerD px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                  {errores.mensaje && <p className="mt-6 text-lg leading-8 text-red-400">{errores.mensaje}</p>}
                </div>
              </div>
 
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md buttonD px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm buttonD:hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Enviar
              </button>
              {/* No salta capcha y te redirecciona de fuelta */}
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_next" value="http://localhost:5173/"></input>
            </div>
            <p className="hidden mt-6 text-lg leading-8 text-green-400" id='conf'>Mensaje enviado exitosamente</p>
          </div>
        </form>
      </div>
    </div>
  )
}
