import React from 'react';

const Loader = () =>
  (<div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-100 z-50">
    < div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500 border-solid" />
  </div>);

export default Loader;
