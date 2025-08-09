import { ApolloProvider } from '@apollo/client';
import { client } from '../../shared/api';

type ApolloClientProviderProps = {
  children: React.ReactNode;
};

export default function ApolloClientProvider({
  children,
}: ApolloClientProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
