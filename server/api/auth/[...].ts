// import GithubProvider from '@auth/core/providers/github'
import type { AuthConfig } from '@auth/core/types'
import Credentials from '@auth/core/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import { useServerFetch } from '~/server/utils/request'

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig()

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
    secret: runtimeConfig.authJs.secret,
    providers: [
        // GithubProvider({
        //   clientId: runtimeConfig.github.clientId,
        //   clientSecret: runtimeConfig.github.clientSecret,
        // }),
        Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                account: {
                    label: 'Username',
                    type: 'text',
                    placeholder: '(hint: jsmith)',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: '(hint: hunter2)',
                },
            },
            async authorize(credentials: Partial<Record<'account' | 'password', unknown>>) {
                console.log('credentials', credentials)
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!

                const res = await useServerFetch<{ msg: string; code?: 200; data: any }>('/api/login/sign', {
                    method: 'POST',
                    body: credentials,
                })

                console.log('res', res)

                if (res.code === 200) {
                    console.log('user---', res.data)
                    const user = res.data
                    // Any object returned will be saved in `user` property of the JWT

                    // return user
                    return { id: user.id, username: user.username }
                } else {
                    console.error(
                        'Warning: Malicious login attempt registered, bad credentials provided',
                    )

                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    // throw createError({
                    //     statusMessage: '账户密码错误',
                    //     statusCode: 302,
                    // })
                }
            },

        }),

    ],
    pages: {
        signIn: '/login',
    },
    // callbacks: {
    //     async signIn({ user, account, profile, email, credentials }) {
    //         console.log({ user, account, profile, email, credentials })
    //         return true
    //     },
    // },
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
// If you don't want to pass the full runtime config,
//  you can pass something like this: { public: { authJs: { baseUrl: "" } } }
