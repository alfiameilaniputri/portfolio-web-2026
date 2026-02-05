import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================
   EDUCATION
========================= */
const education = [
  {
    id: 1,
    title: "Bachelor of Informatics | GPA: 3.92 / 4.00",
    subtitle: "Universitas Singaperbangsa Karawang — Karawang, Indonesia",
    period: "Sep 2022 - Jan 2026",
    description:
      "Final Project: Design and Implementation of a MERN Stack–Based E-Commerce System Using the Prototype Method (Case Study: Warung Alzhim).",
  },
];

/* =========================
   EXPERIENCE
========================= */
const experiences = [
  {
    id: 0,
    title: "Web Developer (Apprenticeship)",
    subtitle: "PT Sharp Electronics Indonesia — Karawang, Indonesia",
    period: "Aug 2025 - Dec 2025",
    description: [
      "Developed and maintained frontend (HTML, CSS, JavaScript) and supported backend logic and database operations for 1 internal web application, handling 10+ UI components and forms.",
      "Integrated features with internal REST APIs, supporting 5+ core workflows (data entry, validation, retrieval, and updates) to improve data consistency and system reliability.",
      "Produced system flowcharts and technical documentation for 15+ processes and tracked 16 project milestones to ensure structured progress reporting.",
    ],
  },
  {
    id: 1,
    title: "Front-End & Back-End Developer Cohort",
    subtitle: "Coding Camp powered by DBS Foundation — Jakarta, Indonesia",
    period: "Feb 2025 - Jul 2025",
    description: [
      "Completed 9 intensive learning modules over 5 months focused on modern JavaScript-based web development.",
      "Built 9+ web-based projects, primarily handling frontend development using React.js, including responsive layout implementation.",
      "Integrated frontend components with RESTful APIs and collaborated on 1 capstone project using Git-based version control.",
    ],
  },
  {
    id: 2,
    title: "Independent Study (MSIB) — Fullstack Web Development",
    subtitle: "Vocasia — Jakarta, Indonesia",
    period: "Sep 2024 - Dec 2024",
    description: [
      "Participated in a 16-week project-based web development program using the MERN Stack.",
      "Developed frontend interfaces with React.js and implemented backend architecture using MVC pattern with JWT-based authentication.",
      "Built a final e-commerce web application with 10+ core features in a 4-person team.",
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer (Project-Based Case Study)",
    subtitle: "Dibimbing.id — Remote",
    period: "Apr 2025",
    description: [
      "Conducted usability and information architecture analysis for a healthcare clinic website.",
      "Created wireframes and high-fidelity UI designs using Figma to improve hierarchy, readability, and user flow.",
      "Produced before–after comparisons to demonstrate usability and visual consistency improvements.",
    ],
  },
];

/* =========================
   ORGANIZATIONS
========================= */
const organizations = [
  {
    id: 1,
    title: "Multimedia Department, Information & Communication Division",
    subtitle:
      "Himpunan Mahasiswa Informatika Unsika (HIMTIKA) — Universitas Singaperbangsa Karawang",
    period: "Dec 2022 - Dec 2023",
    description: [
      "Produced digital content and graphic assets for events.",
      "Coordinated publication workflows across divisions.",
      "Supported event documentation and reporting.",
    ],
  },
  {
    id: 2,
    title: "Secretary",
    subtitle:
      "Share IT 2023 — Organizing Committee, HIMTIKA Universitas Singaperbangsa Karawang",
    period: "Mar 2023 - Jul 2023",
    description: [
      "Prepared meeting minutes, SOPs, and accountability reports (LPJ).",
      "Tracked task assignments and follow-ups.",
      "Managed structured digital archives.",
    ],
  },
];

/* =========================
   SKILLS
========================= */
const skillCards = [
  {
    title: "Design & UX",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Visual Hierarchy",
      "Usability Evaluation",
      "Responsive Design",
    ],
  },
  {
    title: "Front-End",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Component Structuring",
      "Form Handling & Validation",
    ],
  },
  {
    title: "Back-End / Systems",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MongoDB",
      "MySQL",
      "Git & GitHub",
    ],
  },
  {
    title: "Professional",
    skills: [
      "Team Collaboration",
      "Technical Communication",
      "Problem Solving",
      "Time Management",
      "Adaptability",
      "Task Prioritization",
    ],
  },
];

/* =========================
   CERTIFICATES
========================= */
const certificates = [
  {
    id: 1,
    title: "Web Developer Certification — BNSP (2025)",
    image: "/Sertifikat Web Developer BNSP.jpg",
  },
  {
    id: 2,
    title: "Front-End & Back-End Developer — DBS Foundation (2025)",
    image: "/Sertifikat Coding Camp halaman 1.png",
  },
  {
    id: 3,
    title: "Full-Stack Web Developer — Vocasia (2024)",
    image: "/Sertifikat Vocasia.png",
  },
  {
    id: 4,
    title: "Junior Graphic Designer — BNSP (2023)",
    image: "/SERTIFIKAT DESAIN GRAFIS BNSP.jpeg",
  },
];

/* =========================
   MAIN COMPONENT
========================= */
export default function Resume() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedCert ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedCert]);

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16 text-slate-800">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-16 gap-6 mt-10">
          <h1 className="text-3xl font-semibold">Resume</h1>
          <a
            href="/CV Alfia Meilani Putri.pdf"
            download
            className="px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
          >
            Download CV
          </a>
        </div>

        <Section title="Education">
          {education.map((item) => (
            <Card key={item.id} {...item} type="text" />
          ))}
        </Section>

        <Section title="Professional Experience">
          {experiences.map((item) => (
            <Card key={item.id} {...item} type="list" />
          ))}
        </Section>

        <Section title="Organizational Experience">
          {organizations.map((item) => (
            <Card key={item.id} {...item} type="list" />
          ))}
        </Section>

        <Section title="Skills" highlight>
          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-2xl">
            Core technical and professional skills developed through academic
            projects, industry apprenticeship, and intensive bootcamp programs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCards.map((card, idx) => (
              <SkillCard key={idx} {...card} />
            ))}
          </div>
        </Section>

        <Section title="Training & Certifications">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center space-y-3">
                  <p className="text-sm font-medium">{cert.title}</p>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-blue-700 font-semibold text-sm hover:underline"
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>

      {/* MODAL CERTIFICATE */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-2xl p-4 max-w-5xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE — TOP RIGHT */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full
                         bg-slate-800 text-white flex items-center justify-center"
            >
              ✕
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

/* =========================
   COMPONENTS
========================= */

function Section({ title, children }) {
  return (
    <section className="mb-16">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 border-l-4 border-blue-700 pl-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Card({ title, subtitle, period, description, type }) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition mb-6">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-sm text-slate-500">{period}</span>
      </div>

      <p className="text-sm text-blue-700 mb-3">{subtitle}</p>

      {type === "list" ? (
        <ul className="list-disc list-inside space-y-2 text-sm">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm">{description}</p>
      )}
    </div>
  );
}

function SkillCard({ title, skills }) {
  return (
    <div
      className="relative bg-blue-50 border border-blue-200
                 rounded-3xl p-7
                 shadow-sm transition
                 hover:shadow-lg hover:-translate-y-1"
    >
      {/* ACCENT STRIP */}
      <span className="absolute left-0 top-6 h-10 w-1.5 bg-blue-700 rounded-r" />

      <h3 className="text-lg font-semibold text-blue-900 mb-5">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-blue-700 text-white
                       px-3 py-1.5 rounded-full
                       text-xs font-semibold
                       hover:bg-blue-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}


