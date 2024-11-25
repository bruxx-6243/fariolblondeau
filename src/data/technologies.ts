import {
  React,
  Astro,
  Nextdotjs,
  Typescript,
  Tailwindcss,
  Nodedotjs,
  Zod,
  Adonisjs,
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
  // {
  //   text: "Drizzle",
  //   icon: Drizzle,
  // },
  {
    text: "Adonis.Js",
    icon: Adonisjs,
  },
  {
    text: "Node.js",
    icon: Nodedotjs,
  },
];
