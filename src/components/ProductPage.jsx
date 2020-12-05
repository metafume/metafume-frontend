import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import api from '../utils/api';

const fetchProductDetail = async id => {
  await new Promise(res => setTimeout(res, 1000));
  return api.getProductDetail(id);
};

const ProductPage = () => {
  const { brand, id } = useParams();

  const { data: product, error } = useSWR(`${brand}/${id}`, fetchProductDetail, {
    shouldRetryOnError: false,
  });

  useEffect(() => {
    console.log(product);
  }, [product]);

  if (error) return <div>{error.message}</div>;
  if (!product) return <div>loading...</div>;

  return (
    <>
      <div>{product.name}</div>
      <p>{product.description}</p>
      {product.accords.map((accord, idx) => {
        return (
          <div key={idx}>
            <div style={{ color: accord.styles.color, backgroundColor: accord.styles.background }}>
              {accord.name}
            </div>
          </div>
        );
      })}
      <img src={product.imageUrl} alt={product.name}/>
      {product.notes.map((note, idx) => {
        if (typeof note === 'string') {
          return <span key={idx}>{note}</span>;
        } else {
          return (
            <img
              key={idx}
              src={`${process.env.REACT_APP_STORAGE_URL}${note.path}`}
              alt={note.name}
            />
          );
        }
      })}
    </>
  );
};

export default ProductPage;
