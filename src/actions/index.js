
export const getTableData = () => dispatch => {
    return fetch(`https://www.json-generator.com/api/json/get/coJwhddnNe`)
        .then(res => res.json())
        .then(results =>
            dispatch({
                type: 'ROWS',
                results: results
            })
        )
}

export const updateStatus = e => async dispatch => {
    dispatch({
        type: 'UPDATE_STATUS',
        payload: e
    })
}