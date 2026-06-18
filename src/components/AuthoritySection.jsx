function AuthoritySection({ onStart }) {
  return (
    <section className="section authority-section">
      <div className="container">
        <h2>Liderar não é apenas cobrar resultados.</h2>
        <p>
          Os maiores desafios da liderança normalmente não estão no conhecimento técnico.
        </p>
        <p>
          Eles aparecem na forma como você conduz conversas difíceis, desenvolve autonomia, cria responsabilidade e influencia pessoas.
        </p>
        <p className="accent-text" style={{ marginBottom: 'var(--space-8)' }}>
          Este diagnóstico foi criado para ajudar você a identificar seu principal ponto de desenvolvimento como líder.
        </p>
        
        <button 
          id="btn-authority-cta" 
          className="btn-primary" 
          onClick={onStart}
        >
          INICIAR DIAGNÓSTICO GRATUITO
        </button>
      </div>
    </section>
  );
}

export default AuthoritySection;
