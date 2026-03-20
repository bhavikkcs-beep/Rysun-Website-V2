export const sitemap = {
  Capabilities: {
    AI: {
      Services: [
        "AI Strategy, Governance & Transformation",
        "AI Architecture & Engineering",
        "Generative AI & Agentic Systems",
        "Applied AI Solutions Development",
        "Industry AI Accelerator Development"
      ],
      Solutions: [
        "Intelligent Virtual Assistants",
        "Document Intelligence Automation",
        "Enterprise Knowledge Intelligence",
        "Predictive Intelligence Platforms",
        "Visual Intelligence Systems",
        "Generative AI Productivity Solutions"
      ]
    },
    Data: {
      Services: [
        "Data Strategy, Governance & Advisory",
        "Data Architecture & Platforms",
        "Data Engineering & Integration",
        "Data Modernization & Migration",
        "Analytics & Business Intelligence",
        "Data Product Engineering"
      ],
      Solutions: [
        "Enterprise Data Platforms",
        "Customer Data Intelligence Platforms",
        "Real-Time Data Intelligence",
        "Advanced Analytics Platforms",
        "Data Governance & Compliance Platforms",
        "Data Application & Product Platforms"
      ]
    },
    Digital: {
      Services: [
        "Digital Strategy & Transformation",
        "Experience & Product Innovation",
        "Data, AI & Intelligent Automation",
        "Digital Platforms & Engineering",
        "Cloud, Security & Infrastructure",
        "Future of Work & Digital Workplace"
      ],
      Solutions: [
        "Digital Strategy & Transformation",
        "Experience & Product Innovation",
        "Data, AI & Intelligent Automation",
        "Digital Platforms & Engineering",
        "Cloud, Security & Infrastructure",
        "Future of Work & Digital Workplace"
      ]
    }
  },
  Industries: {
    "Retail & E-Commerce": [
      "Customer Experience Intelligence",
      "Visual Retail Intelligence",
      "Retail Operations Intelligence",
      "Generative AI for Commerce",
      "Customer Data Platforms",
      "Retail Data Platforms",
      "Retail Analytics Platforms"
    ],
    "Healthcare & Life Sciences": [
      "Clinical Intelligence",
      "Healthcare Document Intelligence",
      "Patient Engagement AI",
      "Hospital Operations Intelligence",
      "Healthcare Data Platforms",
      "Healthcare Analytics",
      "Healthcare Data Modernization"
    ],
    "High-Tech": [
      "AI-Powered Product Intelligence",
      "GenAI for Software Platforms",
      "Intelligent Automation Platforms",
      "Product Data Platforms",
      "Product Analytics"
    ],
    "Financial Services": [
      "Intelligent Banking",
      "Fraud & Risk Intelligence",
      "Financial Document Intelligence",
      "Banking Data Platforms",
      "Financial Analytics Platforms",
      "Financial Data Integration"
    ]
  },
  Insights: [
    "Impact Stories",
    "Rysun XChange",
    "Blogs",
    "Events",
    "News"
  ],
  Company: {
    "About Rysun": [],
    "Leadership": [],
    "Partnerships & Alliances": [
      "Adobe Silver Solution Partner",
      "AWS Partner",
      "Couchbase",
      "Google Cloud Platform",
      "Microsoft Solutions Partner"
    ],
    "Products": [
      "eCube",
      "ShopMate",
      "RevMate"
    ],
    "Careers": [
      "Life at Rysun",
      "Current Openings",
      "Submit Profile"
    ]
  }
};

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
