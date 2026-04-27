export type ProjectItem = {
  key: string;
  slug: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubPrivate?: boolean;
};

export const projects: ProjectItem[] = [
  {
    key: "projects.items.portfolio",
    slug: "portfolio-multilingue",
    image: "/projects/portfolio.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    liveUrl: "/",
    githubUrl: "https://github.com/Mohamadi65/mon-portfolio.git",
    githubPrivate: false,
  },
  {
    key: "projects.items.baobabs",
    slug: "baobabs-sapaga",
    image: "/projects/baobabs-sapaga.png",
    stack: ["Next.js", "Laravel", "Sanctum", "Tailwind CSS", "MySQL"],
    liveUrl: "https://www.baobabsdesapaga.org/",
    githubPrivate: true,
  },
  {
    key: "projects.items.mazamet",
    slug: "mazamet-aikido-judo",
    image: "/projects/mazamet-aikido-judo.png",
    stack: ["Next.js", "Laravel", "Cloudflare", "Tailwind CSS", "MySQL"],
    liveUrl: "https://www.judo-aikido-mazamet.fr/",
    githubPrivate: true,
  },
  {
    key: "projects.items.usmn",
    slug: "us-montagne-noire",
    image: "/projects/us-montagne-noire.png",
    stack: ["Next.js", "API REST", "PWA", "Tailwind CSS"],
    liveUrl: "https://usmontagnenoire.fr/",
    githubPrivate: true,
  },
];

export const projectSlugs = projects.map((project) => project.slug);