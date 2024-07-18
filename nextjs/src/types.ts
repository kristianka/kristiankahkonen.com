export interface BlogApiResponse {
    data: Blog[];
}

export interface Blog {
    id: string;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    tags?: string[];
    title: string;
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
