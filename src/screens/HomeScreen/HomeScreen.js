// // import React, { useState, useEffect, useRef } from 'react';
// // import { 
// //   View, 
// //   Text, 
// //   FlatList, 
// //   StyleSheet, 
// //   TextInput, 
// //   ActivityIndicator, 
// //   RefreshControl, 
// //   TouchableOpacity, 
// //   ScrollView,
// //   Dimensions,
// //   Platform,
// //   Image
// // } from 'react-native';
// // import axios from 'axios';
// // import Carousel from 'react-native-snap-carousel';
// // import ProductCard from '../../components/ProductCard/ProductCard';
// // import Images from '../../assets/Images';

// // const HomeScreen = ({ navigation }) => {
// //   const [products, setProducts] = useState([]);
// //   const [filteredProducts, setFilteredProducts] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [loading, setLoading] = useState(true);
// //   const [refreshing, setRefreshing] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [selectedCategory, setSelectedCategory] = useState('All');
// //   const carouselRef = useRef(null);

// //   // Get screen dimensions
// //   const { width } = Dimensions.get('window');
// //   const isSmallDevice = width < 375;

// //   // Carousel data
// //   const carouselItems = [
// //     {
// //       id: 1,
// //       title: 'Summer Collection',
// //       image: Images.Carousel1, 
// //     },
// //     {
// //       id: 2,
// //       title: 'Winter Special',
// //       image: Images.Carousel2,
// //     },
// //     {
// //       id: 3,
// //       title: 'New Arrivals',
// //       image: Images.Carousel3,
// //     },
// //   ];

// //   // Brands data
// //   const brands = [
// //     { id: 1, name: 'Nike', logo: Images.Nike },
// //     { id: 2, name: 'Adidas', logo: Images.adidas },
// //     { id: 3, name: 'Puma', logo: Images.puma },
// //     { id: 4, name: 'Reebok', logo: Images.Reebok },
// //   ];

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const fetchProducts = () => {
// //     setLoading(true);
// //     axios.get('https://fakestoreapi.com/products')
// //       .then(response => {
// //         setProducts(response.data);
// //         setFilteredProducts(response.data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         setError('Failed to load products. Please try again later.');
// //         setLoading(false);
// //       });
// //   };

// //   const renderCarouselItem = ({ item }) => {
// //     return (
// //       <View style={styles.carouselItem}>
// //         <Image source={item.image} style={styles.carouselImage} />
// //         <View style={styles.carouselTextContainer}>
// //           <Text style={styles.carouselText}>{item.title}</Text>
// //         </View>
// //       </View>
// //     );
// //   };

// //   const renderBrandCard = ({ item }) => {
// //     return (
// //       <TouchableOpacity style={styles.brandCard} activeOpacity={0.7}>
// //         <Image source={item.logo} style={styles.brandLogo} resizeMode="contain" />
// //       </TouchableOpacity>
// //     );
// //   };

// //   const handleSearch = (text) => {
// //     setSearchQuery(text);
// //     if (text) {
// //       const filtered = products.filter((item) =>
// //         item.title.toLowerCase().includes(text.toLowerCase())
// //       );
// //       setFilteredProducts(filtered);
// //     } else {
// //       setFilteredProducts(products);
// //     }
// //   };

// //   const handleRefresh = () => {
// //     setRefreshing(true);
// //     fetchProducts();
// //     setRefreshing(false);
// //   };

// //   const filterByCategory = (category) => {
// //     setSelectedCategory(category);
// //     if (category === 'All') {
// //       setFilteredProducts(products);
// //     } else {
// //       const filtered = products.filter((item) => 
// //         item.category.toLowerCase() === category.toLowerCase()
// //       );
// //       setFilteredProducts(filtered);
// //     }
// //   };

// //   const formatCategoryName = (category) => {
// //     if (category === "men's clothing") return "Men";
// //     if (category === "women's clothing") return "Women";
// //     if (category === "jewelery") return "Jewelry";
// //     return category;
// //   };

// //   const handleNavigateToProfile = () => {
// //     navigation.navigate('Profile');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Search Bar */}
// //       <View style={styles.searchContainer}>
// //         <View style={styles.searchInputWrapper}>
// //           <TouchableOpacity onPress={handleNavigateToProfile}>
// //             <Image 
// //               source={Images.KalaiLogo} 
// //               style={styles.kalaiLogo}
// //             />
// //           </TouchableOpacity>
// //           <Image 
// //             source={Images.Search} 
// //             style={styles.searchIcon}
// //           />
// //           <TextInput
// //             style={[
// //               styles.searchInput,
// //               isSmallDevice && styles.searchInputSmall
// //             ]}
// //             placeholder="Search Products..."
// //             placeholderTextColor="#999"
// //             value={searchQuery}
// //             onChangeText={handleSearch}
// //             clearButtonMode="while-editing"
// //           />
// //         </View>
// //       </View>


// //       {/* Category Filter */}
// //       <View style={styles.categoryFilterContainer}>
// //         <ScrollView 
// //           horizontal 
// //           showsHorizontalScrollIndicator={false} 
// //           contentContainerStyle={styles.categoryScrollContent}
// //         >
// //           {['All', 'Electronics','jewelery', "men's clothing", "women's clothing"].map((category) => (
// //             <TouchableOpacity
// //               key={category}
// //               style={[
// //                 styles.categoryButton,
// //                 selectedCategory === category && styles.selectedCategory,
// //                 isSmallDevice && styles.categoryButtonSmall
// //               ]}
// //               onPress={() => filterByCategory(category)}
// //             >
// //               <Text style={[
// //                 styles.categoryText,
// //                 selectedCategory === category && styles.selectedCategoryText,
// //                 isSmallDevice && styles.categoryTextSmall
// //               ]}>
// //                 {formatCategoryName(category)}
// //               </Text>
// //             </TouchableOpacity>
// //           ))}
// //         </ScrollView>
// //               {/* Carousel */}
// //       <View style={styles.carouselContainer}>
// //         <Carousel
// //           ref={carouselRef}
// //           data={carouselItems}
// //           renderItem={renderCarouselItem}
// //           sliderWidth={width}
// //           itemWidth={width * 0.85}
// //           layout={'default'}
// //           loop={true}
// //           autoplay={true}
// //           autoplayInterval={3000}
// //           inactiveSlideScale={0.95}
// //           inactiveSlideOpacity={0.7}
// //         />
// //       </View>

// //       {/* Brands Horizontal Scroll */}
// //       <View style={styles.brandsContainer}>
// //         <Text style={styles.sectionTitle}>Popular Brands</Text>
// //         <FlatList
// //           data={brands}
// //           renderItem={renderBrandCard}
// //           keyExtractor={(item) => item.id.toString()}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={styles.brandsList}
// //         />
// //       </View>
// //       </View>

// //       {/* Loading and Error States */}
// //       {loading ? (
// //         <View style={styles.centered}>
// //           <ActivityIndicator size="large" color="#6200ee" />
// //         </View>
// //       ) : error ? (
// //         <View style={styles.centered}>
// //           <Text style={styles.errorText}>{error}</Text>
// //           <TouchableOpacity 
// //             style={styles.retryButton} 
// //             onPress={fetchProducts}
// //           >
// //             <Text style={styles.retryButtonText}>Retry</Text>
// //           </TouchableOpacity>
// //         </View>
// //       ) : filteredProducts.length === 0 ? (
// //         <View style={styles.centered}>
// //           <Text style={styles.noResultsText}>No products found</Text>
// //         </View>
// //       ) : (
// //         <FlatList
// //           data={filteredProducts}
// //           keyExtractor={(item) => item.id.toString()}
// //           numColumns={2}
// //           style={styles.productList}
// //           renderItem={({ item }) => (
// //               <ProductCard 
// //                 product={item} 
// //                 onPress={() => navigation.navigate('ProductDetails', { product: item })}
// //               />
// //           )}
// //           refreshControl={
// //             <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
// //           }
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { 
// //     flex: 1, 
// //     backgroundColor: '#f8f9fa',
// //   },
// //   searchContainer: {
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //   },
// //   kalaiLogo: {
// //     width: 50,
// //     height: 50,
// //     marginRight: 10,
// //     resizeMode: 'contain',
// //   },
// //   searchInputWrapper: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#f1f3f5',
// //     borderRadius: 12,
// //     paddingHorizontal: 12,
// //     width: '100%',
// //     ...Platform.select({
// //       android: {
// //         elevation: 3,
// //       },
// //     }),
// //   },
// //   searchIcon: {
// //     width: 20,
// //     height: 20,
// //     tintColor: '#6c757d',
// //     marginRight: 10,
// //   },
// //   searchInput: {
// //     flex: 1,
// //     height: 48,
// //     fontSize: 16,
// //     color: '#212529',
// //     paddingVertical: 0,
// //   },
// //   searchInputSmall: {
// //     height: 40,
// //     fontSize: 14,
// //   },
// //   // Carousel styles
// //   carouselContainer: {
// //     marginTop: 10,
// //     marginBottom: 15,
// //     height: 180,
// //   },
// //   carouselItem: {
// //     borderRadius: 10,
// //     overflow: 'hidden',
// //     height: '100%',
// //     width: '100%',
// //     elevation: 3,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 4,
// //   },
// //   carouselImage: {
// //     width: '100%',
// //     height: '100%',
// //     resizeMode: 'cover',
// //   },
// //   carouselTextContainer: {
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: 'rgba(0,0,0,0.5)',
// //     paddingVertical: 10,
// //     paddingHorizontal: 15,
// //   },
// //   carouselText: {
// //     color: 'white',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   // Brands styles
// //   brandsContainer: {
// //     paddingHorizontal: 16,
// //     marginBottom: 10,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#333',
// //   },
// //   brandsList: {
// //     paddingRight: 16,
// //   },
// //   brandCard: {
// //     width: 80,
// //     height: 60,
// //     backgroundColor: '#e9ecef',
// //     borderRadius: 10,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 15,
// //     // elevation: 2,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 1 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 2,
// //   },
// //   brandLogo: {
// //     width: '70%',
// //     height: '70%',
// //   },
// //   categoryFilterContainer: {
// //     paddingVertical: 8,
// //     backgroundColor: '#fff',
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#e9ecef',
// //   },
// //   categoryScrollContent: {
// //     paddingHorizontal: 12,
// //     paddingVertical: 5,
// //     gap: 8,
// //   },
// //   categoryButton: {
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //     borderRadius: 16,
// //     backgroundColor: '#e9ecef',
// //     minHeight: 34,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   categoryButtonSmall: {
// //     paddingHorizontal: 12,
// //   },
// //   selectedCategory: {
// //     backgroundColor: '#007bff',
// //     elevation: 2,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 1 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 2,
// //   },
// //   categoryText: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#495057',
// //   },
// //   categoryTextSmall: {
// //     fontSize: 13,
// //   },
// //   selectedCategoryText: {
// //     color: '#fff',
// //   },
// //   productList: {
// //     paddingHorizontal: 8,
// //     paddingTop: 8,
// //   },
// //   centered: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingHorizontal: 20,
// //   },
// //   errorText: {
// //     color: '#dc3545',
// //     fontSize: 16,
// //     marginBottom: 20,
// //     textAlign: 'center',
// //     lineHeight: 22,
// //   },
// //   noResultsText: {
// //     color: '#6c757d',
// //     fontSize: 17,
// //     textAlign: 'center',
// //     fontWeight: '500',
// //   },
// //   retryButton: {
// //     backgroundColor: '#007bff',
// //     paddingHorizontal: 28,
// //     paddingVertical: 12,
// //     borderRadius: 12,
// //     minWidth: 120,
// //     alignItems: 'center',
// //   },
// //   retryButtonText: {
// //     color: '#fff',
// //     fontWeight: '600',
// //     fontSize: 16,
// //   },
// // });

// // export default HomeScreen;


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ActivityIndicator,
//   RefreshControl,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
//   Platform,
//   Image,
//   FlatList
// } from 'react-native';
// import axios from 'axios';
// import Carousel from 'react-native-snap-carousel';
// import ProductCard from '../../components/ProductCard/ProductCard';
// import Images from '../../assets/Images';

// const HomeScreen = ({ navigation }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const carouselRef = useRef(null);

//   // Get screen dimensions
//   const { width } = Dimensions.get('window');
//   const isSmallDevice = width < 375;

//   // Carousel data
//   const carouselItems = [
//     {
//       id: 1,
//       title: 'Summer Collection',
//       image: Images.Carousel1,
//     },
//     {
//       id: 2,
//       title: 'Winter Special',
//       image: Images.Carousel2,
//     },
//     {
//       id: 3,
//       title: 'New Arrivals',
//       image: Images.Carousel3,
//     },
//   ];

//   // Brands data
//   const brands = [
//     { id: 1, name: 'Nike', logo: Images.Nike },
//     { id: 2, name: 'Adidas', logo: Images.adidas },
//     { id: 3, name: 'Puma', logo: Images.puma },
//     { id: 4, name: 'Reebok', logo: Images.Reebok },
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
//         setFilteredProducts(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError('Failed to load products. Please try again later.');
//         setLoading(false);
//       });
//   };

//   const renderCarouselItem = ({ item }) => {
//     return (
//       <View style={styles.carouselItem}>
//         <Image source={item.image} style={styles.carouselImage} />
//         <View style={styles.carouselTextContainer}>
//           <Text style={styles.carouselText}>{item.title}</Text>
//         </View>
//       </View>
//     );
//   };

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     if (text) {
//       const filtered = products.filter((item) =>
//         item.title.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredProducts(filtered);
//     } else {
//       setFilteredProducts(products);
//     }
//   };

//   const handleRefresh = () => {
//     setRefreshing(true);
//     fetchProducts();
//     setRefreshing(false);
//   };

//   const filterByCategory = (category) => {
//     setSelectedCategory(category);
//     if (category === 'All') {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter((item) =>
//         item.category.toLowerCase() === category.toLowerCase()
//       );
//       setFilteredProducts(filtered);
//     }
//   };

//   const formatCategoryName = (category) => {
//     if (category === "men's clothing") return "Men";
//     if (category === "women's clothing") return "Women";
//     if (category === "jewelery") return "Jewelry";
//     return category;
//   };

//   const handleNavigateToProfile = () => {
//     navigation.navigate('Profile');
//   };

//     const handleNavigateToBrands = () => {
//     navigation.navigate('Brands');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <View style={styles.searchInputWrapper}>
//           <TouchableOpacity onPress={handleNavigateToProfile}>
//             <Image source={Images.KalaiLogo} style={styles.kalaiLogo} />
//           </TouchableOpacity>
//           <Image source={Images.Search} style={styles.searchIcon} />
//           <TextInput
//             style={[styles.searchInput, isSmallDevice && styles.searchInputSmall]}
//             placeholder="Search Products..."
//             placeholderTextColor="#999"
//             value={searchQuery}
//             onChangeText={handleSearch}
//             clearButtonMode="while-editing"
//           />
//         </View>
//       </View>

//       {/* Main Content ScrollView */}
//       <ScrollView
//         style={styles.contentContainer}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
//         }
//       >
//         {/* Category Filter */}
//         <View style={styles.categoryFilterContainer}>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.categoryScrollContent}
//           >
//             {['All', 'Electronics', 'jewelery', "men's clothing", "women's clothing"].map(
//               (category) => (
//                 <TouchableOpacity
//                   key={category}
//                   style={[
//                     styles.categoryButton,
//                     selectedCategory === category && styles.selectedCategory,
//                     isSmallDevice && styles.categoryButtonSmall,
//                   ]}
//                   onPress={() => filterByCategory(category)}
//                 >
//                   <Text
//                     style={[
//                       styles.categoryText,
//                       selectedCategory === category && styles.selectedCategoryText,
//                       isSmallDevice && styles.categoryTextSmall,
//                     ]}
//                   >
//                     {formatCategoryName(category)}
//                   </Text>
//                 </TouchableOpacity>
//               )
//             )}
//           </ScrollView>
//         </View>

//         {/* Loading and Error States */}
//         {loading ? (
//           <View style={styles.centered}>
//             <ActivityIndicator size="large" color="#6200ee" />
//           </View>
//         ) : error ? (
//           <View style={styles.centered}>
//             <Text style={styles.errorText}>{error}</Text>
//             <TouchableOpacity style={styles.retryButton} onPress={fetchProducts}>
//               <Text style={styles.retryButtonText}>Retry</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <>
//             {/* Carousel */}
//             <View style={styles.carouselContainer}>
//               <Carousel
//                 ref={carouselRef}
//                 data={carouselItems}
//                 renderItem={renderCarouselItem}
//                 sliderWidth={width}
//                 itemWidth={width * 0.85}
//                 layout={'default'}
//                 loop={true}
//                 autoplay={true}
//                 autoplayInterval={3000}
//                 inactiveSlideScale={0.95}
//                 inactiveSlideOpacity={0.7}
//               />
//             </View>

//             {/* Brands Horizontal Scroll */}
//             <View style={styles.brandsContainer}>
//               <Text style={styles.sectionTitle}>Popular Brands</Text>
//               <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 contentContainerStyle={styles.brandsList}
//               >
//                 {brands.map((item) => (
//                   <TouchableOpacity
//                     key={item.id.toString()}
//                     style={styles.brandCard}
//                     activeOpacity={0.7}
//                     onPress={handleNavigateToBrands}
//                   >
//                     <Image
//                       source={item.logo}
//                       style={styles.brandLogo}
//                       resizeMode="contain"
//                     />
//                   </TouchableOpacity>
//                 ))}
//               </ScrollView>
//             </View>

//             {/* Products Section */}
//             <View style={styles.productsContainer}>
//               <Text style={styles.sectionTitle}>Featured Products</Text>
//               {filteredProducts.length === 0 ? (
//                 <View style={styles.centered}>
//                   <Text style={styles.noResultsText}>No products found</Text>
//                 </View>
//               ) : (
//                 <FlatList
//                   data={filteredProducts}
//                   keyExtractor={(item) => item.id.toString()}
//                   numColumns={2}
//                   scrollEnabled={false}
//                   renderItem={({ item }) => (
//                     <ProductCard
//                       product={item}
//                       onPress={() =>
//                         navigation.navigate('ProductDetails', { product: item })
//                       }
//                     />
//                   )}
//                 />
//               )}
//             </View>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   searchContainer: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     backgroundColor: '#fff',
//     zIndex: 1,
//     ...Platform.select({
//       android: {
//         elevation: 3,
//       },
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 2,
//       },
//     }),
//   },
//   kalaiLogo: {
//     width: 50,
//     height: 50,
//     marginRight: 10,
//     resizeMode: 'contain',
//   },
//   searchInputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f1f3f5',
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     width: '100%',
//   },
//   searchIcon: {
//     width: 20,
//     height: 20,
//     tintColor: '#6c757d',
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: 48,
//     fontSize: 16,
//     color: '#212529',
//     paddingVertical: 0,
//   },
//   searchInputSmall: {
//     height: 40,
//     fontSize: 14,
//   },
//   carouselContainer: {
//     marginTop: 10,
//     marginBottom: 15,
//     height: 180,
//   },
//   carouselItem: {
//     borderRadius: 10,
//     overflow: 'hidden',
//     height: '100%',
//     width: '100%',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   carouselImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   carouselTextContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   carouselText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   brandsContainer: {
//     paddingHorizontal: 16,
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//     paddingHorizontal: 8,
//   },
//   brandsList: {
//     paddingRight: 16,
//   },
//   brandCard: {
//     width: 80,
//     height: 60,
//     backgroundColor: '#e9ecef',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   brandLogo: {
//     width: '70%',
//     height: '70%',
//   },
//   categoryFilterContainer: {
//     paddingVertical: 8,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   categoryScrollContent: {
//     paddingHorizontal: 12,
//     paddingVertical: 5,
//     gap: 8,
//   },
//   categoryButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 16,
//     backgroundColor: '#e9ecef',
//     minHeight: 34,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   categoryButtonSmall: {
//     paddingHorizontal: 12,
//   },
//   selectedCategory: {
//     backgroundColor: '#007bff',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   categoryText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#495057',
//   },
//   categoryTextSmall: {
//     fontSize: 13,
//   },
//   selectedCategoryText: {
//     color: '#fff',
//   },
//   productsContainer: {
//     paddingHorizontal: 8,
//     paddingTop: 8,
//     paddingBottom: 20,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     minHeight: 200,
//   },
//   errorText: {
//     color: '#dc3545',
//     fontSize: 16,
//     marginBottom: 20,
//     textAlign: 'center',
//     lineHeight: 22,
//   },
//   noResultsText: {
//     color: '#6c757d',
//     fontSize: 17,
//     textAlign: 'center',
//     fontWeight: '500',
//     marginVertical: 20,
//   },
//   retryButton: {
//     backgroundColor: '#007bff',
//     paddingHorizontal: 28,
//     paddingVertical: 12,
//     borderRadius: 12,
//     minWidth: 120,
//     alignItems: 'center',
//   },
//   retryButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

// export default HomeScreen;



// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ActivityIndicator,
//   RefreshControl,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Dimensions,
//   Platform,
//   Image,
// } from 'react-native';
// import axios from 'axios';
// import Carousel from 'react-native-snap-carousel';
// import ProductCard from '../../components/ProductCard/ProductCard';
// import Images from '../../assets/Images';

// const HomeScreen = ({ navigation }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const carouselRef = useRef(null);

//   const { width } = Dimensions.get('window');
//   const isSmallDevice = width < 375;

//   const carouselItems = [
//     { id: 1, title: 'Summer Collection', image: Images.Carousel1 },
//     { id: 2, title: 'Winter Special', image: Images.Carousel2 },
//     { id: 3, title: 'New Arrivals', image: Images.Carousel3 },
//   ];

//   const brands = [
//     { id: 1, name: 'Nike', logo: Images.Nike },
//     { id: 2, name: 'Adidas', logo: Images.adidas },
//     { id: 3, name: 'Apple', logo: Images.Apple },
//     { id: 4, name: 'Samsung', logo: Images.Samsung },
//     { id: 5, name: 'sony', logo: Images.Sony},
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
//         setFilteredProducts(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError('Failed to load products. Please try again later.');
//         setLoading(false);
//       });
//   };

//   const renderCarouselItem = ({ item }) => {
//     return (
//       <View style={styles.carouselItem}>
//         <Image source={item.image} style={styles.carouselImage} />
//         <View style={styles.carouselTextContainer}>
//           <Text style={styles.carouselText}>{item.title}</Text>
//         </View>
//       </View>
//     );
//   };

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     if (text) {
//       const filtered = products.filter((item) =>
//         item.title.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredProducts(filtered);
//     } else {
//       setFilteredProducts(products);
//     }
//   };

//   const handleRefresh = () => {
//     setRefreshing(true);
//     fetchProducts();
//     setRefreshing(false);
//   };

//   const filterByCategory = (category) => {
//     setSelectedCategory(category);
//     if (category === 'All') {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter((item) =>
//         item.category.toLowerCase() === category.toLowerCase()
//       );
//       setFilteredProducts(filtered);
//     }
//   };

//   const formatCategoryName = (category) => {
//     if (category === "men's clothing") return "Men";
//     if (category === "women's clothing") return "Women";
//     if (category === "jewelery") return "Jewelry";
//     return category;
//   };

//   const handleNavigateToProfile = () => {
//     navigation.navigate('Profile');
//   };

//   const handleNavigateToBrands = (brandName) => {
//     console.log(`Navigating to Brands with brand: ${brandName}`);
//     try {
//       navigation.navigate('Brands', { brand: brandName });
//     } catch (error) {
//       console.error('Navigation error:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <View style={styles.searchInputWrapper}>
//           <TouchableOpacity onPress={handleNavigateToProfile}>
//             <Image source={Images.KalaiLogo} style={styles.kalaiLogo} />
//           </TouchableOpacity>
//           <Image source={Images.Search} style={styles.searchIcon} />
//           <TextInput
//             style={[styles.searchInput, isSmallDevice && styles.searchInputSmall]}
//             placeholder="Search Products..."
//             placeholderTextColor="#999"
//             value={searchQuery}
//             onChangeText={handleSearch}
//             clearButtonMode="while-editing"
//           />
//         </View>
//       </View>

//       {/* Main Content ScrollView */}
//       <ScrollView
//         style={styles.contentContainer}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
//         }
//       >
//         {/* Category Filter */}
//         <View style={styles.categoryFilterContainer}>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.categoryScrollContent}
//           >
//             {['All', 'Electronics', 'jewelery', "men's clothing", "women's clothing"].map(
//               (category) => (
//                 <TouchableOpacity
//                   key={category}
//                   style={[
//                     styles.categoryButton,
//                     selectedCategory === category && styles.selectedCategory,
//                     isSmallDevice && styles.categoryButtonSmall,
//                   ]}
//                   onPress={() => filterByCategory(category)}
//                 >
//                   <Text
//                     style={[
//                       styles.categoryText,
//                       selectedCategory === category && styles.selectedCategoryText,
//                       isSmallDevice && styles.categoryTextSmall,
//                     ]}
//                   >
//                     {formatCategoryName(category)}
//                   </Text>
//                 </TouchableOpacity>
//               )
//             )}
//           </ScrollView>
//         </View>

//         {/* Loading and Error States */}
//         {loading ? (
//           <View style={styles.centered}>
//             <ActivityIndicator size="large" color="#6200ee" />
//           </View>
//         ) : error ? (
//           <View style={styles.centered}>
//             <Text style={styles.errorText}>{error}</Text>
//             <TouchableOpacity style={styles.retryButton} onPress={fetchProducts}>
//               <Text style={styles.retryButtonText}>Retry</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <>
//             {/* Carousel */}
//             <View style={styles.carouselContainer}>
//               <Carousel
//                 ref={carouselRef}
//                 data={carouselItems}
//                 renderItem={renderCarouselItem}
//                 sliderWidth={width}
//                 itemWidth={width * 0.85}
//                 layout={'default'}
//                 loop={true}
//                 autoplay={true}
//                 autoplayInterval={3000}
//                 inactiveSlideScale={0.95}
//                 inactiveSlideOpacity={0.7}
//               />
//             </View>

//             {/* Brands Horizontal Scroll */}
//             <View style={styles.brandsContainer}>
//               <Text style={styles.sectionTitle}>Popular Brands</Text>
//               <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 contentContainerStyle={styles.brandsList}
//               >
//                 {brands.map((item) => (
//                   <TouchableOpacity
//                     key={item.id.toString()}
//                     style={styles.brandCard}
//                     activeOpacity={0.7}
//                     onPress={() => handleNavigateToBrands(item.name)}
//                   >
//                     <Image
//                       source={item.logo}
//                       style={styles.brandLogo}
//                       resizeMode="contain"
//                     />
//                   </TouchableOpacity>
//                 ))}
//               </ScrollView>
//             </View>

//             {/* Products Section */}
//             <View style={styles.productsContainer}>
//               <Text style={styles.sectionTitle}>Featured Products</Text>
//               {filteredProducts.length === 0 ? (
//                 <View style={styles.centered}>
//                   <Text style={styles.noResultsText}>No products found</Text>
//                 </View>
//               ) : (
//                 <FlatList
//                   data={filteredProducts}
//                   keyExtractor={(item) => item.id.toString()}
//                   numColumns={2}
//                   scrollEnabled={false}
//                   renderItem={({ item }) => (
//                     <ProductCard
//                       product={item}
//                       onPress={() =>
//                         navigation.navigate('ProductDetails', { product: item })
//                       }
//                     />
//                   )}
//                 />
//               )}
//             </View>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// // Styles remain unchanged
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   searchContainer: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     backgroundColor: '#fff',
//     zIndex: 1,
//     ...Platform.select({
//       android: {
//         elevation: 3,
//       },
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 2,
//       },
//     }),
//   },
//   kalaiLogo: {
//     width: 50,
//     height: 50,
//     marginRight: 10,
//     resizeMode: 'contain',
//   },
//   searchInputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f1f3f5',
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     width: '100%',
//   },
//   searchIcon: {
//     width: 20,
//     height: 20,
//     tintColor: '#6c757d',
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: 48,
//     fontSize: 16,
//     color: '#212529',
//     paddingVertical: 0,
//   },
//   searchInputSmall: {
//     height: 40,
//     fontSize: 14,
//   },
//   carouselContainer: {
//     marginTop: 10,
//     marginBottom: 15,
//     height: 180,
//   },
//   carouselItem: {
//     borderRadius: 10,
//     overflow: 'hidden',
//     height: '100%',
//     width: '100%',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   carouselImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   carouselTextContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   carouselText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   brandsContainer: {
//     paddingHorizontal: 16,
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//     paddingHorizontal: 8,
//   },
//   brandsList: {
//     paddingRight: 16,
//   },
//   brandCard: {
//     width: 80,
//     height: 60,
//     backgroundColor: '#e9ecef',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   brandLogo: {
//     width: '70%',
//     height: '70%',
//   },
//   categoryFilterContainer: {
//     paddingVertical: 8,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   categoryScrollContent: {
//     paddingHorizontal: 12,
//     paddingVertical: 5,
//     gap: 8,
//   },
//   categoryButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 16,
//     backgroundColor: '#e9ecef',
//     minHeight: 34,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   categoryButtonSmall: {
//     paddingHorizontal: 12,
//   },
//   selectedCategory: {
//     backgroundColor: '#007bff',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   categoryText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#495057',
//   },
//   categoryTextSmall: {
//     fontSize: 13,
//   },
//   selectedCategoryText: {
//     color: '#fff',
//   },
//   productsContainer: {
//     paddingHorizontal: 8,
//     paddingTop: 8,
//     paddingBottom: 20,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     minHeight: 200,
//   },
//   errorText: {
//     color: '#dc3545',
//     fontSize: 16,
//     marginBottom: 20,
//     textAlign: 'center',
//     lineHeight: 22,
//   },
//   noResultsText: {
//     color: '#6c757d',
//     fontSize: 17,
//     textAlign: 'center',
//     fontWeight: '500',
//     marginVertical: 20,
//   },
//   retryButton: {
//     backgroundColor: '#007bff',
//     paddingHorizontal: 28,
//     paddingVertical: 12,
//     borderRadius: 12,
//     minWidth: 120,
//     alignItems: 'center',
//   },
//   retryButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

// export default HomeScreen;


import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import ProductCard from '../../components/ProductCard/ProductCard';
import Images from '../../assets/Images';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const carouselRef = useRef(null);
  const featuredCarouselRef = useRef(null);
  const recentCarouselRef = useRef(null);
  const testimonialsRef = useRef(null);

  const { width } = Dimensions.get('window');
  const isSmallDevice = width < 375;

  const carouselItems = [
    { id: 1, title: 'Summer Collection', image: Images.Carousel1 },
    { id: 2, title: 'Winter Special', image: Images.Carousel2 },
    { id: 3, title: 'New Arrivals', image: Images.Carousel3 },
  ];

  const brands = [
    { id: 1, name: 'Nike', logo: Images.Nike },
    { id: 2, name: 'Adidas', logo: Images.adidas },
    { id: 3, name: 'Apple', logo: Images.Apple },
    { id: 4, name: 'Samsung', logo: Images.Samsung },
    { id: 5, name: 'sony', logo: Images.Sony },
  ];

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

  // Get recently added products (last 5 added)
  const recentlyAddedProducts = [...products].sort((a, b) => b.id - a.id).slice(0, 5);
  
  // Get featured products (filter by rating > 4)
  const featuredProducts = products.filter(product => product.rating?.rate > 4);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      });
  };

  const renderCarouselItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselImage} />
        <View style={styles.carouselTextContainer}>
          <Text style={styles.carouselText}>{item.title}</Text>
        </View>
      </View>
    );
  };

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

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filtered = products.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchProducts();
    setRefreshing(false);
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) =>
        item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  const formatCategoryName = (category) => {
    if (category === "men's clothing") return "Men";
    if (category === "women's clothing") return "Women";
    if (category === "jewelery") return "Jewelry";
    return category;
  };

  const handleNavigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const handleNavigateToBrands = (brandName) => {
    console.log(`Navigating to Brands with brand: ${brandName}`);
    try {
      navigation.navigate('Brands', { brand: brandName });
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <TouchableOpacity onPress={handleNavigateToProfile}>
            <Image source={Images.KalaiLogo} style={styles.kalaiLogo} />
          </TouchableOpacity>
          <Image source={Images.Search} style={styles.searchIcon} />
          <TextInput
            style={[styles.searchInput, isSmallDevice && styles.searchInputSmall]}
            placeholder="Search Products..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={handleSearch}
            clearButtonMode="while-editing"
          />
        </View>
      </View>

      {/* Main Content ScrollView */}
      <ScrollView
        style={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {/* Category Filter */}
        <View style={styles.categoryFilterContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScrollContent}
          >
            {['All', 'Electronics', 'jewelery', "men's clothing", "women's clothing"].map(
              (category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryButton,
                    selectedCategory === category && styles.selectedCategory,
                    isSmallDevice && styles.categoryButtonSmall,
                  ]}
                  onPress={() => filterByCategory(category)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === category && styles.selectedCategoryText,
                      isSmallDevice && styles.categoryTextSmall,
                    ]}
                  >
                    {formatCategoryName(category)}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>

        {/* Loading and Error States */}
        {loading ? (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color="#6200ee" />
          </View>
        ) : error ? (
          <View style={styles.centered}>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity style={styles.retryButton} onPress={fetchProducts}>
              <Text style={styles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {/* Main Carousel */}
            <View style={styles.carouselContainer}>
              <Carousel
                ref={carouselRef}
                data={carouselItems}
                renderItem={renderCarouselItem}
                sliderWidth={width}
                itemWidth={width * 0.85}
                layout={'default'}
                loop={true}
                autoplay={true}
                autoplayInterval={3000}
                inactiveSlideScale={0.95}
                inactiveSlideOpacity={0.7}
              />
            </View>

            {/* Brands Horizontal Scroll */}
            <View style={styles.brandsContainer}>
              <Text style={styles.sectionTitle}>Popular Brands</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.brandsList}
              >
                {brands.map((item) => (
                  <TouchableOpacity
                    key={item.id.toString()}
                    style={styles.brandCard}
                    activeOpacity={0.7}
                    onPress={() => handleNavigateToBrands(item.name)}
                  >
                    <Image
                      source={item.logo}
                      style={styles.brandLogo}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>


            {/* All Products Grid */}
            <View style={styles.productsContainer}>
              <Text style={styles.sectionTitle}>All Products</Text>
              {filteredProducts.length === 0 ? (
                <View style={styles.centered}>
                  <Text style={styles.noResultsText}>No products found</Text>
                </View>
              ) : (
                <FlatList
                  data={filteredProducts}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={2}
                  scrollEnabled={false}
                  renderItem={({ item }) => (
                    <ProductCard
                      product={item}
                      onPress={() =>
                        navigation.navigate('ProductDetails', { product: item })
                      }
                    />
                  )}
                />
              )}
            </View>

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

          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    zIndex: 1,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
    }),
  },
  kalaiLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'contain',
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    borderRadius: 12,
    paddingHorizontal: 12,
    width: '100%',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#6c757d',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#212529',
    paddingVertical: 0,
  },
  searchInputSmall: {
    height: 40,
    fontSize: 14,
  },
  carouselContainer: {
    marginTop: 10,
    marginBottom: 15,
    height: 180,
  },
  carouselItem: {
    borderRadius: 10,
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  carouselTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  carouselText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  brandsContainer: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    paddingHorizontal: 16,
  },
  brandsList: {
    paddingRight: 16,
  },
  brandCard: {
    width: 80,
    height: 60,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  brandLogo: {
    width: '70%',
    height: '70%',
  },
  categoryFilterContainer: {
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  categoryScrollContent: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#e9ecef',
    minHeight: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButtonSmall: {
    paddingHorizontal: 12,
  },
  selectedCategory: {
    backgroundColor: '#007bff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
  },
  categoryTextSmall: {
    fontSize: 13,
  },
  selectedCategoryText: {
    color: '#fff',
  },
  productsContainer: {
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 20,
  },
  productsCarouselContainer: {
    paddingBottom: 20,
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
    // backgroundColor: '#fff',
    // marginBottom: 20,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: '#e9ecef',
  },
  testimonialCard: {
    // backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 1,
    shadowColor: 'grey',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    minHeight: 200,
  },
  errorText: {
    color: '#dc3545',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 22,
  },
  noResultsText: {
    color: '#6c757d',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500',
    marginVertical: 20,
  },
  retryButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 12,
    minWidth: 120,
    alignItems: 'center',
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default HomeScreen;