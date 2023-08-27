import React from 'react';
import {SessionProvider} from 'next-auth/react';

/*
Les Provider Components définissent un contexte dont les props seront accessibles pour tous les composants de l’application, comme la session.
- SessionProvider est un Provider Component. Il est ici encapsulé par Le composant Provider qui lui sert juste de wrapper.
- SessionProvider prend une prop de session et la rend disponible pour ses composants enfants.
- Ces composants enfants sont les Consumer Components: ils auront à leur tour accès à la props de session, partout dans l’application.
    
  Grâce au mécanisme du Context API, ces composants n'ont pas directement accès à la prop `session`, mais peuvent accéder à la session en utilisant le hook `useSession` ou d'autres mécanismes fournis par NextAuth.

Ainsi, les composants descendants (children) de **`SessionProvider`** ont la capacité d'accéder à la session sans que celle-ci leur soit explicitement passée en tant que prop.
*/

const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  );
}

export default Provider;