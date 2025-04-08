import Image from "next/image";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectSection from "@/components/ProjectSection";
import ProfileSection from "@/components/ProfileSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-white to-blue-100 text-gray-900 p-8 font-sans max-w-6xl mx-auto shadow-xl rounded-3xl">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left section */}
        <div className="md:w-1/3 bg-gradient-to-b from-blue-950 to-gray-950 text-white p-8 rounded-3xl shadow-lg">
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
        <div className="md:w-2/3 flex flex-col gap-5">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-gray-800">
              NGUYEN TUAN KIET
            </h1>
            <p className="text-xl font-medium text-gray-600 mt-2">
              Front-End Developer
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <EducationSection />
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <ExperienceSection />
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <ProjectSection />
          </div>
        </div>
      </div>
    </div>
  );
}
