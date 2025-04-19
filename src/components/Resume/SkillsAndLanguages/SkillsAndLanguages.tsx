
import Languages from "@/components/Resume/SkillsAndLanguages/Languages";
import GeneralSkills from "@/components/Resume/SkillsAndLanguages/GeneralSkills";

export default function SkillsAndLanguages() {

    return (
        <>
            <div className="border-b border-slate-700/50 p-6">
                <h2 className="text-2xl text-white">General Skills</h2>
            </div>
            <div className="grid grid-cols-2">
                <div className="p-8">
                    <GeneralSkills />
                </div>
                <div className="p-8 border-l border-slate-700/50 ">
                    <Languages />
                </div>
            </div>
        </>
    );
}
