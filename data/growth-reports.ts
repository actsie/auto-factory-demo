export interface GrowthStat {
  number: string;
  color: "amber" | "blue" | "ink";
  label: string;
}

export interface GrowthCommunity {
  name: string;
  url: string;
  signal: "Hot" | "High" | "Mid";
  activity: number; // 0–100
  members: string;
}

export interface GrowthChannel {
  name: string;
  note: string;
  status: "Untapped" | "Partial" | "Long-term";
  score: number;
}

export interface GrowthCompetitor {
  name: string;
  doing: string[];
  missing: string[];
  isOpportunity?: boolean;
}

export interface GrowthExperiment {
  title: string;
  desc: string;
  tags: string[];
  signal: "High signal" | "Compounds";
}

export interface GrowthKeyword {
  text: string;
  type: "trigger" | "pain" | "stage" | "blurred";
}

export interface GrowthReport {
  id: string;
  company: string;
  industry: string;
  date: string;

  stats: GrowthStat[];

  communitiesCallout: string;
  communityReach: string;
  communityReachLabel: string;
  communities: GrowthCommunity[];

  channelsCallout: string;
  channels: GrowthChannel[];

  competitorsCallout: string;
  competitors: GrowthCompetitor[];

  experimentsCallout: string;
  experiments: GrowthExperiment[];
  experimentsUnlockTitle: string;
  experimentsUnlockSub: string;

  keywordsDesc: string;
  keywords: GrowthKeyword[];

  ctaTitle: string;
  ctaSub: string;
}

export const growthReports: GrowthReport[] = [
  {
    id: "lifeguard",
    company: "Lifeguard",
    industry: "Consumer Digital Safety",
    date: "April 30, 2026",
    stats: [
      { number: "4", color: "amber", label: "Active Reddit communities where your buyers describe the exact problem Lifeguard solves" },
      { number: "3", color: "blue", label: "High-signal channels your competitors (Aura, Norton, McAfee) haven't touched" },
      { number: "30", color: "ink", label: "Days to a working acquisition channel from a standing start" },
    ],
    communitiesCallout: "Families and individuals worried about online scams and identity theft are venting, asking questions, and sharing horror stories on Reddit daily. They're not browsing. They're in the problem right now, looking for what to do next. None of Lifeguard's main competitors show up here consistently.",
    communityReach: "23",
    communityReachLabel: "Members across the four subreddits where Lifeguard's ICP is most active",
    communities: [
      { name: "r/Scams", url: "https://reddit.com/r/Scams", signal: "Hot", activity: 95, members: "~1M" },
      { name: "r/cybersecurity", url: "https://reddit.com/r/cybersecurity", signal: "Hot", activity: 80, members: "1.1M+" },
      { name: "r/privacy", url: "https://reddit.com/r/privacy", signal: "High", activity: 70, members: "1.4M+" },
      { name: "r/personalfinance", url: "https://reddit.com/r/personalfinance", signal: "High", activity: 65, members: "21M+" },
    ],
    channelsCallout: "Consumer digital safety is a category where SEO compounds over 12–18 months. Aura proved that, but it took years. The faster channels are the ones none of the incumbents are using: community presence and referral at the moment of fear.",
    channels: [
      { name: "Reddit Community Presence", note: "Buyers active daily in r/Scams and r/cybersecurity. No competitor showing up consistently. Wide open.", status: "Untapped", score: 9.2 },
      { name: "Referral at the Fear Moment", note: "When Lifeguard catches something, that's when someone tells their family. Trigger a share prompt at that exact moment. Not on the settings page.", status: "Untapped", score: 8.8 },
      { name: "Founder Content (LinkedIn / X)", note: "Consumer safety content trends technical or corporate. A founder voice that talks to families in plain language (real scam stories, not jargon) is an opening nobody's taken.", status: "Untapped", score: 7.9 },
      { name: "Facebook (Paid + Organic)", note: "Custom Audiences already running. No organic community presence to warm the paid traffic landing in cold.", status: "Partial", score: 6.4 },
      { name: "SEO / Content", note: "Worth starting now but 12–18 months to compound. Aura's path. Not the first experiment for your stage.", status: "Long-term", score: 3.8 },
    ],
    competitorsCallout: "Aura, Norton, and McAfee are all running SEO and paid. Reddit and community presence don't appear in any of their documented growth strategies. The gap is showing up in the conversations your buyers are already having. No one's there.",
    competitors: [
      { name: "Aura", doing: ["SEO blog (~1M monthly visitors)", "YouTube", "LinkedIn PR"], missing: ["No documented Reddit strategy", "Community not a named channel"] },
      { name: "Norton / LifeLock", doing: ["Paid ads", "Review site presence", "Email"], missing: ["No organic community", "Generic messaging"] },
      { name: "McAfee", doing: ["Paid ads", "Comparison content", "Influencer"], missing: ["No Reddit", "No founder voice", "Corporate tone"] },
      { name: "Lifeguard", doing: ["Own the channels they're ignoring"], missing: ["Reddit + referral at the fear moment + founder voice in plain language"], isOpportunity: true },
    ],
    experimentsCallout: "Start with the channel where buyers are already in pain and no one is showing up. Then capture the word-of-mouth that happens naturally when someone's family almost gets scammed.",
    experiments: [
      {
        title: "Reddit presence in r/Scams and r/cybersecurity",
        desc: `Answer 3–5 posts per week where people describe an active scam attempt or ask how to protect a family member. No pitching. Just specific, useful answers. After 3 weeks, DM the people you helped: "Happy to dig deeper if useful." Warm leads from cold context.`,
        tags: ["Week 1–4", "Low effort", "Community"],
        signal: "High signal",
      },
      {
        title: "Referral triggered at the fear moment",
        desc: `Every time Lifeguard blocks something or surfaces a data breach, trigger a share prompt: "Lifeguard just caught something. Does your family have this?" One tap to send to a family member. Referral that comes from a real event converts at a different rate than a generic invite link.`,
        tags: ["Week 2–6", "Medium effort", "Referral"],
        signal: "High signal",
      },
      {
        title: "Founder content in plain language",
        desc: `Two posts per week on LinkedIn or X. Austin or Kevin writing about specific scam patterns they're seeing, in language a non-technical family member could understand. Not security jargon. Real stories, real examples. Goal: be the first name families think of when they search "how do I protect my mom online."`,
        tags: ["Week 3 onwards", "Consistent effort", "Content"],
        signal: "Compounds",
      },
    ],
    experimentsUnlockTitle: "You leave this call knowing exactly which channel to run first and what to measure — no guessing.",
    experimentsUnlockSub: "One focused session replaces weeks of trying to figure out where to start. We'll sequence the three, pick the first, and set a 30-day measure so you know if it's working.",
    keywordsDesc: "The exact phrases Lifeguard's buyers use when they're in pain. Monitor these weekly on Reddit, LinkedIn, and X.",
    keywords: [
      { text: "just got a fraud alert", type: "trigger" },
      { text: "my credit card was compromised", type: "trigger" },
      { text: "someone opened an account in my name", type: "trigger" },
      { text: "how do I freeze my credit", type: "trigger" },
      { text: "data breach notification email", type: "trigger" },
      { text: "my mom almost got scammed", type: "pain" },
      { text: "got a suspicious text", type: "pain" },
      { text: "think I've been phished", type: "pain" },
      { text: "my info was in a data breach", type: "pain" },
      { text: "identity theft what do I do", type: "pain" },
      { text: "my dad clicked a link", type: "pain" },
      { text: "scammer got my number", type: "pain" },
      { text: "data broker removal", type: "pain" },
      { text: "best identity protection", type: "blurred" },
      { text: "is Norton worth it", type: "blurred" },
      { text: "LifeLock vs Aura", type: "blurred" },
      { text: "how do I protect my parents online", type: "blurred" },
      { text: "family digital safety app", type: "blurred" },
      { text: "cancel data broker subscriptions", type: "blurred" },
    ],
    ctaTitle: "Walk away with a channel and a 30-day plan.",
    ctaSub: "One call. You'll know which channel to run first, what the first 30 days look like, and what winning actually looks like for Lifeguard.",
  },
  {
    id: "lifeguard-v2",
    company: "Lifeguard",
    industry: "Consumer Digital Safety",
    date: "May 1, 2026",
    stats: [
      { number: "$4.8B", color: "amber", label: "Lost by elderly Americans to online fraud in 2024 — up 43% year over year. The market is real and growing." },
      { number: "700%", color: "blue", label: "Surge in deepfake video scams in 2025. The tools families are using weren't built for this." },
      { number: "0", color: "ink", label: "Competitors showing up consistently in the communities where your buyers are most active right now." },
    ],
    communitiesCallout: "The adult child — age 35–55, worried about their parent — is your actual buyer. They're not browsing casually. They're searching Reddit right now after a close call, looking for something that just works. None of Lifeguard's competitors are in these conversations.",
    communityReach: "24.5M",
    communityReachLabel: "Members across the four subreddits where Lifeguard's buyers are most active — and most afraid",
    communities: [
      { name: "r/Scams", url: "https://reddit.com/r/Scams", signal: "Hot", activity: 95, members: "~1M" },
      { name: "r/cybersecurity", url: "https://reddit.com/r/cybersecurity", signal: "Hot", activity: 80, members: "1.1M+" },
      { name: "r/privacy", url: "https://reddit.com/r/privacy", signal: "High", activity: 70, members: "1.4M+" },
      { name: "r/personalfinance", url: "https://reddit.com/r/personalfinance", signal: "High", activity: 65, members: "21M+" },
    ],
    channelsCallout: "Three high-leverage channels are sitting completely open: the communities where buyers are already in pain, the email list nobody's building, and YouTube — where families search 'how to protect my mom from scams' and find nothing from Lifeguard. Aura has 1M monthly SEO visitors but no presence in any of these.",
    channels: [
      { name: "Reddit Community Presence", note: "Buyers active daily in r/Scams and r/cybersecurity after close calls. No competitor showing up consistently. Answer 3–5 posts a week — no pitching, just useful. Wide open.", status: "Untapped", score: 9.2 },
      { name: "Email Newsletter", note: "Aura's primary retention and upsell channel. Lifeguard has no email program at all. A weekly AI scam alert — real threats, plain language — builds owned audience and converts at a different rate than paid.", status: "Untapped", score: 8.6 },
      { name: "Referral at the Fear Moment", note: "When Lifeguard catches something, that's the moment someone tells their family. Trigger a share prompt then — not on the settings page. Referral from a real event converts differently than a generic invite link.", status: "Untapped", score: 8.8 },
      { name: "YouTube / Video", note: "Families search YouTube for 'how to protect parents from scams' and 'AI voice cloning scam.' Zero Lifeguard content exists there. Aura has a channel. The gap is wide.", status: "Untapped", score: 7.8 },
      { name: "Founder Content (LinkedIn / X)", note: "Consumer safety content trends corporate and technical. A founder voice writing about real scam patterns in plain language — for families, not CISOs — is an opening nobody's taken.", status: "Untapped", score: 7.9 },
      { name: "Facebook (Paid + Organic)", note: "Custom Audiences already running. No organic community presence to warm the paid traffic landing in cold.", status: "Partial", score: 6.4 },
      { name: "SEO / Content Clusters", note: "The keyword opportunity around AI scam queries is wide open and largely uncontested. Build clusters around the exact phrases buyers search when they're in pain. Compounding channel — start now.", status: "Long-term", score: 5.2 },
    ],
    competitorsCallout: "Aura, Norton, and McAfee were all built before AI scams existed. Their tools monitor and restore — they don't prevent. Lifeguard's wedge is the category itself: built for the threats older tools were never designed to catch.",
    competitors: [
      { name: "Aura", doing: ["SEO blog (~1M monthly visitors)", "YouTube", "Email retention"], missing: ["No Reddit presence", "No founder voice", "Reactive — not built for AI scams"] },
      { name: "Norton / LifeLock", doing: ["Paid ads", "Review site presence", "Identity restoration"], missing: ["No organic community", "Built for yesterday's threats", "Enterprise tone"] },
      { name: "McAfee", doing: ["Paid ads", "Comparison content", "Influencer"], missing: ["No Reddit", "No video", "Corporate and cold"] },
      { name: "Guardio", doing: ["Browser extension", "Safe browsing"], missing: ["Browser-only", "No SMS/email/voice coverage", "Reactive not autonomous"] },
      { name: "Lifeguard", doing: ["Autonomous AI agents across SMS, email, browsing, identity", "Built specifically for AI scams"], missing: ["Reddit + email newsletter + YouTube — the three channels competitors haven't touched"], isOpportunity: true },
    ],
    experimentsCallout: "Start where buyers are already in pain and no one is showing up. Then build the owned channel that turns one-time visitors into an audience you keep.",
    experiments: [
      {
        title: "Reddit presence in r/Scams and r/cybersecurity",
        desc: `Answer 3–5 posts per week where people describe an active scam attempt or ask how to protect a family member. No pitching. Just specific, useful answers in plain language. After 3 weeks, DM the people you helped: "Happy to dig deeper if useful." Warm leads from cold context — and every answer builds brand visibility in the thread.`,
        tags: ["Week 1–4", "Low effort", "Community"],
        signal: "High signal",
      },
      {
        title: "Weekly AI scam alert newsletter",
        desc: `A simple email sent every week: one real scam trend, what to watch for, one thing families can do right now. Low production cost. High value to subscribers. Builds an owned list that no algorithm can take away. This is the channel Aura uses for retention and upsell — Lifeguard has nothing equivalent yet.`,
        tags: ["Week 2–6", "Low-medium effort", "Email"],
        signal: "Compounds",
      },
      {
        title: "Free scam risk assessment",
        desc: `A simple tool or quiz: "How exposed is your family to AI scams?" Asks 5 questions, shows a score, and recommends next steps. Top-of-funnel lead gen that doesn't ask for a credit card first. Captures the adult child who's worried but not yet ready to subscribe — and gives Lifeguard an email before they close the tab.`,
        tags: ["Week 3–8", "Medium effort", "Lead gen"],
        signal: "High signal",
      },
    ],
    experimentsUnlockTitle: "You leave this call knowing exactly which channel to run first and what to measure — no guessing.",
    experimentsUnlockSub: "One focused session replaces weeks of trying to figure out where to start. We'll sequence the three, pick the first, and set a 30-day measure so you know if it's working.",
    keywordsDesc: "The exact phrases Lifeguard's buyers search when they're in pain — and the queries that are wide open from an SEO standpoint right now.",
    keywords: [
      { text: "my mom almost got scammed", type: "pain" },
      { text: "my dad clicked a link", type: "pain" },
      { text: "she almost wired money to a scammer", type: "pain" },
      { text: "my info was in a data breach", type: "pain" },
      { text: "think I've been phished", type: "pain" },
      { text: "scammer got my number", type: "pain" },
      { text: "got a suspicious text", type: "pain" },
      { text: "just got a fraud alert", type: "trigger" },
      { text: "my credit card was compromised", type: "trigger" },
      { text: "someone opened an account in my name", type: "trigger" },
      { text: "data breach notification email", type: "trigger" },
      { text: "how do I freeze my credit", type: "trigger" },
      { text: "how to protect elderly parents from phone scams", type: "blurred" },
      { text: "best app to protect mom from scams", type: "blurred" },
      { text: "AI voice cloning scam protection", type: "blurred" },
      { text: "how do I protect my parents online", type: "blurred" },
      { text: "LifeLock vs Aura", type: "blurred" },
      { text: "is Norton worth it", type: "blurred" },
      { text: "family digital safety app", type: "blurred" },
      { text: "data broker removal", type: "blurred" },
    ],
    ctaTitle: "Walk away with a channel and a 30-day plan.",
    ctaSub: "One call. You'll know which channel to run first, what the first 30 days look like, and what winning actually looks like for Lifeguard.",
  },
  {
    id: "aleph-lab",
    company: "Aleph Lab",
    industry: "Kids Language Learning / EdTech",
    date: "May 4, 2026",
    stats: [
      { number: "20.2M", color: "amber", label: "Members across the four subreddits where multilingual parents and Minecraft families are most active right now" },
      { number: "3", color: "blue", label: "High-signal channels not documented in any competitor's public strategy — Reddit, Minecraft creators, founder content" },
      { number: "30", color: "ink", label: "Days to a working acquisition channel from a standing start" },
    ],
    communitiesCallout: "Parents raising bilingual kids are on Reddit daily, asking what actually sticks and what their kids will use past week two. The Minecraft crossover is a real opening: conversations about language learning exist in r/Minecraft, and nobody is showing up there with a product that fits.",
    communityReach: "20.2M",
    communityReachLabel: "Members across the four communities where Aleph Lab's buyers are most active",
    communities: [
      { name: "r/multilingualparenting", url: "https://reddit.com/r/multilingualparenting", signal: "Hot", activity: 88, members: "~26K" },
      { name: "r/languagelearning", url: "https://reddit.com/r/languagelearning", signal: "High", activity: 78, members: "~3.3M" },
      { name: "r/Parenting", url: "https://reddit.com/r/Parenting", signal: "High", activity: 72, members: "~8.2M" },
      { name: "r/Minecraft", url: "https://reddit.com/r/Minecraft", signal: "High", activity: 68, members: "~8.7M" },
    ],
    channelsCallout: "Consumer edtech at YC stage gets pulled toward Facebook ads and parent influencer deals. The faster signal comes from being in the communities where parents are already describing the exact problem Aleph Kids solves — and none of the competitors are there.",
    channels: [
      { name: "Reddit Community Presence", note: "Parents in r/multilingualparenting and r/languagelearning ask exactly what Aleph Kids solves. No competitor shows up there consistently. Answer 3–5 posts a week — no pitching, just useful.", status: "Untapped", score: 9.1 },
      { name: "Minecraft Creator / Family YouTube", note: "Family Minecraft YouTubers with multilingual audiences can demo Annie to parents and kids at once. Not a named channel in any competitor's documented strategy.", status: "Untapped", score: 8.7 },
      { name: "Founder Content (LinkedIn / X)", note: "The immigrant-tutoring-kids-in-Minecraft origin story is specific enough to cut through. Written as Joseph, not as a brand. No EdTech company is doing this.", status: "Untapped", score: 8.2 },
      { name: "Facebook (Paid)", note: "A reasonable start for paid targeting. No documented organic parent community presence to warm the traffic landing in cold.", status: "Partial", score: 5.8 },
      { name: "App Store / SEO", note: "Worth building once session volume is higher. Compounding channel — start planting now but not the first experiment.", status: "Long-term", score: 3.9 },
    ],
    competitorsCallout: "Duolingo, Lingokids, and Outschool each dominate one channel. None of them are inside the communities where multilingual parents actually talk to each other, and none have touched the Minecraft angle.",
    competitors: [
      { name: "Duolingo", doing: ["TikTok organic (viral mascot format)", "PR stunts", "In-app notifications"], missing: ["No documented Reddit or parent community presence", "Not game-embedded"] },
      { name: "Lingokids", doing: ["YouTube (2.8M subscribers)", "TikTok paid", "Brand partnerships"], missing: ["No Minecraft crossover", "No bilingual parent community focus", "Not a conversation-first product"] },
      { name: "Outschool", doing: ["Facebook ads", "SEO", "Email nurture", "Referral program"], missing: ["No Minecraft angle", "No multilingual parent community focus", "Marketplace model, not companion"] },
      { name: "Aleph Lab", doing: ["Own the gap"], missing: ["Reddit multilingual parent communities and Minecraft-native content — neither in any competitor's documented strategy"], isOpportunity: true },
    ],
    experimentsCallout: "Start where intent is highest and competition is lowest. Multilingual parent communities on Reddit are full of people asking what actually works. Then go to where the product already lives.",
    experiments: [
      {
        title: "Reddit presence in r/multilingualparenting and r/languagelearning",
        desc: "Answer 3–5 posts per week where parents ask how to get their kids to practice consistently or which apps actually stick. No pitching. Specific, useful answers from someone who has actually tutored kids inside Minecraft. After a few weeks, follow up with the people you helped.",
        tags: ["Week 1–4", "Low effort", "Community"],
        signal: "High signal",
      },
      {
        title: "Minecraft creator outreach",
        desc: "Find 5–10 family-focused Minecraft YouTubers or streamers with multilingual or international audiences. Send a real message, offer a demo session, or ask if they'd let their kid try Annie on camera. One creator with the right audience reaches parents and kids at the same time — in a context where the product makes immediate sense.",
        tags: ["Week 2–6", "Medium effort", "Creator"],
        signal: "High signal",
      },
      {
        title: "Founder content for multilingual parents",
        desc: "Two posts per week on LinkedIn or X as Joseph. Specific moments from inside the product: what a kid said during a session, what a parent noticed after two weeks, how the tutoring-in-Minecraft method came to exist. Not language app marketing. The immigrant-turned-tutor-turned-founder story has an authenticity no EdTech brand voice can replicate.",
        tags: ["Week 3 onwards", "Consistent effort", "Content"],
        signal: "Compounds",
      },
    ],
    experimentsUnlockTitle: "You leave this call knowing exactly which channel to run first and what to measure — no guessing.",
    experimentsUnlockSub: "One focused session replaces weeks of trying to figure out where to start. We'll sequence the three, pick the first, and set a 30-day measure so you know if it's working.",
    keywordsDesc: "The exact phrases Aleph Lab's buyers use when they're in the problem. Monitor these weekly on Reddit, LinkedIn, and X.",
    keywords: [
      { text: "my kid is obsessed with Minecraft can I use that somehow", type: "trigger" },
      { text: "we moved countries and my kids are losing their first language", type: "trigger" },
      { text: "grandparents only speak [language] and kids can't talk to them", type: "trigger" },
      { text: "just enrolled in dual language program need a supplement", type: "trigger" },
      { text: "starting to homeschool and want to add language", type: "trigger" },
      { text: "my kid refuses to practice", type: "pain" },
      { text: "how do I get my child to actually speak the language", type: "pain" },
      { text: "bilingual kid only responds in English now", type: "pain" },
      { text: "heritage language is fading", type: "pain" },
      { text: "language app my kid won't touch after two weeks", type: "pain" },
      { text: "raising bilingual kids what actually works", type: "pain" },
      { text: "can't get my kid to study for more than five minutes", type: "pain" },
      { text: "best language app for kids", type: "blurred" },
      { text: "Duolingo kids alternative", type: "blurred" },
      { text: "how to teach kids a second language at home", type: "blurred" },
      { text: "educational Minecraft servers", type: "blurred" },
      { text: "language learning through games", type: "blurred" },
      { text: "screen time that's actually educational", type: "blurred" },
    ],
    ctaTitle: "Walk away with a channel and a 30-day plan.",
    ctaSub: "One call. You'll know which channel to run first, what the first 30 days look like, and what winning actually looks like for Aleph Lab.",
  },
];
