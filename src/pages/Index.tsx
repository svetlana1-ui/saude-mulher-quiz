
import React, { useState } from 'react';
import MainMenu from '@/components/MainMenu';
import QuizGame from '@/components/QuizGame';
import TipsSection from '@/components/TipsSection';

type GameMode = 'quick' | 'challenge';
type Difficulty = 'easy' | 'medium' | 'hard';
type Screen = 'menu' | 'quiz' | 'tips';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('menu');
  const [gameMode, setGameMode] = useState<GameMode>('quick');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');

  const startQuiz = (mode: GameMode, selectedDifficulty?: Difficulty) => {
    setGameMode(mode);
    if (selectedDifficulty) {
      setDifficulty(selectedDifficulty);
    }
    setCurrentScreen('quiz');
  };

  const showTips = () => {
    setCurrentScreen('tips');
  };

  const backToMenu = () => {
    setCurrentScreen('menu');
  };

  return (
    <div className="min-h-screen">
      {currentScreen === 'menu' && (
        <MainMenu 
          onStartQuiz={startQuiz}
          onShowTips={showTips}
        />
      )}
      
      {currentScreen === 'quiz' && (
        <QuizGame 
          mode={gameMode}
          difficulty={gameMode === 'challenge' ? difficulty : undefined}
          onExit={backToMenu}
        />
      )}
      
      {currentScreen === 'tips' && (
        <TipsSection onBack={backToMenu} />
      )}
    </div>
  );
};

export default Index;
