import { auth, db } from '../../firebase'

export const GET_AUTH = 'GET_AUTH'

export const getAuth = authUser => ({
  type: GET_AUTH,
  payload: authUser
})

export const signInWithGithub = () => async dispatch => {
  let response = null

  try {
    response = await auth.doGithubSignIn()
  } catch (err) {
    console.log(err)
  }

  if (!response) {
    try {
      await db.doCreateUser(
        response.user.uid,
        response.user.displayName,
        response.user.email
      )
    } catch (err) {
      console.log(err)
    }
  }

  const authUser = {
    access_token: response.credential.accessToken,
    user: response.user
  }

  localStorage.setItem('security_access', JSON.stringify(authUser))

  dispatch(getAuth(authUser))
}

export const retrieveAuth = () => dispatch => {
  const accessToken = localStorage.getItem('security_access')
  let authUser = JSON.parse(accessToken)

  if (authUser === null) {
    authUser = {
      access_token: null,
      user: {
        photoURL: null,
        displayName: null
      }
    }
  }

  dispatch(getAuth(authUser))
}
