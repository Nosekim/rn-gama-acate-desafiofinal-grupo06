import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { 
    ICategory, 
    ICategories, 
    IStack, 
    IStacks, 
    IState, 
    IStates, 
    IDev, 
    IDevsList,
    IFilter,
    IFilters,
    IFilteredDevs, 
    IFavorites, 
    ILoadingData } from "../../../types";

const initialState = {
    categories: [],
    stacks: [],
    states: [],
    devsList: [],
    favorites: [],
    filters: [],
    filteredDevs: [],
    loadingData: false
}

const DevsDataReducer = createSlice({
    name: 'devsReducer',
    initialState,
    reducers: {
        listCategories: (state: ICategories, action: PayloadAction<ICategory>) => {
            state.categories = state.categories.concat(action.payload)
        },
        listStacks: (state: IStacks, action: PayloadAction<IStack>) => {
            state.stacks = state.stacks.concat(action.payload)
        },
        listStates: (state: IStates, action: PayloadAction<IState>) => {
            state.states = state.states.concat(action.payload)
        },
        listDevs: (state: IDevsList, action: PayloadAction<IDev>) => {
            state.devsList = state.devsList.concat(action.payload)
        },
        addFilter: (state: IFilters, action: PayloadAction<IFilter>) => {
            state.filters = [...state.filters, action.payload]
        },
        removeFilter: (state: IFilters, action: PayloadAction<string>) => {
            state.filters = state.filters.filter(item => item.stack !== action.payload)
        },
        manageExpFilter: (state: IFilters, action: PayloadAction<IFilter>) => {
            state.filters = state.filters.map(item => {

                if(item.stack === action.payload.stack) {

                    const { stack, junior, middle, senior } = action.payload;

                    return { stack, junior, middle, senior }
                }

                return item;
            })
        },
        addFavorite: (state: IFavorites, action: PayloadAction<string>) => {
            state.favorites = [...state.favorites, action.payload]
        },
        listFilteredDevs: (state: IFilteredDevs, action: PayloadAction<IFilteredDevs>) => {
            state.filteredDevs = [ ...action.payload ]
        },
        removeFavorite: (state: IFavorites, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(item => item !== action.payload)
        },
        changeLoadingStatus: (state: ILoadingData, action: PayloadAction<boolean>) => {
            state.loadingData = action.payload;
        }
    }
})

export const { 
    listCategories, 
    listStacks, 
    listStates, 
    listDevs,
    addFilter, 
    removeFilter, 
    manageExpFilter,
    listFilteredDevs,
    addFavorite, 
    removeFavorite, 
    changeLoadingStatus } = DevsDataReducer.actions;

export default DevsDataReducer.reducer;
