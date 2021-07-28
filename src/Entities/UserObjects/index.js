import axios from 'axios';

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

            loginWithEmailAndPassword( email, password){
                var promise = new Promise((resolve, reject) => {

                    // Log User In On Server
                    axios.post(
                        `${SERVER_URL}/api/auth/email_sign_in?email=${email}&password=${password}`,{
                        headers: {
                            "Content-Type":"application/json"
                            }
                        }
                    ).then( data  => {
                        this.loggedIn = true;
                        resolve(this.from_json( data.data ))
                    }).catch(err => {
                        this.loggedIn = false;
                        reject( err )
                    }).then(() => {
                        
                    })


                })

                return promise
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


export default User