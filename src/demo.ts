/**
 * 🎵 Code Symphony Demo
 * Hear the difference between good and bad code
 */

import { CodeSymphony } from './symphony';
import { MidiGenerator } from './midi-generator';
import chalk from 'chalk';

async function demo() {
  const symphony = new CodeSymphony();
  const midiGen = new MidiGenerator();
  
  console.log(chalk.cyan(`
╔════════════════════════════════╗
║     🎼 CODE SYMPHONY DEMO 🎼    ║
║   Hear the soul of your code    ║
╚════════════════════════════════╝
  `));
  
  // Example 1: Clean code (consonant)
  const cleanCode = `
function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}
  `;
  
  // Example 2: Spaghetti code (dissonant)
  const spaghettiCode = `
function doStuff(x: any, y: any, z: any) {
  if (x) {
    if (y) {
      if (z) {
        for (let i = 0; i < 100; i++) {
          for (let j = 0; j < 100; j++) {
            if (i * j % 2 === 0) {
              x = y + z * i - j;
            } else {
              y = x - z / i + j;
            }
          }
        }
        return x * y * z;
      } else {
        return y ? x : z;
      }
    }
    return x;
  }
  return null;
}
  `;
  
  // Example 3: Refactored code (more consonant)
  const refactoredCode = `
interface Point {
  x: number;
  y: number;
}

class Vector {
  constructor(public x: number, public y: number) {}
  
  add(other: Vector): Vector {
    return new Vector(this.x + other.x, this.y + other.y);
  }
  
  scale(factor: number): Vector {
    return new Vector(this.x * factor, this.y * factor);
  }
}
  `;
  
  console.log(chalk.yellow('\n🎵 Example 1: Clean Functions'));
  console.log(chalk.gray('─'.repeat(40)));
  const cleanChord = await symphony.codeToChord(cleanCode);
  displayChord(cleanChord);
  
  console.log(chalk.yellow('\n🎵 Example 2: Spaghetti Code'));
  console.log(chalk.gray('─'.repeat(40)));
  const spaghettiChord = await symphony.codeToChord(spaghettiCode);
  displayChord(spaghettiChord);
  
  console.log(chalk.yellow('\n🎵 Example 3: Refactored OOP'));
  console.log(chalk.gray('─'.repeat(40)));
  const refactoredChord = await symphony.codeToChord(refactoredCode);
  displayChord(refactoredChord);
  
  // Compare harmony
  console.log(chalk.cyan('\n📊 Harmony Comparison:'));
  console.log(chalk.gray('─'.repeat(40)));
  
  const comparison = await symphony.compareHarmony(spaghettiCode, refactoredCode);
  console.log(chalk.white(`Before refactoring: ${comparison.chord1.quality} (tension: ${(comparison.chord1.tension * 100).toFixed(1)}%)`));
  console.log(chalk.white(`After refactoring:  ${comparison.chord2.quality} (tension: ${(comparison.chord2.tension * 100).toFixed(1)}%)`));
  console.log(chalk.green(`\n✨ Improvement: ${((comparison.chord1.tension - comparison.chord2.tension) * 100).toFixed(1)}% reduction in dissonance!`));
  
  // Generate MIDI files
  console.log(chalk.blue('\n💾 Generating MIDI files...'));
  midiGen.chordToMidi(cleanChord, 'demo-clean.mid');
  midiGen.chordToMidi(spaghettiChord, 'demo-spaghetti.mid');
  midiGen.chordToMidi(refactoredChord, 'demo-refactored.mid');
  midiGen.evolutionToMidi([spaghettiChord, refactoredChord, cleanChord], 'demo-evolution.mid');
  
  console.log(chalk.green('\n✅ MIDI files generated:'));
  console.log(chalk.gray('   • demo-clean.mid'));
  console.log(chalk.gray('   • demo-spaghetti.mid'));
  console.log(chalk.gray('   • demo-refactored.mid'));
  console.log(chalk.gray('   • demo-evolution.mid'));
  
  console.log(chalk.cyan('\n🎧 Open these MIDI files in any music software to hear the difference!'));
  console.log(chalk.yellow('\n💡 Remember: Beautiful code sounds beautiful!'));
}

function displayChord(chord: any) {
  const qualityColor = chord.quality === 'consonant' ? chalk.green :
                       chord.quality === 'dissonant' ? chalk.red : chalk.yellow;
  
  console.log(chalk.white(`Notes: ${chord.notes.join(' · ')}`));
  console.log(qualityColor(`Quality: ${chord.quality}`));
  
  // Visual tension meter
  const tensionBar = '█'.repeat(Math.round(chord.tension * 10)) + 
                    '░'.repeat(10 - Math.round(chord.tension * 10));
  console.log(chalk.magenta(`Tension: [${tensionBar}] ${(chord.tension * 100).toFixed(1)}%`));
  
  // Show color
  console.log(chalk.hex(chord.color)(`Color: ${chord.color} ████`));
}

// Run demo
demo().catch(console.error);