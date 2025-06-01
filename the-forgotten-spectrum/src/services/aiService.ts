// src/services/aiService.ts
export async function fetchAIResponse(prompt: string): Promise<string> {
  const res = await fetch("http://localhost:5000/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  })
  const data = await res.json()
  return data.response
}
