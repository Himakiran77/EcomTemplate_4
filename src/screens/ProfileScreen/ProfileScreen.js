// import React, { useState, useCallback  } from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TouchableOpacity, 
//   Image, 
//   ScrollView, 
//   Dimensions,
//   Animated,
//   Modal
// } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import { useSelector } from 'react-redux';
// import Images from '../../assets/Images';

// const { width, height } = Dimensions.get('window');

// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const TotalOrders = useSelector(state => state.orders.orders);
//   const OrderCount = TotalOrders.length;
//   const wishlistItems = useSelector(state => state.wishlist.items);
//   const wishlistItemsCount = wishlistItems.length;
  
//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const slideAnim = useState(new Animated.Value(height * 0.1))[0];
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);

//   React.useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, []);

//   const handleNavigate = (screen) => {
//     navigation.navigate(screen);
//   };

//   const handleNavigateToAddresses = () => {
//     navigation.navigate('AddressForm');
//   };

//   const handleLogout = () => {
//     setLogoutModalVisible(true);
//   }

//   const confirmLogout = () => {
//     setLogoutModalVisible(false);
//     navigation.navigate('Login');
//   }

//   const cancelLogout = () => {
//     setLogoutModalVisible(false);
//   }

//   useFocusEffect(
//     useCallback(() => {
//       setLogoutModalVisible(false);
//       return () => {};
//     }, [])
//   );

//   return (
//     <Animated.View 
//       style={[
//         styles.container,
//         {
//           opacity: fadeAnim,
//           transform: [{ translateY: slideAnim }]
//         }
//       ]}
//     >
//       <ScrollView 
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//       >

//         <View style={styles.profileHeader}>
//           <View style={styles.avatarBackground}>
//             <View style={styles.avatarContainer}>
//               <Image 
//                 source={Images.YellowProfile}
//                 style={styles.avatar}
//               />
//               <TouchableOpacity style={styles.editIcon}>
//                 <Text style={styles.editIconText}>✎</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
          
//           <Text style={styles.userName}>Mudambi Himakiran</Text>
//           <Text style={styles.userEmail}>himakiranmudambi@gmail.com</Text>
          
//           <View style={styles.statsContainer}>
//           <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('Orders')}>
//               <Text style={styles.statNumber}>{OrderCount}</Text>
//               <Text style={styles.statLabel}>Orders</Text>
//             </TouchableOpacity>
//             <View style={styles.statDivider} />
//             <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('Wishlist')}>
//               <Text style={styles.statNumber}>{wishlistItemsCount}</Text>
//               <Text style={styles.statLabel}>Wishlist</Text>
//             </TouchableOpacity>
//             <View style={styles.statDivider} />
//             <TouchableOpacity style={styles.statItem}>
//               <Text style={styles.statNumber}>0</Text>
//               <Text style={styles.statLabel}>Coupons</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>YOUR INFORMATION</Text>
          
//           <TouchableOpacity 
//             style={styles.infoItem}
//             onPress={() => handleNavigate('Orders')}
//           >
//             <View style={styles.infoContent}>
//               <Image 
//                 source={Images.User}
//                 style={styles.infoIcon}
//               />
//               <Text style={styles.infoText}>Your Orders</Text>
//             </View>
//             <Image 
//               source={Images.RightArrow}
//               style={styles.arrowIcon}
//             />
//           </TouchableOpacity>
          
//           <TouchableOpacity 
//             style={styles.infoItem}
//             onPress={handleNavigateToAddresses}
//           >
//             <View style={styles.infoContent}>
//               <Image 
//                 source={Images.Location}
//                 style={styles.infoIcon}
//               />
//               <Text style={styles.infoText}>Your Addresses</Text>
//             </View>
//             <Image 
//               source={Images.RightArrow}
//               style={styles.arrowIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>OTHER INFORMATION</Text>
          
//           <TouchableOpacity 
//             style={styles.infoItem}
//             // onPress={() => handleNavigate('Notifications')}
//           >
//             <View style={styles.infoContent}>
//               <Image 
//                 source={Images.Notification}
//                 style={styles.infoIcon}
//               />
//               <Text style={styles.infoText}>Notifications</Text>
//             </View>
//             <Image 
//               source={Images.RightArrow}
//               style={styles.arrowIcon}
//             />
//           </TouchableOpacity>
          
//           <TouchableOpacity 
//             style={styles.infoItem}
//             // onPress={() => handleNavigate('Privacy')}
//           >
//             <View style={styles.infoContent}>
//               <Image 
//                 source={Images.Lock}
//                 style={styles.infoIcon}
//               />
//               <Text style={styles.infoText}>Account Privacy</Text>
//             </View>
//             <Image 
//               source={Images.RightArrow}
//               style={styles.arrowIcon}
//             />
//           </TouchableOpacity>
          
//           <TouchableOpacity 
//             style={styles.infoItem}
//             // onPress={() => handleNavigate('Terms')}
//           >
//             <View style={styles.infoContent}>
//               <Image 
//                 source={Images.Terms}
//                 style={styles.infoIcon}
//               />
//               <Text style={styles.infoText}>Terms of Services</Text>
//             </View>
//             <Image 
//               source={Images.RightArrow}
//               style={styles.arrowIcon}
//             />
//           </TouchableOpacity>
//         </View>


//         <TouchableOpacity 
//           style={styles.logoutButton}
//           onPress={handleLogout}
//         >
//           <Text style={styles.logoutText}>Log Out</Text>
//         </TouchableOpacity>
//       </ScrollView>
//           <Modal
//             animationType="fade"
//             transparent={true}
//             visible={logoutModalVisible}
//             onRequestClose={() => {
//               setLogoutModalVisible(false);
//             }}
//           >
//             <View style={styles.modalOverlay}>
//               <View style={styles.modalContainer}>
//                 <Text style={styles.modalTitle}>Log Out</Text>
//                 <Text style={styles.modalText}>Are you sure you want to log out?</Text>
                
//                 <View style={styles.modalButtonContainer}>
//                   <TouchableOpacity 
//                     style={[styles.modalButton, styles.cancelButton]}
//                     onPress={cancelLogout}
//                   >
//                     <Text style={styles.cancelButtonText}>Cancel</Text>
//                   </TouchableOpacity>
                  
//                   <TouchableOpacity 
//                     style={[styles.modalButton, styles.confirmButton]}
//                     onPress={confirmLogout}
//                   >
//                     <Text style={styles.confirmButtonText}>Log Out</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </Modal>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   scrollContainer: {
//     paddingBottom: height * 0.05,
//   },
//   profileHeader: {
//     alignItems: 'center',
//     padding: width * 0.05,
//     paddingTop: height * 0.03,
//     marginBottom: height * 0.02,
//   },
//   avatarBackground: {
//     width: width * 0.35,
//     height: width * 0.35,
//     borderRadius: width * 0.175,
//     backgroundColor: '#0000FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: height * 0.02,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     elevation: 8,
//   },
//   avatarContainer: {
//     position: 'relative',
//   },
//   avatar: {
//     width: width * 0.3,
//     height: width * 0.3,
//     borderRadius: width * 0.15,
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
//   editIcon: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     backgroundColor: '#03DAC5',
//     width: width * 0.1,
//     height: width * 0.1,
//     borderRadius: width * 0.05,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   editIconText: {
//     color: '#fff',
//     fontSize: width * 0.04,
//     fontWeight: 'bold',
//   },
//   userName: {
//     fontSize: width * 0.06,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: height * 0.005,
//   },
//   userEmail: {
//     fontSize: width * 0.035,
//     color: '#666',
//     marginBottom: height * 0.03,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     paddingVertical: height * 0.02,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   statItem: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   statDivider: {
//     width: 1,
//     backgroundColor: '#eee',
//     height: '60%',
//     marginVertical: height * 0.01,
//   },
//   statNumber: {
//     fontSize: width * 0.06,
//     fontWeight: 'bold',
//     color: '#0000FF',
//   },
//   statLabel: {
//     fontSize: width * 0.035,
//     color: '#666',
//   },
//   sectionContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginHorizontal: width * 0.05,
//     marginBottom: height * 0.02,
//     paddingHorizontal: width * 0.05,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   sectionTitle: {
//     fontSize: width * 0.04,
//     fontWeight: '600',
//     color: '#666',
//     paddingVertical: height * 0.015,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   infoItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: height * 0.02,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   infoContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   infoIcon: {
//     marginRight: width * 0.04,
//     tintColor: '#0000FF',
//     width: width * 0.05,  
//     height: width * 0.05, 
//     maxWidth: 24,         
//     maxHeight: 24,        
//     minWidth: 16,        
//     minHeight: 16,       
//     resizeMode: 'contain'
//   },
//   infoText: {
//     fontSize: width * 0.045,
//     color: '#333',
//   },
//   arrowIcon: {
//     width: width * 0.05,  
//     height: width * 0.05, 
//     maxWidth: 24,         
//     maxHeight: 24,        
//     minWidth: 16,        
//     minHeight: 16,       
//     tintColor: '#999',
//     resizeMode: 'contain' 
// },
//   logoutButton: {
//     backgroundColor: '#fff',
//     padding: width * 0.04,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginHorizontal: width * 0.05,
//     marginTop: height * 0.01,
//     borderWidth: 1,
//     borderColor: '#ff4444',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   logoutText: {
//     color: '#ff4444',
//     fontSize: width * 0.045,
//     fontWeight: 'bold',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: width * 0.8,
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: width * 0.05,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   modalText: {
//     fontSize: width * 0.04,
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#666',
//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   modalButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     width: '48%',
//     alignItems: 'center',
//   },
//   cancelButton: {
//     backgroundColor: '#f0f0f0',
//   },
//   confirmButton: {
//     backgroundColor: '#ff4444',
//   },
//   cancelButtonText: {
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   confirmButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default ProfileScreen;


// import React, { useState, useCallback, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Dimensions,
//   Animated,
//   Modal,
//   ActivityIndicator,
// } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../../redux/authSlice';
// import Images from '../../assets/Images';

// const { width, height } = Dimensions.get('window');
// const BASE_URL = 'https://6353-2401-4900-889d-d311-782e-2231-43c-1229.ngrok-free.app';

// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const TotalOrders = useSelector((state) => state.orders.orders);
//   const OrderCount = TotalOrders.length;
//   const wishlistItems = useSelector((state) => state.wishlist.items);
//   const wishlistItemsCount = wishlistItems.length;
//   const userId = useSelector((state) => state.auth.userId);

//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const slideAnim = useState(new Animated.Value(height * 0.1))[0];
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch user profile data
//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${BASE_URL}/profile/${userId}`, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         const data = await response.json();

//         if (response.ok && data.status === 'ok') {
//           setUserData(data.data);
//         } else {
//           setError(data.data || 'Failed to fetch profile');
//         }
//       } catch (err) {
//         setError('Network error. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchUserProfile();
//     } else {
//       setError('User not logged in');
//       setLoading(false);
//     }
//   }, [userId]);

//   // Animation effect
//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, []);

//   const handleNavigate = (screen) => {
//     navigation.navigate(screen);
//   };

//   const handleNavigateToAddresses = () => {
//     navigation.navigate('AddressForm');
//   };

//   const handleLogout = () => {
//     setLogoutModalVisible(true);
//   };

//   const confirmLogout = () => {
//     dispatch(logout()); 
//     setLogoutModalVisible(false);
//     navigation.navigate('Login');
//   };

//   const cancelLogout = () => {
//     setLogoutModalVisible(false);
//   };

//   useFocusEffect(
//     useCallback(() => {
//       setLogoutModalVisible(false);
//       return () => {};
//     }, [])
//   );

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000FF" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.errorContainer}>
//         <Text style={styles.errorText}>{error}</Text>
//         <TouchableOpacity
//           style={styles.retryButton}
//           onPress={() => navigation.navigate('Login')}
//         >
//           <Text style={styles.retryButtonText}>Go to Login</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <Animated.View
//       style={[
//         styles.container,
//         {
//           opacity: fadeAnim,
//           transform: [{ translateY: slideAnim }],
//         },
//       ]}
//     >
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.profileHeader}>
//           <View style={styles.avatarBackground}>
//             <View style={styles.avatarContainer}>
//               <Image source={Images.YellowProfile} style={styles.avatar} />
//               <TouchableOpacity style={styles.editIcon}>
//                 <Text style={styles.editIconText}>✎</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <Text style={styles.userName}>{userData?.name || 'User'}</Text>
//           <Text style={styles.userEmail}>{userData?.email || 'email@example.com'}</Text>

//           <View style={styles.statsContainer}>
//             <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('Orders')}>
//               <Text style={styles.statNumber}>{OrderCount}</Text>
//               <Text style={styles.statLabel}>Orders</Text>
//             </TouchableOpacity>
//             <View style={styles.statDivider} />
//             <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('Wishlist')}>
//               <Text style={styles.statNumber}>{wishlistItemsCount}</Text>
//               <Text style={styles.statLabel}>Wishlist</Text>
//             </TouchableOpacity>
//             <View style={styles.statDivider} />
//             <TouchableOpacity style={styles.statItem}>
//               <Text style={styles.statNumber}>0</Text>
//               <Text style={styles.statLabel}>Coupons</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>YOUR INFORMATION</Text>

//           <TouchableOpacity style={styles.infoItem} onPress={() => handleNavigate('Orders')}>
//             <View style={styles.infoContent}>
//               <Image source={Images.User} style={styles.infoIcon} />
//               <Text style={styles.infoText}>Your Orders</Text>
//             </View>
//             <Image source={Images.RightArrow} style={styles.arrowIcon} />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.infoItem} onPress={handleNavigateToAddresses}>
//             <View style={styles.infoContent}>
//               <Image source={Images.Location} style={styles.infoIcon} />
//               <Text style={styles.infoText}>Your Addresses</Text>
//             </View>
//             <Image source={Images.RightArrow} style={styles.arrowIcon} />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>OTHER INFORMATION</Text>

//           <TouchableOpacity style={styles.infoItem}>
//             <View style={styles.infoContent}>
//               <Image source={Images.Notification} style={styles.infoIcon} />
//               <Text style={styles.infoText}>Notifications</Text>
//             </View>
//             <Image source={Images.RightArrow} style={styles.arrowIcon} />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.infoItem}>
//             <View style={styles.infoContent}>
//               <Image source={Images.Lock} style={styles.infoIcon} />
//               <Text style={styles.infoText}>Account Privacy</Text>
//             </View>
//             <Image source={Images.RightArrow} style={styles.arrowIcon} />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.infoItem}>
//             <View style={styles.infoContent}>
//               <Image source={Images.Terms} style={styles.infoIcon} />
//               <Text style={styles.infoText}>Terms of Services</Text>
//             </View>
//             <Image source={Images.RightArrow} style={styles.arrowIcon} />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//           <Text style={styles.logoutText}>Log Out</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={logoutModalVisible}
//         onRequestClose={() => setLogoutModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>Log Out</Text>
//             <Text style={styles.modalText}>Are you sure you want to log out?</Text>

//             <View style={styles.modalButtonContainer}>
//               <TouchableOpacity
//                 style={[styles.modalButton, styles.cancelButton]}
//                 onPress={cancelLogout}
//               >
//                 <Text style={styles.cancelButtonText}>Cancel</Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.modalButton, styles.confirmButton]}
//                 onPress={confirmLogout}
//               >
//                 <Text style={styles.confirmButtonText}>Log Out</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   scrollContainer: {
//     paddingBottom: height * 0.05,
//   },
//   profileHeader: {
//     alignItems: 'center',
//     padding: width * 0.05,
//     paddingTop: height * 0.03,
//     marginBottom: height * 0.02,
//   },
//   avatarBackground: {
//     width: width * 0.35,
//     height: width * 0.35,
//     borderRadius: width * 0.175,
//     backgroundColor: '#0000FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: height * 0.02,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     elevation: 8,
//   },
//   avatarContainer: {
//     position: 'relative',
//   },
//   avatar: {
//     width: width * 0.3,
//     height: width * 0.3,
//     borderRadius: width * 0.15,
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
//   editIcon: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     backgroundColor: '#03DAC5',
//     width: width * 0.1,
//     height: width * 0.1,
//     borderRadius: width * 0.05,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   editIconText: {
//     color: '#fff',
//     fontSize: width * 0.04,
//     fontWeight: 'bold',
//   },
//   userName: {
//     fontSize: width * 0.06,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: height * 0.005,
//   },
//   userEmail: {
//     fontSize: width * 0.035,
//     color: '#666',
//     marginBottom: height * 0.03,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     paddingVertical: height * 0.02,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   statItem: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   statDivider: {
//     width: 1,
//     backgroundColor: '#eee',
//     height: '60%',
//     marginVertical: height * 0.01,
//   },
//   statNumber: {
//     fontSize: width * 0.06,
//     fontWeight: 'bold',
//     color: '#0000FF',
//   },
//   statLabel: {
//     fontSize: width * 0.035,
//     color: '#666',
//   },
//   sectionContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginHorizontal: width * 0.05,
//     marginBottom: height * 0.02,
//     paddingHorizontal: width * 0.05,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   sectionTitle: {
//     fontSize: width * 0.04,
//     fontWeight: '600',
//     color: '#666',
//     paddingVertical: height * 0.015,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   infoItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: height * 0.02,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   infoContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   infoIcon: {
//     marginRight: width * 0.04,
//     tintColor: '#0000FF',
//     width: width * 0.05,
//     height: width * 0.05,
//     maxWidth: 24,
//     maxHeight: 24,
//     minWidth: 16,
//     minHeight: 16,
//     resizeMode: 'contain',
//   },
//   infoText: {
//     fontSize: width * 0.045,
//     color: '#333',
//   },
//   arrowIcon: {
//     width: width * 0.05,
//     height: width * 0.05,
//     maxWidth: 24,
//     maxHeight: 24,
//     minWidth: 16,
//     minHeight: 16,
//     tintColor: '#999',
//     resizeMode: 'contain',
//   },
//   logoutButton: {
//     backgroundColor: '#fff',
//     padding: width * 0.04,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginHorizontal: width * 0.05,
//     marginTop: height * 0.01,
//     borderWidth: 1,
//     borderColor: '#ff4444',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   logoutText: {
//     color: '#ff4444',
//     fontSize: width * 0.045,
//     fontWeight: 'bold',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: width * 0.8,
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: width * 0.05,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   modalText: {
//     fontSize: width * 0.04,
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#666',
//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   modalButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     width: '48%',
//     alignItems: 'center',
//   },
//   cancelButton: {
//     backgroundColor: '#f0f0f0',
//   },
//   confirmButton: {
//     backgroundColor: '#ff4444',
//   },
//   cancelButtonText: {
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   confirmButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//   },
//   errorText: {
//     fontSize: width * 0.045,
//     color: '#ff4444',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   retryButton: {
//     backgroundColor: '#0000FF',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   retryButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: width * 0.04,
//   },
// });

// export default ProfileScreen;


import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Animated,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../redux/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../assets/Images';

const { width, height } = Dimensions.get('window');
const BASE_URL = 'https://ecommerce-backend-psi-lake.vercel.app';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const TotalOrders = useSelector((state) => state.orders.orders);
  const OrderCount = TotalOrders.length;
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const wishlistItemsCount = wishlistItems.length;
  const userId = useSelector((state) => state.auth.userId); // Get userId from Redux

  const fadeAnim = useState(new Animated.Value(0))[0];
  const slideAnim = useState(new Animated.Value(height * 0.1))[0];
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load userId from AsyncStorage if not in Redux
  useEffect(() => {
    const loadUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedUserId && !userId) {
          dispatch(login(storedUserId)); // Restore userId in Redux
        }
      } catch (err) {
        console.error('Error loading userId from AsyncStorage:', err);
      }
    };
    loadUserId();
  }, [userId, dispatch]);

  // Fetch user profile data
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/profile/${userId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();

        if (response.ok && data.status === 'ok') {
          setUserData(data.data);
        } else {
          setError(data.data || 'Failed to fetch profile');
        }
      } catch (err) {
        setError('Network error. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserProfile();
    } else {
      setError('User not logged in');
      setLoading(false);
    }
  }, [userId]);

  // Animation effect
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  const handleNavigateToAddresses = () => {
    navigation.navigate('AddressForm');
  };

  const handleLogout = () => {
    setLogoutModalVisible(true);
  };

  const confirmLogout = async () => {
    try {
      // Clear userId from AsyncStorage
      await AsyncStorage.removeItem('userId');
      dispatch(logout()); 
      setLogoutModalVisible(false);
      navigation.navigate('Tabs');
    } catch (err) {
      console.error('Error clearing AsyncStorage:', err);
    }
  };

  const cancelLogout = () => {
    setLogoutModalVisible(false);
  };

  useFocusEffect(
    useCallback(() => {
      setLogoutModalVisible(false);
      return () => {};
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000FF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.retryButtonText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          <View style={styles.avatarBackground}>
            <View style={styles.avatarContainer}>
              <Image source={Images.YellowProfile} style={styles.avatar} />
              <TouchableOpacity style={styles.editIcon}>
                <Text style={styles.editIconText}>✎</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.userName}>{userData?.name || 'User'}</Text>
          <Text style={styles.userEmail}>{userData?.email || 'email@example.com'}</Text>

          <View style={styles.statsContainer}>
            <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('Orders')}>
              <Text style={styles.statNumber}>{OrderCount}</Text>
              <Text style={styles.statLabel}>Orders</Text>
            </TouchableOpacity>
            <View style={styles.statDivider} />
            <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('Wishlist')}>
              <Text style={styles.statNumber}>{wishlistItemsCount}</Text>
              <Text style={styles.statLabel}>Wishlist</Text>
            </TouchableOpacity>
            <View style={styles.statDivider} />
            <TouchableOpacity style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Coupons</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>YOUR INFORMATION</Text>

          <TouchableOpacity style={styles.infoItem} onPress={() => handleNavigate('Orders')}>
            <View style={styles.infoContent}>
              <Image source={Images.User} style={styles.infoIcon} />
              <Text style={styles.infoText}>Your Orders</Text>
            </View>
            <Image source={Images.RightArrow} style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoItem} onPress={handleNavigateToAddresses}>
            <View style={styles.infoContent}>
              <Image source={Images.Location} style={styles.infoIcon} />
              <Text style={styles.infoText}>Your Addresses</Text>
            </View>
            <Image source={Images.RightArrow} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>OTHER INFORMATION</Text>

          <TouchableOpacity style={styles.infoItem}>
            <View style={styles.infoContent}>
              <Image source={Images.Notification} style={styles.infoIcon} />
              <Text style={styles.infoText}>Notifications</Text>
            </View>
            <Image source={Images.RightArrow} style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoItem}>
            <View style={styles.infoContent}>
              <Image source={Images.Lock} style={styles.infoIcon} />
              <Text style={styles.infoText}>Account Privacy</Text>
            </View>
            <Image source={Images.RightArrow} style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoItem}>
            <View style={styles.infoContent}>
              <Image source={Images.Terms} style={styles.infoIcon} />
              <Text style={styles.infoText}>Terms of Services</Text>
            </View>
            <Image source={Images.RightArrow} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Log Out</Text>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={cancelLogout}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={confirmLogout}
              >
                <Text style={styles.confirmButtonText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContainer: {
    paddingBottom: height * 0.05,
  },
  profileHeader: {
    alignItems: 'center',
    padding: width * 0.05,
    paddingTop: height * 0.03,
    marginBottom: height * 0.02,
  },
  avatarBackground: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: width * 0.175,
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
    borderWidth: 1,
    borderColor: '#fff',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#03DAC5',
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  editIconText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: height * 0.005,
  },
  userEmail: {
    fontSize: width * 0.035,
    color: '#666',
    marginBottom: height * 0.03,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: height * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#eee',
    height: '60%',
    marginVertical: height * 0.01,
  },
  statNumber: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#0000FF',
  },
  statLabel: {
    fontSize: width * 0.035,
    color: '#666',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.05,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: width * 0.04,
    fontWeight: '600',
    color: '#666',
    paddingVertical: height * 0.015,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: width * 0.04,
    tintColor: '#0000FF',
    width: width * 0.05,
    height: width * 0.05,
    maxWidth: 24,
    maxHeight: 24,
    minWidth: 16,
    minHeight: 16,
    resizeMode: 'contain',
  },
  infoText: {
    fontSize: width * 0.045,
    color: '#333',
  },
  arrowIcon: {
    width: width * 0.05,
    height: width * 0.05,
    maxWidth: 24,
    maxHeight: 24,
    minWidth: 16,
    minHeight: 16,
    tintColor: '#999',
    resizeMode: 'contain',
  },
  logoutButton: {
    backgroundColor: '#fff',
    padding: width * 0.04,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    marginTop: height * 0.01,
    borderWidth: 1,
    borderColor: '#ff4444',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  logoutText: {
    color: '#ff4444',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  modalText: {
    fontSize: width * 0.04,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  confirmButton: {
    backgroundColor: '#ff4444',
  },
  cancelButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  errorText: {
    fontSize: width * 0.045,
    color: '#ff4444',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#0000FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  retryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
});

export default ProfileScreen;