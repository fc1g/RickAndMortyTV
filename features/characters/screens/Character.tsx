import { useQuery } from '@apollo/client';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { RootStackParamList } from '../../../app/providers/NavigationProvider';
import { CustomButton, Error } from '../../../shared/ui';
import { GET_CHARACTER } from '../api';

export default function CharacterScreen({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Character'>) {
  const { width } = useWindowDimensions();
  const { characterId } = route.params;
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id: characterId,
    },
  });
  let imgWidth = 500;
  let imgHeight = 500;
  if (width < 1280) {
    imgWidth = 350;
    imgHeight = 350;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data?.character?.name || 'Character',
    });
  }, [navigation, data]);

  return (
    <View style={[styles.screen, loading && styles.center]}>
      {loading && <ActivityIndicator />}

      {error && <Error error={error} />}

      {data && (
        <View style={styles.container}>
          <Image
            style={{ width: imgWidth, height: imgHeight, objectFit: 'contain' }}
            source={{ uri: data.character.image }}
          />
          <View>
            <Text style={styles.name}>{data.character.name}</Text>
            <Text style={styles.info}>Status: {data.character.status}</Text>
            <Text style={styles.info}>Species: {data.character.species}</Text>
            <Text style={styles.info}>
              Origin: {data.character.origin.name}
            </Text>

            <CustomButton
              style={styles.button}
              label="Go back"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
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
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 44,
  },
  name: {
    fontSize: 44,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 22,
    fontWeight: 'medium',
    marginVertical: 4,
  },
  button: {
    marginTop: 12,
  },
});
