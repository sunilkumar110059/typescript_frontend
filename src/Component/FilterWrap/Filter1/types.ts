
export type initialStateType = {
    products: any;
    filter_products: any;
    isLoading: boolean;
    isError: boolean;
}

export enum ENUMS {
    GET_DATA = "GET_DATA",
    LOADING = "LOADING",
    ERRORS = "ERRORS",
    SEARCH_FILTER = "SEARCH_FILTER",
    CATEGORY_FILTER = "CATEGORY_FILTER",
    COMPANY_FILTER = "COMPANY_FILTER",
    COLOR_FILTER = "COLOR_FILTER",
}

export type actionType = (
    | { type: ENUMS.LOADING; payload?: null }
    | { type: ENUMS.ERRORS; payload?: null }
    
    | { type: ENUMS.GET_DATA; payload: any }
    | { type: ENUMS.SEARCH_FILTER; payload: string }
    | { type: ENUMS.CATEGORY_FILTER; payload: string }
    | { type: ENUMS.COMPANY_FILTER; payload: string }
    | { type: ENUMS.COLOR_FILTER; payload: string }

)