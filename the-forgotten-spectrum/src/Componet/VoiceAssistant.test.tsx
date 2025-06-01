// src/components/VoiceAssistant.test.tsx
import { render, screen } from "@testing-library/react"
import VoiceAssistant from "./VoiceAssistant"

describe("VoiceAssistant", () => {
  it("renders Talk to AI button", () => {
    render(<VoiceAssistant />)
    expect(screen.getByText("Talk to AI")).toBeInTheDocument()
  })
})
