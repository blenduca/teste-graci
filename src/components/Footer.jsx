function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3 className="footer-logo">Graciélli Camini</h3>
            <div className="footer-badges">
              <span className="footer-badge">Psicóloga Organizacional</span>
              <span className="footer-badge">Mentora Executiva</span>
              <span className="footer-badge">Desenvolvimento de Líderes</span>
            </div>
          </div>

          <div className="footer-cta-card">
            <h4>Quer mapear a liderança da sua empresa?</h4>
            <p>
              Leve esta metodologia para diagnosticar o seu time de gestores e diretores. Identifique gargalos e desenvolva inteligência executiva em escala.
            </p>
            <button 
              id="btn-footer-cta" 
              className="btn-primary"
              onClick={() => window.open('http://wa.me/5549991094075?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20diagnóstico%20de%20liderança%20para%20empresas.', '_blank')}
            >
              FALAR COM NOSSA EQUIPE
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Graciélli Camini. Todos os direitos reservados.</p>
          <p>Líder na Prática • Mentoria & Desenvolvimento</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
