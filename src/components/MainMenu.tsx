
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Zap, 
  Trophy, 
  BookOpen, 
  Lightbulb, 
  Star,
  Clock,
  Target,
  Users
} from 'lucide-react';

interface MainMenuProps {
  onStartQuiz: (mode: 'quick' | 'challenge', difficulty?: 'easy' | 'medium' | 'hard') => void;
  onShowTips: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onStartQuiz, onShowTips }) => {
  return (
    <div className="min-h-screen gradient-bg p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-12 w-12 text-pink-500 mr-3" />
            <h1 className="text-4xl font-bold text-pink-700">Saúde Mulher+</h1>
          </div>
          <p className="text-lg text-pink-600 max-w-2xl mx-auto">
            Aprenda sobre saúde da mulher de forma interativa e divertida! 
            Fortaleça seus conhecimentos e cuide melhor de você.
          </p>
        </div>

        {/* Game Modes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Quick Quiz */}
          <Card className="quiz-card hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="h-10 w-10 text-yellow-500" />
              </div>
              <CardTitle className="text-2xl text-pink-700">Quiz Rápido</CardTitle>
              <p className="text-sm text-pink-600">10 perguntas aleatórias</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>~5 minutos</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-center">
                  <Target className="h-4 w-4 text-pink-500 mr-2" />
                  Perguntas de todos os temas
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-pink-500 mr-2" />
                  Ideal para revisão rápida
                </li>
              </ul>
              <Button 
                onClick={() => onStartQuiz('quick')}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                size="lg"
              >
                Começar Agora
              </Button>
            </CardContent>
          </Card>

          {/* Challenge Mode */}
          <Card className="quiz-card hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Trophy className="h-10 w-10 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl text-pink-700">Modo Desafio</CardTitle>
              <p className="text-sm text-pink-600">15 perguntas por nível</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>~10 minutos</span>
              </div>
              <div className="space-y-2">
                <Button 
                  onClick={() => onStartQuiz('challenge', 'easy')}
                  variant="outline"
                  className="w-full border-green-300 text-green-700 hover:bg-green-50"
                >
                  <Star className="h-4 w-4 mr-2" />
                  Fácil
                </Button>
                <Button 
                  onClick={() => onStartQuiz('challenge', 'medium')}
                  variant="outline"
                  className="w-full border-yellow-300 text-yellow-700 hover:bg-yellow-50"
                >
                  <Star className="h-4 w-4 mr-2" />
                  <Star className="h-4 w-4 mr-2" />
                  Médio
                </Button>
                <Button 
                  onClick={() => onStartQuiz('challenge', 'hard')}
                  variant="outline"
                  className="w-full border-red-300 text-red-700 hover:bg-red-50"
                >
                  <Star className="h-4 w-4 mr-2" />
                  <Star className="h-4 w-4 mr-2" />
                  <Star className="h-4 w-4 mr-2" />
                  Difícil
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Topics Covered */}
        <Card className="quiz-card mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-pink-700 flex items-center justify-center">
              <BookOpen className="h-6 w-6 mr-2" />
              Temas Abordados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Saúde Menstrual',
                'Gravidez & Pré-natal',
                'Contracepção',
                'Prevenção Câncer',
                'Saúde Mental',
                'Direitos Reprodutivos',
                'Alimentação',
                'Autocuidado'
              ].map((topic, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="justify-center py-2 bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="quiz-card hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={onShowTips}>
            <CardContent className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-pink-700 mb-2">Dicas & Curiosidades</h3>
              <p className="text-sm text-gray-600">
                Descubra informações importantes sobre saúde da mulher
              </p>
            </CardContent>
          </Card>

          <Card className="quiz-card">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-pink-700 mb-2">Público-Alvo</h3>
              <p className="text-sm text-gray-600">
                Adolescentes, jovens adultas e profissionais da saúde
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-pink-600">
          <p>💖 Cuidar de si é um ato de amor próprio 💖</p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
