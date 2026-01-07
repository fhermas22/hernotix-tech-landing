export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src="/benin_tech_illustration.png"
            alt="Innovation Technologique Béninoise"
            className="w-full max-w-md rounded-lg shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <h2 className="section-title">À Propos de HERNOTIX Tech</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Fondée avec une passion pour l'innovation et l'excellence, HERNOTIX Tech est un studio de développement leader au Bénin. Nous comblons le fossé entre la technologie de pointe et les besoins commerciaux réels.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Notre équipe de développeurs, designers et stratèges expérimentés travaille en collaboration pour livrer des solutions qui dépassent les attentes. Nous croyons en la communication transparente, les méthodologies agiles et l'amélioration continue.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <span className="text-azure-blue font-bold">✓</span>
              <span className="text-gray-700">Équipe experte avec 20+ projets réussis</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-azure-blue font-bold">✓</span>
              <span className="text-gray-700">Stack technologique de pointe</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-azure-blue font-bold">✓</span>
              <span className="text-gray-700">Approche transparente et agile</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}