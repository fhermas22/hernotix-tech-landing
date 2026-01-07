const ServiceCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-azure-blue">
    <img src={icon} alt={title} className="w-20 h-20 mb-4 mx-auto" />
    <h3 className="text-2xl font-bold text-charcoal-black mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
  </div>
);

export default function Services() {
  const services = [
    {
      icon: '/web_development_icon.png',
      title: 'Développement Web',
      description: 'Sites web modernes et applications web réactives construits avec React, Tailwind CSS et les dernières technologies.',
    },
    {
      icon: '/mobile_development_icon.png',
      title: 'Développement Mobile',
      description: 'Applications mobiles natives et cross-platform qui offrent des expériences utilisateur exceptionnelles sur Android et iOS.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title">Notre Expertise</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Nous nous spécialisons dans la livraison de solutions numériques de haute qualité qui stimulent la croissance commerciale et l'engagement des utilisateurs.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}