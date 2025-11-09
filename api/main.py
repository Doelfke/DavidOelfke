import os
from fastapi import FastAPI
from dotenv import load_dotenv
from langchain.agents import create_agent
from langchain_openai import ChatOpenAI

load_dotenv()

app = FastAPI(
    title="Vercel + FastAPI",
    description="Vercel + FastAPI",
    version="1.0.0",
)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "default_value")

qloo = {
    "companyName": "Qloo",
    "position": "Leader Software Engineer",
    "startDate": "Jan 2025",
    "endDate": "Present",
    "accomplishments": [
        "Led development of version 2 — the world's first Taste AI platform.",
        "Built an onshore engineering team and modernized best practices.",
        "Developed secure dashboard sharing, multi-user editing, and in-app help systems.",
        "Migrated codebase from JavaScript to TypeScript.",
        "Resolved major architectural bottlenecks and introduced metrics tooling for continuous engineering improvement."
    ],
    "domains": ["Qloo.com"]
}

sayari = {
    "companyName": "Sayari",
    "position": "Principal Software Engineer",
    "startDate": "Feb 2024",
    "endDate": "Jan 2025",
    "accomplishments": [
        "Rearchitected frontend apps for better scalability and maintainability.",
        "Developed the company's first AI product to summarize large datasets, speeding analyst workflows.",
        "Built an AI-driven data pipeline to boost consolidation accuracy.",
        "Led development of the company's second major product (Map) and migrated codebase to a shared monorepo.",
        "Implemented a feature flag system and modernized engineering practices (TypeScript, SCSS modules, Slack build alerts, CI).",
        "Introduced a pod-based team structure for faster, autonomous delivery.",
        "Created internal tools (auto-recovering Kubernetes forwarding, Storybook, custom Chrome extension) and led frontend practice initiatives."
    ],
    "domains": ["Sayari.com"]
}

freelance = {
    "companyName": "Freelance",
    "position": "Principal Software Engineer",
    "startDate": "Apr 2023",
    "endDate": "Feb 2024",
    "accomplishments": [
        "Built out products for multiple startups and went through YC.",
        "Onbrand - product lifecycle management for the fashion industry.",
        "Sibble & Associates - viability reports for startups to help them raise funds.",
        "Trayd - same day payroll for construction workers.",
        "Upwell - invoicing automation for trucking / logistics."
    ],
    "domains": ["OnbrandPLM.com", "BuildTrayd.com", "SibbleAssociates.com", "Upwell.com"]
}

microsoft = {
    "companyName": "Microsoft",
    "position": "Principal Software Engineer / Lead",
    "startDate": "May 2021",
    "endDate": "Apr 2023",
    "accomplishments": [
        "Led security, web, and devops related projects.",
        "Increased communication and teamwork within the immediate team.",
        "Reduced PR turn over time within the Azure organization.",
        "Restructured all teams to be full-stack within the organization.",
        "Evaluated new hardware for developers in the organization."
    ],
    "domains": ["Portal.Azure.com"]
}

rocket = {
    "companyName": "Rocket Insights",
    "position": "Principal Software Engineer",
    "startDate": "Nov 2017",
    "endDate": "May 2021",
    "accomplishments": [
        "Led, built, and  launched over 15 product across many industries.",
        "Hired the second generation of engineers.",
        "Expanded the company to the west coast.",
        "Created a framework that's used at multiple clients and helped many of them build or scale their engineering practices."
    ],
    "domains": ["RocketInsights.com", "DeptAgency.com"]
}

buildium = {
    "companyName": "Buildium",
    "position": "Senior Software Engineering Manager",
    "startDate": "Dec 2013",
    "endDate": "Nov 2017",
    "accomplishments": [
        "Lead engineer for the accounting platform.",
        "Managed and led multiple teams.",
        "Increased predictability across teams.",
        "Completely revamped front-end practices.",
        "Migrated to AWS.",
        "Built out the devops team and practices.",
        "Led the organization for most security bounties."
    ],
    "domains": ["Buildium.com"]
}

rls = {
    "companyName": "RLS2000.com",
    "position": "CTO",
    "startDate": "Nov 2010",
    "endDate": "Dec 2013",
    "accomplishments": [
        "Led several greenfield projects, with ownership over engineering and IT.",
        "Migrated servers to a scalable architecture with full redundancy and high availability.",
        "Modernized IT and development practices."
    ],
    "domains": ["TryElevate.com"]
}

tsd = {
    "companyName": "TSD",
    "position": "Lead / Senior Software Engineer",
    "startDate": "Nov 2012",
    "endDate": "Jun 2013",
    "accomplishments": [
        "Led development on TSD Loaner.",
        "Architected new projects (WebDRIVE and first mobile apps).",
        "Introduced responsive web design.",
        "Revamped / designed the new UI for Loaner.",
        "Identified and fixed major security issues.",
        "Improved engineering practices and company culture.",
        "Oversaw public website development."
    ],
    "domains": ["TSDWeb.com"]
}

emc = {
    "companyName": "EMC",
    "position": "Software Engineer",
    "startDate": "Jan 2007",
    "endDate": "Nov 2010",
    "accomplishments": ["Ownership, development, and administration of various 1st and 3rd party webs apps and tools."],
    "domains": ["Dell.com"]
}

cdu = {
    "companyName": "Computers Down Under",
    "position": "Bench Manager",
    "startDate": "Oct 2003",
    "endDate": "Dec 2007",
    "accomplishments": [
        "Managed the 'front' of the store (everything except finances).",
        "Oversaw other technicians.",
        "Created / optimizing processes to increase profitability, productivity, and quality."
    ],
    "domains": []
}

WORK_HISTORY = [qloo, sayari, freelance, microsoft, rocket, buildium, rls, tsd, emc, cdu]


def get_david_oelfke_info() -> dict:
    """Get information about David Oelfke."""
    return {
        "name": "David Oelfke",
        "city": "San Diego",
        "programming languages and technologies": [".NET", "AI", "Ant Design (AntD)", "AWS", "Akamai", "Amplitude", "Angular", "Apollo", "Auth0", "Azure", "Azure AD", "Backblaze", "Bash", "Bitbucket", "Bootstrap", "Brightcove", "C#", "CSS", "Class Validator", "CloudFront", "Cloudflare", "CloudWatch", "Cognito", "Contentful", "Cordova", "Datadog", "Dataloader", "Day.js", "Docker", "Elastic Bean Stalk (ELB)", "Elasticsearch", "ESLint", "Emotion", "Entity Framework", "Express.js", "Firebase", "Fly.io", "GCP", "Git", "GitHub", "GitLab", "Google Analytics", "Grafana", "GraphQL", "HTML", "Heroku", "Jade", "Java", "JavaScript", "Jeckyll", "Jest", "Jira", "jQuery", "Knockout", "Kubernetes", "LDAP", "LESS", "Lambdas", "Launch Darkly", "Lerna", "Linq", "Lodash", "Logz.io", "Lucene", "Mailgun", "Mantine", "Material UI (MUI)", "MixPanel", "Mocha", "Moment", "MongoDB", "Mongoose", "Monorepo", "MSBuild", "MSGraph", "MySQL", "Nest.js", "Netlify", "New Relic", "Next.js", "Node.js", "NPM", "Nuxt", "Open AI", "Oracle DB", "PHP", "PNPM", "Postgres", "Powershell", "Prisma", "Pug", "Python", "REST", "React", "React Hook Form", "React Query", "Redis", "Remix", "RxJS", "S3", "SCSS", "Segment", "SendGrid", "SES", "Slack", "SQS", "Styled Components", "Supabase", "Swagger", "Tailwind", "tRPC", "Turborepo", "TypeORM", "TypeScript", "Underscore", "Vercel", "Visual Basic", "Vite", "Vitest", "Vue", "WebAPI", "Webpack", "WordPress", "Yarn", "Yup", "Zod"],
        "work experience": WORK_HISTORY
    }

@app.get("/")
def read_root():
    """Root endpoint."""
    return {"message": "hi"}


@app.get("/ask/{question}")
def ask(question: str):
    """Ask a question about David Oelfke."""
    model = ChatOpenAI(
        model="gpt-5-mini",
        api_key=OPENAI_API_KEY,
    )

    system_prompt = (
        "Answer the user's questions using the provided tools. "
        "Do not use the word 'listed' in your answers. "
        "Only answer things about David Oelfke and his work experience. "
        "If the user asks about anything else, respond with "
        "'I can only answer questions about David Oelfke and his work experience.'"
    )

    agent = create_agent(
        model,
        tools=[get_david_oelfke_info],
        system_prompt=system_prompt,
    )

    response = agent.invoke({"messages": [{"role": "user", "content": question}]})

    final_message = (
        response["messages"][-1].content
        if "messages" in response and response["messages"]
        else str(response)
    )

    return {"message": final_message}