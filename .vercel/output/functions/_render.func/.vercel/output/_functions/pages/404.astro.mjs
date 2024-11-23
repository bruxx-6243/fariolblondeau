/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_wXYITJSf.mjs';
import 'kleur/colors';
import { A as Author, $ as $$AppLayout } from '../chunks/AppLayout_a-28YWur.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": `\u{1F635}\u200D\u{1F4AB} - 404 | ${Author.name}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="w-full flex flex-col items-center justify-center space-y-8 mt-40"> <div class="space-y-4 text-center"> <p class="text-9xl font-bold">
4<span aria-hidden="true" class="text-blue-400">0</span>4
</p> <p>Page Not Found</p> </div> <a href="/" title="back to the home page" class="py-2 px-4 bg-blue-400/20 border border-blue-400 text-zinc-100 rounded-lg">Back Home</a> </div> </div> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/404.astro", void 0);

const $$file = "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
