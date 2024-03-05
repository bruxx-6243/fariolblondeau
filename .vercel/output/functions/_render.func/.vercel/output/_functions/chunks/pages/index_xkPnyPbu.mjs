/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute } from '../astro_d_d3RMdo.mjs';
import 'kleur/colors';
import { A as Astro, R as React, N as Nextdotjs, T as Tailwindcss, a as Typescript, Z as Zod, P as Prisma, b as Nodedotjs, c as cn, d as Author, $ as $$Image, e as $$AppLayout } from './404_j5KtRNHH.mjs';
import 'clsx';

const technologies = [
  {
    text: "Astro",
    icon: Astro
  },
  {
    text: "React",
    icon: React
  },
  {
    text: "Next.js",
    icon: Nextdotjs
  },
  {
    text: "Tailwind",
    icon: Tailwindcss
  },
  {
    text: "TypeScript",
    icon: Typescript
  },
  {
    text: "Zod",
    icon: Zod
  },
  {
    text: "Prisma",
    icon: Prisma
  },
  {
    text: "Node.js",
    icon: Nodedotjs
  }
];

const $$Astro$1 = createAstro("https://fariolblondeau.vercel.app/");
const $$Skill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skill;
  const { text, icon: Icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex items-center gap-4"> <span class="w-11 h-11 flex items-center justify-center border-t dark:border-zinc-700 border-transparent shadow dark:shadow-none bg-white dark:bg-zinc-800 rounded-full"> ${renderComponent($$result, "Icon", Icon, {})} </span> <span class="dark:text-zinc-400 text-zinc-600">${text}</span> </li>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/components/Skill.astro", void 0);

const ME = new Proxy({"src":"/_astro/author.pkILOX7X.jpg","width":256,"height":256,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://fariolblondeau.vercel.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const titleStyle = "font-bold tracking-tight text-4xl";
  const FRONTEND = "I build frontend tools and experiment with new web app technologies.";
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": Author.name }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="flex flex-col-reverse md:flex-row"> <div class="flex-1 space-y-8"> <div class="space-y-3"> <p class="text-lg"> <span class="text-3xl sm:text-4xl inline-block animate-rotate-hand origin-[70%_70%]">👋</span> <i>I'm_</i> </p> <h1${addAttribute(cn(titleStyle, "text-gradient w-fit inline-block"), "class")}> ${Author.name} </h1> <p>
Graduate student 🎓 in computer science at the <a href="http://ivanovo.ac.ru/" target="_blank" rel="noopener noreferrer" title="Visite the official website of Ivanovo State University" class="text-blue-600 dark:text-blue-400 underline">University State of Ivanovo</a> in Russia.
</p> <p>
Welcome to my slice 🍕 of the internet. I'm a self-taught Software
            Developer, primary focused on the <span aria-hidden="true"${addAttribute(FRONTEND, "title")}>front-end</span>.
</p> </div> <div class="space-y-3"> <h2 class="text-2xl font-semibold">Favorite technologies</h2> <p>
I love exploring new libraries and JavaScript 💛 frameworks ⚛️. Here
            is a list of technologies that I have worked with.
</p> </div> <ul class="grid grid-cols-2 gap-4 sm:grid-cols-3"> ${technologies.map((tech) => renderTemplate`${renderComponent($$result2, "Skill", $$Skill, { "text": tech.text, "icon": tech.icon })}`)} </ul> </div> <div class="flex-1 py-8 mr-8 sm:py-0 sm:m-0"> <div class="h-full flex justify-end md:justify-center z-[1]"> <div class="relative w-44 h-44 aspect-square rounded-full overflow-hidden md:mt-16 ring-4 ring-blue-400 ring-offset-4 ring-offset-zinc-100 dark:ring-offset-zinc-900"> ${renderComponent($$result2, "Image", $$Image, { "src": ME, "alt": `${Author.name} avatar`, "quality": "high", "format": "webp", "loading": "eager", "class": "w-full object-cover animate-fade" })} </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/index.astro", void 0);

const $$file = "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
