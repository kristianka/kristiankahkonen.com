export interface Res {
    data: Blog[];
}

export interface ResById {
    data: Blog;
}

export interface Blog {
    id: number;
    attributes: {
        title: string;
        description: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}
