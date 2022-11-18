
export type postType = {
    category: string
    colors: string[];
    company: string;
    description: string;
    featured: boolean;
    id: string;
    image: string;
    name: string;
    price: number
}


export type intialStatetype = {
    post: postType[];
    isLoading: boolean,
    isErorr: boolean,
    sortValue: string
}


export enum ENUMS {
    GET_DATA = "GET_DATA",
    LOADING = "LOADING",
    ERRORS = "ERRORS",
    SORTING_VALUE = "SORTING_VALUE",
    SORT_PRODUCTS = "SORT_PRODUCTS",
}

export type ActionType = (
    | { type: ENUMS.LOADING; payload?: null }
    | { type: ENUMS.ERRORS; payload?: null }

    | { type: ENUMS.GET_DATA; payload: postType[] }
    | { type: ENUMS.SORTING_VALUE; payload: string }
    | { type: ENUMS.SORT_PRODUCTS; payload: postType[] }


)


