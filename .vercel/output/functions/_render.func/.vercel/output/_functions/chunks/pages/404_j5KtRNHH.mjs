/* empty css                          */
import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, u as unescapeHTML, i as renderComponent, j as renderSlot, k as defineScriptVars, l as renderHead } from '../astro_d_d3RMdo.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_h2PXItAV.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React$1 from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { XSquare, MenuSquare, ArrowDownRight as ArrowDownRight$1 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const $$Astro$v = createAstro("https://fariolblondeau.vercel.app/");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro/components/Image.astro", void 0);

const $$Astro$u = createAstro("https://fariolblondeau.vercel.app/");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///C:/Users/blond/Documents/fariol-blondeau-resume/.vercel/output/static/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$t = createAstro("https://fariolblondeau.vercel.app/");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$s = createAstro("https://fariolblondeau.vercel.app/");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$r = createAstro("https://fariolblondeau.vercel.app/");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$q = createAstro("https://fariolblondeau.vercel.app/");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$p = createAstro("https://fariolblondeau.vercel.app/");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$o = createAstro("https://fariolblondeau.vercel.app/");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$n = createAstro("https://fariolblondeau.vercel.app/");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$m = createAstro("https://fariolblondeau.vercel.app/");
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$l = createAstro("https://fariolblondeau.vercel.app/");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
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
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
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
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$k = createAstro("https://fariolblondeau.vercel.app/");
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$$1;
  const size = Astro2.props.size;
  delete Astro2.props.size;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(size ?? 24, "width")}${addAttribute(size ?? 24, "height")} fill="currentColor" viewBox="0 0 24 24"${spreadAttributes(Astro2.props)}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/.Layout.astro", void 0);
const Layout$1 = $$$1;

const $$Astro$j = createAstro("https://fariolblondeau.vercel.app/");
const $$Component = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Component;
  return renderTemplate`${renderComponent($$result, "Layout", Layout$1, { "fill": "#BC52EE", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Astro</title>${maybeRenderHead()}<path d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Astro.astro", void 0);
const Astro = $$Component;

const $$Astro$i = createAstro("https://fariolblondeau.vercel.app/");
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${renderComponent($$result, "Layout", Layout$1, { "fill": "#181717", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>GitHub</title>${maybeRenderHead()}<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Github.astro", void 0);
const Github = $$Github;

const $$Astro$h = createAstro("https://fariolblondeau.vercel.app/");
const $$Linkedin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${renderComponent($$result, "Layout", Layout$1, { "fill": "#0A66C2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>LinkedIn</title>${maybeRenderHead()}<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Linkedin.astro", void 0);
const Linkedin = $$Linkedin;

const $$Astro$g = createAstro("https://fariolblondeau.vercel.app/");
const $$Nextdotjs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Nextdotjs;
  return renderTemplate`${renderComponent($$result, "Layout", Layout$1, { "fill": "#000000", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Next.js</title>${maybeRenderHead()}<path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Nextdotjs.astro", void 0);
const Nextdotjs = $$Nextdotjs;

const $$Astro$f = createAstro("https://fariolblondeau.vercel.app/");
const $$Nodedotjs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Nodedotjs;
  return renderTemplate`${renderComponent($$result, "Layout", Layout$1, { "fill": "#339933", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Node.js</title>${maybeRenderHead()}<path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Nodedotjs.astro", void 0);
const Nodedotjs = $$Nodedotjs;

const $$Astro$e = createAstro("https://fariolblondeau.vercel.app/");
const $$Prisma = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Prisma;
  return renderTemplate`${renderComponent($$result, "Layout", Layout$1, { "fill": "#2D3748", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Prisma</title>${maybeRenderHead()}<path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Prisma.astro", void 0);
const Prisma = $$Prisma;

const $$Astro$d = createAstro("https://fariolblondeau.vercel.app/");
const $$React = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${renderComponent($$result, "Layout", Layout$1, { "fill": "#61DAFB", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>React</title>${maybeRenderHead()}<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/React.astro", void 0);
const React = $$React;

const $$Astro$c = createAstro("https://fariolblondeau.vercel.app/");
const $$Tailwindcss = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Tailwindcss;
  return renderTemplate`${renderComponent($$result, "Layout", Layout$1, { "fill": "#06B6D4", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Tailwind CSS</title>${maybeRenderHead()}<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Tailwindcss.astro", void 0);
const Tailwindcss = $$Tailwindcss;

const $$Astro$b = createAstro("https://fariolblondeau.vercel.app/");
const $$Twitter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Twitter;
  return renderTemplate`${renderComponent($$result, "Layout", Layout$1, { "fill": "#1D9BF0", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Twitter</title>${maybeRenderHead()}<path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Twitter.astro", void 0);
const Twitter = $$Twitter;

const $$Astro$a = createAstro("https://fariolblondeau.vercel.app/");
const $$Typescript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Typescript;
  return renderTemplate`${renderComponent($$result, "Layout", Layout$1, { "fill": "#3178C6", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>TypeScript</title>${maybeRenderHead()}<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Typescript.astro", void 0);
const Typescript = $$Typescript;

const $$Astro$9 = createAstro("https://fariolblondeau.vercel.app/");
const $$Zod = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Zod;
  return renderTemplate`${renderComponent($$result, "Layout", Layout$1, { "fill": "#3E67B1", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Zod</title>${maybeRenderHead()}<path d="M19.088 2.477 24 7.606 12.521 20.485l-.925 1.038L0 7.559l5.108-5.082h13.98Zm-17.434 5.2 6.934-4.003H5.601L1.619 7.636l.035.041Zm12.117-4.003L3.333 9.7l2.149 2.588 10.809-6.241-.2-.346 2.851-1.646-.365-.381h-4.806Zm7.52 2.834L8.257 14.034h5.101v-.4h3.667l5.346-5.998-1.08-1.128Zm-7.129 10.338H9.268l2.36 2.843 2.534-2.843Z"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/simple-icons-astro/dist/Zod.astro", void 0);
const Zod = $$Zod;

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
    icon: Github,
    url: `https://github.com/${Author.github}/fariolblondeau/issues/2`
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: `https://twitter.com/${Author.twitter}`
  },
  {
    name: "linkedin",
    icon: Linkedin,
    url: `https://www.linkedin.com/in/${Author.name.replace(/\s+/g, "").toLowerCase()}`
  }
];

const $$Astro$8 = createAstro("https://fariolblondeau.vercel.app/");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
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

const $$Astro$7 = createAstro("https://fariolblondeau.vercel.app/");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  delete Astro2.props.size;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(2, "stroke-width")}${addAttribute(size ?? 24, "width")}${addAttribute(size ?? 24, "height")} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24"${spreadAttributes(Astro2.props)}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/lucide-astro/dist/.Layout.astro", void 0);
const Layout = $$;

const $$Astro$6 = createAstro("https://fariolblondeau.vercel.app/");
const $$ArrowDownRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ArrowDownRight;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m7 7 10 10"></path> <path d="M17 7v10H7"></path> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/lucide-astro/dist/ArrowDownRight.astro", void 0);
const ArrowDownRight = $$ArrowDownRight;

const $$Astro$5 = createAstro("https://fariolblondeau.vercel.app/");
const $$Eye = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Eye;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path> <circle cx="12" cy="12" r="3"></circle> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/lucide-astro/dist/Eye.astro", void 0);
const Eye = $$Eye;

const $$Astro$4 = createAstro("https://fariolblondeau.vercel.app/");
const $$FileText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FileText;
  return renderTemplate`${renderComponent($$result, "Layout", Layout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path> <polyline points="14 2 14 8 20 8"></polyline> <line x1="16" x2="8" y1="13" y2="13"></line> <line x1="16" x2="8" y1="17" y2="17"></line> <line x1="10" x2="8" y1="9" y2="9"></line> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/lucide-astro/dist/FileText.astro", void 0);
const FileText = $$FileText;

const $$Astro$3 = createAstro("https://fariolblondeau.vercel.app/");
const $$NavLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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

const HashCodeLogo = new Proxy({"src":"/_astro/hashcode-logo2.mjLlld35.png","width":200,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
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
const SheetOverlay = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
const SheetContent = React$1.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
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
const SheetTitle = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
      link.external && /* @__PURE__ */ jsx("p", { className: "absolute top-0 -right-1 -rotate-90", children: /* @__PURE__ */ jsx(ArrowDownRight$1, { className: "w-4" }) })
    ] }, link.href)) }) })
  ] });
};

const $$Astro$2 = createAstro("https://fariolblondeau.vercel.app/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="p-4 fixed w-full z-50" data-astro-cid-3ef6ksr2> <nav class="container flex items-center justify-between rounded-lg sm:mt-4 py-2 md:py-1" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": HashCodeLogo, "alt": "HashCode logo", "class": "aspect-square w-7 h-7", "quality": "high", "format": "webp", "data-astro-cid-3ef6ksr2": true })} </a> <div class="flex items-center gap-x-4" data-astro-cid-3ef6ksr2> <ul class="hidden sm:flex items-center gap-x-2" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => renderTemplate`<li class="relative text-base" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "NavLink", $$NavLink, { "href": link.href, "text": link.text, "data-astro-cid-3ef6ksr2": true })} ${link.external && renderTemplate`<p class="absolute top-0 -right-1 -rotate-90" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ArrowDownRight", ArrowDownRight, { "className": "w-4", "data-astro-cid-3ef6ksr2": true })} </p>`} </li>`)} </ul> <a href="/static/CV_Fariol_Blondeau_Web_Developer.pdf" target="_blank" rel="noreferrer noopener" title="view my Resume" aria-label="View Resume" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "FileText", FileText, { "class": "h-5 w-5", "data-astro-cid-3ef6ksr2": true })} </a> ${renderComponent($$result, "MobileNav", MobileNav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MoblieNav", "client:component-export": "MobileNav", "data-astro-cid-3ef6ksr2": true })} </div> </nav> </header> `;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://fariolblondeau.vercel.app/");
const $$AppLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AppLayout;
  const { title, ogImage, description, ...props } = Astro2.props;
  const GA_TRACKING_ID = "G-H4XJXPNZQ5" ;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8">', "", "", '</head> <body class="antialiased mx-auto font-poppins"> ', ' <main class="pt-32 pb-10"> ', ' </main> <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-H4XJXPNZQ5"><\/script> <script type="text/partytown">(function(){', '\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n      gtag("config", GA_TRACKING_ID);\n    })();<\/script> </body> </html>'])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "ogImage": ogImage, ...props }), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), defineScriptVars({ GA_TRACKING_ID }));
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/layouts/AppLayout.astro", void 0);

const $$Astro = createAstro("https://fariolblondeau.vercel.app/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": `\u{1F635}\u200D\u{1F4AB} - 404 | ${Author.name}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="w-full flex flex-col items-center justify-center space-y-8 mt-40"> <div class="space-y-4 text-center"> <p class="text-9xl font-bold">
4<span aria-hidden="true" class="text-blue-400">0</span>4
</p> <p>Page Not Found</p> </div> <a href="/" title="back to the home page" class="py-2 px-4 bg-blue-400/20 border border-blue-400 text-zinc-100 rounded-lg">Back Home</a> </div> </div> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/404.astro", void 0);

const $$file = "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, Astro as A, Eye as E, Github as G, Nextdotjs as N, Prisma as P, React as R, Tailwindcss as T, Zod as Z, _404 as _, Typescript as a, Nodedotjs as b, cn as c, Author as d, $$AppLayout as e, imageConfig as i, socials as s };
