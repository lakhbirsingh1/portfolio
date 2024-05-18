import WrapAboutUs from "@/components/ContentWrapper/WrapAboutUs";
import WrapResume from "@/components/ContentWrapper/WrapResume";
import Project from "@/components/Projects/Project";
import ContactUS from "@/components/ContentWrapper/ContactUs";


export default function RightContentWrapper() {
    return (
        <>
            <WrapAboutUs />
            <WrapResume />
            <Project />
            <ContactUS />
        </>
    );
}
