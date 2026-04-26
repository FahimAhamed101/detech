const detectedFiverrProfile = "https://www.fiverr.com/fahimweb102/";
const detectedPrimaryGigUrl = "https://www.fiverr.com/s/YRVma4z";

export const siteConfig = {
  siteName: "TomTech",
  alternateSiteName: "Tom Tech",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  defaultTitle:
    "TomTech | Web App Development, Mobile App Development, and AI Automation Agency",
  titleTemplate: "%s | TomTech",
  description:
    "TomTech is a web app development, mobile app development, and AI automation agency helping startups and businesses build custom software, MVPs, SaaS products, and workflow automation through a Fiverr-first engagement path.",
  keywords: [
    "web app development services",
    "web application development company",
    "custom software development company",
    "custom software development services",
    "mobile app development company",
    "mobile app development services",
    "web and mobile app development company",
    "AI automation agency",
    "AI development services",
    "AI engineer for business automation",
    "MERN stack development company",
    "Laravel development services",
    "Django development company",
    "FastAPI development company",
    "Flask development services",
    ".NET development company",
    "Angular development services",
    "Vue.js development company",
    "Flutter app development company",
    "React Native app development company",
    "Kotlin app development services",
    "Swift iOS app development company",
    "AI automation services",
    "business process automation services",
    "dedicated development team",
    "offshore software development company",
    "startup MVP development company",
    "SaaS application development services",
    "software outsourcing company",
  ],
};

export const fiverrProfile = {
  name: "Fahim Ahamed",
  tagline:
    "Agency-grade web, mobile, and AI engineering delivered through Fiverr",
  role: "Founder and Lead Engineer",
  profileUrl:
    process.env.NEXT_PUBLIC_FIVERR_PROFILE_URL || detectedFiverrProfile,
  primaryGigUrl:
    process.env.NEXT_PUBLIC_FIVERR_PRIMARY_GIG_URL || detectedPrimaryGigUrl,
  supportEmail: "fahimahamedweb@gmail.com",
  phone: "+8801706617723",
  location: "Gulshan, Dhaka, Bangladesh",
  locality: "Dhaka",
  region: "Dhaka",
  country: "BD",
  availability: "Available worldwide",
  responseTime: "Fast replies for qualified project inquiries",
};

export const fiverrHighlights = [
  "Build web applications, mobile apps, and automation systems with one delivery partner.",
  "Use Fiverr for clear scope, milestones, revisions, and documented communication.",
  "Start with a project brief and get a recommended stack, timeline, and delivery plan.",
];

export const fiverrGigs = [
  {
    title: "Custom Web App Development",
    category: "Web App Development",
    description:
      "Build SaaS products, dashboards, admin panels, portals, marketplaces, and internal tools using MERN, Laravel, Django, FastAPI, Flask, and .NET.",
    startingPrice: "Custom quote",
    delivery: "Project based",
    link: fiverrProfile.primaryGigUrl,
    ctaLabel: "Discuss Web App Build",
  },
  {
    title: "Mobile App Development for Flutter, React Native, Kotlin, and Swift",
    category: "Mobile App Development",
    description:
      "Launch cross-platform or native apps for startups, business workflows, ecommerce, booking, and customer-facing digital products.",
    startingPrice: "Custom quote",
    delivery: "Project based",
    link: fiverrProfile.profileUrl,
    ctaLabel: "Plan Mobile App",
  },
  {
    title: "AI Automation and Python Workflow Engineering",
    category: "AI Automation",
    description:
      "Automate lead handling, reporting, support workflows, operations, and repetitive back-office tasks with AI-assisted systems and Python automation.",
    startingPrice: "Custom quote",
    delivery: "Project based",
    link: fiverrProfile.profileUrl,
    ctaLabel: "Explore AI Automation",
  },
];

export const serviceAreas = [
  {
    title: "Web App Development",
    description:
      "Custom web app development services for SaaS founders, agencies, and established businesses that need secure, scalable software.",
    bullets: [
      "Custom dashboards, CRMs, portals, client platforms, and internal tools",
      "MERN, Laravel, Django, FastAPI, Flask, .NET, Angular, and Vue delivery",
      "API design, admin workflows, authentication, role-based access, and scalable architecture",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile app development for companies that need launch-ready products on iOS and Android.",
    bullets: [
      "Flutter and React Native development for faster product delivery",
      "Kotlin Android and Swift iOS builds for native performance requirements",
      "Mobile MVPs, ecommerce apps, booking flows, member apps, and internal business apps",
    ],
  },
  {
    title: "AI Automation Services",
    description:
      "Practical AI automation services for teams that want faster operations, better handoffs, and lower manual workload.",
    bullets: [
      "Python automation for reporting, lead routing, data cleanup, and repetitive tasks",
      "AI workflow design for support, sales operations, internal productivity, and process automation",
      "Custom integrations and lightweight tools that save team time every week",
    ],
  },
];

export const capabilityKeywords = [
  "Web app development services",
  "Web and mobile app development company",
  "Mobile app development company",
  "Custom software development company",
  "Flutter app development company",
  "React Native app development company",
  "MERN stack development company",
  "Laravel development services",
  "Django development company",
  "FastAPI development company",
  ".NET development company",
  "AI automation agency",
  "Dedicated development team",
  "Offshore software development company",
  "Startup MVP development company",
];

export const stackHighlights = [
  "MERN",
  "Laravel",
  "Django",
  "FastAPI",
  "Flask",
  ".NET",
  "Angular",
  "Vue",
  "Flutter",
  "React Native",
  "Kotlin",
  "Swift",
  "Python",
];

export const nicheKeywords = [
  {
    title: "Startups",
    keywords: [
      "MVP app development for startups",
      "startup software development company",
      "product development agency",
    ],
  },
  {
    title: "E-commerce",
    keywords: [
      "ecommerce app development company",
      "mCommerce app development",
      "retail shopping app development",
    ],
  },
  {
    title: "Healthcare",
    keywords: [
      "healthcare software development company",
      "telemedicine app development",
      "patient portal development",
    ],
  },
  {
    title: "Finance",
    keywords: [
      "fintech app development company",
      "secure finance platform development",
      "investment app development",
    ],
  },
];

export const engagementModels = [
  {
    title: "Dedicated Team",
    description:
      "Extend your product capacity with a dedicated developer or delivery pod for ongoing roadmap work.",
  },
  {
    title: "Project Outsourcing",
    description:
      "Outsource full web app, mobile app, or automation delivery with clear scope, milestones, and handoff points.",
  },
  {
    title: "Support and Maintenance",
    description:
      "Keep improving your product with bug fixes, upgrades, performance work, and post-launch support.",
  },
];

export const deliverySteps = [
  {
    title: "Discovery and Scope",
    description:
      "Share the business goal, must-have features, target users, and launch expectations through Fiverr or email.",
  },
  {
    title: "Stack and Delivery Plan",
    description:
      "Receive a recommended stack, build approach, milestones, and delivery sequence for your app or automation project.",
  },
  {
    title: "Build, Launch, and Iterate",
    description:
      "Move from implementation to testing, deployment support, and post-launch improvements with documented updates.",
  },
];

export const agencyPillars = [
  {
    title: "Business-First Discovery",
    description:
      "Every build starts with business goals, user flows, scope boundaries, and the right technical stack.",
  },
  {
    title: "Modern Full-Stack Delivery",
    description:
      "Projects are delivered across frontend, backend, mobile, and automation layers without forcing you to manage multiple vendors.",
  },
  {
    title: "Fiverr-Managed Accountability",
    description:
      "Communication, milestones, revisions, and delivery expectations stay documented in a buyer-friendly workflow.",
  },
];

export const agencyFaqs = [
  {
    question: "What types of web applications do you build?",
    answer:
      "TomTech builds dashboards, SaaS products, CRMs, admin panels, portals, booking systems, marketplaces, and internal business tools using modern web stacks.",
  },
  {
    question: "Do you offer both cross-platform and native mobile app development?",
    answer:
      "Yes. Projects can be delivered with Flutter or React Native for cross-platform goals, and Kotlin or Swift for native Android and iOS requirements.",
  },
  {
    question: "Can I hire you for AI automation and internal workflow engineering?",
    answer:
      "Yes. TomTech supports AI automation, Python workflow automation, reporting pipelines, lead routing, support workflows, and internal productivity systems.",
  },
  {
    question: "Do you work with startups as well as established businesses?",
    answer:
      "Yes. The delivery model works for startup MVPs, growth-stage products, agencies that need white-label help, and established businesses digitizing operations.",
  },
  {
    question: "Can I outsource a full product build or hire ongoing development support?",
    answer:
      "Yes. You can start with a fixed-scope project, ask for a custom quote, or use a dedicated support model for ongoing delivery.",
  },
  {
    question: "How do projects usually start?",
    answer:
      "Most projects start with a brief describing the business goal, required features, preferred stack, timeline, and examples. From there, you receive a recommended plan and next step through Fiverr.",
  },
];

export const homepageFaqs = agencyFaqs.slice(0, 5);

export const stats = [
  { value: "13+", label: "modern stacks clearly promoted" },
  { value: "3", label: "core service lines" },
  { value: "Fiverr", label: "buyer-ready engagement path" },
  { value: "Agency", label: "positioned for serious software projects" },
];
