import {
  React,
  Astro,
  Nextdotjs,
  Typescript,
  Tailwindcss,
  Nodedotjs,
  Prisma,
  Zod,
} from "simple-icons-astro";

type Technology = {
  text: string;
  icon: any;
};

export const technologies: Technology[] = [
  {
    text: "Astro",
    icon: Astro,
  },
  {
    text: "React",
    icon: React,
  },
  {
    text: "Next.js",
    icon: Nextdotjs,
  },
  {
    text: "Tailwind",
    icon: Tailwindcss,
  },
  {
    text: "TypeScript",
    icon: Typescript,
  },
  {
    text: "Zod",
    icon: Zod,
  },
  {
    text: "Prisma",
    icon: Prisma,
  },
  {
    text: "Node.js",
    icon: Nodedotjs,
  },
];
