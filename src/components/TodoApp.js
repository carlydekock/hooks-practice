import React from 'react';
import useTodoState from '../hooks/useTodoState';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid';

function TodoApp() {
  const initialTodos = [{ id: uuid(), task: "Finish project", completed: false}];
  const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);

  // const initialTodos = [
  //   { id: uuid(), task: "Study", completed: false },
  //   { id: uuid(), task: "Water garden", completed: true },
  //   { id: uuid(), task: "Cook dinner", completed: false }
  // ];

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color='inherit'>Todos with hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;