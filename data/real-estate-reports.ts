export interface RealEstateReport {
  id: string;
  agentName: string;
  market: string;
  leadsPerWeek: number;
  monthlyPosts: {
    craigslist: number;
    facebook: number;
    fsbo: number;
    probate: number;
  };
  phone: string;
  url?: string;
}

export const realEstateReports: RealEstateReport[] = [
  {
    id: "john-doe-sf",
    agentName: "John Doe",
    market: "San Francisco, CA",
    leadsPerWeek: 143,
    monthlyPosts: {
      craigslist: 12500,
      facebook: 25400,
      fsbo: 4200,
      probate: 1800,
    },
    phone: "(415) 555-0123",
    url: "https://johndoerealestate.com",
  },
];
