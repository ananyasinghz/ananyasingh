export const featuredProjects = [
  {
    id: "synthetic-dataset",
    name: "Synthetic Dataset Generator",
    tags: ["AI"],
    problem:
      "Training and evaluation often need high-quality labeled data that is expensive or slow to collect.",
    approach:
      "LLM generation with quality scoring, semantic duplicate detection via SentenceTransformers, filtering, and regeneration into managed datasets.",
    stack: ["Python", "Flask", "React", "SQLite", "SentenceTransformers"],
    metric: "30% improvement in dataset consistency",
    url: "https://github.com/ananyasinghz/synthetic-dataset-generator",
  },
  {
    id: "lexiassist",
    name: "LexiAssist",
    tags: ["AI"],
    problem:
      "Legal and constitutional lookup is slow when answers must be grounded in long source documents.",
    approach:
      "Chunk constitutional text, embed with SentenceTransformers, retrieve via Pinecone, and answer with a context-aware RAG pipeline.",
    stack: ["Python", "FastAPI", "Pinecone", "SentenceTransformers", "RAG"],
    metric: "Lookup time reduced from minutes to seconds",
    url: "https://github.com/ananyasinghz",
  },
  {
    id: "dynamic-rag",
    name: "Dynamic RAG with Clarification",
    tags: ["Research", "AI"],
    problem:
      "Standard RAG fails when user queries are ambiguous and retrieval pulls the wrong context.",
    approach:
      "Clarification-driven query refinement, FAISS FlatL2 retrieval, dynamic knowledge acquisition, and context-aware Q&A — IEEE ICCSP 2026.",
    stack: ["RAG", "FAISS", "LLMs", "Wikipedia retrieval"],
    metric: "~80% of ambiguous queries resolved",
    url: "https://github.com/ananyasinghz",
  },
  {
    id: "fraud-detection",
    name: "AML / Credit Card Fraud Detection",
    tags: ["Data"],
    problem:
      "Extreme class imbalance (~0.18% fraud) makes accuracy misleading and misses costly false negatives.",
    approach:
      "Ensemble and sampling experiments with threshold tuning against a recall floor; evaluated with PR-AUC, ROC-AUC, and alert rate.",
    stack: ["Python", "scikit-learn", "SMOTE", "Random Forest"],
    metric: "95.9% recall on frozen test (71 of 74 fraud cases)",
    url: "https://github.com/ananyasinghz",
  },
  {
    id: "knowledge-graph",
    name: "Knowledge Graph + Node2Vec",
    tags: ["Research"],
    problem:
      "Unstructured textbook content is hard to search semantically without structured relationships.",
    approach:
      "NER and relation extraction into Neo4j, then Node2Vec graph embeddings for nearest-neighbor retrieval.",
    stack: ["Python", "NLP", "Neo4j", "Node2Vec"],
    metric: "18% improvement in nearest-neighbor retrieval accuracy",
    url: "https://github.com/ananyasinghz/Neo4j-KnowledgeGraph",
  },
  {
    id: "casavatech",
    name: "CasavaTech / Orfarm",
    tags: ["Systems"],
    problem:
      "E-commerce backend APIs and inventory/order workflows needed lower latency under real transactional load.",
    approach:
      "REST services with MySQL, query and index optimization, Dockerized services, and GCP (BigQuery, Cloud Run) for analytics and deploy.",
    stack: ["Node.js", "Express", "MySQL", "Docker", "GCP"],
    metric: "28% reduction in REST API response latency",
    url: "https://github.com/ananyasinghz",
  },
];

export const archiveProjects = [
  {
    name: "EcoHarvest",
    desc: "Food-waste reduction platform connecting donors and recipients.",
    url: "https://github.com/ananyasinghz/EcoHarvest",
  },
  {
    name: "VNEWS",
    desc: "Campus news, events, and bulletin platform.",
    url: "https://github.com/ananyasinghz/VNEWS",
  },
  {
    name: "Bail Reckoner",
    desc: "SIH legal decision-support prototype for bail-related workflows.",
    url: "https://github.com/ananyasinghz/Bail-Reckoner",
  },
  {
    name: "createyourQR",
    desc: "QR-code generator with live preview and download.",
    url: "https://github.com/ananyasinghz/createyourQR",
  },
  {
    name: "newsit",
    desc: "News aggregator with dynamic routing.",
    url: "https://github.com/ananyasinghz/newsit",
  },
  {
    name: "DetectionofAnomalies",
    desc: "ML-based system anomaly monitoring experiments.",
    url: "https://github.com/ananyasinghz/DetectionofAnomalies",
  },
  {
    name: "Pacman Clone",
    desc: "Classic maze game with ghost AI and scoring.",
    url: "https://github.com/ananyasinghz/pacman",
  },
  {
    name: "Fresh to Home",
    desc: "E-commerce frontend with product and cart flows.",
    url: "https://github.com/ananyasinghz/fresh-to-home",
  },
];

export const experience = [
  {
    role: "Software Development Intern",
    org: "CasavaTech",
    period: "May 2025 – July 2025",
    points: [
      "Built and optimized REST APIs for inventory, orders, and authentication on Node.js / Express / MySQL.",
      "Reduced API response latency by 28% through query and indexing work.",
      "Containerized services with Docker; used BigQuery and Cloud Run for analytics and deployment.",
    ],
  },
  {
    role: "Summer Research Intern",
    org: "VIT Chennai",
    period: "May 2025 – July 2025",
    points: [
      "Implemented a Neo4j knowledge graph from unstructured textbook content via NER and relation extraction.",
      "Applied Node2Vec embeddings for semantic nearest-neighbor retrieval — 18% accuracy improvement.",
    ],
  },
];

export const stackGroups = [
  {
    title: "Software",
    items: ["Python", "Java", "C++", "JavaScript", "Node.js", "Express", "FastAPI", "Flask", "React"],
  },
  {
    title: "Data",
    items: ["SQL", "MySQL", "PostgreSQL", "SQLite", "BigQuery", "ETL concepts", "Pandas"],
  },
  {
    title: "Cloud",
    items: ["GCP", "Cloud Run", "BigQuery", "Docker", "AWS (EC2, S3, IAM)"],
  },
  {
    title: "AI",
    items: ["RAG", "LLMs", "FAISS", "Pinecone", "SentenceTransformers", "Neo4j", "Node2Vec", "scikit-learn"],
  },
];

export const outcomes = [
  { value: "28%", label: "API latency reduction at CasavaTech" },
  { value: "18%", label: "Retrieval accuracy gain with Node2Vec" },
  { value: "~80%", label: "Ambiguous queries resolved via clarification RAG" },
];

export const FILTERS = ["All", "AI", "Data", "Systems", "Research"];

export const LINKS = {
  github: "https://github.com/ananyasinghz",
  linkedin: "https://linkedin.com/in/ananya-singh-21853628a",
  resume:
    "https://drive.google.com/file/d/1POWGESCmx9wZrnVClteDxsLeY_ZJuH04/view?usp=sharing",
};
