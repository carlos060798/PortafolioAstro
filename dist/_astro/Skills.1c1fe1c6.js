import{j as e}from"./jsx-runtime.109e40f8.js";import{m as r}from"./motion.e3ea24f3.js";import"./index.f1bc5ebf.js";const n=(t,a)=>e.jsxs(r.div,{whileHover:{scale:1.05},className:"bg-white p-4 rounded-lg shadow-md flex items-center transition-transform duration-300 ease-in-out",children:[e.jsx("i",{className:`fab ${t} text-2xl ${c(t)} mr-4`}),e.jsx("span",{className:`text-lg font-semibold ${l(t)}`,children:a})]}),c=t=>{switch(t){case"fa-html5":return"text-orange-500";case"fa-css3-alt":return"text-blue-500";case"fa-bootstrap":return"text-purple-500";case"fa-js":return"text-yellow-500";case"fa-java":return"text-orange-500";case"fa-angular":return"text-red-500";case"fa-layer-group":return"text-blue-500";case"fa-react":return"text-blue-500";case"fa-node":return"text-green-500";case"fa-database":return"text-blue-500";default:return""}},l=t=>{switch(t){case"fa-html5":case"fa-css3-alt":case"fa-js":case"fa-java":case"fa-react":case"fa-database":return"text-blue-500";case"fa-bootstrap":case"fa-layer-group":return"text-purple-500";case"fa-angular":return"text-red-500";case"fa-node":return"text-green-500";default:return""}},d=()=>{const t=[{icon:"fa-html5",text:"HTML"},{icon:"fa-css3-alt",text:"CSS"},{icon:"fa-bootstrap",text:"Bootstrap"},{icon:"fa-js",text:"Javascript"},{icon:"fa-js",text:"TypeScript"},{icon:"fa-java",text:"Java"},{icon:"fa-angular",text:"Angular"},{icon:"fa-layer-group",text:"Mendix"},{icon:"fa-react",text:"React JS"},{icon:"fa-node",text:"Node JS"},{icon:"fa-database",text:"MySQL"},{icon:"fa-database",text:"MongoDB"}];return e.jsx("section",{className:"w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0 xl:m pt-[2rem] md:pt-[12vw] lg:pt-0",id:"skills",children:e.jsx(r.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.2},children:e.jsx("div",{className:"flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsx("h2",{className:"text-5xl  text-center text-white font-semibold mb-6",children:"Habilidades Técnicas"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map((a,s)=>e.jsx("div",{children:n(a.icon,a.text)},s))})]})})})})};export{d as Skills};