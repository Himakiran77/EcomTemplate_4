// import React from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { brands } from '../HomeScreen/brands';
// import ProductCard from '../../components/ProductCard/ProductCard';

// const BrandProductScreen = ({ route, navigation }) => {
//   const { brand } = route.params || {};
//   console.log('Rendering BrandProductScreen with brand:', brand);

//   const filteredProducts = brands.filter(
//     (product) => product.brand.toLowerCase() === brand?.toLowerCase()
//   );

//   const renderProduct = ({ item }) => (
//     <ProductCard
//       product={item}
//       onPress={() => navigation.navigate('ProductDetails', { product: item })}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{brand} Products</Text>
//       {filteredProducts.length === 0 ? (
//         <View style={styles.centered}>
//           <Text style={styles.noProductsText}>No products found for {brand}</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={filteredProducts}
//           keyExtractor={(item) => item.id.toString()}
//           numColumns={2}
//           renderItem={renderProduct}
//           contentContainerStyle={styles.productList}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     paddingHorizontal: 8,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 16,
//     marginHorizontal: 16,
//     color: '#333',
//   },
//   productList: {
//     paddingBottom: 20,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   noProductsText: {
//     fontSize: 16,
//     color: '#6c757d',
//     textAlign: 'center',
//   },
// });

// export default BrandProductScreen;

// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
//   ActivityIndicator
// } from 'react-native';
// import { brands } from '../HomeScreen/brands';
// import ProductCard from '../../components/ProductCard/ProductCard';
// import Carousel from 'react-native-snap-carousel';
// import axios from 'axios';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Images from '../../assets/Images';

// const BrandProductScreen = ({ route, navigation }) => {
//   const { brand } = route.params || {};
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { width } = Dimensions.get('window');
  
//   // Refs for carousels
//   const featuredCarouselRef = useRef(null);
//   const recentCarouselRef = useRef(null);
//   const testimonialsRef = useRef(null);

//   // Filter products by brand
//   const filteredProducts = brands.filter(
//     (product) => product.brand?.toLowerCase() === brand?.toLowerCase()
//   );

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
//         setError('Failed to load products.');
//         setLoading(false);
//       });
//   };

//   // Get recently added products (last 5 added)
//   const recentlyAddedProducts = [...products].sort((a, b) => b.id - a.id).slice(0, 5);
  
//   // Get featured products (filter by rating > 4)
//   const featuredProducts = products.filter(product => product.rating?.rate > 4);

//   const renderProduct = ({ item }) => (
//     <ProductCard
//       product={item}
//       onPress={() => navigation.navigate('ProductDetails', { product: item })}
//     />
//   );

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

//   if (loading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color="#6200ee" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.centered}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       {/* Brand Products Section */}
//       <Text style={styles.title}>{brand} Products</Text>
      
//       {filteredProducts.length === 0 ? (
//         <View style={styles.centered}>
//           <Text style={styles.noProductsText}>No products found for {brand}</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={filteredProducts}
//           keyExtractor={(item) => item.id.toString()}
//           numColumns={2}
//           renderItem={renderProduct}
//           scrollEnabled={false}
//           contentContainerStyle={styles.productList}
//         />
//       )}

//       {/* Featured Products Carousel */}
//       {featuredProducts.length > 0 && (
//         <View style={styles.productsCarouselContainer}>
//           <Text style={styles.sectionTitle}>Featured Products</Text>
//           <Carousel
//             ref={featuredCarouselRef}
//             data={featuredProducts}
//             renderItem={renderProductCarouselItem}
//             sliderWidth={width}
//             itemWidth={width * 0.45}
//             layout={'default'}
//             loop={false}
//             inactiveSlideScale={0.55}
//             inactiveSlideOpacity={0.7}
//             contentContainerCustomStyle={styles.carouselContent}
//           />
//         </View>
//       )}

//       {/* Recently Added Products Carousel */}
//       {recentlyAddedProducts.length > 0 && (
//         <View style={styles.productsCarouselContainer}>
//           <Text style={styles.sectionTitle}>Recently Added</Text>
//           <Carousel
//             ref={recentCarouselRef}
//             data={recentlyAddedProducts}
//             renderItem={renderProductCarouselItem}
//             sliderWidth={width}
//             itemWidth={width * 0.45}
//             layout={'default'}
//             loop={false}
//             inactiveSlideScale={0.55}
//             inactiveSlideOpacity={0.7}
//             contentContainerCustomStyle={styles.carouselContent}
//           />
//         </View>
//       )}

//       {/* Testimonials Section */}
//       <View style={styles.testimonialsContainer}>
//         <Text style={styles.sectionTitle}>What Our Customers Say</Text>
//         <Carousel
//           ref={testimonialsRef}
//           data={testimonials}
//           renderItem={renderTestimonialItem}
//           sliderWidth={width}
//           itemWidth={width * 0.85}
//           layout={'default'}
//           loop={true}
//           autoplay={true}
//           autoplayInterval={5000}
//           inactiveSlideScale={0.55}
//           inactiveSlideOpacity={0.7}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     paddingHorizontal: 8,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 16,
//     marginHorizontal: 16,
//     color: '#333',
//   },
//   productList: {
//     paddingBottom: 20,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: 200,
//   },
//   noProductsText: {
//     fontSize: 16,
//     color: '#6c757d',
//     textAlign: 'center',
//   },
//   errorText: {
//     color: '#dc3545',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//     paddingHorizontal: 16,
//   },
//   // productsCarouselContainer: {
//   //   paddingBottom: 20,
//   //   marginTop: 20,
//   // },
//   // carouselContent: {
//   //   paddingHorizontal: 16,
//   // },
//   // productCarouselItem: {
//   //   width: '100%',
//   //   paddingHorizontal: 8,
//   // },
//   // productCardCarousel: {
//   //   width: '100%',
//   //   marginHorizontal: 0,
//   // },
//   // testimonialsContainer: {
//   //   paddingVertical: 20,
//   //   paddingHorizontal: 5,
//   //   marginTop: 20,
//   //   backgroundColor: '#fff',
//   //   borderTopWidth: 1,
//   //   borderTopColor: '#e9ecef',
//   // },
//   // testimonialCard: {
//   //   backgroundColor: '#fff',
//   //   borderRadius: 12,
//   //   padding: 20,
//   //   elevation: 1,
//   //   shadowColor: '#000',
//   //   shadowOffset: { width: 0, height: 1 },
//   //   shadowOpacity: 0.1,
//   //   shadowRadius: 2,
//   // },
//   // testimonialHeader: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   marginBottom: 12,
//   // },
//   // avatar: {
//   //   width: 50,
//   //   height: 50,
//   //   borderRadius: 25,
//   //   marginRight: 12,
//   // },
//   // userInfo: {
//   //   flex: 1,
//   // },
//   // userName: {
//   //   fontSize: 16,
//   //   fontWeight: '600',
//   //   color: '#333',
//   // },
//   // userRole: {
//   //   fontSize: 14,
//   //   color: '#6c757d',
//   // },
//   // ratingContainer: {
//   //   flexDirection: 'row',
//   //   marginBottom: 10,
//   // },
//   // testimonialText: {
//   //   fontSize: 15,
//   //   lineHeight: 22,
//   //   color: '#495057',
//   //   fontStyle: 'italic',
//   // },

//   productsCarouselContainer: {
//     // paddingHorizontal: 25,
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
//   ratingContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 6,
//     paddingHorizontal: 10,
//     borderRadius: 20,
//   },
//   testimonialText: {
//     fontSize: 15,
//     lineHeight: 22,
//     color: '#495057',
//     fontStyle: 'italic',
//   },
// });

// export default BrandProductScreen;


import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  ImageBackground,
  Share
} from 'react-native';
import { brands } from '../HomeScreen/brands';
import ProductCard from '../../components/ProductCard/ProductCard';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../../assets/Images';

const BrandProductScreen = ({ route, navigation }) => {
  const { brand } = route.params || {};
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { width } = Dimensions.get('window');
  
  // Refs for carousels
  const featuredCarouselRef = useRef(null);
  const recentCarouselRef = useRef(null);
  const topSellingCarouselRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Filter products by brand
  const filteredProducts = brands.filter(
    (product) => product.brand?.toLowerCase() === brand?.toLowerCase()
  );

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
        setError('Failed to load products.');
        setLoading(false);
      });
  };

  // Get recently added products (last 5 added)
  const recentlyAddedProducts = [...products].sort((a, b) => b.id - a.id).slice(0, 5);
  
  // Get featured products (filter by rating > 4)
  const featuredProducts = products.filter(product => product.rating?.rate > 4);
  
  // Mock top selling products (in a real app, this would come from your backend)
  const topSellingProducts = [...products]
    .sort((a, b) => (b.rating?.count || 0) - (a.rating?.count || 0))
    .slice(0, 5);

  const renderProduct = ({ item }) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    />
  );

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

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out ${brand} products on our app!`,
        title: `Explore ${brand}`,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Brand Products Section */}
      {/* <Text style={styles.title}>{brand} Products</Text> */}

        {/* Brand Banner Image */}
  {filteredProducts.length > 0 && filteredProducts[0].bannerImage && (
    <ImageBackground
  source={{ uri: filteredProducts[0].bannerImage }}
  style={styles.bannerImage}
  resizeMode="cover"
>
  <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
    <Image source={Images.share} style={styles.ShareIcon} />
  </TouchableOpacity>
  <View style={styles.bannerOverlay}>
    <Text style={styles.bannerTitle}>{brand}</Text>
  </View>
</ImageBackground>
  )}

  {/* Rest of your existing code */}
  {/* <Text style={styles.title}>{brand} Products</Text> */}
      
      {filteredProducts.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.noProductsText}>No products found for {brand}</Text>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={renderProduct}
          scrollEnabled={false}
          contentContainerStyle={styles.productList}
          style={styles.pdCard}
        />
      )}

      {/* Top Selling Products Carousel */}
      {topSellingProducts.length > 0 && (
        <View style={styles.productsCarouselContainer}>
          <Text style={styles.sectionTitle}>Top Selling Products</Text>
          <Carousel
            ref={topSellingCarouselRef}
            data={topSellingProducts}
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

      {/* Recently Added Products Carousel */}
      {recentlyAddedProducts.length > 0 && (
        <View style={styles.productsCarouselContainer}>
          <Text style={styles.sectionTitle}>Recently Added</Text>
          <Carousel
            ref={recentCarouselRef}
            data={recentlyAddedProducts}
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
        <Text style={styles.sectionTitle}>What Our Customers Say</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 8,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  bannerOverlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 16,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  shareButton: {
    position: 'absolute', // Use absolute positioning
    top: 16, // Distance from the top
    right: 16, // Distance from the right
    zIndex: 1, // Ensure it appears above other elements
  },
  ShareIcon: {
    width: 24, // Adjust size as needed
    height: 24, // Adjust size as needed
    tintColor: 'black', // Optional: ensure icon is visible on the banner
  },
  productList: {
    paddingBottom: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  noProductsText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
  },
  pdCard: {
    marginTop: 20,
  },
  errorText: {
    color: '#dc3545',
    fontSize: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    paddingHorizontal: 16,
  },
  productsCarouselContainer: {
    paddingBottom: 20,
    marginTop: 20,
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
    paddingHorizontal: 5,
    marginTop: 20,
    // backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  testimonialCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  testimonialText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#495057',
    fontStyle: 'italic',
  },
});

export default BrandProductScreen;