import { readItem, readItems } from "@directus/sdk";
import { AboutMe, Certification, Education } from "@/types";
import client from "./DirectusClient";

export const getAboutMe = async () => {
    try {
        const res = (await client.request(readItem("aboutMe", 1))) as AboutMe;
        return res;
    } catch (error) {
        return null;
    }
};

export const getEducations = async () => {
    try {
        const res = (await client.request(readItems("education"))) as Education[];
        return res;
    } catch (error) {
        return [];
    }
};

export const getCertifications = async () => {
    try {
        const res = (await client.request(readItems("certification"))) as Certification[];
        const certs = res.sort((a, b) => a.order - b.order);
        return certs;
    } catch (error) {
        return [];
    }
};
