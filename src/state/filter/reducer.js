import * as filterTypes from './types'

//deixar um undercore _ no lugar do state, porque não usamos o state por enquanto function reducer(state, action){
function reducer(_, action){
    switch(action.type){
        case filterTypes.TOGGLE_FILTER:
            return action.payload.filter
        default:
            throw new Error()
    }
}

export default reducer;