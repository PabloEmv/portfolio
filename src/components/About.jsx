import aboutImg from "../assets/img/about.jpg";
import CheckedSkills from "./CheckedSkills";

const About = () => {
  return (
    <div className="w-full dark:bg-gray-800 md:inline-flex sm:px-10 lg:px-20 2xl:px-40 mt-20 sm:mt-32">
      <figure>
        <img
          className="w-full sm:mr-60 xl:mr-96"
          src={aboutImg}
          alt="imagen de escritorio"
        />
      </figure>
      <div className="px-4 sm:px-4 lg:px-12 xl:px-32 mt-4 sm:mt-0">
        <h2 className="text-4xl font-bold">Acerca de mi</h2>
        <p className="text-lg">
          A creative professional with a strong portfolio in digital design,
          including experience with front-end development. Experienced working
          from concept to production, and with stakeholders from multiple
          disciplines. A fluent user of popular design tools like Figma and
          Adobe CC.
        </p>
        <h3 className="text-xl font-bold">Here are a few technologies I’ve been working with recently:</h3>
        <div className="flex justify-center sm:justify-start">
        <div className="inline-grid grid-cols-3 gap-x-12 gap-y-4 xl:gap-x-24 mt-4 px-2">
          <CheckedSkills name='Figma' color='toggle-secondary' />
          <CheckedSkills name='React' color='toggle-info' />
          <CheckedSkills name='JavaScript' color='toggle-warning' />
          <CheckedSkills name='HTML5' color='toggle-error' />
          <CheckedSkills name='CSS3' color='toggle-accent' />
          <CheckedSkills name='UX/UI' color='toggle-primary' />
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
