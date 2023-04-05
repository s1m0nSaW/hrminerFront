import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    person: '',
}

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        setPerson: ( state, action ) => {
            state.person = action.payload
        },
    },
})


export const { setPerson } = personSlice.actions;
export default personSlice.reducer;