type TUser = {
  name: string;
  twitter: string;
  github: string;
};

export const author: TUser = {
  name: "Fariol Blondeau",
  twitter: "bruxx-6243",
  github: "bruxx-6243",
};

export const defaultMetaData = {
  title: author.name,
  description:
    "Welcome to my personal website! I am a software engineering graduate student. I am passionate about web development and AI. I hope you enjoy visiting my projects!",
  // color: "#2563eb",
  ogImage: {
    src: "/static/banner.png",
    alt: `Photo of the author ${author.name}`,
    type: "image/png",
  },
};
