import { auth, githubProvider } from './firebase'

export const doGithubSignIn = () => auth.signInWithPopup(githubProvider)

export const doSignOut = () => auth.signOut()
