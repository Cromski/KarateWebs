import { CosmosClient } from "@azure/cosmos";
import { PUBLIC_API_KEY } from "$env/static/public";

const cosmosClient = new CosmosClient({ endpoint: 'https://karatewebs.documents.azure.com:443/', key: PUBLIC_API_KEY })

const querySpec = {
    query: "SELECT * FROM c",
};

export const getAllNews = async () => {
    return await cosmosClient
        .database("KarateWebs")
        .container("News")
        .items.query(querySpec)
        .fetchAll();
}

export const createNews = async (item) => {
    const { resource: createdItem } = await cosmosClient
        .database("KarateWebs")
        .container("News")
        .items.upsert(item);

    return createdItem
}