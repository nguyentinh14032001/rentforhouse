import React from 'react';

const FormGroup = (props) => {
  return (
    <div className="flex flex-col mb-4 lg:mb-5 gap-y-3">
      {props.children}
    </div>
  );
};

export default FormGroup;