import { firebase } from '@/firebase/config';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile, type AuthError } from 'firebase/auth';

export const registerUser = defineAction({

    accept: 'form',
    input: z.object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
        remember_me: z.boolean().optional(),
    }),

    handler: async ({ name, email, password, remember_me }, { cookies }) => {

        //* cookies
        if (remember_me) {
            cookies.set('email', email, {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 year
                path: '/'
            });
        } else {
            cookies.delete('email', {
                path: '/'
            })
        }

        // todo: create user
        try {
            const user = await createUserWithEmailAndPassword(firebase.auth, email, password);

            // todo: update name (displayName)
            updateProfile(firebase.auth.currentUser!, {
                displayName: name
            });

            // todo: verify email
            await sendEmailVerification(firebase.auth.currentUser!, {
                url: `${import.meta.env.WEBSITE_URL}`
            });

            return {
                uid: user.user.uid,
                email: user.user.email
            }
        } catch (error) {
            console.log(error);
            const firebaseError = error as AuthError;
            if (firebaseError.code === 'auth/email-already-in-use') {
                throw new Error('Email already in usage')
            }
            throw new Error('Unexpected error');
        }

    }

})