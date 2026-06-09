// ============================================================
// SITE CONFIGURATION — edit all text content here
// ============================================================

const SITE_CONFIG = {
  // ── Brand ────────────────────────────────────────────────
  brand: {
    name: "AE Digital",
    tagline: "Your #1 Offshore SEO Consultant",
    logo: "AE",
    nav: ["Services", "Assessment", "Contact"],
  },

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    headline: "Rank higher.",
    headlineAccent: "Grow organically.",
    subheadline:
      "100% white hat SEO delivered with complete transparency — ethical strategies that drive sustainable rankings without putting your site at risk from Google penalties.",
    cta1: "Book a Free Consultation",
    cta2: "View Services",
  },

  // ── Section 01: SEO Services ─────────────────────────────
  websitePackages: {
    sectionNumber: "01",
    title: "SEO Services",
    subtitle: "Ethical, results-driven SEO tailored to your business goals.",
    packages: [
      {
        name: "Local SEO",
        price: "$99",
        monthly: "$99/mo",
        popular: false,
        description: "Commitment to dominate your local market and attract nearby customers.",
        features: [
          "Google Business Profile optimization",
          "Local keyword research & targeting",
          "Local landing page creation",
          "Build local citations",
          "Review strategy & monitoring",
          "Monthly performance report",
        ],
      },
      {
        name: "Growth SEO",
        price: "$299",
        monthly: "$299/mo",
        popular: true,
        description: "Comprehensive SEO with commitment to increase organic traffic and lead growth.",
        features: [
          "Full technical SEO audit",
          "Google Ads setup & management",
          "In-depth keyword research",
          "On-page & off-page optimization",
          "Content creation & optimization",
          "Link building campaigns",
          "Monthly performance report",
        ],
      },
      {
        name: "WEBSITE + SEO",
        price: "$1200+",
        monthly: "$1200+/mo",
        popular: false,
        description: "Advanced SEO strategy + custom built website for highly competitive industries.",
        features: [
          "New Custom-made Website",
          "Website Maintenance & Security",
          "Organic SEO + Local Content",
          "Google Business Profile management",
          "Advanced Link Building",          
          "Performance Tracking",
          "Quarterly Strategy Sessions",
        ],
      },
    ],
    cta: "Discuss My SEO Needs",
  },

  // ── Section 04: SEO Audit & Strategy ────────────────────
  assessment: {
    sectionNumber: "04",
    title: "SEO Audit & Strategy",
    subtitle: "One-time investment. Actionable clarity.",
    price: "$499",
    description:
      "A comprehensive deep-dive into your current SEO performance — delivering a prioritized roadmap to outrank competitors and drive sustainable organic growth.",
    benefits: [
      {
        num: "01",
        title: "Keyword Opportunity Analysis",
        body: "Identify high-intent keywords your customers are actively searching for right now.",
      },
      {
        num: "02",
        title: "Competitor Gap Analysis",
        body: "See exactly how top competitors rank and discover the gaps you can exploit.",
      },
      {
        num: "03",
        title: "Technical SEO Audit",
        body: "Full crawl of your site to uncover errors, speed issues, and structural problems.",
      },
      {
        num: "04",
        title: "On-Page Optimization", 
               body: "Provide content briefs, fix issues in meta tags, headings, and internal linking structure.",
      },
      {
        num: "05",
        title: "Strategy Consultation",
        body: "60-minute session to walk through findings and build your SEO action plan.",
      },
    ],
    cta: "Book Your SEO Audit",
  },

  // ── Section 05: White Hat SEO Approach ──────────────────
  crm: {
    sectionNumber: "05",
    title: "White Hat SEO Approach",
    subtitle: "Sustainable rankings. Zero penalties.",
    description:
      "Every strategy follows Google's guidelines — building genuine authority that lasts, not shortcuts that put your site at risk.",
    features: [
      { icon: "✅", title: "100% White Hat Techniques", body: "Only ethical, Google-approved SEO methods — protecting your site from algorithm penalties." },
      { icon: "🔍", title: "Data-Driven Decisions", body: "Every recommendation backed by thorough research, analysis, and real performance data." },
      { icon: "📋", title: "Full Transparency", body: "Complete campaign visibility — you always know exactly what's being done and why." },
      { icon: "🛡️", title: "Risk-Free Optimization", body: "No spammy tactics, no link farms, no shortcuts that could harm your hard-earned rankings." },
    ],
    comparison: {
      headers: ["Approach", "Black Hat SEO", "AE Digital"],
      rows: [
        ["Techniques Used", "Risky shortcuts", "100% white hat"],
        ["Google Penalty Risk", "Very high", "Zero risk"],
        ["Results Longevity", "Short-lived", "Long-lasting"],
        ["Campaign Reporting", "Vague & sporadic", "Full transparency"],
        ["Client Support", "Set and forget", "Ongoing partnership"],
      ],
    },
  },

  // ── Why Choose AE Digital ─────────────────────────────
  whyUs: {
    title: "Why Choose AE Digital",
    subtitle: "Ethical SEO. Transparent results. Genuine value.",
    cards: [
      {
        icon: "✅",
        title: "100% Ethical Practices",
        body: "White hat SEO only — your site succeeds without the risk of Google penalties.",
      },
      {
        icon: "💎",
        title: "Value for Money",
        body: "Premium SEO services at honest, competitive rates with no hidden fees or surprises.",
      },
      {
        icon: "📊",
        title: "Complete Transparency",
        body: "Full campaign visibility and comprehensive reporting — you always know exactly what's happening.",
      },
      {
        icon: "🤝",
        title: "Client-First Commitment",
        body: "Dedicated to your success — scheduled delivery, thorough analysis, and post-project support.",
      },
    ],
  },

  // ── Consultation Form ─────────────────────────────────────
  form: {
    title: "Let's Grow Your Organic Traffic",
    subtitle:
      "Book a free 30-minute consultation and discover how AE Digital can help your business rank higher.",
    steps: [
      { label: "Contact Info", num: "01" },
      { label: "Services", num: "02" },
      { label: "Project Details", num: "03" },
    ],
    services: ["Local SEO", "On-Page SEO", "Technical SEO", "Content Strategy", "Link Building", "SEO Audit"],
    budgets: ["Under $500/mo", "$500–$1,000/mo", "$1,000–$2,000/mo", "$2,000+/mo", "One-time project"],
    timelines: ["ASAP", "1–3 months", "3–6 months", "Flexible"],
    submitCta: "Request Consultation",
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    tagline: "Ethical SEO. Transparent results.",
    links: ["Services", "Assessment", "Contact"],
    legal: "© 2026 AE Digital. All rights reserved.",
  },
};
