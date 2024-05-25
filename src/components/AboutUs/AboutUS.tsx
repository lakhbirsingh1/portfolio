import Description from "./Description";
import Skills from "./Skills";

const AboutUs = () => {

  return (
    <>
      <div className="border-b border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold">About Me</h2>
      </div>
      <div className="grid grid-cols-2">
        <Description />
        <div className="py-5 divide-y divide-slate-700">
          <Skills />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
