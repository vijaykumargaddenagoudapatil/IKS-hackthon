export type MelodicPattern = 'vedic' | 'classical' | 'monotone' | 'stotra' | 'mantra' | 'kirtan';

export interface MelodicConfig {
  name: string;
  description: string;
  pattern: number[]; // Pitch multipliers
}

export const MELODIC_CONFIGS: Record<MelodicPattern, MelodicConfig> = {
  vedic: {
    name: 'Vedic (Svara)',
    description: 'Traditional Udātta, Anudātta, and Svarita pitch movements.',
    pattern: [0.8, 1.2, 1.0, 1.2, 0.8] // LOW, HIGH, MID, HIGH, LOW
  },
  classical: {
    name: 'Classical Melodic',
    description: 'A more fluid, song-like melodic contour.',
    pattern: [1.0, 1.1, 1.2, 1.1, 1.0, 0.9, 0.8, 0.9]
  },
  stotra: {
    name: 'Stotra Rhythmic',
    description: 'A rhythmic, repetitive pattern common in devotional verses.',
    pattern: [1.0, 1.1, 1.0, 0.9, 1.0, 1.1, 1.0, 0.9]
  },
  mantra: {
    name: 'Mantra Deep',
    description: 'A deep, resonant, and slow pattern for meditative chanting.',
    pattern: [0.8, 0.85, 0.9, 0.85, 0.8]
  },
  kirtan: {
    name: 'Kirtan Dynamic',
    description: 'A dynamic, rising and falling pattern with higher energy.',
    pattern: [1.0, 1.2, 1.4, 1.2, 1.0, 0.8, 0.6, 0.8]
  },
  monotone: {
    name: 'Monotone',
    description: 'No melodic variation, focusing purely on rhythm.',
    pattern: [1.0]
  }
};
