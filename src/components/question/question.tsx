'use client';

import classNames from 'classnames';
import { Answer, SelectedAnswer } from '@/types';
import './styles.scss';

type Props = {
  question: string;
  answers: Answer[];
  selectedAnswer: SelectedAnswer;
  onSelectedAnswer: (index: SelectedAnswer) => void;
}

export function Question({ question, answers, selectedAnswer, onSelectedAnswer }: Props) {
  const handleSelectAnswer = (index: SelectedAnswer) => {
    if (selectedAnswer === index) {
      onSelectedAnswer(null);
    } else {
      onSelectedAnswer(index);
    }
  }

  return (
    <>
      <p className='question'>{question}</p>

      <div className='answers'>
        {answers.map((answer, i) => (
          <div
            className={classNames('answer', {
              'isSelected': answer.text === selectedAnswer?.text
            })}
            onClick={() => handleSelectAnswer(answer)}
            key={i}
          >{answer.text}</div>
        ))}
      </div>
    </>
  )
}
