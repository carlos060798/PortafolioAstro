export const Footer = () => {
  return (
    <footer className="bg-customDarkBg1 py-20">
    <div className="flex flex-col items-center justify-center text-white">
      <p className="text-center text-lg mb-6">¡Gracias por visitar mi portafolio!</p>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/carlos-danilo-angarita-garc%C3%ADa-bbabb21b7/" className="text-gray-400 hover:text-gray-300 transition duration-300" target="_blank">
        <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
       
        <a href="https://github.com/carlos060798?tab=repositories" target="_blank" className="text-gray-400 hover:text-gray-300 transition duration-300" > 
        <i className="fab fa-github text-2xl"></i>
        </a>
      </div>
      <p className="text-sm mt-6 text-gray-400 border-t border-[rgba(255,255,255,0.2)] pt-6">
        &copy; Carlos Danilo Angarita. Todos los derechos reservados.
      </p>
    </div>
  </footer>
  );
};
