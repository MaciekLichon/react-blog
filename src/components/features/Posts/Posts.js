import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';


const Posts = ({posts}) => {

  return (
    <>
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
              <Card.Subtitle className="mt-1">
                <span className="fw-bold">Category: </span>
                <span className="fw-normal">{post.category}</span>
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
