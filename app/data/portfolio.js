export const profile = {
  name: "Piyush Rawat",
  title: "AI / ML Engineer",
  tagline: "Crafting intelligent systems with Machine Learning, Deep Learning & NLP.",
  bio: [
    "I'm a Computer Science student specializing in Artificial Intelligence & Machine Learning at Lovely Professional University, Jalandhar. My passion lies at the intersection of data, algorithms, and real-world impact.",
    "From building real-time DDoS detection systems to creating NLP-powered file organizers, I thrive on turning complex problems into elegant, automated solutions. I work across the full ML pipeline — from data preprocessing and feature engineering to model deployment with FastAPI and Docker.",
    "When I'm not training models, I'm exploring MLOps practices, contributing to open source, and staying current with the latest breakthroughs in AI research."
  ],
  details: {
    location: "Jalandhar, Punjab, India",
    university: "Lovely Professional University",
    degree: "B.Tech CSE (AI & ML)",
    graduation: "June 2027",
    cgpa: "8.1 / 10"
  },
  contact: {
    email: "Piyu14923072@gmail.com",
    phone: "+91-6396323908",
    linkedin: "https://linkedin.com/in/piyush-rawat006",
    github: "https://github.com/PiyushRw"
  }
};

export const experience = [
  {
    id: 1,
    role: "AI Intern",
    company: "InternsElite",
    type: "Remote",
    period: "Dec 2024 – Mar 2025",
    bullets: [
      "Built an NLP pipeline to extract, preprocess, and analyze financial data from SEC 10-K and 10-Q reports of multinational corporations",
      "Developed machine learning models to predict financial trends and business performance using extracted textual and numerical features",
      "Automated document parsing, feature engineering, and report summarization to improve financial analysis efficiency",
      "Applied text preprocessing, TF-IDF vectorization, and Transformers (BERT/FinBERT) for semantic document understanding"
    ],
    tags: ["Python", "NLP", "Scikit-learn", "Pandas", "NumPy", "Transformers", "Matplotlib", "TF-IDF", "FinBERT"]
  },
  {
      id: 2,
      role: "ML Intern",
      company: "Coincent",
      type: "Remote",
      period: "Jun 2024 – Aug 2024",
      bullets: [
        "Developed an NLP-based movie recommendation system using movie descriptions, genres, and user preferences to generate personalized recommendations",
        "Applied text preprocessing, Bag of Words (CountVectorizer), and cosine similarity to identify semantically similar movies",
        "Optimized recommendation quality through feature engineering and model evaluation, improving relevance and search efficiency",
        "Built scalable data pipelines for model training, evaluation, and automated retraining workflows"
      ],
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLTK", "Bag of Words", "CountVectorizer", "Cosine Similarity", "Matplotlib"]
    }
];

export const projects = [
  {
    id: 1,
    title: "Agentic RAG System",
    subtitle: "Autonomous Query Rewriting & Retrieval",
    period: "Jan 2026 – Feb 2026",
    description: "Developed an agentic RAG system with autonomous query rewriting, retrieval, and reflection using the Google Gemini API. Implemented semantic document retrieval using MiniLM embeddings and FAISS for efficient vector search. Built support for multi-format document ingestion with conversation memory and SQLite-based persistence.",
    highlight: "Multi-format RAG",
    tags: ["Python", "Google Gemini API", "FAISS", "Sentence-Transformers (MiniLM)", "CustomTkinter", "SQLite"]
  },
  {
    id: 2,
    title: "AI File Organizer",
    subtitle: "Multimodal Semantic File Classification",
    period: "Aug 2025 – Sep 2025",
    description: "Developed a multimodal AI system using Whisper, EasyOCR, and Sentence-Transformers for semantic file organization. Built a semantic search engine with 95% accuracy using MiniLM embeddings and spaCy for context-aware sorting. Automated categorization for diverse file types through real-time content indexing and NLP-driven topic modeling.",
    highlight: "95% accuracy",
    tags: ["Python", "Sentence-Transformers (MiniLM)", "CustomTkinter", "NumPy", "NLP", "Whisper", "EasyOCR"]
  },
  {
    id: 3,
    title: "AI-Driven Network Monitor with DDoS Detection",
    subtitle: "Real-time Traffic Analysis & Mitigation",
    period: "Feb 2025 – Sep 2025",
    description: "Architected a real-time monitoring suite using psutil and pyqtgraph for high-frequency traffic visualization and analysis. Deployed an ensemble ML model (Isolation Forest, SVM, LOF) to identify and flag DDoS attack signatures in real-time. Built a cross-platform mitigation engine to automatically block malicious IPs through OS-level Firewall APIs.",
    highlight: "Real-time DDoS Detection",
    tags: ["Python", "Scikit-learn", "PyQt5", "psutil", "pyqtgraph", "Firewall APIs", "Isolation Forest", "SVM", "LOF"]
  }
];

export const skills = [
  {
    category: "Languages",
    icon: "</>",
    items: ["C++", "Python"]
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚙",
    items: ["TensorFlow", "Keras", "Scikit-learn", "Transformers", "NLTK", "FastAPI", "LangChain"]
  },
  {
    category: "Tools & Platforms",
    icon: "⛓",
    items: ["MySQL", "Pandas", "NumPy", "Matplotlib", "Docker", "Git", "GitHub"]
  },
  {
    category: "Soft Skills",
    icon: "◈",
    items: ["Problem-Solving", "Team Player", "Adaptability"]
  }
];

export const certifications = [
  {
    title: "Coursera Google AI Essentials",
    issuer: "Certificate",
    year: "2025"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Certification",
    year: "2025"
  },
  {
    title: "Oracle Fusion AI Agent Studio Certified Foundations Associate – Rel 1",
    issuer: "Certification",
    year: "2025"
  }
];

export const education = [
  {
    id: 1,
    category: "University",
    icon: "🎓",
    items: [
      "Lovely Professional University — B.Tech CSE (CGPA: 8.1) | Aug 2023 – Present"
    ]
  },
  {
    id: 2,
    category: "Intermediate",
    icon: "🏫",
    items: [
      "Army Public School No.2 — Intermediate (83%) | Apr 2022 – Mar 2023"
    ]
  },
  {
    id: 3,
    category: "Matriculation",
    icon: "🏫",
    items: [
      "Army Public School No.2 — Matriculation (83%) | Apr 2020 – Mar 2021"
    ]
  }
];