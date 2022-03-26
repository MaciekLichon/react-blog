import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';


const Posts = () => {

  const posts = useSelector(getAllPosts);

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h1>All posts</h1>
        <Card.Link as={NavLink} to="/post/add" className="btn btn-outline-info d-flex align-items-center">Add post</Card.Link>
      </div>
      <Row xs={1} sm={2} md={3} className="g-4">
        {posts.map(post => (
          <Col key={post.id}>
            <Card className="p-3 align-items-start">
              <Card.Title className="fw-bold">{post.title}</Card.Title>
              <Card.Subtitle className="mt-1">
                <span className="fw-bold">Author: </span>
                <span className="fw-normal">{post.author}</span>
              </Card.Subtitle>
              <Card.Subtitle className="mt-1">
                <span className="fw-bold">Published: </span>
                <span className="fw-normal">{dateToStr(post.publishedDate)}</span>
              </Card.Subtitle>
              <Card.Text className="mt-2">{post.shortDescription}</Card.Text>
              <Card.Link as={NavLink} to={`/post/${post.id}`} className="btn btn-primary">Read more</Card.Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Posts;
