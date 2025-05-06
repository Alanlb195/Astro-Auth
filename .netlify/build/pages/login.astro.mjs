import { c as createComponent, a as createAstro, f as renderComponent, g as renderScript, e as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CyIOYXr7.mjs';
import 'kleur/colors';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_BSOueHrU.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const email = Astro2.cookies.get("email")?.value ?? "";
  const remember_me = !!email;
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center self-center z-10"> <div class="p-12 bg-white mx-auto rounded-2xl w-100"> <div class="mb-4"> <h3 class="font-semibold text-2xl text-gray-800">Login</h3> <p class="text-gray-500">Please sign in to your account.</p> </div> <form class="space-y-5"> <div class="space-y-2"> <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label> <input class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" name="email"${addAttribute(email, "value")} placeholder="mail@gmail.com"> </div> <div class="space-y-2"> <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
Password
</label> <input class="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" name="password" placeholder="Enter your password"> </div> <div class="flex items-center justify-between"> <div class="flex items-center"> <input id="remember_me" name="remember_me"${addAttribute(remember_me, "checked")} type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"> <label for="remember_me" class="ml-2 block text-sm text-gray-800">
Remember me
</label> </div> <div class="text-sm"> <a href="/register" class="text-green-400 hover:text-green-500">
Don't have an account? Sign up
</a> </div> </div> <div> <button type="submit" id="btn-login" class="disabled:!bg-gray-300 w-full flex justify-center bg-green-400 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">
Sign in
</button> </div> <div class="flex flex-1 w-full my-2"> <div class="w-full border-t-2 border-gray-500"></div> </div> <button type="button" id="btn-google" class="w-full flex justify-center bg-red-400 disabled:!bg-gray-300 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg disabled:cursor-not-allowed transition ease-in duration-500">
Sign in with Google
</button> </form> <div class="pt-5 text-center text-gray-400 text-xs"> <span>
Copyright © 2021-${(/* @__PURE__ */ new Date()).getFullYear()} <a href="https://codepen.io/uidesignhub" rel="" target="_blank" title="Ajimon" class="text-green hover:text-green-500">AJI</a></span> </div> </div> </div> ` })} ${renderScript($$result, "/Users/home/Desktop/Projects/Astro/06-auth/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/home/Desktop/Projects/Astro/06-auth/src/pages/login.astro", void 0);

const $$file = "/Users/home/Desktop/Projects/Astro/06-auth/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
