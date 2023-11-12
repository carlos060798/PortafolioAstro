import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";

const DataProjects = [
  {
    id: 1,
    ProjectName: "Rick and morty character api consumo con reac js",
    description:
      "Proyecto de consumo de Rick and Morty Character Api construido con React js, Bostrapt y Sas ",
    UrlGit: "https://github.com/carlos060798/api-reac-js-Rick-Morty",
    UrlWeb: "https://api-reac-js-rick-morty.netlify.app/",
  },
  {
    id: 2,
    ProjectName: "List Task",
    description:
      "Proyecto de gestor de tareas  construido con React js,Chakra UI, React Router  ",
    UrlGit: "https://github.com/carlos060798/Todos.Ada",

    UrlWeb: "https://todo-ada.netlify.app",
  },
  {
    id: 3,
    ProjectName: "Gasphy Api",
    description:
      "Proyecto de consumo de la Api de Gasphy construido con React js, Bostrapt y Sas ",
    UrlGit: "https://github.com/carlos060798/gitExpert/tree/main",
    UrlWeb: "https://apigisphy.netlify.app/",
  },
  {
    id: 4,
    ProjectName: " Gestion de pacientes de veterinaria",
    description:
      "proyecto de gestion de paciente y autenticacion con jwt,encriptacion de contraseñas",
    UrlGit: "https://github.com/carlos060798/api-reac-js-Rick-Morty",
    UrlWeb: "https://youtu.be/1cmiT5fxnbc?si=Hl3XBNBvUcUAQ6F_",
  },
  {
    id: 5,
    ProjectName: "Agenda de contactos",
    description: "proyecto de gestion de contactos hecho en Js,Bostrapt y Html",
    UrlGit: "https://github.com/carlos060798/appcontactos",
    UrlWeb: "https://appagendacontactos.netlify.app/",
  },
  {
    id: 6,
    ProjectName: "Juego de cartas de 21",
    description:
      "proyecto de juego de cartas de 21 hecho con Js,Bostrapt y Html",
    UrlGit: "https://github.com/carlos060798/card-juego",
    UrlWeb: "https://carlos060798.github.io/card-juego/",
  },
  {
    id: 7,
    ProjectName: "Todo APP",
    description:
      "proyecto gestor de tareas full stack de reac, bootstrap ,express y node js con base de datos mongo db y autenticacion con jwt",
    UrlGit: "https://github.com/carlos060798/GESTORDETASK",
    UrlWeb: "https://front-todo-vert.vercel.app",
  },
  {
    id: 8,
    ProjectName: "Consumo de la Api {JSON} Placeholder",
    description:
      "proyecto de consumo de la Api {JSON} Placeholder construido con nextjs y bootstrap",
    UrlGit: "https://github.com/carlos060798/nextjs-prueba",
    UrlWeb: "https://pruba-nextjs.vercel.app/",
  },
];

export const Proyectos = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="proyectos" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          <h3>Mis Proyectos</h3>
        </div>
        <div className="custom-block-subtitle text-center mb-6">
          <p>
            Hola, ¡bienvenido a la sección de mis proyectos! Aquí te presento
            algunos de los proyectos en los que he estado trabajando
            recientemente. Cada proyecto representa un desafío único y una
            oportunidad para aprender y crecer. Siéntete libre de explorar y
            conocer más sobre mi trabajo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-6 xl:px-0 items-center">
          {DataProjects.map((project) => (
            <div
              className="custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={project.id}
            >
              <div className="custom-content-text-white">
               <p className="text-center">{project.ProjectName}</p> 
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {project.description}
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <a
                      href={project.UrlGit}
                      target="_blank"
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                      <i className="fab fa-git-alt text-2xl mr-2"></i> Git
                    </a>
                    <a
                      href={project.UrlWeb}
                      target="_blank"
                      className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center hover:bg-green-700 transition duration-300 ease-in-out"
                    >
                      <i className="fas fa-desktop text-2xl mr-2"></i> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
