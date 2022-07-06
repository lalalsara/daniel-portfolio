import React from 'react';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Resume from '../components/Resume/Resume';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Resume></Resume>
    </>
  );
};
