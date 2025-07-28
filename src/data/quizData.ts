
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tip: string;
}

export const quizQuestions: Question[] = [
  // Saúde Menstrual
  {
    id: 1,
    question: "Qual é a duração média de um ciclo menstrual normal?",
    options: ["21 a 35 dias", "28 dias exatos", "30 a 40 dias", "15 a 25 dias"],
    correctAnswer: 0,
    explanation: "Um ciclo menstrual normal varia entre 21 a 35 dias, sendo 28 dias apenas uma média.",
    category: "Saúde Menstrual",
    difficulty: "easy",
    tip: "Manter um diário menstrual ajuda a conhecer seu próprio padrão!"
  },
  {
    id: 2,
    question: "Qual método de higiene íntima é mais recomendado durante a menstruação?",
    options: ["Ducha vaginal diária", "Sabonete neutro apenas na região externa", "Absorvente trocado apenas 2x ao dia", "Água quente com bicarbonato"],
    correctAnswer: 1,
    explanation: "A higiene deve ser feita apenas na região externa com sabonete neutro, evitando duchas vaginais.",
    category: "Saúde Menstrual",
    difficulty: "medium",
    tip: "A vagina tem sua própria capacidade de autolimpeza!"
  },

  // Gravidez e Pré-natal
  {
    id: 3,
    question: "Quando deve começar o acompanhamento pré-natal?",
    options: ["Após o 3º mês", "Logo após descobrir a gravidez", "Apenas no 2º trimestre", "Só quando sentir o bebê mexer"],
    correctAnswer: 1,
    explanation: "O pré-natal deve começar assim que a gravidez for confirmada para garantir a saúde da mãe e do bebê.",
    category: "Gravidez",
    difficulty: "easy",
    tip: "O ácido fólico deve ser tomado antes mesmo de engravidar!"
  },
  {
    id: 4,
    question: "Qual exame detecta malformações no feto durante a gravidez?",
    options: ["Papanicolau", "Ultrassom morfológico", "Hemograma", "Exame de urina"],
    correctAnswer: 1,
    explanation: "O ultrassom morfológico, realizado entre 18-24 semanas, detecta malformações fetais.",
    category: "Gravidez",
    difficulty: "medium",
    tip: "Cada exame do pré-natal tem sua importância específica!"
  },

  // Métodos Contraceptivos
  {
    id: 5,
    question: "Qual método contraceptivo também protege contra ISTs?",
    options: ["Pílula anticoncepcional", "DIU", "Preservativo", "Tabelinha"],
    correctAnswer: 2,
    explanation: "Apenas os preservativos (masculino e feminino) protegem contra infecções sexualmente transmissíveis.",
    category: "Contracepção",
    difficulty: "easy",
    tip: "Dupla proteção: contraceptivo + preservativo = mais segurança!"
  },
  {
    id: 6,
    question: "O que fazer se esquecer de tomar a pílula anticoncepcional?",
    options: ["Tomar duas no dia seguinte", "Parar de tomar por uma semana", "Tomar assim que lembrar", "Esperar o próximo ciclo"],
    correctAnswer: 2,
    explanation: "Deve-se tomar assim que lembrar e manter o horário habitual. Se passou mais de 12h, usar proteção adicional.",
    category: "Contracepção",
    difficulty: "medium",
    tip: "Alarmes no celular ajudam a lembrar do horário!"
  },

  // Câncer de Mama e Colo do Útero
  {
    id: 7,
    question: "A partir de que idade deve-se fazer o autoexame das mamas?",
    options: ["Após os 40 anos", "Após a primeira menstruação", "Aos 20 anos", "Só após ter filhos"],
    correctAnswer: 2,
    explanation: "O autoexame deve começar aos 20 anos, sendo feito mensalmente após a menstruação.",
    category: "Prevenção Câncer",
    difficulty: "easy",
    tip: "Conhecer suas mamas é fundamental para detectar mudanças!"
  },
  {
    id: 8,
    question: "Com que frequência deve ser feito o exame Papanicolau?",
    options: ["Anualmente após os 25 anos", "A cada 3 anos após 2 exames normais", "Apenas quando há sintomas", "Mensalmente"],
    correctAnswer: 1,
    explanation: "Após dois exames normais consecutivos, pode ser feito a cada 3 anos até os 64 anos.",
    category: "Prevenção Câncer",
    difficulty: "medium",
    tip: "A prevenção é o melhor remédio!"
  },

  // Saúde Mental
  {
    id: 9,
    question: "O que é a depressão pós-parto?",
    options: ["Tristeza normal após o parto", "Condição que requer tratamento médico", "Frescura de mãe", "Problema que passa sozinho"],
    correctAnswer: 1,
    explanation: "É uma condição médica séria que afeta até 20% das mães e requer acompanhamento profissional.",
    category: "Saúde Mental",
    difficulty: "medium",
    tip: "Buscar ajuda é sinal de força, não de fraqueza!"
  },
  {
    id: 10,
    question: "Qual hormônio pode afetar o humor durante o ciclo menstrual?",
    options: ["Insulina", "Progesterona", "Adrenalina", "Tireoide"],
    correctAnswer: 1,
    explanation: "A progesterona, junto com o estrogênio, pode causar alterações de humor durante o ciclo.",
    category: "Saúde Mental",
    difficulty: "hard",
    tip: "Conhecer seu ciclo ajuda a entender as mudanças emocionais!"
  },

  // Direitos Reprodutivos
  {
    id: 11,
    question: "Toda mulher tem direito a:",
    options: ["Escolher quando e se quer ter filhos", "Ser julgada por suas escolhas", "Só ter filhos se for casada", "Depender da autorização do marido"],
    correctAnswer: 0,
    explanation: "É um direito fundamental da mulher decidir sobre sua vida reprodutiva de forma livre e informada.",
    category: "Direitos Reprodutivos",
    difficulty: "easy",
    tip: "Seus direitos reprodutivos são garantidos por lei!"
  },
  {
    id: 12,
    question: "Durante o trabalho de parto, a gestante tem direito a:",
    options: ["Ficar sozinha", "Ter um acompanhante de sua escolha", "Só receber visitas médicas", "Não questionar procedimentos"],
    correctAnswer: 1,
    explanation: "A Lei do Acompanhante garante o direito a um acompanhante durante o trabalho de parto.",
    category: "Direitos Reprodutivos",
    difficulty: "medium",
    tip: "Conheça seus direitos durante a gravidez e parto!"
  },

  // Alimentação e Autocuidado
  {
    id: 13,
    question: "Qual nutriente é essencial para prevenir a anemia em mulheres?",
    options: ["Vitamina C", "Ferro", "Cálcio", "Vitamina D"],
    correctAnswer: 1,
    explanation: "O ferro é essencial pois as mulheres perdem sangue mensalmente durante a menstruação.",
    category: "Alimentação",
    difficulty: "easy",
    tip: "Combine ferro com vitamina C para melhor absorção!"
  },
  {
    id: 14,
    question: "Por que o ácido fólico é importante para mulheres em idade reprodutiva?",
    options: ["Melhora o humor", "Previne malformações no tubo neural do bebê", "Aumenta a fertilidade", "Reduz cólicas menstruais"],
    correctAnswer: 1,
    explanation: "O ácido fólico previne defeitos no tubo neural do feto, por isso deve ser tomado antes da gravidez.",
    category: "Alimentação",
    difficulty: "medium",
    tip: "Folhas verdes escuras são ricas em ácido fólico!"
  },
  {
    id: 15,
    question: "Qual é a importância do cálcio na dieta feminina?",
    options: ["Só é importante na infância", "Previne osteoporose na menopausa", "Não tem função específica", "Só grávidas precisam"],
    correctAnswer: 1,
    explanation: "O cálcio é crucial para a saúde óssea, especialmente importante para prevenir osteoporose após a menopausa.",
    category: "Alimentação",
    difficulty: "hard",
    tip: "A vitamina D ajuda na absorção do cálcio!"
  }
];

export const categories = [
  "Saúde Menstrual",
  "Gravidez", 
  "Contracepção",
  "Prevenção Câncer",
  "Saúde Mental",
  "Direitos Reprodutivos",
  "Alimentação"
];

export const tips = [
  "Mantenha consultas regulares com seu ginecologista!",
  "O autoexame das mamas deve ser feito mensalmente.",
  "Pratique exercícios regulares para manter a saúde em dia.",
  "Uma alimentação equilibrada fortalece seu sistema imunológico.",
  "Cuide da sua saúde mental com a mesma atenção que cuida do corpo.",
  "Conheça seus direitos como mulher e como paciente.",
  "A prevenção é sempre o melhor caminho para a saúde!"
];
