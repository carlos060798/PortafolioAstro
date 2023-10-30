import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import cv from "../docs/CV.pdf";

export const InvitationModal = ({ setIsOpen }) => {
  const descargarPDF = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "archivo.pdf";
    link.click();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-full  bg-customDarkBgTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex relative">
              <div className="w-1/2 hidden lg:inline">
                <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-white">
                  Developer web
                </h2>
                <h2 className="text-5xl font-bold tracking-normal text-customSecondary">
                  Full Stack Mern
                </h2>

                <ul className="mb-6 text-white mt-12">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Typescript</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Reac js</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Node js</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Express js</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Mysql</span>
                  </li>{" "}
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Mongo db</span>
                  </li>{" "}
                </ul>
              </div>
              <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
              

                <h3 className="mb-7 text-2xl text-white font-bold leading-snug text-center">
                  Hola, soy Carlos Danilo Angarita
                </h3>
                <div className="flex flex-wrap -m-2">
                <p className="text-white text-sm leading-8 mb-6 text-justify">
  Desarrollador Web Full Stack con habilidades sólidas en JavaScript, ReactJS, MongoDB, MySQL, Git, HTML, Bootstrap y Node.js. Mi trasfondo como abogado ha enriquecido mi capacidad analítica y resolutiva, mientras que mis habilidades para gestionar el tiempo son destacadas. He creado landing pages y sistemas web personalizados.
</p>

                  <button
                    className="py-3 px-6 w-full text-white font-semibold rounded-lg shadow-lg focus:ring focus:ring-indigo-300 bg-customPrimary hover:bg-[#7274f3] transition ease-in-out duration-200"
                    type="button"
                    onClick={descargarPDF}
                  >
                    Descargar CV
                  </button>
                </div>
              </div>
              <div
                className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
