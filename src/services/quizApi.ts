import type { RequestResponse } from "@/types"

export const QuizAPI = {
  getQuestions: async (url: string) => {
    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`)
      }

      const data: RequestResponse = await response.json()
      return data
    } catch (error) {
      console.error('Got the following error when fetching questions: ', error)
      throw error
    }
  }
}