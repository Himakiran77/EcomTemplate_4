import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

import SplashScreen from './src/screens/splashScreen/SplashScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen/ProductDetailScreen';
import CartScreen from './src/screens/CartScreen/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen/CheckoutScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import WishlistScreen from './src/screens/WishlistScreen/WishlistScreen';
import OrderConfirmationScreen from './src/screens/OrderConfirmationScreen/OrderConfirmationScreen ';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import OtpScreen from './src/screens/OtpScreen/OtpScreen';
import OrdersScreen from './src/screens/OrdersScreen/OrdersScreen';

const homeIcon = require('./src/assets/Home.png');
const wishlistIcon = require('./src/assets/wishlist.png');
const cartIcon = require('./src/assets/Cart.png');
const profileIcon = require('./src/assets/Profile.png');
const orderIcon = require('./src/assets/Orders.png');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Otp' component={OtpScreen} options={{headerShown: false}} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: true, title: '' }} />
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: true, title: '' }} />
  </Stack.Navigator>
);

const ProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Wishlist" component={WishlistScreen} options={{ headerShown: true }} />
    <Stack.Screen name="Cart" component={CartScreen} options={{headerShown: true, title: 'My Cart'}} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tabs" component={BottomTabs} options={{ headerShown: false }} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Wishlist" component={WishlistScreen} options={{ headerShown: true }} />
    <Stack.Screen name='Orders' component={OrdersScreen} options={{headerShown: false}} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
    <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);


const TabIconWithBadge = ({ source, tintColor, badgeCount }) => (
  <View style={styles.iconContainer}>
    <Image source={source} style={[styles.icon, { tintColor }]} />
    {badgeCount > 0 && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badgeCount}</Text>
      </View>
    )}
  </View>
);

const BottomTabs = () => {
  const cartItems = useSelector(state => state.cart.items);
  const wishlistItems = useSelector(state => state.wishlist.items);
  const cartItemsCount = cartItems.length;
  const wishlistItemsCount = wishlistItems.length;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconSource;
          let badgeCount = 0;
          
          if (route.name === 'Home') {
            iconSource = homeIcon;
          } else if (route.name === 'Wishlist') {
            iconSource = wishlistIcon;
            badgeCount = wishlistItemsCount;
          } else if (route.name === 'Cart') {
            iconSource = cartIcon;
            badgeCount = cartItemsCount;
          }  else if (route.name === 'Orders') {
            iconSource = orderIcon;
          }
          else if (route.name === 'Profile') {
            iconSource = profileIcon;
          }
          
          return (
            <TabIconWithBadge 
              source={iconSource} 
              tintColor={color} 
              badgeCount={badgeCount} 
            />
          );
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'Georgia',
          fontWeight: '300',
          bottom: 3
        },
      })}
    >
      <Tab.Screen name="Home" component={ProductStack} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name='Orders' component={OrdersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default App;

