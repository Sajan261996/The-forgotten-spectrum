// src/services/tts.test.ts
import { describe, it, vi, beforeEach, expect } from 'vitest'
import { speak } from './tts'

describe('Text-to-Speech', () => {
  beforeEach(() => {
    globalThis.speechSynthesis = {
      speak: vi.fn(),
    } as unknown as SpeechSynthesis
  })

  it('should call speechSynthesis.speak', () => {
    speak('hello')
    expect(globalThis.speechSynthesis.speak).toHaveBeenCalled()
  })
})
