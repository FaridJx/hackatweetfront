import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: {username: null, firstname: null, likedTweets: [], token: null, canTweet: false},
};

export const usersSlice = createSlice({
 name: 'users',

initialState,
 reducers: {
   login: (state, action) => {
     state.value.username = action.payload.username;
     state.value.firstname = action.payload.firstname;
     state.value.likedTweets = action.payload.likedTweets;
     state.value.token = action.payload.token;
     state.value.canTweet = true;
   },

   logout: (state, action) => {
     state.value.username = null;
     state.value.firstname = null;
     state.value.likedTweets = [];
     state.value.token = null;
     state.value.canTweet = false;
   }
 },
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;