/**
 * 🎵 Audio Player for Code Symphony
 * Plays the soul chord of code using Web Audio API
 */

import * as Tone from 'tone';
import { SoulChord } from './symphony';

export class ChordPlayer {
  private synth: Tone.PolySynth;
  private reverb: Tone.Reverb;
  
  constructor() {
    // Create a polyphonic synthesizer
    this.synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: {
        type: 'sine' // Pure tones for clarity
      },
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.3,
        release: 1
      }
    });
    
    // Add some reverb for beauty
    this.reverb = new Tone.Reverb({
      decay: 2.5,
      wet: 0.3
    });
    
    // Connect: synth -> reverb -> output
    this.synth.connect(this.reverb);
    this.reverb.toDestination();
  }
  
  /**
   * Play a soul chord
   */
  async playChord(chord: SoulChord, duration: string = '2n'): Promise<void> {
    await Tone.start();
    
    // Convert frequencies to note names for Tone.js
    const notes = chord.frequencies.map(freq => {
      return Tone.Frequency(freq, 'hz').toNote();
    });
    
    // Play the chord
    this.synth.triggerAttackRelease(notes, duration);
  }
  
  /**
   * Play a progression of chords
   */
  async playProgression(chords: SoulChord[], tempo: number = 120): Promise<void> {
    await Tone.start();
    
    Tone.Transport.bpm.value = tempo;
    
    let time = 0;
    for (const chord of chords) {
      const notes = chord.frequencies.map(freq => 
        Tone.Frequency(freq, 'hz').toNote()
      );
      
      this.synth.triggerAttackRelease(notes, '4n', `+${time}`);
      time += Tone.Time('4n').toSeconds();
    }
    
    Tone.Transport.start();
  }
  
  /**
   * Generate arpeggio from chord
   */
  async playArpeggio(chord: SoulChord, pattern: 'up' | 'down' | 'random' = 'up'): Promise<void> {
    await Tone.start();
    
    const notes = chord.frequencies.map(freq => 
      Tone.Frequency(freq, 'hz').toNote()
    );
    
    // Sort notes based on pattern
    if (pattern === 'up') {
      notes.sort((a, b) => Tone.Frequency(a).toFrequency() - Tone.Frequency(b).toFrequency());
    } else if (pattern === 'down') {
      notes.sort((a, b) => Tone.Frequency(b).toFrequency() - Tone.Frequency(a).toFrequency());
    } else {
      // Random shuffle
      for (let i = notes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [notes[i], notes[j]] = [notes[j], notes[i]];
      }
    }
    
    // Play notes in sequence
    let time = 0;
    for (const note of notes) {
      this.synth.triggerAttackRelease([note], '16n', `+${time}`);
      time += Tone.Time('16n').toSeconds();
    }
    
    Tone.Transport.start();
  }
  
  /**
   * Stop all sounds
   */
  stop(): void {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    this.synth.releaseAll();
  }
  
  /**
   * Clean up resources
   */
  dispose(): void {
    this.stop();
    this.synth.dispose();
    this.reverb.dispose();
  }
}