import { initialStateType, actionType, ENUMS } from "./types"

const reducerFun = (state: initialStateType, action: actionType) => {

    const { type, payload } = action
    switch (type) {

        // data load start
        case ENUMS.LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case ENUMS.ERRORS:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case ENUMS.GET_DATA:
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: payload,
                filter_products: payload,
            }
        // data load end

        // data filter by seach bar start
        case ENUMS.SEARCH_FILTER:
            let AllSearchProduct = [...state.products]
            let SearchProducts = [...state.filter_products]

            if (payload) {
                SearchProducts = AllSearchProduct.filter((curElem: any) => {
                    return curElem.name.toLowerCase().includes(payload)
                })
            }
            else {
                SearchProducts = AllSearchProduct
            }

            return {
                ...state,
                filter_products: SearchProducts
            }
        // data filter by seach bar end


        // data filter by category start
        case ENUMS.CATEGORY_FILTER:
            let AllCategoryProduct = [...state.products]
            let CategoryProducts = [...state.filter_products]
            if (payload !== "All") {
                CategoryProducts = AllCategoryProduct.filter((curElem: any) => curElem.category === payload)
            }
            else {
                CategoryProducts = AllCategoryProduct
            }
            return {
                ...state,
                data2:"sunil",
                filter_products: CategoryProducts
            }
        // data filter by category end

        // data filter by company start
        case ENUMS.COMPANY_FILTER:
            let AllCompanyProduct = [...state.products]
            let CompanyProducts = [...state.filter_products]
            if (payload !== "All") {
                CompanyProducts = AllCompanyProduct.filter((curElem: any) => curElem.company === payload)
            }
            else {
                CompanyProducts = AllCompanyProduct
            }
            return {
                ...state,
                filter_products: CompanyProducts
            }
        // data filter by company end


        // data filter by color start
        case ENUMS.COLOR_FILTER:
            let AllColorProduct = [...state.products]
            let ColorProducts = [...state.filter_products]
            if (payload !== "All") {
                ColorProducts = AllColorProduct.filter((curElem: any) => {
                    return curElem.colors.includes(payload)
                })
            }
            else {
                ColorProducts = AllColorProduct
            }
            return {
                ...state,
                filter_products: ColorProducts
            }
        // data filter by color end







        default: return state
    }


}

export { reducerFun }