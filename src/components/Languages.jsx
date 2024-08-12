import React from 'react';

function Languages() {
  return (
    <div className="container-languages d-flex flex-row-reverse bg-primary py-3">
      <button className="btn btn-light fs-6 text-dark m-3" type="button">
        Spanish
      </button>
      <button className="btn btn-light fs-6 text-dark m-3" type="button">
        English
      </button>
      <button className="btn btn-light fs-6 text-dark m-3" type="button">
        German
      </button>
    </div>
  );
}

export default Languages;
