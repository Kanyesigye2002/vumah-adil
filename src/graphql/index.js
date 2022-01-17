import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import jwt_decode from 'jwt-decode';
import { useSelector } from '../redux/store';

export default function GraphQlContainer({ children }) {

  const token = useSelector(state => state.Token)

  function isExpired(token) {
    if (token != null) {
      const payload = jwt_decode(token);
      const currentDate = new Date().getTime() / 1000;
      return payload.exp - currentDate <= 0;
    } else {
      return false;
    }
  }

  // const httpLink = createHttpLink({ uri: `http://localhost:8080/graphql` });
  // const httpLink = createHttpLink({ uri: `https://vumah-web-api.herokuapp.com/graphql` });
  // const httpLink = createHttpLink({ uri: `http://vumah.api.webers-droid.com/graphql` });
  const httpLink = createHttpLink({ uri: `https://vumah-api.herokuapp.com/graphql` });
  const cache = new InMemoryCache();

  const authLink = setContext((_, { headers }) => {
    if (token != null && !isExpired(token)) {
      return {
        headers: {
          ...headers,
          'Authorization': `Bearer ${token}`
        }
      };
    } else {
      return { headers };
    }
  });

  const client = new ApolloClient({
    cache: cache,
    link: authLink.concat(httpLink)
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
