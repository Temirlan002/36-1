import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    'getUsers',
    async function (info, { dispatch, rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()  
            dispatch(usersInfo(data))
        } catch (e) {
            console.error(e)
        }
    }
)

const aboutSlice = createSlice({
    name: 'aboutSlice',
    initialState: {
        title: 'GeekTech',
        inputValue: '',
        users: []
    },
    reducers: {
        changeAboutTitle: (state, action) => {
            state.title = 'Geeks';
        },
        changeAboutTitleWithParams: (state, action) => {
            state.title = action.payload
        },
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        usersInfo: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { changeAboutTitle, changeAboutTitleWithParams, changeInput, usersInfo } = aboutSlice.actions

export default aboutSlice.reducer