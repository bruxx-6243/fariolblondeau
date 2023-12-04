export const Author = {
  name: "Fariol Blondeau",
  twitter: "bryan_6243",
  github: "bruxx-6243",
};

export const defaultMedtaData = {
  title: Author.name,
  description: `My name is ${Author.name} I'm a Frontend Web developer and this my personal website. and soon I'll start sharing some contents about developement. And my goal is to become a better developer 🚀`,

  openGraph: {
    title: `${Author.name} | Personal Website`,
    type: "website",
    image: "/static/card.png",
  },

  twitter: Author.twitter,
};
