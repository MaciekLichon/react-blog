import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const PostForm = ({action, actionText, ...props}) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({title, shortDescription, content, publishedDate, author});
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
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
