/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_wXYITJSf.mjs';
import 'kleur/colors';
import { $ as $$AppLayout, A as Author } from '../chunks/AppLayout_a-28YWur.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const TITLE = `Blog - ${Author.name}`;
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": TITLE }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="space-y-12 max-w-5xl"> <div class="space-y-2"> <h1 class="text-3xl font-semibold">
Explore <br class="block sm:hidden"> My blog 🌟
</h1> <p>
Explore my personal collection of code snippets, starter guides,
          tutorials, and fascinating finds from the vast expanse of the
          internet.
</p> </div> <div> <div class="space-y-2 border-l-4 border-blue-400 pl-4"> <h3 class="text-lg font-semibold">My first post</h3> <p class="text-base">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            perferendis eligendi sit mollitia iste quibusdam maxime, tenetur ex
            aliquid illum. Fugiat?
</p> </div> </div> </div> </div> ` })}`;
}, "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
