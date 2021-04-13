import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import Joke from '../Joke/Joke';
import './Categories.scss';

interface ICategoriesData {
  categories: string[];
}

const GET_CATEGORIES = gql`
  query {
    categories
  }
`;

const Categories = () => {
  const [selectedCategory, setSelectedCategory]: [
    string,
    (category: string) => void
  ] = useState('');

  React.useEffect(() => {
  }, [selectedCategory]);

  const { loading, error, data } = useQuery<ICategoriesData>(GET_CATEGORIES);

  if (loading) return <Loader />;
  if (error) return <Error error={error.message} />;
  return (
    <>
      <div className="categories-container">
        {data?.categories.map((el: string, i: number) => (
          <span
            key={`${i}${el}`}
            className={
              selectedCategory === el ? 'selected-category' : 'category'
            }
            onClick={() => setSelectedCategory(el)}
          >
            {el}
          </span>
        ))}
      </div>
      {selectedCategory ? <Joke category={selectedCategory} /> : null}
    </>
  );
};

export default Categories;
