import { c as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CyIOYXr7.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_S9Lrt2CG.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl">Home Page</h1> ` })}`;
}, "/Users/home/Desktop/Projects/Astro/06-auth/src/pages/index.astro", void 0);

const $$file = "/Users/home/Desktop/Projects/Astro/06-auth/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
