import jwt_decode from 'jwt-decode';
import { Auth, User } from '../../Entities/UserObjects'
import { SIGNIN } from '../../store/actions/UserActions/action-types'

export const validateToken = ( token ) => {
    return async (dispatch) => {
        const auth = new Auth()
        const user = new User()
        if (token === undefined){
            return null
        }
    
        try {

            const tok = await jwt_decode(token)
            user.from_json(tok.user)
            user.loggedIn = true
            auth.loggedIn = true
            if(!(new Date(tok.exp * 1000) < new Date())){
                await auth.refresh_token(tok.sub).then(() => {
                    dispatch({
                        type: SIGNIN,
                        payload: user.to_json(),
                        error: null
                    })
                }).catch(err => alert(err))
            }

            return tok

        }catch(e){
            console.log("Token Validation Error", e)

            // Send refresh token to auth sever and get back new auth token
            
            return null
        }
    }
}