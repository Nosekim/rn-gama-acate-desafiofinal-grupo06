import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { listCategories, listStacks, listStates, listDevs, changeLoadingStatus } from "../../store/modules/devsData/reducer";
import { getDataApi } from "../../services";

import { IAppState } from "../../types";

import DevsList from "../../components/DevsList";

export default function Devs() {

    const dispatch = useDispatch();
 
    const { categories, stacks, states, devsList, loadingData } = useSelector((state: IAppState) => state.devs);

    useEffect(() => {

        if(categories.length < 1)
            getDataApi("category", dispatch, listCategories);

        if(stacks.length < 1)
            getDataApi("stacks", dispatch, listStacks);

        if(states.length < 1)
            getDataApi("state", dispatch, listStates);

        if(devsList.length < 1) {

            getDataApi("devs", dispatch, listDevs);
            dispatch(changeLoadingStatus(true));
        }
            
    }, [dispatch, listCategories, listStacks, listStates, listDevs, changeLoadingStatus])

    useEffect(() => {

        if(categories.length > 0 && stacks.length > 0 && states.length > 0 && devsList.length > 0)
            dispatch(changeLoadingStatus(false));    

    }, [loadingData, dispatch, changeLoadingStatus])

    return <DevsList data={devsList} />
}
