import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <>
      <div className='flex flex-col p-2 w-full'>
          { children }
      </div>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default Container