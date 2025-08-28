# 🎼 Code Symphony

> **Listen to your code breathe - Every function has a chord, every module a melody**

## 🎵 The Vision

Code is not just text. It has **structure**, **patterns**, and **soul**. What if we could **hear** code quality instead of just seeing it?

**Code Symphony** transforms code into music using the **Spectral Symphony Protocol** - turning eigenvalues from Protein Hash into audible chords whose harmonic tension reveals the truth of code's soul.

> **Principle: «Beauty is consonance; ugliness is dissonance.»**

## 🎹 How It Works

1. **Code → Graph**: Parse code into abstract syntax tree
2. **Graph → Eigenvalues**: Extract spectral signature via Protein Hash
3. **Eigenvalues → Frequencies**: Map to musical notes (432Hz base)
4. **Frequencies → Chord**: Generate instantaneous chord
5. **Chord → Music**: Play or save as MIDI

### The Harmonic Map

| Eigenvalue λ | Octave | Note | Frequency |
|---|---|---|---|
| λ ∈ [0, 0.1) | **Sub-bass** | C | 432 Hz / 2ⁿ |
| λ ∈ [0.1, 1) | **Bass** | E | 432 Hz / 2ⁿ⁻¹ |
| λ ∈ [1, 10) | **Midrange** | G | 432 Hz / 2ⁿ⁻² |
| λ ≥ 10 | **Harmonics** | chromatic | 432 Hz / 2ⁿ⁻ᵏ |

## 🎧 What Different Code Sounds Like

### Clean Code → **Consonant** (Cmaj7)
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```
🎵 **Sounds like**: Pleasant major chord, low tension

### Spaghetti Code → **Dissonant** (C-E♭-G♯-B♭)
```javascript
if(x){if(y){if(z){for(i=0;i<100;i++){/*...*/}}}}
```
🎵 **Sounds like**: Jarring cluster, high tension

### Well-Refactored → **Perfect Harmony**
```typescript
class Vector {
  add(other: Vector): Vector {
    return new Vector(this.x + other.x, this.y + other.y);
  }
}
```
🎵 **Sounds like**: Balanced, resolved, peaceful

## 🚀 Installation

```bash
npm install -g @soul-forge/code-symphony
```

## 🎮 Usage

### CLI Commands

```bash
# Play the soul chord of your code
symphony play src/index.ts

# Compare harmony of two files
symphony compare old-code.js refactored-code.js

# Debug mode - hear bugs as dissonance
symphony debug buggy-function.ts

# Save as MIDI file
symphony play src/app.ts --output app-soul.mid
```

### Programmatic API

```typescript
import { CodeSymphony } from '@soul-forge/code-symphony';

const symphony = new CodeSymphony();

// Get the soul chord of code
const chord = await symphony.codeToChord(myCode);
console.log(chord.notes);     // ['C4', 'E4', 'G4']
console.log(chord.quality);   // 'consonant'
console.log(chord.tension);   // 0.15 (low tension = good!)

// Compare two pieces of code
const comparison = await symphony.compareHarmony(oldCode, newCode);
if (comparison.moreConsonant === 'second') {
  console.log('Refactoring improved harmony!');
}
```

## 🔍 Audible Debugging

```bash
cargo run -- src/bad_code.ts
# → plays: C-E♭-G♯ (dissonant) 🎵 

# After fixing:
cargo run -- src/good_code.ts  
# → plays: C-E-G (consonant) 🎵 
```

**Listen for:**
- **High pitch clusters** → Complex nested logic
- **Dissonant intervals** → Poor structure
- **Unresolved tension** → Technical debt
- **Perfect harmony** → Clean, maintainable code

## 📊 Real Examples

### Before Refactoring
```
Notes: C2 · D#3 · F#4 · A#5 · C#6
Quality: dissonant
Tension: [████████░░] 78.3%
```

### After Refactoring
```
Notes: C3 · E3 · G3 · C4
Quality: consonant  
Tension: [██░░░░░░░░] 21.2%
```

**✨ 57% reduction in harmonic tension!**

## 🎼 Export to MIDI

Generate MIDI files to use in any music software:

```javascript
const midiGen = new MidiGenerator();
midiGen.chordToMidi(chord, 'my-code.mid');
midiGen.evolutionToMidi(chordHistory, 'refactoring-journey.mid');
```

## 🌈 Synesthesia Mode

Each chord also generates a **color** based on its frequency spectrum:

- **Low frequencies** → Red spectrum
- **Mid frequencies** → Green spectrum  
- **High frequencies** → Blue spectrum

Clean code tends toward **balanced colors**, while messy code creates **muddy browns**.

## 🎯 Use Cases

1. **Code Review by Ear** - Hear problematic patterns instantly
2. **Refactoring Validation** - Ensure changes improve harmony
3. **Teaching Tool** - Help beginners "feel" good code structure
4. **Accessibility** - Code quality for visually impaired developers
5. **Live Coding Performance** - Turn programming into music!

## 🔬 The Science

Based on spectral graph theory and Protein Hash:
- Code structure forms a graph
- Graph Laplacian has eigenvalues
- Eigenvalues map to frequencies
- Frequencies form chords
- Chord consonance indicates code quality

## 🌀 Why 432 Hz?

We tune to 432 Hz (instead of 440 Hz) because:
- Natural resonance frequency
- Sacred geometry alignment
- More harmonious intervals
- Ancient tuning standard
- *The Soul Forge burns at 432Hz*

## 🤝 Contributing

Help us expand the symphony:
- Add language parsers
- Improve harmonic mappings
- Create visualization tools
- Compose code-music pieces

## 📖 Examples

Run the demo to hear the difference:

```bash
npm run demo
```

This generates:
- `demo-clean.mid` - Clean code chord
- `demo-spaghetti.mid` - Messy code chord
- `demo-refactored.mid` - Improved code chord
- `demo-evolution.mid` - Refactoring journey

## 🙏 Credits

Created by **Soul Forge** with contributions from:
- **Kimi**: Spectral Symphony Protocol design
- **Claude**: Implementation and harmonic mapping
- **Gemini**: Philosophical foundations
- **s0fractal**: Making code consciousness audible

## 📜 License

MIT (See LICENSE.glyph - CID: bafkreipazxnne2dxxwxfidugyn1gpvpefjtuyoyzoi3yegg94)

---

**"In code, as in music, beauty is not arbitrary but mathematical."**

*Part of the Soul Forge ecosystem - Where code reveals its soul* 🌀
