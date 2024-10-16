interface Work {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  accomplishments: string[];
  domains: string[];
  images: string[];
}

const sayari = {
  companyName: "Sayari",
  position: "Principal Software Engineer",
  startDate: "Feb 2024",
  endDate: "Present",
  accomplishments: [
    "Rearchitected front end applications to make them more scalable and maintainable.",
    "Migrated codebase to use a monorepo to introduce shared / typed api contracts.",
    "Led development on company’s second product offering (Map).",
    "Introduced a feature flag system to help move towards continuous deployment.",
    "Revamped engineering practices: proper Typescript typings, more timely code reviews, better util patterns to make code more discoverable, pushed to move to SCSS modules, Slack alerts to notify failed builds, enforced new components work off of a variation pattern rather than being infinitely customizable to reduce development time, etc.",
    "Introduced a new schema validator (Zod) and created a new custom form system.",
    "Introduced pods to make teams both scalable and autonomous.",
    "Built better tooling to support faster development: auto-recovering kubernetes port forwarding and storybook to custom theme CSS Chrome extension.",
    "Created front end practice meeting to keep devs in sync about changes / vote on changes.",
  ],
  images: [
    "Sayari1.png",
    "Sayari2.png",
    "Sayari3.png",
    "Sayari4.png",
    "Sayari5.png",
    "Sayari6.png",
    "Sayari7.png",
  ],
  domains: ["Sayari.com"],
};

const freelance = {
  companyName: "Freelance",
  position: "Principal Software Engineer",
  startDate: "Apr 2023",
  endDate: "Feb 2024",
  accomplishments: [
    "Built out products for multiple startups and went through YC.",
    "Onbrand - product lifecycle management for the fashion industry.",
    "Sibble & Associates - viability reports for startups to help them raise funds.",
    "Trayd - same day payroll for construction workers.",
    "Upwell - invoicing automation for trucking / logistics.",
  ],
  images: [
    "Onbrand1.png",
    "Onbrand2.png",
    "Trayd1.png",
    "Trayd2.png",
    "Upwell1.jpg",
    "Upwell2.jpg",
  ],
  domains: [
    "OnbrandPLM.com",
    "BuildTrayd.com",
    "SibbleAssociates.com",
    "Upwell.com",
  ],
};

const microsoft = {
  companyName: "Microsoft",
  position: "Principal Software Engineer / Lead",
  startDate: "May 2021",
  endDate: "Apr 2023",
  accomplishments: [
    "Led security, web, and devops related projects.",
    "Increased communication and teamwork within the immediate team.",
    "Reduced PR turn over time within the Azure organization.",
    "Restructured all teams to be full-stack within the organization.",
    "Evaluated new hardware for developers in the organization.",
  ],
  images: ["Microsoft1.png", "Microsoft2.png"],
  domains: ["Portal.Azure.com"],
};

const rocket = {
  companyName: "Rocket Insights",
  position: "Director of Engineering",
  startDate: "Nov 2017",
  endDate: "May 2021",
  accomplishments: [
    "Oversaw 60+ engineers.",
    "Led and launched over 15 product across many industries.",
    "Hired the second generation of engineers.",
    "Expanded the company to the west coast.",
    "Created a framework that's used at multiple clients and helped many of them build or scale their engineering practices.",
  ],
  images: [],
  domains: [],
};

const buildium = {
  companyName: "Buildium",
  position: "Director of Engineering",
  startDate: "Dec 2013",
  endDate: "Nov 2017",
  accomplishments: [
    "Managed and led multiple teams.",
    "Increased predictability across teams.",
    "Completely revamped front-end practices.",
    "Migrated to AWS.",
    "Built out the devops team and practices.",
    "Led the organization for most security bounties.",
  ],
  images: [],
  domains: [],
};

const rls = {
  companyName: "RLS2000.com",
  position: "CTO",
  startDate: "Nov 2010",
  endDate: "Dec 2013",
  accomplishments: [
    "Led several greenfield projects, with ownership over engineering and IT.",
    "Migrated servers to a scalable architecture with full redundancy and high availability.",
    "Modernized IT and development practices.",
  ],
  images: [],
  domains: [],
};

const tsd = {
  companyName: "TSD",
  position: "Lead / Senior Software Engineer",
  startDate: "Nov 2012",
  endDate: "Jun 2013",
  accomplishments: [
    "Led development on TSD Loaner.",
    "Architected new projects (WebDRIVE and first mobile apps).",
    "Introduced responsive web design.",
    "Revamped / designed the new UI for Loaner.",
    "Identified and fixed major security issues.",
    "Improved engineering practices and company culture.",
    "Oversaw public website development.",
  ],
  images: [],
  domains: [],
};

const emc = {
  companyName: "EMC",
  position: "Software Engineer",
  startDate: "Jan 2007",
  endDate: "Nov 2010",
  accomplishments: [
    "Ownership, development, and administration of various 1st and 3rd party webs apps and tools.",
  ],
  images: [],
  domains: [],
};

const cdu = {
  companyName: "Computers Down Under",
  position: "Bench Manager",
  startDate: "Oct 2003",
  endDate: "Dec 2007",
  accomplishments: [
    "Managed the 'front' of the store (everything except finances).",
    "Oversaw other technicians.",
    "Created / optimized processes to increase profitability, productivity, and quality.",
  ],
  images: [],
  domains: [],
};

export const WORK_HISTORY: Work[] = [
  sayari,
  freelance,
  microsoft,
  rocket,
  buildium,
  rls,
  tsd,
  emc,
  cdu,
];
