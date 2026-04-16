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
