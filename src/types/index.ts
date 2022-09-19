export interface ICategory {
    id: number;
    name: string;
}

export interface ICategories {
    categories: ICategory[];
}

export interface IStack {
    id: number;
    label: string;
}

export interface IStacks {
    stacks: IStack[];
}

export interface IState {
    id: number;
    value: string;
}

export interface IStates {
    states: IState[];
}

export interface IDev {
    id: number;
    photo: string;
    name: string;
    category: number;
    stack: number;
    state: number;
    description: string;
}

export interface IDevsList {
    devsList: IDev[];
}

export interface IFavorites {
    favorites: number[];
}

export interface ILoadingData {
    loadingData: boolean;
}

export interface IAppState {
    auth: {
        isLoggedIn: boolean;
    },
    devs: {
        categories: ICategory[];
        stacks: IStack[];
        states: IState[];
        devsList: IDev[];
        favorites: number[];
        loadingData: boolean;
    }
}