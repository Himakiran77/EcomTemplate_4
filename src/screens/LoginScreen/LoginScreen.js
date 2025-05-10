// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Dimensions,
//   SafeAreaView,
//   Alert
// } from 'react-native';
// import Images from '../../assets/Images';
// import { login } from '../../redux/authSlice';
// import { useDispatch } from 'react-redux';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [secureTextEntry, setSecureTextEntry] = useState(true);
//   const [errors, setErrors] = useState({
//     email: '',
//     password: ''
//   });
//   const [touched, setTouched] = useState({
//     email: false,
//     password: false
//   });
//   const dispatch = useDispatch();

//   const { width } = Dimensions.get('window');
//   const isSmallDevice = width < 375;

//   // Email validation
//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   // Password validation
//   const validatePassword = (password) => {
//     return password.length >= 6;
//   };

//   const handleBlur = (field) => {
//     setTouched({ ...touched, [field]: true });
//     validateField(field);
//   };

//   const validateField = (field) => {
//     let error = '';
//     switch (field) {
//       case 'email':
//         if (!email) {
//           error = 'Email is required';
//         } else if (!validateEmail(email)) {
//           error = 'Please enter a valid email';
//         }
//         break;
//       case 'password':
//         if (!password) {
//           error = 'Password is required';
//         } else if (!validatePassword(password)) {
//           error = 'Password must be at least 6 characters';
//         }
//         break;
//       default:
//         break;
//     }
//     setErrors({ ...errors, [field]: error });
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { ...errors };

//     if (!email) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       newErrors.email = 'Please enter a valid email';
//       isValid = false;
//     }

//     if (!password) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else if (!validatePassword(password)) {
//       newErrors.password = 'Password must be at least 6 characters';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     setTouched({ email: true, password: true });
//     return isValid;
//   };

//   const handleLogin = () => {
//     if (validateForm()) {
//       // Alert.alert('Success', 'Login successful!');
//       dispatch(login());
//       navigation.navigate('Otp', {email: email});
//     }
//   };

//   const toggleSecureEntry = () => {
//     setSecureTextEntry(!secureTextEntry);
//   };

//   const handleNavigateForgotPassword = () => {
//     navigation.navigate('ForgotPassword');
//   };

//   const handleNavigateSignUp = () => {
//     navigation.navigate('SignUp');
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.container}
//       >
//         <ScrollView
//           contentContainerStyle={styles.scrollContainer}
//           keyboardShouldPersistTaps="handled"
//         >
//           {/* Logo Section */}
//           <View style={styles.logoContainer}>
//             <Image
//               source={Images.KalaiLogo}
//               style={[
//                 styles.logo,
//                 isSmallDevice && styles.logoSmall
//               ]}
//               resizeMode="contain"
//             />
//             <Text style={[
//               styles.welcomeText,
//               isSmallDevice && styles.welcomeTextSmall
//             ]}>
//               Welcome Back!
//             </Text>
//             <Text style={styles.subText}>Sign in to continue</Text>
//           </View>

//           {/* Form Section */}
//           <View style={styles.formContainer}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Email</Text>
//               <TextInput
//                 style={[
//                   styles.input,
//                   isSmallDevice && styles.inputSmall,
//                   touched.email && errors.email ? styles.inputError : null
//                 ]}
//                 placeholder="Enter your email"
//                 placeholderTextColor="#999"
//                 value={email}
//                 onChangeText={(text) => {
//                   setEmail(text);
//                   if (touched.email) validateField('email');
//                 }}
//                 onBlur={() => handleBlur('email')}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//               {touched.email && errors.email ? (
//                 <Text style={styles.errorText}>{errors.email}</Text>
//               ) : null}
//             </View>

//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Password</Text>
//               <View style={styles.passwordInputContainer}>
//                 <TextInput
//                   style={[
//                     styles.input,
//                     styles.passwordInput,
//                     isSmallDevice && styles.inputSmall,
//                     touched.password && errors.password ? styles.inputError : null
//                   ]}
//                   placeholder="Enter your password"
//                   placeholderTextColor="#999"
//                   value={password}
//                   onChangeText={(text) => {
//                     setPassword(text);
//                     if (touched.password) validateField('password');
//                   }}
//                   onBlur={() => handleBlur('password')}
//                   secureTextEntry={secureTextEntry}
//                 />
//                 <TouchableOpacity
//                   style={styles.eyeIcon}
//                   onPress={toggleSecureEntry}
//                 >
//                   <Text style={styles.eyeIconText}>
//                     {secureTextEntry ? '👁️' : '👁️‍🗨️'}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//               {touched.password && errors.password ? (
//                 <Text style={styles.errorText}>{errors.password}</Text>
//               ) : null}
//             </View>

//             <TouchableOpacity style={styles.forgotPassword} onPress={handleNavigateForgotPassword}>
//               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.loginButton}
//               onPress={handleLogin}
//               activeOpacity={0.8}
//             >
//               <Text style={styles.loginButtonText}>Login</Text>
//             </TouchableOpacity>

//             <View style={styles.dividerContainer}>
//               <View style={styles.dividerLine} />
//               <Text style={styles.dividerText}>OR</Text>
//               <View style={styles.dividerLine} />
//             </View>

//             <TouchableOpacity style={styles.socialButtonContent}>
//               <Image 
//                 source={Images.Google} 
//                 style={styles.googleIcon}
//               />
//               <Text style={styles.socialButtonText}>Continue with Google</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Footer Section */}
//           <View style={styles.footer}>
//             <Text style={styles.footerText}>Don't have an account? </Text>
//             <TouchableOpacity onPress={handleNavigateSignUp}>
//               <Text style={styles.signupText}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   // ... (keep all previous styles) ...
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingBottom: 40,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 40,
//     paddingHorizontal: 20,
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     marginBottom: 20,
//   },
//   logoSmall: {
//     width: 100,
//     height: 100,
//   },
//   welcomeText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   welcomeTextSmall: {
//     fontSize: 24,
//   },
//   subText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   formContainer: {
//     paddingHorizontal: 30,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     backgroundColor: '#f9f9f9',
//     color: 'black'
//   },
//   inputSmall: {
//     height: 45,
//     fontSize: 14,
//   },
//   passwordInputContainer: {
//     position: 'relative',
//   },
//   passwordInput: {
//     paddingRight: 50,
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 13,
//   },
//   eyeIconText: {
//     fontSize: 20,
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginBottom: 25,
//   },
//   forgotPasswordText: {
//     color: '#0000FF',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   loginButton: {
//     backgroundColor: '#0000FF',
//     height: 50,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//       },
//       android: {
//         elevation: 4,
//       },
//     }),
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   dividerLine: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ddd',
//   },
//   dividerText: {
//     marginHorizontal: 10,
//     color: '#666',
//     fontSize: 14,
//   },
//   socialButton: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     height: 50,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   socialButtonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     height: 50,
//     borderRadius: 8,
//     justifyContent: 'center',
//     marginBottom: 30,
//   },
//   googleIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   socialButtonText: {
//     color: '#333',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   footerText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   signupText: {
//     color: '#0000FF',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   inputError: {
//     borderColor: '#ff4444',
//   },
//   errorText: {
//     color: '#ff4444',
//     fontSize: 12,
//     marginTop: 4,
//     marginLeft: 4,
//   },
//   // ... (rest of the styles remain the same) ...
// });

// export default LoginScreen;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Dimensions,
//   SafeAreaView,
//   Alert,
// } from 'react-native';
// import Images from '../../assets/Images';
// import { login } from '../../redux/authSlice';
// import { useDispatch } from 'react-redux';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [secureTextEntry, setSecureTextEntry] = useState(true);
//   const [errors, setErrors] = useState({
//     email: '',
//     password: '',
//   });
//   const [touched, setTouched] = useState({
//     email: false,
//     password: false,
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();

//   const { width } = Dimensions.get('window');
//   const isSmallDevice = width < 375;

//   // Email validation
//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   // Password validation
//   const validatePassword = (password) => {
//     return password.length >= 6;
//   };

//   const handleBlur = (field) => {
//     setTouched({ ...touched, [field]: true });
//     validateField(field);
//   };

//   const validateField = (field) => {
//     let error = '';
//     switch (field) {
//       case 'email':
//         if (!email) {
//           error = 'Email is required';
//         } else if (!validateEmail(email)) {
//           error = 'Please enter a valid email';
//         }
//         break;
//       case 'password':
//         if (!password) {
//           error = 'Password is required';
//         } else if (!validatePassword(password)) {
//           error = 'Password must be at least 6 characters';
//         }
//         break;
//       default:
//         break;
//     }
//     setErrors({ ...errors, [field]: error });
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { ...errors };

//     if (!email) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       newErrors.email = 'Please enter a valid email';
//       isValid = false;
//     }

//     if (!password) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else if (!validatePassword(password)) {
//       newErrors.password = 'Password must be at least 6 characters';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     setTouched({ email: true, password: true });
//     return isValid;
//   };

//   const handleLogin = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await fetch('http://192.168.1.12:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === 'ok') {
//         // Dispatch login action with user data
//         dispatch(login({ user: data.data }));
//         // Navigate to Otp screen with email
        
//         // navigation.navigate('Otp', { email });
//         navigation.navigate('Tabs');
//       } else {
//         Alert.alert('Error', data.data || 'Something went wrong');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to connect to the server');
//       console.error('Login Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleSecureEntry = () => {
//     setSecureTextEntry(!secureTextEntry);
//   };

//   const handleNavigateForgotPassword = () => {
//     navigation.navigate('ForgotPassword');
//   };

//   const handleNavigateSignUp = () => {
//     navigation.navigate('SignUp');
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.container}
//       >
//         <ScrollView
//           contentContainerStyle={styles.scrollContainer}
//           keyboardShouldPersistTaps="handled"
//         >
//           {/* Logo Section */}
//           <View style={styles.logoContainer}>
//             <Image
//               source={Images.KalaiLogo}
//               style={[styles.logo, isSmallDevice && styles.logoSmall]}
//               resizeMode="contain"
//             />
//             <Text style={[styles.welcomeText, isSmallDevice && styles.welcomeTextSmall]}>
//               Welcome Back!
//             </Text>
//             <Text style={styles.subText}>Sign in to continue</Text>
//           </View>

//           {/* Form Section */}
//           <View style={styles.formContainer}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Email</Text>
//               <TextInput
//                 style={[
//                   styles.input,
//                   isSmallDevice && styles.inputSmall,
//                   touched.email && errors.email ? styles.inputError : null,
//                 ]}
//                 placeholder="Enter your email"
//                 placeholderTextColor="#999"
//                 value={email}
//                 onChangeText={(text) => {
//                   setEmail(text);
//                   if (touched.email) validateField('email');
//                 }}
//                 onBlur={() => handleBlur('email')}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//               {touched.email && errors.email ? (
//                 <Text style={styles.errorText}>{errors.email}</Text>
//               ) : null}
//             </View>

//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Password</Text>
//               <View style={styles.passwordInputContainer}>
//                 <TextInput
//                   style={[
//                     styles.input,
//                     styles.passwordInput,
//                     isSmallDevice && styles.inputSmall,
//                     touched.password && errors.password ? styles.inputError : null,
//                   ]}
//                   placeholder="Enter your password"
//                   placeholderTextColor="#999"
//                   value={password}
//                   onChangeText={(text) => {
//                     setPassword(text);
//                     if (touched.password) validateField('password');
//                   }}
//                   onBlur={() => handleBlur('password')}
//                   secureTextEntry={secureTextEntry}
//                 />
//                 <TouchableOpacity style={styles.eyeIcon} onPress={toggleSecureEntry}>
//                   <Text style={styles.eyeIconText}>
//                     {secureTextEntry ? '👁️' : '👁️‍🗨️'}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//               {touched.password && errors.password ? (
//                 <Text style={styles.errorText}>{errors.password}</Text>
//               ) : null}
//             </View>

//             <TouchableOpacity style={styles.forgotPassword} onPress={handleNavigateForgotPassword}>
//               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
//               onPress={handleLogin}
//               activeOpacity={0.8}
//               disabled={isLoading}
//             >
//               <Text style={styles.loginButtonText}>
//                 {isLoading ? 'Logging In...' : 'Login'}
//               </Text>
//             </TouchableOpacity>

//             <View style={styles.dividerContainer}>
//               <View style={styles.dividerLine} />
//               <Text style={styles.dividerText}>OR</Text>
//               <View style={styles.dividerLine} />
//             </View>

//             <TouchableOpacity style={styles.socialButtonContent}>
//               <Image source={Images.Google} style={styles.googleIcon} />
//               <Text style={styles.socialButtonText}>Continue with Google</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Footer Section */}
//           <View style={styles.footer}>
//             <Text style={styles.footerText}>Don't have an account? </Text>
//             <TouchableOpacity onPress={handleNavigateSignUp}>
//               <Text style={styles.signupText}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingBottom: 40,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 40,
//     paddingHorizontal: 20,
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     marginBottom: 20,
//   },
//   logoSmall: {
//     width: 100,
//     height: 100,
//   },
//   welcomeText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   welcomeTextSmall: {
//     fontSize: 24,
//   },
//   subText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   formContainer: {
//     paddingHorizontal: 30,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     backgroundColor: '#f9f9f9',
//     color: 'black',
//   },
//   inputSmall: {
//     height: 45,
//     fontSize: 14,
//   },
//   passwordInputContainer: {
//     position: 'relative',
//   },
//   passwordInput: {
//     paddingRight: 50,
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 13,
//   },
//   eyeIconText: {
//     fontSize: 20,
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginBottom: 25,
//   },
//   forgotPasswordText: {
//     color: '#0000FF',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   loginButton: {
//     backgroundColor: '#0000FF',
//     height: 50,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//       },
//       android: {
//         elevation: 4,
//       },
//     }),
//   },
//   loginButtonDisabled: {
//     backgroundColor: '#6666FF',
//     opacity: 0.7,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   dividerLine: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ddd',
//   },
//   dividerText: {
//     marginHorizontal: 10,
//     color: '#666',
//     fontSize: 14,
//   },
//   socialButtonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     height: 50,
//     borderRadius: 8,
//     justifyContent: 'center',
//     marginBottom: 30,
//   },
//   googleIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   socialButtonText: {
//     color: '#333',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   footerText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   signupText: {
//     color: '#0000FF',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   inputError: {
//     borderColor: '#ff4444',
//   },
//   errorText: {
//     color: '#ff4444',
//     fontSize: 12,
//     marginTop: 4,
//     marginLeft: 4,
//   },
// });

// export default LoginScreen;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Dimensions,
//   SafeAreaView,
//   Alert,
// } from 'react-native';
// import Images from '../../assets/Images';
// import { login } from '../../redux/authSlice';
// import { useDispatch } from 'react-redux';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [secureTextEntry, setSecureTextEntry] = useState(true);
//   const [errors, setErrors] = useState({
//     email: '',
//     password: '',
//   });
//   const [touched, setTouched] = useState({
//     email: false,
//     password: false,
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();

//   const { width } = Dimensions.get('window');
//   const isSmallDevice = width < 375;

//   // Email validation
//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   // Password validation
//   const validatePassword = (password) => {
//     return password.length >= 6;
//   };

//   const handleBlur = (field) => {
//     setTouched({ ...touched, [field]: true });
//     validateField(field);
//   };

//   const validateField = (field) => {
//     let error = '';
//     switch (field) {
//       case 'email':
//         if (!email) {
//           error = 'Email is required';
//         } else if (!validateEmail(email)) {
//           error = 'Please enter a valid email';
//         }
//         break;
//       case 'password':
//         if (!password) {
//           error = 'Password is required';
//         } else if (!validatePassword(password)) {
//           error = 'Password must be at least 6 characters';
//         }
//         break;
//       default:
//         break;
//     }
//     setErrors({ ...errors, [field]: error });
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { ...errors };

//     if (!email) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       newErrors.email = 'Please enter a valid email';
//       isValid = false;
//     }

//     if (!password) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else if (!validatePassword(password)) {
//       newErrors.password = 'Password must be at least 6 characters';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     setTouched({ email: true, password: true });
//     return isValid;
//   };

//   const handleResendVerification = async () => {
//     if (!validateEmail(email)) {
//       Alert.alert('Error', 'Please enter a valid email to resend verification');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await fetch('http://192.168.1.12:5000/resend-verification', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();
//       if (data.status === 'ok') {
//         Alert.alert('Success', 'Verification email resent. Please check your inbox.');
//       } else {
//         Alert.alert('Error', data.data || 'Failed to resend verification email');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to connect to the server');
//       console.error('Resend Verification Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogin = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);
//     try {
//         // const BASE_URL = 'https://2718-175-101-32-83.ngrok-free.app';
//         const BASE_URL = 'https://6353-2401-4900-889d-d311-782e-2231-43c-1229.ngrok-free.app';
//        // const response = await fetch('http://192.168.1.12:5000/login', {
//         const response = await fetch(`${BASE_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === 'ok') {
//         // Dispatch login action with user data
//         dispatch(login({ user: data.data }));
//         navigation.navigate('Tabs');
//       } else if (data.data === 'Please verify your email first') {
//         Alert.alert(
//           'Email Not Verified',
//           'Please verify your email to log in.',
//           [
//             { text: 'Cancel', style: 'cancel' },
//             { text: 'Resend Verification', onPress: handleResendVerification },
//           ]
//         );
//       } else {
//         Alert.alert('Error', data.data || 'Something went wrong');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to connect to the server');
//       console.error('Login Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleSecureEntry = () => {
//     setSecureTextEntry(!secureTextEntry);
//   };

//   const handleNavigateForgotPassword = () => {
//     navigation.navigate('ForgotPassword');
//   };

//   const handleNavigateSignUp = () => {
//     navigation.navigate('SignUp');
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.container}
//       >
//         <ScrollView
//           contentContainerStyle={styles.scrollContainer}
//           keyboardShouldPersistTaps="handled"
//         >
//           {/* Logo Section */}
//           <View style={styles.logoContainer}>
//             <Image
//               source={Images.KalaiLogo}
//               style={[styles.logo, isSmallDevice && styles.logoSmall]}
//               resizeMode="contain"
//             />
//             <Text style={[styles.welcomeText, isSmallDevice && styles.welcomeTextSmall]}>
//               Welcome Back!
//             </Text>
//             <Text style={styles.subText}>Sign in to continue</Text>
//           </View>

//           {/* Form Section */}
//           <View style={styles.formContainer}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Email</Text>
//               <TextInput
//                 style={[
//                   styles.input,
//                   isSmallDevice && styles.inputSmall,
//                   touched.email && errors.email ? styles.inputError : null,
//                 ]}
//                 placeholder="Enter your email"
//                 placeholderTextColor="#999"
//                 value={email}
//                 onChangeText={(text) => {
//                   setEmail(text);
//                   if (touched.email) validateField('email');
//                 }}
//                 onBlur={() => handleBlur('email')}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//               {touched.email && errors.email ? (
//                 <Text style={styles.errorText}>{errors.email}</Text>
//               ) : null}
//             </View>

//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Password</Text>
//               <View style={styles.passwordInputContainer}>
//                 <TextInput
//                   style={[
//                     styles.input,
//                     styles.passwordInput,
//                     isSmallDevice && styles.inputSmall,
//                     touched.password && errors.password ? styles.inputError : null,
//                   ]}
//                   placeholder="Enter your password"
//                   placeholderTextColor="#999"
//                   value={password}
//                   onChangeText={(text) => {
//                     setPassword(text);
//                     if (touched.password) validateField('password');
//                   }}
//                   onBlur={() => handleBlur('password')}
//                   secureTextEntry={secureTextEntry}
//                 />
//                 <TouchableOpacity style={styles.eyeIcon} onPress={toggleSecureEntry}>
//                   <Text style={styles.eyeIconText}>
//                     {secureTextEntry ? '👁️' : '👁️‍🗨️'}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//               {touched.password && errors.password ? (
//                 <Text style={styles.errorText}>{errors.password}</Text>
//               ) : null}
//             </View>

//             <TouchableOpacity style={styles.forgotPassword} onPress={handleNavigateForgotPassword}>
//               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
//               onPress={handleLogin}
//               activeOpacity={0.8}
//               disabled={isLoading}
//             >
//               <Text style={styles.loginButtonText}>
//                 {isLoading ? 'Logging In...' : 'Login'}
//               </Text>
//             </TouchableOpacity>

//             <View style={styles.dividerContainer}>
//               <View style={styles.dividerLine} />
//               <Text style={styles.dividerText}>OR</Text>
//               <View style={styles.dividerLine} />
//             </View>

//             <TouchableOpacity style={styles.socialButtonContent}>
//               <Image source={Images.Google} style={styles.googleIcon} />
//               <Text style={styles.socialButtonText}>Continue with Google</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Footer Section */}
//           <View style={styles.footer}>
//             <Text style={styles.footerText}>Don't have an account? </Text>
//             <TouchableOpacity onPress={handleNavigateSignUp}>
//               <Text style={styles.signupText}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// // Styles remain unchanged
// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingBottom: 40,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 40,
//     paddingHorizontal: 20,
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     marginBottom: 20,
//   },
//   logoSmall: {
//     width: 100,
//     height: 100,
//   },
//   welcomeText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   welcomeTextSmall: {
//     fontSize: 24,
//   },
//   subText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   formContainer: {
//     paddingHorizontal: 30,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     backgroundColor: '#f9f9f9',
//     color: 'black',
//   },
//   inputSmall: {
//     height: 45,
//     fontSize: 14,
//   },
//   passwordInputContainer: {
//     position: 'relative',
//   },
//   passwordInput: {
//     paddingRight: 50,
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 13,
//   },
//   eyeIconText: {
//     fontSize: 20,
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginBottom: 25,
//   },
//   forgotPasswordText: {
//     color: '#0000FF',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   loginButton: {
//     backgroundColor: '#0000FF',
//     height: 50,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//       },
//       android: {
//         elevation: 4,
//       },
//     }),
//   },
//   loginButtonDisabled: {
//     backgroundColor: '#6666FF',
//     opacity: 0.7,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   dividerLine: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ddd',
//   },
//   dividerText: {
//     marginHorizontal: 10,
//     color: '#666',
//     fontSize: 14,
//   },
//   socialButtonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     height: 50,
//     borderRadius: 8,
//     justifyContent: 'center',
//     marginBottom: 30,
//   },
//   googleIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   socialButtonText: {
//     color: '#333',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   footerText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   signupText: {
//     color: '#0000FF',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   inputError: {
//     borderColor: '#ff4444',
//   },
//   errorText: {
//     color: '#ff4444',
//     fontSize: 12,
//     marginTop: 4,
//     marginLeft: 4,
//   },
// });

// export default LoginScreen;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Dimensions,
//   SafeAreaView,
//   Alert,
// } from 'react-native';
// import Images from '../../assets/Images';
// import { login } from '../../redux/authSlice';
// import { useDispatch } from 'react-redux';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [secureTextEntry, setSecureTextEntry] = useState(true);
//   const [errors, setErrors] = useState({
//     email: '',
//     password: '',
//   });
//   const [touched, setTouched] = useState({
//     email: false,
//     password: false,
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();

//   const { width } = Dimensions.get('window');
//   const isSmallDevice = width < 375;

//   // Email validation
//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   // Password validation
//   const validatePassword = (password) => {
//     return password.length >= 6;
//   };

//   const handleBlur = (field) => {
//     setTouched({ ...touched, [field]: true });
//     validateField(field);
//   };

//   const validateField = (field) => {
//     let error = '';
//     switch (field) {
//       case 'email':
//         if (!email) {
//           error = 'Email is required';
//         } else if (!validateEmail(email)) {
//           error = 'Please enter a valid email';
//         }
//         break;
//       case 'password':
//         if (!password) {
//           error = 'Password is required';
//         } else if (!validatePassword(password)) {
//           error = 'Password must be at least 6 characters';
//         }
//         break;
//       default:
//         break;
//     }
//     setErrors({ ...errors, [field]: error });
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { ...errors };

//     if (!email) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       newErrors.email = 'Please enter a valid email';
//       isValid = false;
//     }

//     if (!password) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else if (!validatePassword(password)) {
//       newErrors.password = 'Password must be at least 6 characters';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     setTouched({ email: true, password: true });
//     return isValid;
//   };

//   const handleResendVerification = async () => {
//     if (!validateEmail(email)) {
//       Alert.alert('Error', 'Please enter a valid email to resend verification');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         'https://6353-2401-4900-889d-d311-782e-2231-43c-1229.ngrok-free.app/resend-verification',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         }
//       );

//       const data = await response.json();
//       if (data.status === 'ok') {
//         Alert.alert('Success', 'Verification email resent. Please check your inbox.');
//       } else {
//         Alert.alert('Error', data.data || 'Failed to resend verification email');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to connect to the server');
//       console.error('Resend Verification Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogin = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const BASE_URL = 'https://6353-2401-4900-889d-d311-782e-2231-43c-1229.ngrok-free.app';
//       const response = await fetch(`${BASE_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === 'ok') {
//         // Dispatch login action with userId
//         if (data.data.id) {
//           dispatch(login(data.data.id)); // Dispatch only the userId
//           navigation.navigate('Tabs');
//         } else {
//           Alert.alert('Error', 'Invalid user data received');
//         }
//       } else if (data.data === 'Please verify your email first') {
//         Alert.alert(
//           'Email Not Verified',
//           'Please verify your email to log in.',
//           [
//             { text: 'Cancel', style: 'cancel' },
//             { text: 'Resend Verification', onPress: handleResendVerification },
//           ]
//         );
//       } else {
//         Alert.alert('Error', data.data || 'Something went wrong');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to connect to the server');
//       console.error('Login Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleSecureEntry = () => {
//     setSecureTextEntry(!secureTextEntry);
//   };

//   const handleNavigateForgotPassword = () => {
//     navigation.navigate('ForgotPassword');
//   };

//   const handleNavigateSignUp = () => {
//     navigation.navigate('SignUp');
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.container}
//       >
//         <ScrollView
//           contentContainerStyle={styles.scrollContainer}
//           keyboardShouldPersistTaps="handled"
//         >
//           {/* Logo Section */}
//           <View style={styles.logoContainer}>
//             <Image
//               source={Images.KalaiLogo}
//               style={[styles.logo, isSmallDevice && styles.logoSmall]}
//               resizeMode="contain"
//             />
//             <Text style={[styles.welcomeText, isSmallDevice && styles.welcomeTextSmall]}>
//               Welcome Back!
//             </Text>
//             <Text style={styles.subText}>Sign in to continue</Text>
//           </View>

//           {/* Form Section */}
//           <View style={styles.formContainer}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Email</Text>
//               <TextInput
//                 style={[
//                   styles.input,
//                   isSmallDevice && styles.inputSmall,
//                   touched.email && errors.email ? styles.inputError : null,
//                 ]}
//                 placeholder="Enter your email"
//                 placeholderTextColor="#999"
//                 value={email}
//                 onChangeText={(text) => {
//                   setEmail(text);
//                   if (touched.email) validateField('email');
//                 }}
//                 onBlur={() => handleBlur('email')}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//               {touched.email && errors.email ? (
//                 <Text style={styles.errorText}>{errors.email}</Text>
//               ) : null}
//             </View>

//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Password</Text>
//               <View style={styles.passwordInputContainer}>
//                 <TextInput
//                   style={[
//                     styles.input,
//                     styles.passwordInput,
//                     isSmallDevice && styles.inputSmall,
//                     touched.password && errors.password ? styles.inputError : null,
//                   ]}
//                   placeholder="Enter your password"
//                   placeholderTextColor="#999"
//                   value={password}
//                   onChangeText={(text) => {
//                     setPassword(text);
//                     if (touched.password) validateField('password');
//                   }}
//                   onBlur={() => handleBlur('password')}
//                   secureTextEntry={secureTextEntry}
//                 />
//                 <TouchableOpacity style={styles.eyeIcon} onPress={toggleSecureEntry}>
//                   <Text style={styles.eyeIconText}>
//                     {secureTextEntry ? '👁️' : '👁️‍🗨️'}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//               {touched.password && errors.password ? (
//                 <Text style={styles.errorText}>{errors.password}</Text>
//               ) : null}
//             </View>

//             <TouchableOpacity style={styles.forgotPassword} onPress={handleNavigateForgotPassword}>
//               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
//               onPress={handleLogin}
//               activeOpacity={0.8}
//               disabled={isLoading}
//             >
//               <Text style={styles.loginButtonText}>
//                 {isLoading ? 'Logging In...' : 'Login'}
//               </Text>
//             </TouchableOpacity>

//             <View style={styles.dividerContainer}>
//               <View style={styles.dividerLine} />
//               <Text style={styles.dividerText}>OR</Text>
//               <View style={styles.dividerLine} />
//             </View>

//             <TouchableOpacity style={styles.socialButtonContent}>
//               <Image source={Images.Google} style={styles.googleIcon} />
//               <Text style={styles.socialButtonText}>Continue with Google</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Footer Section */}
//           <View style={styles.footer}>
//             <Text style={styles.footerText}>Don't have an account? </Text>
//             <TouchableOpacity onPress={handleNavigateSignUp}>
//               <Text style={styles.signupText}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingBottom: 40,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 40,
//     paddingHorizontal: 20,
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     marginBottom: 20,
//   },
//   logoSmall: {
//     width: 100,
//     height: 100,
//   },
//   welcomeText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   welcomeTextSmall: {
//     fontSize: 24,
//   },
//   subText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   formContainer: {
//     paddingHorizontal: 30,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     backgroundColor: '#f9f9f9',
//     color: 'black',
//   },
//   inputSmall: {
//     height: 45,
//     fontSize: 14,
//   },
//   passwordInputContainer: {
//     position: 'relative',
//   },
//   passwordInput: {
//     paddingRight: 50,
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 13,
//   },
//   eyeIconText: {
//     fontSize: 20,
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginBottom: 25,
//   },
//   forgotPasswordText: {
//     color: '#0000FF',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   loginButton: {
//     backgroundColor: '#0000FF',
//     height: 50,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//       },
//       android: {
//         elevation: 4,
//       },
//     }),
//   },
//   loginButtonDisabled: {
//     backgroundColor: '#6666FF',
//     opacity: 0.7,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   dividerLine: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ddd',
//   },
//   dividerText: {
//     marginHorizontal: 10,
//     color: '#666',
//     fontSize: 14,
//   },
//   socialButtonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     height: 50,
//     borderRadius: 8,
//     justifyContent: 'center',
//     marginBottom: 30,
//   },
//   googleIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   socialButtonText: {
//     color: '#333',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   footerText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   signupText: {
//     color: '#0000FF',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   inputError: {
//     borderColor: '#ff4444',
//   },
//   errorText: {
//     color: '#ff4444',
//     fontSize: 12,
//     marginTop: 4,
//     marginLeft: 4,
//   },
// });

// export default LoginScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../assets/Images';
import { login } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';

const BASE_URL = 'https://ecommerce-backend-psi-lake.vercel.app';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const { width } = Dimensions.get('window');
  const isSmallDevice = width < 375;

  // Email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Password validation
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    validateField(field);
  };

  const validateField = (field) => {
    let error = '';
    switch (field) {
      case 'email':
        if (!email) {
          error = 'Email is required';
        } else if (!validateEmail(email)) {
          error = 'Please enter a valid email';
        }
        break;
      case 'password':
        if (!password) {
          error = 'Password is required';
        } else if (!validatePassword(password)) {
          error = 'Password must be at least 6 characters';
        }
        break;
      default:
        break;
    }
    setErrors({ ...errors, [field]: error });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    setTouched({ email: true, password: true });
    return isValid;
  };

  const handleResendVerification = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email to resend verification');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/resend-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.status === 'ok') {
        Alert.alert('Success', 'Verification email resent. Please check your inbox.');
      } else {
        Alert.alert('Error', data.data || 'Failed to resend verification email');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server');
      console.error('Resend Verification Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.status === 'ok') {
        if (data.data.id) {
          // Store userId in AsyncStorage
          await AsyncStorage.setItem('userId', data.data.id);
          // Dispatch login action with userId
          dispatch(login(data.data.id));
          navigation.navigate('Tabs');
        } else {
          Alert.alert('Error', 'Invalid user data received');
        }
      } else if (data.data === 'Please verify your email first') {
        Alert.alert(
          'Email Not Verified',
          'Please verify your email to log in.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Resend Verification', onPress: handleResendVerification },
          ]
        );
      } else {
        Alert.alert('Error', data.data || 'Something went wrong');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server');
      console.error('Login Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleNavigateForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleNavigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <Image
              source={Images.KalaiLogo}
              style={[styles.logo, isSmallDevice && styles.logoSmall]}
              resizeMode="contain"
            />
            <Text style={[styles.welcomeText, isSmallDevice && styles.welcomeTextSmall]}>
              Welcome Back!
            </Text>
            <Text style={styles.subText}>Sign in to continue</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={[
                  styles.input,
                  isSmallDevice && styles.inputSmall,
                  touched.email && errors.email ? styles.inputError : null,
                ]}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (touched.email) validateField('email');
                }}
                onBlur={() => handleBlur('email')}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {touched.email && errors.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    styles.passwordInput,
                    isSmallDevice && styles.inputSmall,
                    touched.password && errors.password ? styles.inputError : null,
                  ]}
                  placeholder="Enter your password"
                  placeholderTextColor="#999"
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    if (touched.password) validateField('password');
                  }}
                  onBlur={() => handleBlur('password')}
                  secureTextEntry={secureTextEntry}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={toggleSecureEntry}>
                  <Text style={styles.eyeIconText}>
                    {secureTextEntry ? '👁️' : '👁️‍🗨️'}
                  </Text>
                </TouchableOpacity>
              </View>
              {touched.password && errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </View>

            <TouchableOpacity style={styles.forgotPassword} onPress={handleNavigateForgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
              onPress={handleLogin}
              activeOpacity={0.8}
              disabled={isLoading}
            >
              <Text style={styles.loginButtonText}>
                {isLoading ? 'Logging In...' : 'Login'}
              </Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity style={styles.socialButtonContent}>
              <Image source={Images.Google} style={styles.googleIcon} />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Section */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleNavigateSignUp}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  logoSmall: {
    width: 100,
    height: 100,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  welcomeTextSmall: {
    fontSize: 24,
  },
  subText: {
    fontSize: 16,
    color: '#666',
  },
  formContainer: {
    paddingHorizontal: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: 'black',
  },
  inputSmall: {
    height: 45,
    fontSize: 14,
  },
  passwordInputContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 13,
  },
  eyeIconText: {
    fontSize: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: '#0000FF',
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#0000FF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  loginButtonDisabled: {
    backgroundColor: '#6666FF',
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#666',
    fontSize: 14,
  },
  socialButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 30,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  signupText: {
    color: '#0000FF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputError: {
    borderColor: '#ff4444',
  },
  errorText: {
    color: '#ff4444',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});

export default LoginScreen;