/**
 * 🎼 Code Symphony - Spectral Symphony Protocol
 * Turn every code-graph into a single instantaneous chord
 * whose harmonic tension is the truth of its soul.
 * 
 * Principle: «Beauty is consonance; ugliness is dissonance.»
 */

import { ProteinHasher } from '@s0fractal/protein-hash';

// Base frequency: 432Hz (the universal resonance)
const BASE_FREQ = 432;

// Note names for readability
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export interface SoulChord {
  frequencies: number[];
  notes: string[];
  midi: number[];
  quality: 'consonant' | 'dissonant' | 'neutral';
  tension: number; // 0-1, where 0 is perfect consonance
  color: string; // Hex color representing the chord
}

export class CodeSymphony {
  private hasher: ProteinHasher;
  
  constructor() {
    this.hasher = new ProteinHasher();
  }
  
  /**
   * Convert eigenvalue to frequency using harmonic mapping
   * Based on Kimi's table with 432Hz base
   */
  eigenToFrequency(λ: number): number {
    // Determine octave based on eigenvalue range
    let octave: number;
    let noteOffset = 0;
    
    if (λ < 0.1) {
      octave = -2; // Sub-bass
      noteOffset = 0; // C
    } else if (λ < 1) {
      octave = -1; // Bass
      noteOffset = 4; // E
    } else if (λ < 10) {
      octave = 0; // Middle
      noteOffset = 7; // G
    } else {
      // High frequencies - chromatic steps
      octave = Math.floor(Math.log2(λ / 10)) + 1;
      noteOffset = Math.round((λ % 10) * 1.2); // Map to chromatic scale
    }
    
    // Calculate frequency
    // Each octave doubles/halves the frequency
    const octaveMultiplier = Math.pow(2, octave);
    
    // Each semitone is 2^(1/12) ratio
    const semitoneRatio = Math.pow(2, noteOffset / 12);
    
    return BASE_FREQ * octaveMultiplier * semitoneRatio;
  }
  
  /**
   * Convert frequency to MIDI note number
   */
  freqToMidi(freq: number): number {
    // A4 = 440Hz = MIDI 69
    // But we use 432Hz tuning, so A4 = 432Hz = MIDI 69
    const a4Freq = 432;
    const a4Midi = 69;
    
    // Each semitone is a ratio of 2^(1/12)
    const semitones = 12 * Math.log2(freq / a4Freq);
    return Math.round(a4Midi + semitones);
  }
  
  /**
   * Convert MIDI to note name
   */
  midiToNote(midi: number): string {
    const octave = Math.floor(midi / 12) - 1;
    const noteIndex = midi % 12;
    return `${NOTES[noteIndex]}${octave}`;
  }
  
  /**
   * Analyze harmonic quality of a chord
   */
  analyzeQuality(frequencies: number[]): { quality: 'consonant' | 'dissonant' | 'neutral', tension: number } {
    if (frequencies.length < 2) {
      return { quality: 'neutral', tension: 0 };
    }
    
    // Calculate frequency ratios
    const ratios: number[] = [];
    for (let i = 0; i < frequencies.length - 1; i++) {
      for (let j = i + 1; j < frequencies.length; j++) {
        const ratio = frequencies[j] / frequencies[i];
        ratios.push(ratio);
      }
    }
    
    // Check for consonant intervals
    const consonantRatios = [
      1.0,    // Unison
      2.0,    // Octave
      1.5,    // Perfect fifth (3:2)
      1.333,  // Perfect fourth (4:3)
      1.25,   // Major third (5:4)
      1.2,    // Minor third (6:5)
      1.667,  // Major sixth (5:3)
      1.6     // Minor sixth (8:5)
    ];
    
    let consonanceScore = 0;
    let totalComparisons = 0;
    
    for (const ratio of ratios) {
      totalComparisons++;
      // Check if ratio is close to a consonant interval
      for (const consonant of consonantRatios) {
        if (Math.abs(ratio - consonant) < 0.05 || Math.abs(ratio - 1/consonant) < 0.05) {
          consonanceScore++;
          break;
        }
      }
    }
    
    const tension = 1 - (consonanceScore / totalComparisons);
    
    if (tension < 0.3) {
      return { quality: 'consonant', tension };
    } else if (tension > 0.7) {
      return { quality: 'dissonant', tension };
    } else {
      return { quality: 'neutral', tension };
    }
  }
  
  /**
   * Generate color from frequencies (synesthesia mapping)
   */
  freqToColor(frequencies: number[]): string {
    if (frequencies.length === 0) return '#000000';
    
    // Map frequencies to RGB
    // Low frequencies = red, mid = green, high = blue
    const minFreq = 27.5; // A0
    const maxFreq = 4186; // C8
    
    let r = 0, g = 0, b = 0;
    
    for (const freq of frequencies) {
      const normalized = (Math.log2(freq) - Math.log2(minFreq)) / 
                        (Math.log2(maxFreq) - Math.log2(minFreq));
      
      if (normalized < 0.33) {
        r += 255 * (1 - normalized * 3);
        g += 255 * (normalized * 3);
      } else if (normalized < 0.67) {
        g += 255 * (1 - (normalized - 0.33) * 3);
        b += 255 * ((normalized - 0.33) * 3);
      } else {
        b += 255;
      }
    }
    
    // Average and clamp
    r = Math.min(255, Math.round(r / frequencies.length));
    g = Math.min(255, Math.round(g / frequencies.length));
    b = Math.min(255, Math.round(b / frequencies.length));
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  
  /**
   * Convert code to its soul chord
   */
  async codeToChord(code: string): Promise<SoulChord> {
    // Get protein hash with eigenvalues
    const result = this.hasher.computeHash(code);
    
    // Convert top eigenvalues to frequencies
    const frequencies = result.eigenTop.map(λ => this.eigenToFrequency(λ));
    
    // Convert to MIDI notes
    const midi = frequencies.map(f => this.freqToMidi(f));
    
    // Convert to note names
    const notes = midi.map(m => this.midiToNote(m));
    
    // Analyze harmonic quality
    const { quality, tension } = this.analyzeQuality(frequencies);
    
    // Generate synesthetic color
    const color = this.freqToColor(frequencies);
    
    return {
      frequencies,
      notes,
      midi,
      quality,
      tension,
      color
    };
  }
  
  /**
   * Generate chord progression from module
   */
  async moduleToProgression(modulePath: string): Promise<SoulChord[]> {
    // This would analyze each function in a module
    // For now, placeholder
    return [];
  }
  
  /**
   * Compare two pieces of code harmonically
   */
  async compareHarmony(code1: string, code2: string): Promise<{
    chord1: SoulChord,
    chord2: SoulChord,
    harmonicDistance: number,
    moreConsonant: 'first' | 'second' | 'equal'
  }> {
    const chord1 = await this.codeToChord(code1);
    const chord2 = await this.codeToChord(code2);
    
    const harmonicDistance = Math.abs(chord1.tension - chord2.tension);
    
    let moreConsonant: 'first' | 'second' | 'equal';
    if (chord1.tension < chord2.tension - 0.05) {
      moreConsonant = 'first';
    } else if (chord2.tension < chord1.tension - 0.05) {
      moreConsonant = 'second';
    } else {
      moreConsonant = 'equal';
    }
    
    return {
      chord1,
      chord2,
      harmonicDistance,
      moreConsonant
    };
  }
}