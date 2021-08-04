import {  createHmac } from 'crypto'

export const encrypt = ( data )=>{
    const password_regex = new RegExp("^(?=.*[0-9])"
                       + "(?=.*[a-z])(?=.*[A-Z])"
                       + "(?=.*[@#$%^&+=_])"
                       + "(?=\\S+$).{8,20}$");

    try{
        if(password_regex.test(data)){
            const secret = process.env.REACT_APP_SECRET
            const hash = createHmac('sha256', secret)
            return hash.update(data).digest('base64')
        }else{
            return {
                code: 'bad-password-format',
                msg: " Check your password, make sure: It contains at least 8 characters and at most 20 characters, at least one digit, at least one upper case alphabet, at least one lower case alphabet, at least one special character which includes !@#$%&*()-+=^ and  doesn’t contain any white space."
            }
        }
    }catch( ex ) {
        console.log('ERROR HASHING PASSSWORD ', ex)
        return ex
    }
}



export const email_verify = ( email ) => {
    
   const email_regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
   try {
       if(email_regex.test(email)){
           return email
       }else{
           return {
               code: 'bad-email-format',
               msg: "Email is not formatted Correctly"
           }
       }
   }catch(ex){
        console.log('EMAIL VERIFICATION ERROR: ', ex)
        return ex
   }
}