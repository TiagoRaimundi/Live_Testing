import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LivePageHost from '../../pages/livePages/livePageHost';
import Create from '../../pages/botttomTabPages/Create';

const Stack = createNativeStackNavigator();

export default function LiveHostStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeHostPage">
        <Stack.Screen name="HomeHostPage" component={Create}/>
        <Stack.Screen name="LivePageHost" component={LivePageHost} />
    </Stack.Navigator>
  );
}
