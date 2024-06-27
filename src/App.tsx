/** 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
*/
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Projects from './components/Projects';
//import Header from './components/Header';

function App() {
  return (
    <Router>
      <AppBar position="static"sx={{ backgroundColor: '#4A6572', height: '65px', zIndex: theme => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Stevenyucodes Portfolio
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            Blog
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
