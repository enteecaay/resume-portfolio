import Image from "next/image";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProfileSection from "@/components/ProfileSection";
import ProjectsContainer from "@/components/Projects/ProjectList";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center w-full bg-gradient-to-b from-blue-950 to-gray-950 text-gray-800 font-sans opacity-95">
      <div className="w-10/12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left section */}
          <div className="absolute inset-0 -z-2">
            <div className="absolute inset-0 bg-[url('/underwater-caustics.gif')] bg-cover bg-center opacity-10 mix-blend-darken h-full bg-repeat-y" />
          </div>
          <div className="md:w-2/5 bg-transparent text-white p-8 rounded-3xl shadow-lg">
            <div className="flex justify-center mb-6">
              <Image
                src="/avatar.jpg"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full border-4 border-blue-500 shadow-lg"
              />
            </div>
            <ProfileSection />
          </div>

          {/* Right section */}
          <div className="md:w-3/5 flex flex-col gap-3 md:mr-12">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mt-1 text-white">
                NGUYEN TUAN KIET
              </h1>
              <p className="text-xl font-medium text-white mt-2">
                Front-End Developer
              </p>
            </div>
            <div className="bg-white p-4 pl-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <EducationSection />
            </div>
            <div className="bg-white p-4 pl-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <ExperienceSection />
            </div>
            {/* <div className="bg-white p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"> */}
            {/* <ProjectSection /> */}
            <ProjectsContainer />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
