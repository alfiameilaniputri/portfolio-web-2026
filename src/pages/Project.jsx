import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================
   FEATURED PROJECTS
========================= */
const featuredProjects = [
  {
    id: "sharp",
    title: "Internal Web System — PT Sharp Electronics Indonesia",
    type: "Corporate Case Study (Confidential)",
    role: "Web Developer (Apprenticeship)",
    description:
      "Contributed to the development of an internal web-based system used by operational teams to manage form-based workflows, data validation, and reporting. Implemented responsive frontend components and integrated features with internal REST APIs. Produced technical documentation and system flowcharts to support cross-team communication and structured milestone tracking.",
    impact:
      "Improved data accuracy, workflow reliability, and internal reporting efficiency across 5+ operational processes.",
    image: [
      "/Dashboard MIS.png",
      "/form Head dept vers 2.png",
      "/Form Requester Sharp.jpeg",
      "/List Request New.png",
      "/Pop up confirmed by head dept.png",
    ],
    tech: ["HTML", "CSS", "JavaScript", "REST API", "Internal DB"],
    badge: "FEATURED • INTERNAL",
    github: null,
    demo: null,
  },
  {
    id: "reloved",
    title: "E-Commerce Thrifting (Reloved)",
    type: "Full Stack Application",
    role: "Front-End / Full Stack Developer",
    description:
      "Built a MERN-based e-commerce platform for buying and selling secondhand clothing with responsive UI and role-based access.",
    impact:
      "Improved shopping experience and structured product management.",
    image: ["/Web Reloved.jpg"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    badge: "FEATURED",
    github: "https://github.com/alfiameilaniputri/reloved",
    demo: "https://reloved.vercel.app",
  },
  {
    id: "task",
    title: "Voca Task Manager",
    type: "Internal Tool / Dashboard System",
    role: "Full Stack Developer",
    description:
      "Developed a MERN-based task management system with CRUD operations and workflow tracking.",
    impact: "Improved task visibility and workflow efficiency.",
    image: ["/Web Task Manager.jpg"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    badge: "FEATURED",
    github: "https://github.com/username/task-manager",
    demo: null,
  },
];

/* =========================
   ALL PROJECTS
========================= */
const projects = [
  {
    id: 1,
    title: "VocFilm — Movie Discovery Platform",
    description:
      "Movie discovery and review platform with API-driven search and filtering.",
    image: ["/Web Movie.jpg"],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    github: "https://github.com/username/vocfilm",
    demo: null,
  },
  {
    id: 2,
    title: "Pokedex — API-Based Web App",
    description:
      "Interactive Pokedex app consuming public APIs with dynamic UI.",
    image: ["/Web Pokedex.jpg"],
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    github: "https://github.com/username/pokedex",
    demo: "https://pokedex.vercel.app",
  },
  {
    id: 3,
    title: "Bookshelf App — Local Storage System",
    description:
      "Bookshelf app using localStorage for persistent data handling.",
    image: ["/Web Book Shelf 1.png", "/Web Book Shelf 2.png"],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/username/bookshelf",
    demo: null,
  },
  {
    id: 4,
    title: "Pawon Alzhim’s Web — Responsive Layout",
    description:
      "Responsive website layout using semantic HTML and Flexbox.",
    image: ["/Web Al Zhim 1.png", "/Web Al Zhim 2.png"],
    tech: ["HTML", "CSS", "JavaScript"],
    github: null,
    demo: "https://pawon-alzhim.vercel.app",
  },
  {
    id: 5,
    title: "Notes App — REST API Integration",
    description:
      "Notes application consuming RESTful APIs with structured data rendering.",
    image: ["/Web Notes App.png"],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/username/notes",
    demo: null,
  },
  {
    id: 6,
    title: "Mental Health Web Platform — Team Project",
    description:
      "Frontend interfaces for a mental health platform integrated with ML analysis.",
    image: [
      "/Halaman Register.png",
      "/Halaman Login.png",
      "/Halaman Beranda (1).jpg",
      "/Halaman Evaluasi Diri 1.jpg",
      "/Halaman Evaluasi Diri 2.jpg",
      "/Halaman Evaluasi Diri 5.jpg",
      "/Halaman Evaluasi Diri 6.jpg",
    ],
    tech: ["React.js", "REST API", "Tailwind CSS"],
    github: null,
    demo: null,
  },
  {
    id: 7,
    title: "Web Story App — PWA",
    description:
      "Progressive Web App with offline support and IndexedDB.",
    image: ["/Web Story 1.png", "/Web Story 2.png", "/Web Story 3.png"],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/username/web-story",
    demo: null,
  },
];

/* =========================
   MAIN COMPONENT
========================= */
export default function Projects() {
  const [modalProject, setModalProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const openModal = (project) => {
    setModalProject(project);
    setCurrentImgIndex(0);
    setIsZoomOpen(false);
  };

  const handleNext = () =>
    setCurrentImgIndex(
      (prev) => (prev + 1) % modalProject.image.length
    );

  const handlePrev = () =>
    setCurrentImgIndex(
      (prev) =>
        (prev - 1 + modalProject.image.length) %
        modalProject.image.length
    );

  /* =========================
     CARD
  ========================= */
  const Card = ({ project, featured = false }) => (
    <div
      className={`group bg-white border border-slate-200 rounded-2xl
                  overflow-hidden shadow-sm hover:shadow-lg transition
                  ${featured ? "ring-2 ring-blue-700" : ""}`}
    >
      <div
        className="relative aspect-[16/9] cursor-pointer"
        onClick={() => openModal(project)}
      >
        <img
          src={project.image[0]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
                        flex items-center justify-center text-white text-xs font-semibold">
          View Details
        </div>

        {featured && (
          <span className="absolute top-3 left-3 bg-blue-900 text-white
                           text-[10px] px-3 py-1 rounded-full">
            {project.badge}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col">
        <h3 className="text-sm font-semibold mb-2 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-xs text-slate-700 mb-3 line-clamp-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="bg-slate-800 text-white text-[10px]
                         px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="mt-auto flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px]
                           px-3 py-1.5 rounded-full border border-slate-700
                           hover:bg-slate-700 hover:text-white transition"
              >
                <FiGithub /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px]
                           px-3 py-1.5 rounded-full bg-blue-800 text-white
                           hover:bg-blue-900 transition"
              >
                <FiExternalLink /> Live
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-semibold text-center mb-10">
          Featured Case Studies & Projects
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-24">
          {featuredProjects.map((p) => (
            <Card key={p.id} project={p} featured />
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-10">
          All Projects
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </div>

        {/* ================= MODAL ================= */}
        {modalProject && (
          <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
            onClick={() => setModalProject(null)}
          >
            <div
              className="relative bg-white rounded-2xl p-5 max-w-xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-3 right-3 p-2 rounded-full hover:bg-slate-100"
              >
                <FiX />
              </button>

              <div className="relative mb-4">
                <img
                  src={modalProject.image[currentImgIndex]}
                  alt="Preview"
                  className="w-full max-h-[40vh] object-contain rounded-lg cursor-zoom-in"
                  onClick={() => setIsZoomOpen(true)}
                />

                {modalProject.image.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute top-1/2 left-2 -translate-y-1/2
                                 bg-black/60 text-white p-2 rounded-full"
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute top-1/2 right-2 -translate-y-1/2
                                 bg-black/60 text-white p-2 rounded-full"
                    >
                      <FiChevronRight />
                    </button>
                  </>
                )}
              </div>

              <h3 className="font-semibold mb-2">
                {modalProject.title}
              </h3>

              <p className="text-sm text-slate-700 mb-3">
                {modalProject.description}
              </p>

              {modalProject.impact && (
                <p className="text-sm font-semibold text-green-700 mb-4">
                  Impact: {modalProject.impact}
                </p>
              )}
            </div>
          </div>
        )}

        {/* ================= ZOOM (SCROLLABLE) ================= */}
        {isZoomOpen && modalProject && (
          <div
            className="fixed inset-0 z-[999] bg-black/90 overflow-y-auto"
            onClick={() => setIsZoomOpen(false)}
          >
            <div
              className="relative flex justify-center py-10 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalProject.image[currentImgIndex]}
                alt="Zoom"
                className="max-w-full h-auto object-contain"
              />

              <button
                onClick={() => setIsZoomOpen(false)}
                className="fixed top-6 right-6 bg-white text-black
                           w-10 h-10 rounded-full flex items-center justify-center
                           shadow hover:bg-slate-200 transition"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
