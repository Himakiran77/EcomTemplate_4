import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Images from "../../assets/Images";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      navigation.replace("Main");
    }
  }, [progress, navigation]);

  return (
    <View style={styles.container}>
      <Image source={Images.KalaiLogo} style={styles.image} />
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  progressBar: {
    width: "80%",
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#008000",
  },
});

export default SplashScreen;

// import React, { useEffect } from 'react';
// import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useDispatch } from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { login } from '../../redux/authSlice';
// import Images from '../../assets/Images';

// const SplashScreen = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const userId = await AsyncStorage.getItem('userId');
//         if (userId) {
//           dispatch(login(userId));
//           navigation.replace('Main');
//         } else {
//           navigation.replace('Auth', { screen: 'Login' });
//         }
//       } catch (error) {
//         console.error('Error checking AsyncStorage:', error);
//         navigation.replace('Auth', { screen: 'Login' });
//       }
//     };
//     checkLoginStatus();
//   }, [dispatch, navigation]);

//   return (
//     <View style={styles.container}>
//       <Image source={Images.KalaiLogo} style={styles.image} />
//       <ActivityIndicator size="large" color="#0000FF" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 20,
//   },
// });

// export default SplashScreen;