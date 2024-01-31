import BASE_URL from "@/services/base"

const makeUrl = (category: string, difficulty: string, questionType: string) => {
  const categoryParams = category !== 'any' ? `&category=${category}` : ''
  const difficultyParams = difficulty !== 'any' ? `&difficulty=${difficulty}` : ''
  const typeParams = questionType !== 'any' ? `&type=${questionType}` : ''

  return `${BASE_URL}${categoryParams}${difficultyParams}${typeParams}`
}

export default makeUrl