import { intialStatetype, ActionType, ENUMS } from './types'

const reducerFn = (state: intialStatetype, action: ActionType) => {

    const { type, payload } = action
    switch (type) {

        // get data start
        case ENUMS.LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ENUMS.ERRORS:
            return {
                ...state,
                isLoading: false,
                isErorr: true,
            }

        case ENUMS.GET_DATA:
            return {
                ...state,
                isLoading: false,
                isErorr: false,
                post: payload
            }
        // get data end

        // sorting start
        case ENUMS.SORTING_VALUE:
            return {
                ...state,
                sortValue: payload
            }

        case ENUMS.SORT_PRODUCTS:
            let newSortdata
            if (state.sortValue === "Price(Lowest)") {
                newSortdata = payload.sort((a, b) => a.price - b.price)
            }

            else if (state.sortValue === "Price(Highest)") {
                newSortdata = payload.sort((a, b) => b.price - a.price)
            }
            else if (state.sortValue === "Price(A-Z)") {
                newSortdata = payload.sort((a, b) => a.name.localeCompare(b.name))
            }

            else if (state.sortValue === "Price(Z-A)") {
                newSortdata = payload.sort((a, b) => b.name.localeCompare(a.name))
            }
            return {
                ...state,
                post: newSortdata || payload
            }
        // sorting end


        default: return state
    }

}


export { reducerFn }