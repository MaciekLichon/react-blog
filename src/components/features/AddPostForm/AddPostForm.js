import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';

const AddPostForm = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost( {title, shortDescription, content, publishedDate, author} ));
    navigate('/', { replace: true });
  }

  return (
    <Form className="col-6 m-auto" onSubmit={handleSubmit}>

      <h1 className="mb-4">Add post</h1>

      <Form.Group className="mb-3 col-6">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 col-6">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3 col-6">
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" value={publishedDate} onChange={e => setPublishedDate(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={4} value={shortDescription} onChange={e => setShortDescription(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" rows={10} value={content} onChange={e => setContent(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>
  );
};

export default AddPostForm;
