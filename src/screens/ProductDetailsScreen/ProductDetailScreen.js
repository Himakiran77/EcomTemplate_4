// // import React from 'react';
// // import { View, Text, Image, Button, StyleSheet } from 'react-native';

// // const ProductDetailsScreen = ({ route }) => {
// //   const { product } = route.params;

// //   return (
// //     <View style={styles.container}>
// //       <Image source={{ uri: product.image }} style={styles.image} />
// //       <Text style={styles.title}>{product.title}</Text>
// //       <Text style={styles.price}>${product.price}</Text>
// //       <Text style={styles.description}>{product.description}</Text>
// //       <Button title="Add to Cart" onPress={() => {}} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 10 },
// //   image: { width: '100%', height: 300, resizeMode: 'contain' },
// //   title: { fontSize: 22, fontWeight: 'bold', marginVertical: 10, color: 'black', },
// //   price: { fontSize: 18, color: '#FF6347', marginVertical: 5 },
// //   description: { fontSize: 14, color: '#666' },
// // });

// // export default ProductDetailsScreen;

// // import React from 'react';
// // import {
// //   View,
// //   Text,
// //   Image,
// //   TouchableOpacity,
// //   StyleSheet,
// //   ScrollView,
// //   Dimensions,
// //   Platform,
// //   SafeAreaView
// // } from 'react-native';

// // const ProductDetailsScreen = ({ route, navigation }) => {
// //   const { product } = route.params;
// //   const { width } = Dimensions.get('window');
// //   const isSmallDevice = width < 375;

// //   // Simple star rating component without external icons
// //   const renderStars = (rating) => {
// //     const stars = [];
// //     const fullStars = Math.floor(rating);
// //     const hasHalfStar = rating % 1 >= 0.5;

// //     for (let i = 1; i <= 5; i++) {
// //       if (i <= fullStars) {
// //         stars.push(<Text key={i} style={styles.starIcon}>★</Text>);
// //       } else if (i === fullStars + 1 && hasHalfStar) {
// //         stars.push(<Text key={i} style={styles.starIcon}>☆</Text>);
// //       } else {
// //         stars.push(<Text key={i} style={styles.starIcon}>☆</Text>);
// //       }
// //     }

// //     return stars;
// //   };

// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         <View style={styles.container}>

// //           {/* Product Image */}
// //           <View style={styles.imageContainer}>
// //             <Image
// //               source={{ uri: product.image }}
// //               style={[
// //                 styles.image,
// //                 isSmallDevice && styles.imageSmall
// //               ]}
// //               resizeMode="contain"
// //             />
// //           </View>

// //           {/* Product Info */}
// //           <View style={styles.infoContainer}>
// //             <Text style={[
// //               styles.title,
// //               isSmallDevice && styles.titleSmall
// //             ]}>
// //               {product.title}
// //             </Text>

// //             <View style={styles.priceRatingContainer}>
// //               <Text style={styles.price}>${product.price.toFixed(2)}</Text>
// //               <View style={styles.ratingContainer}>
// //                 {renderStars(product.rating?.rate || 4.5)}
// //                 <Text style={styles.ratingText}>
// //                   ({product.rating?.count || '120'})
// //                 </Text>
// //               </View>
// //             </View>

// //             <Text style={[
// //               styles.description,
// //               isSmallDevice && styles.descriptionSmall
// //             ]}>
// //               {product.description}
// //             </Text>
// //           </View>

// //           {/* Action Buttons */}
// //           <View style={styles.buttonContainer}>
// //             <TouchableOpacity
// //               style={styles.addToCartButton}
// //               activeOpacity={0.8}
// //             >
// //               <Text style={styles.addToCartText}>Add to Cart</Text>
// //             </TouchableOpacity>

// //             <TouchableOpacity
// //               style={styles.buyNowButton}
// //               activeOpacity={0.8}
// //             >
// //               <Text style={styles.buyNowText}>Buy Now</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   scrollContainer: {
// //     flexGrow: 1,
// //     paddingBottom: 20,
// //   },
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     marginTop: 10
// //   },
// //   header: {
// //     paddingHorizontal: 20,
// //     paddingTop: 15,
// //     paddingBottom: 10,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   backButton: {
// //     padding: 8,
// //   },
// //   backButtonText: {
// //     fontSize: 24,
// //     color: '#333',
// //   },
// //   imageContainer: {
// //     paddingHorizontal: 20,
// //     paddingVertical: 15,
// //     alignItems: 'center',
// //     backgroundColor: '#f9f9f9',
// //     marginHorizontal: 20,
// //     borderRadius: 12,
// //     marginBottom: 20,
// //     ...Platform.select({
// //       ios: {
// //         shadowColor: '#000',
// //         shadowOffset: { width: 0, height: 2 },
// //         shadowOpacity: 0.1,
// //         shadowRadius: 6,
// //       },
// //       android: {
// //         elevation: 4,
// //       },
// //     }),
// //   },
// //   image: {
// //     width: '100%',
// //     height: 300,
// //   },
// //   imageSmall: {
// //     height: 250,
// //   },
// //   infoContainer: {
// //     paddingHorizontal: 25,
// //     marginBottom: 25,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: '700',
// //     color: '#333',
// //     marginBottom: 12,
// //     lineHeight: 30,
// //   },
// //   titleSmall: {
// //     fontSize: 20,
// //     lineHeight: 26,
// //   },
// //   priceRatingContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   price: {
// //     fontSize: 22,
// //     fontWeight: '700',
// //     color: '#FF6347',
// //   },
// //   ratingContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#f5f5f5',
// //     paddingVertical: 4,
// //     paddingHorizontal: 8,
// //     borderRadius: 10,
// //   },
// //   starIcon: {
// //     color: '#FFD700',
// //     fontSize: 16,
// //     marginRight: 2,
// //   },
// //   ratingText: {
// //     fontSize: 14,
// //     color: '#666',
// //     marginLeft: 4,
// //   },
// //   description: {
// //     fontSize: 16,
// //     color: '#555',
// //     lineHeight: 24,
// //   },
// //   descriptionSmall: {
// //     fontSize: 14,
// //     lineHeight: 22,
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 25,
// //     marginTop: 10,
// //   },
// //   addToCartButton: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     borderWidth: 1,
// //     borderColor: '#6200ee',
// //     borderRadius: 8,
// //     paddingVertical: 15,
// //     marginRight: 10,
// //     alignItems: 'center',
// //   },
// //   addToCartText: {
// //     color: '#6200ee',
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },
// //   buyNowButton: {
// //     flex: 1,
// //     backgroundColor: '#6200ee',
// //     borderRadius: 8,
// //     paddingVertical: 15,
// //     alignItems: 'center',
// //   },
// //   buyNowText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },
// // });

// // export default ProductDetailsScreen;

// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
//   Platform,
//   SafeAreaView,
//   Animated,
//   Share,
// } from "react-native";
// import Images from "../../assets/Images";
// import { useNavigation } from "@react-navigation/native";
// import { addToWishlist } from "../../redux/wishlistSlice";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartSlice";

// const ProductDetailsScreen = ({ route }) => {
//   const { product } = route.params;
//   const { width } = Dimensions.get("window");
//   const isSmallDevice = width < 375;
//   const scrollY = new Animated.Value(0);
//   const navigation = useNavigation();
//   const dispatch = useDispatch();

//   const handleNavigateWishlist = () => {
//     dispatch(addToWishlist(product));
//     alert(`${product.title} added to wishlist!`);
//     navigation.navigate('Wishlist')
//   }

//   const handleNavigateAddToCart = () => {
//     dispatch(addToCart(product));
//     alert(`${product.title} added to Cart!`);
//     navigation.navigate('Cart')
//   }

//   // Header animation
//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [0, 1],
//     extrapolate: "clamp",
//   });

//   // Simple star rating component
//   const renderStars = (rating) => {
//     return Array(5)
//       .fill(0)
//       .map((_, i) => (
//         <Text
//           key={i}
//           style={[
//             styles.starIcon,
//             i < Math.floor(rating) && styles.filledStar,
//             i === Math.floor(rating) && rating % 1 >= 0.5 && styles.halfStar,
//           ]}
//         >
//           {i < Math.floor(rating) ? "★" : "☆"}
//         </Text>
//       ));
//   };

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Check out this product: ${product.title} - $${product.price}`,
//         url: product.image,
//         title: product.title,
//       });
//     } catch (error) {
//       console.error("Error sharing:", error.message);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Animated Header */}
//       <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Image source={Images.Back} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle} numberOfLines={1}>
//           {product.title}
//         </Text>
//         <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
//           <Text style={styles.shareButtonText}>Share</Text>
//         </TouchableOpacity>
//       </Animated.View>

//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         scrollEventThrottle={16}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//       >
//         {/* Product Image */}
//         <View style={styles.imageContainer}>
//           <Image
//             source={{ uri: product.image }}
//             style={[styles.image, isSmallDevice && styles.imageSmall]}
//             resizeMode="contain"
//           />
//         </View>

//         {/* Product Info */}
//         <View style={styles.infoContainer}>
//           <Text style={[styles.title, isSmallDevice && styles.titleSmall]}>
//             {product.title}
//           </Text>

//           <View style={styles.priceRatingContainer}>
//             <Text style={styles.price}>${product.price.toFixed(2)}</Text>
//             <View style={styles.ratingContainer}>
//               {renderStars(product.rating?.rate || 4.5)}
//               <Text style={styles.ratingText}>
//                 ({product.rating?.count || "120"} reviews)
//               </Text>
//             </View>
//           </View>

//           <View style={styles.divider} />

//           <Text style={styles.sectionTitle}>Description</Text>
//           <Text
//             style={[
//               styles.description,
//               isSmallDevice && styles.descriptionSmall,
//             ]}
//           >
//             {product.description}
//           </Text>

//           <View style={styles.detailsContainer}>
//             <View style={styles.detailRow}>
//               <Text style={styles.detailLabel}>Category:</Text>
//               <Text style={styles.detailValue}>
//                 {product.category?.charAt(0).toUpperCase() +
//                   product.category?.slice(1) || "N/A"}
//               </Text>
//             </View>
//             <View style={styles.detailRow}>
//               <Text style={styles.detailLabel}>Availability:</Text>
//               <Text style={[styles.detailValue, styles.inStock]}>In Stock</Text>
//             </View>
//           </View>
//         </View>

//         {/* Action Buttons */}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.wishlistButton} activeOpacity={0.8} onPress={handleNavigateWishlist}>
//             <Text style={styles.wishlistButtonText}>♡ Wishlist</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.addToCartButton} activeOpacity={0.8} onPress={handleNavigateAddToCart}>
//             <Text style={styles.addToCartButtonText}>Add to Cart</Text>
//           </TouchableOpacity>
//         </View>

//         {/* <TouchableOpacity style={styles.buyNowButton} activeOpacity={0.8}>
//           <Text style={styles.buyNowButtonText}>Buy Now</Text>
//         </TouchableOpacity> */}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   scrollContainer: {
//     paddingBottom: 30,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     zIndex: 100,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f0f0f0",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: "center",
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//     tintColor: "#333",
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#333",
//     flex: 1,
//     marginHorizontal: 10,
//   },
//   shareButton: {
//     padding: 8,
//   },
//   shareButtonText: {
//     fontSize: 16,
//     color: "#6200ee",
//     fontWeight: "500",
//   },
//   imageContainer: {
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     alignItems: "center",
//     backgroundColor: "#f9f9f9",
//     marginBottom: 20,
//   },
//   image: {
//     width: "100%",
//     height: 350,
//   },
//   imageSmall: {
//     height: 280,
//   },
//   infoContainer: {
//     paddingHorizontal: 25,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 12,
//     lineHeight: 30,
//   },
//   titleSmall: {
//     fontSize: 20,
//     lineHeight: 26,
//   },
//   priceRatingContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   price: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "green",
//   },
//   ratingContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//     paddingVertical: 6,
//     paddingHorizontal: 10,
//     borderRadius: 20,
//   },
//   starIcon: {
//     color: "#ddd",
//     fontSize: 18,
//     marginRight: 2,
//   },
//   filledStar: {
//     color: "#FFD700",
//   },
//   halfStar: {
//     color: "#FFD700",
//   },
//   ratingText: {
//     fontSize: 14,
//     color: "#666",
//     marginLeft: 4,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: "#f0f0f0",
//     marginVertical: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: 12,
//   },
//   description: {
//     fontSize: 16,
//     color: "#555",
//     lineHeight: 24,
//     marginBottom: 20,
//   },
//   descriptionSmall: {
//     fontSize: 14,
//     lineHeight: 22,
//   },
//   detailsContainer: {
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     padding: 15,
//     marginTop: 15,
//   },
//   detailRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   detailLabel: {
//     fontSize: 14,
//     color: "#666",
//   },
//   detailValue: {
//     fontSize: 14,
//     color: "#333",
//     fontWeight: "500",
//   },
//   inStock: {
//     color: "#4CAF50",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 25,
//     marginBottom: 15,
//   },
//   wishlistButton: {
//     flex: 1,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     paddingVertical: 15,
//     marginRight: 10,
//     alignItems: "center",
//   },
//   wishlistButtonText: {
//     color: "#333",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   addToCartButton: {
//     flex: 1,
//     backgroundColor: "#6200ee",
//     borderRadius: 8,
//     paddingVertical: 15,
//     alignItems: "center",
//     ...Platform.select({
//       ios: {
//         shadowColor: "#6200ee",
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 6,
//       },
//       android: {
//         elevation: 6,
//       },
//     }),
//   },
//   addToCartButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   buyNowButton: {
//     backgroundColor: "#FF6347",
//     borderRadius: 8,
//     paddingVertical: 17,
//     marginHorizontal: 25,
//     alignItems: "center",
//     ...Platform.select({
//       ios: {
//         shadowColor: "#FF6347",
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 6,
//       },
//       android: {
//         elevation: 6,
//       },
//     }),
//   },
//   buyNowButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });

// export default ProductDetailsScreen;


// import React, { useRef, useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
//   Platform,
//   SafeAreaView,
//   Animated,
//   Share,
//   Alert
// } from "react-native";
// import Images from "../../assets/Images";
// import { useNavigation } from "@react-navigation/native";
// import { addToWishlist } from "../../redux/wishlistSlice";
// import { useDispatch } from "react-redux";
// import { addToCart, setBuyNowItem } from "../../redux/cartSlice";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Carousel from "react-native-snap-carousel";
// import ProductCard from "../../components/ProductCard/ProductCard";

// const ProductDetailsScreen = ({ route }) => {
//   const { product } = route.params;
//   const { width } = Dimensions.get("window");
//   const isSmallDevice = width < 375;
//   const scrollY = new Animated.Value(0);
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  
//   // New state for related products
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Refs for carousels
//   const featuredCarouselRef = useRef(null);
//   const recentCarouselRef = useRef(null);
//   const testimonialsRef = useRef(null);

//   // Testimonials data
//   const testimonials = [
//     {
//       id: 1,
//       name: 'Sarah Johnson',
//       role: 'Fashion Blogger',
//       comment: 'The quality of products is amazing! I always shop here for my wardrobe essentials.',
//       rating: 5,
//       avatar: Images.YellowProfile,
//     },
//     {
//       id: 2,
//       name: 'Michael Chen',
//       role: 'Tech Enthusiast',
//       comment: 'Fast delivery and excellent customer service. Will definitely buy again!',
//       rating: 4,
//       avatar: Images.YellowProfile,
//     },
//     {
//       id: 3,
//       name: 'Emma Williams',
//       role: 'Interior Designer',
//       comment: 'Love the variety of products available. The app is so easy to use too!',
//       rating: 5,
//       avatar: Images.YellowProfile,
//     },
//   ];

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = () => {
//     setLoading(true);
//     axios
//       .get('https://fakestoreapi.com/products')
//       .then((response) => {
//         setProducts(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError('Failed to load related products.');
//         setLoading(false);
//       });
//   };

//   // Get recently added products (last 5 added)
//   const recentlyAddedProducts = [...products].sort((a, b) => b.id - a.id).slice(0, 5);
  
//   // Get featured products (filter by rating > 4)
//   const featuredProducts = products.filter(product => product.rating?.rate > 4);

//   // Filter related products (same category, excluding current product)
//   const relatedProducts = products.filter(
//     p => p.category === product.category && p.id !== product.id
//   ).slice(0, 5);

//   const renderProductCarouselItem = ({ item }) => {
//     return (
//       <View style={styles.productCarouselItem}>
//         <ProductCard
//           product={item}
//           onPress={() => navigation.navigate('ProductDetails', { product: item })}
//           style={styles.productCardCarousel}
//         />
//       </View>
//     );
//   };

//   const renderTestimonialItem = ({ item }) => {
//     return (
//       <View style={styles.testimonialCard}>
//         <View style={styles.testimonialHeader}>
//           <Image source={item.avatar} style={styles.avatar} />
//           <View style={styles.userInfo}>
//             <Text style={styles.userName}>{item.name}</Text>
//             <Text style={styles.userRole}>{item.role}</Text>
//           </View>
//         </View>
//         <View style={styles.ratingContainer}>
//           {[...Array(5)].map((_, i) => (
//             <Ionicons
//               key={i}
//               name={i < item.rating ? 'star' : 'star-outline'}
//               size={16}
//               color="#FFD700"
//             />
//           ))}
//         </View>
//         <Text style={styles.testimonialText}>"{item.comment}"</Text>
//       </View>
//     );
//   };


//   // const handleNavigateWishlist = () => {
//   //   dispatch(addToWishlist(product));
//   //   alert(`${product.title || product.name} added to wishlist!`);
//   //   // navigation.navigate('Wishlist')
//   // }
//   const handleNavigateWishlist = () => {
//     if (!isLoggedIn) {
//       Alert.alert('Login Required', 'Please login to use Wishlist.', [
//         // { text: 'Cancel', style: 'cancel' },
//         { text: 'Login', onPress: () => navigation.navigate('Login') },
//       ]);
//       return;
//     }
  
//     dispatch(addToWishlist(product));
//     alert(`${product.title || product.name} added to wishlist!`);
//   };
  

//   const handleNavigateAddToCart = () => {
//     dispatch(addToCart({
//       id: product.id,
//       title: product.title || product.name,
//       price: product.price,
//       image: product.image,
//       quantity: 1
//     }));
//     if (!isLoggedIn) {
//       Alert.alert('Login Required', 'Please login to add items to cart.', [
//         // { text: 'Cancel', style: 'cancel' },
//         { text: 'Login', onPress: () => navigation.navigate('Login') },
//       ]);
//       return;
//     }
//     Alert.alert(
//       "Added to Cart",
//       `${product.title || product.name} has been added to your cart`,
//       [
//         {
//           text: "Continue Shopping",
//           style: "cancel"
//         },
//         {
//           text: "View Cart",
//           onPress: () => navigation.navigate('Cart')
//         }
//       ]
//     );
//   };

//   const handleNavigateToBuyNow = () => {
//     if (!isLoggedIn) {
//       Alert.alert('Login Required', 'Please login to Buy Now.', [
//         // { text: 'Cancel', style: 'cancel' },
//         { text: 'Login', onPress: () => navigation.navigate('Login') },
//       ]);
//       return;
//     }
//     dispatch(setBuyNowItem({
//       id: product.id,
//       title: product.title || product.name,
//       price: product.price,
//       image: product.image,
//       quantity: 1
//     }));
//     navigation.navigate('Checkout');
//   };
  
//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [0, 1],
//     extrapolate: "clamp",
//   });

//   // Simple star rating component
//   const renderStars = (rating) => {
//     return Array(5)
//       .fill(0)
//       .map((_, i) => (
//         <Text
//           key={i}
//           style={[
//             styles.starIcon,
//             i < Math.floor(rating) && styles.filledStar,
//             i === Math.floor(rating) && rating % 1 >= 0.5 && styles.halfStar,
//           ]}
//         >
//           {i < Math.floor(rating) ? "★" : "☆"}
//         </Text>
//       ));
//   };

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Check out this product: ${product.title || product.name} - $${product.price}`,
//         url: product.image,
//         title: product.title,
//       });
//     } catch (error) {
//       console.error("Error sharing:", error.message);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Animated Header */}
//       <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Image source={Images.Back} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle} numberOfLines={1}>
//           {product.title || product.name}
//         </Text>
//         <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
//           {/* <Text style={styles.shareButtonText}>Share</Text>  */}
//           <Image source={Images.share} style={styles.ShareIcon} />
//         </TouchableOpacity>
//       </Animated.View>

//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         scrollEventThrottle={16}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//       >
//         {/* Product Image */}
//         <View style={styles.imageContainer}>
//           <Image
//             source={{ uri: product.image }}
//             style={[styles.image, isSmallDevice && styles.imageSmall]}
//             resizeMode="contain"
//           />
//         </View>

//         {/* Product Info */}
//         <View style={styles.infoContainer}>
//           <Text style={[styles.title, isSmallDevice && styles.titleSmall]}>
//             {product.title || product.name}
//           </Text>

//           <View style={styles.priceRatingContainer}>
//             <Text style={styles.price}>${product.price.toFixed(2)}</Text>
//             <View style={styles.ratingContainer}>
//               {renderStars(product.rating?.rate || 4.5)}
//               <Text style={styles.ratingText}>
//                 ({product.rating?.count || "120"} reviews)
//               </Text>
//             </View>
//           </View>

//           <View style={styles.divider} />

//         </View>

//         {/* Action Buttons */}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.wishlistButton} activeOpacity={0.8} onPress={handleNavigateWishlist}>
//             <Text style={styles.wishlistButtonText}>♡ Wishlist</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.addToCartButton} activeOpacity={0.8} onPress={handleNavigateAddToCart}>
//             <Text style={styles.addToCartButtonText}>Add to Cart</Text>
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.buyNowButton} activeOpacity={0.8} onPress={handleNavigateToBuyNow}>
//           <Text style={styles.buyNowButtonText}>Buy Now</Text>
//         </TouchableOpacity>

//         <View style={styles.infoContainer2}>
//         <Text style={styles.sectionTitle}>Description</Text>
//           <Text
//             style={[
//               styles.description,
//               isSmallDevice && styles.descriptionSmall,
//             ]}
//           >
//             {product.description}
//           </Text>
//           <View style={styles.detailsContainer}>
//             <View style={styles.detailRow}>
//               <Text style={styles.detailLabel}>Category:</Text>
//               <Text style={styles.detailValue}>
//                 {product.category?.charAt(0).toUpperCase() +
//                   product.category?.slice(1) || "N/A"}
//               </Text>
//             </View>
//             <View style={styles.detailRow}>
//               <Text style={styles.detailLabel}>Availability:</Text>
//               <Text style={[styles.detailValue, styles.inStock]}>In Stock</Text>
//             </View>
//           </View>
//         </View>

//         <SafeAreaView style={styles.safeArea}>
//       {/* ... (keep your existing header and scroll view structure) */}

//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         scrollEventThrottle={16}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//       >

//         {/* Related Products Carousel */}
//         {relatedProducts.length > 0 && (
//           <View style={styles.productsCarouselContainer}>
//             <Text style={styles.sectionTitle}>Recently Added</Text>
//             <Carousel
//               ref={recentCarouselRef}
//               data={relatedProducts}
//               renderItem={renderProductCarouselItem}
//               sliderWidth={width}
//               itemWidth={width * 0.45}
//               layout={'default'}
//               loop={false}
//               inactiveSlideScale={0.55}
//               inactiveSlideOpacity={0.7}
//               contentContainerCustomStyle={styles.carouselContent}
//             />
//           </View>
//         )}

//         {/* Featured Products Carousel */}
//         {featuredProducts.length > 0 && (
//           <View style={styles.productsCarouselContainer}>
//             <Text style={styles.sectionTitle}>Featured Products</Text>
//             <Carousel
//               ref={featuredCarouselRef}
//               data={featuredProducts}
//               renderItem={renderProductCarouselItem}
//               sliderWidth={width}
//               itemWidth={width * 0.45}
//               layout={'default'}
//               loop={false}
//               inactiveSlideScale={0.55}
//               inactiveSlideOpacity={0.7}
//               contentContainerCustomStyle={styles.carouselContent}
//             />
//           </View>
//         )}

//         {/* Testimonials Section */}
//         <View style={styles.testimonialsContainer}>
//           <Text style={styles.testimonialTitle}>What Our Customers Say</Text>
//           <Carousel
//             ref={testimonialsRef}
//             data={testimonials}
//             renderItem={renderTestimonialItem}
//             sliderWidth={width}
//             itemWidth={width * 0.85}
//             layout={'default'}
//             loop={true}
//             autoplay={true}
//             autoplayInterval={5000}
//             inactiveSlideScale={0.55}
//             inactiveSlideOpacity={0.7}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
          
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   scrollContainer: {
//     paddingBottom: 30,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     zIndex: 100,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f0f0f0",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: "center",
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//     tintColor: "#333",
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#333",
//     flex: 1,
//     marginHorizontal: 10,
//   },
//   shareButton: {
//     padding: 8,
//   },
//   ShareIcon: {
//     width: 24,
//     height: 24,
//     tintColor: "#333",
//   },
//   shareButtonText: {
//     fontSize: 16,
//     color: "#0000FF",
//     fontWeight: "500",
//   },
//   imageContainer: {
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     alignItems: "center",
//     backgroundColor: "#f9f9f9",
//     marginBottom: 20,
//   },
//   image: {
//     width: "100%",
//     height: 350,
//   },
//   imageSmall: {
//     height: 280,
//   },
//   infoContainer: {
//     paddingHorizontal: 25,
//     marginBottom: 20,
//   },
//   infoContainer2: {
//     paddingHorizontal: 25,
//     marginTop: 40,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 12,
//     lineHeight: 30,
//   },
//   titleSmall: {
//     fontSize: 20,
//     lineHeight: 26,
//   },
//   priceRatingContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   price: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "green",
//   },
//   ratingContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     // backgroundColor: "#f5f5f5",
//     paddingVertical: 6,
//     paddingHorizontal: 10,
//     borderRadius: 20,
//   },
//   starIcon: {
//     color: "#ddd",
//     fontSize: 18,
//     marginRight: 2,
//   },
//   filledStar: {
//     color: "#FFD700",
//   },
//   halfStar: {
//     color: "#FFD700",
//   },
//   ratingText: {
//     fontSize: 14,
//     color: "#666",
//     marginLeft: 4,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: "#f0f0f0",
//     marginVertical: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: 12,
//   },
//   testimonialTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: 12,
//     marginHorizontal: 25,
//   },
//   description: {
//     fontSize: 16,
//     color: "#555",
//     lineHeight: 24,
//     marginBottom: 20,
//   },
//   descriptionSmall: {
//     fontSize: 14,
//     lineHeight: 22,
//   },
//   detailsContainer: {
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     padding: 15,
//     marginTop: 15,
//   },
//   detailRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   detailLabel: {
//     fontSize: 14,
//     color: "#666",
//   },
//   detailValue: {
//     fontSize: 14,
//     color: "#333",
//     fontWeight: "500",
//   },
//   inStock: {
//     color: "#4CAF50",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 25,
//     marginBottom: 15,
//   },
//   wishlistButton: {
//     flex: 1,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     paddingVertical: 15,
//     marginRight: 10,
//     alignItems: "center",
//   },
//   wishlistButtonText: {
//     color: "#333",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   addToCartButton: {
//     flex: 1,
//     backgroundColor: "#0000FF",
//     borderRadius: 8,
//     paddingVertical: 15,
//     alignItems: "center",
//     ...Platform.select({
//       ios: {
//         shadowColor: "#6200ee",
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 6,
//       },
//       android: {
//         elevation: 6,
//       },
//     }),
//   },
//   addToCartButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   buyNowButton: {
//     backgroundColor: "#FFC300",
//     borderRadius: 8,
//     paddingVertical: 17,
//     marginHorizontal: 25,
//     alignItems: "center",
//     ...Platform.select({
//       ios: {
//         shadowColor: "#FF6347",
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 6,
//       },
//       android: {
//         elevation: 6,
//       },
//     }),
//   },
//   buyNowButtonText: {
//     color: "black",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   productsCarouselContainer: {
//     paddingHorizontal: 25,
//     marginTop: 40,
//   },
//   carouselContent: {
//     paddingHorizontal: 16,
//   },
//   productCarouselItem: {
//     width: '100%',
//     paddingHorizontal: 8,
//   },
//   productCardCarousel: {
//     width: '100%',
//     marginHorizontal: 0,
//   },
//   testimonialsContainer: {
//     // paddingHorizontal: 20,
//     // marginTop: 40,
//     // paddingVertical: 20,
//     // borderTopWidth: 1,
//     // borderTopColor: '#e9ecef',
//     paddingVertical: 20,
//     // backgroundColor: '#fff',
//     // marginBottom: 20,
//     // borderTopWidth: 1,
//     // borderBottomWidth: 1,
//     borderColor: '#e9ecef',
//   },
//   testimonialCard: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//     elevation: 1,
//     paddingVertical: 20,
//     paddingHorizontal: 25,
//     shadowColor: 'grey',
//   },
//   testimonialHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   userName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
//   userRole: {
//     fontSize: 14,
//     color: '#6c757d',
//   },
//   testimonialText: {
//     fontSize: 15,
//     lineHeight: 22,
//     color: '#495057',
//     fontStyle: 'italic',
//   },
// });

// export default ProductDetailsScreen;



import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  SafeAreaView,
  Animated,
  Share,
  Alert,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Images from "../../assets/Images";
import { useNavigation } from "@react-navigation/native";
import { addToWishlist } from "../../redux/wishlistSlice";
import { useDispatch } from "react-redux";
import { addToCart, setBuyNowItem } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const { width } = Dimensions.get("window");
  const isSmallDevice = width < 375;
  const scrollY = new Animated.Value(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
  // Image carousel state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState(null);
  const carouselRef = useRef(null);
  const [currentZoomedImage, setCurrentZoomedImage] = useState(null);

  // Function to open modal with the clicked image
  const openZoomModal = (image) => {
    setCurrentZoomedImage(image);
    setZoomImage(image);
  };

  // Function to handle thumbnail click
  const handleThumbnailPress = (image) => {
    setCurrentZoomedImage(image);
  };
  
  // If product.images exists, use that, otherwise create an array with the single image
  // const images = product.images || [product.image];
  // Create a carousel with the same image repeated 5 times
const images = product.image ? Array(5).fill(product.image) : [];


  // New state for related products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Refs for carousels
  const featuredCarouselRef = useRef(null);
  const recentCarouselRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fashion Blogger',
      comment: 'The quality of products is amazing! I always shop here for my wardrobe essentials.',
      rating: 5,
      avatar: Images.YellowProfile,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Tech Enthusiast',
      comment: 'Fast delivery and excellent customer service. Will definitely buy again!',
      rating: 4,
      avatar: Images.YellowProfile,
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Interior Designer',
      comment: 'Love the variety of products available. The app is so easy to use too!',
      rating: 5,
      avatar: Images.YellowProfile,
    },
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load related products.');
        setLoading(false);
      });
  };

  // Get recently added products (last 5 added)
  const recentlyAddedProducts = [...products].sort((a, b) => b.id - a.id).slice(0, 5);
  
  // Get featured products (filter by rating > 4)
  const featuredProducts = products.filter(product => product.rating?.rate > 4);

  // Filter related products (same category, excluding current product)
  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 5);

  const renderProductCarouselItem = ({ item }) => {
    return (
      <View style={styles.productCarouselItem}>
        <ProductCard
          product={item}
          onPress={() => navigation.navigate('ProductDetails', { product: item })}
          style={styles.productCardCarousel}
        />
      </View>
    );
  };

  const renderTestimonialItem = ({ item }) => {
    return (
      <View style={styles.testimonialCard}>
        <View style={styles.testimonialHeader}>
          <Image source={item.avatar} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userRole}>{item.role}</Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, i) => (
            <Ionicons
              key={i}
              name={i < item.rating ? 'star' : 'star-outline'}
              size={16}
              color="#FFD700"
            />
          ))}
        </View>
        <Text style={styles.testimonialText}>"{item.comment}"</Text>
      </View>
    );
  };

  const renderImageCarouselItem = ({ item, index }) => {
    return (
      <TouchableOpacity 
        activeOpacity={0.9}
        onPress={() => setZoomImage(item)}
      >
        <Image
          source={{ uri: item }}
          style={[styles.image, isSmallDevice && styles.imageSmall]}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  const handleNavigateWishlist = () => {
    if (!isLoggedIn) {
      Alert.alert('Login Required', 'Please Sign Up and Login to use Wishlist.', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Sign Up', onPress: () => navigation.navigate('SignUp') },
        { text: 'Login', onPress: () => navigation.navigate('Login') },
      ]);
      return;
    }
  
    dispatch(addToWishlist(product));
    Alert.alert(`${product.title || product.name}is added to wishlist!`);
  };

  const handleNavigateAddToCart = () => {
    if (!isLoggedIn) {
      Alert.alert('Login Required', 'Please Sign Up and login to Add items to cart.', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Sign Up', onPress: () => navigation.navigate('SignUp') },
        { text: 'Login', onPress: () => navigation.navigate('Login') },
      ]);
      return;
    }
    dispatch(addToCart({
      id: product.id,
      title: product.title || product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
    Alert.alert(
      "Added to Cart",
      `${product.title || product.name} has been added to your cart`,
      [
        {
          text: "Continue Shopping",
          style: "cancel"
        },
        {
          text: "View Cart",
          onPress: () => navigation.navigate('Cart')
        }
      ]
    );
  };

  const handleNavigateToBuyNow = () => {
    if (!isLoggedIn) {
      Alert.alert('Login Required', 'Please Sign Up and login to Buy Now.', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Sign Up', onPress: () => navigation.navigate('SignUp') },
        { text: 'Login', onPress: () => navigation.navigate('Login') },
      ]);
      return;
    }
    dispatch(setBuyNowItem({
      id: product.id,
      title: product.title || product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
    navigation.navigate('Checkout');
  };
  
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Text
          key={i}
          style={[
            styles.starIcon,
            i < Math.floor(rating) && styles.filledStar,
            i === Math.floor(rating) && rating % 1 >= 0.5 && styles.halfStar,
          ]}
        >
          {i < Math.floor(rating) ? "★" : "☆"}
        </Text>
      ));
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this product: ${product.title || product.name} - $${product.price}`,
        url: product.image,
        title: product.title,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Animated Header */}
      <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={Images.Back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {product.title || product.name}
        </Text>
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Image source={Images.share} style={styles.ShareIcon} />
        </TouchableOpacity>
      </Animated.View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {/* Product Image Carousel */}
        <View style={styles.imageContainer}>
          <Carousel
            ref={carouselRef}
            data={images}
            renderItem={renderImageCarouselItem}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={(index) => setActiveImageIndex(index)}
            loop={true}
            autoplay={true}
            autoplayInterval={5000}
          />
          {images.length > 1 && (
            <View style={styles.pagination}>
              {images.map((_, index) => (
                <View 
                  key={index}
                  style={[
                    styles.paginationDot,
                    index === activeImageIndex ? styles.activeDot : styles.inactiveDot
                  ]}
                />
              ))}
            </View>
          )}
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <Text style={[styles.title, isSmallDevice && styles.titleSmall]}>
            {product.title || product.name}
          </Text>

          <View style={styles.priceRatingContainer}>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <View style={styles.ratingContainer}>
              {renderStars(product.rating?.rate || 4.5)}
              <Text style={styles.ratingText}>
                ({product.rating?.count || "120"} reviews)
              </Text>
            </View>
          </View>

          <View style={styles.divider} />
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.wishlistButton} activeOpacity={0.8} onPress={handleNavigateWishlist}>
            <Text style={styles.wishlistButtonText}>♡ Wishlist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addToCartButton} activeOpacity={0.8} onPress={handleNavigateAddToCart}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buyNowButton} activeOpacity={0.8} onPress={handleNavigateToBuyNow}>
          <Text style={styles.buyNowButtonText}>Buy Now</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer2}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text
            style={[
              styles.description,
              isSmallDevice && styles.descriptionSmall,
            ]}
          >
            {product.description}
          </Text>
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Category:</Text>
              <Text style={styles.detailValue}>
                {product.category?.charAt(0).toUpperCase() +
                  product.category?.slice(1) || "N/A"}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Availability:</Text>
              <Text style={[styles.detailValue, styles.inStock]}>In Stock</Text>
            </View>
          </View>
        </View>

        {/* Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <View style={styles.productsCarouselContainer}>
            <Text style={styles.sectionTitle}>Recently Added</Text>
            <Carousel
              ref={recentCarouselRef}
              data={relatedProducts}
              renderItem={renderProductCarouselItem}
              sliderWidth={width}
              itemWidth={width * 0.45}
              layout={'default'}
              loop={false}
              inactiveSlideScale={0.55}
              inactiveSlideOpacity={0.7}
              contentContainerCustomStyle={styles.carouselContent}
            />
          </View>
        )}

        {/* Featured Products Carousel */}
        {featuredProducts.length > 0 && (
          <View style={styles.productsCarouselContainer}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <Carousel
              ref={featuredCarouselRef}
              data={featuredProducts}
              renderItem={renderProductCarouselItem}
              sliderWidth={width}
              itemWidth={width * 0.45}
              layout={'default'}
              loop={false}
              inactiveSlideScale={0.55}
              inactiveSlideOpacity={0.7}
              contentContainerCustomStyle={styles.carouselContent}
            />
          </View>
        )}

        {/* Testimonials Section */}
        <View style={styles.testimonialsContainer}>
          <Text style={styles.testimonialTitle}>What Our Customers Say</Text>
          <Carousel
            ref={testimonialsRef}
            data={testimonials}
            renderItem={renderTestimonialItem}
            sliderWidth={width}
            itemWidth={width * 0.85}
            layout={'default'}
            loop={true}
            autoplay={true}
            autoplayInterval={5000}
            inactiveSlideScale={0.55}
            inactiveSlideOpacity={0.7}
          />
        </View>
      </ScrollView>

      {/* Image Zoom Modal */}
      {/* <Modal
        visible={!!zoomImage}
        transparent={true}
        onRequestClose={() => setZoomImage(null)}
      >
        <TouchableWithoutFeedback onPress={() => setZoomImage(null)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <Image 
                source={{ uri: zoomImage }} 
                style={styles.zoomedImage}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal> */}
           <Modal
        visible={!!zoomImage}
        transparent={true}
        onRequestClose={() => setZoomImage(null)}
      >
        <View style={styles.modalContainer}>
          {/* Close Button */}
          <TouchableOpacity 
            style={styles.modalCloseButton}
            onPress={() => setZoomImage(null)}
          >
            {/* <Ionicons name="close" size={30} color="#fff" />? */}
            <Text style={styles.Cross}>X</Text>
          </TouchableOpacity>
          
          {/* Zoomed Image */}
          <View style={styles.zoomedImageContainer}>
            <Image 
              // source={{ uri: currentZoomedImage }} 
              source={{ uri: zoomImage || currentZoomedImage }} 
              style={styles.zoomedImage}
              resizeMode="contain"
            />
          </View>

          {/* Thumbnail Gallery */}
          <View style={styles.thumbnailGalleryContainer}>
            <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.thumbnailScrollContent}
            >
              {images.map((img, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleThumbnailPress(img)}
                  style={[
                    styles.thumbnail,
                    img === currentZoomedImage && styles.activeThumbnail
                  ]}
                >
                  <Image
                    source={{ uri: img }}
                    style={styles.thumbnailImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#333",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    flex: 1,
    marginHorizontal: 10,
  },
  shareButton: {
    padding: 8,
  },
  ShareIcon: {
    width: 24,
    height: 24,
    tintColor: "#333",
  },
  imageContainer: {
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 350,
  },
  imageSmall: {
    height: 280,
  },
  pagination: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  activeDot: {
    backgroundColor: '#007AFF',
  },
  inactiveDot: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  infoContainer: {
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  infoContainer2: {
    paddingHorizontal: 25,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
    lineHeight: 30,
  },
  titleSmall: {
    fontSize: 20,
    lineHeight: 26,
  },
  priceRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    color: "green",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  starIcon: {
    color: "#ddd",
    fontSize: 18,
    marginRight: 2,
  },
  filledStar: {
    color: "#FFD700",
  },
  halfStar: {
    color: "#FFD700",
  },
  ratingText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  testimonialTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
    marginHorizontal: 25,
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 20,
  },
  descriptionSmall: {
    fontSize: 14,
    lineHeight: 22,
  },
  detailsContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: "#666",
  },
  detailValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  inStock: {
    color: "#4CAF50",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginBottom: 15,
  },
  wishlistButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 15,
    marginRight: 10,
    alignItems: "center",
  },
  wishlistButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: "#0000FF",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#6200ee",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  buyNowButton: {
    backgroundColor: "#FFC300",
    borderRadius: 8,
    paddingVertical: 17,
    marginHorizontal: 25,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#FF6347",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  buyNowButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  productsCarouselContainer: {
    paddingHorizontal: 25,
    marginTop: 40,
  },
  carouselContent: {
    paddingHorizontal: 16,
  },
  productCarouselItem: {
    width: '100%',
    paddingHorizontal: 8,
  },
  productCardCarousel: {
    width: '100%',
    marginHorizontal: 0,
  },
  testimonialsContainer: {
    paddingVertical: 20,
    borderColor: '#e9ecef',
  },
  testimonialCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 1,
    paddingVertical: 20,
    paddingHorizontal: 25,
    shadowColor: 'grey',
  },
  testimonialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  userRole: {
    fontSize: 14,
    color: '#6c757d',
  },
  testimonialText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#495057',
    fontStyle: 'italic',
  },
  // modalContainer: {
  //   flex: 1,
  //   backgroundColor: 'rgba(0,0,0,0.9)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // zoomedImage: {
  //   width: '100%',
  //   height: '80%',
  // },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'space-between',
  },
  modalCloseButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    right: 20,
    zIndex: 1000,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
  },
  Cross: {
    color: 'black',
    fontSize: 12,
  },
  zoomedImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  zoomedImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'contain',
  },
  thumbnailGalleryContainer: {
    height: 100,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  thumbnailScrollContent: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeThumbnail: {
    borderColor: '#fff',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    borderRadius: 3,
  },
});

export default ProductDetailsScreen;