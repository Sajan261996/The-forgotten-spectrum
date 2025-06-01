// src/services/tts.ts
export function speak(text: string) {
  const synth = window.speechSynthesis
  if (!synth) return
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = "en-US"
  synth.speak(utter)
}
