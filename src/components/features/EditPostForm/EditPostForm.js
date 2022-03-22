import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, editPost } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import PostForm from '../PostForm/PostForm';
import { Navigate } from 'react-router-dom';

const EditPostForm = () => {

  // get post's data
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = post => {
    dispatch(editPost( {...post, id} ));
    navigate('/');
  }

  if(!postData) return <Navigate to="/" />
    return (
      <PostForm action={handleSubmit} actionText='Edit post' {...postData} />
    );
};

export default EditPostForm;
