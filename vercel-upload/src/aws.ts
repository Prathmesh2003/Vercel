import fs from "fs";
//import path from "path";
import {S3} from "aws-sdk";
//import { Endpoint } from "aws-sdk";
//import s3 from "s3";

const s3 = new S3({
    accessKeyId:"",   //acces key of s3 bucket
    secretAccessKey:"",  // secret access key of s3 bucket
    endpoint: "",     //end point of s3 bucket
})

export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "vercell",
        Key: fileName,
    }).promise();
    console.log(response);
}