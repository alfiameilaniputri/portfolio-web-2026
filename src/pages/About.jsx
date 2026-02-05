export default function About() {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12 flex flex-col items-center justify-center">
      <div className="max-w-3xl text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
