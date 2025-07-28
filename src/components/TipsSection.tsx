
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Lightbulb, 
  Heart, 
  Shield, 
  Apple,
  Brain,
  Baby,
  Stethoscope,
  RefreshCw
} from 'lucide-react';

interface TipsSectionProps {
  onBack: () => void;
}

const TipsSection: React.FC<TipsSectionProps> = ({ onBack }) => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const healthTips = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      category: "Saúde Menstrual",
      title: "Cuidados durante a menstruação",
      content: "Troque absorventes a cada 4 horas, mesmo com pouco fluxo. Use sabonete neutro apenas na região externa. Evite duchas vaginais - elas podem alterar a flora vaginal natural.",
      color: "bg-red-50 border-red-200"
    },
    {
      icon: <Baby className="h-8 w-8 text-blue-500" />,
      category: "Gravidez",
      title: "Ácido fólico: essencial antes de engravidar",
      content: "Comece a tomar ácido fólico 3 meses antes de tentar engravidar. Ele previne defeitos no tubo neural do bebê. A dose recomendada é 400mcg por dia.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      category: "Prevenção",
      title: "Autoexame das mamas",
      content: "Faça mensalmente, entre o 3º e 5º dia após a menstruação. Observe mudanças na forma, tamanho, textura ou presença de nódulos. Em caso de alterações, procure um médico.",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Apple className="h-8 w-8 text-orange-500" />,
      category: "Alimentação",
      title: "Ferro para prevenir anemia",
      content: "Mulheres precisam de mais ferro devido à menstruação. Consuma carnes vermelhas, feijão, espinafre e combine com vitamina C (laranja, acerola) para melhor absorção.",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      category: "Saúde Mental",
      title: "TPM não é frescura",
      content: "A Tensão Pré-Menstrual afeta até 80% das mulheres. Sintomas como irritabilidade e ansiedade são reais. Exercícios, alimentação equilibrada e às vezes tratamento médico ajudam.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-pink-500" />,
      category: "Exames",
      title: "Papanicolau: prevenção do câncer",
      content: "Deve ser feito anualmente a partir dos 25 anos ou início da vida sexual. Após 2 exames normais, pode ser feito a cada 3 anos. Detecta alterações antes do câncer se desenvolver.",
      color: "bg-pink-50 border-pink-200"
    }
  ];

  const curiosities = [
    "💡 A vagina tem pH ácido (entre 3,8 e 4,5) para proteger contra infecções.",
    "💡 O útero tem o tamanho aproximado de um punho fechado.",
    "💡 O corpo feminino produz cerca de 30ml de secreção vaginal por dia - isso é normal!",
    "💡 O clitóris tem mais de 8.000 terminações nervosas.",
    "💡 Os ovários produzem cerca de 400 óvulos durante toda a vida reprodutiva.",
    "💡 O cálcio é melhor absorvido quando combinado com magnésio e vitamina D.",
    "💡 A amamentação pode ser um método contraceptivo natural nos primeiros 6 meses pós-parto."
  ];

  const nextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % healthTips.length);
  };

  const currentTip = healthTips[currentTipIndex];

  return (
    <div className="min-h-screen gradient-bg p-4">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 text-pink-700 hover:text-pink-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Menu
        </Button>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="h-12 w-12 text-yellow-500 mr-3" />
            <h1 className="text-3xl font-bold text-pink-700">Dicas & Curiosidades</h1>
          </div>
          <p className="text-lg text-pink-600">
            Informações importantes para cuidar melhor da sua saúde
          </p>
        </div>

        {/* Main Tip Card */}
        <Card className={`quiz-card mb-8 ${currentTip.color}`}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge className="bg-white text-gray-700">
                {currentTip.category}
              </Badge>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {currentTipIndex + 1} de {healthTips.length}
                </span>
                <Button
                  onClick={nextTip}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardTitle className="flex items-center space-x-3 text-xl">
              {currentTip.icon}
              <span className="text-gray-800">{currentTip.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed text-base">
              {currentTip.content}
            </p>
          </CardContent>
        </Card>

        {/* Curiosities Grid */}
        <Card className="quiz-card mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-pink-700 text-center">
              Curiosidades sobre o Corpo Feminino
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {curiosities.map((curiosity, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 hover:bg-yellow-100 transition-colors"
                >
                  <p className="text-sm text-yellow-800 font-medium">
                    {curiosity}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="quiz-card bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardContent className="p-6">
            <div className="text-center">
              <Heart className="h-8 w-8 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-pink-700 mb-2">
                Lembre-se sempre
              </h3>
              <p className="text-pink-600 mb-4">
                Este app é educativo e não substitui consultas médicas. 
                Sempre procure um profissional de saúde para orientações personalizadas.
              </p>
              <Badge className="bg-pink-200 text-pink-800 hover:bg-pink-200">
                💖 Seu bem-estar é prioridade 💖
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TipsSection;
