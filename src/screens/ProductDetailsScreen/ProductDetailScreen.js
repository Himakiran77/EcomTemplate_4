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


import React from "react";
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
  Alert
} from "react-native";
import Images from "../../assets/Images";
import { useNavigation } from "@react-navigation/native";
import { addToWishlist } from "../../redux/wishlistSlice";
import { useDispatch } from "react-redux";
import { addToCart, setBuyNowItem } from "../../redux/cartSlice";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const { width } = Dimensions.get("window");
  const isSmallDevice = width < 375;
  const scrollY = new Animated.Value(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleNavigateWishlist = () => {
    dispatch(addToWishlist(product));
    alert(`${product.title} added to wishlist!`);
    // navigation.navigate('Wishlist')
  }

  const handleNavigateAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
    Alert.alert(
      "Added to Cart",
      `${product.title} has been added to your cart`,
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
    dispatch(setBuyNowItem({
      id: product.id,
      title: product.title,
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

  // Simple star rating component
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
        message: `Check out this product: ${product.title} - $${product.price}`,
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
          {product.title}
        </Text>
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Text style={styles.shareButtonText}>Share</Text>
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
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image }}
            style={[styles.image, isSmallDevice && styles.imageSmall]}
            resizeMode="contain"
          />
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <Text style={[styles.title, isSmallDevice && styles.titleSmall]}>
            {product.title}
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
      </ScrollView>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  shareButtonText: {
    fontSize: 16,
    color: "#0000FF",
    fontWeight: "500",
  },
  imageContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  imageSmall: {
    height: 280,
  },
  infoContainer: {
    paddingHorizontal: 25,
    marginBottom: 20,
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
    backgroundColor: "#f5f5f5",
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
});

export default ProductDetailsScreen;
