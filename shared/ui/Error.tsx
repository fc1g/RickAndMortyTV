import { ApolloError } from '@apollo/client';
import { StyleSheet, Text, View } from 'react-native';

type ErrorProps = {
  error: ApolloError | undefined;
};

export default function Error({ error }: ErrorProps) {
  return (
    <View style={styles.screen}>
      <Text style={styles.name}>{error?.name}</Text>
      <Text style={styles.message}>{error?.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 54,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 36,
    fontWeight: 'medium',
  },
});
