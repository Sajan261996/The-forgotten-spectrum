import { describe, it, vi, expect } from "vitest"
import { fetchAIResponse } from "./aiService"

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ response: "AI says hello!" })
  })
) as any

describe("AI Service", () => {
  it("fetches AI response", async () => {
    const result = await fetchAIResponse("Say hello")
    expect(result).toBe("AI says hello!")
  })
})
