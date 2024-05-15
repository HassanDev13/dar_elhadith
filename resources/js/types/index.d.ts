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
}

export enum BookCategory {
    LITERATURE = 'literature',
    HUMAN_DEVELOPMENT = 'Human Development',
    HADITH_AND_ITS_SCIENCES = 'Hadith and its sciences',
    JURISPRUDENCE_PRINCIPLES_OBJECTIVES = 'Jurisprudence,principles objectives',
    THE_QURAN_AND_ITS_SCIENCES = 'The Quran and its sciences',
    THE_LANGUAGE = 'the language',
    ALGERIA_HISTORY = 'Algeria history',
    HISTORY_AND_BIOGRAPHIES = 'History and biographies',
    DOCTRINE_AND_RECOMMENDATION = 'Doctrine and recommendation',
    ISLAMIC_THOUGHT_AND_STUDIES = 'Islamic thought and studies',
    ASSOCIATION_BOOKS = 'Association books'
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

export interface Book{
  id: number;
  title: string;
  author: string;
  available: boolean;
  created_at: string;
  createdBy: User;
  updatedBy: User;
  category: BookCategory;
  success: string;
  meta: Meta;
}

export interface QueryParams {
    title?: string;
    available?: string;
    sort_field?: string;
    sort_direction?: string;
    category: BookCategory;
    }


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    books :{
        data: Book[];
        meta: Meta;
        books:Book
    };
    queryParams :{
        queryParams: QueryParams;
    }
    ziggy: Config & { location: string };
};
