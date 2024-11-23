import { b as createAstro, c as createComponent, r as renderTemplate, h as addAttribute, a as renderComponent, s as spreadAttributes, u as unescapeHTML, m as maybeRenderHead, i as renderSlot, j as renderHead } from './astro/server_wXYITJSf.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                          */
import { $ as $$Image } from './_astro_assets_DcphZ35E.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { XSquare, MenuSquare, ArrowDownRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const $$Astro$j = createAstro("https://fariolblondeau.vercel.app/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$i = createAstro("https://fariolblondeau.vercel.app/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$h = createAstro("https://fariolblondeau.vercel.app/");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$g = createAstro("https://fariolblondeau.vercel.app/");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$f = createAstro("https://fariolblondeau.vercel.app/");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$e = createAstro("https://fariolblondeau.vercel.app/");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$d = createAstro("https://fariolblondeau.vercel.app/");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$c = createAstro("https://fariolblondeau.vercel.app/");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$b = createAstro("https://fariolblondeau.vercel.app/");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$a = createAstro("https://fariolblondeau.vercel.app/");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$9 = createAstro("https://fariolblondeau.vercel.app/");
const $$$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$$1;
  const size = Astro2.props.size;
  delete Astro2.props.size;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(size ?? 24, "width")}${addAttribute(size ?? 24, "height")} fill="currentColor" viewBox="0 0 24 24"${spreadAttributes(Astro2.props)}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/.Layout.astro", void 0);

const $$Astro$8 = createAstro("https://fariolblondeau.vercel.app/");
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${renderComponent($$result, "Layout", $$$1, { "fill": "#181717", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>GitHub</title>${maybeRenderHead()}<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Github.astro", void 0);

const $$Astro$7 = createAstro("https://fariolblondeau.vercel.app/");
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${renderComponent($$result, "Layout", $$$1, { "fill": "#0A66C2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>LinkedIn</title>${maybeRenderHead()}<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Linkedin.astro", void 0);

const $$Astro$6 = createAstro("https://fariolblondeau.vercel.app/");
const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Twitter;
  return renderTemplate`${renderComponent($$result, "Layout", $$$1, { "fill": "#1D9BF0", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Twitter</title>${maybeRenderHead()}<path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Twitter.astro", void 0);

const Author = {
  name: "Fariol Blondeau",
  twitter: "bryan_6243",
  github: "bruxx-6243"
};
const defaultMedtaData = {
  title: Author.name,
  description: `Welcome to my personal website, my name is ${Author.name} and I'm a software developer. `,
  openGraph: {
    title: Author.name,
    type: "website",
    image: {
      src: "/static/og-image.png",
      alt: `Photo of ${Author.name} with yellow hoodie`
    }
  },
  twitter: Author.twitter
};
const socials = [
  {
    name: "Github",
    icon: $$Github,
    url: `https://github.com/${Author.github}/fariolblondeau/issues/2`
  },
  {
    name: "Twitter",
    icon: $$Twitter,
    url: `https://twitter.com/${Author.twitter}`
  },
  {
    name: "linkedin",
    icon: $$Linkedin,
    url: `https://www.linkedin.com/in/${Author.name.replace(/\s+/g, "").toLowerCase()}`
  }
];

const $$Astro$5 = createAstro("https://fariolblondeau.vercel.app/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { openGraph } = defaultMedtaData;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  if (Astro2.props.ogImage === void 0) {
    Astro2.props.ogImage = new URL(openGraph.image.src, canonicalURL);
  }
  const {
    title = openGraph.title,
    description = defaultMedtaData.description,
    ogImage
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "openGraph": {
    basic: {
      title: openGraph.title,
      type: openGraph.type,
      image: String(ogImage),
      url: canonicalURL
    }
  }, "twitter": {
    creator: defaultMedtaData.twitter
  }, "extend": {
    link: [
      {
        rel: "shortcut icon",
        type: "image/svg+xml",
        href: `${Astro2.site}favicon.svg`
      },
      { rel: "sitemap", href: "/sitemap-index.xml" }
    ],
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "og:description", content: description },
      { name: "twitter:image", content: String(ogImage) },
      { name: "twitter:title", content: openGraph.title },
      { name: "twitter:description", content: defaultMedtaData.description },
      { name: "twitter:creator", content: defaultMedtaData.twitter },
      { name: "twitter:site", content: defaultMedtaData.twitter },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: String(canonicalURL) },
      { name: "author", content: defaultMedtaData.title },
      {
        name: "keywords",
        content: "astro, blog, web dev, programming, projects, portfolio"
      },
      { name: "generator", content: Astro2.generator },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" }
    ]
  } })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/components/BaseHead.astro", void 0);

const $$Astro$4 = createAstro("https://fariolblondeau.vercel.app/");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  delete Astro2.props.size;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(2, "stroke-width")}${addAttribute(size ?? 24, "width")}${addAttribute(size ?? 24, "height")} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24"${spreadAttributes(Astro2.props)}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$3 = createAstro("https://fariolblondeau.vercel.app/");
const $$ArrowDownRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ArrowDownRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m7 7 10 10"></path> <path d="M17 7v10H7"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/lucide-astro/dist/ArrowDownRight.astro", void 0);

const $$Astro$2 = createAstro("https://fariolblondeau.vercel.app/");
const $$FileText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FileText;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path> <polyline points="14 2 14 8 20 8"></polyline> <line x1="16" x2="8" y1="13" y2="13"></line> <line x1="16" x2="8" y1="17" y2="17"></line> <line x1="10" x2="8" y1="9" y2="9"></line> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/lucide-astro/dist/FileText.astro", void 0);

const $$Astro$1 = createAstro("https://fariolblondeau.vercel.app/");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { text, href, ...props } = Astro2.props;
  let isActive;
  if (!href) {
    isActive = false;
  } else if (href === "/") {
    isActive = href === Astro2.url.pathname;
  } else {
    isActive = Astro2.url.pathname.includes(
      typeof href === "string" ? href : href.href
    );
  }
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "inline-block py-2.5 px-3",
    { "text-blue-600 dark:text-blue-400": isActive }
  ], "class:list")}${addAttribute(isActive ? "page" : void 0, "aria-current")}${addAttribute(href, "href")}${spreadAttributes(props)}${addAttribute(`Go to ${text} page`, "aria-label")}> ${text} </a>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/components/NavLink.astro", void 0);

const navLinks = [
	{
		href: "/",
		text: "Home"
	},
	{
		href: "/projects/",
		text: "Projects"
	},
	{
		href: "https://www.linkedin.com/in/fariolblondeau",
		rel: "noopener noreferrer",
		target: "_blank",
		text: "LinkedIn",
		external: true
	},
	{
		href: "https://github.com/bruxx-6243",
		target: "_blank",
		rel: "noopener noreferrer",
		text: "GitHub",
		external: true
	}
];

const HashCodeLogo = new Proxy({"src":"/_astro/hashcode-logo.BSY7U9ff.png","width":200,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/images/hashcode-logo.png";
							}
							
							return target[name];
						}
					});

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(XSquare, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

const MobileNav = () => {
  return /* @__PURE__ */ jsxs(Sheet, { children: [
    /* @__PURE__ */ jsx(SheetTrigger, { "aria-label": "Open navigation", className: "sm:hidden p-0", children: /* @__PURE__ */ jsx(MenuSquare, {}) }),
    /* @__PURE__ */ jsx(SheetContent, { className: "dark:border-zinc-800 dark:bg-zinc-900 px-8 w-2/3", children: /* @__PURE__ */ jsx("ul", { className: "space-y-6 pt-32", children: navLinks.map((link) => /* @__PURE__ */ jsxs("li", { className: "relative text-xl", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          target: link.external ? "_blank" : "_self",
          rel: "noopener noreferrer",
          children: link.text
        }
      ),
      link.external && /* @__PURE__ */ jsx("p", { className: "absolute top-0 -right-1 -rotate-90", children: /* @__PURE__ */ jsx(ArrowDownRight, { className: "w-4" }) })
    ] }, link.href)) }) })
  ] });
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="p-4 fixed w-full z-50" data-astro-cid-3ef6ksr2> <nav class="container flex items-center justify-between rounded-lg sm:mt-4 py-2 md:py-1" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": HashCodeLogo, "alt": "HashCode logo", "class": "aspect-square size-7", "quality": "high", "format": "webp", "data-astro-cid-3ef6ksr2": true })} </a> <div class="flex items-center gap-x-4" data-astro-cid-3ef6ksr2> <ul class="hidden sm:flex items-center gap-x-2" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => renderTemplate`<li class="relative text-base" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "NavLink", $$NavLink, { "href": link.href, "text": link.text, "data-astro-cid-3ef6ksr2": true })} ${link.external && renderTemplate`<span class="absolute top-0 -right-1 -rotate-90" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ArrowDownRight", $$ArrowDownRight, { "className": "w-4", "data-astro-cid-3ef6ksr2": true })} </span>`} </li>`)} </ul> <a href="/static/CV_Fariol_Blondeau_Web_Developer.pdf" target="_blank" rel="noreferrer noopener" title="view my Resume" aria-label="View Resume" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "FileText", $$FileText, { "class": "siz-5", "data-astro-cid-3ef6ksr2": true })} </a> ${renderComponent($$result, "MobileNav", MobileNav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MoblieNav", "client:component-export": "MobileNav", "data-astro-cid-3ef6ksr2": true })} </div> </nav> </header> `;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://fariolblondeau.vercel.app/");
const $$AppLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AppLayout;
  const { title, ogImage, description, ...props } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8">${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "ogImage": ogImage, ...props })}${renderComponent($$result, "Analytics", $$Index, {})}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="antialiased font-poppins"> ${renderComponent($$result, "Header", $$Header, {})} <main class="pt-32 pb-10"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/layouts/AppLayout.astro", void 0);

export { $$AppLayout as $, Author as A, $$ as a, $$Github as b, $$$1 as c, socials as s };
