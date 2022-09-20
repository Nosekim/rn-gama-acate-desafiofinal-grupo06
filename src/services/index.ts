export const getDataApi = (folder: string, dispatch: any, setList: any) => {

    fetch(`https://finddev-api.herokuapp.com/${folder}`)
    .then(response => {

        response.json()
        .then(result => dispatch(setList(result)))
    })
    .catch(error => console.error(error))
}

