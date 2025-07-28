
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Heart, Trophy, BookOpen, Lightbulb, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { quizQuestions, Question, tips } from '@/data/quizData';

interface QuizGameProps {
  mode: 'quick' | 'challenge';
  difficulty?: 'easy' | 'medium' | 'hard';
  onExit: () => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ mode, difficulty, onExit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  useEffect(() => {
    let filteredQuestions = [...quizQuestions];
    
    if (mode === 'challenge' && difficulty) {
      filteredQuestions = quizQuestions.filter(q => q.difficulty === difficulty);
    }
    
    // Shuffle and select questions
    const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
    const selected = mode === 'quick' ? shuffled.slice(0, 10) : shuffled.slice(0, 15);
    
    setGameQuestions(selected);
    setUserAnswers(new Array(selected.length).fill(null));
  }, [mode, difficulty]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
    
    if (answerIndex === gameQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < gameQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsGameComplete(true);
    }
  };

  const getScoreMessage = () => {
    const percentage = (score / gameQuestions.length) * 100;
    if (percentage >= 90) return "Excelente! Você é uma especialista em saúde da mulher! 🏆";
    if (percentage >= 70) return "Muito bom! Você tem um ótimo conhecimento! 🌟";
    if (percentage >= 50) return "Bem! Continue estudando para aprender mais! 📚";
    return "Continue aprendendo! Conhecimento é poder! 💪";
  };

  const getScoreColor = () => {
    const percentage = (score / gameQuestions.length) * 100;
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 70) return "text-blue-600";
    if (percentage >= 50) return "text-yellow-600";
    return "text-pink-600";
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setIsGameComplete(false);
    setUserAnswers(new Array(gameQuestions.length).fill(null));
  };

  if (gameQuestions.length === 0) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <Card className="quiz-card">
          <CardContent className="p-6">
            <div className="text-center">
              <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <p className="text-lg">Carregando quiz...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isGameComplete) {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    
    return (
      <div className="min-h-screen gradient-bg p-4">
        <div className="max-w-2xl mx-auto">
          <Button
            onClick={onExit}
            variant="ghost"
            className="mb-4 text-pink-700 hover:text-pink-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Menu
          </Button>

          <Card className="quiz-card">
            <CardHeader className="text-center">
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <CardTitle className="text-2xl text-pink-700">Quiz Concluído!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">
                  {score}/{gameQuestions.length}
                </div>
                <div className={`text-lg font-medium ${getScoreColor()}`}>
                  {Math.round((score / gameQuestions.length) * 100)}% de acertos
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {getScoreMessage()}
                </p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-pink-800 mb-1">Dica do Dia</h3>
                    <p className="text-sm text-pink-700">{randomTip}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 justify-center">
                <Button onClick={restartGame} className="bg-pink-600 hover:bg-pink-700">
                  <Trophy className="h-4 w-4 mr-2" />
                  Jogar Novamente
                </Button>
                <Button onClick={onExit} variant="outline" className="border-pink-300 text-pink-700">
                  Voltar ao Menu
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQ = gameQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / gameQuestions.length) * 100;

  return (
    <div className="min-h-screen gradient-bg p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={onExit}
            variant="ghost"
            className="text-pink-700 hover:text-pink-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Sair
          </Button>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-pink-100 text-pink-700">
              {currentQuestion + 1}/{gameQuestions.length}
            </Badge>
            <div className="flex items-center space-x-2 text-pink-700">
              <Heart className="h-5 w-5" />
              <span className="font-medium">{score}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <Progress value={progress} className="h-3">
            <div className="progress-gradient h-full rounded-full transition-all duration-300" style={{width: `${progress}%`}} />
          </Progress>
        </div>

        <Card className="quiz-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge className="bg-pink-200 text-pink-800 hover:bg-pink-200">
                {currentQ.category}
              </Badge>
              <Badge variant="outline" className={`
                ${currentQ.difficulty === 'easy' ? 'border-green-300 text-green-700' : ''}
                ${currentQ.difficulty === 'medium' ? 'border-yellow-300 text-yellow-700' : ''}
                ${currentQ.difficulty === 'hard' ? 'border-red-300 text-red-700' : ''}
              `}>
                {currentQ.difficulty === 'easy' ? 'Fácil' : 
                 currentQ.difficulty === 'medium' ? 'Médio' : 'Difícil'}
              </Badge>
            </div>
            <CardTitle className="text-xl text-pink-800 leading-relaxed">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQ.correctAnswer;
              const showResult = showExplanation;
              
              let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";
              
              if (showResult) {
                if (isCorrect) {
                  buttonClass += "bg-green-50 border-green-300 text-green-800 ";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "bg-red-50 border-red-300 text-red-800 ";
                } else {
                  buttonClass += "bg-gray-50 border-gray-200 text-gray-600 ";
                }
              } else if (isSelected) {
                buttonClass += "bg-pink-100 border-pink-300 text-pink-800 ";
              } else {
                buttonClass += "bg-white border-gray-200 hover:border-pink-300 hover:bg-pink-50 ";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{option}</span>
                    {showResult && (
                      <>
                        {isCorrect && <CheckCircle className="h-5 w-5 text-green-600" />}
                        {isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-600" />}
                      </>
                    )}
                  </div>
                </button>
              );
            })}
            
            {showExplanation && (
              <div className="mt-6 space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-blue-800 mb-1">Explicação</h3>
                      <p className="text-sm text-blue-700">{currentQ.explanation}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-purple-800 mb-1">Dica</h3>
                      <p className="text-sm text-purple-700">{currentQ.tip}</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={nextQuestion}
                  className="w-full bg-pink-600 hover:bg-pink-700"
                >
                  {currentQuestion < gameQuestions.length - 1 ? 'Próxima Pergunta' : 'Finalizar Quiz'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizGame;
