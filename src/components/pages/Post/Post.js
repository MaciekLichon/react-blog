import { useParams } from 'react-router';
import { getPostById, removePost } from '../../../redux/postsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Modal } from 'react-bootstrap';
import { NavLink, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { dateToStr } from '../../../utils/dateToStr';

const Post = () => {

  // Rendering post
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Removing post
  const dispatch = useDispatch();
  const removeSelectedPost = () => {
    dispatch(removePost(postData.id));
  };

  if(!postData) return <Navigate to="/" />
    return (
      <>
        {/* Post data start */}
        <div className="col-6 m-auto">
          <div className="d-flex justify-content-between mb-4">
            <h1 className="m-0">{postData.title}</h1>
            <div className="d-flex">
              <Card.Link as={NavLink} to={`/post/edit/${postData.id}`} className="btn btn-outline-info d-flex align-items-center me-2">Edit</Card.Link>
              <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
            </div>
          </div>
          <Card.Subtitle className="mt-1">
            <span className="fw-bold">Author: </span>
            <span className="fw-normal">{postData.author}</span>
          </Card.Subtitle>
          <Card.Subtitle className="mt-1">
            <span className="fw-bold">Published: </span>
            <span className="fw-normal">{dateToStr(postData.publishedDate)}</span>
          </Card.Subtitle>
          <Card.Subtitle className="mt-1">
            <span className="fw-bold">Category: </span>
            <span className="fw-normal">{postData.category}</span>
          </Card.Subtitle>
          {/* <Card.Text className="mt-4">{postData.content}</Card.Text> */}
          <Card.Text className="mt-4" dangerouslySetInnerHTML={{ __html: postData.content }}/>
        </div>
        {/* Post data end */}

        {/* Modal start */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>This operation will completely remove this post from the app. Are you sure you want to do that?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="danger" onClick={removeSelectedPost}>Remove</Button>
          </Modal.Footer>
        </Modal>
        {/* Modal start */}
      </>
    );
};

export default Post;
