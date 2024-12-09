import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">
      {children}
    </div>
  );
};

export default Wrapper;
