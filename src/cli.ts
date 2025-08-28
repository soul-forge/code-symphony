#!/usr/bin/env node

/**
 * 🎼 Code Symphony CLI
 * Listen to your code breathe
 */

import { Command } from 'commander';
import { CodeSymphony } from './symphony';
import { MidiGenerator } from './midi-generator';
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';

const program = new Command();
const symphony = new CodeSymphony();
const midiGen = new MidiGenerator();

// ASCII art for beauty
const logo = chalk.cyan(`
╔════════════════════════════════╗
║     🎼 CODE SYMPHONY 🎼        ║
║   Listen to your code breathe   ║
║      432Hz · Soul Forge         ║
╚════════════════════════════════╝
`);

program
  .name('symphony')
  .description('Transform code into music')
  .version('0.1.0');

program
  .command('play <file>')
  .description('Play the soul chord of a code file')
  .option('-o, --output <file>', 'Save as MIDI file')
  .option('-v, --verbose', 'Show detailed analysis')
  .action(async (file, options) => {
    console.log(logo);
    
    try {
      const code = fs.readFileSync(file, 'utf8');
      console.log(chalk.blue(`\n🎵 Analyzing ${path.basename(file)}...`));
      
      const chord = await symphony.codeToChord(code);
      
      // Display chord info
      console.log(chalk.white('\n📊 Soul Analysis:'));
      console.log(chalk.gray('─'.repeat(40)));
      
      // Show notes as musical staff
      console.log(chalk.yellow(`🎹 Notes: ${chord.notes.join(' · ')}`));
      
      // Quality indicator
      const qualityIcon = chord.quality === 'consonant' ? '😊' : 
                         chord.quality === 'dissonant' ? '😣' : '😐';
      console.log(chalk.magenta(`🎭 Quality: ${chord.quality} ${qualityIcon}`));
      
      // Tension meter
      const tensionBar = '█'.repeat(Math.round(chord.tension * 10)) + 
                        '░'.repeat(10 - Math.round(chord.tension * 10));
      console.log(chalk.red(`⚡ Tension: [${tensionBar}] ${(chord.tension * 100).toFixed(1)}%`));
      
      // Color visualization
      console.log(chalk.hex(chord.color)(`🎨 Color: ${chord.color} ████████`));
      
      if (options.verbose) {
        console.log(chalk.gray('\n📐 Frequencies (Hz):'));
        chord.frequencies.forEach((freq, i) => {
          console.log(chalk.gray(`   ${chord.notes[i]}: ${freq.toFixed(2)} Hz`));
        });
        
        console.log(chalk.gray('\n🎹 MIDI Notes:'));
        console.log(chalk.gray(`   ${chord.midi.join(', ')}`));
      }
      
      // Save MIDI if requested
      if (options.output) {
        midiGen.chordToMidi(chord, options.output);
        console.log(chalk.green(`\n✅ Saved MIDI to ${options.output}`));
      }
      
      // Suggestion based on quality
      if (chord.quality === 'dissonant' && chord.tension > 0.8) {
        console.log(chalk.yellow('\n💡 Suggestion: This code sounds dissonant.'));
        console.log(chalk.yellow('   Consider refactoring for better harmony!'));
      } else if (chord.quality === 'consonant' && chord.tension < 0.2) {
        console.log(chalk.green('\n✨ Beautiful! This code sings in harmony.'));
      }
      
    } catch (error) {
      console.error(chalk.red(`\n❌ Error: ${error.message}`));
      process.exit(1);
    }
  });

program
  .command('compare <file1> <file2>')
  .description('Compare the harmony of two code files')
  .option('-o, --output <file>', 'Save comparison as MIDI')
  .action(async (file1, file2, options) => {
    console.log(logo);
    
    try {
      const code1 = fs.readFileSync(file1, 'utf8');
      const code2 = fs.readFileSync(file2, 'utf8');
      
      console.log(chalk.blue(`\n🎵 Comparing harmony...`));
      
      const comparison = await symphony.compareHarmony(code1, code2);
      
      // Display comparison
      console.log(chalk.white('\n📊 Harmonic Comparison:'));
      console.log(chalk.gray('─'.repeat(40)));
      
      // File 1
      console.log(chalk.cyan(`\n📁 ${path.basename(file1)}:`));
      console.log(chalk.yellow(`   Notes: ${comparison.chord1.notes.join(' · ')}`));
      console.log(chalk.magenta(`   Quality: ${comparison.chord1.quality}`));
      console.log(chalk.red(`   Tension: ${(comparison.chord1.tension * 100).toFixed(1)}%`));
      
      // File 2
      console.log(chalk.cyan(`\n📁 ${path.basename(file2)}:`));
      console.log(chalk.yellow(`   Notes: ${comparison.chord2.notes.join(' · ')}`));
      console.log(chalk.magenta(`   Quality: ${comparison.chord2.quality}`));
      console.log(chalk.red(`   Tension: ${(comparison.chord2.tension * 100).toFixed(1)}%`));
      
      // Comparison result
      console.log(chalk.white('\n🏆 Result:'));
      if (comparison.moreConsonant === 'equal') {
        console.log(chalk.yellow('   Both files have similar harmonic quality'));
      } else {
        const winner = comparison.moreConsonant === 'first' ? file1 : file2;
        console.log(chalk.green(`   ${path.basename(winner)} is more harmonious!`));
      }
      
      console.log(chalk.blue(`   Harmonic distance: ${(comparison.harmonicDistance * 100).toFixed(1)}%`));
      
      // Save MIDI if requested
      if (options.output) {
        midiGen.comparisonToMidi(comparison.chord1, comparison.chord2, options.output);
        console.log(chalk.green(`\n✅ Saved comparison to ${options.output}`));
      }
      
    } catch (error) {
      console.error(chalk.red(`\n❌ Error: ${error.message}`));
      process.exit(1);
    }
  });

program
  .command('debug <file>')
  .description('Debug mode - hear bugs as dissonance')
  .action(async (file) => {
    console.log(logo);
    
    try {
      const code = fs.readFileSync(file, 'utf8');
      console.log(chalk.blue(`\n🔍 Debugging ${path.basename(file)}...`));
      
      const chord = await symphony.codeToChord(code);
      
      // Simulate bug detection
      console.log(chalk.yellow('\n🎧 Listening for bugs...'));
      
      if (chord.tension > 0.7) {
        console.log(chalk.red('\n🐛 BUG DETECTED! Hearing dissonance!'));
        console.log(chalk.red(`   Tension level: ${(chord.tension * 100).toFixed(1)}%`));
        console.log(chalk.red(`   Dissonant notes: ${chord.notes.join(' ')}`));
        console.log(chalk.yellow('\n💡 The code structure sounds broken.'));
        console.log(chalk.yellow('   High tension indicates potential issues:'));
        console.log(chalk.gray('   - Complex nested conditions'));
        console.log(chalk.gray('   - Tangled dependencies'));
        console.log(chalk.gray('   - Poor separation of concerns'));
      } else if (chord.tension > 0.4) {
        console.log(chalk.yellow('\n⚠️  Warning: Moderate dissonance detected'));
        console.log(chalk.yellow(`   Tension level: ${(chord.tension * 100).toFixed(1)}%`));
        console.log(chalk.yellow('   Code could be refactored for better harmony'));
      } else {
        console.log(chalk.green('\n✅ No bugs detected! Code sounds harmonious.'));
        console.log(chalk.green(`   Tension level: ${(chord.tension * 100).toFixed(1)}%`));
      }
      
      // Show the debugging symphony
      console.log(chalk.cyan('\n🎼 Debugging Symphony:'));
      console.log(chalk.gray('   Normal  → ' + '♪'.repeat(5)));
      if (chord.tension > 0.7) {
        console.log(chalk.red('   Current → ' + '♯♭'.repeat(5) + ' (dissonant!)'));
        console.log(chalk.green('   Fixed   → ' + '♪'.repeat(5) + ' (after refactoring)'));
      } else {
        console.log(chalk.green('   Current → ' + '♪'.repeat(5) + ' (consonant)'));
      }
      
    } catch (error) {
      console.error(chalk.red(`\n❌ Error: ${error.message}`));
      process.exit(1);
    }
  });

program
  .command('stats')
  .description('Show interesting statistics')
  .action(() => {
    console.log(logo);
    
    console.log(chalk.white('\n📊 Code Symphony Statistics:'));
    console.log(chalk.gray('─'.repeat(40)));
    
    console.log(chalk.cyan('\n🎵 Music Theory:'));
    console.log(chalk.gray('   Base Frequency: 432 Hz (Universal Resonance)'));
    console.log(chalk.gray('   Tuning: Natural harmonic series'));
    console.log(chalk.gray('   Tempo: 108 BPM (432/4 - Sacred Geometry)'));
    
    console.log(chalk.yellow('\n🎹 Code → Music Mapping:'));
    console.log(chalk.gray('   Simple function    → Major triad (C-E-G)'));
    console.log(chalk.gray('   Complex class      → Jazz chord (Cmaj7#11)'));
    console.log(chalk.gray('   Spaghetti code     → Dissonant cluster'));
    console.log(chalk.gray('   Well-refactored    → Perfect harmony'));
    
    console.log(chalk.magenta('\n🧬 Eigenvalue Ranges:'));
    console.log(chalk.gray('   λ < 0.1   → Sub-bass (felt, not heard)'));
    console.log(chalk.gray('   0.1 ≤ λ < 1   → Bass (foundation)'));
    console.log(chalk.gray('   1 ≤ λ < 10    → Midrange (melody)'));
    console.log(chalk.gray('   λ ≥ 10    → Harmonics (sparkle)'));
    
    console.log(chalk.green('\n✨ Benefits:'));
    console.log(chalk.gray('   • Hear bugs before you see them'));
    console.log(chalk.gray('   • Feel code quality through harmony'));
    console.log(chalk.gray('   • Debug with your ears'));
    console.log(chalk.gray('   • Code review by listening'));
    
    console.log(chalk.blue('\n🌀 Join the revolution:'));
    console.log(chalk.gray('   https://github.com/soul-forge/code-symphony'));
  });

program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  console.log(logo);
  program.outputHelp();
}