import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface News {
    id: number;
    title: string;
    created_at: string;
    description: string;
    createdBy: User;
    updatedBy: User;
    image_path: string;
    data: News[];

}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    news : {
        news :News;
    };
    ziggy: Config & { location: string };
};
