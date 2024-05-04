import { motion } from "framer-motion";

const renderSkillCard = (icon, text) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-4 rounded-lg shadow-md flex items-center transition-transform duration-300 ease-in-out"
  >
    <i className={`fab ${icon} text-2xl ${getIconColor(icon)} mr-4`}></i>
    <span className={`text-lg font-semibold ${getTextColor(icon)}`}>{text}</span>
  </motion.div>
);

const getIconColor = (icon) => {
  switch (icon) {
    case "fa-html5":
      return "text-orange-500";
    case "fa-css3-alt":
      return "text-blue-500";
    case "fa-bootstrap":
      return "text-purple-500";
    case "fa-js":
      return "text-yellow-500";
    case "fa-java":
      return "text-orange-500";
    case "fa-angular":
      return "text-red-500";
    case "fa-layer-group":
      return "text-blue-500";
    case "fa-react":
      return "text-blue-500";
    case "fa-node":
      return "text-green-500";
    case "fa-database":
      return "text-blue-500";
    default:
      return "";
  }
};

const getTextColor = (icon) => {
  switch (icon) {
    case "fa-html5":
    case "fa-css3-alt":
    case "fa-js":
    case "fa-java":
    case "fa-react":
    case "fa-database":
      return "text-blue-500";
    case "fa-bootstrap":
    case "fa-layer-group":
      return "text-purple-500";
    case "fa-angular":
      return "text-red-500";
    case "fa-node":
      return "text-green-500";
    default:
      return "";
  }
};

export const Skills = () => {
  const skills = [
    { icon: "fa-html5", text: "HTML" },
    { icon: "fa-css3-alt", text: "CSS" },
    { icon: "fa-bootstrap", text: "Bootstrap" },
    { icon: "fa-js", text: "Javascript" },
    { icon: "fa-js", text: "TypeScript" },
    { icon: "fa-java", text: "Java" },
    { icon: "fa-angular", text: "Angular" },
    { icon: "fa-layer-group", text: "Mendix" },
    { icon: "fa-react", text: "React JS" },
    { icon: "fa-node", text: "Node JS" },
    { icon: "fa-database", text: "MySQL" },
    { icon: "fa-database", text: "MongoDB" },
  ];

  return (
    <section className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0 xl:m pt-[2rem] md:pt-[12vw] lg:pt-0" id="skills">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="container mx-auto">
            <h2 className="text-5xl  text-center text-white font-semibold mb-6">Habilidades Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div key={index}>{renderSkillCard(skill.icon, skill.text)}</div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};