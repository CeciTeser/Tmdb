export type User ={
    idDB:string,
    name?: string,
    lastName?: string,
    birthday?: string,
    email?: string,
    password?:string,
    sessionToken?: string,
    role: 'admin' | 'user',
    watched?:number[], 
};

export type TotalResults = {
    page?: number;
    results: Item[];
    total_pages: number;
    total_results?: number;
};

export type Item = {
    poster_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id: number ;
    idDB: string;
    original_title?: string;
    original_language?: string;
    title: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average: number;
    media_type: string;
};

export type Operation = 'add' |  'delete' | 'watched' | 'unwatched'


export type Video = {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string,
};

