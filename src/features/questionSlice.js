import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: 0,
//   status: 'idle',
// };

export const questionSlice = createSlice({
  name: "question",
  initialState:{
    questionId: null,
    questionName:null
  },
    
  
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setQuestionInfo: (state, action) => {
      
      console.log( state.questionId = action.payload.questionId);
      console.log(state.questionName=action.payload.questionName);
    },
    

   },
 });

 export const { setQuestionInfo } = questionSlice.actions;

 export const selectQuestionId = (state) =>{
  console.log(state.question.questionId);
   return state.question.questionId;
 }  
 export const selectQuestionName = (state) => {
  console.log(state.question.questionName);
  return state.question.questionName;
 } 
 
 
 export default questionSlice.reducer;