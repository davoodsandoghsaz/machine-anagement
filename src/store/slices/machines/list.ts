import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

const listSlice = createSlice({
    name: 'machines/list',
    initialState,
    reducers: {
        onRequest(state, action: PayloadAction) {
            state.data = []
        }
    }
})

export const listActions = listSlice.actions
export default listSlice.reducer
