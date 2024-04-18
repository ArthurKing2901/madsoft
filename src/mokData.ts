export type QuestionType = 'CHECKBOX' | 'RADIO' | 'TEXT'
export type Question = {
  id: number
  type: QuestionType
  question: string
  answers: string[]
}

export const questions: Question[] = [
  {
    type: 'CHECKBOX',
    id: 1,
    question: 'Вопрос 1',
    answers: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
  },
  {
    type: 'RADIO',
    id: 2,
    question: 'Вопрос 2',
    answers: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
  },
  {
    type: 'TEXT',
    id: 3,
    question: 'Вопрос 3',
    answers: ['Введите ответ'],
  },
]

export const isTimer = true
