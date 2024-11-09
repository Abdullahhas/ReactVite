import conf from '../conf.js'

import { Client, ID , Databases , Storage , Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;
    
    constructor()
    {
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title , slug , content , featuredImage , status , userId})
    {
        try {
            return await this.databases.createDocument(conf.appWriteDatabaseId,
                 conf.appWriteCollectionId ,
                  slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId

                }
                
                )
        } catch (error) {
            throw error
        }
    }

     async updatePost (slug ,  {title  , content , featuredImage , status })
     {
        try {
            return await this.databases.updateDocument(conf.appWriteDatabaseId ,
                conf.appWriteCollectionId ,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
             )
        } catch (error) {
            throw error
        }
     }

     async deletePost (slug)
     {
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId ,
                conf.appWriteCollectionId ,
                slug
            )
            return true
        } catch (error) {
            throw error
            return false
        }
     }

     async getPost (slug)
     {
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId ,
                conf.appWriteCollectionId ,
                slug
                )
        } catch (error) {
            throw error
        }
     }

     async allPost (queries = [Query.equal("status" , "active")])
     {
        try {
           return  await this.databases.listDocuments(
            conf.appWriteDatabaseId ,
            conf.appWriteCollectionId ,
            queries,
            
           )
        } catch (error) {
            throw error
            return false
        }
     }

     async uploadFile(file)
     {
        try {
            return this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            
        }
     }

     async deleteFile(fileId)
     {
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId ,
                fileId
            )
            return true
        } catch (error) {
            throw error
            return false
        }
     }

     getFilePreview(fileId)
     {
        return this.bucket.getFilePreview(
            conf.appWriteBucketId ,
            fileId
        )
     }
}

const service = new Service()

export default service
