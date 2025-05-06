import { c as createComponent, a as createAstro, f as renderComponent, e as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CyIOYXr7.mjs';
import 'kleur/colors';
import { f as firebase } from '../chunks/config_B4PjmpUW.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_S9Lrt2CG.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Protected = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Protected;
  const { user, isLoggedIn } = Astro2.locals;
  const { avatar, email, name } = user;
  const firebaseUser = firebase.auth.currentUser;
  await firebaseUser?.reload();
  const { emailVerified } = firebaseUser;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-200 font-sans rounded-xl h-[600px] w-full flex flex-row justify-center items-center"> <div class="card w-96 mx-auto bg-white shadow-xl hover:shadow rounded-sm"> ${avatar ? renderTemplate`<img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white"${addAttribute(avatar, "src")}${addAttribute(`Avatar de ${name}`, "alt")}>` : renderTemplate`<div class="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white bg-gray-300 flex justify-center items-center"> <span class="text-white text-3xl font-extrabold"> ${name.substring(0, 2)} </span> </div>`} <div class="text-center mt-2 text-3xl font-medium"> ${name} </div> <div class="text-center mt-2 font-light text-sm">${email}</div> <div class="text-center font-normal text-lg"> ${emailVerified ? "Email verified" : "Email not verified"} </div> <div class="px-6 text-center mt-2 font-light text-sm"> <p>
Front end Developer, avis reader. Love to take a long walk,
					swim and more...
</p> </div> <hr class="mt-8"> <div class="flex p-4"> <div class="w-1/2 text-center"> <span class="font-bold">1.8 k</span> Followers
</div> <div class="w-0 border border-gray-300"></div> <div class="w-1/2 text-center"> <span class="font-bold">2.0 k</span> Following
</div> </div> </div> </div> ` })}`;
}, "/Users/home/Desktop/Projects/Astro/06-auth/src/pages/protected.astro", void 0);

const $$file = "/Users/home/Desktop/Projects/Astro/06-auth/src/pages/protected.astro";
const $$url = "/protected";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Protected,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
