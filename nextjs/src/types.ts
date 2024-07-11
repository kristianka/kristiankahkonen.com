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
        cover: {
            data: {
                id: number;
                attributes: {
                    formats: {
                        thumbnail: {
                            width: number;
                            height: number;
                            url: string;
                        };
                    };
                };
            };
        };
        createdBy: {
            data: {
                attributes: {
                    firstname: string;
                    lastname: string;
                };
            };
        };
        updatedBy: {
            data: {
                attributes: {
                    firstname: string;
                    lastname: string;
                };
            };
        };
    };
}
