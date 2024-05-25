/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/task-manager.png',
		title: 'Task Manager',
		skills: [],
		descripcion:
			'Un proyecto completo para la gestión de tareas que combina lo mejor de React, Bootstrap, Express, Node.js, MongoDB y autenticación con JWT. Con una interfaz dinámica y responsiva, seguridad de vanguardia y operaciones intuitivas, esta aplicación ofrece una experiencia de usuario sin igual para la organización eficiente de tareas.',
		demoURL: 'https://www.youtube.com/watch?v=-XhSKeeLuJU',
		repoURL: 'https://github.com/carlos060798/GESTORDETASK',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/pacientes.png',
		title: 'Gestion de veterinaria',
		skills: [],
		descripcion:
			' Este proyecto presenta una plataforma de gestión de pacientes que prioriza la seguridad y la privacidad. Utilizando autenticación basada en JSON Web Tokens (JWT) y encriptación de contraseñas, se garantiza un acceso seguro a la plataforma y se protege la información confidencial de los pacientes.',
		demoURL: 'https://www.youtube.com/watch?v=1cmiT5fxnbc',
		repoURL: 'https://github.com/carlos060798/Front-Appveterinarios/tree/main',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/ClonX.png',
		title: 'Clon x',
		skills: [],
		descripcion: 'Este proyecto consiste en desarrollar un clon de las funciones básicas de la red social X, utilizando React.js para la interfaz de usuario, Node.js para el backend, Bootstrap para el diseño y MongoDB para la base de datos. El objetivo es crear una plataforma interactiva y escalable donde los usuarios puedan registrarse, iniciar sesión, publicar  y seguir a otros usuarios. El uso de tecnologías modernas garantiza una experiencia de usuario fluida y atractiva, mientras que la implementación de buenas prácticas de desarrollo asegura un código limpio y mantenible.',
		demoURL: 'https://www.youtube.com/watch?v=j9HBG3sM95M&t=38s',
		repoURL: 'https://github.com/carlos060798/ClonX',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/PostApp.png',
		title: 'Consumo Api Placeholder',
		skills: [],
		descripcion:
			'Este proyecto es una aplicación web desarrollada con Next.js y estilizada con Bootstrap, cuyo objetivo principal es consumir datos de la API JSONPlaceholder. JSONPlaceholder es una API gratuita que proporciona datos simulados para propósitos de prueba y desarrollo',
		demoURL: 'https://pruba-nextjs.vercel.app/',
		repoURL: 'https://github.com/carlos060798/nextjs-prueba',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/taskmanager.png',
		title: 'Todo App',
		skills: [],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: 'https://todo-ada.netlify.app',
		repoURL: 'https://github.com/carlos060798/Todos.Ada',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/api.png',
		title: 'Rick and Morty API',
		skills: [],
		descripcion:'Este proyecto es una aplicación web desarrollada con React y estilizada con Bootstrap y Sass, cuyo objetivo principal es consumir datos de la API de personajes de Rick and Morty. La API proporciona información detallada sobre los personajes de la popular serie de televisión "Rick and Morty". La aplicación permite a los usuarios buscar personajes por nombre, género y estado, y ver información detallada sobre cada personaje. La interfaz de usuario es intuitiva y fácil de usar, y la aplicación es altamente receptiva y compatible con dispositivos móviles.',
		demoURL: 'https://api-reac-js-rick-morty.netlify.app/',
		repoURL: 'https://github.com/carlos060798/api-reac-js-Rick-Morty',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Node: 'skill-icons:nodejs',

};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
