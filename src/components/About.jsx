import aboutImg from "../assets/img/about.jpg";
import CheckedSkills from "./CheckedSkills";

const About = () => {
  return (
    <div className="w-full dark:bg-gray-800 lg:inline-flex sm:px-10 lg:px-20 2xl:px-40 mt-20 sm:mt-32">
      <figure>
        <img
          className="w-full sm:mr-60 xl:mr-96 mb-5 lg:mb-0 lg:mt-4"
          src={aboutImg}
          alt="imagen de escritorio"
        />
      </figure>
      <div className="px-4 sm:px-4 lg:px-12 xl:px-32 mt-4 sm:mt-0">
        <h2 className="text-4xl font-bold">Acerca de mi</h2>
        <p className="text-lg">
        Soy un profesional creativo con experiencia en desarrollo front-end y backend. He participado en proyectos desde la fase de conceptualización hasta la de producción. Me apasiona el diseño y la implementación de interfaces de usuario atractivas y funcionales, pero también me interesa el uso de distintas herramientas para desarrollo backend, como bases de datos, APIs y frameworks.
        </p>
        <h3 className="text-xl font-bold">Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</h3>
        <div className="flex justify-center sm:justify-start">
        <div className="inline-grid grid-cols-3 gap-x-12 gap-y-4 xl:gap-x-24 mt-4 px-2">
          <CheckedSkills name='React' color='toggle-info' />
          <CheckedSkills name='JavaScript' color='toggle-warning' />
          <CheckedSkills name='HTML5' color='toggle-error' />
          <CheckedSkills name='CSS3' color='toggle-accent' />
          <CheckedSkills name='Node.Js' color='toggle-primary' />
          <CheckedSkills name='Java' color='toggle-secondary' /> 
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
