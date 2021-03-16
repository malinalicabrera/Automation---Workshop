import dotenv from 'dotenv'
dotenv.config(

)
export const CREDENTIALS = {
VALID_USER:{
    USERNAME: process.env.USUARIONAME,
    PASSWORD: process.env.PASSWORD
},
INVALID_USER:{
    USERNAME: process.env.INVALID_USER,
    PASSWORD: process.env.INVALID_PASSWORD
},
USER_INFO:{
    FIRSTNAME: process.env.FIRST_NAME,
    LASTNAME: process.env.LAST_NAME,
    POSTALCODE: process.env.POSTAL_CODE
},
}