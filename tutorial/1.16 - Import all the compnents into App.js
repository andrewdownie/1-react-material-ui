import React from 'react';
import MainArea from './components/MainArea';
import CategoryDrawer from './components/CategoryDrawer';
import AddTodo from './components/AddTodo';
import AddCategory from './components/AddCategory';
import TodoList from './components/TodoList';
import CategoryList from './components/CategoryList';
import TitleBar from './components/TitleBar';
function App() {
  return (
    <div>
      <TitleBar/>
      <CategoryDrawer>
        <AddCategory/>
        <CategoryList/>
      </CategoryDrawer>
      <MainArea>
        <AddTodo/>
        <TodoList/>
      </MainArea>
    </div>
  );
}
export default App;

// Any item we added {props.children} to the render body, can accept elements in between its open and closing tag
