// SVG icons for each point
const icons = {
  profile: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  strength: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  risk: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  development: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V10" />
      <path d="m18 14-6-6-6 6" />
    </svg>
  ),
  step: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
};

const items = [
  {
    title: "Seu perfil predominante de liderança",
    description: "Identifique qual das 4 vertentes de liderança guia suas ações diárias.",
    icon: icons.profile
  },
  {
    title: "Sua principal força",
    description: "A habilidade natural que sustenta sua autoridade e gera conexão com o time.",
    icon: icons.strength
  },
  {
    title: "Seu principal risco",
    description: "O comportamento inconsciente que pode estar limitando seu crescimento.",
    icon: icons.risk
  },
  {
    title: "O que precisa desenvolver",
    description: "O ponto focal exato para destravar novos níveis de maturidade executiva.",
    icon: icons.development
  },
  {
    title: "Próximo passo recomendado",
    description: "Uma ação prática e imediata para começar a aplicar no seu dia a dia.",
    icon: icons.step
  }
];

function DiscoverSection() {
  return (
    <section className="section discover-section">
      <div className="container">
        <h2>O que você vai descobrir</h2>
        <div className="discover-grid">
          {items.map((item, idx) => (
            <div key={idx} className="discover-card">
              <div className="discover-icon-wrapper">
                {item.icon}
              </div>
              <div className="discover-content">
                <h3 className="discover-card-title">{item.title}</h3>
                <p className="discover-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiscoverSection;
