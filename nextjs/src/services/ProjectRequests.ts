import { readItems } from "@directus/sdk";
import { Project } from "@/types";
import client from "./DirectusClient";

// Get all projects for the projects page
export const getProjects = async () => {
    try {
        const res = (await client.request(
            readItems("project", {
                fields: ["*", { image: ["*"], content: ["*"] }]
            })
        )) as Project[];
        // show only published projects and sort by order field
        const sortedProjects = res
            .filter((project) => project.status === "published")
            .sort((a, b) => a.order - b.order);
        return sortedProjects;
    } catch (error) {
        return [];
    }
};
