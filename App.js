import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import { Video, ResizeMode } from "expo-av";

const sourceUrls = [
  "https://tantra-app-bucket.s3.eu-central-1.amazonaws.com/15936669715030.0_Intro.mp4",
  {
    uri: "https://tantra-app-bucket.s3.eu-central-1.amazonaws.com/15936669715030.0_Intro.mp4",
    overrideFileExtensionAndroid: "mp4",
  },
  "https://d3w2cdkkkvjjfr.cloudfront.net/1601392561415_Zen_Loss_2_Fear_of_loss.mp4",
  "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8",
  "https://media.graphcms.com/jyLnBuPTOaiOgZxP0fR3",
  "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
  "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
  "http://media.developer.dolby.com/Atmos/MP4/Universe_Fury2.mp4",
  "http://media.developer.dolby.com/Atmos/MP4/shattered-3Mb.mp4",
  "http://media.developer.dolby.com/DDP/MP4_HPL40_30fps_channel_id_51.mp4",
  "http://media.developer.dolby.com/DDP/MP4_HPL40_30fps_channel_id_71.mp4",
];

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default function App() {
  const [urlIdx, seturlIdx] = useState(0);
  const uri = sourceUrls[urlIdx];
  console.log(uri);
  return (
    <View style={styles.container}>
      <Video
        usePoster={true}
        source={{ uri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay={true}
        isLooping={false}
        useNativeControls={true}
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: "black",
          position: "relative",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 100,
          padding: 20,
        }}
      >
        <Button
          disabled={urlIdx === 0}
          onPress={() => seturlIdx(urlIdx - 1)}
          title="<- Prev"
          color="#841584"
        />
        <Button
          disabled={urlIdx === sourceUrls.length - 1}
          onPress={() => seturlIdx(urlIdx + 1)}
          title="Next ->"
          color="#841584"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
