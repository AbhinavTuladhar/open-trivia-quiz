export interface QuestionData {
  type: string,
  difficulty: string,
  category: string,
  question: string,
  correct_answer: string,
  incorrect_answers: Array<string>
}

export interface RequestResponse {
  response_code: number,
  results: Array<QuestionData>
}