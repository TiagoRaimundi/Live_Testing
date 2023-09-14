import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LivePageAudience from '../../pages/livePages/livePageAudience';
import Feed from '../../pages/botttomTabPages/Feed';

const Stack = createNativeStackNavigator();

export default function LiveAudienceStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={Feed}/>
        <Stack.Screen name="LivePageAudience" component={LivePageAudience} />
    </Stack.Navigator>
  );
}
