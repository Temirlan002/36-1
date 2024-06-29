import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SouzProps } from "../components/Souz";

export const getUsers = createAsyncThunk(
    'getUsers',
    async function (info, { dispatch, rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = response.json()        
        } catch (e) {
            console.error(e)
        }
    }
)


const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        postsTitle: 'Ronaldo',
        users: []
    },
    reducers: {
        postsInfo: (state, action) => {
            state.postsTitle = 'Mbappe'
        },
        postsInfoBack: (state, action) => {
            state.postsTitle = action.payload
        },
        usersInfo: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { postsInfo, postsInfoBack, usersInfo } = postsSlice.actions

export default postsSlice.reducer