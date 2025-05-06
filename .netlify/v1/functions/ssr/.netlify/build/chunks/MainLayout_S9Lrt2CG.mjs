import { c as createComponent, a as createAstro, m as maybeRenderHead, g as renderScript, e as renderTemplate, b as addAttribute, r as renderHead, f as renderComponent, d as renderSlot } from './astro/server_CyIOYXr7.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { isLoggedIn } = Astro2.locals;
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-between px-20 py-10 items-center bg-white"> <h1 class="text-xl text-gray-800 font-bold">Astro Auth</h1> <div class="flex items-center"> <ul class="flex items-center space-x-6"> <li class="font-semibold text-gray-700"> <a href="/">Home</a> </li> ${isLoggedIn && renderTemplate`<li class="font-semibold text-gray-700"> <a href="/protected">Protected</a> </li>`} ${!isLoggedIn ? renderTemplate`<li class="font-semibold text-gray-700"> <a href="/login">Login</a> </li>` : renderTemplate`<li class="font-semibold text-gray-700" id="logout"> <a href="#">Logout</a> </li>`} <li> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path d="M12 14l9-5-9-5-9 5 9 5z"></path> <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path> </svg> </li> <li> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </li> </ul> </div> </nav> ${renderScript($$result, "/Users/home/Desktop/Projects/Astro/06-auth/src/components/shared/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/home/Desktop/Projects/Astro/06-auth/src/components/shared/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "Auth Astro App" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <div class="container m-auto max-w-5xl px-5"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/home/Desktop/Projects/Astro/06-auth/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
