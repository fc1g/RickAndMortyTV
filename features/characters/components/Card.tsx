import { useApolloClient } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { RootStackParamList } from '../../../app/providers/NavigationProvider';
import { GET_CHARACTER } from '../api';

type CardProps = {
  id: number;
  name: string;
  image: string;
};

export default function Card({ id, name, image }: CardProps) {
  const { width, height } = useWindowDimensions();
  const client = useApolloClient();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  let imgWidth = 500;
  let imgHeight = 500;
  if (width < 1280) {
    imgWidth = 250;
    imgHeight = 250;
  }

  const onFocus = useCallback(() => {
    client.query({
      query: GET_CHARACTER,
      variables: {
        id,
      },
      fetchPolicy: 'cache-first',
    });
  }, [client, id]);

  const onPress = useCallback(() => {
    navigation.navigate('Character', {
      characterId: id,
    });
  }, [navigation, id]);

  return (
    <View style={styles.container}>
      <Pressable
        focusable
        onFocus={onFocus}
        onPress={onPress}
        style={({ focused }) => [
          styles.character,
          focused && styles.focusedCharacter,
        ]}
      >
        <Image
          style={{ width: imgWidth, height: imgHeight, objectFit: 'contain' }}
          source={{ uri: image }}
        />
      </Pressable>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  character: {
    marginHorizontal: 24,
  },
  focusedCharacter: {
    transform: [{ scale: 1.1 }],
  },
  text: {
    fontSize: 24,
    marginTop: 36,
    fontWeight: 'medium',
  },
});
