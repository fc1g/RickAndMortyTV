import { StatusBar } from 'expo-status-bar';
import ApolloClientProvider from './providers/ApolloProvider';
import NavigationProvider from './providers/NavigationProvider';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <ApolloClientProvider>
        <NavigationProvider />
      </ApolloClientProvider>
    </>
  );
}
