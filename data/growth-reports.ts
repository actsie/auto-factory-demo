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
    id: "aikido-technologies",
    company: "Aikido Technologies",
    industry: "AI Infrastructure / Floating Offshore Datacenters",
    date: "May 4, 2026",
    stats: [
      { number: "4.9M+", color: "amber", label: "combined reach across the four communities where data center buyers, energy developers, and sovereign AI decision-makers are most active" },
      { number: "3", color: "blue", label: "untapped channels with no documented competition in this space" },
      { number: "7", color: "ink", label: "days to first signal from LinkedIn founder content" },
    ],
    communitiesCallout: "Three distinct buyer segments, three very different corners of the internet. Data center practitioners are deep in r/datacenter threading on transformer lead times and grid queue delays. Energy developers and grid planners are in r/energy. The sovereign AI narrative is moving fast in r/geopolitics, where national compute independence is being treated as a defense spending category, not an IT procurement question.",
    communityReach: "4.9M",
    communityReachLabel: "combined reach across 4 communities",
    communities: [
      { name: "r/datacenter", url: "https://reddit.com/r/datacenter", signal: "Hot", activity: 90, members: "37K" },
      { name: "r/energy", url: "https://reddit.com/r/energy", signal: "High", activity: 70, members: "247K" },
      { name: "r/geopolitics", url: "https://reddit.com/r/geopolitics", signal: "High", activity: 75, members: "732K" },
      { name: "r/singularity", url: "https://reddit.com/r/singularity", signal: "High", activity: 65, members: "3.9M+" },
    ],
    channelsCallout: "Aikido has real press traction from the AO60DC launch but no content engine sustaining that visibility between milestones. The window before the 2027 Norway demo is the time to build it, before every competitor is pitching the same story.",
    channels: [
      { name: "LinkedIn (founder voice)", note: "Sam has the credibility and the story. No consistent founder posting documented. Fastest channel to establish.", status: "Untapped", score: 90 },
      { name: "Reddit engagement", note: "r/datacenter and r/energy have active threads on exactly Aikido's problem. Not a documented channel in any competitor's strategy.", status: "Untapped", score: 82 },
      { name: "Owned editorial", note: "No competitor runs an SEO-optimized blog. Plain-language explainer content on offshore compute economics is open territory.", status: "Untapped", score: 75 },
      { name: "Trade press", note: "TechCrunch, Bloomberg, Data Center Dynamics are already covering. A proactive pitch strategy for between-milestone moments is missing.", status: "Partial", score: 55 },
      { name: "Conferences", note: "DatacenterDynamics summits and offshore wind events are the right rooms. Worth booking now for months 2 and 3.", status: "Long-term", score: 40 },
    ],
    competitorsCallout: "LinkedIn and trade press are where all three competitors operate. Reddit, podcasts, and owned editorial are absent from every documented strategy in this space.",
    competitors: [
      { name: "Nautilus Data Technologies", doing: ["LinkedIn (product milestones)", "Trade press (Data Center Dynamics, Yahoo Finance)", "Trade shows (Datacloud Global Congress)"], missing: ["Reddit not a documented channel", "Podcast not documented", "Owned editorial partial at best"] },
      { name: "HiCloud", doing: ["LinkedIn (milestone posts)", "Xinhua state media", "International trade press coverage"], missing: ["Reddit not documented", "YouTube not documented in English", "Owned editorial in English not found"] },
      { name: "Keppel Data Centres", doing: ["LinkedIn", "YouTube (CEO interviews, facility tours)", "Conference speaking (Cloud Expo Asia)"], missing: ["Reddit not documented", "Podcast not documented", "SEO editorial blog not found"] },
      { name: "Aikido Technologies", doing: ["Own the gap"], missing: ["Reddit engagement, founder editorial voice, and podcast circuit — three channels with no documented competition in this space"], isOpportunity: true },
    ],
    experimentsCallout: "Start with the channel that compounds fastest. LinkedIn founder voice goes first because decision-makers in energy and government follow founders before they follow companies, and the audience you build there becomes the warm room for press, investors, and inbound pipeline.",
    experiments: [
      {
        title: "Sam's LinkedIn founder voice",
        desc: "Post 2-3 times per week on AI compute scarcity, offshore wind economics, and sovereign AI infrastructure. Month one is about reputation, not reach. The goal is that when a sovereign AI program director or infrastructure procurement lead finds Aikido through press or a partner intro, they already know who Sam is.",
        tags: ["LinkedIn", "Founder voice", "2-3x/week"],
        signal: "High signal",
      },
      {
        title: "Reddit community presence",
        desc: "Engage in active threads on r/datacenter and r/energy around power scarcity and stranded offshore wind assets. Not product posts — genuine contributions to conversations where Aikido's model is the natural answer. The skeptical framing already circulating in these communities is the exact perception gap to close.",
        tags: ["Reddit", "r/datacenter", "r/energy"],
        signal: "High signal",
      },
      {
        title: "Owned explainer content",
        desc: "One 800-word article per week on the mechanics of offshore compute: how ocean cooling works, what stranded wind assets cost operators, why sovereign buyers can't use hyperscalers. No competitor has a documented editorial strategy here. This content feeds LinkedIn and gives press a reference point between milestones.",
        tags: ["Blog", "SEO", "1x/week"],
        signal: "Compounds",
      },
    ],
    experimentsUnlockTitle: "You leave this call knowing exactly which channel to run first and what to measure — no guessing.",
    experimentsUnlockSub: "One focused session replaces weeks of trying to figure out where to start. We'll sequence the three, pick the first, and set a 30-day measure so you know if it's working.",
    keywordsDesc: "These are the phrases to monitor weekly on Reddit, LinkedIn, and X. They appear in active threads where Aikido's buyers are describing the problem in their own words.",
    keywords: [
      { text: "sovereign AI compute strategy", type: "trigger" },
      { text: "national datacenter independence", type: "trigger" },
      { text: "floating wind co-location", type: "trigger" },
      { text: "AI infrastructure without hyperscaler", type: "trigger" },
      { text: "sub-2-year datacenter deployment", type: "trigger" },
      { text: "GW-scale compute capacity", type: "trigger" },
      { text: "offshore renewable powered compute", type: "trigger" },
      { text: "transformer lead times 2-5 years", type: "pain" },
      { text: "grid interconnection queue backlog", type: "pain" },
      { text: "behind-the-meter power alternatives", type: "pain" },
      { text: "offshore wind curtailment revenue", type: "pain" },
      { text: "stranded wind asset monetization", type: "pain" },
      { text: "permitting delays blocking datacenter build", type: "pain" },
      { text: "no available grid capacity", type: "pain" },
      { text: "cooling costs per MW", type: "pain" },
      { text: "planning new datacenter campus", type: "blurred" },
      { text: "RFI for compute infrastructure", type: "blurred" },
      { text: "evaluating colocation alternatives", type: "blurred" },
      { text: "offshore wind project stalled", type: "blurred" },
      { text: "looking for load co-location partner", type: "blurred" },
    ],
    ctaTitle: "Walk away with a channel and a 30-day plan.",
    ctaSub: "One call. You'll know which channel to run first, what the first 30 days look like, and what winning actually looks like for Aikido Technologies.",
  },
  {
    id: "athlyt",
    company: "ATHLYT",
    industry: "Sports Tech / NIL Marketplace",
    date: "May 4, 2026",
    stats: [
      { number: "14.4M+", color: "amber", label: "combined reach across the four communities where college athletes and local brand owners are most active right now" },
      { number: "3", color: "blue", label: "untapped channels with no documented competition from the three main NIL platforms" },
      { number: "7", color: "ink", label: "days to first signal from Ray Austin's founder content" },
    ],
    communitiesCallout: "Both sides of ATHLYT's marketplace are active on Reddit right now. On the athlete side, NIL discussions happen inside sport-specific communities and in r/CFB, a 4.4M-member subreddit where revenue sharing and brand deal access dominate the conversation in 2026. On the brand side, local and regional business owners are active in r/smallbusiness and r/Entrepreneur, asking exactly how to run influencer campaigns without paying enterprise rates.",
    communityReach: "14.4M",
    communityReachLabel: "combined reach across 4 communities",
    communities: [
      { name: "r/CFB", url: "https://reddit.com/r/CFB", signal: "Hot", activity: 95, members: "4.4M+" },
      { name: "r/CollegeBasketball", url: "https://reddit.com/r/CollegeBasketball", signal: "High", activity: 75, members: "3M+" },
      { name: "r/smallbusiness", url: "https://reddit.com/r/smallbusiness", signal: "High", activity: 80, members: "2M+" },
      { name: "r/Entrepreneur", url: "https://reddit.com/r/Entrepreneur", signal: "Mid", activity: 60, members: "5M+" },
    ],
    channelsCallout: "ATHLYT has two distinct buyer audiences and very different channels that reach each. The athlete side needs institutional trust and peer-to-peer reach. The brand side needs education and proof of ROI. Neither channel is being fully worked right now.",
    channels: [
      { name: "Athletic department partnerships", note: "Proven with Boise State and Tennessee — but only 2 schools. The model works. The channel needs to be systematically expanded — one signed AD unlocks 200-500 athletes at once.", status: "Untapped", score: 92 },
      { name: "Ray Austin personal brand (LinkedIn + X)", note: "NFL credibility and the '98% of athletes get nothing' narrative is unused distribution. No competitor has a founder voice this differentiated.", status: "Untapped", score: 88 },
      { name: "Reddit community presence", note: "Athletes in r/CFB and r/CollegeBasketball are asking NIL questions with no platform showing up to answer. Brand owners in r/smallbusiness are asking influencer questions. Both audiences, zero documented competition.", status: "Untapped", score: 80 },
      { name: "NIL education content / SEO", note: "Competitors run athlete education blogs. ATHLYT has nothing published. The 'D2 athlete' and 'non-revenue sport NIL' keyword space is open.", status: "Partial", score: 50 },
      { name: "Direct brand outreach", note: "Worth building, but only after athlete supply hits critical mass. Brands won't commit if the athlete pool is too thin to deliver.", status: "Long-term", score: 35 },
    ],
    competitorsCallout: "All three major competitors are running institutional content marketing, targeting athletic departments and enterprise brands. None has staked out the '98% of athletes' narrative publicly, and none is documented as doing Reddit community engagement.",
    competitors: [
      { name: "Opendorse", doing: ["Active blog at biz.opendorse.com", "Partnership announcements on LinkedIn", "Athletic department-facing content"], missing: ["Not targeting small businesses", "No athlete-advocate content from a founder voice", "Blog is institutional, not peer-to-peer"] },
      { name: "MOGL", doing: ["Active blog targeting brands", "AI positioning for brand buyers", "NIL Feed community feature in app"], missing: ["Not a documented channel in small-business communities", "Brand content skews enterprise", "No athlete-advocate voice"] },
      { name: "NIL Club", doing: ["Heavy blog at nilclub.com/blog", "Named most trusted NIL platform in 2025 SurveyNow index", "650K athletes"], missing: ["Performance-based model requires scale to work", "No documented outreach to non-elite athlete segments", "Content targets large brands"] },
      { name: "ATHLYT", doing: ["Own the gap"], missing: ["Athlete-advocate founder voice (Ray Austin) + small-business NIL education + non-elite athlete community content — none exists in any competitor's documented strategy"], isOpportunity: true },
    ],
    experimentsCallout: "Start with the channel that builds both supply and credibility at the same time. The athlete count problem and the brand problem are connected — but the institutional partnership channel moves both at once.",
    experiments: [
      {
        title: "Athletic department partnership sprint",
        desc: "Reach out to 10 Division II athletic directors per week using the Boise State and Tennessee partnerships as the proof point. Offer a free pilot — athletes join free, the school gets a revenue share on completed deals, and you agree to run one block deal campaign within 60 days. One signed AD unlocks 200-500 athletes at once.",
        tags: ["BD outreach", "D2 schools", "10 ADs/week"],
        signal: "High signal",
      },
      {
        title: "Ray Austin LinkedIn and X (2 posts/week)",
        desc: "Ray posts twice a week using the '98% of athletes get nothing from NIL' angle. Real takes, athlete-advocate voice, specific scenarios. No product pitches — just credibility and narrative. Each post is distribution for the platform without spending a dollar.",
        tags: ["LinkedIn", "X", "Founder voice", "2x/week"],
        signal: "Compounds",
      },
      {
        title: "Reddit presence in r/CFB and r/smallbusiness",
        desc: "Answer 3 questions per week in r/CFB related to NIL and how brand deals work for non-star athletes. In r/smallbusiness, answer questions about influencer marketing for local businesses. No pitching — just useful, specific answers. After 4 weeks, DM the people you've helped.",
        tags: ["Reddit", "r/CFB", "r/smallbusiness"],
        signal: "High signal",
      },
    ],
    experimentsUnlockTitle: "You leave this call knowing exactly which channel to run first and what to measure — no guessing.",
    experimentsUnlockSub: "One focused session replaces weeks of trying to figure out where to start. We'll sequence the three, pick the first, and set a 30-day measure so you know if it's working.",
    keywordsDesc: "These are the phrases to monitor weekly on Reddit, LinkedIn, and X — they signal someone is in the exact moment ATHLYT can help.",
    keywords: [
      { text: "how do I get NIL deals", type: "trigger" },
      { text: "NIL for D2 athletes", type: "trigger" },
      { text: "NIL for non-revenue sports", type: "trigger" },
      { text: "first NIL deal", type: "trigger" },
      { text: "how to find brands as an athlete", type: "trigger" },
      { text: "influencer marketing for local business", type: "trigger" },
      { text: "how to work with college athletes", type: "trigger" },
      { text: "NIL only benefits football players", type: "pain" },
      { text: "not famous enough for brand deals", type: "pain" },
      { text: "brand stopped responding", type: "pain" },
      { text: "I signed up but got nothing", type: "pain" },
      { text: "NIL is only for stars", type: "pain" },
      { text: "payment delays", type: "pain" },
      { text: "just 10K followers not worth it", type: "pain" },
      { text: "my school just signed with a NIL platform", type: "blurred" },
      { text: "looking into NIL for my athletes", type: "blurred" },
      { text: "trying to figure out influencer marketing budget", type: "blurred" },
      { text: "college students are our target audience", type: "blurred" },
    ],
    ctaTitle: "Walk away with a channel and a 30-day plan.",
    ctaSub: "One call. You'll know which channel to run first, what the first 30 days look like, and what winning actually looks like for ATHLYT.",
  },
  {
    id: "blueprints-ai",
    company: "Blueprints AI",
    industry: "Architecture / AEC",
    date: "May 4, 2026",
    stats: [
      { number: "1.9M+", color: "amber", label: "combined reach across the four communities where architects, developers, and real estate investors are actively discussing the documentation grind" },
      { number: "3", color: "blue", label: "untapped channels with no documented competition from Snaptrude, Maket.ai, or Togal.AI" },
      { number: "7", color: "ink", label: "days to first signal from AL Dram's LinkedIn practitioner content" },
    ],
    communitiesCallout: "Architects and developers are actively complaining about the documentation grind in forums and subreddits. No AI drafting tool has shown up in those conversations yet.",
    communityReach: "1.9M",
    communityReachLabel: "combined reach across 4 communities",
    communities: [
      { name: "r/Architects", url: "https://reddit.com/r/Architects", signal: "High", activity: 85, members: "64K" },
      { name: "r/architecture", url: "https://reddit.com/r/architecture", signal: "Mid", activity: 55, members: "332K" },
      { name: "r/realestateinvesting", url: "https://reddit.com/r/realestateinvesting", signal: "High", activity: 75, members: "1.3M+" },
      { name: "r/urbanplanning", url: "https://reddit.com/r/urbanplanning", signal: "Mid", activity: 60, members: "231K" },
    ],
    channelsCallout: "Blueprints AI has a real wedge and named enterprise clients. Buyers researching this problem won't find the product on any of the standard channels they use. The infrastructure to get found isn't built yet.",
    channels: [
      { name: "LinkedIn (founder content)", note: "AL Dram's practitioner story — 15-year architect who built the fix — is the highest-leverage content asset in the space. AEC buyers are active on LinkedIn. Personal founder content outperforms company pages at this stage.", status: "Untapped", score: 90 },
      { name: "Review sites (G2, Capterra, Product Hunt)", note: "Togal.AI has 44+ G2 reviews and manages Capterra/GetApp actively. Blueprints AI has zero listings. Buyers running software research are hitting a wall.", status: "Untapped", score: 85 },
      { name: "AEC community presence", note: "None of the three main competitors have documented community presence in architecture-specific subreddits. r/Architects is the highest professional density forum for the exact ICP.", status: "Untapped", score: 78 },
      { name: "Content / SEO", note: "Three blog posts live, two are PR announcements. 'AI tools for architects' and 'permit documentation software' are high-intent, underserved search terms.", status: "Partial", score: 50 },
      { name: "YouTube", note: "One demo video exists. Snaptrude is the only competitor actively working YouTube. Tutorial content around permit documentation workflows is an open lane, but requires consistent effort to compound.", status: "Long-term", score: 35 },
    ],
    competitorsCallout: "All three main competitors are running LinkedIn and blog/SEO. None have community presence in AEC-specific subreddits. None are writing from a founder practitioner perspective.",
    competitors: [
      { name: "Snaptrude", doing: ["Active LinkedIn (8K followers)", "SEO-oriented blog", "YouTube tutorials", "Product Hunt listing", "Own community platform"], missing: ["No documented presence in r/Architects or AEC professional forums", "No founder practitioner voice — content is product-driven, not practitioner-driven"] },
      { name: "Maket.ai", doing: ["LinkedIn company page (2.1K followers)", "Blog with tutorial content", "Basic SEO pages"], missing: ["Product Hunt not a documented channel", "No community presence", "Positioned at residential/schematic — doesn't compete on permit docs"] },
      { name: "Togal.AI", doing: ["LinkedIn most active channel (3.6K followers)", "LinkedIn Newsletter", "G2/Capterra actively managed", "SEO blog with comparison content"], missing: ["YouTube not a documented channel", "No AEC architect community presence — they're in r/estimators, not r/Architects"] },
      { name: "Blueprints AI", doing: ["Own the gap"], missing: ["Founder practitioner voice, AEC community presence, and review site listings are all unclaimed by competitors in this specific niche"], isOpportunity: true },
    ],
    experimentsCallout: "Start where trust builds fastest. The discovery infrastructure comes after.",
    experiments: [
      {
        title: "AL Dram LinkedIn: practitioner content, 3x/week",
        desc: "The founder is a 15-year architect who documented permit sets himself before automating the process. Three posts/week: one practitioner insight (the documentation problem, what the CD phase actually costs), one product proof (input-to-output, real project), one founder perspective (why this was worth building). No product announcements — just teach the problem and show the solution working.",
        tags: ["LinkedIn", "Founder voice", "3x/week"],
        signal: "High signal",
      },
      {
        title: "G2, Capterra, and Product Hunt listings",
        desc: "Togal.AI has 44+ G2 reviews and manages review sites as an active growth channel. Blueprints AI has zero listings. Buyers who find the product through LinkedIn or referral are running a parallel software research process and hitting nothing. Create verified listings, seed with 5-10 reviews from existing customers, write positioning copy that matches the ICP pain.",
        tags: ["G2", "Capterra", "Product Hunt"],
        signal: "High signal",
      },
      {
        title: "AEC community presence",
        desc: "None of the three competitors have documented presence in architecture-specific professional communities. r/Architects is the highest professional density forum for the exact ICP, and the documentation frustration is documented there in real language. Show up as a practitioner: answer questions about the CD grind, engage in permit timeline discussions, contribute to the 'do architects draw too much' conversation.",
        tags: ["Reddit", "r/Architects", "Building Code Forum"],
        signal: "Compounds",
      },
    ],
    experimentsUnlockTitle: "You leave this call knowing exactly which channel to run first and what to measure — no guessing.",
    experimentsUnlockSub: "One focused session replaces weeks of trying to figure out where to start. We'll sequence the three, pick the first, and set a 30-day measure so you know if it's working.",
    keywordsDesc: "These phrases come from real community posts. Monitor them weekly on Reddit, LinkedIn, and AEC forums.",
    keywords: [
      { text: "the quality of construction documents is appalling", type: "trigger" },
      { text: "for commercial projects it's almost unheard of for any permit to be approved on the initial submittal", type: "trigger" },
      { text: "the volleyball effect of submission, review, comment, reply, and repeat", type: "trigger" },
      { text: "projects stalling out after pushing through corrections", type: "trigger" },
      { text: "managing dozens of jurisdictions used to feel overwhelming", type: "trigger" },
      { text: "we are definitely drawing too much", type: "pain" },
      { text: "the CD phase typically runs 8-12 weeks", type: "pain" },
      { text: "drawing more drawings equals more time and additional effort", type: "pain" },
      { text: "creativity suffered, productivity slowed, and projects stretched far longer than they should have", type: "pain" },
      { text: "not glamorous work, but critical work", type: "pain" },
      { text: "the necessary grind to get a project permitted and built", type: "pain" },
      { text: "permit times cut in half", type: "blurred" },
      { text: "a 300% increase in sheet count within the last 20 years", type: "blurred" },
      { text: "takes more than half of pre-construction effort", type: "blurred" },
      { text: "pending agency — a relay race", type: "blurred" },
    ],
    ctaTitle: "Walk away with a channel and a 30-day plan.",
    ctaSub: "One call. You'll know which channel to run first, what the first 30 days look like, and what winning actually looks like for Blueprints AI.",
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
