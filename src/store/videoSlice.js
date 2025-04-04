import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videoList: null,
        videoCategories: null,
        searchQueries: null,
        channelInfo: null,
        liveComments: null
    },
    reducers: {
        addVideoList: (state,action)=>{
            state.videoList = action.payload
        },
        addVideoCategory: (state,action)=>{
            state.videoCategories = action.payload
        },
        addSearchQuery: (state,action)=>{

            state.searchQueries = {...state.searchQueries, ...action.payload}
        },
        addChannelInfo: (state,action)=>{
            state.channelInfo = action.payload
        },
        addLiveComments: (state,action)=>{
            state.liveComments = action.payload
        }
    }
})

export const {addVideoList,addVideoCategory,addSearchQuery,addChannelInfo,addLiveComments} = videoSlice.actions
export default videoSlice.reducer