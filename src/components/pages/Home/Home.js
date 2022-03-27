import Posts from '../../features/Posts/Posts';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';

const Home = () => {

  const posts = useSelector(getAllPosts);

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h1>All posts</h1>
        <Card.Link as={NavLink} to="/post/add" className="btn btn-outline-info d-flex align-items-center">Add post</Card.Link>
      </div>
      <Posts posts={posts}/>
    </>
  );
};

export default Home;
