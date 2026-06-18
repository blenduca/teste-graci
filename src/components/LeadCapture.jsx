import { useState } from 'react';

function LeadCapture({ onComplete }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    cargo: '',
    lidera: '',
    empresa: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-mail inválido';
    if (!formData.whatsapp) newErrors.whatsapp = 'WhatsApp é obrigatório';
    if (!formData.cargo) newErrors.cargo = 'Cargo é obrigatório';
    if (!formData.lidera) newErrors.lidera = 'Por favor, informe se lidera pessoas';
    if (!formData.empresa) newErrors.empresa = 'Empresa é obrigatória';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aqui integraria com Webhook/CRM no futuro
      onComplete(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Limpa erro ao digitar
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card" style={{ maxWidth: '600px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '16px', fontFamily: 'var(--font-heading)', color: 'var(--color-dark)' }}>Seu resultado já está pronto.</h2>
          <p style={{ color: 'var(--color-primary)' }}>Preencha seus dados para receber sua análise completa e orientação prática de desenvolvimento.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="lead-nome">Nome</label>
            <input 
              id="lead-nome"
              type="text" 
              name="nome"
              className="form-input" 
              value={formData.nome} 
              onChange={handleChange} 
              placeholder="Seu nome completo"
            />
            {errors.nome && <span className="error-text">{errors.nome}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="lead-email">E-mail</label>
            <input 
              id="lead-email"
              type="email" 
              name="email"
              className="form-input" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="seu@email.com"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="lead-whatsapp">WhatsApp</label>
            <input 
              id="lead-whatsapp"
              type="tel" 
              name="whatsapp"
              className="form-input" 
              value={formData.whatsapp} 
              onChange={handleChange} 
              placeholder="(00) 00000-0000"
            />
            {errors.whatsapp && <span className="error-text">{errors.whatsapp}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="lead-cargo">Cargo</label>
            <input 
              id="lead-cargo"
              type="text" 
              name="cargo"
              className="form-input" 
              value={formData.cargo} 
              onChange={handleChange} 
              placeholder="Ex: CEO, Diretor, Gerente"
            />
            {errors.cargo && <span className="error-text">{errors.cargo}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="lead-lidera">Você lidera pessoas hoje? Se sim, quantas?</label>
            <input 
              id="lead-lidera"
              type="text" 
              name="lidera"
              className="form-input" 
              value={formData.lidera} 
              onChange={handleChange} 
              placeholder="Ex: Sim, 5 pessoas"
            />
            {errors.lidera && <span className="error-text">{errors.lidera}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="lead-empresa">Empresa</label>
            <input 
              id="lead-empresa"
              type="text" 
              name="empresa"
              className="form-input" 
              value={formData.empresa} 
              onChange={handleChange} 
              placeholder="Nome da sua empresa"
            />
            {errors.empresa && <span className="error-text">{errors.empresa}</span>}
          </div>

          <button id="btn-ver-resultado" type="submit" className="btn-primary" style={{ width: '100%', marginTop: '16px' }}>
            VER MEU RESULTADO
          </button>
        </form>
      </div>
    </div>
  );
}

export default LeadCapture;
