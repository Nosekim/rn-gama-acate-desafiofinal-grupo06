import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

interface Props {
  children: React.ReactNode;
}

const httpLink = createHttpLink({
  uri: "https://westus.azure.realm.mongodb.com/api/client/v2.0/app/acate-gama-desafio-grupo-db-qfpod/graphql",
});

const authLink = setContext((_, { headers }) => {
  //const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      //authorization: token ? `Bearer ${token}` : "",
      apiKey:
        "h6k2rYB1LVyFyZHplaHbrVs5YmiDvudW4eDhp1PwkoFLkXPSq7vPQrKiIGDV7eov",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const ApolloGraphQL = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloGraphQL;
