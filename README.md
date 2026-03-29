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

1. Clone the repository or download the source code.
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory.
2. Add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

### Running the App

Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS 4.
- **Animations:** Motion (Framer Motion).
- **Sanskrit Processing:** Sanscript.
- **AI/TTS:** Google Gemini API (@google/genai).

## License

MIT
