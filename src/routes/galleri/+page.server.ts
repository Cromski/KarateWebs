import { BlobServiceClient } from "@azure/storage-blob";
import { AZURE_STORAGE_ACCOUNT_CONNECTION_STRING } from "$env/static/private";


export async function load({  }) {
    
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_ACCOUNT_CONNECTION_STRING);
    const containerName = "bsiimages";
    
    const containerClient = blobServiceClient.getContainerClient(containerName);
    let allBlobs = containerClient.listBlobsFlat();

    let blobImages = []

    let blob = await allBlobs.next();
    while(!blob.done)
    {
        console.log(blob.value)
        blobImages.push({name: blob.value.name,
            created: blob.value.properties.createdOn
            
        })
        blob = await allBlobs.next();
    }
    
    return {blobImages}
}
