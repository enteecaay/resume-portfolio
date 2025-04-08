const ProjectSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-700 mb-2">Projects</h2>
      <div className="mt-2">
        <h3 className="font-bold text-xl">Koi Care System At Home Web Application // 9/2024 - 11/2024</h3>
        <ol className="list-disc pl-5 mt-4 text-base text-gray-700 space-y-1">
          <li>Link Project: <a href="https://github.com/lvppaul/KoiCareSystemAtHome" className="hover:underline">Github</a></li>
          <li>Team size: 5 members</li>
        </ol>
      </div>
      <div className="mt-1">
        <h3 className="font-semibold">Front-End Web Developer and UI/UX Designer </h3>
        <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-1">
          <li>Designed and prototyped user interface using Figma, ensuring it was friendly and visual for users based on user requirements.</li>
          <li>Developed front-end web application, translating Figma designs to web pages.</li>
          <li>Collaborated with back-end team to integrate designs with APIs, ensuring functionality meets the user requirement.</li>
          <h5 className="font-semibold">Technologies description</h5>
          <li>ReactJS: building components for front-end interfaces.</li>
          <li>React-Bootstrap: for making responsive interfaces and modern UI components with pre-built styling.</li>
          <li>Firebase: manage store images and authentication for Google login.</li>
          <li>Axios: for making API requests to backend API services.</li>
          <h5 className="font-semibold">Development Tools</h5>
          <li>Create React App: The project was bootstrapped with Create React App, which provides a modern build setup with no configuration.</li>
          <li>Vite: The project was built using Vite, a next-generation frontend build tool that offers lightning-fast development server, instant hot module replacement, and optimized production builds.</li>
        </ul>
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-xl">Claim Request Managements System // 1/2025 - 4/2025</h3>
        <ol className="list-disc pl-5 mt-4 text-base text-gray-700 space-y-1">
          <li>Link Project: <a href="https://github.com/MuonNghiCode/work-clock" className="hover:underline">Github</a></li>
          <li>Team size: 8 members</li>
        </ol>
      </div>
      <div className="mt-1">
        <h3 className="font-semibold">Front-End Web Developer and UI/UX Designer </h3>
        <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-1">
          <li>Designed and prototyped user interface using Figma, ensuring it was friendly and visual for users based on user requirements.</li>
          <li>Developed front-end web application, translating Figma designs to web pages.</li>
          <h5 className="font-semibold">Technologies description</h5>
          <li>ReactJS: building components for front-end interfaces.</li>
          <li>TypeScript: for better tooling, error-checking during development, and improved code maintainability.</li>
          <li>Tailwindcss, Antd: for making responsive interfaces and modern UI components with pre-built styling.</li>
          <li>Cloudinary: manage store avatar for user</li>
          <li>Axios: Config interceptor and use for calling api</li>
          <h5 className="font-semibold">Development Tools</h5>
          <li>Vercel: A cloud platform for deploy frontend through github source</li>
          <li>Vite: The project was built using Vite, a next-generation frontend build tool that offers lightning-fast development server.</li>
        </ul>
      </div>
    </section >
  );
};

export default ProjectSection;
