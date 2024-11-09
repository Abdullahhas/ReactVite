import conf from '../conf.js'

import { Client, Account, ID } from "appwrite";

export class AuthService  {
    client = new Client()
    account

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email , password , name})
    {
        try {
            const userAccount =  await this.account.create(ID.unique(), email , password , name)
            if(userAccount)
            {
                return this.loginAccount({email , password})
            }
            else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async loginAccount({email , password})
    {
        try {
          return  this.account.createEmailPasswordSession(email , password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser ()
    {
        try {
             return await this.account.get()
        } catch (error) {
            throw error
        }
        return null
    }

    async logOut()
    {
        try {
           await  this.account.deleteSessions() 
        } catch (error) {
            throw error
        }
    }
}


const authService = new AuthService();

export default authService  