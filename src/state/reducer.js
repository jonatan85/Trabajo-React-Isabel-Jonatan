
export const initialState = {
    token: null,
}


export function reducer (state = initialState, action) {
    switch (action) {
        default: 
            return {...state, token: action.token}
    }
}