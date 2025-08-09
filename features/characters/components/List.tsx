import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Character } from '../api';
import CharacterCard from './Card';

type ListProps = {
  results: Character[];
  children: React.ReactNode;
};

export default function List({ results, children }: ListProps) {
  if (results.length < 1) {
    return <Text style={styles.emptyList}>This list is empty!</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={results}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item: { id, name, image } }) => (
          <CharacterCard id={id} name={name} image={image} />
        )}
      />

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 36,
  },
  emptyList: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 24,
  },
});
