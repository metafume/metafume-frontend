import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useSWR from 'swr';

import api from '../utils/api';
import { fadeIn } from './styles/keyframes';

import Loading from './Loading';
import ErrorBox from './ErrorBox';
import PerfumeAccordMap from './PerfumeAccordMap';
import CenterWrapper from './CenterWrapper';

import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { float } from './styles/keyframes';

const TextWrapper = styled.div`
  width: 100%;
  padding: 70px 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.hunterGreen};
  animation: 1s ${fadeIn} ease-in-out;

  h1 {
    font-size: 32px;
    margin-bottom: 38px;
  }

  h6 {
    margin-bottom: 16px;
  }

  p {
    width: 80%;
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
  background-color: ${({ theme }) => theme.hunterGreen};
  border-bottom: 1px solid ${({ theme }) => theme.spaceShuttle};
  animation: 1s ${fadeIn} ease-in-out;
  position: relative;

  h3 {
    width: 100%;
    padding: 24px 0;
    font-size: 21px;
    text-align: center;
    color: ${({ theme }) => theme.americano};
  }
`;

const NotesWrapper = styled.div`
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.hunterGreen};
  animation: 1s ${fadeIn} ease-in-out;

  h3 {
    width: 100%;
    padding: 24px 0;
    font-size: 21px;
    text-align: center;
    color: ${({ theme }) => theme.americano};
  }
`;

const AccordBox = styled.div`
  width: ${({ size }) => `${300 * parseInt(size) / 100}px`};
  height: ${({ size }) => `${300 * parseInt(size) / 100}px`};
  border: 1px ${({ background }) => background} solid;
  color: ${({ background }) => background};
  background-color: transparent;
  border-radius: 50%;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => `${parseInt(size) / 3.4}px`};
  text-align: center;
  transition: transform 0.4s, background-color 0.4s, color 0.4s;
  animation: ${({ size }) => `${300 / parseInt(size)}s`} ${float} infinite;
  opacity: 0.7;

  &:hover {
    background-color: ${({ background }) => background};
    color: ${({ color }) => color};
    transform: scale(1.06);
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

const NoteBox = styled.div`
  width: 260px;
  height: 90px;
  margin: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.americano};
  font-size: 36px;
  text-align: center;
  transition: border 0.6s, color 0.6s;

  &:hover {
    color: ${({ theme }) => theme.provincialPink};
  }
`;

const StyledFaRegHeart = styled(FaRegHeart)`
  margin-bottom: 32px;
  cursor: pointer;
  transition: color 0.4s, transform 0.4s ease-out;
  transform: scale(1.1);

  &:hover {
    transform: scale(1.3);
  }
`;

const StyledFaHeart = styled(FaHeart)`
  margin-bottom: 32px;
  cursor: pointer;
  transform: scale(1.3);
`;

// The promise is a controls that handles time for loading test
const DELAY = 1000;
const fetchProductDetail = async path => {
  await new Promise(res => setTimeout(res, DELAY));
  return api.getProductDetail(path);
};

const ProductPage = ({ onAdd, onDelete, user }) => {
  const [isFavorite, setFavorite] = useState(false);
  const { brand, id: productId } = useParams();
  const { data: product, error } = useSWR(`${brand}/${productId}`, fetchProductDetail, {
    shouldRetryOnError: false,
  });

  useEffect(() => {
    if (!user) return;

    const isMyFavorite =
      user.myFavorite.some(product => product?.productId === productId);

    if (isMyFavorite) setFavorite(true);
  }, [user]);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorite(false);
      onDelete(user._id, productId);
    } else {
      setFavorite(true);
      onAdd(user._id, productId);
    }
  };

  if (error) return <CenterWrapper><ErrorBox message={error?.message} back/></CenterWrapper>;
  if (!product) return <CenterWrapper><Loading /></CenterWrapper>;

  return (
    <>
      <PerfumeAccordMap
        name={product.name}
        imageUrl={product.imageUrl}
        accords={product.accords}
      />
      <TextWrapper
        background={product.accords[0].styles.background}
        color={product.accords[0].styles.color}
      >
        {
          user && (isFavorite ?
          <StyledFaHeart
            size={28}
            onClick={toggleFavorite}
          />
          :
          <StyledFaRegHeart
            size={28}
            onClick={toggleFavorite}
          />)
        }
        <h6>{product.brand}</h6>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </TextWrapper>
      <AccordsWrapper>
        <h3>Accords</h3>
        {product.accords.map((accord, idx) => {
          return (
            <AccordBox
              key={idx}
              color={accord.styles.color}
              background={accord.styles.background}
              size={accord.styles.width}
            >
              {accord.name}
            </AccordBox>
          );
        })}
      </AccordsWrapper>
      <NotesWrapper>
        <h3>Notes</h3>
        {product.notes.map((note, idx) => {
          if (typeof note === 'string') {
            return <NoteBox key={idx}>{note}</NoteBox>;
          } else {
            return <NoteBox key={idx}>{note.name}</NoteBox>;
          }
        })}
      </NotesWrapper>
    </>
  );
};

ProductPage.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    isSubscribed: PropTypes.bool.isRequired,
    myFavorite: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      productId: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  }),
};

export default ProductPage;
