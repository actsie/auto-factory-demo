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
    experimentsUnlockTitle: "We'd test all three and see what actually works for Lifeguard.",
    experimentsUnlockSub: "For experiments 2 and 3, the call would mostly be about figuring out the right order, the messaging, and what we should measure so we're not just guessing.",
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
    ctaTitle: "Let's figure out the best place to start.",
    ctaSub: "I'll walk you through the channel I'd prioritize for Lifeguard and the first 30 days of tests I'd run.",
  },
];
