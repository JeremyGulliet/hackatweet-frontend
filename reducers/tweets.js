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

        // loadTweets: (state) => {
        //     state.value.
        // }
        deleteTweet: (state, action) => {
            state.value.filter(tweet => tweet.user !== action.payload.user) //content si fonctionne pas
        }

        // updateTweet: (state, action) => {
        //     state.value
        // }

    },
});

export const { addTweet, loadTweet, deleteTweet, updateTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;