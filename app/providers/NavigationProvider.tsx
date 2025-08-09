import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharacterScreen, CharactersListScreen } from '../../features';

export type RootStackParamList = {
  CharactersList: undefined;
  Character: {
    characterId: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavigationProvider() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CharactersList">
        <Stack.Screen
          name="CharactersList"
          component={CharactersListScreen}
          options={{ title: 'Rick and Morty characters list' }}
        />
        <Stack.Screen name="Character" component={CharacterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
