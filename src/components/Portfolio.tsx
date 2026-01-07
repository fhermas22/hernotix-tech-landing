const ProjectCard = ({ title, category }: { title: string; category: string }) => (
  <div className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
    <div className="h-64 bg-gradient-to-br from-azure-blue to-charcoal-black flex items-center justify-center">
      <div className="text-center text-white">
        <p className="text-2xl font-bold">{title}</p>
      </div>
    </div>
    <div className="absolute inset-0 bg-charcoal-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gold-yellow">{category}</p>
    </div>
  </div>
);

export default function Portfolio() {
  const projects = [
    { title: 'Plateforme E-Commerce', category: 'Web / React' },
    { title: 'Application Bancaire Mobile', category: 'Mobile / Flutter' },
    { title: 'Tableau de Bord SaaS', category: 'Web / Full Stack' },
    { title: 'Réseau Social', category: 'Web & Mobile' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title">Notre Portfolio</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Explorez certains de nos projets les plus réussis qui showcasent notre expertise technique et notre vision créative.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}