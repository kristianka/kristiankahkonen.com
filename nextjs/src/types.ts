export interface BlogApiResponse {
    data: Blog[];
}

export interface Blog {
    id: string;
    tags?: string[];
    published: boolean;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    title: string;
    imgUrl?: string;
    imgUrlAlt?: string;
    description: string;
    content: string;
}

export interface User {
    id: string;
    email: string;
    first_name?: string;
    last_name?: string;
}

export interface Toc {
    id: string;
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface TextChild {
    text: {
        type: string;
        value: string;
        position: {
            start: { line: number; column: number; offset: number };
            end: { line: number; column: number; offset: number };
        };
    };
}

export interface HeadingNode {
    children: TextChild[];
    depth: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface Project {
    status: "published" | "draft";
    id: string;
    order: number;
    date_created: string;
    published: boolean;
    image: Image;
    content: Content;
}

interface Image {
    id: string;
    catchline: string;
    appName: string;
    imgUrlPc: string;
    imgUrlMedium: string;
    imgUrlMobile: string;
}

interface Content {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    sourceCodeUrl: string;
    liveUrl?: string;
    liveUrlShort?: string;
}

export interface Certification {
    id: string;
    order: number;
    title: string;
    alt: string;
    url: string;
}

export interface Education {
    id: string;
    title: string;
    school: string;
    date: string;
    location: string;
    description: string;
    gpa: string;
}

export interface AboutMe {
    id: number;
    description: string;
    imageUrl: string;
}
