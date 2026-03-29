# Advaita-Vani: Architecture Overview (3-Minute Brief)

## What is Advaita-Vani?
A smart Sanskrit recitation engine that combines **traditional prosody rules** with **AI voice generation** to create authentic Sanskrit chanting—respecting both the rhythm (Chandas) and melody (Svara) of classical Sanskrit.

---

## How It Works (3 Simple Layers)

### 🎯 **Layer 1: Smart Text Processing**
- User inputs Sanskrit text (in Devanagari script)
- System automatically breaks it into **syllables** and analyzes their **weight** (heavy/light)
- Identifies the classical **meter** being used (Anuṣṭup, Indravajrā, etc.)
- Uses **Gana rules** (8 classical patterns) to ensure rhythmic authenticity

**Example:** धर्म (dharma) = 3 syllables → meter detected → pattern applied

---

### 🎵 **Layer 2: Melodic Pattern Engine**
- 6 recitation styles to choose from:
  - **Vedic** - Traditional pitch movements (Udātta, Anudātta, Svarita)
  - **Classical** - Smooth, flowing melody
  - **Mantra** - Deep, meditative chant
  - **Kirtan** - Energetic devotional chant
  - + More...
- Each pattern defines pitch variations that align with syllable weights

---

### 🔊 **Layer 3: AI Voice Generation**
Three powerful synthesis options:

| Audio Engine | Use Case | Quality |
|---|---|---|
| **WebSpeech** | Real-time playback | Real-time ✓ |
| **Gemini TTS** | Professional audio export | Studio-quality 🎙️ |
| **Lyria Music** | Full song generation | AI-composed 🎶 |

All respect the prosody rules from Layer 1 & 2.

---

## The Complete Flow

```
📝 User Input
    ↓
🔍 Parse Syllables & Detect Meter (Layer 1)
    ↓
🎵 Apply Melodic Pattern (Layer 2)
    ↓
🔊 Generate Audio (Layer 1)
    ↓
▶️ Play or Download
```

---

## Why It's Different

✅ **Respects Sanskrit Rules** - Not just text-to-speech; understands classical prosody  
✅ **Authentic Recitation** - Applies traditional melodic patterns + rhythms together  
✅ **Multiple Styles** - Vedic, Devotional, Mantra, Kirtan, etc.  
✅ **Easy to Use** - Type Sanskrit → Choose style → Play/Download  

---

## Tech Stack (Brief)
- **Frontend**: React + TypeScript
- **Processing**: Custom prosody engine
- **AI**: Google Gemini & GenAI APIs
- **Language Tool**: Sanscript (for script conversion)

---

*Transform Sanskrit text into authentic, AI-powered recitation in seconds.*
