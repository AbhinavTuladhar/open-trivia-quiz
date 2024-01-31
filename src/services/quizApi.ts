import type { RequestResponse } from "@/types"

export const QuizAPI = {
  getQuestions: async (url: string) => {
    const response = await fetch(url)
    const data: RequestResponse = await response.json()
    return data
  }
}