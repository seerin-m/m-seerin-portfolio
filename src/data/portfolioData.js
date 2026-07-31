export const personalInfo = {
  name: "M Seerin",
  title: "AI/ML Engineer",
  tagline: "Crafting serene, high-performance artificial intelligence systems & human-centered voice experiences.",
  intro: "Specializing in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Speech AI (Kokoro-82M adaptation), and edge mobile inference.",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 9790903285",
  email: "seerin3514@gmail.com",
  linkedin: "https://www.linkedin.com/in/seerin-m/",
  github: "https://github.com/seerin-m",
  bio: "I am an AI/ML Engineer with a deep passion for building calm, responsive, and robust intelligent systems. My expertise spans generative AI, synthetic voice dataset curation, vector database indexing, and on-device model quantization. I thrive at the intersection of modern machine learning research and clean software engineering."
};

export const education = {
  institution: "Anand Institute of Higher Technology",
  degree: "B.E. Computer Science and Engineering",
  cgpa: "9.2 / 10.0",
  period: "Nov 2022 – May 2026",
  location: "Chennai, India"
};

export const skillCategories = [
  {
    category: "AI & Generative Models",
    iconName: "BrainCircuit",
    skills: [
      { name: "LLMs & Agentic Workflows", level: 92 },
      { name: "Retrieval-Augmented Gen (RAG)", level: 95 },
      { name: "Speech AI & TTS (Kokoro-82M)", level: 90 },
      { name: "Hugging Face Transformers", level: 88 },
      { name: "PyTorch Inference", level: 85 }
    ]
  },
  {
    category: "Languages & Frameworks",
    iconName: "Code2",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 82 },
      { name: "FastAPI & Flask", level: 90 },
      { name: "React & Tailwind CSS", level: 88 }
    ]
  },
  {
    category: "Tools & Edge Infrastructure",
    iconName: "Cpu",
    skills: [
      { name: "Qdrant Vector Database", level: 92 },
      { name: "ONNX Runtime Mobile", level: 88 },
      { name: "LiveKit Realtime Voice AI", level: 90 },
      { name: "Docker & Git", level: 85 },
      { name: "vLLM & llama.cpp", level: 84 }
    ]
  }
];

export const experiences = [
  {
    company: "F22 Labs",
    role: "AI/ML Intern",
    period: "December 2025 – July 2026",
    location: "On-site, Chennai",
    certificateLink: "https://drive.google.com/file/d/1fJfJxkx2LfUxiDjbExbhcvRdJU9Wt1bB/view?usp=sharing",
    responsibilities: [
      "Generated and curated synthetic speech datasets for TTS fine-tuning, adapting Kokoro-82M for Indian-English speech with improved pronunciation of names, locations, phone numbers, and technical terms for the Hire Vox voice agent.",
      "Built and evaluated AI Proof-of-Concepts (POCs) across LLMs, RAG, AI Agents, OCR, NLP, Multimodal AI, and real-time conversational AI using LiveKit (Voice AI).",
      "Explored and benchmarked RAG architectures using vector databases, semantic search, chunking strategies, and retrieval optimization techniques.",
      "Executed LLM and TTS inference using PyTorch-based Hugging Face Transformers, vLLM, and llama.cpp; evaluated open-source models for latency, quality, and mobile/edge deployment optimization."
    ]
  },
  {
    company: "UPTOSKILLS",
    role: "Artificial Intelligence Intern",
    period: "Jan 2025 – Apr 2025",
    location: "Remote, New Delhi",
    certificateLink: "https://drive.google.com/file/d/1OLobFdwDkulyZgfcufzl0rG22jhIKAzD/view?usp=sharing",
    responsibilities: [
      "Contributed to an AI-powered recruitment assessment platform for HR teams, integrating LLM-based question generation and AI-assisted proctoring features including tab-switch detection, camera monitoring, automated screenshots, and candidate evaluation reports.",
      "Built the candidate assessment dashboard using ReactJS, Tailwind CSS, and MongoDB."
    ]
  }
];

export const projects = [
  {
    id: "educalria",
    title: "Educalria – AI Video-to-Knowledge Pipeline",
    period: "2026",
    techTags: ["Python", "Flask", "React", "Qdrant", "RAG", "NLP"],
    description: "A Knowledge Graph-driven pipeline that identifies and merges semantically relevant segments across multiple educational videos into a single concept-focused video.",
    bullets: [
      "Designed TOPSIS multi-criteria evaluation (relevance, quality, delivery) to select optimal topic segments.",
      "Built Qdrant vector-search assistant to generate grounding notes & answer transcript queries in real-time."
    ],
    github: null,
    liveUrl: null,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "local-tts",
    title: "Local Mobile TTS Inference (Inflect-Nano-v1)",
    period: "2026",
    techTags: ["Java", "Android", "ONNX Runtime Mobile", "FastAPI", "Python"],
    description: "Android local Text-to-Speech (TTS) engine executing acoustic encoder, duration regulator, and vocoder on-device for 24kHz realtime speech synthesis.",
    bullets: [
      "Integrated lightweight Inflect-Nano-v1 ONNX model with ONNX Runtime Mobile.",
      "Hybrid FastAPI G2P service pipeline measuring sub-second on-device acoustic latency."
    ],
    github: "https://github.com/seerin-m/Local-TTS-Mobile-Inference-Inflect-Nano-v1.git",
    liveUrl: null,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nova-os",
    title: "Nova OS – Intelligent AI Voice Assistant",
    period: "2025",
    techTags: ["LiveKit", "Gemini Realtime API", "Tkinter", "PyAutoGUI", "BeautifulSoup"],
    description: "Desktop assistant delivering low-latency voice interaction for system automation, website focus-mode blocking, news aggregation, and automated scheduling.",
    bullets: [
      "Integrated LiveKit Agents + Gemini Realtime API for natural voice conversation.",
      "Built productivity analytics dashboard with NewsAPI and WolframAlpha services."
    ],
    github: null,
    liveUrl: null,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop"
  }
];

export const certifications = [
  {
    title: "Programming, Data Structures and Algorithms Using Python",
    issuer: "NPTEL",
    date: "2025",
    link: "https://drive.google.com/file/d/1fdeSHxRx7p5eO_1_7cC_Xyp3ZYlj-6S4/view?usp=sharing"
  },
  {
    title: "Honours Diploma in Computer Application (HDCA)",
    issuer: "CSC Chennai",
    date: "2023",
    link: "https://drive.google.com/file/d/1XFtmxqXIhw5cMmptPhWSUiWFeO0uVvwU/view?usp=sharing"
  },
  {
    title: "AI/ML Engineering Workshop",
    issuer: "GenOrcasX",
    date: "2025",
    link: "https://drive.google.com/file/d/1788VLA_ZtBo1x6mTJTroixv5V2hKW3qm/view?usp=sharing"
  }
];

export const defaultBlogs = [
  {
    id: "dsp-prompting",
    title: "What is Directional Stimulus Prompting?",
    date: "2026-06-15",
    excerpt: "Exploring how small policy models direct large language models toward desired outputs efficiently without expensive fine-tuning.",
    content: `Directional Stimulus Prompting (DSP) is a novel framework that uses a small, tunable policy model to generate directional hints or stimuli for each input query. These stimuli guide a black-box LLM (such as GPT-4 or Gemini) toward specific desired behavior.

In our experiments at F22 Labs, DSP allowed us to steer output generation quality dramatically while maintaining low API cost overhead. By training a lightweight policy network on task-specific objective signals, we can improve task accuracy across summarization, code generation, and structured extractions.`,
    author: "M Seerin",
    readTime: "4 min read"
  },
  {
    id: "lighton-ocr",
    title: "How Good is LightOnOCR-2-1B for Document OCR and Parsing?",
    date: "2026-05-20",
    excerpt: "Benchmarking LightOnOCR-2-1B against classical OCR tools for complex document parsing, table structures, and key-value extraction.",
    content: `Vision-language OCR models have evolved beyond traditional bounding box bounding tools. LightOnOCR-2-1B represents a lightweight 1B parameter vision-text model tailored for high-accuracy document parsing.

Key benchmarks performed during our research:
1. Complex Table Extraction: High fidelity output in Markdown format.
2. Low-Resolution Scans: Robust recognition under noisy illumination.
3. Speed vs. Accuracy: Running inference via vLLM achieved sub-200ms processing times per page, making it ideal for edge deployment.`,
    author: "M Seerin",
    readTime: "6 min read"
  },
  {
    id: "openai-pii-filter",
    title: "OpenAI Privacy Filter: How to Detect and Redact PII Locally",
    date: "2026-04-10",
    excerpt: "Architecting a local preprocessing privacy filter to mask names, phone numbers, and sensitive identifiers before cloud LLM transmission.",
    content: `Ensuring strict data privacy when deploying cloud AI models is paramount. We implemented a local PII (Personally Identifiable Information) masking engine using SpaCy and Regex filters.

By redacting entities prior to making API calls and restoring them seamlessly upon receiving completion payloads, candidates and enterprise users remain fully protected without degrading prompt understanding.`,
    author: "M Seerin",
    readTime: "5 min read"
  }
];
