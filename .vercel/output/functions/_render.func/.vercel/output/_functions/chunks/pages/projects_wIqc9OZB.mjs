/* empty css                          */
import { A as AstroError, n as UnknownContentCollectionError, f as createComponent, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent, r as renderTemplate, i as renderComponent, u as unescapeHTML, e as createAstro, m as maybeRenderHead, h as addAttribute } from '../astro_d_d3RMdo.mjs';
import 'kleur/colors';
import { p as prependForwardSlash } from '../astro/assets-service_h2PXItAV.mjs';
import 'clsx';
import { $ as $$Image, E as Eye, G as Github, d as Author, s as socials, e as $$AppLayout } from './404_j5KtRNHH.mjs';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://fariolblondeau.vercel.app/", "ASSETS_PREFIX": undefined}, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/project/fashion.yaml": () => import('../fashion_lO-AOlep.mjs'),"/src/content/project/hoobank.yaml": () => import('../hoobank_3ls2xZdd.mjs'),"/src/content/project/marico.yaml": () => import('../marico_lXx1CF6l.mjs'),"/src/content/project/react-ponebook.yaml": () => import('../react-ponebook_2hllfgMl.mjs'),"/src/content/project/robbie-lens.yaml": () => import('../robbie-lens_uQ4edCkW.mjs'),"/src/content/project/youmeal.yaml": () => import('../youmeal_QWfiy79r.mjs')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"project":{"type":"data","entries":{"fashion":"/src/content/project/fashion.yaml","hoobank":"/src/content/project/hoobank.yaml","marico":"/src/content/project/marico.yaml","react-ponebook":"/src/content/project/react-ponebook.yaml","robbie-lens":"/src/content/project/robbie-lens.yaml","youmeal":"/src/content/project/youmeal.yaml"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$2 = createAstro("https://fariolblondeau.vercel.app/");
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<span class="bg-yellow-400/20 border border-yellow-400 text-zinc-500 dark:text-white/80 max-w-max inline-block rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-normal">
Building
</span>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/components/Badge.astro", void 0);

const $$Astro$1 = createAstro("https://fariolblondeau.vercel.app/");
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  const { cover, processing, title, description, stack, demo, source } = project.data;
  const demo_url = new URL(demo, Astro2.url).href;
  const source_url = new URL(source, Astro2.url).href;
  return renderTemplate`${maybeRenderHead()}<li class="dark:bg-zinc-800 bg-white dark:text-zinc-400 text-zinc-500 gap-1 p-4 border dark:border-zinc-700/60 rounded-lg flex flex-col items-start justify-between space-y-3 group"> <div class="space-y-3"> <div class="w-full rounded-lg overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": cover, "alt": title, "class": "w-full h-full object-cover md:group-hover:scale-105 transition-all duration-300" })} </div> ${processing && renderTemplate`${renderComponent($$result, "Badge", $$Badge, {})}`} <h2 class="text-xl font-medium dark:text-white text-zinc-700 [word-break:break-word]"> ${title} </h2> <p class="text-sm text-left leading-relaxed">${description}</p> <ul class="flex flex-wrap gap-2"> ${stack.map((item) => renderTemplate`<li class="dark:bg-zinc-700 bg-zinc-100 text-zinc-600 dark:text-zinc-300 rounded-md px-2 py-1 text-sm"> ${item} </li>`)} </ul> </div> <div class="w-full flex justify-between"> <a${addAttribute(demo_url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-2 px-2 py-1 border rounded-lg dark:border-zinc-700/60 dark:hover:bg-zinc-700/25 hover:bg-zinc-200/30 transition-all"> ${renderComponent($$result, "Eye", Eye, { "class": "h-[1.2rem] w-[1.2rem]" })} <span class="hidden md:inline">Preview</span> </a> <a${addAttribute(source_url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-2 px-2 py-1 border rounded-lg dark:border-zinc-700/60 dark:hover:bg-zinc-700/25 hover:bg-zinc-200/30 transition-all"> ${renderComponent($$result, "Github", Github, { "class": "h-[1.2rem] w-[1.2rem]" })} <span class="hidden md:inline">Source Code</span> </a> </div> </li>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro("https://fariolblondeau.vercel.app/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = (await getCollection("project")).filter((project) => !project.data.trash).sort((a, b) => {
    if (a.data.processing === true && b.data.processing !== true) {
      return -1;
    } else if (a.data.processing !== true && b.data.processing === true) {
      return 1;
    } else {
      return 0;
    }
  });
  const TITLE = `Projects | ${Author.name}`;
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": TITLE }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div> <div class="space-y-6 max-w-6xl"> <h2 class="text-3xl font-semibold">
Welcome <br class="block sm:hidden"> to My Portfolio 🤩
</h2> <p>
I create dynamic web apps using React, Tailwind, Astro, Next.js, and
          Prisma ORM. My completed projects highlight seamless UIs and optimized
          experiences, showcasing expertise in React and Next.js for top-notch
          performance.
</p> <p>
Currently, I'm developing innovative projects using React, Tailwind,
          Astro, Next.js, and Prisma ORM. Stay tuned for groundbreaking
          solutions at the intersection of technology and creativity 🎇.
</p> <p>
You can find all my projects on <a${addAttribute(`https://github.com/${Author.github}/?tab=repositories`, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-400 underline" title="Checkout my projects on Github">Github</a>.
</p> </div> <div class="space-y-2 mt-8"> <p class="italic max-w-2xl">
✅ If my projects caught your interest ❤️‍🔥, let's connect! Reach out to
          me on various social networks, I'm available on :
</p> <ul class="flex flex-wrap max-w-md mx-auto sm:mx-0 gap-4"> ${socials.map(({ name, icon: Icon, url }) => renderTemplate`<li class=" bg-blue-400/30 border border-blue-400 rounded-md px-2 py-1 text-sm cursor-pointer"> <a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2"> ${renderComponent($$result2, "Icon", Icon, { "class": "w-4 h-4" })} ${name} </a> </li>`)} </ul> </div> <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8"> ${projects.map((project) => {
    return renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`;
  })} </ul> </div> </div> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/projects.astro", void 0);

const $$file = "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
