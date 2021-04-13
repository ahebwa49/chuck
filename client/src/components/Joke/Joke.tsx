import React, { useState, FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import Error from '../Error/Error';
import './joke.scss';

interface iJokeProps {
  category: string;
}

interface iJokeData {
  joke: {
    id: string;
    url: string;
    icon_url: string;
    value: string;
  };
}

const GET_JOKE = gql`
  query Joke($category: String!) {
    joke(category: $category) {
      id
      url
      icon_url
      value
    }
  }
`;

const Joke: FC<iJokeProps> = (props) => {
  const { loading, error, data } = useQuery<iJokeData>(GET_JOKE, {
    variables: { category: props.category },
  });
  if (loading) return <p>loading...</p>;
  if (error) return <Error error={error.message} />;

  return <div className="joke">{data?.joke.value}</div>;
};

export default Joke;
