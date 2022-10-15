import React from 'react';

const FormRow = (props) => {
  return (
    <div className="grid grid-cols-2 gap-x-[45px]">
      {props.children}
    </div>
  );
};

export default FormRow;