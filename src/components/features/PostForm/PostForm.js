import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import ReactQuill from 'react-quill'; // edytor contentu
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker"; // date picker
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form"; // walidacja formularza
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const PostForm = ({action, actionText, ...props}) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [category, setCategory] = useState(props.category || '');

  // 2 nowe stany dla errorow, ktorych nie mozna bylo zwalidowac przez useForm ze wzgledu na wykorzystanie komponentow z innych paczek
  const [dateError, setDateError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const handleSubmit = e => {
    // e.preventDefault(); - to dzialanie jest teraz przejete przez 'validate'
    setDateError(!publishedDate);
    setContentError(!content);
    if(content && publishedDate) {
      action({title, shortDescription, content, publishedDate, author, category});
    }
  }

  const { register, handleSubmit: validate, formState: { errors } } = useForm(); // walidacja formularza

  const categories = useSelector(getAllCategories);

  return (
    <Form className="col-6 m-auto" onSubmit={validate(handleSubmit)}>

      <h1 className="mb-4">Add post</h1>

      <Form.Group className="mb-3 col-6">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register("title", { required: true, minLength: 4 })}
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and the input must have more than 3 signs</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-6">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register("author", { required: true, minLength: 4 })}
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        {errors.author && <small className="d-block form-text text-danger mt-2">This field is required and the input must have more than 3 signs</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-6">
        <Form.Label>Published</Form.Label>
        <DatePicker selected={publishedDate} onChange={(date:Date) => setPublishedDate(date)} />
        {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control
          {...register("category", { required: true, validate: value => value !== 'Select category...' })}
          as="select"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option>Select category...</option>
          {categories.map(category => (
            <option key={categories.indexOf(category)}>{category}</option>
          ))}
        </Form.Control>
        {errors.category && <small className="d-block form-text text-danger mt-2">Select a category</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register("shortDescription", { required: true, minLength: 20 })}
          as="textarea"
          rows={4}
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)}
        />
        {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required and the input must have more at least 20 signs</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme="snow" value={content} onChange={setContent}/>
        {contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>

      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
