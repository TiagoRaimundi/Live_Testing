import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ZegoUIKitPrebuiltLiveStreaming, {HOST_DEFAULT_CONFIG} 
    from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn'

export default function LivePageHost(props) {

  randomUserID = String(Math.floor(Math.random() * 100000))
  return (
    <View style={{flex: 1}}>
      <ZegoUIKitPrebuiltLiveStreaming
        appID={961511828}
        appSign='fbf82ad64c08c495289156d5ed0636be6053559211ab27899b47fc4c93c58176'
        userID={randomUserID}
        userName={'user_'+randomUserID}
        liveID='testLiveID'

        config={{
            ...HOST_DEFAULT_CONFIG,
            onLeaveLiveStreaming: () => { props.navigation.navigate('HomePage'); }
          }} 
      />
    </View>
  )
}