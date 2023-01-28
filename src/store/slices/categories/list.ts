import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist'

const initialState = {
    data: []
}

const listSlice = createSlice({
    name: 'categpries/list',
    initialState,
    reducers: {
        onRequest(state, action: PayloadAction) {
            state.data = []
        },
        extraReducers: (builder: any) => {
            builder.addCase(PURGE, state => {
                state = initialState
            })
        }
    }
})

export const listActions = listSlice.actions
export default listSlice.reducer
