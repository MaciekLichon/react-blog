import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Categories = () => {

  const categories = useSelector(getAllCategories);

  return (
    <div className="col-8 m-auto">
      <div className="mb-4">
        <h1>All categories</h1>
      </div>
      {categories.map(category => (
        <Card key={categories.indexOf(category)} className="p-2">
          <Card.Link as={NavLink} to={`/categories/${category}`}>{category}</Card.Link>
        </Card>
      ))}
    </div>
  );
}

export default Categories;
