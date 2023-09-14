import {View} from 'react-native'
import ZegoUIKitPrebuiltLiveStreaming, {AUDIENCE_DEFAULT_CONFIG} 
    from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn'

export default function LivePageAudience() {


  randomUserID = String(Math.floor(Math.random() * 100000))
 
  return (
    <View style={{ flex: 1 }}>
      <ZegoUIKitPrebuiltLiveStreaming
        appID={716281226}
        appSign='780bb01b66109d1b914d3dc73c43922aede18bb553bd724162fc7c5fbe08646d'
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