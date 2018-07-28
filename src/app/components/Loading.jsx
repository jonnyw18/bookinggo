import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
    <ReactLoading type={'balls'} color={color} height={667} width={375} />
);

export default Loading;