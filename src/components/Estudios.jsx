import { motion } from "framer-motion";

export const Estudios = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="formacion" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <h2 className="mb-16 custom-block-big-title text-center">
            Formacion
          </h2>
          <p className="mb-7 custom-block-subtitle text-center">
            ¡Bienvenido a la sección de mis estudios! En mi viaje como
            desarrollador, he adquirido una variedad de conocimientos y
            habilidades a través de experiencias educativas diversas. Desde
            formación formal en instituciones académicas hasta programas de
            desarrollo intensivos, cada etapa de mi educación ha sido una
            oportunidad para aprender, crecer y explorar nuevas áreas de la
            informática
          </p>

          <div className="mb-11 flex flex-wrap -m-1">
            <div className="container mx-auto text-center">
            <ul className="list-none">
    <li className="mb-4 text-white">
      <div className="font-semibold">Analisis y desarrollo de sistemas de informacion</div>
      <p className="text-white">Sena</p>
      <span className="badge bg-primary rounded-pill">2020 - 2023</span>
    </li>
    <i className="fas fa-arrow-down  text-white text-bold text-3xl"></i>

    <li className="mb-4 text-white">
      <div className="font-semibold">Bootcamp Desarrollador Full Stack</div>
      <p className="text-white">Protalento</p>
      <span className="badge bg-primary rounded-pill">2023</span>
    </li>
    <i className="fas fa-arrow-down  text-white text-bold text-3xl"></i>

    <li className="mb-4 text-white">
      <div className="font-semibold">Derecho</div>
      <p className="text-white">Universidad Francisco de Paula Santander</p>
      <span className="badge bg-primary rounded-pill">2016 - 2021</span>
    </li>
    <i className="fas fa-arrow-down  text-white text-bold text-3xl"></i>
    <li className="mb-4 text-white">
      <div className="font-semibold">Mision tic</div>
      <p className="text-white">Universidad Industrial de Santander</p>
      <span className="badge bg-primary rounded-pill">2021</span>
    </li>
  </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
