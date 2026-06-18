const assetBase = import.meta.env.BASE_URL;

function Hero({ onStart }) {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          O que falta desenvolver na sua 
          <span> liderança?</span>
        </h1>

        <p className="hero-subtitle">
          Descubra qual habilidade de liderança você mais precisa desenvolver agora para liderar com mais consciência, clareza e protagonismo.
        </p>

        <p className="hero-description">
          Diagnóstico gratuito • 7 perguntas • Menos de 3 minutos
        </p>

        <button id="btn-iniciar-diagnostico" className="btn-primary" onClick={onStart}>
          INICIAR DIAGNÓSTICO
        </button>
      </div>

      <div className="hero-image">
        <picture>
          <source media="(max-width: 768px)" srcSet={`${assetBase}hero-mobile.png`} />
          <img src={`${assetBase}hero-desktop.png`} alt="Gracielli Camini" />
        </picture>
      </div>
    </section>
  );
}

export default Hero;
