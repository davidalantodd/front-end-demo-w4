import React, { useState } from 'react';

function CountProvider({ children }) {

  return (
      <h1>Let's implement React Context
        {children}
      </h1>
  );
}

export { CountProvider };
