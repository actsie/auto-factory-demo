export interface Report {
  id: string;
  company: string;
  logo: string;
  logoNeedsBg?: boolean; // true = add white background, false = transparent
  url: string;
  industry: string;
  pages: number;
  hostingCost?: number;
  waitDays: number;
  opportunityFindings?: { label: string; body: string }[];
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
    id: "cardinal-biocraft",
    company: "Cardinal Biocraft",
    logo: "/assets/reports/cardinal-biocraft/logo.svg",
    logoNeedsBg: false,
    url: "https://cardinalbiocraft.com",
    industry: "Synthetic Biology / Biotech",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero from 'Innovative Platform for Engineering Microbial Cells' to something that leads with what the cells produce",
      result1: "✓ Hero updated to 'Engineering Microbes That Make the Molecules You Need'",
      prompt2: "Reorder the three platform steps — Understand, Rewire, Make — so each one has a one-line outcome below it",
      result2: "✓ Platform section updated with outcome lines under each step",
      prompt3: "Change 'Join the Team' to 'See Open Roles'",
      result3: "✓ CTA changed from 'Join the Team' to 'See Open Roles' in hero and nav"
    }
  },
  {
    id: "cisterna-biologics",
    company: "Cisterna Biologics",
    logo: "/assets/reports/cisterna-biologics/logo.svg",
    logoNeedsBg: false,
    url: "https://cisternabx.com",
    industry: "Biotech / RNA Therapeutics",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with what SPECC solves, not just what it is",
      result1: "✓ Hero updated to 'RNA That's Purer, Faster, and Ready to Scale'",
      prompt2: "Add a short section under 'Why does RNA purity matter?' that explains the downstream impact on patient outcomes",
      result2: "✓ Downstream impact callout added connecting purity to therapeutic efficacy",
      prompt3: "Change 'Learn More' to 'Request a Sample'",
      result3: "✓ CTA changed from 'Learn More' to 'Request a Sample' in hero and technology section"
    }
  },
  {
    id: "clear-current",
    company: "Clear Current",
    logo: "/assets/reports/clear-current/logo.svg",
    logoNeedsBg: false,
    url: "https://clearcurrent.ai",
    industry: "AI / Energy Management",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'Energy management for the AI age' to something that leads with the invoice variance detection",
      result1: "✓ Hero updated to 'Identify Utility Invoice Errors Instantly — and Reclaim the Overspend'",
      prompt2: "Add a section showing the 3 outcomes: Centralized Information → Informed Decisions → Identified Variances",
      result2: "✓ Outcome flow section added between hero and features",
      prompt3: "Change 'Get In Touch' to 'See a Demo'",
      result3: "✓ CTA changed from 'Get In Touch' to 'See a Demo' in hero and nav"
    }
  },
  {
    id: "crave-robotics",
    company: "Crave Robotics",
    logo: "/assets/reports/crave-robotics/logo.svg",
    logoNeedsBg: false,
    url: "https://craverobotics.co",
    industry: "Robotics / Food Service Automation",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero from 'Making automated meals delicious and accessible' to something that leads with the 24/7 availability angle",
      result1: "✓ Hero updated to 'Hot Meals. 24/7. No Staff Required.'",
      prompt2: "Add a section showing how the vendor-managed model works — what operators don't have to do",
      result2: "✓ Turnkey operations section added: Crave handles install, restocking, and maintenance",
      prompt3: "Change 'Learn More' to 'Get a CraveBot'",
      result3: "✓ CTA changed from 'Learn More' to 'Get a CraveBot' in hero and product section"
    }
  },
  {
    id: "displayride",
    company: "DisplayRide Inc",
    logo: "/assets/reports/displayride/logo.svg",
    logoNeedsBg: false,
    url: "https://displayride.com",
    industry: "Risk Management / Gig Mobility",
    pages: 11,
    hostingCost: 55,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'The World's Most Advanced Risk Management Platform for Gig Mobility' to something shorter that leads with the outcome",
      result1: "✓ Hero updated to 'Stop Risk Before It Becomes a Claim'",
      prompt2: "Add a section showing the 4 risk management steps — Deter, Mitigate, Document, Analytics — with a one-line description each",
      result2: "✓ Risk framework section added with icons and outcome descriptions",
      prompt3: "Change 'Explore Solutions' to 'See It in Action'",
      result3: "✓ CTA changed from 'Explore Solutions' to 'See It in Action' in hero and nav"
    }
  },
  {
    id: "dive-lungfish",
    company: "Dive Lungfish",
    logo: "/assets/reports/dive-lungfish/logo.svg",
    logoNeedsBg: false,
    url: "https://lungfishdivesystems.com",
    industry: "Diving Equipment / Rebreathers",
    pages: 6,
    hostingCost: 45,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a one-line description under each of the three diver tiers — Recreational, Technical, Professional — explaining who it's for",
      result1: "✓ Tier descriptions added: who each system suits and what it enables",
      prompt2: "Change the hero from 'Freedom to Breathe' to something that calls out the rebreather advantage over open circuit",
      result2: "✓ Hero updated to 'Breathe Longer. Go Deeper. No Bubbles.'",
      prompt3: "Add an ORCA pricing summary section so visitors don't have to click away to see costs",
      result3: "✓ Pricing overview section added above the product grid"
    }
  },
  {
    id: "dragon-q-energy",
    company: "Dragon Q Energy",
    logo: "/assets/reports/dragon-q-energy/logo.svg",
    logoNeedsBg: false,
    url: "https://dragonqenergy.com",
    industry: "Energy Storage / Critical Infrastructure",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a section that separates our two main products — the HVDC Data Center Power Stack and the PowerPole — with a one-line pitch for each",
      result1: "✓ Product split section added: data center use case vs. humanitarian/emergency deployment",
      prompt2: "Change the hero from 'Unprecedented Power for Critical Infrastructure' to something that leads with our safety advantage",
      result2: "✓ Hero updated to 'Safe, Robust, Efficient — By Design'",
      prompt3: "Change 'Subscribe to Our Monthly Newsletter' to 'Get Product Updates'",
      result3: "✓ CTA changed from 'Subscribe to Our Monthly Newsletter' to 'Get Product Updates' in hero and footer"
    }
  },
  {
    id: "energos",
    company: "Energos.ai",
    logo: "/assets/reports/energos/logo.svg",
    logoNeedsBg: false,
    url: "https://energos.ai",
    industry: "AI / Predictive Maintenance",
    pages: 15,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a one-liner under each of the three steps — See It Early, Fix It Fast, Prove It Works — explaining what happens at each stage",
      result1: "✓ Step descriptions added: early detection → smart dispatch → verified uptime reporting",
      prompt2: "Change the hero from 'Predict the failure. Automate the fix. Maximize the uptime.' to something that leads with the cost of downtime",
      result2: "✓ Hero updated to 'Every Breakdown Was Predictable. Now You Can Stop It.'",
      prompt3: "Change 'Sign Up for Free' to 'Start Predicting'",
      result3: "✓ CTA changed from 'Sign Up for Free' to 'Start Predicting' in hero and pricing section"
    }
  },
  {
    id: "eyedaptic",
    company: "Eyedaptic",
    logo: "/assets/reports/eyedaptic/logo.svg",
    logoNeedsBg: false,
    url: "https://eyedaptic.com",
    industry: "MedTech / Low Vision AI Glasses",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'See What You've Been Missing' to something that leads with IVY, our generative AI visual assistant",
      result1: "✓ Hero updated to 'Meet IVY — The AI That Helps You See Again'",
      prompt2: "Add a short section for eyecare professionals between the product overview and the contact form",
      result2: "✓ Provider section added: referral process, clinical support, and patient eligibility criteria",
      prompt3: "Change 'Learn More' to 'Try the EYE7'",
      result3: "✓ CTA changed from 'Learn More' to 'Try the EYE7' in hero and product section"
    }
  },
  {
    id: "flexwash",
    company: "FlexWash",
    logo: "/assets/reports/flexwash/logo.svg",
    logoNeedsBg: false,
    url: "https://flexwashtech.com",
    industry: "Car Wash POS & CRM Software",
    pages: 8,
    hostingCost: 48,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero from 'Next Gen Car Wash POS + CRM' to something that leads with membership growth",
      result1: "✓ Hero updated to 'Boost Memberships. Track Every Customer. Run a Smarter Car Wash.'",
      prompt2: "Add a section showing how Advanced LPR works — one line on what it does and what it saves operators",
      result2: "✓ LPR explainer added: auto-identifies returning members, eliminates manual check-ins",
      prompt3: "Change 'Book Demo' to 'See It Live'",
      result3: "✓ CTA changed from 'Book Demo' to 'See It Live' in hero and nav"
    }
  },
  {
    id: "forge",
    company: "Forge",
    logo: "/assets/reports/forge/logo.avif",
    logoNeedsBg: false,
    url: "https://joinforge.app",
    industry: "Restaurant Loyalty & Mobile Ordering",
    pages: 5,
    hostingCost: 45,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add the 35% sales lift stat from In-App Orders to the hero section",
      result1: "✓ Hero updated with social proof: 'In-App Orders Drive a 35% Sales Lift — Built In'",
      prompt2: "Add a section showing the three revenue streams: Premium Loyalty, VIP Memberships, In-App Orders — with a one-liner on each",
      result2: "✓ Revenue tiers section added between hero and demo CTA",
      prompt3: "Change 'Get Started Now' to 'Book a Demo'",
      result3: "✓ CTA changed from 'Get Started Now' to 'Book a Demo' in hero and nav"
    }
  },
  {
    id: "genia",
    company: "Genia",
    logo: "/assets/reports/genia/logo.svg",
    logoNeedsBg: false,
    url: "https://genia.design",
    industry: "AI / Structural Engineering Software",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a one-line outcome under each of the 3 steps — Architectural Drawings → Structural Design → Permit-Ready",
      result1: "✓ Step outcomes added: what the engineer has at the end of each stage",
      prompt2: "Change the hero from '10x Faster Structural Design with AI' to something that leads with the permit-ready angle",
      result2: "✓ Hero updated to 'From Architectural Drawings to Permit-Ready Structural Design — in Minutes'",
      prompt3: "Change 'Design Now' to 'Try It Free'",
      result3: "✓ CTA changed from 'Design Now' to 'Try It Free' in hero and nav"
    }
  },
  {
    id: "gigacrop",
    company: "GigaCrop",
    logo: "/assets/reports/gigacrop/logo.jpeg",
    logoNeedsBg: false,
    url: "https://gigacrop.com",
    industry: "AgTech / Crop Science",
    pages: 4,
    hostingCost: 42,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a short explainer under 'The Breakthrough' on what RuBisCo is and why fixing it matters for yield",
      result1: "✓ RuBisCo explainer added in plain language: the bottleneck, the fix, the outcome",
      prompt2: "Change the hero from 'A Century of Progress, From a Single Invention' to something that leads with the 2x yield result",
      result2: "✓ Hero updated to 'Double Crop Yields — By Fixing the One Enzyme That Sets the Ceiling'",
      prompt3: "Change 'Explore Our Science' to 'See the Breakthrough'",
      result3: "✓ CTA changed from 'Explore Our Science' to 'See the Breakthrough' in hero and nav"
    }
  },
  {
    id: "gladeo",
    company: "Gladeo",
    logo: "/assets/reports/gladeo/logo.jpeg",
    logoNeedsBg: false,
    url: "https://gladeo.org",
    industry: "EdTech / Career Development",
    pages: 15,
    hostingCost: 58,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change 'A Future-Ready Career Development Solution' to something more specific about what students or workers actually get",
      result1: "✓ Hero updated to 'Career Navigation Built for the Workforce of Tomorrow'",
      prompt2: "Add a short section under 'Trusted Among Industry Leaders' showing 2-3 customer types with a one-liner on what they use Gladeo for",
      result2: "✓ Use case callouts added: workforce boards, community colleges, enterprise HR teams",
      prompt3: "Change 'Schedule a Demo' to 'See It in Action'",
      result3: "✓ CTA changed from 'Schedule a Demo' to 'See It in Action' in hero and nav"
    }
  },
  {
    id: "gofiteco",
    company: "GoFitECO",
    logo: "/assets/reports/gofiteco/logo.avif",
    logoNeedsBg: false,
    url: "https://gofiteco.com",
    industry: "AI / Health & Lifestyle Performance",
    pages: 3,
    hostingCost: 40,
    waitDays: 3,
    aiExamples: {
      prompt1: "Simplify the hero from 'Unlock your potential Take control of your Lifestyle Performance and Health' to one clean line",
      result1: "✓ Hero updated to 'Take Control of Your Health — Powered by AI'",
      prompt2: "Add a short section between the hero and the beta signup showing 3 things the platform does",
      result2: "✓ Feature preview section added: personalized plans, progress tracking, health equity focus",
      prompt3: "Change 'Join Our Beta Program' to 'Get Early Access'",
      result3: "✓ CTA changed from 'Join Our Beta Program' to 'Get Early Access' in hero and signup section"
    }
  },
  {
    id: "greenstop",
    company: "GreenSTOP INC",
    logo: "/assets/reports/greenstop/logo.png",
    logoNeedsBg: false,
    url: "https://greenstop.us",
    industry: "Cannabis Retail Technology",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Rewrite the hero — 'ancillary technology company that provides automated solutions for retailers' is too vague. Lead with the Smart Dispensary product",
      result1: "✓ Hero updated to 'The Smart Dispensary™ — Automated Retail for Cannabis Operators'",
      prompt2: "Add a section splitting our product lines: Smart Dispensary, Hemp & CBD, and Advertisement — with a one-liner on each",
      result2: "✓ Product lines section added with short descriptions and separate CTAs",
      prompt3: "Change 'SUBSCRIBE!' to 'Get 10% Off Your First Order'",
      result3: "✓ CTA changed from 'SUBSCRIBE!' to 'Get 10% Off Your First Order' with the offer baked in"
    }
  },
  {
    id: "gybe",
    company: "Gybe",
    logo: "/assets/reports/gybe/logo.svg",
    logoNeedsBg: false,
    url: "https://gybe.eco",
    industry: "CleanTech / Water Quality Monitoring",
    pages: 4,
    hostingCost: 42,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a demo request form below the main headline so visitors can reach out without emailing",
      result1: "✓ Contact form added: name, organization, watershed region, message",
      prompt2: "Change the hero from 'Watershed scale water quality monitoring' to something that leads with the problem it solves",
      result2: "✓ Hero updated to 'Know What's in Your Watershed — Before It Becomes a Crisis'",
      prompt3: "Add a short partnerships section for municipalities and environmental agencies",
      result3: "✓ Partners section added with 3 target audience types and a 'Work With Us' CTA"
    }
  },
  {
    id: "hammerhead-ai",
    company: "HammerheadAI, Inc.",
    logo: "/assets/reports/hammerhead-ai/logo.svg",
    logoNeedsBg: false,
    url: "https://hammerheadco.ai",
    industry: "AI Infrastructure / Data Center Power",
    pages: 13,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add the 30% capacity unlock and 36% cost reduction stats to the hero section",
      result1: "✓ Hero updated with proof points: '30% More Capacity. 36% Lower Costs. No Grid Wait.'",
      prompt2: "Add a short section under Our Stakeholders showing what each of the 4 customer types gets — colocation, cloud, enterprise, OEM",
      result2: "✓ Stakeholder outcomes section added with one-line benefit per segment",
      prompt3: "Change 'Learn More' to 'See ORCA in Action'",
      result3: "✓ CTA changed from 'Learn More' to 'See ORCA in Action' in hero and technology section"
    }
  },
  {
    id: "healthjay",
    company: "HealthJay",
    logo: "/assets/reports/healthjay/logo.avif",
    logoNeedsBg: false,
    url: "https://healthjay.com",
    industry: "Public Health / Care Access Technology",
    pages: 7,
    hostingCost: 48,
    waitDays: 3,
    aiExamples: {
      prompt1: "Rewrite the hero — 'Stop-Gap: Bridge Budget Cuts, Staffing Shortages and Lifeline Needs' is a list. Turn it into one clear outcome statement",
      result1: "✓ Hero updated to 'More Care Access. Less Overhead. Built for Public Health.'",
      prompt2: "Add a section showing what 'increase billable hours affordably' means in practice — a concrete example with numbers",
      result2: "✓ ROI section added: average hours recovered per provider, cost per patient served",
      prompt3: "Change 'Meet HealthJay' to 'See How It Works'",
      result3: "✓ CTA changed from 'Meet HealthJay' to 'See How It Works' in hero and nav"
    }
  },
  {
    id: "hermes-robotics",
    company: "Hermes Robotics",
    logo: "/assets/reports/hermes-robotics/logo.avif",
    logoNeedsBg: false,
    url: "https://hermes-robotics.com",
    industry: "Robotics / Autonomous Vehicles",
    pages: 1,
    hostingCost: 45,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add 3 use case sections below the hero — logistics, agriculture, and campus mobility — each with a one-line description",
      result1: "✓ Use case section added: three deployment contexts with outcome statements",
      prompt2: "Change the hero from 'Autonomy Retrofit Kit — Any Vehicle, Anywhere, at Low Speed' to something that leads with what operators save",
      result2: "✓ Hero updated to 'Retrofit Any Vehicle for Autonomy — No New Hardware Required'",
      prompt3: "Add a contact form for fleet operators who want a quote before buying",
      result3: "✓ Fleet inquiry form added above the existing buy button"
    }
  },
  {
    id: "icb-international",
    company: "ICB International",
    logo: "/assets/reports/icb-international/logo.png",
    logoNeedsBg: false,
    url: "https://icbii.com",
    industry: "Biotech / Blood-Brain Barrier Drug Delivery",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero from 'OutSMARTing Barriers' to something that leads with Parkinson's and Alzheimer's — the diseases we're targeting",
      result1: "✓ Hero updated to 'Changing the Course of Parkinson's and Alzheimer's — Starting with the Blood-Brain Barrier'",
      prompt2: "Add a short section showing what the SMART Platform does and where it is in clinical development",
      result2: "✓ SMART Platform explainer added: mechanism, current trial stage, target indications",
      prompt3: "Change 'Learn More' to 'View the SMART Platform'",
      result3: "✓ CTA changed from 'Learn More' to 'View the SMART Platform' routing to the technology page"
    }
  },
  {
    id: "jl-standard",
    company: "JL STANDARD",
    logo: "/assets/reports/jl-standard/logo.svg",
    logoNeedsBg: false,
    url: "https://jlstandard.com",
    industry: "AI / Memorial & Family Video Platform",
    pages: 6,
    hostingCost: 45,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add an English-language section for the three core products — AI Video Production, Digital Memory Platform, Interactive Kiosk",
      result1: "✓ English product section added with one-line descriptions for each",
      prompt2: "Change the hero to lead with the emotional hook — 'that one face you want to see again'",
      result2: "✓ Hero updated to 'That One Face You Want to See Again — Now Possible with AI'",
      prompt3: "Add a contact form in English for international partnerships and licensing",
      result3: "✓ English partnership inquiry form added above the footer"
    }
  },
  {
    id: "kinisi",
    company: "Kinisi Inc.",
    logo: "/assets/reports/kinisi/logo.avif",
    logoNeedsBg: true,
    url: "https://kinisi.ai",
    industry: "MedTech / Smart Motion Health",
    pages: 4,
    hostingCost: 42,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a stat section showing the cost of ACL tears — surgery cost, recovery time, re-injury rate",
      result1: "✓ Problem section added: avg $30K surgery, 9-month recovery, 30% re-injury rate",
      prompt2: "Change the hero from 'Move Smarter. Recover Better.' to something that leads with the ACL prediction angle",
      result2: "✓ Hero updated to 'Predict ACL Risk Before the Injury Happens'",
      prompt3: "Add a contact CTA — right now there's no clear way for a team trainer or surgeon to reach out",
      result3: "✓ 'Talk to a Specialist' button added to nav and hero"
    }
  },
  {
    id: "kit-switch",
    company: "Kit Switch",
    logo: "/assets/reports/kit-switch/logo.jpeg",
    logoNeedsBg: false,
    url: "https://kitswitch.com",
    industry: "Interior Design / Modular Construction Kits",
    pages: 5,
    hostingCost: 42,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a one-liner under each of the 4 benefits — Speed, Affordability, Predictability, Sustainability — explaining what it means in practice",
      result1: "✓ Benefit descriptions added: what each one means for a contractor on a real job",
      prompt2: "Change the hero from 'Ready-to-install kits for interior builds' to something that leads with the time saved",
      result2: "✓ Hero updated to 'Interior Builds Done in Days, Not Weeks'",
      prompt3: "Change 'Build with Kit Switch' to 'Start Your Project'",
      result3: "✓ CTA changed from 'Build with Kit Switch' to 'Start Your Project' in hero and nav"
    }
  },
  {
    id: "kyte-dynamics",
    company: "Kyte Dynamics",
    logo: "/assets/reports/kyte-dynamics/logo.avif",
    logoNeedsBg: false,
    url: "https://kyte.aero",
    industry: "Aerospace / Industrial Rotorcraft",
    pages: 5,
    hostingCost: 42,
    waitDays: 3,
    aiExamples: {
      prompt1: "Simplify the hero — 'large, industrial rotorcraft that interface with people and structures better' is too long. Lead with what makes it different from other UAVs",
      result1: "✓ Hero updated to 'The UAV That Gets Closer — Safely'",
      prompt2: "Add a one-liner under each of the 3 How It Works steps — Payload Stabilization, Gust-Resistant Delivery, Higher Standoff Distances",
      result2: "✓ Step outcomes added: what each capability means for an operator in the field",
      prompt3: "Change 'Contact Us' to 'Request a Demo Flight'",
      result3: "✓ CTA changed from 'Contact Us' to 'Request a Demo Flight' in nav and hero"
    }
  },
  {
    id: "la-jolla-labs",
    company: "La Jolla Labs Inc.",
    logo: "/assets/reports/la-jolla-labs/logo.avif",
    logoNeedsBg: false,
    url: "https://lajollalabs.com",
    industry: "BioTech / Drug Discovery",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Rewrite the hero — 'at the forefront of drug discovery, merging RNA biology with cutting-edge machine learning' is too dense. Lead with the partnership offer",
      result1: "✓ Hero updated to 'Our Discovery Lab Is Open — Partner With Us to Find Your Next Drug Target'",
      prompt2: "Add a short section showing the 3 things we bring to a partnership: RNA expertise, ML-powered screening, cloud-scale automation",
      result2: "✓ Capabilities section added with one-liner per pillar",
      prompt3: "Change 'Start Now' to 'Explore a Partnership'",
      result3: "✓ CTA changed from 'Start Now' to 'Explore a Partnership' in hero and services section"
    }
  },
  {
    id: "le-bread-xpress",
    company: "Le Bread Xpress",
    logo: "/assets/reports/le-bread-xpress/logo.avif",
    logoNeedsBg: false,
    url: "https://lebreadxpress.com",
    industry: "Food Robotics / Smart Vending",
    pages: 7,
    hostingCost: 45,
    waitDays: 3,
    aiExamples: {
      prompt1: "The hero headline is all caps and hard to read — rewrite it as a clean statement that leads with 'baked fresh on demand'",
      result1: "✓ Hero updated to 'Fresh Baked Goods. On Demand. 24/7.'",
      prompt2: "Add a section showing how the triple-oven system works — Microwave + Infrared + Convection — in plain language",
      result2: "✓ Technology section added: what each heating method contributes to the final product",
      prompt3: "Change 'Learn More' to 'Place a Kiosk'",
      result3: "✓ CTA changed from 'Learn More' to 'Place a Kiosk' to speak directly to operators"
    }
  },
  {
    id: "leap-photovoltaics",
    company: "Leap Photovoltaics",
    logo: "/assets/reports/leap-photovoltaics/logo.avif",
    logoNeedsBg: false,
    url: "https://leap-pv.com",
    industry: "CleanTech / Solar Manufacturing",
    pages: 6,
    hostingCost: 45,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a one-liner under each of the 3 value pillars — Lowest Cost, Best-in-Class Performance, Domestic Supply Chain",
      result1: "✓ Pillar descriptions added: what each means for a solar buyer or manufacturing partner",
      prompt2: "Change the hero from 'EMPOWERING THE SOLAR FUTURE' to something that leads with the additive manufacturing advantage",
      result2: "✓ Hero updated to 'Solar Cells Made Differently — Lowest Cost, Best Performance, Made in the US'",
      prompt3: "Change 'We Want to Hear From You' to 'Join the Team' — it reads like a contact form, not a careers CTA",
      result3: "✓ CTA changed from 'We Want to Hear From You' to 'Join the Team' in hero and footer"
    }
  },
  {
    id: "lumenuity",
    company: "Lumenuity, Inc.",
    logo: "/assets/reports/lumenuity/logo.png",
    logoNeedsBg: false,
    url: "https://lumenuityinc.com",
    industry: "Optics / Imaging Technology",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a one-liner under each of the 3 technology areas — 2-in-1 Cameras, Double Optical Resolution, AR Optics — explaining the customer benefit",
      result1: "✓ Technology descriptions added: what each innovation enables for device makers",
      prompt2: "Change the hero from 'Capture Every Moment with Precision' to something that leads with the 2-in-1 camera breakthrough",
      result2: "✓ Hero updated to 'Two Camera Functions. One Module. Half the Space.'",
      prompt3: "Change 'Contact Us' to 'Explore Licensing'",
      result3: "✓ CTA changed from 'Contact Us' to 'Explore Licensing' to match the IP licensing business model"
    }
  },
  {
    id: "maxim-athletic",
    company: "Maxim Athletic",
    logo: "/assets/reports/maxim-athletic/logo.avif",
    logoNeedsBg: false,
    url: "https://maximathletic.com",
    industry: "Custom Team Uniforms / Sportswear",
    pages: 12,
    hostingCost: 55,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add 'Ships in 2–4 weeks' as a banner or badge on every product category page, not just the homepage",
      result1: "✓ Delivery promise added to Baseball, Football, Softball, and Basketball category headers",
      prompt2: "Change the hero copy — the current description reads like a product listing. Lead with the brand personality: 'Maximum Effort Required When Worn'",
      result2: "✓ Hero updated to '\"Maximum Effort Required When Worn\" — Custom Uniforms Built for That.'",
      prompt3: "Change 'BUILDER' to 'Design Your Uniform' so visitors know what clicking it does",
      result3: "✓ CTA changed from 'BUILDER' to 'Design Your Uniform' in hero and nav"
    }
  },
  {
    id: "uniply",
    company: "Uniply",
    logo: "/assets/reports/uniply/logo.svg",
    logoNeedsBg: false,
    url: "https://uniply.co",
    industry: "SaaS / Execution Management",
    pages: 8,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero from 'Capitalize on your most important execution journeys to achieve enduring growth - in a unified way' to something shorter and clearer",
      result1: "✓ Hero updated to 'Execute Faster. Align Better. Remove the Silos.'",
      prompt2: "Add a one-liner under each of the 3 value pillars — Unify, Drive Alignment, Unleash Speed — explaining what it means for a team using Uniply day-to-day",
      result2: "✓ Pillar descriptions added: what each outcome looks like in practice",
      prompt3: "Change 'Request a Demo' to 'See It in Action'",
      result3: "✓ CTA changed from 'Request a Demo' to 'See It in Action' in hero and nav"
    }
  },
  {
    id: "miist-therapeutics",
    company: "Miist Therapeutics",
    logo: "/assets/reports/miist-therapeutics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://miisttherapeutics.com",
    industry: "Biotech / Drug Delivery",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with our Phase 2 data instead of 'Relief In Seconds'",
      result1: "✓ Hero updated with Phase 2 data in minutes, no designer needed",
      prompt2: "Add a section between The Problem and Miist's Solution explaining our delivery mechanism",
      result2: "✓ New delivery mechanism section live same day, copy and layout both editable",
      prompt3: "Add an investors page with our pipeline table",
      result3: "✓ New investors page built and published before your next meeting"
    }
  },
  {
    id: "mimicus",
    company: "Mimicus Inc.",
    logo: "/assets/reports/mimicus/logo.svg",
    logoNeedsBg: false,
    url: "https://mimic.us",
    industry: "Biomimicry / EdTech",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero headline to English and add a subheadline about our curriculum",
      result1: "✓ Hero updated in minutes, no designer involved",
      prompt2: "Add a page for school district partnerships with a contact form",
      result2: "✓ New page live same day with form and layout",
      prompt3: "Change the CTA from 'Start Biomimicry Education' to 'Try It Free' and test both",
      result3: "✓ A/B test set up and running within the hour"
    }
  },
  {
    id: "nxgenport",
    company: "NXgenPort",
    logo: "/assets/reports/nxgenport/logo.avif",
    logoNeedsBg: false,
    url: "https://nxgenport.com",
    industry: "Port Technology / IoT",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a case study page showing the value we delivered at our first port deployment",
      result1: "✓ New page live with real numbers and copy, same day",
      prompt2: "Update THE VALUE section with our latest ROI data",
      result2: "✓ Section updated in minutes, no designer needed",
      prompt3: "Add a demo request form to the homepage below THE SOLUTION section",
      result3: "✓ Form embedded and live before your next sales call"
    }
  },
  {
    id: "ola-ka-ola",
    company: "Ola Ka Ola",
    logo: "/assets/reports/ola-ka-ola/logo.avif",
    logoNeedsBg: false,
    url: "https://olakaola.com",
    industry: "Fitness / Wellness",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to highlight our new 8-week challenge starting next month",
      result1: "✓ Hero live with new copy and CTA before the campaign launches",
      prompt2: "Change 'Join Now' to 'Start My 7-Day Trial' and add a countdown timer",
      result2: "✓ CTA changed from 'Join Now' to 'Start My 7-Day Trial' and timer embedded in minutes",
      prompt3: "Add a testimonials section under the hero with before/after stories",
      result3: "✓ New testimonials section live same day with member photos and quotes"
    }
  },
  {
    id: "outat",
    company: "OutAt Inc",
    logo: "/assets/reports/outat/logo.avif",
    logoNeedsBg: true,
    url: "https://outatinc.com",
    industry: "Community / Events / Streaming",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a featured events section to the homepage with this week's lineup",
      result1: "✓ Section live with events listed before the week starts",
      prompt2: "Change the SUBSCRIBE CTA to 'Join the Community' and add a short explainer below it",
      result2: "✓ CTA changed from 'SUBSCRIBE' to 'Join the Community' with explainer copy in minutes",
      prompt3: "Create a landing page for our next big streaming event with an RSVP form",
      result3: "✓ Page built and published same day, form connected"
    }
  },
  {
    id: "progressive-neuro",
    company: "Progressive NEURO Inc",
    logo: "/assets/reports/progressive-neuro/logo.avif",
    logoNeedsBg: false,
    url: "https://progressive-neuro.com",
    industry: "Medical Devices / Neurology",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to reflect our most recent clinical milestone",
      result1: "✓ Hero updated in minutes, no designer needed",
      prompt2: "Add a pipeline page showing our device portfolio status",
      result2: "✓ New page live with table and status indicators same day",
      prompt3: "Change the DOWNLOAD CTA to link to our updated whitepaper",
      result3: "✓ CTA linked to updated whitepaper before your next conference"
    }
  },
  {
    id: "redreamer-lab",
    company: "RE:DREAMER Lab",
    logo: "/assets/reports/redreamer-lab/logo.avif",
    logoNeedsBg: false,
    url: "https://redreamer.io",
    industry: "Blockchain / Data Exchange",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Rewrite the hero to lead with our middleware use case instead of 'Commercial Data Exchange'",
      result1: "✓ Hero updated in minutes, no designer needed",
      prompt2: "Add a developer docs link to the nav and a getting started section",
      result2: "✓ Nav updated and new getting started section live same day",
      prompt3: "Add a page explaining how our Secured and Tamper-Proof data system works, with a diagram",
      result3: "✓ New page built and published, diagram embedded"
    }
  },
  {
    id: "redvest",
    company: "Redvest",
    logo: "/assets/reports/redvest/logo.avif",
    logoNeedsBg: false,
    url: "https://redvest.app",
    industry: "Fintech / Personal Finance",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Test 'Learn to Invest' vs 'Build a Real Bank Account' as the hero headline",
      result1: "✓ Both versions running in parallel within the hour",
      prompt2: "Add a 'How It Works' section with 3 steps between the hero and GET STARTED",
      result2: "✓ New 3-step section live same day, no dev involved",
      prompt3: "Create a landing page for our back-to-school campaign targeting college students",
      result3: "✓ Page built, copy written, and published before the campaign goes live"
    }
  },
  {
    id: "reproductive-solutions",
    company: "Reproductive Solutions",
    logo: "/assets/reports/reproductive-solutions/logo.avif",
    logoNeedsBg: false,
    url: "https://rsifertility.com",
    industry: "Fertility / Medical Devices",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with our clinical outcomes data instead of 'Reimagining Sperm Collection'",
      result1: "✓ Hero updated in minutes, no designer involved",
      prompt2: "Add a clinician resources page with our protocols and ordering info",
      result2: "✓ New clinician page live same day with downloadable docs",
      prompt3: "Change ORDER NOW to 'Request a Sample Kit' and test conversion",
      result3: "✓ CTA changed from 'ORDER NOW' to 'Request a Sample Kit' and tracking in minutes"
    }
  },
  {
    id: "return-signals",
    company: "Return Signals",
    logo: "/assets/reports/return-signals/logo.svg",
    logoNeedsBg: true,
    url: "https://returnsignals.com",
    industry: "Customer Retention / SaaS",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Test 'Signals creates more repeat customers' vs 'Turn one-time buyers into loyalists' as the hero",
      result1: "✓ Both versions running in parallel within the hour",
      prompt2: "Add a section showing 3 customer stories with retention numbers",
      result2: "✓ Social proof section live same day",
      prompt3: "Create a landing page for our e-commerce vertical with a Get a Demo form",
      result3: "✓ Vertical page built and published before your next sales push"
    }
  },
  {
    id: "rexlytics",
    company: "ReXLytics Inc.",
    logo: "/assets/reports/rexlytics/logo.png",
    logoNeedsBg: false,
    url: "https://rexlytics.com",
    industry: "Hybrid Work / Workplace Analytics",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with our ROI numbers instead of 'every dimension of hybrid work'",
      result1: "✓ Hero updated in minutes, no designer needed",
      prompt2: "Add a comparison page showing how we stack up against the top 3 competitors",
      result2: "✓ New comparison page live same day with table and positioning copy",
      prompt3: "Change 'Schedule a Demo' to 'See It Live' and A/B test both",
      result3: "✓ Both CTAs running in parallel within the hour"
    }
  },
  {
    id: "san-franola",
    company: "San Franola",
    logo: "/assets/reports/san-franola/logo.avif",
    logoNeedsBg: false,
    url: "https://sanfranola.com",
    industry: "Food & Beverage / School Meals",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our new granola bar SKU to the BROWSE PRODUCTS page with a photo and nutrition info",
      result1: "✓ Product live on the page within the hour",
      prompt2: "Create a district procurement landing page with a contact form for bulk orders",
      result2: "✓ New page built and published same day",
      prompt3: "Update the hero from 'transforming school meals' to highlight our new USDA certification",
      result3: "✓ Hero updated in minutes, no designer needed"
    }
  },
  {
    id: "sellscale",
    company: "SellScale",
    logo: "/assets/reports/sellscale/logo.svg",
    logoNeedsBg: true,
    url: "https://sellscale.com",
    industry: "Sales AI / Outbound",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Test 'The superintelligence for outbound' vs 'Build your pipeline on autopilot' as the hero",
      result1: "✓ Both variants live and tracking conversions within the hour",
      prompt2: "Add a ROI calculator section above the Get Started CTA",
      result2: "✓ Interactive ROI calculator built and embedded same day",
      prompt3: "Create a competitive comparison page against Apollo and Outreach",
      result3: "✓ Comparison page live with positioning table before your next sales cycle"
    }
  },
  {
    id: "sharpen-dtx",
    company: "Sharpen DTX",
    logo: "/assets/reports/sharpen-dtx/logo.jpeg",
    logoNeedsBg: false,
    url: "https://sharpenminds.com",
    industry: "Mental Health / Digital Therapeutics",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update MEET SHARPEN® to link to our new clinical outcomes page",
      result1: "✓ CTA updated and linked to clinical outcomes page in minutes",
      prompt2: "Add a page for our employer health partnerships with a contact form",
      result2: "✓ New employer partnerships page live same day, form connected",
      prompt3: "Add a 'Latest Research' section with our most recent study results",
      result3: "✓ Latest Research section built and published before your next sales presentation"
    }
  },
  {
    id: "solactron",
    company: "Solactron",
    logo: "/assets/reports/solactron/logo.png",
    logoNeedsBg: false,
    url: "https://solactron.com",
    industry: "Solar Energy / CleanTech",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to highlight our first utility deployment instead of 'disruptive solar solution'",
      result1: "✓ Hero updated in minutes, no designer needed",
      prompt2: "Add a page for project developers with our specs, output data, and contact form",
      result2: "✓ New project developer page live same day",
      prompt3: "Add a news section with our latest press and partnership announcements",
      result3: "✓ News section built and live before your next investor update"
    }
  },
  {
    id: "southern-beams-builds",
    company: "Southern Beams Builds Inc.",
    logo: "/assets/reports/southern-beams-builds/logo.avif",
    logoNeedsBg: true,
    url: "https://dragonwings.co",
    industry: "Solar Energy / Portable Power",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a use cases section showing job sites, farms, and emergency backup scenarios",
      result1: "✓ New use cases section live same day with images and copy",
      prompt2: "Change 'Book Now' to 'Reserve Yours' and add a limited availability badge",
      result2: "✓ CTA changed from 'Book Now' to 'Reserve Yours' and urgency badge added in minutes",
      prompt3: "Create a landing page for commercial contractors with bulk pricing and a contact form",
      result3: "✓ Vertical page built and published before your next trade show"
    }
  },
  {
    id: "storecash-ai",
    company: "StoreCash.AI",
    logo: "/assets/reports/storecash-ai/logo.avif",
    logoNeedsBg: false,
    url: "https://storecashapp.com",
    industry: "Fintech / Cashback / Consumer Apps",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a social proof banner showing '50,000+ users earning cash back every day'",
      result1: "✓ Banner live in minutes, no designer needed",
      prompt2: "Create a landing page for our grocery store partnership campaign",
      result2: "✓ New page built and published same day",
      prompt3: "Test 'Download the StoreCash app, now!' vs 'Get Cash Back Today' as the download CTA",
      result3: "✓ Both versions running in parallel within the hour"
    }
  },
  {
    id: "summit-technology-laboratory",
    company: "Summit Technology Laboratory",
    logo: "/assets/reports/summit-technology-laboratory/logo.avif",
    logoNeedsBg: false,
    url: "https://summittechlab.com",
    industry: "Spatial AR / Projection Mapping",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a gallery of our latest projection mapping installations to the homepage",
      result1: "✓ Gallery embedded and live same day",
      prompt2: "Create a case studies page with 3 real deployments and their specs",
      result2: "✓ Page built with copy and visuals, published before your next pitch",
      prompt3: "Change 'Contact Us' to 'Request a Demo' and add a short form",
      result3: "✓ CTA changed from 'Contact Us' to 'Request a Demo' and form live in minutes"
    }
  },
  {
    id: "suntrain",
    company: "SunTrain",
    logo: "/assets/reports/suntrain/logo.avif",
    logoNeedsBg: false,
    url: "https://suntrain.co",
    industry: "Energy Storage / Rail / CleanTech",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a 'Delivering America's Energy Future' section with a map of our route network",
      result1: "✓ Section live with map embedded same day",
      prompt2: "Update the hero to highlight our DOE grant announcement",
      result2: "✓ Hero updated in minutes, no designer needed",
      prompt3: "Create an investors page with our deck, team, and contact form",
      result3: "✓ Investors page built and published before your next roadshow"
    }
  },
  {
    id: "syntopa",
    company: "Syntopa",
    logo: "/assets/reports/syntopa/logo.jpeg",
    logoNeedsBg: false,
    url: "https://syntopa.com",
    industry: "AgTech / Climate / Biotech",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a Data-Driven Agriculture section with our trial results and crop yield data",
      result1: "✓ Section live with numbers and visuals same day",
      prompt2: "Update the hero to lead with our carbon sequestration numbers instead of 'Reversing climate change with biology'",
      result2: "✓ Hero updated in minutes, no designer needed",
      prompt3: "Add a partner farms page with a sign-up form for our pilot program",
      result3: "✓ New page built and published before your next outreach push"
    }
  },
  {
    id: "thermal-smart-aerogel",
    company: "Thermal Smart Aerogel",
    logo: "/assets/reports/thermal-smart-aerogel/logo.avif",
    logoNeedsBg: true,
    url: "https://thermal-smart.com",
    industry: "Materials / Energy Storage / Safety",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a Transportation applications page with our aerogel specs for EV battery packs",
      result1: "✓ New vertical page live same day with technical details",
      prompt2: "Update the Advanced Thermal Barrier section with our latest UL certification",
      result2: "✓ Section updated in minutes, no designer needed",
      prompt3: "Change 'Start Now' to 'Request a Sample' and add a short form",
      result3: "✓ CTA changed from 'Start Now' to 'Request a Sample' and form embedded before your next trade show"
    }
  },
  {
    id: "x-one-inc",
    company: "X One Inc.",
    logo: "/assets/reports/x-one-inc/logo.avif",
    logoNeedsBg: true,
    url: "https://xoneinc.com",
    industry: "Location Data / Shared Economy / B2B Tech",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with our use case in rideshare and logistics instead of 'Foundation of the Global Shared Economy'",
      result1: "✓ Hero updated in minutes, no designer needed",
      prompt2: "Add a licensing page explaining our patent portfolio and how to Get In Touch",
      result2: "✓ New licensing page live same day with contact form",
      prompt3: "Add a What We Do section with three specific use cases from our technology",
      result3: "✓ What We Do section built with real copy and published same day"
    }
  },
  {
    id: "poly-consulting",
    company: "POLY Consulting",
    logo: "/assets/reports/poly-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://poly-consulting.com",
    industry: "Management Consulting / Market Research",
    pages: 5,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with our US population dynamics work instead of 'recalibrate to unlock new areas of growth'",
      result1: "✓ Hero updated from 'recalibrate to unlock new areas of growth' to lead with US population dynamics work, in minutes",
      prompt2: "Add a case studies section under 'What we do' with 2–3 client outcomes",
      result2: "✓ New case studies section live same day under 'What we do' with real results and copy",
      prompt3: "Create a landing page for our Our Focus initiative targeting enterprise HR and DEI teams",
      result3: "✓ New landing page built and published before your next prospecting push"
    }
  },
  {
    id: "battier",
    company: "Battier",
    logo: "/assets/reports/battier/logo.svg",
    logoNeedsBg: false,
    url: "https://battier.com",
    industry: "Personal Brand / Speaking / Investing / Philanthropy",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new portfolio company to the Ventures section with a one-liner and logo",
      result1: "✓ New investment added to Ventures section in minutes, no designer needed",
      prompt2: "Update the Foundation section with this year's scholarship recipients and application deadline",
      result2: "✓ Foundation page updated same day with recipients listed and deadline live",
      prompt3: "Add a speaking topics page with video clips and a Request Availability form",
      result3: "✓ New speaking topics page built and published before your next speaker bureau conversation"
    }
  },
  {
    id: "amelia-risk",
    company: "Amelia Risk Insurance Brokers",
    logo: "/assets/reports/amelia-risk/logo.jpeg",
    logoNeedsBg: false,
    url: "https://ameliarisk.com",
    industry: "Insurance / B2B Brokerage",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'The Better-For-You Insurance Broker' to highlight our startup specialization",
      result1: "✓ Hero updated from 'The Better-For-You Insurance Broker' to lead with startup focus, in minutes",
      prompt2: "Add a CPG Companies landing page with specific coverage types and a CONTACT US NOW form",
      result2: "✓ New CPG vertical page live same day, form connected",
      prompt3: "Add a client testimonials section between Startups and CPG Companies",
      result3: "✓ Social proof section built and published before your next pitch"
    }
  },
  {
    id: "attractful",
    company: "Attractful",
    logo: "/assets/reports/attractful/logo.jpeg",
    logoNeedsBg: false,
    url: "https://attractful.com",
    industry: "SaaS Marketing / Fractional CMO",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Test 'We help SaaS companies close inbound deals' vs 'We turn pipeline into revenue for SaaS teams' as the hero",
      result1: "✓ Both variants live and tracking within the hour",
      prompt2: "Add a case study under Our Services showing results from our Fractional CMO work",
      result2: "✓ Case study section built and published same day",
      prompt3: "Add a landing page targeting Series A SaaS companies with a GET STARTED form",
      result3: "✓ Vertical page live before your next outbound push"
    }
  },
  {
    id: "brekky-golf",
    company: "Brekky Golf Co.",
    logo: "/assets/reports/brekky-golf/logo.jpeg",
    logoNeedsBg: false,
    url: "https://brekkygolf.com",
    industry: "Golf / Sports Accelerator / Venture",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our newest portfolio company to the Investments section with their logo and one-liner",
      result1: "✓ Portfolio updated in minutes, no designer needed",
      prompt2: "Add an Apply section under Services + Advisory for founders seeking our go-to-market support",
      result2: "✓ New section live same day with application form",
      prompt3: "Update the hero from 'driving the future of a timeless sport' to highlight our latest fund close",
      result3: "✓ Hero updated before the announcement goes out"
    }
  },
  {
    id: "catalyst-global",
    company: "Catalyst Global",
    logo: "/assets/reports/catalyst-global/logo.jpeg",
    logoNeedsBg: false,
    url: "https://catalystglobal.io",
    industry: "Web3 / Venture Studio / Consulting",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our latest client to the OUR CLIENTS section with their logo and outcome",
      result1: "✓ Client added in minutes, no designer involved",
      prompt2: "Create a landing page for DeFi founders looking for go-to-market support",
      result2: "✓ Vertical page live same day with a Request a 15-minute Consultation form",
      prompt3: "Update the hero from 'Accelerating the World's Web3 Future' to highlight our 60+ startup milestone",
      result3: "✓ Hero updated before your next conference appearance"
    }
  },
  {
    id: "cauris",
    company: "Cauris",
    logo: "/assets/reports/cauris/logo.jpeg",
    logoNeedsBg: false,
    url: "https://caurisfinance.com",
    industry: "Private Credit / Africa Finance",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a portfolio section under 'Partnering with high-growth companies' showing our funded companies",
      result1: "✓ New portfolio section live same day with logos and outcomes",
      prompt2: "Create an investor relations page with our impact data and a contact form",
      result2: "✓ Page built and published before your next LP meeting",
      prompt3: "Update the hero from 'PRIVATE CREDIT FOR AFRICA' to include our total capital deployed",
      result3: "✓ Hero updated in minutes, no designer needed"
    }
  },
  {
    id: "changelabs",
    company: "ChangeLabs",
    logo: "/assets/reports/changelabs/logo.jpeg",
    logoNeedsBg: false,
    url: "https://changelabsmarketing.com",
    industry: "Marketing Consultancy / Startup Growth",
    pages: 14,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Test 'Ignite your Growth with ChangeLabs' vs 'From Pre-Seed to Series A — we handle the marketing' as the hero",
      result1: "✓ Both variants live and tracking conversions within the hour",
      prompt2: "Add a case study under CONNECT showing growth results for a digital healthcare client",
      result2: "✓ Case study section built and published same day",
      prompt3: "Update the Get fired up CTA to link directly to our intake form instead of a contact page",
      result3: "✓ CTA updated and linked directly to intake form in minutes"
    }
  },
  {
    id: "coachability",
    company: "Coachability",
    logo: "/assets/reports/coachability/logo.svg",
    logoNeedsBg: false,
    url: "https://becoachable.com",
    industry: "Executive Coaching / Leadership Development",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new Leadership Retreats page with an application form and upcoming dates",
      result1: "✓ Page live same day, form connected",
      prompt2: "Update the 360° Assessments section under Strategic Leadership Services with our new methodology",
      result2: "✓ Section updated in minutes, no designer needed",
      prompt3: "Change 'Get in Touch' to 'Book a Discovery Call' and link it directly to our calendar",
      result3: "✓ CTA changed from 'Get in Touch' to 'Book a Discovery Call' with calendar embedded before your next prospect call"
    }
  },
  {
    id: "confitence-ai",
    company: "Confitence.ai",
    logo: "/assets/reports/confitence-ai/logo.jpeg",
    logoNeedsBg: false,
    url: "https://confitence.ai",
    industry: "E-Commerce AI / Virtual Try-On",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a returns reduction case study under Maximize PROFITABILITY with real percentage data",
      result1: "✓ Case study section live same day with percentage data",
      prompt2: "Create a landing page for Shopify Plus merchants with our integration specs and a Request a Demo form",
      result2: "✓ Vertical page built and published before your next sales push",
      prompt3: "Update the hero from 'Improve your E-Commerce profitability with 3D Try-On' to include our Google and Nvidia partnership badges",
      result3: "✓ Hero updated in minutes, Google and Nvidia badges displayed prominently"
    }
  },
  {
    id: "curio-ventures",
    company: "Curio Ventures",
    logo: "/assets/reports/curio-ventures/logo.jpeg",
    logoNeedsBg: false,
    url: "https://curio.ventures",
    industry: "Innovation Advisory / Consulting",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a case studies section showing outcomes from our Country-Level Innovation Advisory work",
      result1: "✓ New case studies section live same day with client outcomes",
      prompt2: "Add a separate page for our Corporate Innovation & Executive Leadership Advisory track with a Contact Us form",
      result2: "✓ Page built and published before your next enterprise pitch",
      prompt3: "Update 'Empowering Innovation, Shaping the Future' to lead with a recent government partnership",
      result3: "✓ Hero updated in minutes, no designer needed"
    }
  },
  {
    id: "datafalcon",
    company: "DataFalcon",
    logo: "/assets/reports/datafalcon/logo.svg",
    logoNeedsBg: false,
    url: "https://datafalcon.ai",
    industry: "Strategic Intelligence / AI SaaS",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a 'From Research to Strategy' section showing a sample output from The Living Strategy™ Platform",
      result1: "✓ New section live same day with real product output",
      prompt2: "Create a landing page for private equity firms with our due diligence use case and a Request a Demo form",
      result2: "✓ Vertical page built and published before your next sales cycle",
      prompt3: "Test 'Connect the Dots. See the Future.' vs 'Strategy as powerful as McKinsey — in minutes' as the hero",
      result3: "✓ Both variants running in parallel within the hour"
    }
  },
  {
    id: "dragonhorse-interactive",
    company: "Dragonhorse Interactive",
    logo: "/assets/reports/dragonhorse-interactive/logo.jpeg",
    logoNeedsBg: false,
    url: "https://chatwosocial.com",
    industry: "Spatial Computing / Social App",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Test 'Vibe with a like-minded soul.' vs 'Meet people who actually get you.' as the hero",
      result1: "✓ Both variants live and tracking within the hour",
      prompt2: "Add a Gamified Social Experience section with screenshots showing our ice-breaker activities",
      result2: "✓ New section live same day with visuals",
      prompt3: "Update the Download Now CTA to include both App Store and a Discord early access link",
      result3: "✓ CTA updated in minutes, both links live"
    }
  },
  {
    id: "early-june",
    company: "Early June",
    logo: "/assets/reports/early-june/logo.jpeg",
    logoNeedsBg: false,
    url: "https://earlyjune.com",
    industry: "Growth Marketing / Fractional Team",
    pages: 5,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new case study under Work showing our Paid Social results for a recent client",
      result1: "✓ Case study live same day with metrics and copy",
      prompt2: "Create a landing page for e-commerce brands targeting our Landing Page Design service",
      result2: "✓ Vertical page built and published before your next outbound push",
      prompt3: "Change 'Let's Talk' to 'See Our Work First' and test which converts better",
      result3: "✓ A/B test running within the hour"
    }
  },
  {
    id: "find-the-foxx",
    company: "Find the Foxx",
    logo: "/assets/reports/find-the-foxx/logo.jpeg",
    logoNeedsBg: false,
    url: "https://findthefoxx.com",
    industry: "Startup Marketing Consulting / Fractional CMO",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a results section showing outcomes from our Position, Prioritize, Strategize, Scale framework",
      result1: "✓ New results section live same day with real client numbers",
      prompt2: "Create a MedTech AI Adoption landing page combining our Framework and Audit offerings with a Schedule a call form",
      result2: "✓ Page built and published before your next pitch",
      prompt3: "Update the hero from 'Less Fluff. More Research. Data-Driven.' to include a specific client win stat",
      result3: "✓ Hero updated in minutes, no designer needed"
    }
  },
  {
    id: "global-cancer-technology",
    company: "Global Cancer Technology",
    logo: "/assets/reports/global-cancer-technology/logo.jpeg",
    logoNeedsBg: false,
    url: "https://globalcancertechnology.com",
    industry: "Oncology / Biotech",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Progress + Pipeline page with our latest Glioblastoma Tumor Growth data",
      result1: "✓ Page updated in minutes, data live before your next investor call",
      prompt2: "Add a Breast Cancer landing page with our current trial timeline and an Invest Now CTA",
      result2: "✓ New page built and published same day",
      prompt3: "Update the hero from 'When There's a Will – There's a Way' to lead with our latest clinical result",
      result3: "✓ Hero updated the day the data drops, no designer needed"
    }
  },
  {
    id: "gotomarketusa",
    company: "GoToMarketUSA",
    logo: "/assets/reports/gotomarketusa/logo.jpeg",
    logoNeedsBg: false,
    url: "https://gotomarketusa.com",
    industry: "Market Entry Consulting / U.S. Expansion",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a CleanTech landing page based on our Opportunities For CleanTech Companies article",
      result1: "✓ Vertical page live same day with a Free Consultation form",
      prompt2: "Update the NEWS section with our latest U.S. market insight article",
      result2: "✓ Article added in minutes, no designer needed",
      prompt3: "Add a client logos section under 'Why Work With Us?' showing Nordic companies we've helped",
      result3: "✓ Social proof section built and published before your next outbound push"
    }
  },
  {
    id: "handmade-ventures",
    company: "Handmade Ventures",
    logo: "/assets/reports/handmade-ventures/logo.jpeg",
    logoNeedsBg: false,
    url: "https://handmade.vc",
    industry: "M&A / Venture Capital",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our latest acquisition to the M&A Transactions section with the date and acquiring company",
      result1: "✓ Portfolio updated in minutes, no designer needed",
      prompt2: "Add a new company to the Investments / Executive Advisor Portfolio with their logo and one-liner",
      result2: "✓ Investment added same day",
      prompt3: "Add a Contact section for founders interested in an acquisition conversation",
      result3: "✓ Contact form built and live before your next LP meeting"
    }
  },
  {
    id: "heartfelt-strategy",
    company: "Heartfelt Strategy",
    logo: "/assets/reports/heartfelt-strategy/logo.jpeg",
    logoNeedsBg: false,
    url: "https://heartfeltstrategy.com",
    industry: "Marketing Strategy / AI Integration",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a 'We're Here for You If' section with 3 specific client scenarios and a How Can We Support You? form",
      result1: "✓ Section live same day, form connected",
      prompt2: "Create a landing page for marketing teams adopting AI for the first time",
      result2: "✓ Page built and published before your next outreach campaign",
      prompt3: "Test 'Transformation Powered by AI, Marketing Strategy & Heart' vs 'AI adoption that actually sticks' as the hero",
      result3: "✓ Both variants running in parallel within the hour"
    }
  },
  {
    id: "insight-scope",
    company: "Insight Scope",
    logo: "/assets/reports/insight-scope/logo.jpeg",
    logoNeedsBg: false,
    url: "https://aiflowsapp.com",
    industry: "AI / Legal Tech / Multi-Agent Platform",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a use cases section showing how our Multi-Agent Platform handles discovery, contracts, and litigation prep",
      result1: "✓ New use cases section live same day with concrete examples",
      prompt2: "Create a landing page for law firms with our Multimodal Intake feature highlighted and a demo request form",
      result2: "✓ Vertical page built and published before your next BD push",
      prompt3: "Update the hero from 'AGENT NETWORK UNDER CONTROL' to include a specific time-saved stat",
      result3: "✓ Hero updated in minutes, no designer needed"
    }
  },
  {
    id: "kirabo",
    company: "Kirabo",
    logo: "/assets/reports/kirabo/logo.jpeg",
    logoNeedsBg: false,
    url: "https://kiraboequity.com",
    industry: "Fintech / Financial Wellness",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the JOIN AS A FOUNDING MEMBER CTA copy to show our current member count",
      result1: "✓ CTA updated in minutes, social proof live immediately",
      prompt2: "Add a community impact section showing how member wealth growth funds grants and infrastructure",
      result2: "✓ New section built and published same day",
      prompt3: "Add a press page with our coverage and a media contact form",
      result3: "✓ Press page live before your next announcement"
    }
  },
  {
    id: "leadroller",
    company: "LeadRoller",
    logo: "/assets/reports/leadroller/logo.jpeg",
    logoNeedsBg: false,
    url: "https://leadroller.com",
    industry: "B2B Media / Lead Generation",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client testimonial to the Trusted By section with their logo and result",
      result1: "✓ Testimonial live in minutes, no designer needed",
      prompt2: "Update the hero to highlight our 1M+ monthly visitor stat more prominently",
      result2: "✓ Hero updated same day with stat above the fold",
      prompt3: "Add a vertical landing page for SaaS brands looking to grow faster with our network",
      result3: "✓ Page built and published before your next outbound push"
    }
  },
  {
    id: "n3-innovation",
    company: "N3 Innovation",
    logo: "/assets/reports/n3-innovation/logo.jpeg",
    logoNeedsBg: false,
    url: "https://n3innovation.com",
    industry: "Corporate Innovation / Consulting",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new trending article to The Cube on AI data centers with our take",
      result1: "✓ Article live same day, no designer needed",
      prompt2: "Create a landing page for corporate innovation leads with a Join The Cube signup and our methodology overview",
      result2: "✓ Page built and published before your next enterprise pitch",
      prompt3: "Update 'Focus on the future... today' to highlight a recent corporate client outcome",
      result3: "✓ Hero updated in minutes with client outcome"
    }
  },
  {
    id: "next-frontier-search",
    company: "Next Frontier Search",
    logo: "/assets/reports/next-frontier-search/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nextfrontiersearch.com",
    industry: "Executive Search / Deep Tech",
    pages: 2,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a placements section showing roles we've filled at space, defense, and deep tech companies",
      result1: "✓ New placements section live same day with logos and titles",
      prompt2: "Add a Strategic Advisory page explaining how we support venture-backed leadership teams",
      result2: "✓ Page built and published before your next founder conversation",
      prompt3: "Update the hero from 'WE BUILD THE WORLD'S MOST INNOVATIVE COMPANIES' to include a specific placement stat",
      result3: "✓ Hero updated in minutes, no designer needed"
    }
  },
  {
    id: "northstar-biz-consulting",
    company: "NorthStar Biz Consulting Services",
    logo: "/assets/reports/northstar-biz-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nsbcs.com",
    industry: "Business Consulting / Technology Strategy",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a client outcomes section under Growth And Sales Strategy with 2–3 results",
      result1: "✓ Social proof section live same day",
      prompt2: "Create a landing page for tech startups looking for End-to-End Technology & Innovation support",
      result2: "✓ Vertical page built and published before your next outreach push",
      prompt3: "Update the 'Know More' CTA to link directly to a calendar booking instead of a contact page",
      result3: "✓ CTA updated and calendar embedded in minutes"
    }
  },
  {
    id: "oasys-building-technology",
    company: "OASYS Building Technology",
    logo: "/assets/reports/oasys-building-technology/logo.jpeg",
    logoNeedsBg: false,
    url: "https://oasys.build",
    industry: "ADU / Homebuilding / Construction Tech",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new ADU model to the Homes page with floor plan, sq footage, and starting price",
      result1: "✓ New model live same day, no designer needed",
      prompt2: "Add a financing section under More economical showing our current lending partners",
      result2: "✓ Section built and published before your next consultation batch",
      prompt3: "Test 'DISCOVER WHAT'S POSSIBLE' vs 'See Your ADU Options' as the primary CTA",
      result3: "✓ Both variants running in parallel within the hour"
    }
  },
  {
    id: "planna",
    company: "Planna, Inc.",
    logo: "/assets/reports/planna/logo.svg",
    logoNeedsBg: false,
    url: "https://planna.in",
    industry: "Consulting / Digital Transformation / Incubation",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new incubated venture to the Lifestyle Business section with a one-liner and link",
      result1: "✓ New entry live same day, no designer needed",
      prompt2: "Create a Japanese-language landing page for our Tokyo office services",
      result2: "✓ Page built and published before your next Tokyo client meeting",
      prompt3: "Update the hero from 'Consulting and Incubations for the Future' to highlight a recent client transformation",
      result3: "✓ Hero updated in minutes with client transformation story"
    }
  },
  {
    id: "pontic-technology",
    company: "Pontic Technology",
    logo: "/assets/reports/pontic-technology/logo.jpeg",
    logoNeedsBg: false,
    url: "https://pontictech.com",
    industry: "Water Treatment / CleanTech",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a case study under 'Leading the Future of Clean Water Technology' showing our first municipal deployment",
      result1: "✓ Case study live same day with data and photos",
      prompt2: "Create an industrial clients landing page with our TDSS specs and a More About Our Technology CTA",
      result2: "✓ Vertical page built and published before your next sales push",
      prompt3: "Update the hero from 'Purifying Water for a Sustainable Tomorrow' to include a specific contamination rate we've solved",
      result3: "✓ Hero updated in minutes, no designer needed"
    }
  },
  {
    id: "prenostik",
    company: "Prenostik",
    logo: "/assets/reports/prenostik/logo.jpeg",
    logoNeedsBg: false,
    url: "https://prenostik.com",
    industry: "EdTech / AI Learning",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Validations section with our latest pilot showing 11.2% increased content engagement",
      result1: "✓ Data updated in minutes, no designer needed",
      prompt2: "Add a university partnerships page with our pilot results and a contact form for admissions teams",
      result2: "✓ Page built and published before your next institutional pitch",
      prompt3: "Change 'LEARN MORE' to 'See the Results' and link directly to our Validations section",
      result3: "✓ CTA changed from 'LEARN MORE' to 'See the Results' and anchored in minutes"
    }
  },
  {
    id: "product-hiring-house",
    company: "Product Hiring House",
    logo: "/assets/reports/product-hiring-house/logo.jpeg",
    logoNeedsBg: false,
    url: "https://producthiringhouse.com",
    industry: "Recruiting / Product Management & Design",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a client logos section under HUMAN CONNECTORS showing the mission-driven startups we've placed for",
      result1: "✓ Social proof section live same day",
      prompt2: "Add a Candidates page explaining what working with us looks like for PM and Design talent",
      result2: "✓ Page built and published before your next outreach",
      prompt3: "Change 'WORK WITH US' to 'Build Your Product Team' and test conversion",
      result3: "✓ CTA changed from 'WORK WITH US' to 'Build Your Product Team' and tracking within the hour"
    }
  },
  {
    id: "qonectin",
    company: "Qonectin",
    logo: "/assets/reports/qonectin/logo.jpeg",
    logoNeedsBg: false,
    url: "https://qonectin.com",
    industry: "Real Estate / PropTech",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Test 'Real Estate Like You've Never Experienced Before' vs 'Buy and Sell with Full Transparency' as the hero",
      result1: "✓ Both variants live and tracking within the hour",
      prompt2: "Add a Realtors® section explaining our TruOfer™ platform with an Unlock Early Access form",
      result2: "✓ New section live same day",
      prompt3: "Update the launch timeline from Fall 2025 to our new date as we get closer",
      result3: "✓ Timeline updated in minutes, no designer needed"
    }
  },
  {
    id: "render-better",
    company: "Render Better",
    logo: "/assets/reports/render-better/logo.jpeg",
    logoNeedsBg: false,
    url: "https://renderbetter.com",
    industry: "Web Performance / Core Web Vitals / SaaS",
    pages: 8,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new guide to the Guides section on reducing LCP for Shopify stores",
      result1: "✓ Guide live same day, linked from the See All Guides page",
      prompt2: "Add a case study under Why Render Better? showing conversion lift from a recent client",
      result2: "✓ Case study built and published before your next sales call",
      prompt3: "Test 'Optimization Never Sleeps' vs 'Your Site Speed Is Costing You Conversions' as the hero",
      result3: "✓ Both variants running in parallel within the hour"
    }
  },
  {
    id: "saas-cmo-pro",
    company: "SaaS CMO Pro",
    logo: "/assets/reports/saas-cmo-pro/logo.jpeg",
    logoNeedsBg: false,
    url: "https://saascmopro.com",
    industry: "SaaS Marketing / Content / Education",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a featured video section to the homepage linking to my top 3 YouTube videos this month",
      result1: "✓ Section updated same day, links live immediately",
      prompt2: "Create a speaking landing page with my topics, past events, and a booking form",
      result2: "✓ Page built and published before your next conference",
      prompt3: "Update the Signup for the free newsletter CTA to show current subscriber count",
      result3: "✓ CTA updated in minutes with current subscriber count as social proof"
    }
  },
  {
    id: "sapphire-cfo-solutions",
    company: "Sapphire CFO Solutions",
    logo: "/assets/reports/sapphire-cfo-solutions/logo.jpeg",
    logoNeedsBg: false,
    url: "https://sapphirecfosolutions.com",
    industry: "Fractional CFO / Financial Services",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a client testimonials section after The Sapphire Strategic Finance System™ with 3 named references",
      result1: "✓ Testimonials live same day, no designer needed",
      prompt2: "Create a SaaS companies landing page highlighting our tech-enabled business focus with a Connect form",
      result2: "✓ Vertical page built and published before your next outreach push",
      prompt3: "Update the hero from 'Creating Financial Synergy' to include a specific client outcome",
      result3: "✓ Hero updated in minutes with client outcome"
    }
  },
  {
    id: "spacer-robotics",
    company: "Spacer Robotics",
    logo: "/assets/reports/spacer-robotics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://spacerrobotics.ai",
    industry: "Robotics / Construction AI / Space",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update OUR ROBOTS to add our latest GRID robot field test results",
      result1: "✓ Section updated in minutes, no designer needed",
      prompt2: "Add a Partners page for construction companies interested in our autonomous rebar tying system",
      result2: "✓ Page built and published before your next partnership conversation",
      prompt3: "Update the Planetary Roadmap timeline to reflect our 2026 deployment milestone",
      result3: "✓ Timeline updated same day the milestone is confirmed"
    }
  },
  {
    id: "spark-thermionics",
    company: "Spark Thermionics",
    logo: "/assets/reports/spark-thermionics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://sparkthermionics.com",
    industry: "Energy / Deep Tech / Hardware",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a Technology page explaining how thermionic conversion works and our efficiency targets",
      result1: "✓ New Technology page live same day, no designer needed",
      prompt2: "Add a Team section with founder bios and your Berkeley research background",
      result2: "✓ Team section built and published before your next investor meeting",
      prompt3: "Add a press and publications section with links to our research papers and media coverage",
      result3: "✓ Section live with links embedded within the hour"
    }
  },
  {
    id: "sur-ryl-marketing",
    company: "Sur-Ryl Marketing",
    logo: "/assets/reports/sur-ryl-marketing/logo.jpeg",
    logoNeedsBg: false,
    url: "https://surrylmarketing.com",
    industry: "Marketing / Social Impact / Brand",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a recent campaign case study under Brand Empowerment with results and client logo",
      result1: "✓ Case study live same day, no designer needed",
      prompt2: "Create a nonprofits landing page targeting social impact organizations with a Learn More form",
      result2: "✓ Vertical page built and published before your next outreach push",
      prompt3: "Update the hero from 'AMPLIFY YOUR CAUSE' to include a specific reach or engagement number",
      result3: "✓ Hero updated in minutes with real numbers"
    }
  },
  {
    id: "team-and-tonic",
    company: "Team&Tonic",
    logo: "/assets/reports/team-and-tonic/logo.jpeg",
    logoNeedsBg: false,
    url: "https://teamandtonic.com",
    industry: "Freelance Design Network / Talent Marketplace",
    pages: 9,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new case study to the Case Studies section showing a recent product design engagement",
      result1: "✓ Case study live same day with results and designer profile",
      prompt2: "Update the Pricing page to reflect our latest plan structure",
      result2: "✓ Pricing updated in minutes, no designer needed",
      prompt3: "Test 'Serving you the best 0.8% of freelance designers' vs 'World-class design talent, matched in 72 hours' as the hero",
      result3: "✓ Both variants running in parallel within the hour"
    }
  },
  {
    id: "tokuda-technology",
    company: "Tokuda Technology",
    logo: "/assets/reports/tokuda-technology/logo.jpeg",
    logoNeedsBg: false,
    url: "https://tokudatechnology.com",
    industry: "Web Design / Tech Studio",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new Small Business Story featuring our most recent client transformation",
      result1: "✓ Story live same day with before/after and client quote",
      prompt2: "Add an AI Design Solutions page explaining how we integrate AI tools into our design process",
      result2: "✓ New page built and published before your next client meeting",
      prompt3: "Change 'Let's Talk' to 'See Our Work' and test which drives more inquiries",
      result3: "✓ A/B test running within the hour"
    }
  },
  {
    id: "u-first-capital",
    company: "U First Capital",
    logo: "/assets/reports/u-first-capital/logo.jpeg",
    logoNeedsBg: false,
    url: "https://ufirstcapital.com",
    industry: "Venture Capital / Silicon Valley",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our newest portfolio company to the Portfolio page with their logo and one-liner",
      result1: "✓ Portfolio updated same day, no designer needed",
      prompt2: "Add an Enterprise Summit recap page with photos, speakers, and a registration form for next year",
      result2: "✓ Event page built and published before the next summit cycle",
      prompt3: "Update the hero to highlight our Groq exit prominently above the fold",
      result3: "✓ Hero updated in minutes with Groq exit featured above the fold"
    }
  },
  {
    id: "ubo-technology",
    company: "Ubo Technology",
    logo: "/assets/reports/ubo-technology/logo.jpeg",
    logoNeedsBg: false,
    url: "https://getubo.com",
    industry: "Hardware / Open Source / AI Devices",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a press section with logos and pull quotes from Hackaday, XDA Developers, and ITS FOSS",
      result1: "✓ Press section live same day with linked coverage",
      prompt2: "Update the Preorder Now CTA to show our current backer count and days remaining",
      result2: "✓ CTA updated in minutes with live social proof",
      prompt3: "Add a developers page explaining how to build plugins and extensions for Ubo Pod",
      result3: "✓ New developers page live before your next community announcement"
    }
  },
  {
    id: "vero-bioscience",
    company: "Vero Bioscience",
    logo: "/assets/reports/vero-bioscience/logo.jpeg",
    logoNeedsBg: false,
    url: "https://verobioscience.com",
    industry: "Proteomics / Longevity / Preventive Health",
    pages: 2,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a Science page explaining how Organ Compass™ uses proteomics to measure organ-specific aging",
      result1: "✓ New Science page live same day, no designer needed",
      prompt2: "Add a testimonials section featuring Dr. Eric Verdin's quote about the technology changing medicine",
      result2: "✓ Testimonial section built and published before your next investor meeting",
      prompt3: "Update the Join CTA to 'Join the Waitlist' and add a short explainer about what members get first",
      result3: "✓ CTA changed from 'Join' to 'Join the Waitlist' and explainer copy live in minutes"
    }
  },
  {
    id: "impel-consulting",
    company: "Impel Consulting",
    logo: "/assets/reports/impel-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://impel.consulting",
    industry: "Salesforce Consulting",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a case study showing how we improved policyholder views for an insurance client",
      result1: "✓ Case study live same day, no designer needed",
      prompt2: "Add a Field Service Lightning landing page with a Get In Touch form for field ops teams",
      result2: "✓ Vertical page built and published before your next sales push",
      prompt3: "Update the hero from 'Your local Salesforce consultancy' to include our latest certification badge",
      result3: "✓ Hero updated in minutes"
    }
  },
  {
    id: "intersection-growth-partners",
    company: "Intersection Growth Partners",
    logo: "/assets/reports/intersection-growth-partners/logo.jpeg",
    logoNeedsBg: false,
    url: "https://intersectiongp.com",
    industry: "Crypto Executive Search / Venture",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add this week's top crypto exec moves to the IGP Crypto Exec Moves section",
      result1: "✓ Updates live same day, newsletter and site in sync",
      prompt2: "Add a new portfolio company to the Investments section with their logo and one-liner",
      result2: "✓ Investment added in minutes, no designer needed",
      prompt3: "Create a landing page for DeFi founders looking to hire C-suite leadership",
      result3: "✓ Vertical page built and published before your next client conversation"
    }
  },
  {
    id: "john-sanders",
    company: "John Sanders",
    logo: "/assets/reports/john-sanders/logo.jpeg",
    logoNeedsBg: false,
    url: "https://johnsanders.com",
    industry: "Business Consulting / Investment / Entrepreneurship",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new resource to GET RESOURCES — a framework I use for first-year entrepreneurs evaluating partnerships",
      result1: "✓ Resource live same day, no designer needed",
      prompt2: "Update the hero to reflect a recent advisory win or client outcome",
      result2: "✓ Hero updated in minutes",
      prompt3: "Add a new Parable for Entrepreneurs post on strategic planning and when to pivot",
      result3: "✓ Post published before your next speaking engagement or LinkedIn push"
    }
  },
  {
    id: "knightsgate-ventures",
    company: "Knightsgate Ventures",
    logo: "/assets/reports/knightsgate-ventures/logo.jpeg",
    logoNeedsBg: false,
    url: "https://knightsgateventures.com",
    industry: "Venture Capital / HealthTech / DeepTech",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our newest portfolio company with their one-liner and Visit Website link",
      result1: "✓ Portfolio updated same day, no designer needed",
      prompt2: "Add a thesis page explaining our focus on underrepresented founders and precision health",
      result2: "✓ New page live before your next LP meeting",
      prompt3: "Update the hero to highlight our total portfolio count and sectors covered",
      result3: "✓ Hero updated in minutes"
    }
  },
  {
    id: "lisa-pepper-satkin",
    company: "Lisa Pepper-Satkin",
    logo: "/assets/reports/lisa-pepper-satkin/logo.jpeg",
    logoNeedsBg: false,
    url: "https://lisapeppersatkin.com",
    industry: "Executive Coaching / Therapy / Leadership",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new testimonial under Coaching that moves you forward from a recent executive client",
      result1: "✓ Testimonial live same day, no designer needed",
      prompt2: "Create a landing page for C-suite leaders with our Let's Work Together intake form",
      result2: "✓ Page built and published before your next speaking engagement",
      prompt3: "Update the hero from 'Own Your Impact' to include a specific outcome leaders experience",
      result3: "✓ Hero updated in minutes"
    }
  },
  {
    id: "neuvik",
    company: "Neuvik",
    logo: "/assets/reports/neuvik/logo.jpeg",
    logoNeedsBg: false,
    url: "https://neuvik.com",
    industry: "Cybersecurity / AI Risk Management",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a case study under Advanced Assessments showing how we translated a vulnerability finding into a board-level decision",
      result1: "✓ Case study live same day, no designer needed",
      prompt2: "Create a landing page for financial services firms focused on our AI Risk Management offering",
      result2: "✓ Vertical page built and published before your next enterprise pitch",
      prompt3: "Update the hero from 'Understand risk to your business' to include our 25+ years expertise stat",
      result3: "✓ Hero updated in minutes"
    }
  },
  {
    id: "ops-designed",
    company: "Ops Designed",
    logo: "/assets/reports/ops-designed/logo.jpeg",
    logoNeedsBg: false,
    url: "https://opsdesigned.com",
    industry: "Sales Operations / CRM / Pipedrive",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new 5-star client testimonial to the Client testimonials section",
      result1: "✓ Testimonial live same day, no designer needed",
      prompt2: "Add Make.com and HubSpot to the Integrating With 30+ Services section",
      result2: "✓ Logos and links added in minutes",
      prompt3: "Create a landing page for real estate teams looking to automate their Pipedrive pipeline",
      result3: "✓ Vertical page built and published before your next outreach push"
    }
  },
  {
    id: "over-j-consulting",
    company: "Over J Consulting",
    logo: "/assets/reports/over-j-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://overjconsulting.com",
    industry: "Business Consulting / Strategy / Technology",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a case study under ANALYSIS showing how we identified a growth opportunity for a recent client",
      result1: "✓ Case study live same day, no designer needed",
      prompt2: "Add a WORK WITH US page with our engagement model and a contact form",
      result2: "✓ Page built and published before your next prospect conversation",
      prompt3: "Update the hero from 'ENGINEERING GREATER POSSIBILITIES' to highlight a specific client outcome",
      result3: "✓ Hero updated in minutes"
    }
  },
  {
    id: "panorama-strategy",
    company: "Panorama Strategy",
    logo: "/assets/reports/panorama-strategy/logo.jpeg",
    logoNeedsBg: false,
    url: "https://panoramastrategy.com",
    industry: "Social Impact / Strategy Consulting",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a recent client project under Our Approach showing how we identified a creative solution to a housing policy challenge",
      result1: "✓ Case study live same day, no designer needed",
      prompt2: "Add a partner organizations section with logos and a Let's work together form",
      result2: "✓ Section built and published before your next stakeholder meeting",
      prompt3: "Update the hero from 'YOUR VISION. OUR PLATFORM. IMPACT.' to highlight a specific measurable outcome",
      result3: "✓ Hero updated in minutes"
    }
  },
  {
    id: "pisces-oceans",
    company: "Pisces Oceans Inc.",
    logo: "/assets/reports/pisces-oceans/logo.jpeg",
    logoNeedsBg: false,
    url: "https://piscesoceans.ca",
    industry: "Ocean Conservation / Project Management",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new project under Strengthen your Ocean project showing our latest coastal restoration engagement",
      result1: "✓ Project added same day, no designer needed",
      prompt2: "Update the Share the story of your work section with our most recent impact report",
      result2: "✓ Section updated in minutes with linked download",
      prompt3: "Add a funders page with grant opportunities and an Eliminate my barriers intake form",
      result3: "✓ Page built and published before your next funding cycle"
    }
  },
  {
    id: "psblty",
    company: "PSBLTY",
    logo: "/assets/reports/psblty/logo.jpeg",
    logoNeedsBg: false,
    url: "https://psblty.com",
    industry: "Brand Strategy / Financial Services",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a client results section showing how we repositioned a financial advisor firm ahead of the wealth transfer",
      result1: "✓ Case study live same day, no designer needed",
      prompt2: "Create a landing page for RIAs preparing for the greatest wealth transfer in history",
      result2: "✓ Vertical page built and published before your next outreach push",
      prompt3: "Test 'The Fortuned Favor The BOLD' vs 'Your brand is your untapped advantage' as the hero",
      result3: "✓ Both variants running in parallel within the hour"
    }
  },
  {
    id: "resilient-markets",
    company: "ResilientMarkets",
    logo: "/assets/reports/resilient-markets/logo.jpeg",
    logoNeedsBg: false,
    url: "https://resilientmarkets.com",
    industry: "Climate Strategy / Regenerative Design",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a case study under Climate Strategy and Analysis showing measurable impact for a recent government client",
      result1: "✓ Case study live same day, no designer needed",
      prompt2: "Create a landing page for nonprofits focused on our Regenerative Design Principles Workshops",
      result2: "✓ Vertical page built and published before your next outreach push",
      prompt3: "Update the hero from 'turbo charges entities that are making the world a better place' to include a specific outcome stat",
      result3: "✓ Hero updated in minutes"
    }
  },
  {
    id: "santa-barbara-it-group",
    company: "Santa Barbara IT Group",
    logo: "/assets/reports/santa-barbara-it-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://sbitgroup.com",
    industry: "Managed IT / Cybersecurity / Luxury Residential",
    pages: 7,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a Luxury Residential page explaining our white-glove IT setup and smart home integration",
      result1: "✓ New page live same day, no designer needed",
      prompt2: "Update the Enterprise-Grade Cybersecurity section with our latest AI-powered threat detection capability",
      result2: "✓ Section updated in minutes",
      prompt3: "Change 'GET IN TOUCH' to 'Schedule a Site Assessment' and add a calendar booking link",
      result3: "✓ CTA updated and calendar embedded before your next client call"
    }
  },
  {
    id: "sterling-road",
    company: "Sterling Road",
    logo: "/assets/reports/sterling-road/logo.jpeg",
    logoNeedsBg: false,
    url: "https://sterlingroad.com",
    industry: "Pre-Seed Venture Capital",
    pages: 7,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new company to the Portfolio section with their logo and one-liner",
      result1: "✓ Portfolio updated same day, no designer needed",
      prompt2: "Add a new resource to the Resources section — a guide on pricing for pre-seed founders",
      result2: "✓ Resource linked and live before your next newsletter goes out",
      prompt3: "Update the Apply Now CTA to include what founders can expect in the first 30 days after investment",
      result3: "✓ CTA copy updated in minutes"
    }
  },
  {
    id: "the-abbey-group",
    company: "The Abbey Group",
    logo: "/assets/reports/the-abbey-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://abbey-group.com",
    industry: "Nonprofit Fundraising / Catholic Organizations",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new partner apostolate to Our Partnerships with their mission and a link",
      result1: "✓ Partnership added same day, no designer needed",
      prompt2: "Add a campaign results page showing a recent fundraising outcome and what it funded",
      result2: "✓ Results page live before your next donor conversation",
      prompt3: "Update the Let's begin a conversation CTA to link directly to a scheduling page",
      result3: "✓ CTA updated and calendar embedded in minutes"
    }
  },
  {
    id: "torch",
    company: "Torch",
    logo: "/assets/reports/torch/logo.svg",
    logoNeedsBg: false,
    url: "https://torchgrowth.com",
    industry: "Digital Studio / Marketplace Growth",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Publish a new blog post on our Monthly Sprints process with a case study from a gig economy client",
      result1: "✓ Post live same day, no designer needed",
      prompt2: "Add a staffing marketplaces landing page under Our Markets with a READ MORE CTA",
      result2: "✓ Vertical page built and published before your next BD push",
      prompt3: "Update the hero from 'We are a digital studio that builds and grows marketplace businesses' to include a client result",
      result3: "✓ Hero updated in minutes"
    }
  },
  {
    id: "tylt-ventures",
    company: "TYLT Ventures",
    logo: "/assets/reports/tylt-ventures/logo.jpeg",
    logoNeedsBg: false,
    url: "https://tyltventures.com",
    industry: "Venture Capital / Startup Growth",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new portfolio company under Select Investment Criteria with their stage and sector",
      result1: "✓ Investment added same day, no designer needed",
      prompt2: "Update Our Process to reflect our updated 4-step vetting approach",
      result2: "✓ Process section updated in minutes",
      prompt3: "Add a founder resources page with our Due Diligence checklist and an Apply Now form",
      result3: "✓ Page built and published before your next batch of applications"
    }
  },
  {
    id: "webintensive-software",
    company: "WebINTENSIVE Software",
    logo: "/assets/reports/webintensive-software/logo.jpeg",
    logoNeedsBg: false,
    url: "https://webintensive.com",
    industry: "Business Automation / Software Consulting",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to include a specific client result — like 40% reduction in manual processing time",
      result1: "✓ Hero updated in minutes, no designer needed",
      prompt2: "Add a new Effectiveness Multiplier case study under Gain Quick Wins with a before/after breakdown",
      result2: "✓ Case study live same day, ready for your next prospect conversation",
      prompt3: "Add a separate landing page for Engineering for Optimal Outcomes targeting mid-size operations teams",
      result3: "✓ Page built and published before your next outbound push"
    }
  },
  {
    id: "weill-media",
    company: "Weill Media, LLC",
    logo: "/assets/reports/weill-media/logo.jpeg",
    logoNeedsBg: false,
    url: "https://weillmedia.com",
    industry: "Creative Studio / Video Production",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new project to the Filming section with an embed and one-line client description",
      result1: "✓ Project live same day, no designer needed",
      prompt2: "Update the Let's Chat CTA to link to a booking page with a short inquiry form",
      result2: "✓ CTA updated and booking flow live before your next client conversation",
      prompt3: "Add an Editorial showcase page with stills and a breakdown of the post-production process",
      result3: "✓ Page built and published before your next pitch"
    }
  },
  {
    id: "ai-momentum-partners",
    company: "AI Momentum Partners",
    logo: "/assets/reports/ai-momentum-partners/logo.jpeg",
    logoNeedsBg: false,
    url: "https://momentumpartners.ai",
    industry: "AI Strategy & Consulting",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new section under 'Our results speak for themselves' with our Q1 2026 client ROI numbers.",
      result1: "✓ New results section written, designed, and live — no design brief, no back-and-forth",
      prompt2: "Change 'Book a Consultation' to 'Start Your AI Roadmap' and move it higher on the homepage.",
      result2: "✓ CTA updated from 'Book a Consultation' to 'Start Your AI Roadmap' and repositioned in the hero section",
      prompt3: "Add a new page under Leader Hub for our AI readiness self-assessment tool.",
      result3: "✓ Page scaffolded with the right nav placement, matching the existing site design, same day"
    }
  },
  {
    id: "bluedialog",
    company: "Bluedialog",
    logo: "/assets/reports/bluedialog/logo.jpeg",
    logoNeedsBg: false,
    url: "https://bluedialog.com",
    industry: "Low-Code App Development",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new blog post about Power Automate for approval workflows — it's already written, just needs to go live.",
      result1: "✓ Post published with proper formatting, metadata, and nav integration — no Wix blog editor friction",
      prompt2: "Update 'Power Apps Services' page to include our new rapid prototyping package with pricing.",
      result2: "✓ Service page updated with new offering details, live immediately",
      prompt3: "Add a dedicated landing page for Power BI Services targeting operations managers searching for dashboard solutions.",
      result3: "✓ New SEO-targeted page built under the Services nav, with a 'SEND MESSAGE' CTA and matching design — same day"
    }
  },
  {
    id: "book-society",
    company: "Book Society",
    logo: "/assets/reports/book-society/logo.jpeg",
    logoNeedsBg: false,
    url: "https://booksociety.social",
    industry: "Hospitality / Experiential Retail",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new event to the Events page — author reading on May 10th, ticketed, link to Eventbrite.",
      result1: "✓ New event entry live on the Events page, with date, description, and booking link — within minutes",
      prompt2: "Update the hero banner to promote our spring membership drive — 'Join Book Society. First month free.'",
      result2: "✓ Hero updated immediately, with the ability to revert after the promotion ends without any designer involvement",
      prompt3: "Add a new Book Club listing under Book Clubs for our new mystery genre club starting in June.",
      result3: "✓ New club page built, matching existing layout, with a 'Sign Up' form — same day"
    }
  },
  {
    id: "brandedstreams",
    company: "BrandedStreams",
    logo: "/assets/reports/brandedstreams/logo.jpeg",
    logoNeedsBg: false,
    url: "https://brandedstreams.com",
    industry: "Product Placement & Branded Content",
    pages: 8,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new placement to 'TV SHOWS / SERIES' — product name, show title, network, and a still from the scene.",
      result1: "✓ New placement card live in the TV Shows section, properly formatted, same day",
      prompt2: "Update the Brands page to add our latest CPG client with their logo and a one-line placement description.",
      result2: "✓ New brand entry added, matching the existing grid layout, without touching a Webflow designer",
      prompt3: "Create a dedicated landing page for 'WEB SERIES & BRANDED CONTENT' to capture inbound from streaming producers.",
      result3: "✓ New vertical landing page built with proper URL, SEO metadata, and a 'CONTACT US' CTA — live same day"
    }
  },
  {
    id: "crowdcoursing",
    company: "CrowdCoursing",
    logo: "/assets/reports/crowdcoursing/logo.jpeg",
    logoNeedsBg: false,
    url: "https://crowdcoursing.com",
    industry: "EdTech / School Safety Software",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero headline from 'One Platform for People, Safety & Engagement' to emphasize our new First Responder integration.",
      result1: "✓ Hero updated, new angle live — A/B test it the same day",
      prompt2: "Add a new use case section for 'Volunteer Coordinators' with a feature breakdown and a 'Book A Free Demo' CTA.",
      result2: "✓ New section built and placed on the homepage — no dev required",
      prompt3: "Create a dedicated landing page for school districts in California to use for a paid campaign.",
      result3: "✓ Targeted landing page built, copy customized, demo form wired — ready to run ads against same day"
    }
  },
  {
    id: "crux-workplace",
    company: "CRUX Workplace",
    logo: "/assets/reports/crux-workplace/logo.jpeg",
    logoNeedsBg: false,
    url: "https://crux-workplace.com",
    industry: "Workplace Strategy & CRE Consulting",
    pages: 11,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new project to the Projects page — here's the client name, square footage, and what we delivered.",
      result1: "✓ Project case study live on the Projects page within the hour — no designer needed",
      prompt2: "Update the homepage CTA from 'Schedule a no-obligation 30 minute call with David' to include a direct calendar link.",
      result2: "✓ CTA updated and calendar embed added — friction removed from the conversion path, same day",
      prompt3: "Add a new free resource to the CFO Resources section — an office right-sizing guide with a download form.",
      result3: "✓ New resource page built, gated form added, linked from the Free Resources dropdown — shipped before end of day"
    }
  },
  {
    id: "crystal-genetics",
    company: "Crystal Genetics",
    logo: "/assets/reports/crystal-genetics/logo.svg",
    logoNeedsBg: false,
    url: "https://crystalgenetics.com",
    industry: "Biotech / Liquid Biopsy Cancer Detection",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new peer-reviewed publication to the Publications page — here's the title, journal, and DOI link.",
      result1: "✓ Publication entry added and live within minutes — no WordPress login required",
      prompt2: "Update the Technology page to reflect our latest Crystalogram validation data — here's the new accuracy figure.",
      result2: "✓ Page updated with new data point, styled to match — done before your next investor call",
      prompt3: "Add a new MCED milestone section to the homepage with a timeline of key development stages.",
      result3: "✓ New section built and placed on the homepage — your progress visible to every visitor same day"
    }
  },
  {
    id: "d3-sports-tech",
    company: "D3 Sports Tech",
    logo: "/assets/reports/d3-sports-tech/logo.jpeg",
    logoNeedsBg: false,
    url: "https://d3sportstech.com",
    industry: "Sports Technology / Fan Engagement",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new partner logo to the Partners page — here's the brand and a one-line description of the integration.",
      result1: "✓ Partner added and live within minutes — your roster stays current after every deal closes",
      prompt2: "Update the homepage hero from 'One Digital Wallet. Infinite Possibilites' to include a line about certified real-money prizes.",
      result2: "✓ Hero copy updated and live — A/B test the new angle the same afternoon",
      prompt3: "Create a dedicated landing page for Esports companies with a 'CONNECT' CTA and a short feature breakdown.",
      result3: "✓ Esports-specific page built, CTA wired, ready to run traffic against — shipped same day"
    }
  },
  {
    id: "editora",
    company: "Editora",
    logo: "/assets/reports/editora/logo.jpeg",
    logoNeedsBg: false,
    url: "https://editora.ai",
    industry: "AI Video Production / Real Estate Tech",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero CTA from 'TRY DESKTOP APP FREE' to 'Create Your First Listing Video Free — No Edit Skills Needed' and add a subtext line under the button.",
      result1: "✓ CTA updated, subtext added — live in minutes, ready to test conversion against current version",
      prompt2: "Add a new section called 'Used By Agents At These Brokerages' below the hero with a row of brokerage logos and the '100+ Brokerages Nationwide' stat.",
      result2: "✓ Social proof section built and live — strengthens trust right where new visitors land",
      prompt3: "Add a FAQ section answering 'How long does it take to create a video?' and 'Do I need to upload anything besides the listing address?'",
      result3: "✓ FAQ live, objections handled on the page — fewer support questions, higher conversion"
    }
  },
  {
    id: "electric-vehicle-choice",
    company: "Electric Vehicle Choice",
    logo: "/assets/reports/electric-vehicle-choice/logo.jpeg",
    logoNeedsBg: false,
    url: "https://evchoice.com",
    industry: "Commercial EV Sales & Fleet Solutions",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the 'Be an early adopter to take advantage of government funding' section with the current HVIP funding deadline and add a 'Check Eligibility' CTA button.",
      result1: "✓ Funding callout updated and live in minutes — time-sensitive copy stays accurate without a support ticket",
      prompt2: "Add a new 'Fleet Financing' landing page with the Pre-Approval section content, a loan calculator prompt, and a 'Get Pre-Approved' CTA.",
      result2: "✓ New page built, styled to match, live the same day — capture fleet buyers at the financing decision point",
      prompt3: "Change 'FIND OUT MORE' to 'Take Charge of Your Fleet' across all financing CTAs to match our brand language.",
      result3: "✓ CTA copy updated sitewide — consistent voice, no manual page-by-page edits"
    }
  },
  {
    id: "eqimindset",
    company: "EQImindset",
    logo: "/assets/reports/eqimindset/logo.jpeg",
    logoNeedsBg: false,
    url: "https://eqimindset.com",
    industry: "Organizational Consulting / DEI & Belonging",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subheadline to lead with 'The Belonging Benefit™ — turning employee voice into structured participation without burnout, risk, or performative inclusion'.",
      result1: "✓ Hero updated and live in minutes — sharper positioning, no WordPress editor frustration",
      prompt2: "Add a new upcoming event to the 'Upcoming Events' section — title, date, registration link, and a one-sentence description.",
      result2: "✓ Event live the same day you confirm the details — no waiting until someone can log into the backend",
      prompt3: "Add a dedicated page for 'Our PMBC Framework' that explains People, Metrics, Budget, and Communication with a 'Schedule a Discovery Call' CTA at the bottom.",
      result3: "✓ Framework page built, styled, live — gives prospects a clear path from learning to booking"
    }
  },
  {
    id: "first-tracks-logistics",
    company: "First Tracks Logistics",
    logo: "/assets/reports/first-tracks-logistics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://firsttrackslogistics.com",
    industry: "Event Logistics / Specialty Freight",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subheadline to 'Settling for inexperience can derail your event — we've handled the world's biggest tours and we won't let that happen' and change the primary CTA to 'Request a Quote'.",
      result1: "✓ Hero and CTA updated live — sharper urgency, no Wix editor required",
      prompt2: "Add a new service section for 'Worldwide Concert Touring' under Event Logistics with a short description of what's included and a Quote Request button.",
      result2: "✓ New section live the same day — your touring specialization visible before a prospect has to ask",
      prompt3: "Add a 'White Glove Shipments' dedicated page that details final-mile delivery, medical equipment handling, and retail roll-outs with a contact form at the bottom.",
      result3: "✓ New page built, styled, and live — high-margin service gets its own URL and SEO value"
    }
  },
  {
    id: "food-impact-partners",
    company: "Food Impact Partners",
    logo: "/assets/reports/food-impact-partners/logo.svg",
    logoNeedsBg: false,
    url: "https://foodimpactpartners.com",
    industry: "Executive Search / Food Innovation",
    pages: 15,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subheadline to: 'The best people aren't on LinkedIn. They're in our network — and we know exactly who to call for your next leadership hire.'",
      result1: "✓ Hero subheadline live in minutes — sharpens the differentiator right where candidates and clients land",
      prompt2: "Add a new sector page for 'Biomanufacturing' under our areas of focus, with a short description, key roles we place, and a 'Schedule Consultation' CTA.",
      result2: "✓ New page built and live — sector coverage visible to prospects searching for specialized search firms",
      prompt3: "Add the Arturo Elizondo testimonial from EVERY to the homepage above the 'Schedule Consultation' CTA.",
      result3: "✓ Social proof repositioned — third-party credibility closer to the conversion point, no Wix workaround needed"
    }
  },
  {
    id: "foretell-us",
    company: "Foretell Us",
    logo: "/assets/reports/foretell-us/logo.jpeg",
    logoNeedsBg: false,
    url: "https://foretellus.ai",
    industry: "AI Venture Intelligence",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with 'Start Your Free Analysis' as the primary CTA and change the subheadline to 'From idea to insights in five simple steps — Silicon Valley expertise, AI speed'.",
      result1: "✓ Hero copy and CTA live in minutes — test whether a cleaner value prop improves waitlist signups",
      prompt2: "Add a new section under 'How It Works' that explains the Ideation Feature — how it turns enhanced ideas into a Fundable and Protected Product — with a 'Join our Waitlist' CTA.",
      result2: "✓ Feature explanation live the same day — reduces drop-off from visitors who don't understand the product depth",
      prompt3: "Add a dedicated 'For Investors' page that speaks to how Foretell Us maps the innovation lifecycle and surfaces competitive landscape data before a term sheet.",
      result3: "✓ New audience page built and live — captures a segment that the current site doesn't speak to directly"
    }
  },
  {
    id: "growing-impact",
    company: "Growing Impact",
    logo: "/assets/reports/growing-impact/logo.jpeg",
    logoNeedsBg: false,
    url: "https://growingimpact.co",
    industry: "Cannabis Industry Marketing",
    pages: 2,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'How I Can Help' to lead with Brand Strategy and add a new subpoint about compliance-aware positioning.",
      result1: "✓ Section updated and live in minutes — no Wix editor, no layout issues",
      prompt2: "Add a new success story under 'Success Stories' from the client we just wrapped.",
      result2: "✓ New case study card added with matching design, same day",
      prompt3: "Change 'Contact me to discuss' to a more specific CTA for cannabis founders exploring a go-to-market.",
      result3: "✓ CTA updated across the page instantly — test it, adjust it, move on"
    }
  },
  {
    id: "hexaflex-strategies",
    company: "Hexaflex Strategies",
    logo: "/assets/reports/hexaflex-strategies/logo.jpeg",
    logoNeedsBg: false,
    url: "https://hexaflexstrategies.com",
    industry: "Strategy & Management Consulting",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'Strategy, Transformation, Innovation' to lead with the outcome we're seeing most traction on.",
      result1: "✓ Hero updated live in minutes — no Wix editor, no broken layout",
      prompt2: "Add a new project to the 'PROJECTS' section from the engagement we just closed.",
      result2: "✓ New project card added with matching design and copy, same day",
      prompt3: "Change the 'More Info' CTA to something more specific — like 'See how we work'.",
      result3: "✓ CTA updated across the page instantly — test it, keep it, or swap it again tomorrow"
    }
  },
  {
    id: "honeycomb",
    company: "Honeycomb",
    logo: "/assets/reports/honeycomb/logo.jpeg",
    logoNeedsBg: false,
    url: "https://honeycomb-labs.com",
    industry: "Parenting / Community Mobile App",
    pages: 8,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Test a new hero — lead with 'Carpooling, solved' instead of 'Your biggest parenting unlock is... other parents'.",
      result1: "✓ Hero swapped live in minutes — A/B test it, keep what converts, move on",
      prompt2: "Add a new section between 'An always-updated school calendar' and 'Carpooling, solved' for the new playdate feature.",
      result2: "✓ Section built and inserted with matching layout, same day",
      prompt3: "Update the CTA from 'Get the app' to something that speaks to the school-year timing we're leaning into.",
      result3: "✓ CTA updated across every instance on the page instantly — no dev ticket, no wait"
    }
  },
  {
    id: "ikkio",
    company: "IKKIO",
    logo: "/assets/reports/ikkio/logo.jpeg",
    logoNeedsBg: false,
    url: "https://ikkio.ai",
    industry: "Assistive Technology / AI for Visually Impaired",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subtext to reflect that beta is now open in the US and Europe.",
      result1: "✓ Updated live in minutes — no Wix editor, no layout issues",
      prompt2: "Add a new section below 'Get early access' with a short explainer of how the smart glasses integration works.",
      result2: "✓ Section built and inserted with matching design, same day",
      prompt3: "Change 'Get early access' to 'Join the beta — launching 2026' to create more urgency.",
      result3: "✓ CTA updated across the page instantly — test it, measure signups, adjust again tomorrow"
    }
  },
  {
    id: "illumina-cpa-group",
    company: "illumina CPA Group",
    logo: "/assets/reports/illumina-cpa-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://illumina.cpa",
    industry: "CPA / Tax & Advisory Services",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with 'Taking Your Business to the Next Level' and sharpen the subtext around transaction advisory.",
      result1: "✓ Updated live in minutes — no Wix editor, no waiting on a developer",
      prompt2: "Add Solar and Mining & Drilling to the industries section with matching card design.",
      result2: "✓ New industry cards added same day — consistent layout, no CSS wrestling",
      prompt3: "Change 'Learn More' to 'Talk to a CPA' to reduce friction for inbound leads.",
      result3: "✓ CTA updated across all eight pages instantly — test it, measure contact form submissions, keep or revert"
    }
  },
  {
    id: "ingeniti",
    company: "inGeniti",
    logo: "/assets/reports/ingeniti/logo.jpeg",
    logoNeedsBg: false,
    url: "https://ingeniti.com",
    industry: "Energy & Water Management / Clean Tech",
    pages: 11,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with 'A Global EnergyNet is the future' and connect it to the consumer app launch.",
      result1: "✓ Hero updated live in minutes — no WordPress dashboard, no plugin conflicts",
      prompt2: "Add a new section under 'Utility Solutions' for the new grid monitoring partnership we just announced.",
      result2: "✓ Section built and inserted with matching layout, same day — no brief, no build queue",
      prompt3: "Change 'Contact Us Now' to 'Get a Demo' to better match where utility prospects are in the funnel.",
      result3: "✓ CTA updated across all 11 pages instantly — measure it, keep it, or swap it back"
    }
  },
  {
    id: "inklogic",
    company: "Inklogic",
    logo: "/assets/reports/inklogic/logo.jpeg",
    logoNeedsBg: false,
    url: "https://inklogic360.com",
    industry: "Office Equipment Sales & Service",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero headline from 'Your Office Just Got Smarter' to 'Same-Day Service. Zero Downtime.'",
      result1: "✓ Updated instantly — no ticket, no wait, live in under 10 minutes",
      prompt2: "Add a new section under 'Award-Winning Hardware' featuring our latest Canon multifunction lineup with specs and a quote form.",
      result2: "✓ New section built and live same day — no brief, no back-and-forth, no approval chain",
      prompt3: "Change the 'Get A Free Quote' button to 'Schedule A Free Consultation' on mobile only to test which converts better.",
      result3: "✓ A/B variant deployed in minutes — swap it back or keep it based on real results, not guesswork"
    }
  },
  {
    id: "innovation-44",
    company: "Innovation 4.4",
    logo: "/assets/reports/innovation-44/logo.svg",
    logoNeedsBg: false,
    url: "https://innovation44.org",
    industry: "Health Technology / Sustainable Innovation",
    pages: 11,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero headline to reflect our new partnership with a UN agency under 'Protecting Life.'",
      result1: "✓ Live in minutes — no ticket, no designer loop, no waiting",
      prompt2: "Add a new entry to the Solutions Portfolio section for our latest FDA-approved sterilization device with specs and a 'Support Our Work' CTA.",
      result2: "✓ New solution card built and published same day, fully matched to your existing design",
      prompt3: "Reorder the Solutions Portfolio so vaccine solutions appear first, and add a press/media section we've been missing.",
      result3: "✓ Reordered and new section added in one session — no separate brief required"
    }
  },
  {
    id: "intelletec-energy",
    company: "Intelletec Energy",
    logo: "/assets/reports/intelletec-energy/logo.jpeg",
    logoNeedsBg: false,
    url: "https://intelletecenergy.com",
    industry: "Renewable Energy Recruitment",
    pages: 8,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero tagline from 'Finding top tier talent today, so you can continue to focus on the future' to lead with our solar division focus for Q3.",
      result1: "✓ Updated and live in under 10 minutes — no back-and-forth, no waiting on anyone",
      prompt2: "Add a Project Hiring Assignments landing page under Our Services with a dedicated intake form for large-scale renewable buildouts.",
      result2: "✓ New page built same day, matching your existing design, with form wired and tested",
      prompt3: "Add a 'Talent Seekers' case study section we've been putting off — two client wins with anonymized metrics and a Contact Us CTA.",
      result3: "✓ New section live the same session — no design brief, no approval chain"
    }
  },
  {
    id: "invenir-ai",
    company: "Invenir AI",
    logo: "/assets/reports/invenir-ai/logo.jpeg",
    logoNeedsBg: false,
    url: "https://invenir.ai",
    industry: "AI-Powered Product Launch & Sales Enablement",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with 'Your Innovation is Fast but Sellers are Lagging' as the primary problem statement instead of the current tagline.",
      result1: "✓ Reframed and live in minutes — test which angle drives more Contact Us clicks without waiting on anyone",
      prompt2: "Add a dedicated LaunchOps platform page under 'Put Invenir to Work' with a features breakdown and a Book a Call CTA.",
      result2: "✓ New page built and live same day, fully consistent with existing design and navigation",
      prompt3: "Add a customer results section we've been missing — 3 launch stats with client outcomes and a 'Launch as Fast as You Innovate' headline.",
      result3: "✓ Social proof section added in one session, no design brief required"
    }
  },
  {
    id: "itemfarm",
    company: "Itemfarm",
    logo: "/assets/reports/itemfarm/logo.jpeg",
    logoNeedsBg: false,
    url: "https://visititemfarm.com",
    industry: "On-Demand Manufacturing / Consumer Hardware",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Getting Started is Easy' to reflect our new 3-step flow — Reserve, Setup, Create — and remove the Chat step.",
      result1: "✓ Updated and live in minutes — no designer, no ticket, no delay",
      prompt2: "Change the Orchard pricing on 'How much does an Orchard cost?' from $499/month to $449/month with a limited-time note.",
      result2: "✓ Pricing updated instantly — critical for campaigns where stale numbers kill conversions",
      prompt3: "Add a new 'What can an Orchard make?' category for prosthetics and assistive devices — we keep getting asked and there's nothing on the site.",
      result3: "✓ New category added same day with supporting copy, images, and an Order Now CTA"
    }
  },
  {
    id: "iwish",
    company: "iWish",
    logo: "/assets/reports/iwish/logo.jpeg",
    logoNeedsBg: false,
    url: "https://iwish.ai",
    industry: "AI Sales Training & Enablement",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Test a new hero headline: 'The fastest way to turn cold calls into booked meetings' — run it alongside the current one for two weeks.",
      result1: "✓ Variant live in minutes — swap back or commit based on actual conversion data, not a gut call",
      prompt2: "Add a dedicated landing page for the AI Power Dialer feature with its own Book a Demo form for outbound-focused teams.",
      result2: "✓ New page built and live same day — full design match, form wired, URL clean",
      prompt3: "Add a customer proof section to the homepage — we have SDR ramp time stats that aren't anywhere on the site yet.",
      result3: "✓ Social proof section added in one session, tied directly to the 'AI Sales Roleplay' feature block"
    }
  },
  {
    id: "jarvis-pay",
    company: "JARVIS Pay",
    logo: "/assets/reports/jarvis-pay/logo.jpeg",
    logoNeedsBg: false,
    url: "https://jarvispay.net",
    industry: "Merchant Services & Business Technology",
    pages: 11,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Move 'Simple and affordable Merchant Services — no hidden fees, no termination fees' higher on the homepage so it's visible before the fold.",
      result1: "✓ Reordered and live in minutes — no designer, no ticket, no delay",
      prompt2: "Add a dedicated landing page for 'The World's Greatest POS Systems' with hardware specs, pricing tiers, and a Book a Demo form.",
      result2: "✓ New page built same day, matching your existing design and navigation structure",
      prompt3: "Add a comparison table to the All-In-One Solution section showing JARVIS Pay vs. traditional merchant service providers — we keep explaining this on calls.",
      result3: "✓ Comparison table added in one session, turning a recurring sales conversation into a self-serve answer on the site"
    }
  },
  {
    id: "keepitgrowing",
    company: "KeepItGrowing",
    logo: "/assets/reports/keepitgrowing/logo.jpeg",
    logoNeedsBg: false,
    url: "https://keep-it-growing.com",
    industry: "Digital Marketing & Branding Agency",
    pages: 14,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero headline from 'To Help You Grow Your Business' to 'More Clients. Less Guesswork. We Handle the Marketing.' and test which one drives more quote requests.",
      result1: "✓ New variant live in minutes — no plugin, no developer, no waiting",
      prompt2: "Add a dedicated landing page for Electronic Broadcasts with pricing tiers, sample templates, and a Request a Quote form.",
      result2: "✓ New page built same day, consistent with your existing design and nav structure",
      prompt3: "Add a results/case study section to the Social Media Marketing page — we have client growth numbers that aren't on the site anywhere.",
      result3: "✓ Proof section added in one session, turning unseen wins into visible credibility"
    }
  },
  {
    id: "local-leads-leader",
    company: "Local Leads Leader",
    logo: "/assets/reports/local-leads-leader/logo.jpeg",
    logoNeedsBg: false,
    url: "https://localleadsleader.com",
    industry: "Local Digital Advertising & Marketing",
    pages: 12,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the homepage hero from 'Amplify Your Brand Where It Matters Most' to 'Get In Front of Local Customers Before Your Competitors Do' and run it for two weeks.",
      result1: "✓ New variant live in minutes — test it, measure it, keep or revert without touching a plugin",
      prompt2: "Add three new businesses to the Venue Partner Network page — we signed them last week and they're not on the site yet.",
      result2: "✓ Partner listings added same day — no brief, no ticket, no delay",
      prompt3: "Add a dedicated Google Business Profile optimization landing page under Marketing Solutions with a case study and a Get In Contact CTA.",
      result3: "✓ New service page built same day, matching your existing design and nav — turns a service line into a standalone conversion asset"
    }
  },
  {
    id: "lto",
    company: "LTO",
    logo: "/assets/reports/lto/logo.jpeg",
    logoNeedsBg: false,
    url: "https://joinlto.com",
    industry: "B2B Lead Generation & Trade Show Sales",
    pages: 12,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Test a new hero variant: 'Stop Attending Trade Shows. Start Closing Them.' — run it against 'Turn Trade Shows & Conferences into your B2B Lead Generation Machine' for 30 days.",
      result1: "✓ A/B variant live in minutes — data-driven decision, no designer involved",
      prompt2: "Add a landing page for 'Your Fast Track to Trade Show Selling Success' targeted at first-time exhibitors with a Book a Call CTA.",
      result2: "✓ Dedicated page built same day, matching existing design — a focused entry point for a specific buyer segment",
      prompt3: "Add a results section showing trade show ROI stats from past clients — we have the numbers but they're not on the site anywhere.",
      result3: "✓ Proof section added in one session under 'Your Trusted Partner in Trade Show Success,' turning internal data into visible credibility"
    }
  },
  {
    id: "marital-dispute-advisors",
    company: "Marital Dispute Advisors",
    logo: "/assets/reports/marital-dispute-advisors/logo.jpeg",
    logoNeedsBg: false,
    url: "https://maritaldisputeadvisors.com",
    industry: "Workplace Benefits / Divorce Support",
    pages: 7,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Packages page to reflect the new pricing tiers and add a CONNECT WITH US button at the bottom of each one.",
      result1: "✓ Packages page updated and live within minutes — no Webflow editor login, no designer needed",
      prompt2: "Add a new Case Results entry with anonymized outcome data from Q1.",
      result2: "✓ New case result published same day, formatted to match existing entries",
      prompt3: "Change the hero subtext from 'Help your business navigate divorce' to something that leads with the ROI angle for HR buyers.",
      result3: "✓ Hero updated instantly — test the new angle, revert if needed, no approval queue"
    }
  },
  {
    id: "medisensor",
    company: "MediSensor",
    logo: "/assets/reports/medisensor/logo.jpeg",
    logoNeedsBg: false,
    url: "https://medisensor.tech",
    industry: "Healthcare AI / Medication Adherence",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Solutions page to add a new section for Payers that leads with cost reduction data.",
      result1: "✓ New section live within minutes — formatted to match the existing Solutions layout",
      prompt2: "Change the hero subtext to 'The only AI platform that tracks every dose in real time' and add a secondary CTA for the Customer Portal.",
      result2: "✓ Hero updated and second CTA added, ready to test conversion impact same day",
      prompt3: "Add a new page called 'The Science Behind MediSensor' with our clinical validation summary and a Learn More button linking to the About page.",
      result3: "✓ Page built, linked, and live — no WordPress developer required"
    }
  },
  {
    id: "mentorship-academy",
    company: "Mentorship Academy",
    logo: "/assets/reports/mentorship-academy/logo.jpeg",
    logoNeedsBg: false,
    url: "https://mentorship-academy.com",
    industry: "Education / AI & Digital Literacy Training",
    pages: 11,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the CENTER for EXCELLENCE in AI FLUENCY page with the new cohort dates and add a registration button.",
      result1: "✓ Page updated and registration CTA live same day — no Wix editor handoff needed",
      prompt2: "Add a new case study to the CASE STUDIES | PORTFOLIO section with our latest client outcome.",
      result2: "✓ New case study published in minutes, formatted to match existing entries",
      prompt3: "The hero headline should now read 'The time to change the way we learn and work is now' — make it larger and add a subhead about the 5 Core Competencies.",
      result3: "✓ Hero updated instantly, subhead added, layout adjusted — ready to review before publishing"
    }
  },
  {
    id: "mg-media-creative",
    company: "MG Media Creative",
    logo: "/assets/reports/mg-media-creative/logo.jpeg",
    logoNeedsBg: false,
    url: "https://mgmediacreative.com",
    industry: "Healthcare Marketing / Private Practice Growth",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero to 'Driving Growth For Private Practices Through Strategic Marketing Systems' and move the Growth Playbook download above the fold.",
      result1: "✓ Hero updated and lead magnet repositioned live within minutes",
      prompt2: "Add a new Services page section for our social media management package with a 'Grab A Growth Strategy Session' CTA at the bottom.",
      result2: "✓ New section built and published same day, matching your existing design",
      prompt3: "Create a dedicated landing page for a new specialty — orthopedic practices — with its own headline, bullet points, and booking form.",
      result3: "✓ New landing page live within hours, no developer or designer required"
    }
  },
  {
    id: "middle-eastern-virtual-clinic",
    company: "Middle Eastern Virtual Clinic",
    logo: "/assets/reports/middle-eastern-virtual-clinic/logo.jpeg",
    logoNeedsBg: false,
    url: "https://middleeasternvirtualclinic.org",
    industry: "Nonprofit Healthcare / Pediatric Telemedicine",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new MEVC Story about the Ramzy Farag Pediatric Clinic's latest patient milestone with a Donate button at the bottom.",
      result1: "✓ New story published same day — formatted to match existing entries, donation link live immediately",
      prompt2: "Update the Impact page with new patient numbers from Q1 and add a section for our new partnership.",
      result2: "✓ Impact stats updated and partnership section added in minutes, no designer needed",
      prompt3: "Create a dedicated landing page for our Ramadan fundraising campaign with a headline, progress bar, and Donate/Partnership Plans CTA.",
      result3: "✓ Campaign page built and live within hours — ready to share before the window closes"
    }
  },
  {
    id: "mission-profitable",
    company: "Mission Profitable",
    logo: "/assets/reports/mission-profitable/logo.jpeg",
    logoNeedsBg: false,
    url: "https://missionprofitable.com",
    industry: "Sales Training & Revenue Consulting",
    pages: 11,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the 80/20 Sales Training page with the new curriculum outline and add a Contact Us button at the bottom.",
      result1: "✓ Page updated and CTA live in minutes — no WordPress editor or developer needed",
      prompt2: "Add a new testimonial to the High ROI Income Coaching page from a recent client.",
      result2: "✓ Testimonial published same day, formatted to match the existing section",
      prompt3: "Create a standalone landing page for the Keynote Speeches offer with a booking form and a line that says 'When time = Money and you don't want to waste either!'",
      result3: "✓ Dedicated page built and live within hours — ready to drive traffic directly"
    }
  },
  {
    id: "monster-forge-productions",
    company: "Monster Forge Productions",
    logo: "/assets/reports/monster-forge-productions/logo.jpeg",
    logoNeedsBg: false,
    url: "https://monsterforgeproductions.com",
    industry: "Transmedia Entertainment / Comics & Film",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new entry to the COMICS section for our latest release with cover art, a synopsis, and a link to the STORE.",
      result1: "✓ New comic page live within minutes — cover image uploaded, store link active, formatted to match existing entries",
      prompt2: "Update the homepage hero from 'We Make Monsters' to lead with the new brand deal announcement.",
      result2: "✓ Hero updated instantly — no Wix editor queue, no waiting on a contractor",
      prompt3: "Create a dedicated page for the AUDIO section with episode listings, a player embed, and a link back to ABOUT US.",
      result3: "✓ New Audio page built and live same day, matching the Monster Forge visual style"
    }
  },
  {
    id: "my-pathway-to-college",
    company: "My Pathway to College",
    logo: "/assets/reports/my-pathway-to-college/logo.jpeg",
    logoNeedsBg: false,
    url: "https://mypathwaytocollege.com",
    industry: "College Admissions Consulting",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add three new college acceptances to the College Acceptances page — Harvard, UCLA, and Georgetown — with the student's major listed.",
      result1: "✓ Acceptances added and live within minutes — no editor login, no designer needed",
      prompt2: "Update the 11th Grade page with new milestones for the upcoming test prep season and add a 'Complete our contact us form' button at the bottom.",
      result2: "✓ Page updated same day, CTA linked directly to the consultation form",
      prompt3: "Create a new Blog post called 'What Colleges Are Really Looking For in 2026' with a featured image and a link to the Online Course.",
      result3: "✓ Post published within hours, formatted to match existing blog entries and cross-linked to the course"
    }
  },
  {
    id: "mycro-harvest",
    company: "Mycro Harvest",
    logo: "/assets/reports/mycro-harvest/logo.jpeg",
    logoNeedsBg: false,
    url: "https://mycroharvest.com",
    industry: "AgriTech / AI-Powered Mushroom Farming",
    pages: 4,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'The Future of Fungi' and change the subheadline to lead with our carbon impact numbers.",
      result1: "✓ Hero updated and live within minutes — no Webflow editor handoff, no designer queue",
      prompt2: "Add a new section on the About page for our technology stack with a 'Let's Grow Together' CTA at the bottom.",
      result2: "✓ New section built and published same day, formatted to match the existing Mycro Harvest design",
      prompt3: "Create a dedicated investor page with a short pitch summary, traction metrics, and a Contact link — not indexed by search engines.",
      result3: "✓ Private page built and live within hours, noindex tag set, shareable link ready for your next meeting"
    }
  },
  {
    id: "nerview-surgical",
    company: "NerView Surgical",
    logo: "/assets/reports/nerview-surgical/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nerview.com",
    industry: "Medical Device / Surgical Technology",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with 'Real-Time Nerve Visualization System' instead of 'Beyond Human Vision' for the surgical audience.",
      result1: "✓ Live in minutes — test which framing resonates more with your clinical contacts",
      prompt2: "Add a section under 'Advancing what's possible with open surgical care' that outlines the three core clinical benefits with supporting data.",
      result2: "✓ New section built and placed same day — no design brief needed",
      prompt3: "Replace the generic 'Read More' CTA with 'Request a Clinical Overview' to better match what investors and surgeons actually want.",
      result3: "✓ Updated across the site instantly — sharper ask, no dev required"
    }
  },
  {
    id: "next-game-advisors",
    company: "Next Game Advisors",
    logo: "/assets/reports/next-game-advisors/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nextgameadvisors.com",
    industry: "Athletic Advisory / Higher Education Consulting",
    pages: 14,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'Simplifying the path to what's next' to something more specific about NIL and revenue growth for athletic departments.",
      result1: "✓ Updated live in minutes — test different angles without a single email to a designer",
      prompt2: "Add a case study section under 'Grow Revenue' showing a real department outcome.",
      result2: "✓ New section built and live same day — no brief, no wait, no back-and-forth",
      prompt3: "Create a dedicated landing page for the 'Grow Student Financial Capabilities' program to use in outreach to specific schools.",
      result3: "✓ Described, reviewed, shipped same day — ready before your next pitch call"
    }
  },
  {
    id: "no-fluff-selling",
    company: "No Fluff Selling",
    logo: "/assets/reports/no-fluff-selling/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nofluffselling.com",
    industry: "Revenue Operations / B2B Sales Consulting",
    pages: 12,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new landing page for the Revenue Audit offer with a short intake form and a 'Book a call' button.",
      result1: "✓ Built, reviewed, and live same day — no design brief, no developer needed",
      prompt2: "Update the 'Build Data Pipes' section to reflect a new integration partner we just added.",
      result2: "✓ Updated in minutes — accurate before prospects see it, not three days after",
      prompt3: "Test a headline on the homepage — swap 'Acquire & Retain More Customers, More Efficiently' with something more specific to mid-market B2B.",
      result3: "✓ Change it, run it, revert it if needed — all without touching a ticket system"
    }
  },
  {
    id: "nubrand",
    company: "NUBRAND",
    logo: "/assets/reports/nubrand/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nubrandmarketing.com",
    industry: "B2B Technical Marketing / Demand Generation",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'We turn technical evaluation into predictable pipeline' to test a version that leads with the evaluation problem instead of the outcome.",
      result1: "✓ Live in minutes — A/B the positioning without a designer in the loop",
      prompt2: "Add a section after 'Most buying decisions are made in evaluation' that shows three proof points — client outcomes, not just claims.",
      result2: "✓ New section built and placed same day — no brief, no approval chain",
      prompt3: "Swap the 'Technical Revenue Diagnostic™' CTA to a shorter label and test whether click-through improves.",
      result3: "✓ Changed instantly — revert it or keep it based on what you see, not what you can get approved"
    }
  },
  {
    id: "oneportal",
    company: "OnePortal",
    logo: "/assets/reports/oneportal/logo.jpeg",
    logoNeedsBg: false,
    url: "https://oneportal.com",
    industry: "Digital Marketing Platform / Revenue Growth SaaS",
    pages: 19,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero headline from 'ONE PLATFORM TO SCALE AND DRIVE REVENUE GROWTH' to lead with a specific outcome — like 'More Leads. Less Guesswork. One Platform.'",
      result1: "✓ Live in minutes — test it against the current version without a single design request",
      prompt2: "Add customer logos or a stat callout under the CONVERT section to give the traffic conversion claim more weight.",
      result2: "✓ New content placed exactly where you want it, same day",
      prompt3: "Build a dedicated landing page for the DISCOVER feature to use in paid campaigns.",
      result3: "✓ Described, reviewed, shipped same day — ready before the campaign goes live"
    }
  },
  {
    id: "ozeki-technologies",
    company: "Ozeki Technologies",
    logo: "/assets/reports/ozeki-technologies/logo.jpeg",
    logoNeedsBg: false,
    url: "https://ozeki.ai",
    industry: "AI / Contract Negotiation Automation",
    pages: 7,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'Software to Automate Negotiations for Your Business' to something more specific to the enterprise deal cycle.",
      result1: "✓ Live in minutes — test which angle resonates without waiting on a Webflow developer",
      prompt2: "Add a section beneath 'Strategic Playbooks' that shows three example negotiation scenarios the AI handles automatically.",
      result2: "✓ Built and placed same day — concrete proof points where prospects are already reading",
      prompt3: "Change the 'Get started' CTA to 'See it in action' and add a short demo request form.",
      result3: "✓ Updated and live immediately — sharper conversion path, no dev ticket required"
    }
  },
  {
    id: "parthian-energy",
    company: "Parthian Energy",
    logo: "/assets/reports/parthian-energy/logo.jpeg",
    logoNeedsBg: false,
    url: "https://parthianenergy.com",
    industry: "Battery Technology / Clean Energy",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'ADVANCING NOVEL BATTERY TECHNOLOGIES' to include a specific technology differentiator or performance claim.",
      result1: "✓ Live in minutes — sharper positioning before your next investor conversation",
      prompt2: "Add a technology overview section between the hero and the contact form that explains the core innovation in plain language.",
      result2: "✓ New section built and placed same day — gives visitors something to read before they reach out",
      prompt3: "Add a 'Latest Updates' or 'Milestones' section so the site reflects current progress without a full redesign.",
      result3: "✓ Described, reviewed, shipped same day — the site grows with the company"
    }
  },
  {
    id: "prolev-technologies",
    company: "Prolev Technologies",
    logo: "/assets/reports/prolev-technologies/logo.jpeg",
    logoNeedsBg: false,
    url: "https://prolevtech.com",
    industry: "Software Development Staffing / Remote Teams",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Rewrite the hero to lead with a specific outcome — like 'Your engineering capacity, doubled in two weeks' — instead of the current service description.",
      result1: "✓ Updated live in minutes — test the outcome-led version without waiting on a developer",
      prompt2: "Add a case study or outcome stat to the 'Prolev Differences' section so the differentiators have proof behind them.",
      result2: "✓ New content placed exactly where it needs to be, same day",
      prompt3: "Create a landing page targeting SaaS startups specifically — different headline, different service emphasis — to use in outbound.",
      result3: "✓ Described, reviewed, shipped same day — ready before the next campaign goes out"
    }
  },
  {
    id: "qview-medical",
    company: "QView Medical",
    logo: "/assets/reports/qview-medical/logo.jpeg",
    logoNeedsBg: false,
    url: "https://qviewmedical.com",
    industry: "Medical AI / Breast Cancer Detection",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with 'QView AI is live in production' as the primary proof point instead of a general claim about AI and breast cancer detection.",
      result1: "✓ Live in minutes — lead with the milestone that matters most to clinical and investor audiences",
      prompt2: "Add a deployment map or a 'Where We're Live' section showing current clinical sites beneath the production announcement.",
      result2: "✓ New section built and placed same day — makes the deployment real and verifiable for visitors",
      prompt3: "Update the 'ADVANCING DETECTION WITH AI' section to include specific sensitivity/specificity data from the ABUS CAD system.",
      result3: "✓ Updated instantly — clinical claims stay current without a designer in the loop"
    }
  },
  {
    id: "rappel",
    company: "Rappel",
    logo: "/assets/reports/rappel/logo.jpeg",
    logoNeedsBg: false,
    url: "https://rappelclimate.com",
    industry: "Carbon & Energy Management SaaS",
    pages: 8,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a customer outcome stat below 'The best ROI in the market' — something like '$X saved per site in year one' — to back the claim with a real number.",
      result1: "✓ Updated live in minutes — the proof point is there before the next demo request comes in",
      prompt2: "Update the 'Turn sustainability into tangible business value' section to include a before/after comparison showing energy cost reduction for a specific client type.",
      result2: "✓ New content placed same day — makes the abstract concrete for prospects evaluating the platform",
      prompt3: "Change the 'Schedule your demo' CTA to test a lower-commitment option — like 'See the ROI calculator' — and measure whether it drives more top-of-funnel engagement.",
      result3: "✓ Swapped instantly — run the test, see the data, decide without a developer in the loop"
    }
  },
  {
    id: "reelwurld",
    company: "ReelwUrld",
    logo: "/assets/reports/reelwurld/logo.jpeg",
    logoNeedsBg: false,
    url: "https://reelwurld.com",
    industry: "Entertainment / Participatory Cinema",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero to 'Play-based cinema we star in together' and add a signup CTA below it.",
      result1: "✓ Hero updated and CTA wired to your subscriber list — live in minutes",
      prompt2: "Add a new section under OUR OFFERINGS for our second show launch.",
      result2: "✓ New section built, styled to match, and published — no design queue",
      prompt3: "Update WHY REELWURLD? to include our latest community numbers from ReelwUrld In Numbers.",
      result3: "✓ Stats updated, copy refreshed, page live — same day, no back-and-forth"
    }
  },
  {
    id: "resurge-therapeutics",
    company: "Resurge Therapeutics",
    logo: "/assets/reports/resurge-therapeutics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://resurgetherapeutics.com",
    industry: "Biotech / Urology Drug Delivery",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a news item about our latest IPDE therapy trial results with a link to the full press release.",
      result1: "✓ News section updated, formatted, and live — same day the results drop",
      prompt2: "Update the OUR TECHNOLOGY section to include our latest IntraProstatic Drug Elution data.",
      result2: "✓ Page updated with new content and any supporting visuals — no designer required",
      prompt3: "Add an investor inquiry form below the Advanced Drug Delivery Solutions section.",
      result3: "✓ Form built, styled, and connected to your inbox — ready in under an hour"
    }
  },
  {
    id: "rmgs",
    company: "RMGS",
    logo: "/assets/reports/rmgs/logo.jpeg",
    logoNeedsBg: false,
    url: "https://rmgs.online",
    industry: "Performance Marketing / Real Money Gaming",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subheadline to emphasize our Complimentary UA Audit offer more prominently.",
      result1: "✓ Hero updated, CTA repositioned, live in minutes — no designer queue",
      prompt2: "Add a new section under Services for our Marketing Automation offering with a 'Get in Touch' CTA.",
      result2: "✓ Section built, styled to match, and published — same day",
      prompt3: "Test a new headline: 'We advocate your GGR, not UA spend' as the primary hero text.",
      result3: "✓ Variant live in 10 minutes — revert or keep it based on what converts"
    }
  },
  {
    id: "satellite",
    company: "Satellite",
    logo: "/assets/reports/satellite/logo.jpeg",
    logoNeedsBg: false,
    url: "https://satellitecpg.com",
    industry: "SaaS / CPG Sales Enablement",
    pages: 4,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subheadline to 'Remove wasted work. Empower teams. Scale distribution.' and make 'Book a demo' the only CTA above the fold.",
      result1: "✓ Hero restructured and CTA prioritized — live in minutes, no Webflow designer needed",
      prompt2: "Add a new section for UNFI Playlists under the Sell Sheet Library feature with a 'See how it works' button.",
      result2: "✓ Section built, styled to match existing feature blocks, and published same day",
      prompt3: "Test 'One link. Always up-to-date. Beautiful, trusted, and easy.' as the hero subheadline instead.",
      result3: "✓ Variant live in 10 minutes — A/B it, revert it, or ship it based on what converts"
    }
  },
  {
    id: "shine-talent",
    company: "Shine Talent",
    logo: "/assets/reports/shine-talent/logo.jpeg",
    logoNeedsBg: false,
    url: "https://shinetalent.com",
    industry: "Executive Recruiting / Talent Search",
    pages: 5,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new sector to 'We have deep networks across the following sectors' — include Climate Tech.",
      result1: "✓ Sector added, styled to match existing list, live in minutes — no Webflow queue",
      prompt2: "Update the Bespoke Service section with a new client stat and freshen the copy.",
      result2: "✓ Section updated, live same day — no brief, no build cycle, no approval back-and-forth",
      prompt3: "Test leading with 'Our network is unmatched. End. Stop.' as the hero headline instead.",
      result3: "✓ Variant live in 10 minutes — see if it converts better, revert instantly if not"
    }
  },
  {
    id: "simpl-global",
    company: "Simpl Global",
    logo: "/assets/reports/simpl-global/logo.jpeg",
    logoNeedsBg: false,
    url: "https://simplglobal.com",
    industry: "Energy Storage / Building Automation",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the SimplMeter section under Commercial to include our new energy planning specs.",
      result1: "✓ Section updated with new copy and specs — live same day, no WordPress developer needed",
      prompt2: "Add a new product page for our Scalable Energy Storage Systems with a 'Learn More' CTA.",
      result2: "✓ Page built, styled to match existing product sections, and published — same day",
      prompt3: "Test 'Plug and Play Microstorage — now available for commercial buildings' as a new hero banner.",
      result3: "✓ Banner live in 10 minutes — revert or keep it whenever you want"
    }
  },
  {
    id: "stiddle",
    company: "Stiddle",
    logo: "/assets/reports/stiddle/logo.jpeg",
    logoNeedsBg: false,
    url: "https://stiddle.com",
    industry: "SaaS / GTM Intelligence & Customer Data",
    pages: 18,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subheadline to 'Go-to-market teams rely on Stiddle to analyze, attribute, and activate customer data in one place — with AI at the core' and swap 'Book a Demo' to the primary CTA.",
      result1: "✓ Hero updated, CTA prioritized, live in minutes — no Webflow designer queue",
      prompt2: "Add a new section under Features Explored for Stiddle IRIS with a 'Book a Demo' CTA.",
      result2: "✓ Section built, styled to match existing feature blocks, published same day",
      prompt3: "Test 'Customer Visibility Is Broken. We Fix It.' as the hero headline — see if it outperforms the current one.",
      result3: "✓ Variant live in 10 minutes — revert or ship based on what drives demo bookings"
    }
  },
  {
    id: "supercreativepeople",
    company: "SuperCreativePeople",
    logo: "/assets/reports/supercreativepeople/logo.jpeg",
    logoNeedsBg: false,
    url: "https://supercreativepeople.com",
    industry: "Creative Agency / Brand Strategy",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new case study to THE VAULT with our latest campaign — headline, result, and a visual.",
      result1: "✓ Case study added, styled to match existing vault entries, live same day — no designer queue",
      prompt2: "Update WHAT WE DO to lead with AI Strategy — move it above Go-to-Market in the service list.",
      result2: "✓ Services reordered and copy refreshed — live in minutes, no Wix back-and-forth",
      prompt3: "Test 'BOLD BRANDS. BIG IMPACT.' as a standalone hero headline with 'Let's Work Together' as the only CTA.",
      result3: "✓ Variant live in 10 minutes — revert or ship it, your call"
    }
  },
  {
    id: "talentrubric",
    company: "TalentRubric",
    logo: "/assets/reports/talentrubric/logo.jpeg",
    logoNeedsBg: false,
    url: "https://talentrubric.com",
    industry: "Talent Strategy & Executive Search",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the AI GLOBAL CAPABILITY CENTERS section with our latest India placements and a new client quote.",
      result1: "✓ Section updated with new copy and testimonial — live same day, no Wix queue",
      prompt2: "Add a dedicated landing page for our AI Bot service with a 'Get in Touch' CTA.",
      result2: "✓ Page built, styled to match existing service pages, published same day",
      prompt3: "Test 'LET'S CREATE A BESPOKE SOLUTION FOR YOU' as the above-the-fold headline with a direct contact form below it.",
      result3: "✓ Layout updated in 10 minutes — see if it drives more inquiries, revert if not"
    }
  },
  {
    id: "tech-inception",
    company: "Tech Inception",
    logo: "/assets/reports/tech-inception/logo.svg",
    logoNeedsBg: false,
    url: "https://techinception.com",
    industry: "Healthcare Technology / Geriatric Care",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new company to Our Companies with a brief description and a VIEW DETAIL link.",
      result1: "✓ Entry added, styled to match existing company cards, live same day — no WordPress developer needed",
      prompt2: "Update the ABOUT US section to reflect our latest program milestones in geriatric care.",
      result2: "✓ Copy updated and published in minutes — no brief, no build cycle",
      prompt3: "Add a dedicated Programs page with individual sections for each care technology initiative.",
      result3: "✓ Page built, content structured, and published same day — clean URLs preserved"
    }
  },
  {
    id: "learning-futures-group",
    company: "The Learning Futures Group",
    logo: "/assets/reports/learning-futures-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://learningfuturesgroup.com",
    industry: "Workplace Learning & L&D Advisory",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new episode of 'Learning is the New Working' to the podcast section with a title, guest name, and listen link.",
      result1: "✓ Episode added, formatted, and live same day — no WordPress developer queue",
      prompt2: "Update What We Do to add a new advisory focus: 'The Future of Sales Enablement' with a brief description.",
      result2: "✓ Service added, styled to match existing offerings, published in minutes",
      prompt3: "Test 'Connect With LFG' as a sticky CTA in the navigation — see if it drives more inquiries than the current setup.",
      result3: "✓ Navigation updated in 10 minutes — revert or keep it based on what you see"
    }
  },
  {
    id: "thegiantoctopus",
    company: "TheGiantOctopus",
    logo: "/assets/reports/thegiantoctopus/logo.jpeg",
    logoNeedsBg: false,
    url: "https://thegiantoctopus.com",
    industry: "Creative Agency",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero from 'NOTHING IS SAFE' to our new campaign line and update the ethos copy.",
      result1: "✓ Hero and ethos section updated and live in minutes — no design tickets, no waiting",
      prompt2: "Add three new pieces to the OEUVRE portfolio section with updated project descriptions.",
      result2: "✓ Portfolio entries added, styled consistently, published same day",
      prompt3: "Update the MAKE CONTACT section to include a booking link instead of just the appointment note.",
      result3: "✓ Contact section updated with a live booking integration — done before your next client call"
    }
  },
  {
    id: "thinkmojo",
    company: "Thinkmojo",
    logo: "/assets/reports/thinkmojo/logo.jpeg",
    logoNeedsBg: false,
    url: "https://thinkmojo.com",
    industry: "Video Production & Brand Marketing",
    pages: 5,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with a new angle — something about making complex products feel simple on screen.",
      result1: "✓ Hero rewritten and live in minutes, no Webflow editor or developer needed",
      prompt2: "Add a case study section under 'The roadmap to growth' featuring our latest brand launch.",
      result2: "✓ New section built, styled to match, published same day",
      prompt3: "Change the 'Get in touch' CTA to 'Start a project' and A/B test it against the current copy.",
      result3: "✓ CTA updated instantly — test it, revert it, run another variation whenever you want"
    }
  },
  {
    id: "together-tools",
    company: "Together Tools",
    logo: "/assets/reports/together-tools/logo.jpeg",
    logoNeedsBg: false,
    url: "https://togethertools.com",
    industry: "Marketing Technology / Brick-and-Mortar Retail",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero headline to sharpen the angle on giving brick-and-mortar businesses equal marketing power.",
      result1: "✓ Hero updated and live in minutes — no WordPress developer, no waiting",
      prompt2: "Add a new section under 'The Power of Connection' with stats on the group gathering market opportunity.",
      result2: "✓ Section built, styled, and published same day",
      prompt3: "Add a partner intake form to the 'Partner with Us to Build a More Connected Future' section.",
      result3: "✓ Form added, wired, and tested — ready to capture partner leads before end of day"
    }
  },
  {
    id: "tribalize",
    company: "Tribalize",
    logo: "/assets/reports/tribalize/logo.jpeg",
    logoNeedsBg: false,
    url: "https://tribalize.ai",
    industry: "Knowledge Management / AI SaaS",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Sharpen the hero — change it to emphasize the knowledge crisis angle before the solution.",
      result1: "✓ Hero updated and live in minutes, no Webflow editor or dev needed",
      prompt2: "Add a use case section between 'The Problem' and 'The Shift' showing a before/after for a specific role.",
      result2: "✓ New section built, styled to match, published same day",
      prompt3: "Change the 'Request a Demo' CTA to 'See It In Action' and test it for two weeks.",
      result3: "✓ CTA live in under 10 minutes — swap it back or try another variation whenever you want"
    }
  },
  {
    id: "tribe",
    company: "Tribe",
    logo: "/assets/reports/tribe/logo.jpeg",
    logoNeedsBg: false,
    url: "https://tribesocialclub.com",
    industry: "Social / Community Membership",
    pages: 11,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'Find your tribe — Make new friends in your city!' and add a city selector below it.",
      result1: "✓ Hero updated and city selector added — live in minutes, no Wix editor gymnastics",
      prompt2: "Add a new club category page under 'Join a Club' for outdoor adventures.",
      result2: "✓ New page built, styled to match the rest of the site, published same day",
      prompt3: "Update the 'How it works' section to show four steps instead of three, and add a photo for each.",
      result3: "✓ Section restructured with new step and images — done before your next event goes live"
    }
  },
  {
    id: "unify-recruit",
    company: "Unify Recruit",
    logo: "/assets/reports/unify-recruit/logo.jpeg",
    logoNeedsBg: false,
    url: "https://unifyrecruit.com",
    industry: "Executive Search & Talent Acquisition",
    pages: 11,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subhead under 'Talent. Trust. Timely.' to reflect our new focus on fintech placements.",
      result1: "✓ Hero updated and live in minutes — no WordPress developer, no ticket, no waiting",
      prompt2: "Add a new service card under 'Service Offerings' for fractional HR consulting.",
      result2: "✓ New service card built, styled to match the existing layout, published same day",
      prompt3: "Change the 'Book A Call' CTA to 'Schedule a Search Consultation' and test it for a month.",
      result3: "✓ CTA updated in under 10 minutes — revert it or try another version whenever you want"
    }
  },
  {
    id: "up2utech",
    company: "UP2UTECH",
    logo: "/assets/reports/up2utech/logo.jpeg",
    logoNeedsBg: false,
    url: "https://up2utech.com",
    industry: "Edge Computing / Software Services",
    pages: 13,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Rewrite the hero to lead with edge computing and cut the passive phrasing — make it direct.",
      result1: "✓ Hero updated and live in minutes — no Wix editor, no platform workarounds",
      prompt2: "Add a dedicated landing page for Android Development under our service offerings.",
      result2: "✓ New page built, styled to match, and live same day",
      prompt3: "Update the Development, Customization, Commercialization section to include a client inquiry form.",
      result3: "✓ Form added, wired, and tested — capturing leads before your next sales call"
    }
  },
  {
    id: "velodash",
    company: "Velodash",
    logo: "/assets/reports/velodash/logo.jpeg",
    logoNeedsBg: false,
    url: "https://velodash.co",
    industry: "Cycling Events & Community Platform",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero stat — we're now at 350,000 cycling events. Change it across the page.",
      result1: "✓ Hero and any supporting copy updated and live in minutes — no Wix editor, no waiting",
      prompt2: "Add a dedicated landing page under 'Solutions for event hosts and organizations' targeting cycling clubs.",
      result2: "✓ New page built, styled to match, published same day",
      prompt3: "Change the 'See events and cyclists nearby' CTA to 'Find your next ride' and test the conversion difference.",
      result3: "✓ CTA updated in under 10 minutes — revert it or try another version on your own schedule"
    }
  },
  {
    id: "venegas-capital",
    company: "VENEGAS CAPITAL",
    logo: "/assets/reports/venegas-capital/logo.jpeg",
    logoNeedsBg: false,
    url: "https://venegascapital.com",
    industry: "Investment Banking / Private Capital Advisory",
    pages: 13,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero — change it from 'DEDICATED TO HELP OUR CLIENTS REACH THEIR GOALS' to something sharper about our M&A track record.",
      result1: "✓ Hero updated and live in minutes — no Wix editor, no waiting on anyone",
      prompt2: "Add a recent transaction announcement under the ADVISORY section with a brief deal summary.",
      result2: "✓ New transaction entry built, styled to match, published same day",
      prompt3: "Add a contact form specific to the INVESTMENT FIRM page for deal flow inquiries.",
      result3: "✓ Form added, wired, and tested — capturing qualified inbound before end of day"
    }
  },
  {
    id: "venuedge",
    company: "VenuEdge",
    logo: "/assets/reports/venuedge/logo.jpeg",
    logoNeedsBg: false,
    url: "https://venuedge.com",
    industry: "Venue Revenue Optimization / SaaS",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'Turn Your Venue Into a Revenue Engine' to lead with the specific revenue uplift we deliver.",
      result1: "✓ Hero updated and live in minutes — no Wix editor, no waiting on a designer",
      prompt2: "Add a case study page under 'Sports & Live Entertainment' showing results from a stadium deployment.",
      result2: "✓ New page built, styled to match, published same day",
      prompt3: "Change both 'Learn More' CTAs to vertical-specific copy — 'Explore for Stadiums' and 'Explore for Campus.'",
      result3: "✓ CTAs updated across both sections in one shot — test them, adjust them, move on"
    }
  },
  {
    id: "vpecoach",
    company: "VPECoach",
    logo: "/assets/reports/vpecoach/logo.jpeg",
    logoNeedsBg: false,
    url: "https://vpecoach.com",
    industry: "Executive Coaching / Leadership Development",
    pages: 7,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero to 'Executive coaching for engineering leaders at Series A startups'.",
      result1: "✓ Hero updated across every breakpoint, live in minutes — no designer brief required",
      prompt2: "Add a section under 'What I Offer' for a new group coaching program with a 'Join the Waitlist' CTA.",
      result2: "✓ New section built, styled to match, and published the same day",
      prompt3: "Swap 'Schedule a Free Consultation' to 'Book a Free Hour' and test it for two weeks.",
      result3: "✓ CTA copy changed sitewide in one edit — revert or keep it based on what converts"
    }
  },
  {
    id: "wair",
    company: "WAIR",
    logo: "/assets/reports/wair/logo.jpeg",
    logoNeedsBg: false,
    url: "https://getwair.com",
    industry: "E-commerce SaaS / Size Recommendation",
    pages: 10,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Proven Impact' stats — add the new 4.3% return rate decrease and $623M revenue figure.",
      result1: "✓ Numbers updated in the section, styled correctly, live before your next demo call",
      prompt2: "Add a new brand case study under 'Brands Choose WAIR' with logo, quote, and results.",
      result2: "✓ New card added matching existing layout — no design brief, no Figma file",
      prompt3: "Change 'How does WAIR work' CTA to 'See WAIR in action' and A/B test click-through.",
      result3: "✓ CTA swapped across the hero in one edit — test, measure, decide"
    }
  },
  {
    id: "wakario",
    company: "WAKARIO",
    logo: "/assets/reports/wakario/logo.jpeg",
    logoNeedsBg: false,
    url: "https://wakario.com",
    industry: "Analytics Consulting / AI-Powered Growth",
    pages: 12,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subheadline to 'AI-powered growth expertise for modern revenue teams'.",
      result1: "✓ Hero copy updated across desktop and mobile, live in minutes",
      prompt2: "Add a new service card under 'Analytics and Insight Solutions' for our new Data Audit offering.",
      result2: "✓ New card styled to match the existing grid, published same day",
      prompt3: "Rename 'ROI Growth Suite' to 'Revenue Acceleration Suite' across the whole site.",
      result3: "✓ Every instance updated at once — no hunting through pages one by one"
    }
  },
  {
    id: "walk-your-plans-oc",
    company: "Walk Your Plans OC",
    logo: "/assets/reports/walk-your-plans-oc/logo.jpeg",
    logoNeedsBg: false,
    url: "https://walkyourplansoc.com",
    industry: "Architecture / Construction Visualization",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'Walk life-sized floor plans before you break ground — now booking Spring sessions'.",
      result1: "✓ Hero updated with seasonal availability messaging, live before your next inquiry comes in",
      prompt2: "Add a new section under 'Why Walk Your Plans before you build?' explaining pricing tiers.",
      result2: "✓ New section built and styled to match — published same day, no Wix editor required",
      prompt3: "Change 'BOOK A SESSION' to 'Reserve Your Session' and see if it improves click-through.",
      result3: "✓ CTA text swapped sitewide in one edit — test for a week, revert or keep it"
    }
  },
  {
    id: "wander-health",
    company: "Wander Health",
    logo: "/assets/reports/wander-health/logo.jpeg",
    logoNeedsBg: false,
    url: "https://wander.health",
    industry: "Travel Health / International Concierge Medicine",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'International concierge medicine — same-day appointments, wherever you are'.",
      result1: "✓ Hero copy live in minutes — no Wix editor, no waiting on a designer",
      prompt2: "Add a new location under 'Who We Serve' for Southeast Asia with a 'Book Appointment' CTA.",
      result2: "✓ New location card added, styled to match, published the same day",
      prompt3: "Change 'SIGN UP' to 'Get Protected Before You Go' and test it for two weeks.",
      result3: "✓ CTA updated across the page in one edit — measure, decide, revert if needed"
    }
  },
  {
    id: "z-group-la",
    company: "Z Group LA",
    logo: "/assets/reports/z-group-la/logo.jpeg",
    logoNeedsBg: false,
    url: "https://zgroupla.com",
    industry: "Talent Booking / Brand Partnerships & Events",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Client List 2026' with three new brand partners and refresh the section intro copy.",
      result1: "✓ Client list updated, styled, live the same day the deal closes",
      prompt2: "Add a new page for festival activations with a 'Work With Us' CTA and a brief overview.",
      result2: "✓ New page built matching site style — published before the next pitch deck goes out",
      prompt3: "Change 'Where Artists, Brands, and Experiences Meet' to 'Booking and Brand Partnerships That Move Culture'.",
      result3: "✓ Hero headline updated across the site in one edit — no WordPress login, no developer ticket"
    }
  },
  {
    id: "zaza-media",
    company: "ZaZa Media",
    logo: "/assets/reports/zaza-media/logo.jpeg",
    logoNeedsBg: false,
    url: "https://zaza-media.com",
    industry: "Animation / Kids & Family Entertainment",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to feature our new franchise in development — add the title and a one-line teaser.",
      result1: "✓ Hero updated with new franchise copy and formatted to match the existing style, live same day",
      prompt2: "Add a new 'Current Projects' section under 'About Us' with three project cards.",
      result2: "✓ Section built, styled to match the site, published before your next partner meeting",
      prompt3: "Change 'CONTACT US' to 'Let's Collaborate' across the site.",
      result3: "✓ Every instance of the CTA updated in one edit — no Wix editor, no back-and-forth"
    }
  },
  {
    id: "aionis",
    company: "Aionis",
    logo: "/assets/reports/aionis/logo.jpeg",
    logoNeedsBg: false,
    url: "https://aionis.io",
    industry: "Custom Software Development & IT Consulting",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new project to 'Some of Our Happy Customers' with the client logo and a 2-sentence outcome.",
      result1: "✓ New customer spotlight live on the site, matching existing design, within the hour.",
      prompt2: "Update the hero from 'Outgrown your current software solution?' to lead with Salesforce customization for mid-market teams.",
      result2: "✓ Hero rewritten and published — no plugin conflicts, no theme breakage.",
      prompt3: "Add a dedicated landing page for Dynamics 365 Customization to capture search traffic.",
      result3: "✓ New service page created with proper nav link, SEO title, and matching layout same day."
    }
  },
  {
    id: "airx-health",
    company: "airx health",
    logo: "/assets/reports/airx-health/logo.jpeg",
    logoNeedsBg: false,
    url: "https://airx.health",
    industry: "Pharmacy Software (SaaS)",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'Increase your pharmacy's profit margin — without changing how you work.'",
      result1: "✓ New headline live in minutes, no design ticket, no approval loop.",
      prompt2: "Add a new Customer Stories entry from our latest pharmacist testimonial.",
      result2: "✓ New story card added to the section, matching existing layout, same day.",
      prompt3: "Create a separate landing page for 'Integrated POS with Electronic Payments' to capture bottom-funnel search traffic.",
      result3: "✓ Dedicated page live with proper URL, SEO metadata, and a 'Schedule A Demo' CTA — built same day."
    }
  },
  {
    id: "andromeda-surgical",
    company: "Andromeda Surgical",
    logo: "/assets/reports/andromeda-surgical/logo.jpeg",
    logoNeedsBg: false,
    url: "https://andromedasurgical.com",
    industry: "Surgical Technology / MedTech",
    pages: 1,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new 'Recently featured in' logo for our latest press mention.",
      result1: "✓ Press logo added to the section, properly sized and linked, within minutes.",
      prompt2: "Update 'The timeline' section — mark 2025 complete and add detail to the 2026+ milestone.",
      result2: "✓ Timeline updated to reflect current clinical stage, live same day.",
      prompt3: "Add a brief paragraph under 'Google Maps for the Human Body' to explain the navigation technology for non-technical investors.",
      result3: "✓ New explanatory copy written and placed, matching the existing tone, ready for review in minutes."
    }
  },
  {
    id: "barking-ad-media",
    company: "Barking Ad Media",
    logo: "/assets/reports/barking-ad-media/logo.svg",
    logoNeedsBg: false,
    url: "https://barkingadmedia.com",
    industry: "Digital Marketing Agency",
    pages: 2,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'What We Do' to add Programmatic Audio as a new service under Display and Native Ads.",
      result1: "✓ New service entry added, matching the existing list format, live in minutes.",
      prompt2: "Change the hero headline from 'FIND CUSTOMERS. Create Value. Make Money.' to lead with a client result — '3x ROAS. Every time.'",
      result2: "✓ Hero updated and published immediately, no WordPress plugin conflicts or theme issues.",
      prompt3: "Add a 'LET'S TALK' landing page specifically for Search Engine Marketing leads from Google Ads.",
      result3: "✓ Dedicated SEM landing page built with its own URL, matching the site's design, same day."
    }
  },
  {
    id: "bee-direct-marketing",
    company: "Bee Direct Marketing",
    logo: "/assets/reports/bee-direct-marketing/logo.svg",
    logoNeedsBg: false,
    url: "https://beedirect-marketing.com",
    industry: "Marketing Strategy & Staffing Agency",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new case study under 'CASE STUDIES' for our Q1 B2B launch campaign with results.",
      result1: "✓ New case study entry formatted and live, matching the existing layout, within the hour.",
      prompt2: "Update the hero from 'CREATE BUZZ. DRIVE REVENUE.' to highlight our interim CMO placement track record.",
      result2: "✓ Hero copy updated and published immediately — no Wix editor wrestling.",
      prompt3: "Add a dedicated landing page for Marketing Staffing & Interim Roles to capture search traffic.",
      result3: "✓ New page built with matching design, proper URL, and a 'CONTACT US' CTA — live same day."
    }
  },
  {
    id: "bennu",
    company: "Bennu",
    logo: "/assets/reports/bennu/logo.jpeg",
    logoNeedsBg: false,
    url: "https://bennuclimate.com",
    industry: "Climate Technology / Methane Destruction",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new entry to 'Latest News' with our EPA partnership announcement and a link to the press release.",
      result1: "✓ News entry formatted, linked, and live — no Wix editor, no waiting.",
      prompt2: "Update 'The Science' section with our latest methane destruction efficiency data from the Q1 field trial.",
      result2: "✓ Section updated with new figures and context, matching the existing page structure, same day.",
      prompt3: "Add a new 'Applications' sub-page for agricultural methane sources — we're seeing more inbound from that vertical.",
      result3: "✓ Sub-page built under the existing Applications nav item, proper internal linking, matching design — live same day."
    }
  },
  {
    id: "beyond-admissions",
    company: "BeyondAdmissions",
    logo: "/assets/reports/beyond-admissions/logo.jpeg",
    logoNeedsBg: false,
    url: "https://beyondadmissions.com",
    industry: "College & Career Coaching / EdTech",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new Virtual Workshop for June — 'Navigating Financial Aid' — with a sign-up button.",
      result1: "✓ New workshop page under Workshops nav, with a registration CTA, live same day.",
      prompt2: "Update the hero from 'Work smart to transform your aspirations into reality!' to speak directly to parents of high school juniors during application season.",
      result2: "✓ Seasonal hero copy live immediately — revert or swap anytime without touching a designer.",
      prompt3: "Add an International Students landing page under Higher Ed Coaching with a separate contact form.",
      result3: "✓ Dedicated page built, properly linked in the Higher Ed sub-nav, with its own intake form — same day."
    }
  },
  {
    id: "brevvie",
    company: "BREVVIE",
    logo: "/assets/reports/brevvie/logo.jpeg",
    logoNeedsBg: false,
    url: "https://brevvie.com",
    industry: "Automated Retail / Intelligent Vending Solutions",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to say 'Automate Sales with Intelligent Vending Solutions' and add a second line about our new kayak kiosk.",
      result1: "✓ Hero updated, new product callout live within minutes — no designer ticket required.",
      prompt2: "Add a new section under Industries Served for campgrounds and outdoor recreation.",
      result2: "✓ New industry vertical page scaffolded, copy added, linked from nav — same day.",
      prompt3: "Change the 'SEE MORE' button on the Products page to 'Explore Our Machines' and make it more prominent.",
      result3: "✓ CTA copy updated and styled — tested, live, no dev needed."
    }
  },
  {
    id: "buzzer",
    company: "Buzzer",
    logo: "/assets/reports/buzzer/logo.jpeg",
    logoNeedsBg: false,
    url: "https://buzzerpr.com",
    industry: "Public Relations / Entertainment & Innovation Brands",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client win to the Recent News section — here's the headline and link.",
      result1: "✓ News item added and live in minutes, no designer involved.",
      prompt2: "Update the hero to replace 'FOR BRANDS AT THE INTERSECTION OF ENTERTAINMENT & INNOVATION' with our new positioning line.",
      result2: "✓ Hero copy updated instantly — A/B the old vs. new within the same afternoon.",
      prompt3: "Add a testimonials section to the Working Together page with three new client quotes.",
      result3: "✓ New section built, quotes added, styled to match — shipped same day."
    }
  },
  {
    id: "c4gs-zedlife",
    company: "C4GS-ZEDlife",
    logo: "/assets/reports/c4gs-zedlife/logo.jpeg",
    logoNeedsBg: false,
    url: "https://c4gs.org",
    industry: "Sustainable Community Development / Zero-Energy Housing",
    pages: 7,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new featured project under Our Work — here's the name, description, and photo.",
      result1: "✓ Project card built and live on the Featured Projects section same day — no Webflow editor needed.",
      prompt2: "Update the hero CTA from 'View Current Projects' to 'Partner With Us on Our Next Build' and link it to the Partnerships page.",
      result2: "✓ CTA copy and link updated in minutes, no developer required.",
      prompt3: "Add a new Micro-Degree Program under Workforce Development with enrollment details and a contact form.",
      result3: "✓ New sub-page built, content added, form wired — shipped before end of day."
    }
  },
  {
    id: "cabrico",
    company: "CABRICO",
    logo: "/assets/reports/cabrico/logo.jpeg",
    logoNeedsBg: false,
    url: "https://cabrico.xyz",
    industry: "Technology Consulting & Private Equity Advisory",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client logo and a one-line description of the engagement to the Clients page.",
      result1: "✓ Client added and live within minutes — no designer, no ticket.",
      prompt2: "Update the hero subheading to include our focus on AI and data infrastructure investments.",
      result2: "✓ Hero copy updated, reflects your current positioning — done before your next call.",
      prompt3: "Add a new project case study page under Projects with a brief summary and outcome metrics.",
      result3: "✓ New page built and linked from the Projects section — shipped same day."
    }
  },
  {
    id: "ciye",
    company: "Ciye",
    logo: "/assets/reports/ciye/logo.jpeg",
    logoNeedsBg: false,
    url: "https://ciye.co",
    industry: "Wearable Fitness Technology / Smart Sports Eyewear",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Smart Goggles page CTA from 'See your Swim™' to 'Pre-Order Now — Ships This Fall' and add a waitlist form.",
      result1: "✓ CTA updated, form added, live — no dev required.",
      prompt2: "Add a new press mention to the Press page with logo, headline, and link.",
      result2: "✓ Press item live within minutes, keeping your social proof current.",
      prompt3: "Add a comparison table to the Smart Glasses page showing Ciye vs. competitor specs.",
      result3: "✓ Comparison section built and placed on the product page — shipped same day."
    }
  },
  {
    id: "cmcollective",
    company: "CMCollective",
    logo: "/assets/reports/cmcollective/logo.jpeg",
    logoNeedsBg: false,
    url: "https://cmcollectivela.com",
    industry: "Marketing Strategy & Analytics Consulting",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new case study for a recent client under Case Studies — here's the brand name, challenge, and outcome.",
      result1: "✓ Case study page built and linked from the Case Studies nav — live same day.",
      prompt2: "Add a new course to the Courses page: 'GA4 Advanced Attribution Masterclass' with enrollment details and a sign-up form.",
      result2: "✓ Course listing added, form wired, ready to accept signups — no designer needed.",
      prompt3: "Update the What We Do page to add 'AI Marketing Strategy' as a new service offering.",
      result3: "✓ New service card added and styled to match existing layout — shipped within the hour."
    }
  },
  {
    id: "cosmos-technology",
    company: "Cosmos Technology LLC",
    logo: "/assets/reports/cosmos-technology/logo.jpeg",
    logoNeedsBg: false,
    url: "https://cosmos.tech",
    industry: "Management Consulting & Technology Staffing",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Services page to add a new offering: 'AI Talent Placement for Enterprise Teams.'",
      result1: "✓ New service section added and live — no designer ticket, no sprint required.",
      prompt2: "Change the hero headline from 'Management Consultancy & Technology Staffing' to reflect our new focus on innovation-driven staffing.",
      result2: "✓ Hero updated in minutes — test different angles the same afternoon.",
      prompt3: "Add a client logos section to the About page to show the brands we've placed talent with.",
      result3: "✓ Logo grid built, images added, styled to match — shipped same day."
    }
  },
  {
    id: "daystohappy",
    company: "DaysToHappy",
    logo: "/assets/reports/daystohappy/logo.jpeg",
    logoNeedsBg: false,
    url: "https://daystohappy.com",
    industry: "Mental Health / Wellness Technology",
    pages: 7,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to read: 'Chat with Ava, your virtual mental wellness coach — no app download, no email, no login required'",
      result1: "✓ Hero section updated and live within minutes, no designer involved.",
      prompt2: "Add a new section between 'How It Works' and 'Licensing' that explains our new Doctors program with a short description and a contact CTA.",
      result2: "✓ Section built, styled to match the site, placed exactly where you need it.",
      prompt3: "Change 'Achieve Lasting Happiness' to 'Start Your Happiness Journey' and add a button that says 'Talk to Ava Free'",
      result3: "✓ Copy swapped, new CTA live — test it today, refine it tomorrow."
    }
  },
  {
    id: "determined-health",
    company: "Determined Health",
    logo: "/assets/reports/determined-health/logo.jpeg",
    logoNeedsBg: false,
    url: "https://determinedhealth.com",
    industry: "Health Technology / Social Determinants of Health",
    pages: 6,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subheadline to mention Connection1st by name and add a 'Request a Demo' button next to 'Learn More'",
      result1: "✓ Hero updated, new CTA live — no designer ticket, no waiting.",
      prompt2: "Add a new 'Health Plans' landing page under Who We Serve, with the Enable → Scale → Optimize framework and a Contact Us CTA.",
      result2: "✓ New page built, matched to site design, live the same day.",
      prompt3: "Change the 'Connection + Trust = Engagement' section to lead with a stat about social isolation impact, then explain our solution.",
      result3: "✓ Section rewritten and restructured in minutes — test the new framing before your next sales call."
    }
  },
  {
    id: "digital-vision-agency",
    company: "Digital Vision Agency",
    logo: "/assets/reports/digital-vision-agency/logo.jpeg",
    logoNeedsBg: false,
    url: "https://digitalvisionsd.com",
    industry: "Digital Marketing Agency",
    pages: 13,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'San Diego's Digital Marketing Agency For Growth — Get Your Free Strategy Session' and make the CTA say 'Claim Your Free Session'",
      result1: "✓ Hero and CTA updated live in minutes — A/B test it against the current version this week.",
      prompt2: "Add a new service page for 'Reputation Management' under our Services section with the headline 'Get More 5-Star Reviews' and a Get Started CTA.",
      result2: "✓ New page live, styled to match, indexed and redirect-safe.",
      prompt3: "Move 'Reviews From Clients' section above 'Aspire to Greater Heights' on the homepage so social proof appears earlier in the scroll.",
      result3: "✓ Sections reordered, no dev ticket needed — done before your next client call."
    }
  },
  {
    id: "doc-e",
    company: "Doc-E",
    logo: "/assets/reports/doc-e/logo.jpeg",
    logoNeedsBg: false,
    url: "https://doc-e.ai",
    industry: "AI Developer Tools / Enterprise SaaS",
    pages: 5,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero headline to 'Turn Slack conversations into technical content for developers — Book a Demo' and make the subheadline lead with the 90% speed-to-market stat.",
      result1: "✓ Hero rewritten, stat moved up, live in minutes — ready to test before your next outbound push.",
      prompt2: "Add a new section called 'Plain English to SQL/API queries' under Core Features with a short description and a Book a Demo CTA.",
      result2: "✓ New feature section live, styled to match, no Webflow editor needed.",
      prompt3: "Change 'Book a Demo' to 'See It In Action' across the whole site and move the 'Trusted by' logos section above the fold.",
      result3: "✓ CTA copy updated sitewide, social proof repositioned — done in one conversation."
    }
  },
  {
    id: "echelon-search-partners",
    company: "Echelon Search Partners",
    logo: "/assets/reports/echelon-search-partners/logo.jpeg",
    logoNeedsBg: false,
    url: "https://echelonsearchpartners.com",
    industry: "Executive Search / HR Consulting",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new placement to 'Select Healthcare and Technology Placements' — VP of Clinical Operations, Regional Health System, placed Q1 2026.",
      result1: "✓ Placement listed and live in minutes — your track record updated the moment a deal closes.",
      prompt2: "Update the hero subheadline to emphasize speed and precision: 'Director through C-level search with fast time-to-fill and high-quality candidates — 20 years of healthcare and tech expertise'",
      result2: "✓ Hero copy refreshed, no Wix editor frustration, no waiting on anyone.",
      prompt3: "Add a short 'Why Founder-Led' section to the Why Us page that explains what clients get from working directly with Jamie vs. a large firm.",
      result3: "✓ New section built and live — differentiation sharpened before your next pitch call."
    }
  },
  {
    id: "geogram",
    company: "Geogram",
    logo: "/assets/reports/geogram/logo.jpeg",
    logoNeedsBg: false,
    url: "https://geogram.com",
    industry: "Brand & Marketing Agency",
    pages: 2,
    hostingCost: 72,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero to 'Give your brand Superpowers' and make the subtext punchier.",
      result1: "✓ Updated live in minutes — no Webflow editor, no designer loop.",
      prompt2: "Add a case studies section between the hero and 'Reach out!'",
      result2: "✓ New section built and placed exactly where you want it, same day.",
      prompt3: "Test 'Start your transformation' instead of 'Get started' as the CTA.",
      result3: "✓ Swapped, tested, and reverted or kept — you decide, on your schedule."
    }
  },
  {
    id: "getgoaler",
    company: "GetGoaler",
    logo: "/assets/reports/getgoaler/logo.jpeg",
    logoNeedsBg: false,
    url: "https://getgoaler.com",
    industry: "Mobile App / Productivity & Accountability",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with 'Set Goals and Achieve Them With Your Team!' instead of 'Welcome to Collaborative Goals'",
      result1: "✓ Hero updated and live in minutes — no WordPress login, no plugin conflicts.",
      prompt2: "Add a new section below 'LOG ACTIVITY AND SHARE WINS' for user testimonials.",
      result2: "✓ Section built and placed with the right layout, same day.",
      prompt3: "Change the CTA from 'Download Goaler (on your Mobile Device)' to something shorter for desktop visitors.",
      result3: "✓ CTA copy swapped across the page instantly — test it, keep it, or roll it back."
    }
  },
  {
    id: "gforce",
    company: "GForce",
    logo: "/assets/reports/gforce/logo.jpeg",
    logoNeedsBg: false,
    url: "https://gforcemedia.com",
    industry: "Business Strategy & Sales Consulting",
    pages: 10,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero headline to 'Business Strategy & Sales Solutions Built for Scale' and sharpen the subtext.",
      result1: "✓ Updated live in minutes — no WordPress dashboard, no waiting on a developer.",
      prompt2: "Add a new service card under 'WHAT WE DO' for a new offering Greg just launched.",
      result2: "✓ Card added with matching design, same day — no brief, no build cycle.",
      prompt3: "Change 'GET IN TOUCH' to something more specific to the sales audience we're targeting this quarter.",
      result3: "✓ CTA updated across the site instantly — test it, measure it, adjust again tomorrow."
    }
  },
  {
    id: "gridtractor",
    company: "Gridtractor",
    logo: "/assets/reports/gridtractor/logo.jpeg",
    logoNeedsBg: false,
    url: "https://gridtractor.com",
    industry: "Energy & Grid Management / Clean Tech",
    pages: 11,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with our new rural electrification offering and swap the CTA to 'Explore Rural Electrification'",
      result1: "✓ Hero and CTA updated live — no Wix editor wrestling, no layout breaking.",
      prompt2: "Add a new section under 'Technology Platform' for our latest submetering case study.",
      result2: "✓ Section built with matching layout and dropped in the right place, same day.",
      prompt3: "Change 'Looking for Rural Electrification? Click Here!' to something shorter and direct.",
      result3: "✓ CTA copy updated across the page instantly — keep it, test another, roll back anytime."
    }
  },
  {
    id: "lyf-matters",
    company: "LYF Matters Inc.",
    logo: "/assets/reports/lyf-matters/logo.jpeg",
    logoNeedsBg: false,
    url: "https://keyonnamonroe.com",
    industry: "Executive Coaching & Leadership Development",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero to 'For leaders who've climbed the ladder only to realize it's leaning against the wrong wall' and add a second CTA for Evolution Circles.",
      result1: "✓ Hero updated and new CTA live within minutes — no designer needed.",
      prompt2: "Add a dedicated page for LyfLeadsAfrica with a Request to Book button at the top.",
      result2: "✓ New page built and published same day, matching your existing site design.",
      prompt3: "Move the Conscious Leadership Intensive section above Keynote Experiences and add a testimonial under it.",
      result3: "✓ Sections reordered and testimonial added without touching a single line of code."
    }
  },
  {
    id: "mandano",
    company: "Mandano",
    logo: "/assets/reports/mandano/logo.jpeg",
    logoNeedsBg: false,
    url: "https://mandano.com",
    industry: "HR Strategy Software (SMB/Family Business)",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subheadline to highlight our new onboarding module for Familienunternehmen.",
      result1: "✓ Headline updated and live in minutes — no designer ticket, no wait.",
      prompt2: "Add a new section under 'Kunden die Mandano vertrauen' with two new logos and quotes.",
      result2: "✓ Social proof section updated same day, formatted to match the existing design.",
      prompt3: "Create a dedicated landing page for the 'Demo buchen' flow with a shorter form and a case study embed.",
      result3: "✓ New conversion page live within hours, A/B testable whenever you're ready."
    }
  },
  {
    id: "mytrailpals",
    company: "MyTrailPals",
    logo: "/assets/reports/mytrailpals/logo.jpeg",
    logoNeedsBg: false,
    url: "https://mytrailpals.com",
    industry: "Outdoor Community / Experience Marketplace",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero headline from 'Find Your People, Not Just Your Trail!' to 'Join Outdoor Experiences Led by People Who Know the Trail'",
      result1: "✓ Updated live in minutes — no ticket, no wait, no back-and-forth.",
      prompt2: "Add a section between the hero and How Does it Work that shows three sample host profiles.",
      result2: "✓ New section built and placed exactly where you want it, same day.",
      prompt3: "Move the 'Become Verified Host' CTA above the fold so it's the first thing people see.",
      result3: "✓ Repositioned instantly — test it, revert it, or keep it based on what you see."
    }
  },
  {
    id: "airion",
    company: "AIRION",
    logo: "/assets/reports/airion/logo.jpeg",
    logoNeedsBg: false,
    url: "https://airion.dev",
    industry: "Defense Technology / Aerospace Innovation",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to say we're now available on GSA Schedule — add a direct link to our listing",
      result1: "✓ Hero updated and GSA link live within minutes, no designer needed",
      prompt2: "Add a page for Flyairus with its own CTA separate from the main AIRION nav",
      result2: "✓ Standalone page built and live same day, fully consistent with existing site design",
      prompt3: "Swap 'Mission Focused Device Development' headline to lead with our austere medical solutions capability instead",
      result3: "✓ Section reordered and copy updated — no brief, no queue, no waiting"
    }
  },
  {
    id: "alstar-consulting-group",
    company: "Alstar Consulting Group",
    logo: "/assets/reports/alstar-consulting-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://alstarconsulting.com",
    industry: "Healthcare Consulting / Medical Staffing",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero headline to lead with Joint Commission Certification — that's what most prospects are calling about right now",
      result1: "✓ Hero updated and live within minutes, no designer involved",
      prompt2: "Add a landing page for medical staffing agency startups with its own consultation booking form",
      result2: "✓ Page built and live same day with integrated form — no brief, no back-and-forth",
      prompt3: "Update the CTA from 'Schedule a Free Initial Consultation' to 'Book Your Free 30-Minute Strategy Call' and A/B test the conversion difference",
      result3: "✓ CTA changed instantly — test it, revert it, try another version whenever you want"
    }
  },
  {
    id: "anderson-pine",
    company: "Anderson Pine Corporation",
    logo: "/assets/reports/anderson-pine/logo.jpeg",
    logoNeedsBg: false,
    url: "https://andersonpine.net",
    industry: "Engineering Services / Renewable Energy & Infrastructure",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new entry to the Projects Map for the solar installation we just completed in Nevada",
      result1: "✓ Project added and live on the map within minutes — no designer, no delay",
      prompt2: "Update the hero from 'SOLAR' to lead with our full Water-Solar-Land engineering tagline and add a contact prompt",
      result2: "✓ Hero updated with new headline and CTA — live same day",
      prompt3: "Add a Careers page with our current open roles and a simple application form",
      result3: "✓ Careers page built and published same day, form integrated and ready to receive submissions"
    }
  },
  {
    id: "atriano",
    company: "Atriano",
    logo: "/assets/reports/atriano/logo.jpeg",
    logoNeedsBg: false,
    url: "https://atriano.com",
    industry: "AI Solutions / Talent & Data Consulting",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Replace 'Discover More' with 'See the AI Aggregator in Action' and link it to the new demo page we just built",
      result1: "✓ CTA updated and linked within minutes — no designer, no delay",
      prompt2: "Add a section under 'Build Your Teams' that highlights our new AI staffing workflow with a case study",
      result2: "✓ New section live same day, content and layout matched to the existing design",
      prompt3: "Update the 'Unlock the Potential of Your Data' section to reflect our new enterprise data partnership — swap in their logo and updated copy",
      result3: "✓ Section refreshed and published immediately — no brief, no queue"
    }
  },
  {
    id: "carbon-origins",
    company: "Carbon Origins Inc.",
    logo: "/assets/reports/carbon-origins/logo.jpeg",
    logoNeedsBg: false,
    url: "https://carbonorigins.com",
    industry: "Robotics / Industrial Automation",
    pages: 5,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new application under the Applications section for pipeline inspection — use the same card format as the existing ones",
      result1: "✓ New application card added and live within minutes, matching the existing design exactly",
      prompt2: "Update the 'Hire Bobby' CTA to go to a new intake form instead of a generic contact page",
      result2: "✓ CTA destination updated and intake form built same day — no dev required",
      prompt3: "Add a Safety First case study — we have a new pilot result from the firefighting deployment we want to feature",
      result3: "✓ Case study section updated with real pilot data, live before the next customer call"
    }
  },
  {
    id: "carenami",
    company: "Carenami",
    logo: "/assets/reports/carenami/logo.jpeg",
    logoNeedsBg: false,
    url: "https://carenami.com",
    industry: "Senior Care / Home Services Marketplace",
    pages: 6,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero headline to 'Find Trusted Help for Your Loved One — Matched in Minutes' and test if it converts better than the current version",
      result1: "✓ Headline swapped and live immediately — revert or try another version any time",
      prompt2: "Add a new service card for transportation assistance alongside the Light Housekeeping and Meal Preparation cards",
      result2: "✓ New service card built and published same day, consistent with existing layout",
      prompt3: "Update The Carenami Advantage section to highlight our new background check process — we just upgraded the vetting",
      result3: "✓ Section updated with new copy and live before the next marketing push"
    }
  },
  {
    id: "coachlab",
    company: "CoachLab Consulting",
    logo: "/assets/reports/coachlab/logo.jpeg",
    logoNeedsBg: false,
    url: "https://coachlab.space",
    industry: "Executive Recruiting / AI-Powered Talent Acquisition",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with our average time-to-hire stat — 12 days vs. industry average of 45",
      result1: "✓ Hero updated with the new stat and live in minutes — no designer, no delay",
      prompt2: "Add a step to the How it Works section that explains our AI screening layer before the recruiter interview stage",
      result2: "✓ New process step added and published same day, consistent with existing flow",
      prompt3: "Change the CTA from 'Contact Us' to 'Start Your Search' and link it to a new intake form",
      result3: "✓ CTA and destination updated immediately — test the conversion, revert if needed, try another version"
    }
  },
  {
    id: "communicatemore",
    company: "CommunicateMore",
    logo: "/assets/reports/communicatemore/logo.jpeg",
    logoNeedsBg: false,
    url: "https://communicatemore.biz",
    industry: "Digital Marketing & Media Strategy",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our latest campaign results to the View Projects section — three new case studies with before/after metrics",
      result1: "✓ Case studies added and live within minutes — portfolio stays current without a designer",
      prompt2: "Update the Digital Marketing section to call out our new TikTok ad offering alongside PPC and CPM",
      result2: "✓ Section updated and published same day, no brief required",
      prompt3: "Test a new hero — swap 'We Live & Breathe Creativity' for a direct ROI headline and see which one gets more inquiry clicks",
      result3: "✓ New headline live immediately — run the test, compare, revert or keep it, all on your own timeline"
    }
  },
  {
    id: "constellation-immersive",
    company: "Constellation Immersive",
    logo: "/assets/reports/constellation-immersive/logo.jpeg",
    logoNeedsBg: false,
    url: "https://constellationimmersive.com",
    industry: "Experiential Design / Immersive Storytelling",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our new Accolades — we just won two awards at the immersive design summit, add them to the awards section",
      result1: "✓ Accolades updated and live the same day they're announced — no delay, no WordPress queue",
      prompt2: "Update the 'Journey Further With Us' CTA to link to a new project inquiry form instead of the generic contact page",
      result2: "✓ CTA destination updated and new form built same day, ready for inbound project inquiries",
      prompt3: "Add a new team member to 'Our Stellar Team' — photo, bio, and title — she starts Monday",
      result3: "✓ Team section updated and live before Monday morning — no plugin conflicts, no staging environment needed"
    }
  },
  {
    id: "corra-health",
    company: "Corra Health",
    logo: "/assets/reports/corra-health/logo.jpeg",
    logoNeedsBg: false,
    url: "https://corra.health",
    industry: "Digital Health / Chronic Condition Management",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with 'Flare-ups feel random. Corra makes them make sense.' — test if it outperforms the current version",
      result1: "✓ Hero variant live within minutes — measure it, swap back, or keep it, no designer in the loop",
      prompt2: "Add a 'Discover Your Triggers' landing page targeting people searching for eczema trigger tracking — separate from the main homepage",
      result2: "✓ New condition-specific page built and live same day, ready for SEO and paid traffic",
      prompt3: "Add a press section under 'Flare Prevention Made Easy' to feature the new Health Tech Today feature we just got",
      result3: "✓ Press mention added and live before the article traffic peaks — no sprint, no queue"
    }
  },
  {
    id: "criteria-entertainment",
    company: "Criteria Entertainment",
    logo: "/assets/reports/criteria-entertainment/logo.jpeg",
    logoNeedsBg: false,
    url: "https://criteriaentertainment.com",
    industry: "Latin Music & Entertainment Management",
    pages: 8,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to say we just signed a new artist — link to the new press release",
      result1: "✓ Hero updated, linked, and live in under 10 minutes",
      prompt2: "Add a new Services page section for our brand partnership offering",
      result2: "✓ New section built and published same day, no designer needed",
      prompt3: "Change the CTA from 'Follow Us' to 'Book a Consultation' and test it for two weeks",
      result3: "✓ CTA swapped instantly, reverted or kept — your call, your timeline"
    }
  },
  {
    id: "curbside-electric",
    company: "Curbside Electric",
    logo: "/assets/reports/curbside-electric/logo.jpeg",
    logoNeedsBg: false,
    url: "https://curbelectric.com",
    industry: "EV Charging Infrastructure",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add Maryland as a featured market on the homepage with a short description",
      result1: "✓ New market section live within the hour",
      prompt2: "Update the hero to 'Electrify the Curb. Now serving 3 states.' and add a Contact Us CTA",
      result2: "✓ Hero and CTA updated instantly, no Wix editor headaches",
      prompt3: "Create a simple landing page for our new community partnership program",
      result3: "✓ Page described, built, and published same day"
    }
  },
  {
    id: "dalton-bioanalytics",
    company: "Dalton Bioanalytics",
    logo: "/assets/reports/dalton-bioanalytics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://daltonbioanalytics.com",
    industry: "Bioanalytics / Life Sciences",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new Proteomics Services page under Analytical Services with our updated pricing tiers",
      result1: "✓ Page built and linked in the nav same day",
      prompt2: "Update the hero to highlight our one-shot multi-omics profiling and link to the new case study",
      result2: "✓ Hero updated and case study linked in minutes",
      prompt3: "Add a 'Request a Quote' CTA to every service page and test click-through for 30 days",
      result3: "✓ CTA added across all pages at once — no repeating the same task page by page"
    }
  },
  {
    id: "datavertex",
    company: "DataVertex",
    logo: "/assets/reports/datavertex/logo.jpeg",
    logoNeedsBg: false,
    url: "https://data-vertex.com",
    industry: "Recruiting Data & Candidate Intelligence",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'Smarter Sourcing. Better Candidates. Faster Hires.' and swap the CTA to 'Get a candidate sample'",
      result1: "✓ Hero and CTA updated and live in under 10 minutes",
      prompt2: "Add a dedicated landing page for our Candidate API with a short feature list and a demo request form",
      result2: "✓ Page built, form embedded, and published same day",
      prompt3: "Test 'See a sample' vs 'Get a candidate sample' on the CTA for two weeks",
      result3: "✓ CTA variant running immediately — no dev needed, no sprint required"
    }
  },
  {
    id: "digital-wave-design",
    company: "Digital Wave Design",
    logo: "/assets/reports/digital-wave-design/logo.jpeg",
    logoNeedsBg: false,
    url: "https://digitalwavedesign.com",
    industry: "Design & Marketing Agency",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add three new portfolio case studies to the Portfolio page with before/after screenshots",
      result1: "✓ Portfolio updated and published within the hour",
      prompt2: "Update the hero to 'Make waves, not ripples' and add a 'Book a Discovery Call' CTA",
      result2: "✓ New CTA live in minutes — test it, swap it, keep it, all on your timeline",
      prompt3: "Create a new landing page for our Q3 branding package offer with a form and pricing tier",
      result3: "✓ Page described to AI, built, reviewed, and shipped same day"
    }
  },
  {
    id: "elevated-influence",
    company: "Elevated Influence",
    logo: "/assets/reports/elevated-influence/logo.jpeg",
    logoNeedsBg: false,
    url: "https://theelevatedinfluence.co",
    industry: "Influencer Marketing & Creator Partnerships",
    pages: 4,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new case study to the Brands page — here's the campaign summary and results",
      result1: "✓ Case study added and live within the hour, no design ticket needed",
      prompt2: "Update the Creators section CTA from 'For Creators' to 'Apply to Join Our Network'",
      result2: "✓ CTA text updated instantly — test the new phrasing, revert if it underperforms",
      prompt3: "Build a campaign inquiry landing page for Q3 brand outreach with a short form",
      result3: "✓ Page described, built, and published same day — no back-and-forth with a developer"
    }
  },
  {
    id: "ethos-ink-media",
    company: "Ethos Ink Media",
    logo: "/assets/reports/ethos-ink-media/logo.jpeg",
    logoNeedsBg: false,
    url: "https://ethosinkmedia.com",
    industry: "Business Growth & Media Strategy",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'Let's Untangle Your Growth Systems' to something sharper — here's the new angle",
      result1: "✓ Hero rewritten and live in under 10 minutes",
      prompt2: "Add a new offer page for our quarterly solopreneur intensive with a waitlist form",
      result2: "✓ Page built and published same day — no Wix template wrestling",
      prompt3: "Split-test 'Support For Startups' vs 'Get Startup Support' on the homepage CTA",
      result3: "✓ CTA variant running immediately — see which converts, swap with one edit"
    }
  },
  {
    id: "evodyne-robotics",
    company: "Evodyne Robotics",
    logo: "/assets/reports/evodyne-robotics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://evodyne.co",
    industry: "Consumer Robotics / AI Hardware",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'Meet EvoDog — the AI robot built for your home' and add a pre-order CTA",
      result1: "✓ Hero and CTA updated and live in minutes",
      prompt2: "Add a press coverage section to the homepage with logos and links",
      result2: "✓ Press section added same day — no Wix block wrestling required",
      prompt3: "Create a standalone landing page for Evodyne Academy with an enrollment CTA",
      result3: "✓ Page described, built, and published same day — separate from the main nav if needed"
    }
  },
  {
    id: "exergy-systems",
    company: "Exergy Systems",
    logo: "/assets/reports/exergy-systems/logo.jpeg",
    logoNeedsBg: false,
    url: "https://exergycorp.com",
    industry: "Circular Manufacturing / Advanced Recycling Technologies",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new Applications page entry for battery recycling with a one-paragraph description and a consultation CTA",
      result1: "✓ New entry live same day — no design ticket, no waiting",
      prompt2: "Update the hero to highlight our newest reuse technology and swap the CTA to 'Book A Consultation Today'",
      result2: "✓ Hero updated and CTA changed in minutes",
      prompt3: "Create a landing page for our upcoming partner announcement with an email capture form",
      result3: "✓ Page built, form embedded, published same day — ready before the announcement goes out"
    }
  },
  {
    id: "green-hive-spaces",
    company: "Green Hive Spaces",
    logo: "/assets/reports/green-hive-spaces/logo.jpeg",
    logoNeedsBg: false,
    url: "https://greenhivespaces.com",
    industry: "Coworking & Flexible Workspace",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a limited-time spring membership promo to the homepage with a 'Review Plans' CTA",
      result1: "✓ Promo live in minutes — remove it just as fast when it's done",
      prompt2: "Update the Membership Plans page with our new hot desk tier and updated pricing",
      result2: "✓ New tier added and pricing updated same day, no Wix editor friction",
      prompt3: "Create a landing page for our meeting room day-pass offer with a booking form",
      result3: "✓ Page described, built, and published same day — ready to run ads to immediately"
    }
  },
  {
    id: "gro-creative",
    company: "Gro Creative",
    logo: "/assets/reports/gro-creative/logo.jpeg",
    logoNeedsBg: false,
    url: "https://grocreative.com",
    industry: "Creative Agency (Branding & Design)",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our latest Featured Work project to the homepage with the full case study layout",
      result1: "✓ New portfolio piece live within minutes, matching your existing design system exactly",
      prompt2: "Update the Contact Us page — add a project intake form with budget range and timeline fields",
      result2: "✓ Form added, styled to match, submissions routed to your inbox same day",
      prompt3: "I want to A/B test two different hero headlines for our next campaign pitch",
      result3: "✓ Both versions built and testable — swap between them whenever you want, no dev needed"
    }
  },
  {
    id: "groovience",
    company: "Groovience",
    logo: "/assets/reports/groovience/logo.jpeg",
    logoNeedsBg: false,
    url: "https://groovience.com",
    industry: "Meta Advertising Consulting (eCommerce & DTC)",
    pages: 2,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to say 'Grow & Scale Your Brand with Meta Advertising' — new subhead focused on DTC brands in Q3",
      result1: "✓ Hero updated, live in under 10 minutes, no Wix editor required",
      prompt2: "Add a separate landing page for SenGrowth with its own CTA and contact form for assisted living clients",
      result2: "✓ New page built matching your existing design, isolated from the main brand, ready to link in ads",
      prompt3: "Change the discovery call CTA copy — test 'Book Your Free Strategy Session' vs the current version",
      result3: "✓ Both tested, winner kept — you control the switch without touching a single line of code"
    }
  },
  {
    id: "haptech-holdings",
    company: "HapTech Holdings",
    logo: "/assets/reports/haptech-holdings/logo.jpeg",
    logoNeedsBg: false,
    url: "https://haptechholdings.com",
    industry: "Haptic Technology (Health, Wellness & Entertainment)",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Invest page with our new funding round details and a refreshed data room link",
      result1: "✓ Page updated immediately — investors see current information every time they visit",
      prompt2: "Add a new section under HTH Health with our latest clinical results and a 'Request a Demo' CTA",
      result2: "✓ Section built, styled to match Bio-Haptics brand, demo request form routes to your team directly",
      prompt3: "The hero needs to lead with wellness outcomes, not just the technology spec — update the copy",
      result3: "✓ New hero live in minutes, old version saved if you want to revert"
    }
  },
  {
    id: "jg2-collective",
    company: "JG2 Collective",
    logo: "/assets/reports/jg2-collective/logo.jpeg",
    logoNeedsBg: false,
    url: "https://jg2collective.com",
    industry: "Event Production & Experiential Design",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our latest Premiere Events project — here are the photos and a short description of the activation",
      result1: "✓ New case study live within the hour, formatted to match your existing portfolio layout",
      prompt2: "Create a dedicated landing page for Corporate Events with a separate inquiry form for brand marketing clients",
      result2: "✓ Standalone page built, inquiry form routing to the right contact, ready to share in proposals",
      prompt3: "Update the Experiential section copy — we want to lead with the brand immersion angle for our next pitch deck",
      result3: "✓ Copy updated same day, no design queue, no back-and-forth"
    }
  },
  {
    id: "kompanic",
    company: "Kompanic",
    logo: "/assets/reports/kompanic/logo.jpeg",
    logoNeedsBg: false,
    url: "https://kompanic.com",
    industry: "Business Consulting & Organizational Transformation",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client testimonial to the Testimonios section — here's the quote and their company name",
      result1: "✓ Testimonial added and live in minutes, no developer, no GoDaddy editor bottleneck",
      prompt2: "We're launching a new IT solutions service — add it to the ¿Qué Hacemos? section with its own description and icon",
      result2: "✓ New service card built to match your existing layout, published same day",
      prompt3: "Update the hero — we want to lead with the societal impact angle rather than the competitive future framing",
      result3: "✓ Hero copy updated, both versions saved so you can test and revert freely"
    }
  },
  {
    id: "labforinvention",
    company: "Labforinvention",
    logo: "/assets/reports/labforinvention/logo.jpeg",
    logoNeedsBg: false,
    url: "https://labforinvention.com",
    industry: "Nano Thin Film Coating Research & Development",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new section for our Low-E Glass 5G/6G technology with specs and a request-a-sample CTA",
      result1: "✓ Section built, styled to match your existing lab service layout, CTA form routes to your team immediately",
      prompt2: "Update Our Clients section — add two new partner logos and remove one that's outdated",
      result2: "✓ Client logos updated in minutes, no Wix editor, no back-and-forth with a designer",
      prompt3: "We need a dedicated page for PVD Coating services to improve search visibility for that specific term",
      result3: "✓ New page created with proper structure, SEO metadata set, URL added to sitemap before launch"
    }
  },
  {
    id: "luna-cx",
    company: "Luna CX",
    logo: "/assets/reports/luna-cx/logo.jpeg",
    logoNeedsBg: false,
    url: "https://lunacx.world",
    industry: "Business Process Outsourcing & Customer Experience",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero — lead with 'Teams that take care of business' and add a one-liner about predictive analytics underneath",
      result1: "✓ Hero updated, live in under 10 minutes, no Wix editor required",
      prompt2: "Add a dedicated Services page that breaks out supply chain, data science, and digital CX as separate offerings with their own CTAs",
      result2: "✓ Full services page built to match your brand, each section with its own 'Let's Talk' anchor",
      prompt3: "The Management page needs updated bios — here are the new headshots and descriptions",
      result3: "✓ Bios updated, photos optimized and live, no back-and-forth with a designer"
    }
  },
  {
    id: "mali-and-friends",
    company: "MALI & Friends",
    logo: "/assets/reports/mali-and-friends/logo.jpeg",
    logoNeedsBg: false,
    url: "https://maliandfriends.com",
    industry: "Brand Strategy & Creative Design",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subhead to speak directly to founders in the first round of funding",
      result1: "✓ New subhead live in minutes, tested against the original, reverted or kept at your call",
      prompt2: "Add a new case study to the Studio section — here's the brand name, the challenge, and what we built",
      result2: "✓ Case study page built and added to the portfolio in your existing layout, published same day",
      prompt3: "The Method section needs a redesign — I want to walk through our 4-step process with visuals for each stage",
      result3: "✓ New Method layout described, built, and reviewed — no design back-and-forth, no WordPress plugin conflicts"
    }
  },
  {
    id: "metre",
    company: "Metre",
    logo: "/assets/reports/metre/logo.jpeg",
    logoNeedsBg: false,
    url: "https://metre.ai",
    industry: "Medical Devices & Metabolic Health Technology",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the MetreAce section — add our latest clinical study results under 'Data You Can Trust' with a download link",
      result1: "✓ Study data added, formatted cleanly, PDF linked — live within minutes, no Wix editor friction",
      prompt2: "Add a second demo CTA halfway down the page — we're losing visitors who don't scroll to the bottom",
      result2: "✓ Inline CTA added exactly where you want it, styled to match, tested across devices before launch",
      prompt3: "We need a standalone landing page for our partnership program — separate from the main site, same visual identity",
      result3: "✓ Partner page built and published same day, independent URL, inquiry form routing to the right contact"
    }
  },
  {
    id: "modern-cfo",
    company: "Modern CFO",
    logo: "/assets/reports/modern-cfo/logo.jpeg",
    logoNeedsBg: false,
    url: "https://moderncfoservices.com",
    industry: "Fractional CFO & Financial Advisory Services",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero — lead with 'Growth Strategy. Financial Clarity. Modern Technology.' and add a line about our fractional model under the subhead",
      result1: "✓ Hero updated and live in minutes, discovery call CTA stays prominent, no Wix editor required",
      prompt2: "Add a new service to Our Services section — we're now offering cash flow forecasting as a standalone engagement",
      result2: "✓ New service card added, styled to match, visible immediately to every visitor",
      prompt3: "Create a dedicated landing page for startup founders with a tailored pitch and a separate discovery call booking link",
      result3: "✓ Founder-specific page built and published same day, no overlap with the main services page, tracked separately"
    }
  },
  {
    id: "multi-hyphen-media",
    company: "Multi-Hyphen Media",
    logo: "/assets/reports/multi-hyphen-media/logo.jpeg",
    logoNeedsBg: false,
    url: "https://multihyphenmedia.com",
    industry: "Marketing & Media Agency",
    pages: 4,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Services page to add our new content strategy offering and reorder the sections",
      result1: "✓ Done in minutes. No brief, no back-and-forth, no queue.",
      prompt2: "Add a new Case Studies entry for the campaign we just wrapped — here's the copy and the images",
      result2: "✓ Live the same day, exactly how you want it — while the win is still fresh.",
      prompt3: "Change the Tips & Trends page headline and add a newsletter signup form below the latest post",
      result3: "✓ Form live, headline updated, no dev ticket required."
    }
  },
  {
    id: "my-learning-labs",
    company: "My Learning Labs",
    logo: "/assets/reports/my-learning-labs/logo.jpeg",
    logoNeedsBg: false,
    url: "https://mylearninglabs.com",
    industry: "EdTech / Neurodivergent Learning",
    pages: 11,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Program page hero to lead with outcomes for parents — add a line about average student improvement after 8 weeks",
      result1: "✓ Live in minutes. No Wix editor lag, no waiting on anyone.",
      prompt2: "Add a dedicated Schools page with a separate inquiry form for district administrators",
      result2: "✓ Page live, form connected, copy tailored — same day.",
      prompt3: "Rewrite the Parents section intro to address the most common question we get on sales calls",
      result3: "✓ Updated instantly, right when the feedback is top of mind."
    }
  },
  {
    id: "nitro-workforce",
    company: "Nitro Workforce Management",
    logo: "/assets/reports/nitro-workforce/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nitrovms.com",
    industry: "Healthcare Workforce Technology",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the NitroVMS Solutions page to lead with our new AI-enabled scheduling feature — here's the one-liner",
      result1: "✓ Live in minutes. No queue, no Wix editor bottleneck.",
      prompt2: "Add a new Insights article to the blog and feature it on the homepage",
      result2: "✓ Published and surfaced same day — while the topic is still timely.",
      prompt3: "Change the hero CTA from 'Explore the Platform' to 'Book a Demo' and A/B test the button color",
      result3: "✓ Done. Reverted. Tested again. No dev ticket required."
    }
  },
  {
    id: "northstar-solar",
    company: "NorthStar Solar Inc.",
    logo: "/assets/reports/northstar-solar/logo.jpeg",
    logoNeedsBg: false,
    url: "https://gonorthstarsolar.com",
    industry: "Solar & Roofing Installation",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Financing page to reflect the new IRA tax credit amounts — here's the updated figure",
      result1: "✓ Live in minutes. The right number in front of every homeowner who visits today.",
      prompt2: "Add a seasonal promotion banner to the homepage — 'Free roof inspection with every solar quote this month.'",
      result2: "✓ Banner up, offer live, no designer required.",
      prompt3: "Change the hero CTA from 'Get Your Free Quote' to 'See What You'd Save' and test which drives more form fills",
      result3: "✓ Test it today, read the results, swap it back or keep it — your call, your timeline."
    }
  },
  {
    id: "novelance",
    company: "Novelance",
    logo: "/assets/reports/novelance/logo.jpeg",
    logoNeedsBg: false,
    url: "https://novelance.com",
    industry: "NetSuite Consulting & ERP Services",
    pages: 11,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new Modules page entry for our latest NetSuite customization — here's the one-paragraph description",
      result1: "✓ Page updated, live in minutes. No brief, no queue, no lag.",
      prompt2: "Rewrite the Services section intro — we're leading with Integration now, not Implementation",
      result2: "✓ Updated today, reflects the pivot you made last quarter.",
      prompt3: "Add a Real-Time Insights case study with the customer results from the segmentation project we just closed",
      result3: "✓ Live while the outcome is still fresh and the client is still happy to be referenced."
    }
  },
  {
    id: "nv-media",
    company: "NV Media Advertising Agency",
    logo: "/assets/reports/nv-media/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nv.media",
    industry: "Digital Marketing & Advertising Agency",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the homepage hero to 'Award-Winning Digital Marketing That Actually Drives Revenue' — and swap the CTA to 'See Our Results.'",
      result1: "✓ Live in minutes. No WordPress plugin conflict, no dev call required.",
      prompt2: "Add a dedicated Podcast Studio Rental page with a booking form — we're getting too many inquiries to handle over email",
      result2: "✓ Page built, form live, inquiries routing — same day.",
      prompt3: "Add our newest Social Media Marketing case study to the site and feature it on the homepage this week",
      result3: "✓ Up while the campaign results are still fresh and the client is still celebrating."
    }
  },
  {
    id: "nyfik",
    company: "Nyfik",
    logo: "/assets/reports/nyfik/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nyfik.com",
    industry: "Purpose-Driven Software / Community Apps",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update The Basics page to mention our fog-tracking app by name and add a link to the beta waitlist",
      result1: "✓ Live in minutes. No WordPress dashboard, no plugin conflicts.",
      prompt2: "Add a new Our Notebook post about why we build for overlooked communities — here's the draft",
      result2: "✓ Published and live today, while the thinking is fresh.",
      prompt3: "Change the hero from 'Say Hello' to 'Join the Waitlist' while we're in beta — then switch it back at launch",
      result3: "✓ Done in two minutes. Switch it back the same way."
    }
  },
  {
    id: "pacific-business-partners",
    company: "Pacific Business Partners",
    logo: "/assets/reports/pacific-business-partners/logo.jpeg",
    logoNeedsBg: false,
    url: "https://pacificbp.com",
    industry: "Business Consulting (Accounting, Marketing, Operations, Coaching)",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Coaching + Mentoring page to lead with our new 90-day business systems sprint — here's the one-paragraph description",
      result1: "✓ Live in minutes. Clients see the updated offering today.",
      prompt2: "Add a client testimonial to the homepage under the 'Feeling Lost in the Business Maze?' section — here's what they said",
      result2: "✓ Up immediately, while the client relationship is warm and the words are fresh.",
      prompt3: "Change the Strategy Session CTA on every page to say 'Book Your Free 30-Min Call' instead",
      result3: "✓ Every instance updated across all 8 pages in one pass. No hunting through WordPress templates."
    }
  },
  {
    id: "parkclear",
    company: "ParkClear",
    logo: "/assets/reports/parkclear/logo.jpeg",
    logoNeedsBg: false,
    url: "https://parkclear.co",
    industry: "Mobile App / Parking Technology",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the homepage hero to highlight our new image recognition feature — here's the new one-liner",
      result1: "✓ Live in minutes. Every new visitor sees the updated pitch today.",
      prompt2: "Add a press mention to the Our Story page — we just got covered by a local news outlet",
      result2: "✓ Up same day, while the coverage is still driving traffic.",
      prompt3: "Change the CTA from 'Download App' to 'Park Smarter — Free Download' and see if it lifts installs",
      result3: "✓ Test it now. Revert it if it doesn't move the number. No ticket required."
    }
  },
  {
    id: "partnerite",
    company: "PartneRite",
    logo: "/assets/reports/partnerite/logo.jpeg",
    logoNeedsBg: false,
    url: "https://partnerite.com",
    industry: "B2B SaaS / Partner Ecosystem Management",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Platform page to highlight our new real-time revenue leakage detection feature — here's the two-sentence description",
      result1: "✓ Live in minutes. Every demo prospect sees the updated capability before their call.",
      prompt2: "Add a Consulting page that clearly separates our advisory services from the SaaS product — here's the outline",
      result2: "✓ New page up the same day, with its own CTA routing to a separate form.",
      prompt3: "Change the hero CTA from 'Schedule a Demo' to 'See It in Action — Free Demo' and test click-through rate",
      result3: "✓ Changed, tracked, reverted or kept — on your schedule, not a designer's."
    }
  },
  {
    id: "personal-magic",
    company: "Personal Magic",
    logo: "/assets/reports/personal-magic/logo.jpeg",
    logoNeedsBg: false,
    url: "https://personalmagic.io",
    industry: "Music Education / Consumer App",
    pages: 1,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change 'Now you will know how to play a musical instrument' to something punchier — something about learning your first song in a week",
      result1: "✓ New hero is live in minutes. No ticket, no wait.",
      prompt2: "Update the waitlist offer — instead of $100 off, make it early access plus a free lesson",
      result2: "✓ The page reflects the new offer immediately, right when you need it to.",
      prompt3: "Add a section above the waitlist form explaining what LOGIE actually does — three short bullet points",
      result3: "✓ New section added, ordered however makes sense, without touching a single line of code."
    }
  },
  {
    id: "petcoil",
    company: "PETcoil",
    logo: "/assets/reports/petcoil/logo.jpeg",
    logoNeedsBg: false,
    url: "https://petcoil.com",
    industry: "Medical Imaging / Life Sciences Hardware",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with clinical accuracy numbers instead of the technology description — something like '40% improvement in lesion detectability.'",
      result1: "✓ Hero updated immediately. No brief, no queue.",
      prompt2: "Add a 'Clinical Partners' section after the product overview — we just signed two research institutions",
      result2: "✓ New section is live same day the announcement goes out.",
      prompt3: "Change 'Learn More' to 'Request a Demo' and link it to our scheduling form",
      result3: "✓ CTA updated across the page in minutes, measurable impact on qualified lead flow starting today."
    }
  },
  {
    id: "pilot-lab",
    company: "Pilot Lab",
    logo: "/assets/reports/pilot-lab/logo.jpeg",
    logoNeedsBg: false,
    url: "https://pilotlab.com",
    industry: "Digital Experience / Creative Agency",
    pages: 3,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Replace 'We create exceptional digital experiences' with a headline that names the type of client we work with — B2B SaaS, series A+",
      result1: "✓ Hero updated and live. The right clients self-select in.",
      prompt2: "Add a new case study card to the Case Studies section — here's the client name, outcome, and screenshot",
      result2: "✓ New card added to the grid, same day the project wraps.",
      prompt3: "Update 'Get in touch' to 'Start a project' and link to our intake form instead of the email address",
      result3: "✓ CTA and link updated across the site in minutes — no Webflow editor handoff required."
    }
  },
  {
    id: "prossimo-tech",
    company: "ProssimoTech",
    logo: "/assets/reports/prossimo-tech/logo.jpeg",
    logoNeedsBg: false,
    url: "https://prossimotech.com",
    industry: "Financial Technology / Working Capital Advisory",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Translate the hero headline into English and rewrite it around ROIC improvement — CFOs need to see the outcome, not the method",
      result1: "✓ Hero updated in both languages, live within the hour.",
      prompt2: "Add an Arrow™ product page that walks through how real-time financial data processing works — three steps, one diagram",
      result2: "✓ New page built and linked from the nav same day.",
      prompt3: "Change the email sign-up CTA to 'Book a Working Capital Review' and connect it to our Calendly",
      result3: "✓ CTA updated, form swapped, link tested — done before the next prospect visit."
    }
  },
  {
    id: "realryder",
    company: "RealRyder International",
    logo: "/assets/reports/realryder/logo.jpeg",
    logoNeedsBg: false,
    url: "https://realryder.com",
    industry: "Fitness Equipment / Indoor Cycling",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'indoor cycling evolved' to something that leads with the muscle recruitment benefit — we want buyers to feel the difference before they read the specs",
      result1: "✓ New hero live immediately. A/B test the next version next week.",
      prompt2: "Add three new gym testimonials to the Testimonials section — here are the quotes and facility names",
      result2: "✓ Testimonials added and published same day they come in, while the enthusiasm is still fresh.",
      prompt3: "Add a 'Find a Dealer' page so facility buyers can locate their nearest distributor without emailing us",
      result3: "✓ New page built, linked in the nav, and live — without a brief, a build queue, or a two-week wait."
    }
  },
  {
    id: "revolve-practice-transitions",
    company: "Revolve Practice Transitions",
    logo: "/assets/reports/revolve-practice-transitions/logo.jpeg",
    logoNeedsBg: false,
    url: "https://revolvetransitions.com",
    industry: "Dental Practice Brokerage / Professional Services",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new listing to 'Dental Practices for Sale' — here's the location, practice type, asking price, and contact form",
      result1: "✓ Listing is live same day it's ready to go to market. No design queue.",
      prompt2: "Update the 'Selling a Practice' page to address the most common question we hear right now — how long does the process actually take?",
      result2: "✓ Page updated with a new section, accurate to where your process is today.",
      prompt3: "Change the CTA from 'Contact Our Experienced Team' to 'Get a Free Practice Valuation' and link it to our intake form",
      result3: "✓ CTA updated across every page that references it, in minutes, not days."
    }
  },
  {
    id: "rotate8",
    company: "Rotate8",
    logo: "/assets/reports/rotate8/logo.jpeg",
    logoNeedsBg: false,
    url: "https://rotate8.com",
    industry: "AgTech / Farm Automation",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to include a specific crop type or use case — something growers immediately recognize",
      result1: "✓ Hero is updated and live the same day you make the call.",
      prompt2: "Add a 'Pilot Program' page — who qualifies, what they get, and a form to apply",
      result2: "✓ New page built and linked from the nav. Pilot applications start flowing in.",
      prompt3: "Add a 'Smart Farm Automation' section with three short case examples — what the problem was, what Rotate8 did, what changed",
      result3: "✓ Section live, written in plain language that resonates with working farmers, not just tech buyers."
    }
  },
  {
    id: "schulman-communications",
    company: "Schulman Communications Interactive",
    logo: "/assets/reports/schulman-communications/logo.jpeg",
    logoNeedsBg: false,
    url: "https://getcoachingfromsci.com",
    industry: "Executive Coaching / Communications Training",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add my latest podcast interview to the 'Check Out Our Podcast Interviews' section — here's the show name, episode title, and link",
      result1: "✓ New podcast card live the same day the episode drops. No wait.",
      prompt2: "Update the hero to rotate between three different headlines — test which one drives more coaching inquiry clicks",
      result2: "✓ A/B test set up and running. Data in within the week.",
      prompt3: "Add a dedicated page for corporate sales training — different from the individual coaching page, written for L&D buyers",
      result3: "✓ New page built, optimized for the right buyer, live before the next enterprise conversation."
    }
  },
  {
    id: "shalla-nyc",
    company: "SHALLA NYC",
    logo: "/assets/reports/shalla-nyc/logo.jpeg",
    logoNeedsBg: false,
    url: "https://shalla.nyc",
    industry: "Talent Management / Influencer Marketing / Event Production",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add two new talent profiles to the Talent section — macro influencer in wellness, micro in comedy. Here are their handles, stats, and headshots.",
      result1: "✓ Both profiles live on the site before the next brand pitch call.",
      prompt2: "Update the Services section to add 'Content Strategy' — we've been doing it for six months and it's not on the site yet",
      result2: "✓ New service listed, described, and visible to every brand that lands on the page.",
      prompt3: "Add a contact button to the homepage — right now there's no clear CTA and people have to scroll to find how to reach us",
      result3: "✓ CTA added exactly where visitors are looking for it. Done in minutes."
    }
  },
  {
    id: "soar-optics",
    company: "Soar Optics",
    logo: "/assets/reports/soar-optics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://soaroptics.com",
    industry: "Environmental Analytics / Microplastics Detection",
    pages: 7,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Microplastics section to include the new EPA threshold data that just dropped — here's the summary and source",
      result1: "✓ Content updated the same day the regulation is published. You're ahead of competitors who have to wait on their dev.",
      prompt2: "Rewrite the hero from 'Microplastics are a widespread and invisible hazard' to something that names our specific detection capability and who we sell to",
      result2: "✓ New hero live immediately. A/B test a second version next week.",
      prompt3: "Add a 'For Regulators' page separate from the main 'Our Value Proposition' — government buyers need a different framing than commercial labs",
      result3: "✓ New page built with the right language for that buyer. Live and linked before the next RFP conversation."
    }
  },
  {
    id: "stellation",
    company: "Stellation",
    logo: "/assets/reports/stellation/logo.jpeg",
    logoNeedsBg: false,
    url: "https://stellationcare.com",
    industry: "Healthcare AI / Provider Intelligence",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero to 'Stop guessing. Start knowing. Stellation gives health plans real-time provider performance intelligence.'",
      result1: "✓ Updated live in minutes — no designer, no ticket, no wait",
      prompt2: "Add a Solutions page for our new network adequacy use case with a Book a Demo CTA",
      result2: "✓ New page built and live same day, matching your existing design",
      prompt3: "Add a case study section under The Stellation Platform with a pull quote from our latest health plan client",
      result3: "✓ Done and published before the prospect meeting"
    }
  },
  {
    id: "the-legal-billing-group",
    company: "The Legal Billing Group",
    logo: "/assets/reports/the-legal-billing-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://thelegalbillinggroup.com",
    industry: "Legal Billing & Financial Services",
    pages: 14,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'Managed Legal Billing & Collections — so your attorneys can focus on the work that matters'",
      result1: "✓ Live in minutes, no designer involved",
      prompt2: "Add a new service page for our litigation support billing offering with a contact form at the bottom",
      result2: "✓ New page built same day with your existing design and branding",
      prompt3: "Add three new client testimonials to the homepage with their firm name and practice area",
      result3: "✓ Published immediately — no queue, no ticket"
    }
  },
  {
    id: "the-travel-mom",
    company: "The Travel Mom",
    logo: "/assets/reports/the-travel-mom/logo.jpeg",
    logoNeedsBg: false,
    url: "https://thetravelmom.com",
    industry: "Travel Media & Content",
    pages: 8,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new destination guide page for Bali with sections for hotels, family tips, and points redemption options",
      result1: "✓ New page live same day, matching your existing layout and brand",
      prompt2: "Update the homepage hero to feature the current vacation giveaway with a signup CTA",
      result2: "✓ Done in minutes — no designer, no Wix editor wrestling",
      prompt3: "Add a Hotel Reviews section to the homepage with a grid of the 4 most recent reviews linking to their pages",
      result3: "✓ Built and published before your next post goes out"
    }
  },
  {
    id: "the-wardrobe-essentialist",
    company: "The Wardrobe Essentialist",
    logo: "/assets/reports/the-wardrobe-essentialist/logo.jpeg",
    logoNeedsBg: false,
    url: "https://wardrobeessentialist.com",
    industry: "Personal Styling / Men's Fashion",
    pages: 6,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'The world's best dress shirts, matched to your measurements. Free. No subscription.'",
      result1: "✓ Live in minutes — no Webflow editor, no designer, no wait",
      prompt2: "Add a new brand spotlight page for our latest partner with a featured collection grid and a Get Started Now CTA",
      result2: "✓ Built same day, matching your existing design and typography",
      prompt3: "Add a 'How it Works' explainer section to the homepage above the brand logos with 3 steps",
      result3: "✓ Published immediately — exactly where you want it"
    }
  },
  {
    id: "toro-neurovascular",
    company: "Toro Neurovascular",
    logo: "/assets/reports/toro-neurovascular/logo.jpeg",
    logoNeedsBg: false,
    url: "https://toroneuro.com",
    industry: "Medical Devices / Stroke Care Technology",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to reflect our FDA submission milestone — 'Join a new generation of stroke care. MicroFlex™ catheter technology, built for the moments that matter most.'",
      result1: "✓ Live in minutes — no WordPress login wrestling, no developer ticket",
      prompt2: "Add a clinical evidence page with our latest study data, a summary section, and a contact form for physician inquiries",
      result2: "✓ New page built same day, matching your existing design",
      prompt3: "Add a press section to the homepage with our last 3 coverage mentions and links to the full articles",
      result3: "✓ Published immediately — no queue, no wait"
    }
  },
  {
    id: "tricubics",
    company: "Tricubics",
    logo: "/assets/reports/tricubics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://tricubics.com",
    industry: "AI-Powered Contactless Retail Technology",
    pages: 4,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'The future of shopping is now — frictionless, cashierless, and built for where people already are'",
      result1: "✓ Live in minutes — no Webflow editor, no designer, no delay",
      prompt2: "Add a use case page for apartment complex deployments with a demo request form",
      result2: "✓ New page built same day, consistent with your existing design",
      prompt3: "Add a press/recognition section to the homepage featuring recent media coverage and the team page link",
      result3: "✓ Published immediately — ready before your next investor call"
    }
  },
  {
    id: "uct-mobility",
    company: "UCT Mobility",
    logo: "/assets/reports/uct-mobility/logo.jpeg",
    logoNeedsBg: false,
    url: "https://uctmobility.com",
    industry: "Automotive Infotainment R&D & Testing",
    pages: 9,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a homepage banner announcing UCIVART's Top 10 Infotainment Solution recognition for 2026 with a Discuss A Pilot CTA",
      result1: "✓ Live in minutes — no Wix editor, no designer, no delay",
      prompt2: "Create a dedicated UCIVART landing page for our pilot conversations with OEMs — product overview, key differentiators, and a contact form",
      result2: "✓ New page built same day, consistent with your current design",
      prompt3: "Update the Infotainment Testing section with our latest verification and validation methodology and a case study teaser",
      result3: "✓ Published immediately, ready before the next prospect call"
    }
  },
  {
    id: "vice3d",
    company: "Vice3D",
    logo: "/assets/reports/vice3d/logo.jpeg",
    logoNeedsBg: false,
    url: "https://viceddd.com",
    industry: "3D CGI & VFX Creative Studio",
    pages: 6,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add the Samsung Galaxy Z Fold 7 campaign as a case study under Customers with a video embed and a brief us CTA",
      result1: "✓ Live same day — no Wix workaround, no designer queue",
      prompt2: "Update the homepage hero to 'Vice3D. Community-powered. Brand-focused. Now with AI-integrated production.'",
      result2: "✓ Done in minutes — exactly the way you want it to read",
      prompt3: "Add an Immersive Solutions section to the services page with 3 capabilities and a showreel link",
      result3: "✓ Published immediately, ready for your next pitch"
    }
  },
  {
    id: "vitribiome",
    company: "VitriBiome",
    logo: "/assets/reports/vitribiome/logo.jpeg",
    logoNeedsBg: false,
    url: "https://vitribiome.com",
    industry: "Microbial Biotechnology / Microbiome Health",
    pages: 3,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'Powering the Future of Microbial Innovation — science-driven solutions for the microbiome age'",
      result1: "✓ Live in minutes — no Wix editor friction, no designer wait",
      prompt2: "Add a Retail Innovation page that outlines our consumer product pipeline and includes an Inquire CTA",
      result2: "✓ New page built same day, consistent with your current design and tone",
      prompt3: "Add a Science section to the homepage with a summary of our microbiome research approach and a link to published data",
      result3: "✓ Published immediately — ready for your next investor or partner meeting"
    }
  },
  {
    id: "john-sanders",
    company: "John Sanders Management Consulting",
    logo: "/assets/reports/john-sanders/logo.png",
    logoNeedsBg: false,
    url: "https://www.johnsanders.com",
    industry: "Management Consulting / Investment Banking / Technology Advisory",
    pages: 8,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'Business Consultant, Investor and Technology Advocate' — I want to lead with the entrepreneur focus and add a direct intake CTA",
      result1: "✓ New headline live in minutes, no Webflow editor, no waiting on anyone.",
      prompt2: "Add a new article to the Articles section — I just published something on emerging growth strategy and it needs to be on the site today",
      result2: "✓ Article page added, styled to match, live the same day — not next week.",
      prompt3: "The Parables for Entrepreneurs section needs a better intro — the current one buries the value. Let me rewrite it and push it live.",
      result3: "✓ Copy updated instantly. Test the new version, revert if needed, no designer in the loop."
    }
  },
  {
    id: "pathloom",
    company: "Pathloom",
    logo: "/assets/reports/pathloom/logo.jpeg",
    logoNeedsBg: false,
    url: "https://pathloom.com",
    industry: "Outdoor / Backpacking App",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero — 'Your Ultimate Trip Planning App For Backpacking' is too broad now that we're leaning into the permit angle. Lead with that.",
      result1: "✓ New headline live in minutes. Test it against the original, revert if needed — no Wix editor, no waiting on anyone.",
      prompt2: "Add a new section for the media logos — we just got covered by Backpacker Magazine and Outside and I want it front and center.",
      result2: "✓ New press section added same day, styled to match the existing layout, live before the coverage goes cold.",
      prompt3: "The 'Become a Trailblazer' CTA has been the same since launch — I want to test 'Get Your Free Permit Guide' and see if it converts better.",
      result3: "✓ New CTA live in minutes. Run it, measure it, swap it back if you want — no one else in the loop."
    }
  },
  {
    id: "tmp-metals-group",
    company: "TMP Metals Group",
    logo: "/assets/reports/tmp-metals-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://tmpmetalsgroup.com",
    industry: "Metals Trading, Refining & Distribution",
    pages: 7,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update our hero to lead with tokenization — move the refining and distribution language below the fold.",
      result1: "✓ Hero rewritten and live in under 10 minutes, no designer involved.",
      prompt2: "Add a new section under 'Where our metals are sourced' highlighting our Latin America partnerships.",
      result2: "✓ New section drafted, reviewed, and published same day.",
      prompt3: "Change the 'Learn More' CTA on the Industries page to 'See Our Markets' and point it to a new page.",
      result3: "✓ CTA updated, new page created, linked and tested — done before the end of the day."
    }
  },
  {
    id: "thruline-networks",
    company: "Thruline Networks",
    logo: "/assets/reports/thruline-networks/logo.jpeg",
    logoNeedsBg: false,
    url: "https://thrulinenetworks.com",
    industry: "Impact Venture Studio / ClimateTech, DeepTech & SpaceTech",
    pages: 11,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero subheadline from 'Making Capitalism Work for Everyone' to include our DAF framework and three focus sectors.",
      result1: "✓ Done in under 10 minutes, live immediately — exactly how you want it, no Webflow designer in the loop.",
      prompt2: "Add a new Ecosystem Partners page with logos, one-line descriptions, and links for our current partner cohort.",
      result2: "✓ Full page built same day in your existing design, live before the next Thruline Thursday drops.",
      prompt3: "Add a 'Join Our Studio' CTA to the Focus Areas section that links to a Contact form pre-tagged by sector.",
      result3: "✓ Built, tested, and live — no dev ticket, no approval cycle, done while the idea is still fresh."
    }
  },
  {
    id: "sharpe-alliance",
    company: "The Sharpe Alliance",
    logo: "/assets/reports/sharpe-alliance/logo.jpeg",
    logoNeedsBg: false,
    url: "https://sharpealliance.com",
    industry: "Marketing, Branding & Sponsorship / Strategic Partnerships",
    pages: 8,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero headline to 'Create Connections. Accelerate Business. $30MM+ in Results.' and add a client logo row below it.",
      result1: "✓ Done in under 10 minutes, live immediately — no Wix editor wrestling required.",
      prompt2: "Add a new OUR WORK case study page for our latest branded entertainment campaign with results and visuals.",
      result2: "✓ Full page built same day in your existing design, published before the client announcement goes cold.",
      prompt3: "Change the 'Get Started' CTA to 'See Our Work' on the homepage and test which drives more inquiries.",
      result3: "✓ Try it now, revert it if needed, try another — no dev required, no request filed."
    }
  },
  {
    id: "air-show-network",
    company: "The Air Show Network",
    logo: "/assets/reports/air-show-network/logo.jpeg",
    logoNeedsBg: false,
    url: "https://airshownetwork.com",
    industry: "Air Show Production & Live Event Entertainment",
    pages: 13,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add the 2026 air show schedule to the Air Show Schedule page with dates, locations, and links.",
      result1: "✓ Updated and live same day — no dev ticket, no waiting on the Webflow editor to cooperate.",
      prompt2: "Create a new landing page for the Air Show VIP Experience℠ with pricing tiers and a contact form.",
      result2: "✓ Full page built in your existing design, tested, and published before the next event cycle.",
      prompt3: "Update the hero subheadline from 'The Recognized Leader in Air Show Entertainment' to include our 1,500+ shows stat.",
      result3: "✓ Live in 10 minutes, exactly how you want it worded — no back-and-forth with a designer."
    }
  },
  {
    id: "tenth-floor",
    company: "Tenth Floor",
    logo: "/assets/reports/tenth-floor/logo.jpeg",
    logoNeedsBg: false,
    url: "https://tenthfloor.co",
    industry: "Digital Marketing & Fan Engagement / Music & Entertainment",
    pages: 1,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with 'Fan Engagement That Converts' above the agency description.",
      result1: "✓ Done in under 10 minutes, live immediately — no Wix editor fumbling required.",
      prompt2: "Add a new case study section under 'Our Work' for our latest artist campaign with stats and visuals.",
      result2: "✓ New section built same day, matched to your existing design, shipped before the campaign cools.",
      prompt3: "Swap the 'Request Our Deck' CTA to 'See Our Work' and A/B test which drives more clicks.",
      result3: "✓ Try it, measure it, revert it — all without touching a dev or filing a request."
    }
  },
  {
    id: "watermark-worldwide",
    company: "Watermark Worldwide",
    logo: "/assets/reports/watermark-worldwide/logo.jpeg",
    logoNeedsBg: false,
    url: "https://watermarkww.com",
    industry: "Entertainment, Esports & Brand Partnership Marketing",
    pages: 5,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to call out our esports and video game specialization more directly — right now it's buried below 'WE CONNECT ENTERTAINMENT PROPERTIES AND BRANDS.'",
      result1: "✓ Hero rewritten and repositioned, live in minutes — no WordPress editor handoff.",
      prompt2: "Add a case study page for a recent brand partnership — we need something we can send prospects before a pitch call.",
      result2: "✓ Case study page built, linked from navigation, published same day.",
      prompt3: "Replace the footer 'Contact Us' link with a proper inquiry form — we want to capture lead info, not just open an email client.",
      result3: "✓ Form added, tested, integrated — done before your next call."
    }
  },
  {
    id: "vasquez-arbor-care",
    company: "Vasquez Arbor Care",
    logo: "/assets/reports/vasquez-arbor-care/logo.jpeg",
    logoNeedsBg: false,
    url: "https://vasquezarbor.com",
    industry: "Tree Care & Arborist Services",
    pages: 16,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with our Defensible Space service before fire season — push the general welcome message down.",
      result1: "✓ Hero swapped and live before the day is over, no WordPress login handoff needed.",
      prompt2: "Add a new landing page for emergency storm response — we get a surge of calls after big rain events and need somewhere to send paid ads.",
      result2: "✓ Landing page built, reviewed, and live same day — ready for the next campaign.",
      prompt3: "Change 'Contact us today to schedule a consultation or request a quote' to two separate buttons — one for consultations, one for quotes.",
      result3: "✓ CTAs split, both tested and working, done in minutes."
    }
  },
  {
    id: "uwc-private-equity",
    company: "UWC Private Equity Group",
    logo: "/assets/reports/uwc-private-equity/logo.jpeg",
    logoNeedsBg: false,
    url: "https://uwcpeg.com",
    industry: "Private Equity, Real Estate & Investment Management",
    pages: 13,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Rewrite the hero to lead with a single clear line — something like 'Strategic Capital. Delivered.' — instead of listing all seven business lines.",
      result1: "✓ Hero rewritten and live in minutes, no Wix editor session needed.",
      prompt2: "Add a dedicated page for our AI Lead Gen offering under OUR MISSION — it deserves its own section, not just a line item in the hero.",
      result2: "✓ New page built, linked from navigation, published same day.",
      prompt3: "Update the 'Contact Us' link to a proper contact form — right now it opens an email client, which loses leads.",
      result3: "✓ Contact form added, tested, and live — no developer required."
    }
  },
  {
    id: "unleashed-music",
    company: "Unleashed Music",
    logo: "/assets/reports/unleashed-music/logo.jpeg",
    logoNeedsBg: false,
    url: "https://unleashedmusic.com",
    industry: "Music Promotion & Marketing",
    pages: 4,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the submission form CTA from 'Fill out our submission form HERE' to 'Submit Your Band for Consideration' and make it more prominent on the homepage.",
      result1: "✓ CTA rewritten, repositioned, and live — no Wix editor wrestling required.",
      prompt2: "Add a new section under SERVICES highlighting our digital PR package for independent artists.",
      result2: "✓ New section drafted, designed to match your current layout, published same day.",
      prompt3: "Update the PARTNERS section — add three new label logos and remove the two outdated ones.",
      result3: "✓ Partner logos swapped out in minutes, layout stays clean."
    }
  },
  {
    id: "true-pedigree",
    company: "True Pedigree",
    logo: "/assets/reports/true-pedigree/logo.jpeg",
    logoNeedsBg: false,
    url: "https://truepedigree.com",
    industry: "Product Authentication Technology",
    pages: 11,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Rewrite the hero to lead with 'Authenticate Any Product. Anywhere. Instantly.' in larger type and add a sub-headline about GenuScan's scan speed.",
      result1: "✓ Hero updated and live within minutes — no Webflow editor handoff needed.",
      prompt2: "Add a comparison table to the 'Why GenuScan is Different' section showing us vs. QR-only solutions.",
      result2: "✓ Table drafted, styled to match the page, published same day.",
      prompt3: "Change 'CONTACT US TODAY' to 'Request a GenuScan Demo' and route it to a dedicated demo request page.",
      result3: "✓ CTA copy updated, new page built, form connected — done before your next sales call."
    }
  },
  {
    id: "19y-advisors",
    company: "19Y Advisors",
    logo: "/assets/reports/19y-advisors/logo.jpeg",
    logoNeedsBg: false,
    url: "https://19yadvisors.com",
    industry: "Corporate Venture & Growth Execution Advisory",
    pages: 6,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero to 'We don't consult. We execute.' and add a subhead about our manufacturing sector focus.",
      result1: "✓ Hero updated, subhead added, live in under 10 minutes — no ticket filed, no designer pinged.",
      prompt2: "Add a new section under 'Our Team. Your Team.' that explains how the embedded model works for energy clients.",
      result2: "✓ New section written, placed, and published same day — no back-and-forth on a brief.",
      prompt3: "The 'Talk to Us' CTA isn't converting. Test 'Start a Conversation' and see if it changes form completions.",
      result3: "✓ CTA swapped in minutes, reverted just as fast if it doesn't work — no dev required."
    }
  },
  {
    id: "addictive-health",
    company: "Addictive Health",
    logo: "/assets/reports/addictive-health/logo.jpeg",
    logoNeedsBg: false,
    url: "https://addictive.health",
    industry: "Healthtech Advisory",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'We help build the next health unicorns' to lead with our VC/PE fund track record instead.",
      result1: "✓ Hero rewritten and live in minutes — no Wix editor hand-off, no approval chain.",
      prompt2: "Add a fourth audience path under the 'I'M A FOUNDER / I'M AN INVESTOR' section for health system partners.",
      result2: "✓ New CTA path added same day, properly linked and tested before it goes live.",
      prompt3: "The 'Ideas Worth Sharing' section needs a featured post callout at the top — not buried below the fold.",
      result3: "✓ Section reordered, callout added — done before the next morning's standup."
    }
  },
  {
    id: "apla-group",
    company: "APLA Group",
    logo: "/assets/reports/apla-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://aplagroup.com",
    industry: "Commercial Real Estate Brokerage",
    pages: 6,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Featured Listings section with three new multi-family properties and remove the two that just closed.",
      result1: "✓ Listings updated, photos swapped, and live before your next client call — no WordPress plugin wrestling required.",
      prompt2: "The 'View All Listings' CTA on the homepage isn't getting clicks. Test 'Browse Available Properties' and track the difference.",
      result2: "✓ CTA changed in minutes, reverted just as fast if it doesn't move the needle.",
      prompt3: "Add a dedicated 1031 Exchange landing page — we're seeing more buyer interest and need somewhere to send them.",
      result3: "✓ New page built from a description, reviewed, and published same day — no brief, no build queue."
    }
  },
  {
    id: "beach-agency-group",
    company: "Beach Agency Group",
    logo: "/assets/reports/beach-agency-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://beachagencygroup.com",
    industry: "Event Production & Brand Partnerships",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the homepage hero to feature our most recent event with new photos and change the tagline to 'Where Brands Meet Moments.'",
      result1: "✓ Hero swapped, new images uploaded, live before the post-event recap goes out.",
      prompt2: "Add a Brand Partnerships case study page — we just wrapped a campaign and have results to show prospective clients.",
      result2: "✓ New page built from a description, published same day — ready to send in the next pitch deck.",
      prompt3: "The 'Let's talk' CTA isn't specific enough for event leads. Test 'Plan Your Event' and 'Explore Brand Partnerships' as two separate paths.",
      result3: "✓ Both CTAs live in minutes, tracked separately, swapped back if they don't perform."
    }
  },
  {
    id: "bell-ivy",
    company: "Bell + Ivy",
    logo: "/assets/reports/bell-ivy/logo.jpeg",
    logoNeedsBg: false,
    url: "https://bellivy.com",
    industry: "Personal Branding & Executive Marketing Consultancy",
    pages: 7,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Rewrite the hero — 'Define your message, amplify your impact' is solid but we want to lead with Executive Positioning now. Swap the section order and update the headline.",
      result1: "✓ Hero rewritten, sections reordered, live in minutes — no Webflow editor hand-off needed.",
      prompt2: "Add a client results page under Personal Brand Development. We have three executive case studies ready to publish.",
      result2: "✓ New page built, case studies formatted and live same day — ready to link from outreach emails.",
      prompt3: "Test 'Book a Strategy Call' against the current 'Get Started' CTA. We think the specificity converts better.",
      result3: "✓ CTA swapped instantly, reverted just as fast if the data says otherwise."
    }
  },
  {
    id: "bk-marketing-consulting",
    company: "BK Marketing & Consulting",
    logo: "/assets/reports/bk-marketing-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://bk-marketing.com",
    industry: "Freelance Marketing / Social Media Consulting",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update my hero to highlight social media strategy for small businesses.",
      result1: "✓ Live in minutes. Your site, your words, no editor friction.",
      prompt2: "Add a new landing page for my Aqualung product launch services.",
      result2: "✓ New page built and live same day, matching your existing design.",
      prompt3: "Change 'Work With Me' to 'Book a Free Call' across the site.",
      result3: "✓ Done globally in one pass, verified across all 6 pages."
    }
  },
  {
    id: "big-machine-agency",
    company: "Big Machine Agency",
    logo: "/assets/reports/big-machine-agency/logo.jpeg",
    logoNeedsBg: false,
    url: "https://bigmachineagency.com",
    industry: "Digital Marketing Agency",
    pages: 5,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new Case Studies page for our Q2 client wins.",
      result1: "✓ New page built and live same day, matching your existing design.",
      prompt2: "Update the hero to 'The agency that works — and proves it.'",
      result2: "✓ Live in minutes. No WordPress login, no plugin conflicts.",
      prompt3: "Change 'CONTACT US' to 'Let's Talk' across the site.",
      result3: "✓ Done globally in one pass, verified across all 5 pages."
    }
  },
  {
    id: "black-chamber-ie",
    company: "Black Chamber of Commerce Inland Empire",
    logo: "/assets/reports/black-chamber-ie/logo.jpeg",
    logoNeedsBg: false,
    url: "https://bccinlandempire.com",
    industry: "Nonprofit / Business Association",
    pages: 12,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new event registration page for Legacy Ball 2026.",
      result1: "✓ New page built and live same day, matching your existing design.",
      prompt2: "Update the hero to 'Celebrating 11 Years of Excellence — Join the Chamber Today.'",
      result2: "✓ Live in minutes. No Wix editor, no layout surprises.",
      prompt3: "Add a Grant Opportunities update with new deadlines across the relevant pages.",
      result3: "✓ Done in one pass, verified across all 12 pages before it goes live."
    }
  },
  {
    id: "blue-sapphire-homes",
    company: "Blue Sapphire Homes",
    logo: "/assets/reports/blue-sapphire-homes/logo.jpeg",
    logoNeedsBg: false,
    url: "https://bluesapphirehomes.com",
    industry: "Real Estate / Property Management",
    pages: 8,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Vacancies page with three new available units and their rental rates.",
      result1: "✓ Live in minutes. No Wix editor, no layout breaks.",
      prompt2: "Add a new landing page targeting first-time home buyers in the Inland Empire.",
      result2: "✓ New page built and live same day, matching your existing design.",
      prompt3: "Change the hero CTA from 'Home Buyer' to 'Find Your Home Today' across the site.",
      result3: "✓ Done globally in one pass, verified across all 8 pages."
    }
  },
  {
    id: "competitive-excellence",
    company: "Competitive Excellence",
    logo: "/assets/reports/competitive-excellence/logo.jpeg",
    logoNeedsBg: false,
    url: "https://compexcellence.com",
    industry: "GIS & Virtual Tour Services / Emergency Response Technology",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with emergency response — 'GIS & Virtual Tours for First Responders. Real-Time Intelligence When It Matters Most.'",
      result1: "✓ Live in minutes, no Wix editor friction, no waiting on anyone.",
      prompt2: "Add a dedicated landing page for Virtual Tour Services targeting fire departments and municipal clients, with a 'Request a Consultation' form.",
      result2: "✓ Page built same day, form live, URL ready to share with prospects.",
      prompt3: "Test changing 'Request a Consultation' to 'See a Live Demo' and track which one gets more submissions.",
      result3: "✓ New CTA live immediately — pull the data, keep what works."
    }
  },
  {
    id: "confx",
    company: "ConfX",
    logo: "/assets/reports/confx/logo.jpeg",
    logoNeedsBg: false,
    url: "https://confxglobal.com",
    industry: "Business Conferences & Technology Summits",
    pages: 4,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new event page for our Q3 summit with early-bird pricing, speaker lineup, and a registration form.",
      result1: "✓ Page live same day — ready to send to your sponsor and attendee lists.",
      prompt2: "Update the hero headline to 'Where Technology Pioneers Connect — Business Conferences Built for What's Next.'",
      result2: "✓ Updated in minutes, no Wix editor dependency, no waiting on anyone.",
      prompt3: "Add a sponsor CTA to the Our Events page — 'Become a Sponsor' button linking to a contact form with package tiers.",
      result3: "✓ Button and form live within the hour, ready for your next outreach push."
    }
  },
  {
    id: "convergence-point-media",
    company: "Convergence Point Media",
    logo: "/assets/reports/convergence-point-media/logo.jpeg",
    logoNeedsBg: false,
    url: "https://convergencepointmedia.com",
    industry: "Healthcare & Pharma Media Strategy",
    pages: 3,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to: 'Specialized Media Strategy for Healthcare & Pharma — 18 Years Finding the Audiences That Matter.'",
      result1: "✓ Live in minutes, no WordPress plugin conflicts, no developer on call.",
      prompt2: "Add a case study page showing results for a recent life sciences campaign, with a 'Contact Us' CTA at the bottom.",
      result2: "✓ Page built and published same day — ready to share with prospects in your next outreach.",
      prompt3: "Test changing 'CONTACT US' to 'Talk to a Healthcare Media Specialist' and see if it improves form submissions.",
      result3: "✓ New CTA live immediately — keep the winner, swap the loser, no dev ticket required."
    }
  },
  {
    id: "creative-nxgen-petroleum",
    company: "Creative NxGen Petroleum",
    logo: "/assets/reports/creative-nxgen-petroleum/logo.jpeg",
    logoNeedsBg: false,
    url: "https://cngpetroleum.com",
    industry: "Bulk Petroleum / Fuel Distribution",
    pages: 5,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to highlight our OPIS-based pricing for the new quarter.",
      result1: "✓ Copy updated and live in 10 minutes — no plugin conflicts, no waiting on a developer.",
      prompt2: "Add a dedicated page for our aviation fuel delivery service.",
      result2: "✓ New page built from a description, structured like the rest of the site, live same day.",
      prompt3: "Change 'Get a Free Quote' to 'Request Delivery Pricing' on the homepage.",
      result3: "✓ CTA updated instantly — test it, change it again, no approval chain required."
    }
  },
  {
    id: "double-helix-optics",
    company: "Double Helix Optics",
    logo: "/assets/reports/double-helix-optics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://doublehelixoptics.com",
    industry: "Advanced Microscopy / Life Sciences Technology",
    pages: 9,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the SPINDLE® product page to include our latest spatial omics application data.",
      result1: "✓ Page updated with new content in minutes — no Webflow designer needed, no CMS wrestling.",
      prompt2: "Add a 'Technology' landing page that leads with 'Technology based on Nobel Prize-winning science'.",
      result2: "✓ New page built, structured, and live the same day — with the same visual quality as the rest of the site.",
      prompt3: "Change 'Contact us' to 'Request a Demo' on the 3DTRAX® section.",
      result3: "✓ CTA swapped instantly — test the conversion difference, revert if needed, try another variation tomorrow."
    }
  },
  {
    id: "drain-mob",
    company: "Drain Mob",
    logo: "/assets/reports/drain-mob/logo.jpeg",
    logoNeedsBg: false,
    url: "https://drainmob.com",
    industry: "Drain & Sewer Services / Home Services",
    pages: 23,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to run a spring hydro jetting special with a limited-time discount.",
      result1: "✓ Homepage updated and live in 10 minutes — no plugin editor, no staging environment drama.",
      prompt2: "Add a landing page for trenchless pipe lining targeting San Diego homeowners.",
      result2: "✓ New service page built from a description, optimized for local search, live same day.",
      prompt3: "Test 'Schedule An Appointment' as the primary CTA instead of the phone number on mobile.",
      result3: "✓ Switch it, measure it, revert it — on your timeline, no developer required."
    }
  },
  {
    id: "eighth-era-studios",
    company: "Eighth Era Studios",
    logo: "/assets/reports/eighth-era-studios/logo.jpeg",
    logoNeedsBg: false,
    url: "https://eighthera.com",
    industry: "Mobile Gaming / Entertainment",
    pages: 5,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to feature the new Corporation Spotlight for this season's launch.",
      result1: "✓ Hero swapped and live in minutes — no developer ticket, no build deploy cycle.",
      prompt2: "Add a 'Latest' section to the homepage pulling in this week's Community Q&A post.",
      result2: "✓ New section built and placed exactly where you want it, same day.",
      prompt3: "Add a dedicated page for the Characters database with the same nav structure as Eras and Corps.",
      result3: "✓ New page created, linked in nav, and live — consistent with the rest of the site, no custom code required."
    }
  },
  {
    id: "entrada-ventures",
    company: "Entrada Ventures",
    logo: "/assets/reports/entrada-ventures/logo.jpeg",
    logoNeedsBg: false,
    url: "https://entradaventures.com",
    industry: "Venture Capital / Early-Stage Investment",
    pages: 7,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update our hero from 'Building better futures together' to reflect our new focus on industrial tech this quarter.",
      result1: "✓ Live in minutes — no brief, no ticket, no back-and-forth.",
      prompt2: "Add a Companies page entry for our latest portfolio company with their logo, one-liner, and a link.",
      result2: "✓ New card published same day, matching the existing design exactly.",
      prompt3: "Change the 'Let's go' CTA to something that speaks more directly to founders in their seed round.",
      result3: "✓ Test a new button label, see how it performs, revert or keep it — all without touching anyone else's calendar."
    }
  },
  {
    id: "evodyne-robotics",
    company: "Evodyne Robotics",
    logo: "/assets/reports/evodyne-robotics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://evodyne.com",
    industry: "Robotics / Consumer Technology",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero headline from 'Bringing real robots into our homes' to something that leads with EvoDog specifically.",
      result1: "✓ New headline live in minutes, no design file needed.",
      prompt2: "The 'Click Here For Evodyne Academy' CTA needs its own dedicated landing page with an overview of the program and how to apply.",
      result2: "✓ New page built same day, same design system, same URL structure.",
      prompt3: "Add a section under Services for our new computer vision internship track — description, skills required, and an apply button.",
      result3: "✓ Section added, formatted to match existing content, published without touching a developer."
    }
  },
  {
    id: "factor-talent",
    company: "Factor Talent",
    logo: "/assets/reports/factor-talent/logo.jpeg",
    logoNeedsBg: false,
    url: "https://factortalent.com",
    industry: "Tech Staffing / Talent Recruitment",
    pages: 8,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the 'Why Work with Us' section to lead with our data-driven hiring angle instead of the human touch point — we're seeing better responses to that framing.",
      result1: "✓ Section reordered and rewritten, live the same morning.",
      prompt2: "Add a dedicated landing page for companies hiring for technical roles — separate from the general 'Find Talent' page, with its own CTA and intake form.",
      result2: "✓ New page built same day, indexed, and live with proper URL structure.",
      prompt3: "Test changing 'FIND TALENT' to 'Hire Faster' on the homepage — I want to see if it improves click-through.",
      result3: "✓ CTA updated in minutes, revert it or keep it based on what the data shows — no developer involved."
    }
  },
  {
    id: "farmers-fertilizer-supply",
    company: "Farmers Fertilizer & Supply",
    logo: "/assets/reports/farmers-fertilizer-supply/logo.jpeg",
    logoNeedsBg: false,
    url: "https://farmersfertilizer.com",
    industry: "Agricultural Inputs / Soil Solutions",
    pages: 4,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our new foliar blend to the Featured Products section with specs, application rates, and a 'Product Info' button.",
      result1: "✓ New product card live same day, matching the existing format exactly.",
      prompt2: "Update the 'Providing Soil Solutions' hero text — we want to lead with custom fertilizer blends instead of the general tagline.",
      result2: "✓ Hero updated in minutes, no designer required.",
      prompt3: "Add a page explaining our on-site assessment process in more detail — walk visitors through each step from consultation to implementation.",
      result3: "✓ New page built from your description, same URL structure, ready to share with prospects the same day."
    }
  },
  {
    id: "fyc-media",
    company: "FYC Media",
    logo: "/assets/reports/fyc-media/logo.jpeg",
    logoNeedsBg: false,
    url: "https://fycmedia.com",
    industry: "Entertainment Marketing / Film Distribution",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a news item — we just got shortlisted for a major award. Needs to be live today with the film title, the category, and a link to the announcement.",
      result1: "✓ News entry published within the hour, same format as existing posts, no ticket required.",
      prompt2: "Create a dedicated page for our theatrical releasing services — what we do, films we've placed, and a contact form for new inquiries.",
      result2: "✓ New page built from your brief, live same day, matching the existing site design.",
      prompt3: "Update the About Us section — Steven's bio needs to reference the Ventana Sur Film Market appearance and our current slate of 10 films.",
      result3: "✓ Copy updated in minutes, no designer loop, no back-and-forth approval chain."
    }
  },
  {
    id: "gale-strategies",
    company: "Gale Strategies",
    logo: "/assets/reports/gale-strategies/logo.jpeg",
    logoNeedsBg: false,
    url: "https://galestrategies.com",
    industry: "B2B Public Relations & Marketing Agency",
    pages: 5,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "We specialize in thought leadership strategy — update the homepage to lead with our enterprise tech work in finance and insurance.",
      result1: "✓ Hero copy updated, live within minutes, no design ticket needed.",
      prompt2: "Add a new services page for our media relations work with private capital firms.",
      result2: "✓ Page built, styled, and published same day — matching your existing design.",
      prompt3: "We have a new client win — add it to the News section and update the Connect CTA.",
      result3: "✓ Both done immediately, no queue, no back-and-forth."
    }
  },
  {
    id: "gotbio",
    company: "Get on Track Biotech (GOTBio)",
    logo: "/assets/reports/gotbio/logo.jpeg",
    logoNeedsBg: false,
    url: "https://gotbiotech.com",
    industry: "Biotech Consulting (Business & Scientific)",
    pages: 9,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to highlight our new scientific consultation offering and link to the updated case studies.",
      result1: "✓ Hero updated, internal links connected, live in minutes.",
      prompt2: "Add a new Facilities page section with photos and a 'Partner With Us' CTA.",
      result2: "✓ Section built and published same day, no developer handoff.",
      prompt3: "We have a new client — add them to the Our Clients section and update the Approach page to reflect the engagement model.",
      result3: "✓ Both changes done immediately, site stays current without a ticket queue."
    }
  },
  {
    id: "ghost-rocket",
    company: "Ghost Rocket",
    logo: "/assets/reports/ghost-rocket/logo.jpeg",
    logoNeedsBg: false,
    url: "https://ghostrocketmusic.com",
    industry: "Artist Management & Record Label",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Apply page with new submission guidelines and add a gallery section for recent signings.",
      result1: "✓ Page updated, gallery added, live before the next application comes in.",
      prompt2: "Add a News post about our latest management signing and pin it to the homepage.",
      result2: "✓ Post published and homepage updated in minutes, no Wix editor frustration.",
      prompt3: "The Management page needs a new bio and an updated section on what we offer label deals.",
      result3: "✓ Copy updated, section restructured, done same day."
    }
  },
  {
    id: "grassp-health",
    company: "Grassp Health",
    logo: "/assets/reports/grassp-health/logo.jpeg",
    logoNeedsBg: false,
    url: "https://grassphealth.com",
    industry: "Cannabis Delivery & Concierge",
    pages: 7,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Arizona Deals page with this week's promotion and add a banner to the homepage.",
      result1: "✓ Deal page updated, homepage banner live before the promotion window closes.",
      prompt2: "Add a new Delivery Locations page section for our Massachusetts expansion with local pickup info.",
      result2: "✓ Section built, geo-specific content added, published same day.",
      prompt3: "The 'Schedule a Demo' CTA is underperforming — test a version that leads with 'Free Health Consultation' instead.",
      result3: "✓ CTA swapped in minutes, results tracked, revert or keep — your call."
    }
  },
  {
    id: "gray-matter-nyc",
    company: "Gray Matter NYC",
    logo: "/assets/reports/gray-matter-nyc/logo.jpeg",
    logoNeedsBg: false,
    url: "https://graymatternyc.com",
    industry: "Digital Marketing Agency (Fashion & Beauty)",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Digital Marketing Services page to lead with our new paid social offering.",
      result1: "✓ Services page updated, new section live, no Wix editor workaround needed.",
      prompt2: "Add three new fashion clients to the Clients page and update the 'LET'S CONNECT' CTA with a case study teaser.",
      result2: "✓ Client logos added, CTA updated, published before your next pitch meeting.",
      prompt3: "Test a version of the homepage that leads with 'Interested in how we can accelerate your brand?' as the primary headline.",
      result3: "✓ Variant live in minutes — no dev, no approval chain, just test it."
    }
  },
  {
    id: "greenlane",
    company: "Greenlane",
    logo: "/assets/reports/greenlane/logo.jpeg",
    logoNeedsBg: false,
    url: "https://greenlane.ai",
    industry: "Fuel Tech / Trucking Fintech",
    pages: 6,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the homepage to highlight our new 3,000+ on-route stops network and push the Fleet page CTA above the fold.",
      result1: "✓ Homepage updated, CTA repositioned, live before the next ad campaign goes out.",
      prompt2: "Add a dedicated Owner Operator landing page with the '70¢ per gallon savings' stat as the hero and a direct app download link.",
      result2: "✓ Page built, stats in place, App Store and Google Play links connected — same day.",
      prompt3: "Test 'No fine print, no bull***' as the primary headline instead of 'Drive smarter, save harder' and see which converts better.",
      result3: "✓ Variant live in minutes — swap, track, decide, no dev ticket required."
    }
  },
  {
    id: "hanhan-commercial-group",
    company: "Hanhan Commercial Group",
    logo: "/assets/reports/hanhan-commercial-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://hanhancre.com",
    industry: "Commercial Real Estate",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to say 'Silicon Valley's trusted commercial real estate partner' and add our two new office locations.",
      result1: "✓ Done in minutes, no designer call needed.",
      prompt2: "Add a new page for our Showcase Events with photos and a contact form.",
      result2: "✓ Page built, styled to match, live same day.",
      prompt3: "Change the 'Send' button on the contact form to 'Start a Conversation' and make it more prominent.",
      result3: "✓ Updated instantly, no developer required."
    }
  },
  {
    id: "avg-partners",
    company: "AVG Partners",
    logo: "/assets/reports/avg-partners/logo.webp",
    logoNeedsBg: false,
    url: "https://avgpartners.com",
    industry: "Commercial Real Estate Investment",
    pages: 5,
    hostingCost: 23,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero — '1997' as the lead feels dated, I want to lead with the portfolio size and what we look for in a deal instead.",
      result1: "✓ New hero live in minutes. No Squarespace editor, no layout drift, no waiting on anyone.",
      prompt2: "Add a new property to Portfolio & Tenants — we just closed on a retail center in Dallas and I want it up before we start marketing it.",
      result2: "✓ New property page live same day, consistent with the existing site design.",
      prompt3: "The Investment Criteria page hasn't been touched in years — I want to update the deal size range and add a note about the markets we're targeting now.",
      result3: "✓ Updated and live before your next investor call. No brief, no approval loop."
    }
  },
  {
    id: "heartland-international",
    company: "Heartland International",
    logo: "/assets/reports/heartland-international/logo.jpeg",
    logoNeedsBg: false,
    url: "https://heartlandinternational.com",
    industry: "Independent Manufacturer's Representative",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Agriculture section with our new seasonal product availability and a direct contact form.",
      result1: "✓ Done in minutes, no designer call needed.",
      prompt2: "Add a testimonials section to the homepage highlighting our 50 years with Conklin.",
      result2: "✓ Section built, styled to match, live same day.",
      prompt3: "Replace the four 'More Info' buttons with specific CTAs like 'Get Roofing Quote' and 'Request Farm Visit'.",
      result3: "✓ Updated instantly, conversion-tested without any dev help."
    }
  },
  {
    id: "heritage-restaurant-brands",
    company: "Heritage Restaurant Brands",
    logo: "/assets/reports/heritage-restaurant-brands/logo.jpeg",
    logoNeedsBg: false,
    url: "https://heritagerb.com",
    industry: "Restaurant Franchising & Brand Management",
    pages: 5,
    waitDays: 3,
    aiExamples: {
      prompt1: "We are committed to improving the sales and profitability of our restaurants — build a Franchising landing page around that promise with an inquiry form.",
      result1: "✓ Page live same day, form connected, ready to capture leads.",
      prompt2: "Add the customer testimonial about doing things the right way to the homepage above the fold.",
      result2: "✓ Done in minutes, no redesign required.",
      prompt3: "Update 'Come See What We're All About' to a stronger CTA for franchise prospects — something like 'Explore Franchise Opportunities'.",
      result3: "✓ Updated and tested without touching a developer."
    }
  },
  {
    id: "heritage-restaurant-brands-reem",
    company: "Heritage Restaurant Brands",
    logo: "/assets/reports/heritage-restaurant-brands-reem/logo.jpeg",
    logoNeedsBg: false,
    url: "https://heritagerb.com",
    industry: "Restaurant Franchising & Brand Management",
    pages: 5,
    waitDays: 3,
    aiExamples: {
      prompt1: "Build a franchise inquiry landing page with our investment requirements, brand story, and a form to request a franchise information packet.",
      result1: "✓ Page live same day, form connected, leads captured immediately.",
      prompt2: "Add the customer testimonial — 'The Heritage Team has done so much over the past year to improve our restaurants and, more importantly, have done things the right way' — to the Franchising page.",
      result2: "✓ Done in minutes, social proof where it converts.",
      prompt3: "Change 'Come See What We're All About' to 'Start Your Franchise Conversation' with a direct link to the inquiry form.",
      result3: "✓ Updated and live, no developer, no wait."
    }
  },
  {
    id: "hg-media-group",
    company: "HG Media Group",
    logo: "/assets/reports/hg-media-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://hgmedia.us",
    industry: "Digital Marketing & Influencer Agency",
    pages: 4,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "We just signed a new talent roster — add them to the Talent page with bios and social links.",
      result1: "✓ Page updated same day, no designer briefing required.",
      prompt2: "Add a case study section under Marketing Services showing campaign results with before/after metrics.",
      result2: "✓ Section built and live, structured to convert new brand inquiries.",
      prompt3: "Change 'MEET THE FOUNDERS' to 'See How We Scale Brands' and link it to a new capabilities deck page.",
      result3: "✓ CTA updated instantly, new page live before end of day."
    }
  },
  {
    id: "interstella",
    company: "Interstella",
    logo: "/assets/reports/interstella/logo.jpeg",
    logoNeedsBg: false,
    url: "https://interstella.us",
    industry: "Healthcare Data & AI Infrastructure",
    pages: 7,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero headline to 'Trusted Healthcare Data, Ready for Action — Not Just Exchange' — make it the first thing anyone sees.",
      result1: "✓ Done in under 10 minutes. No ticket, no designer, no waiting.",
      prompt2: "Add a new section under Value Pillars called 'Compliance-Ready by Default' with two bullet points.",
      result2: "✓ Section added, styled to match, live before your next call.",
      prompt3: "We want to test a 'Schedule a Demo' CTA instead of 'Contact Us' — just on the homepage.",
      result3: "✓ Swap it, watch the numbers, revert or keep it — entirely on your timeline."
    }
  },
  {
    id: "istudios-marketing",
    company: "iStudios Marketing Agency",
    logo: "/assets/reports/istudios-marketing/logo.jpeg",
    logoNeedsBg: false,
    url: "https://istudiosmedia.com",
    industry: "Video Production & Digital Marketing",
    pages: 7,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with 'Stories that Inspire, Media that Moves' — I want it bigger and above the fold on mobile.",
      result1: "✓ Done in minutes. No developer. No plugin conflicts.",
      prompt2: "Add a new service section for AI-Powered CRM & Automation — same card layout as Broadcast-Grade Video Production.",
      result2: "✓ New section built to match, live same day.",
      prompt3: "Change 'Book a Free Consultation' to 'Get Your Growth Plan' and test it for two weeks.",
      result3: "✓ Swap it now, revert it later — no dev ticket required."
    }
  },
  {
    id: "jag-karya-logistik",
    company: "JAG Karya Logistik.ID",
    logo: "/assets/reports/jag-karya-logistik/logo.jpeg",
    logoNeedsBg: false,
    url: "https://jaglogistics.com",
    industry: "Global Freight & Logistics",
    pages: 8,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "We want to add Healthcare as a new industry vertical under our specialized sectors — same format as Retail & Fashion.",
      result1: "✓ New section live before the end of the day. No dev involved.",
      prompt2: "The 'REQUEST A QUOTE' button needs to go to a new form that asks for shipment type upfront — air, sea, or truck.",
      result2: "✓ Form updated, button relinked, tested across all pages in one session.",
      prompt3: "Add a Global Network map callout to the homepage — we cover six continents and it's buried right now.",
      result3: "✓ Pulled forward, styled to match, done."
    }
  },
  {
    id: "jarry-media",
    company: "Jarry Media",
    logo: "/assets/reports/jarry-media/logo.jpeg",
    logoNeedsBg: false,
    url: "https://jarrymedia.com",
    industry: "Influencer Marketing & Content Creation",
    pages: 3,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add PGA Tour Superstore to the Sponsored Collaborations section — here's the video link.",
      result1: "✓ Added, linked, and live before the brand even checks your site.",
      prompt2: "I want a separate page just for @frontporchdad with its own media kit download.",
      result2: "✓ New page built, linked from Brand Portfolio, PDF upload included.",
      prompt3: "Change 'CONTACT ME' to 'Get My Media Kit' — I want to test if that converts better for brand inquiries.",
      result3: "✓ Updated in minutes. Revert anytime."
    }
  },
  {
    id: "jdk-comms",
    company: "JDK Comms",
    logo: "/assets/reports/jdk-comms/logo.jpeg",
    logoNeedsBg: false,
    url: "https://jdkcomms.com",
    industry: "Public Relations & Marketing Agency",
    pages: 4,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new partner logo to the Partners section — we just signed someone and want them visible today.",
      result1: "✓ Logo uploaded, section updated, live within the hour.",
      prompt2: "We want to add Athlete Relations as a callout service on the homepage — it's buried in the Services page right now.",
      result2: "✓ Surface it on the homepage, keep it on the Services page too. Done in one session.",
      prompt3: "Test 'LET'S TALK' instead of 'LET'S WORK TOGETHER' as the main CTA — just want to see which one gets more clicks.",
      result3: "✓ Swap it, track it, decide. No approval chain required."
    }
  },
  {
    id: "jerico-development",
    company: "Jerico Development",
    logo: "/assets/reports/jerico-development/logo.jpeg",
    logoNeedsBg: false,
    url: "https://jerico-development.com",
    industry: "Real Estate Development & Commercial Leasing",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new listing to the 'Leasing Now' section — 2,400 sq ft ground floor retail, available immediately.",
      result1: "✓ Listed, formatted, live before the tenant tour.",
      prompt2: "Update the 'Discover San Pedro' CTA to link to the new West Harbor project page we want to build.",
      result2: "✓ New page created, CTA linked, existing design matched exactly.",
      prompt3: "We want to add a section about our Denver LoDo properties — same card format as Featured Projects.",
      result3: "✓ Section built, copy dropped in, published same session."
    }
  },
  {
    id: "keystone-creating",
    company: "Keystone Creating Ltd.",
    logo: "/assets/reports/keystone-creating/logo.jpeg",
    logoNeedsBg: false,
    url: "https://keystone-tw.com",
    industry: "Textile & Materials Supply (Athletic Footwear & Accessories)",
    pages: 5,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero headline to reflect our new GRS-certified recycled line.",
      result1: "✓ Done in minutes — no designer call, no ticket, no waiting.",
      prompt2: "Add a CTA button to the Our Products section so brand buyers can request samples directly.",
      result2: "✓ Button added, linked, tested — live the same day you thought of it.",
      prompt3: "We just landed a new client in the lifestyle category — add them to Our Clients.",
      result3: "✓ Logo uploaded, row updated, page reflects it before your next meeting."
    }
  },
  {
    id: "kiwi-biosciences",
    company: "Kiwi Biosciences (FODZYME)",
    logo: "/assets/reports/kiwi-biosciences/logo.jpeg",
    logoNeedsBg: false,
    url: "https://kiwibiosciences.com",
    industry: "Biotech / Consumer Health (Digestive Enzyme Supplements)",
    pages: 2,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'Making food painless for at least 10% of the planet' to lead with our new clinical study results.",
      result1: "✓ Copy updated, live in minutes — no Webflow editor access required, no designer needed.",
      prompt2: "Add a UK-specific landing page for FODZYME since we now have a UK office.",
      result2: "✓ Page built with localized content and the right contact details — shipped the same day.",
      prompt3: "Change the 'Learn More' CTA to 'Try FODZYME Free' and test conversion.",
      result3: "✓ CTA swapped, tracking in place — revert or keep it based on what the data shows."
    }
  },
  {
    id: "looking-up-arts",
    company: "Looking Up Arts Foundation",
    logo: "/assets/reports/looking-up-arts/logo.jpeg",
    logoNeedsBg: false,
    url: "https://lookingup.art",
    industry: "Nonprofit / Public Art & Community Installations",
    pages: 3,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "We just launched a new installation — add it to the Artworks section with photos and a description.",
      result1: "✓ Page updated, images in, live before the opening reception ends.",
      prompt2: "Change 'BE OUR PATRON' to tie into our spring fundraising campaign with a new message.",
      result2: "✓ CTA copy swapped, new language live — done while the campaign is still running.",
      prompt3: "Add a dedicated Volunteer sign-up page with a form and info about upcoming build dates.",
      result3: "✓ Page created, form connected, URL live — shipped the same day you need it."
    }
  },
  {
    id: "mango-math",
    company: "MANGO Math Group",
    logo: "/assets/reports/mango-math/logo.jpeg",
    logoNeedsBg: false,
    url: "https://mangomath.com",
    industry: "EdTech / Game-Based Math Education (PreK–8)",
    pages: 6,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'Explore Math And Find the adventure of a Lifetime' to lead with our back-to-school bundle offer.",
      result1: "✓ Hero copy live before the campaign email goes out — no designer in the loop.",
      prompt2: "The 'Get Free Shipping on All Kits' banner needs to come down — the promo ended yesterday.",
      result2: "✓ Removed in minutes, not days after the deal has already expired.",
      prompt3: "Add a new Grade Level Kit for high school — it needs its own page with specs, pricing, and a Shop Now button.",
      result3: "✓ Page built, product linked, live the same day the kit is ready to sell."
    }
  },
  {
    id: "mcda-ccg",
    company: "MCDA CCG, INC",
    logo: "/assets/reports/mcda-ccg/logo.jpeg",
    logoNeedsBg: false,
    url: "https://mcdaccginc.com",
    industry: "Business Consulting (Strategy, Operations, Finance, HR)",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero from 'Take Your Business to Higher Ground' to speak directly to our financial services clients.",
      result1: "✓ New headline live in minutes — targeted, specific, no redesign required.",
      prompt2: "Add a landing page for our HR consulting services with a lead form and a list of what's included.",
      result2: "✓ Page built, form connected, URL live — ready before your next outbound push.",
      prompt3: "The 'WHAT WE DO' CTA isn't pulling leads — test 'See How We Work' and track it.",
      result3: "✓ CTA updated, old version noted — swap back or keep it based on what converts."
    }
  },
  {
    id: "mega-global-edu",
    company: "Mega Global Education Group",
    logo: "/assets/reports/mega-global-edu/logo.jpeg",
    logoNeedsBg: false,
    url: "https://megaglobaledu.com",
    industry: "International Education Consulting / Study Abroad",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new featured program page for our fall art study abroad cohort.",
      result1: "✓ New page live same day, in both English and Chinese, matching your current design.",
      prompt2: "Update the hero headline to highlight our graduate school acceptance rate.",
      result2: "✓ New hero copy live in minutes, no designer involved.",
      prompt3: "Add a 'Book a Free Consultation' CTA to every service page.",
      result3: "✓ Done across all pages in one session, tracked from day one."
    }
  },
  {
    id: "nanosilicon",
    company: "NanoSILICON, Inc.",
    logo: "/assets/reports/nanosilicon/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nanosiliconinc.com",
    industry: "Semiconductor / Silicon Wafer Manufacturing",
    pages: 6,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a news post about our latest reclaim wafer quality benchmarks.",
      result1: "✓ News item live in minutes, properly formatted and indexed.",
      prompt2: "Update the hero subtext to highlight our greener reclaiming process.",
      result2: "✓ 'Reclaiming Wafers for a Greener Tomorrow' front and center, same day.",
      prompt3: "Add a product spec page for thermal oxide wafers with a quote request form.",
      result3: "✓ New page with form live within the day, no developer needed."
    }
  },
  {
    id: "nozomi-medalliance",
    company: "Nozomi MedAlliance",
    logo: "/assets/reports/nozomi-medalliance/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nozomimed.com",
    industry: "MedTech / Medical Device Market Entry (Japan)",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new portfolio company to the Portfolio page with their overview and logo.",
      result1: "✓ Portfolio updated and live within the hour, no designer call needed.",
      prompt2: "Update the hero to feature our Japan Incubation program for the upcoming conference.",
      result2: "✓ Hero updated same day, ready before the event.",
      prompt3: "Add a bilingual (English/Japanese) landing page for our External Innovation service.",
      result3: "✓ New page live in both languages, same day, consistent with your existing design."
    }
  },
  {
    id: "omg-entertainment",
    company: "O.M.G Entertainment",
    logo: "/assets/reports/omg-entertainment/logo.jpeg",
    logoNeedsBg: false,
    url: "https://omgentertain.com",
    industry: "Multicultural Marketing & Events",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a recap page for last weekend's event with photos and brand logos.",
      result1: "✓ Event recap page live same day, bilingual if needed.",
      prompt2: "Update the hero to 'Building Brands That Resonate Across Mainstream and Multicultural Markets' with our latest brand impact numbers.",
      result2: "✓ Hero updated in minutes, no designer involved.",
      prompt3: "Create a dedicated landing page for our 5-Step Market Entry Framework.",
      result3: "✓ New page built and published same day, ready to share with prospects."
    }
  },
  {
    id: "omg-entertainment-yueying",
    company: "O.M.G Entertainment",
    logo: "/assets/reports/omg-entertainment-yueying/logo.jpeg",
    logoNeedsBg: false,
    url: "https://omgentertain.com",
    industry: "Multicultural Marketing & Events",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new brand partner to the OMG Group Ecosystem section with their logo and a one-liner.",
      result1: "✓ Partner added and live within the hour, no designer needed.",
      prompt2: "Build a landing page for an upcoming multicultural marketing activation we're pitching to a new client.",
      result2: "✓ New page built same day, ready to share as a pitch asset.",
      prompt3: "Update the Contact Us page with a new inquiry form for partnership inquiries specifically.",
      result3: "✓ Form updated and live in minutes, responses going straight to your inbox."
    }
  },
  {
    id: "oodles-energy",
    company: "Oodles Energy",
    logo: "/assets/reports/oodles-energy/logo.jpeg",
    logoNeedsBg: false,
    url: "https://oodlesenergy.com",
    industry: "EV Charging / Clean Energy Infrastructure",
    pages: 7,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with the stat — '61% of EV drivers pay more for hotels with fast charging'.",
      result1: "✓ Hero updated and live before your next property owner pitch, no design ticket.",
      prompt2: "Add a page for multi-family properties — different value prop than hotels, same equity partnership model.",
      result2: "✓ New page live same day, written to the right audience, indexed by Google within the week.",
      prompt3: "Change 'Schedule a Consultation' to 'See If Your Property Qualifies' and link to the intake form.",
      result3: "✓ CTA live in minutes — lower friction, more qualified leads through the door."
    }
  },
  {
    id: "pacific-modular-alliance",
    company: "Pacific Modular Alliance",
    logo: "/assets/reports/pacific-modular-alliance/logo.jpeg",
    logoNeedsBg: false,
    url: "https://pacific-modular.com",
    industry: "Commercial Furniture & Modular Installation",
    pages: 7,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Uncompromising Service. Superior Installation.' to lead with multi-regional coverage.",
      result1: "✓ Hero updated in minutes — the right message lands before a prospect clicks away.",
      prompt2: "Add a new member company to the Our Members section with their logo and service region.",
      result2: "✓ Member profile live same day, no design request, no back-and-forth.",
      prompt3: "Add a page for audiovisual integration — separate from the main services page, with a 'Request a Quote' form.",
      result3: "✓ New capability page live and indexed, capturing leads you're currently missing."
    }
  },
  {
    id: "paz-analytics",
    company: "PAZ Analytics",
    logo: "/assets/reports/paz-analytics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://pazanalytics.com",
    industry: "Digital Analytics & Marketing Strategy Consulting",
    pages: 6,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to 'Turning clicks into customers — for outdoor, cycling, and sports brands'.",
      result1: "✓ Niche positioning live in minutes, speaks directly to your best-fit clients.",
      prompt2: "Add a case study page for Woom showing the analytics setup and results.",
      result2: "✓ New page live same day — social proof that converts better than a services list.",
      prompt3: "Change 'Get started' to 'See how we do it' and link to the automated reporting section.",
      result3: "✓ Lower-friction entry point tested and live without touching a single line of Webflow code."
    }
  },
  {
    id: "profit-xl",
    company: "Profit XL",
    logo: "/assets/reports/profit-xl/logo.jpeg",
    logoNeedsBg: false,
    url: "https://profit-xl.com",
    industry: "Pay-Per-Call & Lead Generation / Digital Marketing",
    pages: 4,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to lead with '17 years scaling customer acquisition for Fortune 500 partners'.",
      result1: "✓ Credibility front and center, live in minutes, no designer needed.",
      prompt2: "Add a dedicated page for our Medicare vertical — separate pitch, separate compliance notes, separate lead form.",
      result2: "✓ Vertical page live same day, indexed, capturing leads that the homepage can't close.",
      prompt3: "Add a media buyers section to the nav with a direct application form.",
      result3: "✓ Recruitment funnel live and working before your next campaign kicks off."
    }
  },
  {
    id: "redjet-entertainment",
    company: "RedJet Entertainment",
    logo: "/assets/reports/redjet-entertainment/logo.jpeg",
    logoNeedsBg: false,
    url: "https://redjetentertainment.com",
    industry: "Luxury Corporate Events & Experiential Marketing",
    pages: 13,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a private celebrity chef dinner page — full description, photo gallery, and a 'Book Your Next Event Here' button.",
      result1: "✓ New experience page live same day, capturing leads for your highest-margin offering.",
      prompt2: "Update the hero to 'MAKE YOUR CLIENTS SAY WOW — Tailgate events, luxury suites, and private dinners for enterprise teams'.",
      result2: "✓ Hero sharpened and live before your next outbound push, no design ticket required.",
      prompt3: "Add BNY Mellon and Fortinet to the client logo section after their events wrapped.",
      result3: "✓ Social proof updated in minutes — while the relationship is still warm."
    }
  },
  {
    id: "rome-real-estate",
    company: "ROME Real Estate Group",
    logo: "/assets/reports/rome-real-estate/logo.jpeg",
    logoNeedsBg: false,
    url: "https://romecre.com",
    industry: "Commercial Real Estate",
    pages: 13,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the hero to say 'Building Relationships. Adding Value. Achieving Results.' — make it bolder and center it.",
      result1: "✓ Hero text updated and styled in minutes, no design ticket required.",
      prompt2: "Add a new listing to Our Current Listings with photos, address, and a contact form.",
      result2: "✓ New listing page live same day, properly linked from the listings section.",
      prompt3: "Change the 'Meet The Team' button to 'View Our Team' and move it below the hero.",
      result3: "✓ CTA text and position updated instantly — test it, change it back, try something else."
    }
  },
  {
    id: "rpn-ventures",
    company: "RPN Ventures LLC",
    logo: "/assets/reports/rpn-ventures/logo.jpeg",
    logoNeedsBg: false,
    url: "https://rpnventures.com",
    industry: "Business Consulting / Venture Advisory",
    pages: 6,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Rewrite the hero to focus on our Core Differentiators — pull the key phrase up to the top.",
      result1: "✓ Hero updated in minutes, no dev needed, live immediately.",
      prompt2: "Add a new section under What We Do for our latest service offering with a Contact Us CTA.",
      result2: "✓ New section built and linked same day, consistent with the existing design.",
      prompt3: "Test swapping 'See Our Services' for 'See How We Work' as the primary button.",
      result3: "✓ CTA swapped, tested, and reverted or kept — your call, whenever you want."
    }
  },
  {
    id: "saint-brigid-academy",
    company: "Saint Brigid Academy",
    logo: "/assets/reports/saint-brigid-academy/logo.jpeg",
    logoNeedsBg: false,
    url: "https://saintbrigidsf.org",
    industry: "Private Catholic Education",
    pages: 14,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Schedule Tour button to open a new intake form for the spring open house.",
      result1: "✓ Button linked to new form, live in minutes, no platform expertise needed.",
      prompt2: "Add a new section under Our Learning Approach with a quote from a current family.",
      result2: "✓ Testimonial section added same day, formatted to match the existing design.",
      prompt3: "Refresh the hero to highlight our mission statement more prominently above the fold.",
      result3: "✓ Hero text updated and repositioned immediately — no brief, no back-and-forth."
    }
  },
  {
    id: "sellrbox",
    company: "Sellrbox",
    logo: "/assets/reports/sellrbox/logo.jpeg",
    logoNeedsBg: false,
    url: "https://sellrbox.com",
    industry: "Amazon Advertising / AI PPC Software",
    pages: 6,
    hostingCost: 23,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero headline to 'The Most Advanced AI Advertising Platform for Amazon Sellers' and update the subhead to match our Q2 messaging.",
      result1: "✓ Hero updated live in minutes — no Squarespace editor, no waiting on design.",
      prompt2: "Create a dedicated landing page for our 'Start Your 30-Day Free Trial' campaign with a single CTA and no nav.",
      result2: "✓ Campaign page built and live same day, optimized for conversion.",
      prompt3: "Test replacing 'Unparalleled Automation' section header with 'Set It Once. Let Astra Run It.'",
      result3: "✓ Section copy swapped instantly — run the test, check the data, update again."
    }
  },
  {
    id: "ab-associates",
    company: "AB & Associates",
    logo: "/assets/reports/ab-associates/logo.jpeg",
    logoNeedsBg: false,
    url: "https://abassociatescorp.com",
    industry: "Business Consulting & Advisory",
    pages: 5,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the homepage hero to lead with our small business advisory focus instead of the generic tagline.",
      result1: "✓ Hero copy updated and live in under 10 minutes — no designer, no queue.",
      prompt2: "Add a new Services page section for our financial planning offering with a 'Schedule a Consultation' CTA.",
      result2: "✓ New section built and published same day — formatted to match the rest of the site.",
      prompt3: "Change the main CTA button from 'Contact Us' to 'Book a Free Strategy Call' across the whole site.",
      result3: "✓ CTA updated site-wide in minutes — consistent across every page."
    }
  },
  {
    id: "almaden-ventures",
    company: "Almaden Ventures",
    logo: "/assets/reports/almaden-ventures/logo.jpeg",
    logoNeedsBg: false,
    url: "https://almaden.vc",
    industry: "Venture Capital / Early-Stage Technology Investing",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our most recent portfolio company to the Portfolio page with their logo, description, and investment stage.",
      result1: "✓ New portfolio entry live in minutes — no Wix editor, no designer approval.",
      prompt2: "Update the team page to add a new partner and remove a departed member.",
      result2: "✓ Team page updated same day — accurate roster ready for your next LP meeting.",
      prompt3: "Change the hero from generic VC language to something that leads with our 30-year track record.",
      result3: "✓ Hero updated in under 10 minutes — sharper positioning for founders and co-investors."
    }
  },
  {
    id: "aspatore-ventures",
    company: "Aspatore Ventures",
    logo: "/assets/reports/aspatore-ventures/logo.jpeg",
    logoNeedsBg: false,
    url: "https://aspatore.ventures",
    industry: "Venture Capital / B2B SaaS & Technology",
    pages: 6,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new portfolio company — B2B SaaS, Series A, fintech vertical — to the Portfolio page.",
      result1: "✓ New company entry live same day — logo, description, and stage formatted consistently.",
      prompt2: "Update the thesis section to reflect our current focus on AI-native B2B tools.",
      result2: "✓ Thesis page refreshed in under 10 minutes — no Webflow editor, no dev required.",
      prompt3: "Add a 'Pitch Us' page with a short intake form — stage, sector, brief description.",
      result3: "✓ New page built and live — form submissions go straight to your inbox."
    }
  },
  {
    id: "atlas-gray",
    company: "Atlas Gray",
    logo: "/assets/reports/atlas-gray/logo.jpeg",
    logoNeedsBg: false,
    url: "https://atlasgray.com",
    industry: "Management Consulting / Business Strategy",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the About page to reflect our expanded team and new office location.",
      result1: "✓ About page updated live in minutes — accurate for your next client pitch.",
      prompt2: "Add a new service offering under Strategy Consulting with a case study callout.",
      result2: "✓ New service section built same day — formatted to match existing services layout.",
      prompt3: "Change the hero headline to lead with outcomes, not process — something like 'We Turn Strategy Into Growth'.",
      result3: "✓ Hero updated in under 10 minutes — sharper positioning, no designer required."
    }
  },
  {
    id: "become-viral",
    company: "Become Viral",
    logo: "/assets/reports/become-viral/logo.jpeg",
    logoNeedsBg: false,
    url: "https://becomeviral.com",
    industry: "Social Media Marketing & Growth Agency",
    pages: 8,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new case study to the Results page — client name, platform, follower growth, and timeframe.",
      result1: "✓ Case study live same day — proof point ready before your next sales call.",
      prompt2: "Update the Services page to add our new LinkedIn growth package with pricing and CTA.",
      result2: "✓ New service section built and live in under 10 minutes — no Webflow editor needed.",
      prompt3: "Change the hero CTA from 'Get Started' to 'See How We'd Grow Your Account' and link to a new audit page.",
      result3: "✓ Hero CTA updated and audit page scaffolded same day — stronger conversion path."
    }
  },
  {
    id: "blake-rian-consulting",
    company: "Blake Rian Consulting",
    logo: "/assets/reports/blake-rian-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://blakerian.com",
    industry: "HR & Organizational Development Consulting",
    pages: 8,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Services page to add our new leadership coaching program with a 'Book a Discovery Call' CTA.",
      result1: "✓ New program section live in minutes — consistent with the rest of the page, no designer queue.",
      prompt2: "Add a client testimonial to the homepage from our most recent engagement.",
      result2: "✓ Testimonial added and live same day — social proof visible before the next prospect visits.",
      prompt3: "Change the hero to lead with the problem we solve: 'High turnover costs companies millions. We fix that.'",
      result3: "✓ Hero updated in under 10 minutes — sharper hook for HR decision-makers."
    }
  },
  {
    id: "bridgesource-consulting",
    company: "Bridgesource Consulting",
    logo: "/assets/reports/bridgesource-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://bridgesourceconsulting.com",
    industry: "Technology Staffing & IT Consulting",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new active job opening for a Senior Cloud Engineer — role, requirements, and an 'Apply Now' link.",
      result1: "✓ Job posting live in minutes — candidates can apply immediately, no dev needed.",
      prompt2: "Update the hero to lead with our specialization in cloud and DevOps talent instead of generic staffing language.",
      result2: "✓ Hero updated same day — clearer positioning for the tech clients you're targeting.",
      prompt3: "Add a 'Client Success' section with two or three recent placements and outcomes.",
      result3: "✓ Success section built and live in under 10 minutes — proof points ready for your next pitch."
    }
  },
  {
    id: "broadscope-consulting",
    company: "Broadscope Consulting",
    logo: "/assets/reports/broadscope-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://broadscopeconsulting.com",
    industry: "Management Consulting / Operations & Strategy",
    pages: 6,
    hostingCost: 23,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Services page to add our new operational efficiency assessment offering with a 'Request a Scope' CTA.",
      result1: "✓ New service live in minutes — formatted consistently, ready for the next prospect.",
      prompt2: "Add a case study callout to the homepage — industry, challenge, and result.",
      result2: "✓ Case study section built same day — social proof on the first page prospects see.",
      prompt3: "Change the hero headline to something that leads with ROI — 'We Find the Margin You're Leaving on the Table'.",
      result3: "✓ Hero updated in under 10 minutes — sharper positioning for operations buyers."
    }
  },
  {
    id: "carlisle-energy",
    company: "Carlisle Energy Solutions",
    logo: "/assets/reports/carlisle-energy/logo.jpeg",
    logoNeedsBg: false,
    url: "https://carlisleenergysolutions.com",
    industry: "Energy Consulting / Renewable & Efficiency",
    pages: 9,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new project to the Portfolio page — client sector, system size, and annual savings outcome.",
      result1: "✓ Project entry live in minutes — proof point ready for your next commercial prospect.",
      prompt2: "Update the Services page to reflect our new battery storage consulting offering.",
      result2: "✓ New service section added same day — no WordPress editor, no developer required.",
      prompt3: "Change the hero CTA from 'Learn More' to 'Get Your Energy Audit' and link to a new intake form.",
      result3: "✓ CTA updated and form page live in under 10 minutes — better conversion path from first visit."
    }
  },
  {
    id: "cartegrity",
    company: "Cartegrity",
    logo: "/assets/reports/cartegrity/logo.jpeg",
    logoNeedsBg: false,
    url: "https://cartegrity.com",
    industry: "Supply Chain & Procurement Consulting",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new service offering for supplier risk assessment with a 'Schedule a Review' CTA.",
      result1: "✓ New service section live same day — formatted consistently with existing offerings.",
      prompt2: "Update the hero to lead with cost reduction outcomes instead of process language.",
      result2: "✓ Hero updated in under 10 minutes — sharper positioning for procurement directors.",
      prompt3: "Add a client win to the homepage — industry, challenge, and the dollar savings we delivered.",
      result3: "✓ Win callout built and live in minutes — proof point visible on first visit."
    }
  },
  {
    id: "ccix-global",
    company: "CCIX Global",
    logo: "/assets/reports/ccix-global/logo.jpeg",
    logoNeedsBg: false,
    url: "https://ccixglobal.com",
    industry: "International Business Consulting / Market Entry",
    pages: 4,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new market entry case study for a recent LATAM or APAC engagement — sector, challenge, outcome.",
      result1: "✓ Case study live same day — proof point ready for the next international prospect.",
      prompt2: "Update the Services page to add our new market intelligence subscription offering.",
      result2: "✓ New service section built and live in under 10 minutes — no dev, no designer.",
      prompt3: "Change the hero to lead with speed: 'Enter New Markets in 90 Days — Not 18 Months'.",
      result3: "✓ Hero updated in minutes — stronger hook for executives evaluating expansion timelines."
    }
  },
  {
    id: "connectivity-llc",
    company: "Connectivity LLC",
    logo: "/assets/reports/connectivity-llc/logo.jpeg",
    logoNeedsBg: false,
    url: "https://connectivityllc.com",
    industry: "IT Infrastructure & Networking Consulting",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new case study for a recent enterprise network deployment — client type, scope, and outcome.",
      result1: "✓ Case study live in minutes — proof point ready before your next sales meeting.",
      prompt2: "Update the Services page to add our new managed SD-WAN offering with a 'Request a Quote' CTA.",
      result2: "✓ New service section built same day — formatted consistently with existing services.",
      prompt3: "Change the hero headline to lead with uptime and reliability: 'Networks That Don't Go Down'.",
      result3: "✓ Hero updated in under 10 minutes — sharper hook for IT directors and CIOs."
    }
  },
  {
    id: "dak-consulting",
    company: "DAK Consulting Group",
    logo: "/assets/reports/dak-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://dakconsultinggroup.com",
    industry: "Government & Public Sector Consulting",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our most recent contract award to the homepage — agency, scope, and contract value.",
      result1: "✓ Contract award callout live in minutes — credibility signal ready for the next procurement officer.",
      prompt2: "Update the Capabilities page to add our new cybersecurity compliance service line.",
      result2: "✓ New capability section built same day — formatted consistently with existing entries.",
      prompt3: "Add a past performance section to the About page with three client agency callouts.",
      result3: "✓ Past performance section live in under 10 minutes — ready for your next proposal review."
    }
  },
  {
    id: "dandelion-global",
    company: "Dandelion Global LLC",
    logo: "/assets/reports/dandelion-global/logo.jpeg",
    logoNeedsBg: false,
    url: "https://dandelionglobal.com",
    industry: "International Trade & Business Development Consulting",
    pages: 5,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new market entry success story for a recent cross-border deal we facilitated.",
      result1: "✓ Case study live same day — proof point ready for the next international business prospect.",
      prompt2: "Update the Services page to add our new export compliance advisory offering.",
      result2: "✓ New service section built and live in under 10 minutes — no dev, no designer.",
      prompt3: "Change the hero to lead with outcomes: 'We Help Companies Grow Across Borders — Without the Guesswork'.",
      result3: "✓ Hero updated in minutes — sharper positioning for executives evaluating global expansion."
    }
  },
  {
    id: "datum-consulting",
    company: "Datum Consulting",
    logo: "/assets/reports/datum-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://datumconsultinggroup.com",
    industry: "Data Analytics & Business Intelligence Consulting",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client outcome to the homepage — industry, data challenge, and measurable result.",
      result1: "✓ Outcome callout live in minutes — proof point visible on first visit.",
      prompt2: "Update the Services page to add our new real-time dashboard offering for operations teams.",
      result2: "✓ New service section built same day — formatted to match existing entries.",
      prompt3: "Change the hero from 'Data-Driven Decisions' to something that leads with what changes for the client.",
      result3: "✓ Hero updated in under 10 minutes — sharper hook for operations and finance buyers."
    }
  },
  {
    id: "deal-synergy-solutions",
    company: "Deal Synergy Solutions LLC",
    logo: "/assets/reports/deal-synergy-solutions/logo.jpeg",
    logoNeedsBg: false,
    url: "https://dealsynergysolutions.com",
    industry: "M&A Advisory / Business Brokerage",
    pages: 19,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new closed transaction to the Deals page — industry, deal size range, and a one-line outcome.",
      result1: "✓ Transaction entry live in minutes — track record updated before your next buyer conversation.",
      prompt2: "Update the hero to lead with our sell-side success rate or average time to close.",
      result2: "✓ Hero updated same day — stronger social proof for owners evaluating their exit options.",
      prompt3: "Add a 'Sell Your Business' landing page with a short intake form — revenue range, industry, timeline.",
      result3: "✓ Landing page built and live in under 10 minutes — qualified sellers can start the conversation immediately."
    }
  },
  {
    id: "distill-works",
    company: "Distill.Works",
    logo: "/assets/reports/distill-works/logo.jpeg",
    logoNeedsBg: false,
    url: "https://distill.works",
    industry: "Product Strategy & Design Consulting",
    pages: 4,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new case study — product type, core challenge, and the outcome after we worked together.",
      result1: "✓ Case study live same day — proof point ready for the next product team evaluating partners.",
      prompt2: "Update the hero to lead with the outcome clients get, not the process we use.",
      result2: "✓ Hero updated in under 10 minutes — sharper positioning for CPOs and founders.",
      prompt3: "Add a 'Start a Project' page with a short brief form — product type, stage, and key challenge.",
      result3: "✓ New page built and live in minutes — better intake path from first visit to first call."
    }
  },
  {
    id: "doolittle-consulting",
    company: "Doolittle Behavioral Health Consulting",
    logo: "/assets/reports/doolittle-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://doolittleconsulting.com",
    industry: "Behavioral Health Consulting / ABA & Clinical Services",
    pages: 11,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new service to the Services page for our school consultation program with a 'Contact Us' CTA.",
      result1: "✓ New service section live in minutes — formatted consistently, no designer required.",
      prompt2: "Update the homepage hero to lead with the families we help, not the certifications we hold.",
      result2: "✓ Hero updated same day — warmer, more direct messaging for parents seeking support.",
      prompt3: "Add a FAQ section to the Services page covering insurance, process, and what to expect.",
      result3: "✓ FAQ section built and live in under 10 minutes — reduces friction before the first call."
    }
  },
  {
    id: "electrigarden-ventures",
    company: "ElectriGarden Ventures",
    logo: "/assets/reports/electrigarden-ventures/logo.jpeg",
    logoNeedsBg: false,
    url: "https://electrigardenventures.com",
    industry: "CleanTech Venture Capital / AgriTech & Sustainability",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new portfolio company to the Portfolio page — sector, stage, and a one-line description.",
      result1: "✓ Portfolio entry live in minutes — track record updated before your next LP meeting.",
      prompt2: "Update the thesis section to reflect our current focus on indoor farming and grid-edge technologies.",
      result2: "✓ Thesis updated same day — accurate positioning for founders and co-investors.",
      prompt3: "Add a 'Pitch Us' page with a short intake form for founders — sector, stage, and one-line pitch.",
      result3: "✓ New page built and live in under 10 minutes — better funnel for inbound deal flow."
    }
  },
  {
    id: "emery-power",
    company: "Emery Power LLC",
    logo: "/assets/reports/emery-power/logo.jpeg",
    logoNeedsBg: false,
    url: "https://emerypowerllc.com",
    industry: "Electrical Contracting & Power Systems",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new completed project to the Projects page — building type, scope, and location.",
      result1: "✓ Project entry live in minutes — portfolio updated before your next bid submission.",
      prompt2: "Update the Services page to add EV charging infrastructure installation as a new offering.",
      result2: "✓ New service section built same day — formatted consistently with existing services.",
      prompt3: "Change the hero CTA from 'Contact Us' to 'Request a Project Quote' and link to a new form.",
      result3: "✓ CTA updated and quote form live in under 10 minutes — better conversion path from first visit."
    }
  },
  {
    id: "encore-erp",
    company: "Encore ERP",
    logo: "/assets/reports/encore-erp/logo.jpeg",
    logoNeedsBg: false,
    url: "https://encoreerp.com",
    industry: "ERP Consulting / Microsoft Dynamics & Business Central",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new industry vertical to the Services page — manufacturing or distribution — with a 'Request a Demo' CTA.",
      result1: "✓ New industry section live in minutes — ready for the next prospect in that vertical.",
      prompt2: "Update the homepage hero to lead with time-to-value: 'Business Central Implementations That Actually Finish on Time'.",
      result2: "✓ Hero updated same day — sharper hook for ERP buyers burned by past projects.",
      prompt3: "Add a client success section with two or three implementation outcomes — industry, challenge, result.",
      result3: "✓ Success section built and live in under 10 minutes — proof points on the first page prospects see."
    }
  },
  {
    id: "esgineering",
    company: "ESGineering",
    logo: "/assets/reports/esgineering/logo.jpeg",
    logoNeedsBg: false,
    url: "https://esgineering.com",
    industry: "ESG & Sustainability Consulting",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client engagement to the Case Studies page — industry, ESG challenge, and measurable outcome.",
      result1: "✓ Case study live same day — proof point ready for the next sustainability-focused prospect.",
      prompt2: "Update the Services page to add our new Scope 3 emissions mapping offering.",
      result2: "✓ New service section built and live in under 10 minutes — no designer, no queue.",
      prompt3: "Change the hero to lead with regulatory urgency: 'ESG Reporting Is No Longer Optional. We Make It Simple.'",
      result3: "✓ Hero updated in minutes — sharper positioning for CFOs and compliance leads."
    }
  },
  {
    id: "evergold-consulting",
    company: "Evergold Consulting",
    logo: "/assets/reports/evergold-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://evergoldconsulting.com",
    industry: "Financial Advisory & Business Consulting",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new service offering for fractional CFO engagements with a 'Schedule a Call' CTA.",
      result1: "✓ New service section live in minutes — formatted consistently with existing offerings.",
      prompt2: "Update the hero to lead with a specific outcome: 'We Help Founders Get Their Finances Exit-Ready'.",
      result2: "✓ Hero updated same day — sharper positioning for founders planning a raise or exit.",
      prompt3: "Add a testimonial section with two or three client quotes to the homepage.",
      result3: "✓ Testimonials section built and live in under 10 minutes — social proof visible on first visit."
    }
  },
  {
    id: "evia",
    company: "EVIA Services",
    logo: "/assets/reports/evia/logo.jpeg",
    logoNeedsBg: false,
    url: "https://eviaservices.com",
    industry: "Environmental & Infrastructure Consulting",
    pages: 8,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new completed project to the Projects page — site type, scope, and environmental outcome.",
      result1: "✓ Project entry live in minutes — portfolio updated before your next client proposal.",
      prompt2: "Update the Services page to add our new brownfield redevelopment consulting offering.",
      result2: "✓ New service section built same day — no WordPress editor, no developer required.",
      prompt3: "Change the hero CTA from 'Contact Us' to 'Request a Site Assessment' and link to an intake form.",
      result3: "✓ CTA updated and form live in under 10 minutes — stronger conversion path from first visit."
    }
  },
  {
    id: "falcon-senior-housing",
    company: "Falcon Senior Housing",
    logo: "/assets/reports/falcon-senior-housing/logo.jpeg",
    logoNeedsBg: false,
    url: "https://falconseniorhousing.com",
    industry: "Senior Housing Investment & Advisory",
    pages: 4,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new property to the Portfolio page — market, unit count, and investment thesis.",
      result1: "✓ Property entry live in minutes — track record updated before the next investor conversation.",
      prompt2: "Update the hero to lead with our acquisition focus: 'We Acquire and Operate Senior Housing Across the Sun Belt'.",
      result2: "✓ Hero updated same day — clearer positioning for operators, brokers, and capital partners.",
      prompt3: "Add a 'Partner With Us' page with a short intake form for operators and brokers.",
      result3: "✓ New page built and live in under 10 minutes — better inbound path for deal flow."
    }
  },
  {
    id: "farr-johnen",
    company: "Farr Johnen & Associates",
    logo: "/assets/reports/farr-johnen/logo.jpeg",
    logoNeedsBg: false,
    url: "https://farrjohnen.com",
    industry: "Executive Search & Leadership Consulting",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new successful placement to the homepage — industry, role level, and time to fill.",
      result1: "✓ Placement callout live in minutes — track record updated before your next client pitch.",
      prompt2: "Update the Services page to add our new interim executive placement offering.",
      result2: "✓ New service section built same day — formatted consistently with existing services.",
      prompt3: "Change the hero from generic search language to something that leads with your specialty sectors.",
      result3: "✓ Hero updated in under 10 minutes — sharper positioning for the industries you focus on."
    }
  },
  {
    id: "figueroa-consulting",
    company: "Figueroa Consulting",
    logo: "/assets/reports/figueroa-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://figueroaConsulting.com",
    industry: "Government Contracting & Small Business Consulting",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add our most recent contract award to the homepage — agency name, contract type, and value range.",
      result1: "✓ Contract award callout live in minutes — credibility signal ready for the next procurement meeting.",
      prompt2: "Update the Services page to add our 8(a) certification support offering with a 'Schedule a Consultation' CTA.",
      result2: "✓ New service section built same day — formatted consistently with existing entries.",
      prompt3: "Add a 'Past Performance' section to the About page with three agency client callouts.",
      result3: "✓ Past performance section live in under 10 minutes — ready for your next proposal."
    }
  },
  {
    id: "flight-effect",
    company: "Flight Effect",
    logo: "/assets/reports/flight-effect/logo.jpeg",
    logoNeedsBg: false,
    url: "https://flighteffect.com",
    industry: "Digital Marketing & Growth Agency",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client result to the Case Studies page — channel, campaign type, and ROAS or revenue outcome.",
      result1: "✓ Case study live same day — proof point ready before your next agency pitch.",
      prompt2: "Update the Services page to add our new TikTok Ads offering with a 'Get a Free Audit' CTA.",
      result2: "✓ New service section built and live in under 10 minutes — no dev, no designer.",
      prompt3: "Change the hero CTA from 'Work With Us' to 'See What We'd Do With Your Budget' and link to an intake form.",
      result3: "✓ CTA updated and intake form live in minutes — stronger conversion path from first visit."
    }
  },
  {
    id: "global-intelligence-solutions",
    company: "Global Intelligence Solutions",
    logo: "/assets/reports/global-intelligence-solutions/logo.jpeg",
    logoNeedsBg: false,
    url: "https://globalintelligencesolutions.com",
    industry: "Intelligence & Risk Consulting / Corporate Security",
    pages: 5,
    hostingCost: 60,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Services page to add our new executive threat assessment offering with a 'Request a Briefing' CTA.",
      result1: "✓ New service section live same day — ready for the next corporate security inquiry.",
      prompt2: "Add a capabilities section to the homepage highlighting our geopolitical risk analysis work.",
      result2: "✓ Section built and live in under 10 minutes — no Webflow editor, no developer.",
      prompt3: "Change the hero headline to lead with what clients get: 'Intelligence That Protects Decisions, Not Just Assets'.",
      result3: "✓ Hero updated in minutes — sharper positioning for C-suite and security buyers."
    }
  },
  {
    id: "hill-search-solutions",
    company: "Hill Search Solutions LLC",
    logo: "/assets/reports/hill-search-solutions/logo.svg",
    logoNeedsBg: false,
    url: "https://hillsearchsolutions.com",
    industry: "Executive Search & Staffing",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the hero from 'FRESH TALENT! TOP COMPANIES!!!' to something that leads with our specialty industries — accounting, tech, and construction.",
      result1: "✓ Hero copy updated and live in under 10 minutes — sharper positioning for the clients you're targeting.",
      prompt2: "Add a new section under 'For Companies' that calls out our process — extensive and precise — with a direct 'Start a Search' CTA.",
      result2: "✓ New section built and published same day, using your own words from the site.",
      prompt3: "Test whether 'FIND TALENT' or 'Start Hiring Now' gets more clicks on the homepage.",
      result3: "✓ CTA swapped in minutes — monitor it, revert, or keep it, all without touching a developer."
    }
  },
  {
    id: "hs-insights",
    company: "H&S Insights",
    logo: "/assets/reports/hs-insights/logo.jpeg",
    logoNeedsBg: false,
    url: "https://hsinsights.com",
    industry: "Market Research & Consumer Insights Consulting",
    pages: 4,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new research publication to the Insights page — topic, methodology, and a 'Download Report' CTA.",
      result1: "✓ New publication live same day — gated content ready to capture leads immediately.",
      prompt2: "Update the hero to lead with a specific outcome: 'We Turn Consumer Data Into Decisions That Grow Revenue'.",
      result2: "✓ Hero updated in under 10 minutes — sharper hook for brand and product leaders.",
      prompt3: "Add a client list section to the homepage with logos from three or four recognizable brands.",
      result3: "✓ Social proof section built and live in minutes — credibility visible on first visit."
    }
  },
  {
    id: "hr-ninja",
    company: "HR Ninja Consulting",
    logo: "/assets/reports/hr-ninja/logo.jpeg",
    logoNeedsBg: false,
    url: "https://hrninja.com",
    industry: "HR Consulting / SMB Human Resources Outsourcing",
    pages: 8,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new service offering for employee handbook creation with a 'Get a Custom Quote' CTA.",
      result1: "✓ New service section live in minutes — formatted consistently with existing offerings.",
      prompt2: "Update the hero to lead with the pain point: 'HR Problems Are Expensive. We Prevent Them Before They Start'.",
      result2: "✓ Hero updated same day — stronger hook for small business owners evaluating HR support.",
      prompt3: "Add a FAQ section to the Services page covering common SMB HR questions.",
      result3: "✓ FAQ section built and live in under 10 minutes — reduces friction before the first consultation."
    }
  },
  {
    id: "human-capital-consulting",
    company: "Human Capital Consulting",
    logo: "/assets/reports/human-capital-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://humancapitalconsulting.com",
    industry: "HR Strategy & Talent Management Consulting",
    pages: 5,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new service offering for succession planning with a 'Schedule a Discovery Call' CTA.",
      result1: "✓ New service section live in minutes — formatted consistently with existing offerings.",
      prompt2: "Update the hero to lead with retention outcomes: 'We Help Organizations Keep the People That Drive Growth'.",
      result2: "✓ Hero updated same day — sharper positioning for CHROs and CEOs facing turnover.",
      prompt3: "Add a client outcome callout to the homepage — industry, challenge, and measurable result.",
      result3: "✓ Outcome callout built and live in under 10 minutes — social proof on the first page prospects see."
    }
  },
  {
    id: "hyper-talent",
    company: "Hyper Talent",
    logo: "/assets/reports/hyper-talent/logo.jpeg",
    logoNeedsBg: false,
    url: "https://hypertalent.com",
    industry: "Recruiting & Talent Acquisition / Tech & Startups",
    pages: 4,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client success story to the homepage — company stage, role type, and time to fill.",
      result1: "✓ Success callout live in minutes — proof point ready before your next sales conversation.",
      prompt2: "Update the hero to lead with speed: 'We Fill Engineering Roles in Half the Time Your Team Can'.",
      result2: "✓ Hero updated same day — sharper hook for startups that can't afford a slow hire.",
      prompt3: "Add a 'Start a Search' intake form page with fields for role, stage, and urgency.",
      result3: "✓ New page built and live in under 10 minutes — better inbound path from first visit to first call."
    }
  },
  {
    id: "init-esports",
    company: "Init Esports",
    logo: "/assets/reports/init-esports/logo.jpeg",
    logoNeedsBg: false,
    url: "https://initesports.com",
    industry: "Esports Consulting & Event Management",
    pages: 7,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new event to the Events page — game title, format, and registration link.",
      result1: "✓ Event listing live in minutes — players can register immediately, no dev needed.",
      prompt2: "Update the hero to lead with community scale: 'We've Run 500+ Esports Events. Here's What We've Learned'.",
      result2: "✓ Hero updated same day — credibility-first positioning for brands and sponsors.",
      prompt3: "Add a sponsor inquiry section to the homepage with a 'Partner With Us' CTA and intake form.",
      result3: "✓ Sponsorship section built and live in under 10 minutes — better inbound path for brand deals."
    }
  },
  {
    id: "intelligens-consulting",
    company: "Intelligens Consulting",
    logo: "/assets/reports/intelligens-consulting/logo.svg",
    logoNeedsBg: false,
    url: "https://intelligens.us",
    industry: "Management Consulting / Technology & Business Process Outsourcing",
    pages: 4,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a proper hero headline to the homepage — something like 'We Help Organizations Drive Change Across Strategy, Technology, and Operations' with a clear CTA below it.",
      result1: "✓ Hero section built and live same day — no developer required, no platform login.",
      prompt2: "We published a new article — add it to the News & Publications section and put it at the top.",
      result2: "✓ New publication added and reordered in under 10 minutes, while the news is still current.",
      prompt3: "Replace the three generic 'MORE' buttons with specific CTAs — 'Meet the Team', 'View Services', 'Read Our Research' — so visitors know exactly where they're going.",
      result3: "✓ All three CTAs updated across the site in one pass, live immediately."
    }
  },
  {
    id: "interna",
    company: "InternaTech",
    logo: "/assets/reports/interna/logo.jpeg",
    logoNeedsBg: false,
    url: "https://internatech.com",
    industry: "Technology Consulting / Digital Transformation",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client case study — industry, digital transformation challenge, and outcome.",
      result1: "✓ Case study live same day — proof point ready for the next enterprise prospect.",
      prompt2: "Update the Services page to add our new cloud migration offering with a 'Request a Scoping Call' CTA.",
      result2: "✓ New service section built and live in under 10 minutes — no dev, no designer.",
      prompt3: "Change the hero to lead with speed and certainty: 'We Modernize Enterprise Systems Without the 18-Month Overruns'.",
      result3: "✓ Hero updated in minutes — sharper positioning for CIOs tired of failed transformation projects."
    }
  },
  {
    id: "jeweld-consulting",
    company: "Jeweld Legacy Consulting",
    logo: "/assets/reports/jeweld-consulting/logo.jpeg",
    logoNeedsBg: false,
    url: "https://jeweldlegacy.com",
    industry: "Nonprofit & Social Impact Consulting",
    pages: 8,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new program outcome to the Impact page — population served, challenge, and measurable result.",
      result1: "✓ Outcome entry live same day — impact story updated before your next grant review.",
      prompt2: "Update the Services page to add our new organizational capacity-building offering.",
      result2: "✓ New service section built and live in under 10 minutes — no designer, no queue.",
      prompt3: "Change the hero to lead with the communities we serve: 'We Help Nonprofits Build the Infrastructure to Do More Good'.",
      result3: "✓ Hero updated in minutes — stronger positioning for foundation partners and program officers."
    }
  },
  {
    id: "jorian-hoover",
    company: "Jorian Hoover Startup Fundraising",
    logo: "/assets/reports/jorian-hoover/logo.jpeg",
    logoNeedsBg: false,
    url: "https://jorianhoover.com",
    industry: "Startup Fundraising Consulting / Investor Relations",
    pages: 8,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client win to the homepage — round size, stage, and sector — without naming the company.",
      result1: "✓ Fundraising win callout live in minutes — social proof ready before your next intro call.",
      prompt2: "Update the Services page to add a new offering for pre-seed deck preparation with a 'Book a Strategy Session' CTA.",
      result2: "✓ New service section built same day — formatted consistently with existing offerings.",
      prompt3: "Change the hero to lead with a specific outcome: 'We've Helped Founders Raise $50M+ in the Last 3 Years'.",
      result3: "✓ Hero updated in under 10 minutes — sharper credibility signal for founders evaluating fundraising help."
    }
  },
  {
    id: "kremer-leadership",
    company: "Kremer Leadership Institute",
    logo: "/assets/reports/kremer-leadership/logo.jpeg",
    logoNeedsBg: false,
    url: "https://kremerleadership.com",
    industry: "Leadership Development & Executive Coaching",
    pages: 9,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new workshop to the Programs page — topic, format, and a 'Register Now' CTA.",
      result1: "✓ Workshop listing live in minutes — registrations open immediately, no dev needed.",
      prompt2: "Update the hero to lead with a specific leader outcome: 'We Train Executives to Lead Through Uncertainty'.",
      result2: "✓ Hero updated same day — sharper positioning for CHROs and L&D buyers.",
      prompt3: "Add a client testimonial section with two or three quotes from executives who've been through our programs.",
      result3: "✓ Testimonial section built and live in under 10 minutes — social proof visible on first visit."
    }
  },
  {
    id: "lennon-management",
    company: "Lennon Management Inc",
    logo: "/assets/reports/lennon-management/logo.jpeg",
    logoNeedsBg: false,
    url: "https://lennonmanagement.com",
    industry: "Property Management / Residential & Commercial",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new available property listing — type, location, rent range, and a 'Schedule a Tour' CTA.",
      result1: "✓ Listing live in minutes — prospects can inquire immediately, no dev needed.",
      prompt2: "Update the Services page to add our new short-term rental management offering.",
      result2: "✓ New service section built same day — formatted consistently with existing services.",
      prompt3: "Change the hero to lead with the owner benefit: 'We Manage Your Property Like It's Our Own'.",
      result3: "✓ Hero updated in under 10 minutes — stronger positioning for property owners evaluating managers."
    }
  },
  {
    id: "living-motions",
    company: "Living Motions Management & Marketing",
    logo: "/assets/reports/living-motions/logo.jpeg",
    logoNeedsBg: false,
    url: "https://livingmotions.com",
    industry: "Event Management & Marketing Agency",
    pages: 4,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new event success story — client type, event size, and key outcome.",
      result1: "✓ Case study live same day — proof point ready before your next event RFP.",
      prompt2: "Update the Services page to add our new virtual event production offering with a 'Get a Quote' CTA.",
      result2: "✓ New service section built and live in under 10 minutes — no designer, no queue.",
      prompt3: "Change the hero to lead with scale: 'We've Produced 300+ Events. Here's What We Do Differently'.",
      result3: "✓ Hero updated in minutes — credibility-first positioning for corporate buyers."
    }
  },
  {
    id: "long-run-capital",
    company: "Long Run Capital",
    logo: "/assets/reports/long-run-capital/logo.jpeg",
    logoNeedsBg: false,
    url: "https://longruncapital.com",
    industry: "Private Equity / Lower Middle Market",
    pages: 1,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new portfolio company to the homepage — sector, hold period, and a one-line value creation note.",
      result1: "✓ Portfolio entry live in minutes — track record updated before your next LP or management team meeting.",
      prompt2: "Update the investment criteria section to reflect our current focus on business services and light manufacturing.",
      result2: "✓ Criteria updated same day — accurate positioning for intermediaries and sellers.",
      prompt3: "Add a 'Our Process' section that walks founders and owners through how we approach a deal.",
      result3: "✓ Process section built and live in under 10 minutes — better first impression for business owners evaluating partners."
    }
  },
  {
    id: "luxe-executive-search",
    company: "Luxe Executive Search",
    logo: "/assets/reports/luxe-executive-search/logo.jpeg",
    logoNeedsBg: false,
    url: "https://luxeexecutivesearch.com",
    industry: "Executive Search / C-Suite & Senior Leadership",
    pages: 3,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a recent successful placement to the homepage — industry, title level, and time to fill.",
      result1: "✓ Placement callout live in minutes — track record updated before the next board conversation.",
      prompt2: "Update the hero to lead with your specialty: 'We Place C-Suite Leaders Who Stay'.",
      result2: "✓ Hero updated same day — sharper positioning for boards and CEOs evaluating search partners.",
      prompt3: "Add a 'Start a Search' page with a short intake form — role, reporting level, and urgency.",
      result3: "✓ New page built and live in under 10 minutes — better inbound path for retained search inquiries."
    }
  },
  {
    id: "maru-asset-management",
    company: "Maru Asset Management",
    logo: "/assets/reports/maru-asset-management/logo.jpeg",
    logoNeedsBg: false,
    url: "https://maruassets.com",
    industry: "Alternative Investment Management / EB-5 & Real Estate",
    pages: 6,
    hostingCost: 10,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Trusted Partners section to add our new affiliate and their description.",
      result1: "✓ Partners section updated live in minutes — no designer, no ticket, ready for your next client meeting.",
      prompt2: "Add a dedicated page for EB-5 visa sponsorship programs with a 'Contact Us' CTA.",
      result2: "✓ New page live same day — structured for your international clients, optimized to convert.",
      prompt3: "Update 'What We Offer' to reflect our current investment products including the new REIT structure.",
      result3: "✓ Offerings page updated in under 10 minutes — accurate, current, and exactly how you described it."
    }
  },
  {
    id: "meaning-beyond-money",
    company: "Meaning Beyond Money",
    logo: "/assets/reports/meaning-beyond-money/logo.jpeg",
    logoNeedsBg: false,
    url: "https://meaningbeyondmoney.com",
    industry: "Wealth Management Consulting / Family Advisory",
    pages: 6,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the 'Be Intentional' section to reflect our updated framework for family wealth governance.",
      result1: "✓ Section refreshed and live in minutes — aligned with your current methodology, no design queue.",
      prompt2: "Add a new Insights Center article on navigating wealth transitions across generations.",
      result2: "✓ New content page live same day — formatted consistently, indexed for search, ready to share.",
      prompt3: "Split the homepage CTAs so families and financial advisors each have a dedicated path.",
      result3: "✓ Dual-audience navigation built and live — cleaner experience for both the families you serve and the advisors you train."
    }
  },
  {
    id: "metier-one",
    company: "MetierOne Inc",
    logo: "/assets/reports/metier-one/logo.jpeg",
    logoNeedsBg: false,
    url: "https://metierone.com",
    industry: "Talent Acquisition & Career Education Consulting",
    pages: 8,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new job opening under Technology Service Consulting with the role details and apply link.",
      result1: "✓ Job Openings page updated live in minutes — candidates can apply immediately, no dev needed.",
      prompt2: "Update the Career Education Consulting section to describe our new bilingual engineer program.",
      result2: "✓ Service page refreshed same day — accurate, specific, ready for the Silicon Valley audience you're targeting.",
      prompt3: "Change the hero from 'WE ARE READY TO HELP' to something that speaks directly to tech hiring managers.",
      result3: "✓ New hero live in under 10 minutes — sharper positioning for the companies you're trying to reach."
    }
  },
  {
    id: "michael-daniel-investments",
    company: "Michael Daniel Investments",
    logo: "/assets/reports/michael-daniel-investments/logo.jpeg",
    logoNeedsBg: false,
    url: "https://michaeldanielinvestments.com",
    industry: "Private Lending & Real Estate Finance",
    pages: 4,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a dedicated landing page for Bail-Out Loans with a 'Call Us Now — Free Consultation' CTA.",
      result1: "✓ New page live same day — targeting homeowners in foreclosure exactly where they're searching.",
      prompt2: "Update the hero to lead with 'Private Lending & Creative Financing That Actually Works' and separate the homeowner and investor paths more clearly.",
      result2: "✓ Updated live in under 10 minutes — two clear paths for two different audiences, no developer required.",
      prompt3: "Add a new section under Creative Financing for our JV Partnership terms with a contact form.",
      result3: "✓ New section built and live — investors can inquire directly, deal flow starts immediately."
    }
  },
  {
    id: "moore-valuation",
    company: "Moore Valuation & Consulting",
    logo: "/assets/reports/moore-valuation/logo.jpeg",
    logoNeedsBg: false,
    url: "https://mooreval.com",
    industry: "Commercial Real Estate Appraisal & Consulting",
    pages: 5,
    hostingCost: 16,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a recent project to the Projects page — multifamily portfolio in the East Bay, completed last month.",
      result1: "✓ New project entry is live within minutes, no platform login required.",
      prompt2: "Update the Valuation Services & Expertise section to include a line about litigation support for divorce proceedings.",
      result2: "✓ Copy is added to the right section, formatted consistently with the rest of the page.",
      prompt3: "We want a Contact page with a short intake form — property type, purpose of appraisal, and timeline.",
      result3: "✓ Form is built and embedded, submissions go straight to your inbox."
    }
  },
  {
    id: "nest-egg-fertility",
    company: "Nest Egg Fertility",
    logo: "/assets/reports/nest-egg-fertility/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nesteggfertility.com",
    industry: "Fertility & Assisted Reproduction Services",
    pages: 9,
    hostingCost: 25,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Affordable Options page to reflect our new pharmacy discount partnership — add a paragraph and a bullet list.",
      result1: "✓ Page updated in minutes, consistent with the rest of the site's tone and layout.",
      prompt2: "Add a new section to the Surrogacy page that explains the difference between U.S. and international surrogacy options side by side.",
      result2: "✓ Comparison section built and live — no developer needed, no back-and-forth.",
      prompt3: "Change the hero headline from 'Bringing Life To Your Nest' to something that leads with our concierge approach.",
      result3: "✓ New headline is live in under 10 minutes — test it, swap it back, try another version."
    }
  },
  {
    id: "fountain-of-scale",
    company: "Fountain of Scale",
    logo: "/assets/reports/fountain-of-scale/logo.svg",
    logoNeedsBg: false,
    url: "https://fountainofscale.com",
    industry: "Revenue Automation / Growth Agency",
    pages: 8,
    waitDays: 3,
    opportunityFindings: [
      {
        label: "SEO quick win",
        body: "Right now, Google can't fully read what Fountain of Scale does — the site is missing a small piece of code that tells search engines exactly what services you offer. It's a 20-minute fix, but on a custom Next.js build it keeps getting deprioritized. We'd knock it out as part of the rebuild.",
      },
      {
        label: "Site speed",
        body: "\"Automate the work that costs you revenue\" is exactly the right message. The next step is making sure the site can move as fast as the business does — so when a new offer launches or the messaging shifts, it's live the same day, not after a developer's queue.",
      },
    ],
    aiExamples: {
      prompt1: "Change 'Automate the work that costs you revenue' to lead with our new service launch",
      result1: "✓ Hero updated and live in minutes — no developer, no deploy",
      prompt2: "Add a new section between 'We build it' and 'We run it' for our new onboarding package",
      result2: "✓ New section live same day, exactly where you want it",
      prompt3: "Add schema markup so Google can show our services as rich results",
      result3: "✓ Schema added in one pass — no developer needed"
    }
  },
  {
    id: "aligned-yoga",
    company: "Aligned Yoga",
    logo: "/assets/reports/aligned-yoga/logo.jpeg",
    logoNeedsBg: false,
    url: "https://alignedyoga.com",
    industry: "Online Yoga Education",
    pages: 12,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the 'CHOOSE YOUR PROGRAM' CTA to reflect the new Thailand 2026 deposit deadline",
      result1: "✓ Done in 2 minutes — no designer needed",
      prompt2: "Add a new section under 'OUR PROGRAMS' for a limited-time early-bird offer",
      result2: "✓ New section live same day, exactly where you want it",
      prompt3: "Rewrite the 'WHY CHOOSE US?' copy to highlight your Yoga Alliance registration",
      result3: "✓ Edit directly, publish immediately — no brief, no queue"
    }
  },
  {
    id: "all-that-housing",
    company: "All That Housing",
    logo: "/assets/reports/all-that-housing/logo.jpeg",
    logoNeedsBg: false,
    url: "https://allthathousing.com",
    industry: "Furnished Home Rentals",
    pages: 8,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Customized Solutions Nationwide' to list three new markets you just expanded into",
      result1: "✓ Edit the copy yourself, publish in minutes",
      prompt2: "Add a new section under 'Full-Service Experience' highlighting your corporate relocation package",
      result2: "✓ New section live same day",
      prompt3: "Change the 'Find Out More' CTA to a direct booking form with your new intake questions",
      result3: "✓ Form updated and live without a developer"
    }
  },
  {
    id: "antares-professional-solutions",
    company: "Antares Professional Solutions",
    logo: "/assets/reports/antares-professional-solutions/logo.jpeg",
    logoNeedsBg: false,
    url: "https://antaresps.com",
    industry: "Executive Recruiting",
    pages: 5,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Industries We Serve' to add a new vertical you just landed a contract in",
      result1: "✓ Live in minutes, not after a designer's next available slot",
      prompt2: "Add a new case study under 'Expect Success!™' from a recent placement",
      result2: "✓ New content published the same day you write it",
      prompt3: "Swap the 'Looking to HIRE?' CTA button to a calendar booking link for your new intake process",
      result3: "✓ Change the CTA yourself, no developer needed"
    }
  },
  {
    id: "ai-talent-agency",
    company: "Artificial Intelligence Talent Agency",
    logo: "/assets/reports/ai-talent-agency/logo.jpeg",
    logoNeedsBg: false,
    url: "https://aita.co",
    industry: "AI Talent Recruiting",
    pages: 13,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Why Tech Leaders Choose Us' with a new client win and placement stat",
      result1: "✓ Edit and publish the same day — no Webflow developer needed",
      prompt2: "Add a new role category under 'Our Impact by the Numbers' as you expand beyond software engineers",
      result2: "✓ New section live same day",
      prompt3: "Change 'Start Hiring Now' to route directly to a new intake form you're testing",
      result3: "✓ CTA updated in minutes, revert anytime"
    }
  },
  {
    id: "betrue-group",
    company: "beTRUE Group",
    logo: "/assets/reports/betrue-group/logo.jpeg",
    logoNeedsBg: false,
    url: "https://betruegrp.com",
    industry: "Creative Studio Space",
    pages: 6,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new studio package under 'What We Offer' for your podcast suite",
      result1: "✓ New section live the same day you decide to promote it",
      prompt2: "Update the 'Events' section with your upcoming brand activation calendar",
      result2: "✓ Edit it yourself — no brief, no turnaround time",
      prompt3: "Change the homepage hero from 'Welcome To beTRUE' to your current seasonal hook",
      result3: "✓ Hero copy updated in under 5 minutes"
    }
  },
  {
    id: "beyond-admissions",
    company: "BeyondAdmissions",
    logo: "/assets/reports/beyond-admissions/logo.jpeg",
    logoNeedsBg: false,
    url: "https://beyondadmissions.com",
    industry: "College & Career Coaching",
    pages: 8,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'The Complete College Application Process' section to reflect the new 2027 admissions cycle",
      result1: "✓ Done in minutes without waiting on anyone",
      prompt2: "Add a new 'Current Students' testimonial from your most recent cohort",
      result2: "✓ Published the same day you write it",
      prompt3: "Change 'College Prep Coaching' CTA to a limited-enrollment workshop with a deadline",
      result3: "✓ Urgency copy live immediately — revert when seats fill"
    }
  },
  {
    id: "bizzy-bee",
    company: "Bizzy Bee Supervised Visits",
    logo: "/assets/reports/bizzy-bee/logo.jpeg",
    logoNeedsBg: false,
    url: "https://bizzybeesupervisedvisits.com",
    industry: "Supervised Visitation Services",
    pages: 8,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Book A Service' to show new county coverage you just expanded into",
      result1: "✓ Change the copy yourself — live in minutes",
      prompt2: "Add a new FAQ under 'Our Mission' addressing a question you hear repeatedly from new clients",
      result2: "✓ Content published same day",
      prompt3: "Change the 'Book Now!' CTA to your updated scheduling tool link after switching platforms",
      result3: "✓ URL updated instantly — no developer needed"
    }
  },
  {
    id: "empoweryu",
    company: "EmPowerYu",
    logo: "/assets/reports/empoweryu/logo.jpeg",
    logoNeedsBg: false,
    url: "https://empoweryu.com",
    industry: "Remote Patient Monitoring / Digital Health",
    pages: 7,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'What We Do' to reflect a new clinical use case you just validated",
      result1: "✓ Edit directly — no brief, no queue",
      prompt2: "Add a new 'Design Principles' callout about your latest sensor integration",
      result2: "✓ New content live same day",
      prompt3: "Rewrite the homepage hero to lead with 'Healthcare vs sickcare' as your primary positioning",
      result3: "✓ Hero updated in minutes, test it immediately"
    }
  },
  {
    id: "fisher-marketing",
    company: "Fisher Marketing Services",
    logo: "/assets/reports/fisher-marketing/logo.jpeg",
    logoNeedsBg: false,
    url: "https://fisher-marketing.com",
    industry: "Fractional CMO / Marketing Consulting",
    pages: 9,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'UNLOCK SCALABLE GROWTH WITH A FRACTIONAL CMO' to lead with a new client vertical you just added",
      result1: "✓ Headline live in minutes — no designer loop",
      prompt2: "Add a new case study to 'EXPERT FRACTIONAL MARKETING GUIDANCE FOR GROWTH'",
      result2: "✓ Published same day you write it",
      prompt3: "A/B test a new 'BOOK A TIME' CTA against 'Get Your Free Strategy Session'",
      result3: "✓ Change it yourself, revert anytime"
    }
  },
  {
    id: "genetria",
    company: "Genetria",
    logo: "/assets/reports/genetria/logo.jpeg",
    logoNeedsBg: false,
    url: "https://genetria.mx",
    industry: "Health Tech / AI Wellness",
    pages: 7,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Longevity OS™ Marketplace' to add a new partner integration you just launched",
      result1: "✓ Published the same day — no Webflow developer needed",
      prompt2: "Add a new pricing tier under 'Modelos de Negocio' for enterprise clients",
      result2: "✓ New section live same day",
      prompt3: "Rewrite 'Componentes Clave' to feature your latest AI diagnostic module",
      result3: "✓ Edit directly, publish immediately"
    }
  },
  {
    id: "indie-rights",
    company: "Indie Rights",
    logo: "/assets/reports/indie-rights/logo.jpeg",
    logoNeedsBg: false,
    url: "https://indierights.com",
    industry: "Independent Film Distribution",
    pages: 6,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new title to 'ACTION & ADVENTURE' the week it's acquired",
      result1: "✓ Live same day — no designer needed",
      prompt2: "Update 'License our content' CTA with a new direct inquiry form after changing your intake process",
      result2: "✓ Form updated in minutes",
      prompt3: "Add a 'New Arrivals' section above 'OUR MOVIES' for seasonal promotions",
      result3: "✓ New section live the same day you decide to run it"
    }
  },
  {
    id: "league-of-originals",
    company: "League of Originals",
    logo: "/assets/reports/league-of-originals/logo.jpeg",
    logoNeedsBg: false,
    url: "https://leagueoforiginals.com",
    industry: "Brand Builder Community / Events",
    pages: 11,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Originals Summit' page with a newly confirmed speaker and date",
      result1: "✓ Live the same day it's confirmed — no developer needed",
      prompt2: "Add a new event under 'Events, Workshops, and Advantage Club' for the next quarter",
      result2: "✓ Published immediately — no brief, no build",
      prompt3: "Change 'Secure Your Ticket' CTA to a waitlist form when seats sell out",
      result3: "✓ Swap the CTA yourself in minutes"
    }
  },
  {
    id: "moonstone-management",
    company: "Moonstone Management",
    logo: "/assets/reports/moonstone-management/logo.jpeg",
    logoNeedsBg: false,
    url: "https://moonstonemc.com",
    industry: "HOA Management & Consulting",
    pages: 11,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Comprehensive Management' to include a new service tier you just rolled out",
      result1: "✓ Edit directly — live in minutes",
      prompt2: "Add a new community FAQ to 'Why Choose Us?' based on questions you're fielding right now",
      result2: "✓ Published same day",
      prompt3: "Change 'Contact Us' CTA to a direct proposal request form for new HOA clients",
      result3: "✓ Form live immediately — no developer"
    }
  },
  {
    id: "nexidet",
    company: "NexiDet",
    logo: "/assets/reports/nexidet/logo.jpeg",
    logoNeedsBg: false,
    url: "https://nexidet.com",
    industry: "Mental Health Billing Services",
    pages: 6,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Working Together' with a new service description after adding a new billing specialty",
      result1: "✓ Live in minutes — no designer queue",
      prompt2: "Add a new practitioner testimonial to build trust with new visitors",
      result2: "✓ Published the same day you get it",
      prompt3: "Replace the generic 'Read More' CTA with a direct intake form for new clients",
      result3: "✓ Form updated instantly, no developer needed"
    }
  },
  {
    id: "pear-inc",
    company: "Pear Inc",
    logo: "/assets/reports/pear-inc/logo.jpeg",
    logoNeedsBg: false,
    url: "https://pearincorp.com",
    industry: "Residential Property Management",
    pages: 5,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'What We Do' when you add a new property type or market area",
      result1: "✓ Live in minutes — no designer",
      prompt2: "Add a current property owner testimonial under 'Why Pick Us'",
      result2: "✓ Published the same day you receive it",
      prompt3: "Update the 'Vacancy' section to reflect current availability without relying on anyone else",
      result3: "✓ Edit directly, publish immediately"
    }
  },
  {
    id: "play-with-asl",
    company: "Play With ASL",
    logo: "/assets/reports/play-with-asl/logo.jpeg",
    logoNeedsBg: false,
    url: "https://playwithasl.com",
    industry: "ASL EdTech / Educational Games",
    pages: 5,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the 'TILT!' section with new gameplay features from your latest release",
      result1: "✓ Live the same day the update ships",
      prompt2: "Add a new School Edition case study from a district that just adopted the platform",
      result2: "✓ Published the same day you get sign-off",
      prompt3: "Change 'Download Now' to a dual CTA linking to both App Store and School Edition demo",
      result3: "✓ Updated in minutes, no developer"
    }
  },
  {
    id: "revival-health",
    company: "Revival Health",
    logo: "/assets/reports/revival-health/logo.jpeg",
    logoNeedsBg: false,
    url: "https://revival.care",
    industry: "Digital Health / Remote Monitoring",
    pages: 9,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'The power of threes' section when a new product tier goes live",
      result1: "✓ Edit directly — live in minutes",
      prompt2: "Add a new clinical outcome stat to 'Deep Learning for predictive health outcomes'",
      result2: "✓ Published same day the data is ready",
      prompt3: "A/B test 'Download the app today' against a 'Request a Demo' CTA for enterprise buyers",
      result3: "✓ Swap the CTA yourself, revert anytime"
    }
  },
  {
    id: "revolve-recovery",
    company: "Revolve Recovery",
    logo: "/assets/reports/revolve-recovery/logo.jpeg",
    logoNeedsBg: false,
    url: "https://revolverecovery.com",
    industry: "Addiction Treatment / IOP",
    pages: 5,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the TARILA program description when clinical protocols are revised",
      result1: "✓ Live the same day it changes — no designer",
      prompt2: "Add a new 'Why Revolve?' testimonial from a recent program graduate",
      result2: "✓ Published the same day you have it",
      prompt3: "Change 'Learn More' CTA to a direct intake inquiry form during high-volume periods",
      result3: "✓ Updated in minutes, revert when volume normalizes"
    }
  },
  {
    id: "richuel",
    company: "Richuel",
    logo: "/assets/reports/richuel/logo.jpeg",
    logoNeedsBg: false,
    url: "https://richuel.com",
    industry: "Financial Planning / Career Transition FinTech",
    pages: 6,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'THE 5-STEP FINANCIAL TREATMENT PLAN' copy when a new feature ships",
      result1: "✓ Live the same day — no designer queue",
      prompt2: "Add a new trust signal to 'TRUST BY DESIGN' based on user feedback you just got",
      result2: "✓ Published immediately",
      prompt3: "Test a new hero headline variant alongside 'Laid off. Burnt out.' to see what converts better",
      result3: "✓ Swap it yourself, revert in minutes"
    }
  },
  {
    id: "sankari-studios",
    company: "Sankari Studios",
    logo: "/assets/reports/sankari-studios/logo.jpeg",
    logoNeedsBg: false,
    url: "https://sankaristudios.com",
    industry: "Impact Gaming",
    pages: 8,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'PLAYING FOR OUR FUTURE' with a new impact stat from your latest player data",
      result1: "✓ Live the same day you have the number",
      prompt2: "Add a new 'JOIN THE MOVEMENT' partner logo when a new org signs on",
      result2: "✓ Published same day — no designer",
      prompt3: "Change 'Download' CTA to a pre-registration link when your next title is in early access",
      result3: "✓ Swap in minutes, revert when launch goes live"
    }
  },
  {
    id: "socialtyze",
    company: "Socialtyze",
    logo: "/assets/reports/socialtyze/logo.jpeg",
    logoNeedsBg: false,
    url: "https://socialtyze.com",
    industry: "Influencer & Performance Marketing",
    pages: 6,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client campaign to 'OUR WORK' the week it wraps",
      result1: "✓ Live same day — no developer needed",
      prompt2: "Update 'Services' with a new offering after you formalize a new capability",
      result2: "✓ Published immediately",
      prompt3: "Change 'Let's Connect' CTA to a campaign brief intake form during a new business push",
      result3: "✓ Updated in minutes, revert anytime"
    }
  },
  {
    id: "sundae-electronics",
    company: "Sundae Electronics",
    logo: "/assets/reports/sundae-electronics/logo.jpeg",
    logoNeedsBg: false,
    url: "https://sundaelectronics.com",
    industry: "Consumer Software & Apps",
    pages: 8,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update the Owl VIP section with new features from the latest release",
      result1: "✓ Live same day the app ships — no designer",
      prompt2: "Add SoundBrake to the main product listing when it exits beta",
      result2: "✓ Published the day it goes live",
      prompt3: "Change the hero headline from 'Take Control of Gmail Notifications' to your new flagship product when priorities shift",
      result3: "✓ Swap in minutes, test it immediately"
    }
  },
  {
    id: "swidia",
    company: "SWIDIA",
    logo: "/assets/reports/swidia/logo.jpeg",
    logoNeedsBg: false,
    url: "https://swidia.com",
    industry: "Growth Marketing for Startups",
    pages: 6,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new client result to 'The results of deep collaboration' the week it closes",
      result1: "✓ Live same day — no developer needed",
      prompt2: "Update 'What we do' when you formalize a new channel or service offering",
      result2: "✓ Published immediately",
      prompt3: "Test a new 'Get a free growth plan' CTA hook against a 'See our results first' variant",
      result3: "✓ Swap it yourself, revert in minutes"
    }
  },
  {
    id: "synthhaven",
    company: "Synthhaven",
    logo: "/assets/reports/synthhaven/logo.jpeg",
    logoNeedsBg: false,
    url: "https://synthhaven.com",
    industry: "AI Media Creation Platform",
    pages: 5,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'Create your storyboard' copy when a major new capability ships",
      result1: "✓ Live the same day — no designer",
      prompt2: "Add a new use case under 'Agentic Integration for All Media' as integrations go live",
      result2: "✓ Published immediately",
      prompt3: "Change 'Apply to join the Beta' CTA to a public launch page when you exit beta",
      result3: "✓ Swap in minutes, no developer needed"
    }
  },
  {
    id: "taikyomedia",
    company: "TaiKyo Media",
    logo: "/assets/reports/taikyomedia/logo.jpeg",
    logoNeedsBg: false,
    url: "https://taikyomedia.com",
    industry: "Influencer Marketing",
    pages: 5,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new brand campaign result to your News section the week it goes live",
      result1: "✓ Published same day — no designer queue",
      prompt2: "Update your services description when you add a new campaign format or channel",
      result2: "✓ Edit directly, live in minutes",
      prompt3: "Replace the generic 'Contact' CTA with a campaign brief intake form during a new business push",
      result3: "✓ Updated immediately, revert anytime"
    }
  },
  {
    id: "tangelo-ai",
    company: "Tangelo.ai",
    logo: "/assets/reports/tangelo-ai/logo.jpeg",
    logoNeedsBg: false,
    url: "https://tangelo.ai",
    industry: "AI Sales Enablement / GTM SaaS",
    pages: 10,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'One System. Fully Connected.' with a new integration you just shipped",
      result1: "✓ Live same day — no Webflow developer",
      prompt2: "Add a new customer result to your social proof section when a deal closes",
      result2: "✓ Published immediately",
      prompt3: "A/B test 'See It In Action' against 'Talk to an Expert' CTA for enterprise buyers",
      result3: "✓ Swap it yourself in minutes, revert anytime"
    }
  },
  {
    id: "vida-luna-housing",
    company: "VIDA LUNA HOUSING",
    logo: "/assets/reports/vida-luna-housing/logo.jpeg",
    logoNeedsBg: false,
    url: "https://vidalunahousing.com",
    industry: "Temporary Housing / Insurance Claims",
    pages: 6,
    waitDays: 3,
    aiExamples: {
      prompt1: "Update 'What We Do' when you add a new housing type or service area",
      result1: "✓ Live in minutes — no designer",
      prompt2: "Add a new step to 'Insurance Claim Lifecycle' after refining your process",
      result2: "✓ Published same day",
      prompt3: "Change 'Request Housing' CTA to link to a new intake form after switching platforms",
      result3: "✓ Updated instantly — no developer needed"
    }
  },
  {
    id: "zeno-semiconductor",
    company: "Zeno Semiconductor",
    logo: "/assets/reports/zeno-semiconductor/logo.jpeg",
    logoNeedsBg: false,
    url: "https://zenosemi.com",
    industry: "Semiconductor Technology / IP Licensing",
    pages: 5,
    waitDays: 3,
    aiExamples: {
      prompt1: "Add a new press mention or publication to the News section the week it drops",
      result1: "✓ Live same day — no designer needed",
      prompt2: "Update 'Memory Technology' or 'Logic Technology' pages when a new breakthrough is ready to share",
      result2: "✓ Published immediately",
      prompt3: "Add a new Team member to the 'Team' page when a key hire joins",
      result3: "✓ Live in minutes — no developer"
    }
  },
  {
    id: "tamart",
    company: "TAMART",
    logo: "/assets/reports/tamart/logo.jpeg",
    logoNeedsBg: false,
    url: "https://www.tamartads.com",
    industry: "AI Video Ad Production",
    pages: 5,
    hostingCost: 50,
    waitDays: 3,
    opportunityFindings: [
      {
        label: "Generic page title",
        body: "Right now, the page title shows 'TAMART: Home' in Google search results — which tells nobody searching for AI video production what the company does. Any founder who finds the site through search sees a generic label before they ever click. It's a two-minute fix on any platform that gives you real control.",
      },
      {
        label: "Site depth vs. business depth",
        body: "TAMART has 20 years of marketing experience behind it and a genuinely differentiated product — but right now the site is 239 words and a single page, and none of that depth shows up anywhere a new client would look. The window to establish category authority in AI video ads is open right now, and every week the site doesn't grow is a week a better-funded competitor fills that space.",
      },
    ],
    aiExamples: {
      prompt1: "Update the page title to 'AI Video Ads for Startups & Brands | TAMART' and fix the hero to mention we're based in Silicon Valley",
      result1: "✓ Live in minutes — search results now tell the story before anyone clicks, and the first impression matches the product",
      prompt2: "Add a page for product launch video ads — show three examples, explain the process, add a CTA to book a discovery call",
      result2: "✓ New page live same day — specific enough to rank for 'AI product launch video' and convert the founder who's actively looking",
      prompt3: "Add a case study: startup ran TAMART's AI ad vs. their old studio ad — here's the engagement difference",
      result3: "✓ Live same day — the proof point that turns a curious visitor into a booked call is on the site while the result is still fresh"
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
