import { motion } from "framer-motion";



export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div class="container mx-auto">
            <h2 class="text-5xl  text-center text-white font-semibold mb-6">Mis Habilidades</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
              <i class="fab fa-html5 text-2xl text-orange-500 mr-4"></i> 
                <span class="text-lg font-semibold">Html</span>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
              <i class="fab fa-css3-alt text-2xl text-blue-500 mr-4"></i>
                <span class="text-lg font-semibold">Css</span>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
              <i class="fab fa-bootstrap text-2xl text-purple-500 mr-4"></i>
                <span class="text-lg font-semibold">Bootstrap</span>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
              <i class="fab fa-js text-2xl text-yellow-500 mr-4"></i>
                <span class="text-lg font-semibold">Javascript</span>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
              <i class="fab fa-js text-2xl text-blue-500 mr-4"></i>
                <span class="text-lg font-semibold">TypeScript</span>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
              <i class="fab fa-react text-2xl text-blue-500 mr-4"></i>
                <span class="text-lg font-semibold">Reac js</span>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
              <i class="fab fa-node text-2xl text-green-500 mr-4"></i>
                <span class="text-lg font-semibold">Node js</span>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
              <i class="fas fa-database text-2xl text-blue-500 mr-4"></i>
                <span class="text-lg font-semibold">Mysql</span>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
              <i class="fas fa-database text-2xl text-green-500 mr-4"></i>
                <span class="text-lg font-semibold">MongoDb</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
