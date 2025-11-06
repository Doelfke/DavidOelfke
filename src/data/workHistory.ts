interface Work {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  accomplishments: string[];
  domains: string[];
  images: string[];
}

const qloo = {
  companyName: 'Qloo',
  position: 'Leader Software Engineer',
  startDate: 'Jan 2025',
  endDate: 'Present',
  accomplishments: [
    'Led development of version 2 — the world’s first Taste AI platform.',
    'Built an onshore engineering team and modernized best practices.',
    'Developed secure dashboard sharing, multi-user editing, and in-app help systems.',
    'Migrated codebase from JavaScript to TypeScript.',
    'Resolved major architectural bottlenecks and introduced metrics tooling for continuous engineering improvement.'
  ],
  images: [],
  domains: ['Qloo.com']
};

const sayari = {
  companyName: 'Sayari',
  position: 'Principal Software Engineer',
  startDate: 'Feb 2024',
  endDate: 'Jan 2025',
  accomplishments: [
    'Rearchitected frontend apps for better scalability and maintainability.',
    'Developed the company’s first AI product to summarize large datasets, speeding analyst workflows.',
    'Built an AI-driven data pipeline to boost consolidation accuracy.',
    'Led development of the company’s second major product (Map) and migrated codebase to a shared monorepo.',
    'Implemented a feature flag system and modernized engineering practices (TypeScript, SCSS modules, Slack build alerts, CI).',
    'Introduced a pod-based team structure for faster, autonomous delivery.',
    'Created internal tools (auto-recovering Kubernetes forwarding, Storybook, custom Chrome extension) and led frontend practice initiatives.'
  ],
  images: ['Sayari1.png', 'Sayari2.png', 'Sayari3.png', 'Sayari4.png', 'Sayari5.png', 'Sayari6.png', 'Sayari7.png'],
  domains: ['Sayari.com']
};

const freelance = {
  companyName: 'Freelance',
  position: 'Principal Software Engineer',
  startDate: 'Apr 2023',
  endDate: 'Feb 2024',
  accomplishments: [
    'Built out products for multiple startups and went through YC.',
    'Onbrand - product lifecycle management for the fashion industry.',
    'Sibble & Associates - viability reports for startups to help them raise funds.',
    'Trayd - same day payroll for construction workers.',
    'Upwell - invoicing automation for trucking / logistics.'
  ],
  images: ['Onbrand1.png', 'Onbrand2.png', 'Trayd1.png', 'Trayd2.png', 'Upwell1.jpg', 'Upwell2.jpg'],
  domains: ['OnbrandPLM.com', 'BuildTrayd.com', 'SibbleAssociates.com', 'Upwell.com']
};

const microsoft = {
  companyName: 'Microsoft',
  position: 'Principal Software Engineer / Lead',
  startDate: 'May 2021',
  endDate: 'Apr 2023',
  accomplishments: [
    'Led security, web, and devops related projects.',
    'Increased communication and teamwork within the immediate team.',
    'Reduced PR turn over time within the Azure organization.',
    'Restructured all teams to be full-stack within the organization.',
    'Evaluated new hardware for developers in the organization.'
  ],
  images: ['Microsoft1.png', 'Microsoft2.png'],
  domains: ['Portal.Azure.com']
};

const rocket = {
  companyName: 'Rocket Insights',
  position: 'Principal Software Engineer',
  startDate: 'Nov 2017',
  endDate: 'May 2021',
  accomplishments: [
    'Led, built, and  launched over 15 product across many industries.',
    'Hired the second generation of engineers.',
    'Expanded the company to the west coast.',
    "Created a framework that's used at multiple clients and helped many of them build or scale their engineering practices."
  ],
  images: [],
  domains: ['RocketInsights.com', 'DeptAgency.com']
};

const buildium = {
  companyName: 'Buildium',
  position: 'Senior Software Engineering Manager',
  startDate: 'Dec 2013',
  endDate: 'Nov 2017',
  accomplishments: [
    'Lead engineer for the accounting platform.',
    'Managed and led multiple teams.',
    'Increased predictability across teams.',
    'Completely revamped front-end practices.',
    'Migrated to AWS.',
    'Built out the devops team and practices.',
    'Led the organization for most security bounties.'
  ],
  images: [],
  domains: ['Buildium.com']
};

const rls = {
  companyName: 'RLS2000.com',
  position: 'CTO',
  startDate: 'Nov 2010',
  endDate: 'Dec 2013',
  accomplishments: [
    'Led several greenfield projects, with ownership over engineering and IT.',
    'Migrated servers to a scalable architecture with full redundancy and high availability.',
    'Modernized IT and development practices.'
  ],
  images: [],
  domains: ['TryElevate.com']
};

const tsd = {
  companyName: 'TSD',
  position: 'Lead / Senior Software Engineer',
  startDate: 'Nov 2012',
  endDate: 'Jun 2013',
  accomplishments: [
    'Led development on TSD Loaner.',
    'Architected new projects (WebDRIVE and first mobile apps).',
    'Introduced responsive web design.',
    'Revamped / designed the new UI for Loaner.',
    'Identified and fixed major security issues.',
    'Improved engineering practices and company culture.',
    'Oversaw public website development.'
  ],
  images: [],
  domains: ['TSDWeb.com']
};

const emc = {
  companyName: 'EMC',
  position: 'Software Engineer',
  startDate: 'Jan 2007',
  endDate: 'Nov 2010',
  accomplishments: ['Ownership, development, and administration of various 1st and 3rd party webs apps and tools.'],
  images: [],
  domains: ['Dell.com']
};

const cdu = {
  companyName: 'Computers Down Under',
  position: 'Bench Manager',
  startDate: 'Oct 2003',
  endDate: 'Dec 2007',
  accomplishments: [
    "Managed the 'front' of the store (everything except finances).",
    'Oversaw other technicians.',
    'Created / optimized processes to increase profitability, productivity, and quality.'
  ],
  images: [],
  domains: []
};

export const WORK_HISTORY: Work[] = [qloo, sayari, freelance, microsoft, rocket, buildium, rls, tsd, emc, cdu];
