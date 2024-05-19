const tasksSlice = createSlice({
  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
