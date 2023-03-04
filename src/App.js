import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/MainPage';
import CommentsPage from './components/pages/CommentsPage';
import UsersPage from './components/pages/UsersPage';
import PostsPage from './components/pages/PostsPage';

function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element = {<MainPage/>}/>
        <Route path='/users' element = {<UsersPage/>}/>
        <Route path='/comments' element = {<CommentsPage/>}/>
        <Route path='/posts' element = {<PostsPage/>}/>
      </Routes>
    </section>
  );
}

export default App;