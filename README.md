# Advaita-Vani: Sanskrit Prosody Engine

A professional Sanskrit recitation engine that integrates traditional metrical (Chandas) and melodic (Svara) constraints into computational speech synthesis.

## Features

- **Syllable Parsing:** Automatic decomposition of Sanskrit text into syllables with weight classification (Guru/Laghu).
- **Meter Detection:** Real-time identification of classical Sanskrit meters (Anuṣṭup, Indravajrā, etc.).
- **Melodic Recitation:** Traditional pitch movements (Udātta, Anudātta, Svarita) mapped to relative pitch offsets.
- **AI Song Generation:** High-fidelity neural audio generation using Gemini and Lyria models.
- **Audio Export:** Context-aware .wav file generation that respects selected rhythmic and melodic parameters.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/advaita-vani.git
   cd advaita-vani
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory (use `.env.example` as a template):
   ```bash
   cp .env.example .env
   ```

2. Add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

   Get your API key at: https://aistudio.google.com/app/apikey

### Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── App.tsx                 # Main React component
├── main.tsx               # Entry point
├── constants.ts           # Melodic patterns config
├── index.css              # Tailwind & custom styles
├── vite-env.d.ts          # TypeScript definitions
├── components/
│   └── MelodicWaveform.tsx    # Visualization component
├── lib/
│   └── prosody.ts         # Core Sanskrit prosody engine
├── services/
│   ├── webSpeechTTS.ts    # Web Speech API integration
│   ├── geminiTTS.ts       # Gemini AI audio export
│   └── lyriaMusic.ts      # Lyria music generation
└── types/
    └── aistudio.d.ts      # Google AI Studio types
```

## Architecture

### 1. Syllable Parsing (Core Engine)
- Decomposes Sanskrit text into syllables
- Classifies weights: **Laghu (1 Matra)** and **Guru (2 Matras)**
- Supports Devanagari & IAST input formats

### 2. Meter Detection
Identifies classical Sanskrit meters:
- **Anuṣṭup** - 8 syllables (most common, used in Bhagavad Gita)
- **Indravajrā** - 11 syllables
- **Upendravajrā** - 11 syllables
- **Vaṃśastha** - 12 syllables
- **Mālinī** - 15 syllables

### 3. Melodic Patterns (Svara)
Six recitation styles:
- **Vedic** - Traditional Udātta/Anudātta/Svarita
- **Classical** - Smooth, flowing melody
- **Mantra** - Deep, meditative chant
- **Kirtan** - Energetic devotional
- **Stotra** - Rhythmic, repetitive
- **Monotone** - Pure rhythm, no pitch variation

### 4. Audio Synthesis
Three synthesis engines:
- **Web Speech API** - Real-time playback with prosodic control
- **Gemini TTS** - Professional audio export (studio-quality)
- **Lyria** - Full AI-generated musical compositions

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS 4, Framer Motion
- **Sanskrit Processing:** Sanscript
- **AI/TTS:** Google Generative AI SDK
- **Icons:** Lucide React

## Chandas & Gana (Prosody Theory)

### Syllable Weights (Chandas)

| Weight | Duration | Rules |
|--------|----------|-------|
| **Laghu** | 1 Matra | Short vowels (a, i, u, ṛ, ḷ) |
| **Guru** | 2 Matras | Long vowels (ā, ī, ū, e, ai, o, au) OR followed by Anusvara/Visarga OR next syllable has conjunct consonant |

### Eight Classical Ganas (3-syllable patterns)

| Gana | Pattern | Symbol | Matra |
|------|---------|--------|-------|
| **Ya** | L G G | य | 5 |
| **Ma** | G G G | म | 6 |
| **Ta** | G G L | त | 5 |
| **Ra** | G L G | र | 5 |
| **Ja** | L G L | ज | 4 |
| **Bha** | G L L | भ | 4 |
| **Na** | L L L | न | 3 |
| **Sa** | L L G | स | 4 |

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Known Limitations

- Audio generation quality depends on your Google API tier
- Long texts (>500 chars) may fail with Gemini
- Web Speech API voice availability varies by browser/OS

## Roadmap

- [ ] Multi-language support (Hindi, Tamil, Telugu, Kannada, Malayalam)
- [ ] Custom meter creation
- [ ] MIDI export for musical composition
- [ ] Vedic accent mark visualization
- [ ] Offline mode support
- [ ] Mobile app version

## License

MIT License - See LICENSE file for details

## Contact & Support

- **GitHub Issues:** [Report bugs or request features](https://github.com/YOUR_USERNAME/advaita-vani/issues)
- **Email:** your-email@example.com

---

**Note:** This project requires a valid Google Generative AI API key. Get one at https://aistudio.google.com/
