import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    value: '',
}

const todoSlice = createSlice({
    name: 'manageToDo',
    initialState,
    reducers: {
        receiveNewText: (state, action) => {
            state.value = action.payload
        },
        addToDo: (state, action) => {
            if (state.value !== '') {
                const item = {
                  text: state.value,
                  isDone: "",
                }
                state.list.push(item)
                state.value = '';
            }
        },
        doneToDo: (state, action) => {
            console.log(action.payload)
            state.list[action.payload].isDone = "done-item"
        },
        deleteToDo: (state, action) => {
            console.log(action.payload)
            state.list.splice(action.payload, 1);
        }
    } 
})

export const { addToDo, doneToDo, deleteToDo, receiveNewText } = todoSlice.actions;

export default todoSlice.reducer;

// const addMessage = e => {
//     if(e.keyCode == 13 && e.shiftKey == false) {
//       handleSubmit(p.values); // <--- all the form values are in a prop
//     }
//   }