import { useQuery } from '@apollo/client';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Error } from '../../../shared/ui';
import { GET_CHARACTERS } from '../api';
import { CharactersList, Pagination } from '../components';
import { usePaginationStore } from '../store';

export default function CharactersListScreen() {
  const page = usePaginationStore(state => state.page);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
    },
  });

  return (
    <View style={[styles.screen, loading && styles.center]}>
      {loading && <ActivityIndicator />}

      {error && <Error error={error} />}

      {data && (
        <CharactersList results={data?.characters?.results ?? []}>
          <Pagination pages={data?.characters?.info?.pages ?? 1} />
        </CharactersList>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
