/**
 * Sound Engine for Quiz RPG using Web Audio API
 * No external sound files required. Generates procedural chiptune & fantasy sounds.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.bgmVolume = 0.3;
    this.seVolume = 0.5;
    this.currentBgm = null;
    this.bgmInterval = null;
    this.bgmTimeout = null;
    this.initialized = false;
  }

  init() {
    if (this.initialized && this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return;
    }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.ctx = new AudioContext();
      this.initialized = true;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopBgm();
    }
    return this.isMuted;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.3, detune = 0, delay = 0) {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (detune) osc.detune.setValueAtTime(detune, now);

      gain.gain.setValueAtTime(gainVal * this.seVolume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    } catch (e) {
      console.warn('Audio playback error:', e);
    }
  }

  playNoise(duration = 0.2, gainVal = 0.2) {
    if (this.isMuted || !this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 800;

      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(gainVal * this.seVolume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + duration);
    } catch (e) {
      console.warn('Noise error:', e);
    }
  }

  // --- Sound Effects (SE) ---

  playClick() {
    this.init();
    this.playTone(600, 'triangle', 0.05, 0.2);
  }

  playSelect() {
    this.init();
    this.playTone(440, 'square', 0.08, 0.25);
    this.playTone(880, 'square', 0.1, 0.2, 0, 0.06);
  }

  playCorrect() {
    this.init();
    const now = 0;
    // Sparkling chime chord (C5 - E5 - G5 - C6)
    this.playTone(523.25, 'triangle', 0.2, 0.4, 0, now);
    this.playTone(659.25, 'triangle', 0.25, 0.4, 0, now + 0.08);
    this.playTone(783.99, 'triangle', 0.3, 0.4, 0, now + 0.16);
    this.playTone(1046.50, 'sine', 0.5, 0.5, 0, now + 0.24);
  }

  playWrong() {
    this.init();
    // Low buzz error
    this.playTone(180, 'sawtooth', 0.18, 0.35, 0, 0);
    this.playTone(140, 'sawtooth', 0.3, 0.35, 0, 0.15);
  }

  playAttack() {
    this.init();
    this.playTone(320, 'sawtooth', 0.08, 0.3);
    this.playNoise(0.12, 0.25);
  }

  playCritical() {
    this.init();
    this.playTone(300, 'sawtooth', 0.1, 0.35, 0, 0);
    this.playTone(600, 'square', 0.15, 0.4, 0, 0.05);
    this.playTone(1200, 'triangle', 0.3, 0.45, 0, 0.1);
    this.playNoise(0.2, 0.35);
  }

  playDamage() {
    this.init();
    this.playTone(120, 'sawtooth', 0.25, 0.4);
    this.playNoise(0.2, 0.3);
  }

  playHeal() {
    this.init();
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, i) => {
      this.playTone(freq, 'sine', 0.3, 0.35, 0, i * 0.07);
    });
  }

  playSkill() {
    this.init();
    const freqs = [350, 440, 554, 700, 880, 1100];
    freqs.forEach((f, i) => {
      this.playTone(f, 'square', 0.15, 0.2, 0, i * 0.04);
    });
  }

  playLevelUp() {
    this.init();
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
    notes.forEach((f, i) => {
      this.playTone(f, 'triangle', 0.25, 0.4, 0, i * 0.08);
    });
  }

  playChest() {
    this.init();
    this.playTone(400, 'square', 0.1, 0.3, 0, 0);
    this.playTone(600, 'triangle', 0.2, 0.35, 0, 0.08);
    this.playTone(900, 'sine', 0.4, 0.4, 0, 0.18);
  }

  playFanfare() {
    this.init();
    const melody = [
      { f: 523.25, d: 0.12, t: 0 },
      { f: 523.25, d: 0.12, t: 0.12 },
      { f: 523.25, d: 0.12, t: 0.24 },
      { f: 523.25, d: 0.35, t: 0.36 },
      { f: 415.30, d: 0.35, t: 0.72 },
      { f: 466.16, d: 0.35, t: 1.08 },
      { f: 523.25, d: 0.6,  t: 1.44 }
    ];
    melody.forEach(n => {
      this.playTone(n.f, 'triangle', n.d, 0.45, 0, n.t);
      this.playTone(n.f * 0.5, 'square', n.d * 0.8, 0.2, 0, n.t);
    });
  }

  playGameOver() {
    this.init();
    const notes = [400, 370, 340, 300, 240];
    notes.forEach((f, i) => {
      this.playTone(f, 'sawtooth', 0.4, 0.35, 0, i * 0.25);
    });
  }

  // --- Background Music Generator (Looping chiptune patterns) ---

  stopBgm() {
    if (this.bgmTimeout) clearTimeout(this.bgmTimeout);
    if (this.bgmInterval) clearInterval(this.bgmInterval);
    this.bgmTimeout = null;
    this.bgmInterval = null;
    this.currentBgm = null;
  }

  playBgm(type) {
    this.init();
    if (this.isMuted) return;
    if (this.currentBgm === type) return;

    this.stopBgm();
    this.currentBgm = type;

    let step = 0;
    const bpm = (type === 'boss') ? 145 : (type === 'battle') ? 130 : 100;
    const stepTime = (60 / bpm) / 4; // 16th notes

    const loop = () => {
      if (this.isMuted || !this.ctx || this.currentBgm !== type) return;

      try {
        if (type === 'title') {
          // Serene, mystery intro melody
          const bass = [220, 220, 261, 261, 196, 196, 220, 220];
          const lead = [440, 0, 523, 0, 659, 587, 523, 440, 392, 0, 440, 523, 440, 0, 0, 0];
          const bIdx = Math.floor(step / 4) % bass.length;
          const lIdx = step % lead.length;

          if (step % 4 === 0) {
            this.playTone(bass[bIdx] * 0.5, 'triangle', stepTime * 3.5, 0.15 * this.bgmVolume);
          }
          if (lead[lIdx] > 0) {
            this.playTone(lead[lIdx], 'sine', stepTime * 1.8, 0.2 * this.bgmVolume);
          }
        } else if (type === 'field') {
          // Adventure exploration tune
          const bass = [130.81, 164.81, 196.00, 220.00, 174.61, 196.00, 220.00, 261.63];
          const melody = [261.63, 0, 329.63, 392.00, 0, 440.00, 392.00, 329.63, 293.66, 0, 349.23, 440.00, 0, 392.00, 329.63, 261.63];
          const bIdx = Math.floor(step / 4) % bass.length;
          const mIdx = step % melody.length;

          if (step % 2 === 0) {
            this.playTone(bass[bIdx], 'triangle', stepTime * 1.8, 0.18 * this.bgmVolume);
          }
          if (melody[mIdx] > 0) {
            this.playTone(melody[mIdx], 'square', stepTime * 1.5, 0.15 * this.bgmVolume);
          }
        } else if (type === 'battle') {
          // Energetic combat beat
          const bass = [110, 110, 130, 110, 146, 130, 110, 164];
          const riff = [220, 0, 220, 330, 0, 293, 261, 220, 330, 0, 392, 440, 330, 293, 261, 196];
          const bIdx = step % bass.length;
          const rIdx = step % riff.length;

          this.playTone(bass[bIdx], 'sawtooth', stepTime * 0.8, 0.15 * this.bgmVolume);
          if (riff[rIdx] > 0) {
            this.playTone(riff[rIdx], 'square', stepTime * 1.1, 0.2 * this.bgmVolume);
          }
          if (step % 4 === 0) {
            this.playNoise(0.05, 0.15 * this.bgmVolume);
          }
        } else if (type === 'boss') {
          // Intense dramatic boss theme
          const bass = [73.42, 73.42, 87.31, 73.42, 98.00, 87.31, 110.00, 98.00];
          const lead = [293.66, 349.23, 293.66, 440.00, 415.30, 349.23, 329.63, 293.66, 261.63, 293.66, 349.23, 440.00, 523.25, 440.00, 392.00, 349.23];
          const bIdx = step % bass.length;
          const lIdx = step % lead.length;

          this.playTone(bass[bIdx], 'sawtooth', stepTime * 0.9, 0.25 * this.bgmVolume);
          if (lead[lIdx] > 0) {
            this.playTone(lead[lIdx], 'square', stepTime * 1.2, 0.22 * this.bgmVolume);
            this.playTone(lead[lIdx] * 0.5, 'triangle', stepTime * 1.2, 0.15 * this.bgmVolume);
          }
          if (step % 2 === 0) {
            this.playNoise(0.08, 0.2 * this.bgmVolume);
          }
        } else if (type === 'ending') {
          // Glorious triumph theme
          const chords = [261.63, 329.63, 392.00, 523.25];
          const melody = [523.25, 0, 587.33, 659.25, 0, 783.99, 659.25, 523.25, 659.25, 0, 783.99, 1046.50, 0, 783.99, 659.25, 523.25];
          const mIdx = step % melody.length;

          if (step % 8 === 0) {
            const chord = chords[Math.floor(step / 8) % chords.length];
            this.playTone(chord * 0.5, 'triangle', stepTime * 7, 0.2 * this.bgmVolume);
            this.playTone(chord, 'sine', stepTime * 7, 0.15 * this.bgmVolume);
          }
          if (melody[mIdx] > 0) {
            this.playTone(melody[mIdx], 'sine', stepTime * 2.5, 0.25 * this.bgmVolume);
          }
        }
      } catch (err) {
        console.warn('BGM error:', err);
      }

      step++;
      this.bgmTimeout = setTimeout(loop, stepTime * 1000);
    };

    loop();
  }
}

window.soundEngine = new SoundEngine();
