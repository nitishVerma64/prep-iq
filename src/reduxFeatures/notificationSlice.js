import { createSlice, nanoid } from "@reduxjs/toolkit";
import notificationData from "../component/pages/Notification/notificationData";

const initialState = {
    notification: notificationData,
}

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        deleteNotification: (state, action)=>{
            state.notification = state.notification.filter((notification)=> notification.id !== action.payload)
        }
    }
})

export const {deleteNotification} = notificationSlice.actions
export default notificationSlice.reducer