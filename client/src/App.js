import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { Container } from 'semantic-ui-react';



import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
// import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Container>
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
      </Container>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
