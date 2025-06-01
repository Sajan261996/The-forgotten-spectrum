// src/components/VoiceAssistant.tsx
import { useState, useEffect, useRef } from "react"

const SpeechRecognition = 
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

export default function VoiceAssistant() {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const recognition = useRef<any>(null)

  useEffect(() => {
    if (!SpeechRecognition) {
      alert("Speech Recognition API not supported in this browser.")
      return
    }
    recognition.current = new SpeechRecognition()
    recognition.current.continuous = false
    recognition.current.interimResults = false
    recognition.current.lang = "en-US"

    recognition.current.onresult = (event: SpeechRecognitionEvent) => {
      const speechToText = event.results[0][0].transcript
      setTranscript(speechToText)
      setListening(false)
      // TODO: Send speechToText to AI for response here
    }

    recognition.current.onerror = (event: any) => {
      console.error("Speech recognition error", event.error)
      setListening(false)
    }
  }, [])

  const startListening = () => {
    if (recognition.current) {
      setTranscript("")
      setListening(true)
      recognition.current.start()
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: 50,
        left: 20,
        padding: 10,
        background: "rgba(0,0,0,0.6)",
        color: "white",
        borderRadius: 8,
        maxWidth: 300,
      }}
    >
      <button onClick={startListening} disabled={listening}>
        {listening ? "Listening..." : "Talk to AI"}
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  )
}
