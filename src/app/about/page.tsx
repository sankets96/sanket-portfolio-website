import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Sanket",
  description: "This is About Page of sanket suryavanshi",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Results-driven Software Engineer with expertise in Node.js development and a strong foundation in building
 scalable web applications and backend systems. Proficient in designing and implementing RESTful APIs, applying
 Agile methodologies, and practicing test-driven development. Recognized for strong problem-solving abilities,
 continuous learning mindset, and effective cross-functional collaboration."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
