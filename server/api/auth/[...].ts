import CredentialsProvider from 'next-auth/providers/credentials'
import type { AuthOptions } from 'next-auth/core/types'
import { NuxtAuthHandler } from '#auth'
import { useServerFetch } from '~/server/utils/request'

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig()

// Refer to Auth.js docs for more details
export const authOptions: AuthOptions = {
    secret: runtimeConfig.authJs.secret,
    providers: [
        // GithubProvider({
        //   clientId: runtimeConfig.github.clientId,
        //   clientSecret: runtimeConfig.github.clientSecret,
        // }),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                // account: {
                //     label: 'Username',
                //     type: 'text',
                //     placeholder: '(hint: jsmith)',
                // },
                // password: {
                //     label: 'Password',
                //     type: 'password',
                //     placeholder: '(hint: hunter2)',
                // },
            },
            async authorize(credentials: Partial<Record<'account' | 'password', unknown>>, request: any) {
                console.log('credentials', credentials)
                console.log('1111112000', request)

                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!

                const res = await useServerFetch<{ msg: string; code?: 200; data: any }>('/api/login/sign', {
                    method: 'POST',
                    body: {
                        account: credentials.account,
                        password: credentials.password,
                    },
                })

                console.log('res', res)

                if (res.code === 200) {
                    console.log('user---', res.data)
                    const user = res.data
                    // await useStorage().setItem('db:foo', user)

                    // Any object returned will be saved in `user` property of the JWT

                    return user
                    // return { id: user.id, username: user.username }
                    // return { id: 1, name: 'user.username' }
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
    // callbacks: {
    //     // Callback when the JWT is created / updated, see https://next-auth.js.org/configuration/callbacks#jwt-callback
    //     async jwt({ token, account, profile }) {
    //         // Persist the OAuth access_token and or the user id to the token right after signin
    //         console.log('account', account)
    //         console.log('profile', profile)
    //         console.log('token', token)
    //         // if (account) {
    //         //   token.accessToken = account.token
    //         //   token.id = profile.id
    //         // }
    //         return token
    //     },
    //     // Callback whenever session is checked, see https://next-auth.js.org/configuration/callbacks#session-callback
    //     async session({ session, token, user }) {
    //         // Send properties to the client, like an access_token and user id from a provider.
    //         console.log('token', token)
    //         // session.accessToken = token.accessToken
    //         // session.user.id = token.id
    //         return session
    //     },
    // },
}

export default NuxtAuthHandler(authOptions)
// If you don't want to pass the full runtime config,
//  you can pass something like this: { public: { authJs: { baseUrl: "" } } }
