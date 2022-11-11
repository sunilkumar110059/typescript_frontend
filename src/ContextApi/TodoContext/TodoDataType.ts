
export type PostType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export type StateType = {
    post: PostType[];
    singlePost: any;
    isLoading: boolean;
    isErorr: boolean;
    isShow: boolean;
    isAddPost: boolean;
}


export enum TodoEnum {
    EDIT_POST = 'EDIT_POST',
    UPDATE_POST = 'UPDATE_POST',
    DELETE_POST = 'DELETE_POST',
    ADD_POST = "ADD_POST",
    Add_POST_FORM_SHOW = "Add_POST_FORM_SHOW"
}

export type ActionType = (
    | { type: TodoEnum.DELETE_POST; payload: number }
    | { type: TodoEnum.EDIT_POST; payload: number }
    | { type: TodoEnum.UPDATE_POST; payload: PostType }
    | { type: TodoEnum.Add_POST_FORM_SHOW; payload?:null }
    | { type: TodoEnum.ADD_POST; payload: PostType }
)

