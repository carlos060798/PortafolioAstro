import { motion } from "framer-motion";

export const Experiencia = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="experiencia" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
           <h2 className="mb-16 custom-block-big-title text-center">
            Experiencia
           </h2>
          <p className="mb-7 custom-block-subtitle text-center">
            ¡Bienvenido a la sección de mi experiencia profesional! A lo largo
            de mi carrera como desarrollador, he acumulado una sólida
            experiencia en una variedad de roles y proyectos. Desde trabajar en
            equipos multidisciplinarios hasta liderar iniciativas de desarrollo,
            cada oportunidad ha sido una oportunidad para aprender, crecer y
            contribuir al éxito de los proyectos en los que he participado.
          </p>

          <div className="mb-11 flex flex-wrap -m-1">
            <div className="container mx-auto text-center">
              <ul className="list-none">
                <li className="mb-4 text-white">
                  <div className="font-semibold">
                    Desarrollador de aplicaciones
                  </div>
                  <p className="text-white">TI Negocios Inteligentes</p>
                  <span className="badge bg-primary rounded-pill">
                    {" "}
                    oct. 2023 - abr. 2024{" "}
                  </span>
                </li>
                <i className="fas fa-arrow-down  text-white text-bold text-3xl"></i>

                <li className="mb-4 text-white">
                  <div className="font-semibold">Pasante Sena </div>
                  <p className="text-white">Grupo Ahora</p>
                  <span className="badge bg-primary rounded-pill">
                    mar. 2023 - oct. 2023
                  </span>
                </li>
                <i className="fas fa-arrow-down  text-white text-bold text-3xl"></i>

                <li className="mb-4 text-white">
                  <div className="font-semibold">
                    Pasante Full Stack Developer
                  </div>
                  <p className="text-white">PROtalento</p>
                  <span className="badge bg-primary rounded-pill">
                    mar. 2023 - sept. 2023
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
