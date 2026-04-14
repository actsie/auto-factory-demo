export interface Report {
  id: string;
  company: string;
  logo: string;
  logoNeedsBg?: boolean; // true = add white background, false = transparent
  url: string;
  industry: string;
  pages: number;
  hostingCost: number;
  waitDays: number;
  aiExamples: {
    prompt1: string;
    result1: string;
    prompt2: string;
    result2: string;
    prompt3: string;
    result3: string;
  };
}

export const reports: Report[] = [
  {
    id: "magnettu",
    company: "Magnettu",
    logo: "/assets/reports/magnettu/magnettu.png",
    logoNeedsBg: false,
    url: "https://magnettu.com",
    industry: "Marketing & Tech Agency",
    pages: 18,
    hostingCost: 48,
    waitDays: 4,
    aiExamples: {
      prompt1: "Rewrite our homepage headline 'Gestiona el contenido...' to speak directly to founder pain points",
      result1: "✓ 3 founder-focused headlines in English + Spanish",
      prompt2: "Change our CTA from 'Solicitar demo' to something more action-oriented",
      result2: "✓ 5 CTA options ready to test",
      prompt3: "Update our service descriptions — focus on time saved vs tools required",
      result3: "✓ Service benefits rewritten + ROI paragraph added"
    }
  },
  {
    id: "rad-collab",
    company: "Rad Collab",
    logo: "/assets/reports/rad-collab/logo.svg",
    logoNeedsBg: false,
    url: "https://radcollab.com",
    industry: "Creative Collaboration",
    pages: 14,
    hostingCost: 42,
    waitDays: 3,
    aiExamples: {
      prompt1: "Our headline 'Hey, we're Rad' is too casual — make it highlight what we actually do",
      result1: "✓ 3 benefit-focused headlines ready",
      prompt2: "Replace 'Get Started' CTA with something more specific to our service",
      result2: "✓ 4 CTA options ready to test",
      prompt3: "Rewrite our tagline about design & social content — make it clearer",
      result3: "✓ Tagline rewritten + 2 alternative versions"
    }
  },
  {
    id: "seed-through-series",
    company: "Seed Through Series",
    logo: "/assets/reports/seed-through-series/seedthroughseries.png",
    logoNeedsBg: true,
    url: "https://seedthroughseries.com",
    industry: "Startup Advisory",
    pages: 16,
    hostingCost: 45,
    waitDays: 5,
    aiExamples: {
      prompt1: "Our 'Get In Touch' CTA is generic — make it specific to fundraising stages",
      result1: "✓ 3 stage-specific CTAs with placement notes",
      prompt2: "Make our about section feel less corporate — add founder story elements",
      result2: "✓ Rewritten about section + 1 founder narrative version",
      prompt3: "Create FAQ for common founder questions about Series A timing",
      result3: "✓ 8 FAQs with answers ready to publish"
    }
  },
  {
    id: "structured-consulting",
    company: "Structured Consulting",
    logo: "/assets/reports/structured-consulting/logo.svg",
    logoNeedsBg: false,
    url: "https://structuredconsulting.com",
    industry: "Strategy Consulting",
    pages: 12,
    hostingCost: 38,
    waitDays: 4,
    aiExamples: {
      prompt1: "Our headline 'Keep More of What You Win' is vague — add specifics on settlement types",
      result1: "✓ 3 headlines with settlement focus ready",
      prompt2: "Rewrite service descriptions without consultant jargon — focus on outcomes",
      result2: "✓ All service descriptions rewritten",
      prompt3: "Update our CTA from 'Keep More' to something specific per service area",
      result3: "✓ 4 service-specific CTAs ready to test"
    }
  },
  {
    id: "bocg-ventures",
    company: "BoCG Ventures",
    logo: "/assets/reports/bocg-ventures/bocg-ventures.png",
    logoNeedsBg: true,
    url: "https://bocgventures.com",
    industry: "Venture Capital & Private Equity",
    pages: 12,
    hostingCost: 65,
    waitDays: 4,
    aiExamples: {
      prompt1: "Replace 'A Leading Antifragile Firm' headline with language founders actually understand — focus on what we do, not philosophy",
      result1: "✓ 3 founder-focused headlines emphasizing hands-on partnership",
      prompt2: "Rewrite our value propositions section — replace 'antifragile' jargon with concrete founder benefits and examples",
      result2: "✓ All 5 value props rewritten with founder context + 2 supporting case snippets",
      prompt3: "Make our partnership model clearer — who we work with, what we actually provide, how founders reach us",
      result3: "✓ Partnership overview rewritten + updated CTA + founder testimonial section ready"
    }
  },
  {
    id: "the-sales-doctor",
    company: "The Sales Doctor",
    logo: "/assets/reports/the-sales-doctor/logo.svg",
    logoNeedsBg: true,
    url: "https://www.thesalesdocrx.com/",
    industry: "Sales Training & Enablement",
    pages: 18,
    hostingCost: 75,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the headline from 'Revenue health for a modern sales team' to something about what we actually solve — like fixing rep turnover",
      result1: "✓ Headline updated to 'Stop losing reps. Build teams that stay.'",
      prompt2: "Group the 4 services by the problem they solve instead of listing them all equally",
      result2: "✓ Services reorganized into 3 problem-focused groups",
      prompt3: "Change each service's 'Learn more' button to show what they'll actually get",
      result3: "✓ Button text updated: Bootcamps → 'See bootcamp demo', Consulting → 'Get proposal', Media → 'View sample'"
    }
  },
  {
    id: "vom",
    company: "Vom",
    logo: "/assets/reports/vom/logo.jpeg",
    logoNeedsBg: false,
    url: "https://www.vomdecision.com/",
    industry: "FinTech / Decision Intelligence",
    pages: 1,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the headline from 'The decision platform for fast-moving risk strategies' to something about updating policies faster",
      result1: "✓ Headline updated to 'Update risk policies in hours, not weeks'",
      prompt2: "Group the 5 use cases into 3 sections by persona instead of equal tabs",
      result2: "✓ Use cases reorganized into 3 visible persona sections",
      prompt3: "Change the 'Book a demo' button to 'See policy updates live' on the hero section",
      result3: "✓ CTA updated across hero and use cases section"
    }
  },
  {
    id: "active-membranes",
    company: "Active Membranes",
    logo: "/assets/reports/active-membranes/logo.jpeg",
    logoNeedsBg: false,
    url: "https://activemembrane.com",
    industry: "CleanTech / Water Treatment",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with our 75–85% water recovery rate instead of the general tagline",
      result1: "✓ Hero updated to 'Recover 75–85% of Produced Water — Without Chemicals'",
      prompt2: "Add a short section on oil & gas applications between the technology section and the contact form",
      result2: "✓ Oil & Gas use case block added with key recovery stats and cost reduction data",
      prompt3: "Change 'Join Now' to 'Request a Sample'",
      result3: "✓ CTA changed from 'Join Now' to 'Request a Sample' in hero and nav"
    }
  },
  {
    id: "aethero",
    company: "Aethero",
    logo: "/assets/reports/aethero/logo.svg",
    logoNeedsBg: true,
    url: "https://aethero.com",
    industry: "Space Tech / Edge Computing",
    pages: 15,
    hostingCost: 65,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to focus on our edge computing hardware, not just 'space data infrastructure'",
      result1: "✓ Hero updated to 'Edge Computing Hardware Built for Space'",
      prompt2: "Add insurance and agriculture as featured use cases with short descriptions in the applications section",
      result2: "✓ Insurance and Agriculture cards added to the Extensive Applications section with 2-line descriptions",
      prompt3: "Update 'Build. Sync. Experiment. Learn.' to explain what each step actually means",
      result3: "✓ Section updated with one-line descriptions under each capability heading"
    }
  },
  {
    id: "aikido-technologies",
    company: "Aikido Technologies",
    logo: "/assets/reports/aikido-technologies/logo.svg",
    logoNeedsBg: true,
    url: "https://aikidotechnologies.com",
    industry: "Data Center Infrastructure",
    pages: 15,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero to lead with deployment speed instead of scale — something about 10x faster builds",
      result1: "✓ Hero updated to 'Data Centers Deployed 10x Faster. At Gigawatt Scale.'",
      prompt2: "Add a 3-stage process section showing Factory Build → On-Site Assembly → 24/7 Monitoring",
      result2: "✓ Modular build process section added between the technology overview and contact form",
      prompt3: "Change 'Get In Touch' to 'Start Your Build'",
      result3: "✓ CTA changed from 'Get In Touch' to 'Start Your Build' in nav and hero section"
    }
  },
  {
    id: "alchemist-material",
    company: "Alchemist Material Inc.",
    logo: "/assets/reports/alchemist-material/logo.avif",
    logoNeedsBg: false,
    url: "https://alchemist-material.com",
    industry: "CleanTech / Green Hydrogen",
    pages: 8,
    hostingCost: 48,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add an English-language hero section for international partnership outreach",
      result1: "✓ English hero added: 'Distributed Waste-to-Hydrogen. At Any Scale.'",
      prompt2: "Update the Our Strengths section to include our cost advantage and recovery metrics",
      result2: "✓ Strengths section updated with specific performance data and cost comparison",
      prompt3: "Add a partnership inquiry form in English above the footer",
      result3: "✓ English contact form added targeting international partnerships and licensing"
    }
  },
  {
    id: "amptab",
    company: "AMPTAB, Inc.",
    logo: "/assets/reports/amptab/logo.jpeg",
    logoNeedsBg: false,
    url: "https://amptab.com",
    industry: "Sales & Marketing Software",
    pages: 15,
    hostingCost: 65,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the headline from 'Your Omni-Channel Sales & Marketing Platform for B2B/B2C' to something about connecting brands and retailers faster",
      result1: "✓ Headline updated to 'Connect Brands, Reps, and Retailers — All in One Platform'",
      prompt2: "Add a section above the pricing packages showing the 3 types of customers we serve",
      result2: "✓ New section added with Brands, Reps, Retailers cards positioned before the pricing tiers",
      prompt3: "Change the 'Free Consult' button to 'See How It Works' on the hero",
      result3: "✓ CTA changed from 'Free Consult' to 'See How It Works' in hero and nav"
    }
  },
  {
    id: "autotext-ai",
    company: "AutoText AI",
    logo: "/assets/reports/autotext-ai/logo.avif",
    logoNeedsBg: false,
    url: "https://autotext.app",
    industry: "AI / Social Media Marketing",
    pages: 8,
    hostingCost: 48,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero from 'Automate Your Social Media Marketing with AutoText AI' to something that leads with time saved",
      result1: "✓ Hero updated to 'Post to Every Platform in Minutes — Not Hours'",
      prompt2: "Add a 3-step How It Works section: Enter Prompt → Generate → Post",
      result2: "✓ Visual 3-step section added with icons and one-line descriptions after the hero",
      prompt3: "Change 'Get Started' to 'Try It Free' across the hero and pricing section",
      result3: "✓ CTA changed from 'Get Started' to 'Try It Free' in hero, nav, and pricing cards"
    }
  },
  {
    id: "azalea-robotics",
    company: "Azalea Robotics",
    logo: "/assets/reports/azalea-robotics/logo.svg",
    logoNeedsBg: true,
    url: "https://azalearobotics.com",
    industry: "Robotics / Airport Operations",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero to lead with 'Drop In and See Benefits from Day 1' instead of the general tagline",
      result1: "✓ Hero updated to 'Drop In. See Benefits From Day 1.'",
      prompt2: "Add a stats section showing turnaround improvement and injury reduction numbers",
      result2: "✓ ROI section added: 3x faster baggage turnaround, 40% fewer ramp injuries",
      prompt3: "Change 'Pilot Azalea' to 'Request a Demo'",
      result3: "✓ CTA changed from 'Pilot Azalea' to 'Request a Demo' in nav and hero"
    }
  },
  {
    id: "bundled",
    company: "Bundled",
    logo: "/assets/reports/bundled/logo.png",
    logoNeedsBg: false,
    url: "https://gobundled.com",
    industry: "FinTech / Consumer Subscriptions",
    pages: 15,
    hostingCost: 65,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with the dollar amount saved, not the percentage — something like '$400+ a year'",
      result1: "✓ Hero updated to 'Save $400+ a Year on Streaming — Without Canceling Anything'",
      prompt2: "Move the savings calculator above the bundle options so people see it before choosing a plan",
      result2: "✓ Calculator section repositioned above bundle options in the page flow",
      prompt3: "Change 'Join Waitlist' to 'Calculate My Savings'",
      result3: "✓ CTA changed from 'Join Waitlist' to 'Calculate My Savings' in hero and nav"
    }
  },
  {
    id: "cannformatics",
    company: "Cannformatics",
    logo: "/assets/reports/cannformatics/logo.avif",
    logoNeedsBg: false,
    url: "https://cannformatics.com",
    industry: "BioTech / Medical Cannabis",
    pages: 10,
    hostingCost: 52,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero from 'Personalizing Medical Cannabis Treatment' to something that leads with the biomarker angle",
      result1: "✓ Hero updated to 'Cannabis Treatment That Fits Your Biology'",
      prompt2: "Add a short explainer section for the C-Res™ biomarker above the study signup form",
      result2: "✓ C-Res™ explainer added: what it measures, how it guides personalized treatment selection",
      prompt3: "Simplify 'Sign Up for Dementia Study Updates' to 'Join the Study'",
      result3: "✓ CTA changed from 'Sign Up for Dementia Study Updates' to 'Join the Study' in hero and form"
    }
  },
  {
    id: "capix",
    company: "Capix",
    logo: "/assets/reports/capix/logo.jpeg",
    logoNeedsBg: false,
    url: "https://capix.ai",
    industry: "AI / B2B Sales Intelligence",
    pages: 8,
    hostingCost: 48,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change 'Your autonomous sourcing copilot' to something that leads with speed — how fast you can find targets",
      result1: "✓ Hero updated to 'Find Your Next 100 Targets in Minutes'",
      prompt2: "Add an M&A deal sourcing use case above the existing examples",
      result2: "✓ M&A use case added: intent search → ranked buyer matches → continuous monitoring",
      prompt3: "Change 'Try Capix' to 'Start Sourcing'",
      result3: "✓ CTA changed from 'Try Capix' to 'Start Sourcing' in hero and nav"
    }
  }
];
