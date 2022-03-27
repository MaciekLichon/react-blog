import { useSelector } from 'react-redux';
import { getPostByCategory } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import Posts from '../../features/Posts/Posts';

const PostsCategorized = () => {

  const { postCategory } = useParams();
  const filteredPosts = useSelector(state => getPostByCategory(state, postCategory));

  if(filteredPosts.length == 0) return <p>No posts in this category...</p>
    return (
      <>
        <div className="d-flex justify-content-between mb-4">
          <h1>Category: {postCategory}</h1>
        </div>
        <Posts posts={filteredPosts}/>
      </>
    );
}

export default PostsCategorized;
