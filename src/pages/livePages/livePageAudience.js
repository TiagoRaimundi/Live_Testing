import {View} from 'react-native'
import ZegoUIKitPrebuiltLiveStreaming, {AUDIENCE_DEFAULT_CONFIG} 
    from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn'

export default function LivePageAudience() {


  randomUserID = String(Math.floor(Math.random() * 100000))
 
  return (
    <View style={{ flex: 1 }}>
      <ZegoUIKitPrebuiltLiveStreaming
        appID={961511828}
        appSign='fbf82ad64c08c495289156d5ed0636be6053559211ab27899b47fc4c93c58176'
        userID={randomUserID}
        userName={'user_' + randomUserID}
        liveID='testLiveID'
        config={{
          ...AUDIENCE_DEFAULT_CONFIG,
        }}
      />
    </View>
  );
}