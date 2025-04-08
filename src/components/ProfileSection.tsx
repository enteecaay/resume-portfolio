import { Phone, Mail, Facebook, Github } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="space-y-6 text-white">
      <p className="text-base leading-relaxed">
        Passionate front-end developer with a focus on creating responsive,
        user-friendly, and visually appealing web applications.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Phone size={24} className="" />
          <a href="tel:0375727245" className="hover:underline">
            0358031825
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Mail size={24} className="" />
          <a
            href="mailto:kietnguyen060204@gmail.com"
            className=" hover:underline"
          >
            kietnguyen060204@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Facebook size={24} className="" />
          <a
            href="https://www.facebook.com/enteecaay"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:underline "
          >
            Nguyen Tuan Kiet
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Github size={24} className="" />
          <a
            href="https://github.com/enteecaay"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:underline"
          >
            enteecaay
          </a>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-xl font-bold">Technical Skill:</h1>
          <ul className="list-disc pl-5 text-base space-y-3">
            <li>ReactJS, NextJS, .NET</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Git, Github</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-xl font-bold">Soft Skill:</h1>
          <ul className="list-disc pl-5 text-base space-y-3">
            <li>Teamwork</li>
            <li>Problem-solving</li>
            <li>Time management</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-xl font-bold">Languages:</h1>
          <ul className="list-disc pl-5 text-base space-y-3">
            <li>English: Intermediate</li>
            <li>Vietnamese: Native</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
