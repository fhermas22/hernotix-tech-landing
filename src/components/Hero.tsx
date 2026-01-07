export default function Hero() {
  return (
    <section className="bg-charcoal-black text-white py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            L'Innovation <span className="text-azure-blue">Codée</span> au <span className="text-gold-yellow">Bénin</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            HERNOTIX Tech est votre studio de développement Web et Mobile premier, transformant les idées en solutions numériques puissantes avec une technologie de pointe et une excellence créative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary text-center">
              Démarrer un Projet
            </a>
            <a href="#portfolio" className="btn-secondary text-center">
              Voir Nos Réalisations
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="/hero_illustration.png"
            alt="Studio Tech"
            className="w-full max-w-md rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}