import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Categories from './components/pages/Categories/Categories';
import PostsCategorized from './components/pages/PostsCategorized/PostsCategorized';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import Post from './components/pages/Post/Post';
import NotFound from './components/pages/NotFound/NotFound';

import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:postCategory" element={<PostsCategorized />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
