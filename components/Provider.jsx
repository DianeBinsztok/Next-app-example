import React from 'react';
import {SessionProvider} from 'next-auth/react';

/*Provider sera un composant parent: il encapsulera d'autres composants */
const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  );
}

export default Provider;