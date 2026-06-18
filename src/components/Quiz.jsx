import { useState } from 'react';

// Placeholder questions mapping to: A: Diretiva, B: Acolhedora, C: Evitativa, D: Centralizadora
const quizData = [
  {
    id: 1,
    question: "Como você costuma lidar com um colaborador que não está entregando os resultados esperados?",
    options: [
      { text: "Chamo para uma conversa direta, aponto as falhas e defino metas claras com prazos.", value: 'A' },
      { text: "Tento entender o contexto pessoal dele, ofereço apoio e pergunto como posso ajudar.", value: 'B' },
      { text: "Espero mais um tempo para ver se melhora naturalmente antes de intervir.", value: 'C' },
      { text: "Assumo parte das tarefas dele para garantir que a entrega seja feita no prazo.", value: 'D' }
    ]
  },
  {
    id: 2,
    question: "Quando surge um problema inesperado e urgente na equipe, qual é sua reação inicial?",
    options: [
      { text: "Tomo a frente imediatamente e digo exatamente o que cada um deve fazer.", value: 'A' },
      { text: "Reúno a equipe para garantir que todos estejam calmos e seguros antes de agir.", value: 'B' },
      { text: "Delego a resolução para que eles se virem, afinal são profissionais.", value: 'C' },
      { text: "Resolvo o problema sozinho para garantir que seja feito da maneira certa.", value: 'D' }
    ]
  },
  {
    id: 3,
    question: "Como você encara o processo de delegação de tarefas importantes?",
    options: [
      { text: "Delego definindo regras estritas de como a tarefa deve ser executada.", value: 'A' },
      { text: "Delego e me coloco à disposição o tempo todo para tirar dúvidas e ajudar.", value: 'B' },
      { text: "Delego e evito acompanhar de perto para não parecer controlador.", value: 'C' },
      { text: "Tenho muita dificuldade em delegar, prefiro fazer eu mesmo as partes críticas.", value: 'D' }
    ]
  },
  {
    id: 4,
    question: "Como você se sente ao ter que dar um feedback corretivo difícil?",
    options: [
      { text: "Tranquilo. Sou direto ao ponto, mesmo que a pessoa não goste de ouvir.", value: 'A' },
      { text: "Preocupado. Tento suavizar muito a mensagem para não magoar a pessoa.", value: 'B' },
      { text: "Desconfortável. Costumo adiar essa conversa o máximo possível.", value: 'C' },
      { text: "Geralmente não dou feedback, apenas refaço o trabalho da pessoa quando ela erra.", value: 'D' }
    ]
  },
  {
    id: 5,
    question: "Qual é o principal foco das suas reuniões de equipe?",
    options: [
      { text: "Cobrança de metas, indicadores e próximos passos definidos.", value: 'A' },
      { text: "Clima, integração do time e como todos estão se sentindo.", value: 'B' },
      { text: "Avisos gerais de forma rápida, sem aprofundar muito em discussões.", value: 'C' },
      { text: "Repasse detalhado do que eu planejei e do que preciso que executem.", value: 'D' }
    ]
  },
  {
    id: 6,
    question: "Como você reage quando um membro da equipe comete um erro grave?",
    options: [
      { text: "Cobro responsabilidade imediata e deixo claras as consequências.", value: 'A' },
      { text: "Foco em acolher a pessoa, pois sei que ela já deve estar se sentindo mal.", value: 'B' },
      { text: "Tento minimizar o erro para evitar um conflito no ambiente de trabalho.", value: 'C' },
      { text: "Corrijo o erro pessoalmente e passo a supervisionar a pessoa muito de perto.", value: 'D' }
    ]
  },
  {
    id: 7,
    question: "Qual frase melhor descreve seu maior desafio atual como líder?",
    options: [
      { text: "Ser menos impositivo e escutar mais as ideias da equipe.", value: 'A' },
      { text: "Conseguir dizer 'não' e colocar limites claros sem me sentir culpado.", value: 'B' },
      { text: "Encarar conversas difíceis e assumir uma postura mais presente.", value: 'C' },
      { text: "Desapegar do microgerenciamento e confiar que a equipe dará conta.", value: 'D' }
    ]
  }
];

function Quiz({ onComplete, onExit }) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [scores, setScores] = useState({ A: 0, B: 0, C: 0, D: 0 });
  const [answers, setAnswers] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOptionSelect = (value) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newScores = { ...scores, [value]: scores[value] + 1 };
    const newAnswers = [...answers, value];
    setScores(newScores);
    setAnswers(newAnswers);
    setTimeout(() => {
      if (currentQuestionIdx < quizData.length - 1) {
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setIsTransitioning(false);
      } else {
        onComplete({ scores: newScores, answers: newAnswers });
      }
    }, 600);
  };

  const handleBack = () => {
    if (currentQuestionIdx === 0) return;
    const prevAnswer = answers[answers.length - 1];
    setScores({ ...scores, [prevAnswer]: scores[prevAnswer] - 1 });
    setAnswers(answers.slice(0, -1));
    setCurrentQuestionIdx(currentQuestionIdx - 1);
  };

  const currentQ = quizData[currentQuestionIdx];
  const progressPercent = ((currentQuestionIdx) / quizData.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-nav">
          <button
            className="quiz-nav-btn"
            onClick={handleBack}
            disabled={currentQuestionIdx === 0}
          >
            ← Voltar
          </button>
          <button className="quiz-nav-btn quiz-nav-exit" onClick={onExit}>
            Sair
          </button>
        </div>

        <div className="quiz-header">
          <div className="quiz-progress-bar">
            <div
              className="quiz-progress-fill"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="quiz-indicator">
            Pergunta {currentQuestionIdx + 1} de {quizData.length}
          </div>
        </div>

        <div className={`quiz-body ${isTransitioning ? 'fade-out' : 'fade-in'}`} style={{ transition: 'opacity 0.3s', opacity: isTransitioning ? 0 : 1 }}>
          <h2 className="quiz-question">{currentQ.question}</h2>
          <div className="quiz-options">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                id={`quiz-option-${currentQuestionIdx}-${idx}`}
                className="quiz-option"
                onClick={() => handleOptionSelect(opt.value)}
              >
                <div className="option-letter">
                  {['A', 'B', 'C', 'D'][idx]}
                </div>
                <span>{opt.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
