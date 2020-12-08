import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useSWR from 'swr';

import api from '../utils/api';

import Header from './Header';
import Loading from './Loading';
import Error from './Error';
import PerfumeAccordMap from './PerfumeAccordMap';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 70px 24px 100px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #4d453e;

  h1 {
    position: relative;
    margin-left: -32px;
    font-size: 32px;
    margin-bottom: 38px;
  }

  p {
    position: relative;
    margin-left: -36px;
    width: 800px;
    line-height: 21px;
  }
`;

const AccordsWrapper = styled.div`
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fff3e6;

  h3 {
    width: 100%;
    padding-top: 24px;
    font-size: 24px;
    text-align: center;
    color: #4d453e;
  }

  div {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NotesWrapper = styled.div`
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #141414;

  h3 {
    width: 100%;
    padding-top: 24px;
    margin-bottom: 24px;
    font-size: 24px;
    text-align: center;
    color: #82776c;
  }

  div {
    width: 260px;
    height: 260px;
    margin: 24px;
    border-radius: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: #82776c 2px dotted;
    font-size: 24px;
    color: #82776c;
    text-align: center;
  }
`;

const fetchProductDetail = async id => {
  await new Promise(res => setTimeout(res, 1000));
  return api.getProductDetail(id);
};

const ProductPage = () => {
  const { brand, id } = useParams();
  const { data: product, error } = useSWR(`${brand}/${id}`, fetchProductDetail, {
    shouldRetryOnError: false,
  });

  if (error) return <Wrapper><Error message={error?.message} back/></Wrapper>;
  if (!product) return <Wrapper><Loading /></Wrapper>;

  return (
    <>
      <Header />
      <PerfumeAccordMap
        name={product.name}
        imageUrl={product.imageUrl}
        accords={product.accords}
      />
      <TextWrapper
        background={product.accords[0].styles.background}
        color={product.accords[0].styles.color}
      >
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </TextWrapper>
      <AccordsWrapper>
        <h3>Accords</h3>
      {product.accords.map((accord, idx) => {
        return (
            <div
              key={idx}
              style={{
                color: accord.styles.color,
                backgroundColor: accord.styles.background,
                width: `${200 * parseInt(accord.styles.width) / 100}px`,
                height: `${200 * parseInt(accord.styles.width) / 100}px`,
              }}>
              {accord.name}
            </div>
        );
      })}
      </AccordsWrapper>
      <NotesWrapper>
        <h3>Notes</h3>
      {product.notes.map((note, idx) => {
        if (typeof note === 'string') {
            return <div key={idx}>{note}</div>;
        } else {
          return (
            <img
              key={idx}
                style={{
                  borderRadius: '36px',
                  width: '260px',
                  margin: '24px',
                }}
              src={`${process.env.REACT_APP_STORAGE_URL}${note.path}`}
              alt={note.name}
            />
          );
        }
      })}
      </NotesWrapper>
    </>
  );
};

export default ProductPage;
