export const table = (state = {}, action) => {
    switch (action.type) {
        case 'ROWS':
            return {
                ...state,
                rows: action.results
            }
        case 'UPDATE_STATUS': {
            let rows = state.rows.map(row => {
                if (row.id === action.payload.target.name) {
                  row.status = action.payload.target.value
                  return row
                }
                return row
              })            
              return {
                ...state,
                rows: rows
            }
        }
        default:
            return state
    }
}
export default table
