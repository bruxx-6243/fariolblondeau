/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_wXYITJSf.mjs';
import 'kleur/colors';
import { $ as $$AppLayout } from '../../chunks/AppLayout_a-28YWur.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://fariolblondeau.vercel.app/");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  console.log(slug);
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <h1>${slug}</h1> </div> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
