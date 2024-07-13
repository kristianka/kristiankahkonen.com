export interface BlogApiResponse {
    data: Blog[];
}

export interface Blog {
    id: string;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
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
