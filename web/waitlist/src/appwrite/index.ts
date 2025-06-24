import "server-only";

import { Client, Databases } from "node-appwrite";

export const getAdmin = async () => {
    const endpoint = process.env.APPWRITE_ENDPOINT || "";
    const projectId = process.env.APPWRITE_PROJECT_ID || "";
    const apiKey = process.env.APPWRITE_API_KEY || "";
    if (!endpoint) throw new Error("APPWRITE_ENDPOINT is not set");
    if (!apiKey) throw new Error("APPWRITE_API_KEY is not set");
    if (!projectId) throw new Error("APPWRITE_PROJECT_ID is not set");

    const client = new Client().setEndpoint(endpoint).setProject(projectId).setKey(apiKey);

    return {
        get database() {
            return new Databases(client);
        },
    };
};
