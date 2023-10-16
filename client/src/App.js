import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';


import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <BrowserRouter>
        <MenuBar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              {/* Your layout or container components can go here */}
              <Outlet /> {/* This is where the child routes will be rendered */}
            </>
          )}
        >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/:postId" element={<SinglePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
