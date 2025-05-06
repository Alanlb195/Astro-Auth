import { f as firebase } from './chunks/config_B4PjmpUW.mjs';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { g as getActionQueryString, f as astroCalledServerError, A as ActionError, d as deserializeActionResult, e as ACTION_QUERY_PARAMS, h as appendForwardSlash } from './chunks/shared_BJL8DkEA.mjs';
import 'es-module-lexer';
import './chunks/astro/server_CyIOYXr7.mjs';
import 'clsx';
import 'cookie';
import 'html-escaper';
import * as z from 'zod';
import { GoogleAuthProvider, signInWithCredential, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { d as defineAction } from './chunks/server_Dekd2byX.mjs';

const apiContextRoutesSymbol = Symbol.for("context.routes");
const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
function getActionPath(action) {
  let path = `${"/".replace(/\/$/, "")}/_actions/${new URLSearchParams(action.toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set("Accept", "application/json");
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`
      });
    }
    if (body) {
      headers.set("Content-Type", "application/json");
    } else {
      headers.set("Content-Length", "0");
    }
  }
  const rawResult = await fetch(
    getActionPath({
      toString() {
        return getActionQueryString(path);
      }
    }),
    {
      method: "POST",
      body,
      headers
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: "empty", status: 204 });
  }
  return deserializeActionResult({
    type: rawResult.ok ? "data" : "error",
    body: await rawResult.text()
  });
}
toActionProxy();

const loginWithGoogle = defineAction({
  accept: "json",
  input: z.any(),
  handler: async (credentials) => {
    const credential = GoogleAuthProvider.credentialFromResult(credentials);
    if (!credential) throw new Error("Google Sign In Failed");
    await signInWithCredential(firebase.auth, credential);
    return { ok: true };
  }
});

const loginUser = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    remember_me: z.boolean().optional()
  }),
  handler: async ({ email, password, remember_me }, { cookies }) => {
    if (remember_me) {
      cookies.set("email", email, {
        expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365),
        // 1 year
        path: "/"
      });
    } else {
      cookies.delete("email", {
        path: "/"
      });
    }
    try {
      const user = await signInWithEmailAndPassword(firebase.auth, email, password);
      return {
        uid: user.user.uid,
        email: user.user.email
      };
    } catch (error) {
      const firebaseError = error;
      if (firebaseError.code === "auth/email-already-in-use") {
        throw new Error("Email already in usage");
      }
      console.log(error);
      throw new Error("Invalid user");
    }
  }
});

const logout = defineAction({
  accept: "json",
  handler: async (_, { cookies }) => {
    return await signOut(firebase.auth);
  }
});

const registerUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    remember_me: z.boolean().optional()
  }),
  handler: async ({ name, email, password, remember_me }, { cookies }) => {
    if (remember_me) {
      cookies.set("email", email, {
        expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365),
        // 1 year
        path: "/"
      });
    } else {
      cookies.delete("email", {
        path: "/"
      });
    }
    try {
      const user = await createUserWithEmailAndPassword(firebase.auth, email, password);
      updateProfile(firebase.auth.currentUser, {
        displayName: name
      });
      await sendEmailVerification(firebase.auth.currentUser, {
        url: `${"http://localhost:4321"}`
      });
      return {
        uid: user.user.uid,
        email: user.user.email
      };
    } catch (error) {
      console.log(error);
      const firebaseError = error;
      if (firebaseError.code === "auth/email-already-in-use") {
        throw new Error("Email already in usage");
      }
      throw new Error("Unexpected error");
    }
  }
});

const server = {
  // actions
  registerUser,
  logout,
  loginUser,
  loginWithGoogle
};

export { server };
