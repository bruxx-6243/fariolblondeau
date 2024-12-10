import { Github, Linkedin, Twitter } from "simple-icons-astro";

export const Author = {
  name: "Fariol Blondeau",
  twitter: "bryan_6243",
  github: "bruxx-6243",
};

export const defaultMedtaData = {
  title: Author.name,
  description: `Welcome to my personal website, my name is ${Author.name} and I'm a Software Developer. `,

  openGraph: {
    title: Author.name,
    type: "website",
    image: {
      src: "/static/og-image.png",
      alt: `Photo of ${Author.name} with yellow hoodie`,
    },
  },

  twitter: Author.twitter,
};

export const socials = [
  {
    name: "Github",
    icon: Github,
    url: `https://github.com/${Author.github}/fariolblondeau/issues/2`,
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: `https://twitter.com/${Author.twitter}`,
  },
  {
    name: "linkedin",
    icon: Linkedin,
    url: `https://www.linkedin.com/in/${Author.name
      .replace(/\s+/g, "")
      .toLowerCase()}`,
  },
];
