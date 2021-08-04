import { auth } from '../../assets/fireconfig'
import { encrypt, email_verify } from '../../assets/utils/cry'

const PORT = 5000;
const SERVER_URL = `http://localhost:${PORT}`;


class User {
   
    

    constructor ( display_name  = "", email = "", email_verified = false, phone_number = "",
        disabled = false, created_at = new Date(), tags = [], attributes = {}, photo_url = "" ) {
            this.display_name = display_name;
            this.email = email;
            this.email_verified = email_verified;
            this.phone_number = phone_number;
            this.disabled = disabled;
            this.tags = tags;
            this.attributes = attributes;
            this.created_at = created_at;
            this.loggedIn = false;
            this.photo_url = photo_url

        }

            from_json( obj  ){
                var user = new User(this.display_name = obj.display_name, this.email = obj.email, this.email_verified = obj.email_verified, this.phone_number = obj.phone_number, this.disabled = obj.disabled, this.created_at = obj.created_at, this.tags = obj.tags, this.attributes = obj.attributes,  this.photo_url = obj.photo_url);
                user.loggedIn = obj.loggedIn;
                return user
            }

            to_json(){
                return {
                    "display_name": this.display_name,
                    "email": this.email,
                    "email_verified": this.email_verified,
                    "phone_number": this.phone_number,
                    "disabled": this.disabled,
                    "created_at": this.created_at,
                    "tags": this.tags,
                    "attributes": this.attributes,
                    "loggedIn": this.loggedIn,
                    "photo_url" : this.photo_url
                }
            }

}


class Auth {
    constructor( email = "", password = ""){
        this.email = email;
        this.password = password;
        this.access_token = "";
        this.loggedIn = false;
    }

    loginWithEmailAndPassword( email, password){
        var promise = new Promise((resolve, reject) => {

            //Hash User Password
            password = encrypt(password)

            // Log User In On Server
            auth.signInWithEmailAndPassword(email, password).then(async userCred => {
                return await fetch(`${SERVER_URL}/api/auth/email_sign_in`, {
                    method: 'POST',
                    credentials: 'include',
                    headers:{
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true
                    },
                    body: JSON.stringify({
                        email, password
                    })
                }).then( async response  => {
                    const res = await response.json()
                    this.loggedIn = true;
                    this.access_token = res?.access_token
    
                    resolve( this.load_token(res) )
                }).catch(err => {
                    this.loggedIn = false;
                    reject( err )
                })   
            }).catch(err => {
                reject(err)
            })
           
        })

        return promise
    }


    createUserWithEmailAndPassword( user ){
        const password = encrypt(user.password)
        const email = email_verify(user.email)


        const signup = new Promise( async (res, rej) => {

            if( typeof password != 'object' && typeof email != 'object' ){
                return await fetch(`${SERVER_URL}/api/auth/email_signup`, {
                    method: 'POST',
                    credentials: 'include',
                    headers:{
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true
                    },
                    body: JSON.stringify({
                        email, password,
                        display_name: user.display_name
                    })
                }).then( async response => {
                    const resp = await response.json()
                    console.log('USER OBJ: ',resp)
                    if (resp.description){
                        var error = {
                            code: 'auth-error',
                            message: resp.description
                        }
                        rej(error)
                    }
                    this.loggedIn = true;
                    this.access_token = resp?.access_token
    
                    res( this.load_token(resp) )
                }).catch(err => rej(err))
            }else{
                if(typeof password == 'object'){
                    rej(password)
                }

                if(typeof email == 'object'){
                    rej(email)
                }
            }
        })

        return signup
    }


    signOut(){
        return new Promise((res, rej) => {
            auth.signOut().then( async () => {
                return await fetch(`${SERVER_URL}/api/user/signout`,{
                    method: 'POST',
                    credentials: 'include',
                    headers:{
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true
                    },
                }
                ).then(() => {
                    this.loggedIn = false;
                    this.access_token = ""
                    res({status: 'loggedOut'})
                })
            }).catch(err => rej(err))
        })
    }


    refresh_token( uid ){
        return new Promise( async (resolve, reject) => {
            return await fetch(`${SERVER_URL}/api/auth/refresh_token`, {
                method: 'POST',
                credentials: 'include',
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true
                },
                body:JSON.stringify({
                    uid: uid
                })
            }).then( async response => {
                const resp = await response.json()
                this.loggedIn = true;
                this.access_token = resp?.access_token

                resolve( this.load_token(resp) )
            }).catch(err => reject(err))
        })
    }

    

    load_token( source ){
        const auth = new Auth()

        if (source.access_token !== undefined){
            auth.access_token = source
        }

        if( source.email !== undefined ){
            auth.email = source.email
        }

        return auth
    }

    grab_token(){
        return {
            "access_token" : this.access_token,
            "loggedIn": this.loggedIn
        }
    }
}


export { 
    User,
    Auth
}