'use client';

import { useState } from 'react';
import questions from '../../api/questions.json';
import { SelectedAnswer, Answer } from '@/types';
import { Question, Result } from '@/components';
import './styles.scss';

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<SelectedAnswer>(null);
  const [result, setResult] = useState<boolean[]>([]);

  const handleNextPageClick = (selectedAnswer: Answer) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevValue => prevValue + 1);
    }

    setResult(prevState => [...prevState, selectedAnswer.isCorrect]);
    setSelectedAnswer(null);
  };

  const handleTryAgainClick = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setResult([]);
  }

  return (
    <div className='container'>
      <p className='qustionCounter'>{`Question ${currentQuestion + 1} of 3`}</p>

      <hr />

      <Question
        question={questions[currentQuestion].question}
        answers={questions[currentQuestion].answers}
        selectedAnswer={selectedAnswer}
        onSelectedAnswer={setSelectedAnswer}
      />

      {result.length < questions.length && (
        <button
          className='button'
          disabled={!selectedAnswer}
          onClick={() => handleNextPageClick(selectedAnswer as Answer)}
        >
          {currentQuestion < questions.length - 1 && 'Next'}
          {currentQuestion === questions.length - 1 && 'Finish'}
        </button>
      )}

      {result.length === questions.length && (
        <button className="button" onClick={handleTryAgainClick}>Try again</button>
      )}

      <Result result={result} />
    </div>
  );
}
