const EducationSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-700 mb-3">Education</h2>
      <div className="w-full inline-flex items-center mb-4">
        <h3 className="font-bold text-xl">
          FPT University <span className="mx-4">{"//"}</span> 2022 - 2026
        </h3>
      </div>
      <div>
        <h3 className="font-bold text-xl">
          <div>
          </div>Responsive Web Design Certification</h3>
        <p className="text-sm text-gray-600">freeCodeCamp | Earned 2025</p>
        <ul className="list-disc pl-5 mt-2 text-base text-gray-700 space-y-1">
          <li>
            Completed coursework covering HTML, CSS, and responsive design
            principles.
          </li>
          <li>
            Built multiple projects to demonstrate proficiency in creating
            responsive and accessible web layouts.
          </li>
        </ul>
        <a
          href="https://www.freecodecamp.org/certification/enteecaay/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-base mt-1 inline-block"
        >
          View Certification
        </a>
      </div>
    </section>
  );
};

export default EducationSection;
