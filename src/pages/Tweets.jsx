import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../conponents/Card/Card';
import { getUser } from '../redux/userOperations';
import { SectionStyled } from './Tweets.syled';

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  },[dispatch])
  
  return <SectionStyled>
    <Card/>
  </SectionStyled>;
};

export default Tweets;
