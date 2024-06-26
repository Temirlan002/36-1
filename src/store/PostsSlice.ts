import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SouzProps } from "../components/Souz";

// export const getPosts = createAsyncThunk(
//     'getPosts',
//     async function (info, { dispatch, rejectWithValue }) {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = response.json()
//         console.log(data)
//     }
// )


const name = 'posts'

export const getSouz = createAsyncThunk(
    `${name}/getSouz`,
    async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/')
            const data = response
            console.log(data, 'data')
        } catch (error) {
            console.log(error)
        }
    }
)


const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        postsTitle: 'Ronaldo'
    },
    reducers: {
        postsInfo: (state, action) => {
            state.postsTitle = 'Mbappe'
        },
        postsInfoBack: (state, action) => {
            state.postsTitle = action.payload
        }
    }
})

export const { postsInfo, postsInfoBack } = postsSlice.actions

export default postsSlice.reducer