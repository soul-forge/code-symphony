/**
 * 🎹 MIDI Generator for Code Symphony
 * Export soul chords as MIDI files
 */

import MidiWriter from 'midi-writer-js';
import { SoulChord } from './symphony';
import * as fs from 'fs';

export class MidiGenerator {
  /**
   * Generate MIDI file from soul chord
   */
  chordToMidi(chord: SoulChord, filename: string): void {
    const track = new MidiWriter.Track();
    
    // Set tempo to match 432Hz tuning energy
    track.setTempo(108); // 432 / 4 = 108 BPM (sacred geometry)
    
    // Add track name
    track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 1 }));
    
    // Create chord as simultaneous notes
    const chordEvent = new MidiWriter.NoteEvent({
      pitch: chord.midi.map(m => m),
      duration: '2',
      velocity: chord.quality === 'consonant' ? 80 : 
                chord.quality === 'dissonant' ? 100 : 90
    });
    
    track.addEvent(chordEvent);
    
    // Add metadata as text events
    track.addEvent(new MidiWriter.TextEvent({ text: `Quality: ${chord.quality}` }));
    track.addEvent(new MidiWriter.TextEvent({ text: `Tension: ${chord.tension.toFixed(3)}` }));
    track.addEvent(new MidiWriter.TextEvent({ text: `Notes: ${chord.notes.join(', ')}` }));
    
    // Generate and save MIDI file
    const write = new MidiWriter.Writer(track);
    const buffer = Buffer.from(write.buildFile());
    fs.writeFileSync(filename, buffer);
  }
  
  /**
   * Generate MIDI from code comparison
   */
  comparisonToMidi(
    chord1: SoulChord, 
    chord2: SoulChord, 
    filename: string
  ): void {
    const track = new MidiWriter.Track();
    
    track.setTempo(108);
    track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 1 }));
    
    // Play first chord
    track.addEvent(new MidiWriter.TextEvent({ text: 'Original Code' }));
    track.addEvent(new MidiWriter.NoteEvent({
      pitch: chord1.midi,
      duration: '2',
      velocity: 80
    }));
    
    // Pause
    track.addEvent(new MidiWriter.NoteEvent({
      pitch: 60, // Middle C as separator
      duration: '8',
      velocity: 40,
      wait: '2'
    }));
    
    // Play second chord
    track.addEvent(new MidiWriter.TextEvent({ text: 'Refactored Code' }));
    track.addEvent(new MidiWriter.NoteEvent({
      pitch: chord2.midi,
      duration: '2',
      velocity: 80,
      wait: '8'
    }));
    
    // Save file
    const write = new MidiWriter.Writer(track);
    const buffer = Buffer.from(write.buildFile());
    fs.writeFileSync(filename, buffer);
  }
  
  /**
   * Generate evolving MIDI sequence showing code transformation
   */
  evolutionToMidi(chords: SoulChord[], filename: string): void {
    const track = new MidiWriter.Track();
    
    track.setTempo(108);
    track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 1 }));
    track.addEvent(new MidiWriter.TextEvent({ text: 'Code Evolution Symphony' }));
    
    // Play each chord in sequence
    chords.forEach((chord, index) => {
      // Add marker
      track.addEvent(new MidiWriter.TextEvent({ 
        text: `Iteration ${index + 1}: ${chord.quality} (tension: ${chord.tension.toFixed(2)})` 
      }));
      
      // Play chord with velocity based on quality
      const velocity = Math.round(50 + (1 - chord.tension) * 50);
      
      track.addEvent(new MidiWriter.NoteEvent({
        pitch: chord.midi,
        duration: '4',
        velocity: velocity,
        wait: index === 0 ? 0 : '4'
      }));
    });
    
    // Final resolution
    track.addEvent(new MidiWriter.TextEvent({ text: 'Resolution' }));
    track.addEvent(new MidiWriter.NoteEvent({
      pitch: [60, 64, 67, 72], // C major with octave
      duration: '1',
      velocity: 100,
      wait: '4'
    }));
    
    // Save file
    const write = new MidiWriter.Writer(track);
    const buffer = Buffer.from(write.buildFile());
    fs.writeFileSync(filename, buffer);
  }
  
  /**
   * Generate debugging symphony - plays different for bugs
   */
  debuggingToMidi(
    normalChord: SoulChord,
    buggyChord: SoulChord,
    fixedChord: SoulChord,
    filename: string
  ): void {
    const track = new MidiWriter.Track();
    
    track.setTempo(108);
    
    // Normal code - Piano
    track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 1 }));
    track.addEvent(new MidiWriter.TextEvent({ text: 'Normal Code (Piano)' }));
    track.addEvent(new MidiWriter.NoteEvent({
      pitch: normalChord.midi,
      duration: '2',
      velocity: 70
    }));
    
    // Bug detected! - Distorted organ
    track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 19 }));
    track.addEvent(new MidiWriter.TextEvent({ text: '⚠️ BUG DETECTED! (Distorted)' }));
    track.addEvent(new MidiWriter.NoteEvent({
      pitch: buggyChord.midi,
      duration: '2',
      velocity: 110, // Loud!
      wait: '2'
    }));
    
    // Fixed - Strings
    track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 49 }));
    track.addEvent(new MidiWriter.TextEvent({ text: '✅ Bug Fixed (Strings)' }));
    track.addEvent(new MidiWriter.NoteEvent({
      pitch: fixedChord.midi,
      duration: '1',
      velocity: 80,
      wait: '2'
    }));
    
    // Save file
    const write = new MidiWriter.Writer(track);
    const buffer = Buffer.from(write.buildFile());
    fs.writeFileSync(filename, buffer);
  }
}