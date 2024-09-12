import { Client, Account, Avatars, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  url: String(import.meta.env.VITE_APPWRITE_URL),

  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  storageId: String(import.meta.env.VITE_APPWRITE_STORAGE_ID),

  userCollectionId: String(import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID),
  postCollectionId: String(import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID),
  savesCollectionId: String(import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID),
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);
export const storage = new Storage(client);
