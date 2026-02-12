import React, { Children } from 'react'

const Rodape = () => {
  return (
    <footer>
      <p>Feito com ❤️ por <a href="https://github.com">{children}</a>
      </p>
    </footer>
  );
};

export default Rodape
