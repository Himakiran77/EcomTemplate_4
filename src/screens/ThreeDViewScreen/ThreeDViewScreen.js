// import React from "react";
// import { View, StyleSheet } from "react-native";
// import { FilamentScene, FilamentView, Model, Camera, DefaultLight } from "react-native-filament";

// const ThreeDViewScreen = () => {
//   return (
//     <View style={styles.container}>
//       <FilamentScene>
//         <FilamentView style={styles.filamentView}>
//           {/* Default camera and light */}
//           <Camera />
//           <DefaultLight />
          
//           {/* 3D Model (GLB format) */}
//           <Model source={require("../../components/Model/Model.glb")} />
//         </FilamentView>
//       </FilamentScene>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   filamentView: {
//     flex: 1, 
//   },
// });

// export default ThreeDViewScreen;

// import React from "react";
// import { View, StyleSheet } from "react-native";
// import { FilamentScene, FilamentView, Model, Camera, DefaultLight, useCameraManipulator } from "react-native-filament";
// import { Gesture } from "react-native-gesture-handler";

// const ThreeDViewScreen = () => {
//   const cameraManipulator = useCameraManipulator({
//   orbitHomePosition: [0, 0, 8], // "Camera location"
//   targetPosition: [0, 0, 0], // "Looking at"
//   orbitSpeed: [0.003, 0.003],
// })

// const panGesture = Gesture.Pan()
//   .onBegin((event) => {
//     const yCorrected = viewHeight - event.translationY
//     cameraManipulator?.grabBegin(event.translationX, yCorrected, false) // false means rotation instead of translation
//   })
//   .onUpdate((event) => {
//     const yCorrected = viewHeight - event.translationY
//     cameraManipulator?.grabUpdate(event.translationX, yCorrected)
//   })
//   .onEnd(() => {
//     cameraManipulator?.grabEnd()
//   })
//   return (
//     <View style={styles.container}>
//       <FilamentScene>
//         <FilamentView style={styles.filamentView}>
//           {/* Default camera and light */}
//           <Camera cameraManipulator={cameraManipulator} />
//           <DefaultLight />
          
//           {/* 3D Model (GLB format) */}
//           <Model source={require("../../components/Model/Model.glb")} />
//         </FilamentView>
//       </FilamentScene>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   filamentView: {
//     flex: 1, 
//   },
// });

// export default ThreeDViewScreen;


import "react-native-reanimated";
import React, { useState, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  FilamentScene,
  FilamentView,
  Model,
  Camera,
  DefaultLight,
  useCameraManipulator,
} from "react-native-filament";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";


const ThreeDViewScreen = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <FilamentScene>
        <SceneContent />
      </FilamentScene>
    </GestureHandlerRootView>
  );
};

const SceneContent = () => {
  const [viewHeight, setViewHeight] = useState(Dimensions.get("window").height);
  const lastScale = useRef(1);

const cameraManipulator = useCameraManipulator({
  orbitHomePosition: [0, 0, 8],
  targetPosition: [0, 0, 0], 
  orbitSpeed: [0.003, 0.003],
})

  const panGesture = Gesture.Pan()
  .onBegin((event) => {
    const yCorrected = viewHeight - event.translationY
    cameraManipulator?.grabBegin(event.translationX, yCorrected, false) 
  })
  .onUpdate((event) => {
    const yCorrected = viewHeight - event.translationY
    cameraManipulator?.grabUpdate(event.translationX, yCorrected)
  })
  .onEnd(() => {
    cameraManipulator?.grabEnd()
  })

  const composedGestures = Gesture.Simultaneous(panGesture);

  const onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setViewHeight(height);
  };

  return (
    <View style={styles.filamentView} onLayout={onLayout}>
      <GestureDetector gesture={composedGestures}>
        <FilamentView style={styles.filamentView}>
          <Camera cameraManipulator={cameraManipulator} />
          <DefaultLight />
          <Model source={require("../../components/Model/Model.glb")} />
        </FilamentView>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filamentView: {
    flex: 1,
  },
});

export default ThreeDViewScreen;


