import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const tweetsSlice = createSlice({
    name: 'tweets',
    initialState,
    reducers: {
        addTweet: (state, action) => {
            state.value.push(action.payload)
        },

        loadTweets: (state, action) => {
            state.value = action.payload
        },

        deleteTweet: (state, action) => {
            state.value.filter(tweet => tweet.user !== action.payload.user) //content si fonctionne pas
        }

        // updateTweet: (state, action) => {
        //     state.value
        // }

    },
});

export const { addTweet, loadTweets, deleteTweet, updateTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;