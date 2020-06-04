import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width='100%'
    height='100%'
    viewBox='0 0 400 160'
    backgroundColor='#e3e3e3'
    foregroundColor='#ededed'
    {...props}
  >
    <rect x='330' y='4' width='65' height='20' />
    <rect x='1' y='4' width='130' height='20' />
    <rect x='1' y='40' rx='3' ry='2' width='85' height='110' />
    <rect x='104' y='40' rx='3' ry='2' width='85' height='110' />
    <rect x='207' y='40' rx='3' ry='2' width='85' height='110' />
    <rect x='310' y='40' rx='3' ry='2' width='85' height='110' />
  </ContentLoader>
);

export default Loader;
