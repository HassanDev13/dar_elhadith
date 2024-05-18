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
    success: string;
    meta: Meta;

}




export interface Linke {
  url: string | null;
  label: string;
  active: boolean;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Linke[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}



export interface QueryParams {
    title?: string;
    available?: string;
    sort_field?: string;
    sort_direction?: string;
    }


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    news : {
        news :News;
        meta: Meta;
    };
    queryParams :{
        queryParams: QueryParams;
    }
    ziggy: Config & { location: string };
};
