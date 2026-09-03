// Add each new daily article at the TOP of this array.
// Keep every `id` unique and use the YYYY-MM-DD date format.
const blogPosts = [
  {
    id: "getting-started-with-data-analysis",
    title: "Getting Started with Data Analysis",
    excerpt:
      "A practical beginner-friendly roadmap for turning raw information into useful business insights.",
    image: "/assets/blog/blog1.png",
    date: "2026-08-25",
    readTime: "5 min read",
    category: "Data Analytics",
    content: [
      "Data analysis is the process of collecting, cleaning and studying information to discover patterns that support better decisions.",
      "A strong beginner workflow starts with understanding the problem, inspecting the dataset, handling missing values and exploring relationships through clear visualizations.",
      "Python, Pandas, SQL and Excel are excellent tools to begin with. Focus on solving small real-world problems consistently instead of trying to learn every tool at once."
    ]
  },
  {
    id: "why-data-cleaning-matters",
    title: "Why Data Cleaning Matters",
    excerpt:
      "Learn why clean, consistent data is the foundation of trustworthy analysis and machine-learning models.",
    image: "/assets/blog/blog2.png",
    date: "2026-08-24",
    readTime: "4 min read",
    category: "Data Science",
    content: [
      "Real-world datasets often contain missing values, duplicates, inconsistent formats and incorrect entries.",
      "Cleaning these issues improves the reliability of reports and prevents machine-learning models from learning misleading patterns.",
      "Before building a model, validate data types, remove unnecessary duplicates, document assumptions and check whether the final dataset still represents the original problem."
    ]
  },
  {
    id: "building-my-first-ai-chatbot",
    title: "Building My First AI Chatbot",
    excerpt:
      "Key lessons from developing a context-aware chatbot using Python, FastAPI, Llama and RAG.",
    image: "/assets/blog/blog3.png",
    date: "2026-08-23",
    readTime: "6 min read",
    category: "Artificial Intelligence",
    content: [
      "An effective website chatbot needs more than a language model. It also needs reliable context, clear instructions and a fast user experience.",
      "Retrieval-augmented generation helps the assistant answer from trusted website content instead of depending only on its pre-trained knowledge.",
      "The most important lesson was to build in stages: prepare the knowledge base, test retrieval, connect the model and finally improve the interface."
    ]
  },
  {
    id: "building-my-first-ai-chatbot",
    title: "Building My First AI Chatbot",
    excerpt:
      "Key lessons from developing a context-aware chatbot using Python, FastAPI, Llama and RAG.",
    image: "/assets/blog/blog3.png",
    date: "2026-08-23",
    readTime: "6 min read",
    category: "Artificial Intelligence",
    content: [
      "An effective website chatbot needs more than a language model. It also needs reliable context, clear instructions and a fast user experience.",
      "Retrieval-augmented generation helps the assistant answer from trusted website content instead of depending only on its pre-trained knowledge.",
      "The most important lesson was to build in stages: prepare the knowledge base, test retrieval, connect the model and finally improve the interface."
    ]
  }
];

export default blogPosts;
