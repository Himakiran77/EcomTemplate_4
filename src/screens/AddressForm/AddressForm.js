import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const AddressForm = ({ route, navigation }) => {
  const { currentAddress } = route.params || {};
  
  const [formData, setFormData] = useState({
    name: currentAddress?.name || '',
    street: currentAddress?.street || '',
    city: currentAddress?.city || '',
    state: currentAddress?.state || '',
    country: currentAddress?.country || '',
    phone: currentAddress?.phone || '',
    zipCode: currentAddress?.zipCode || '',
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = () => {
    navigation.navigate('Checkout', { newAddress: formData });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => handleChange('name', text)}
          placeholder="John Doe"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Street Address</Text>
        <TextInput
          style={styles.input}
          value={formData.street}
          onChangeText={(text) => handleChange('street', text)}
          placeholder="123 Main Street"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          value={formData.city}
          onChangeText={(text) => handleChange('city', text)}
          placeholder="New York"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>State/Province</Text>
        <TextInput
          style={styles.input}
          value={formData.state}
          onChangeText={(text) => handleChange('state', text)}
          placeholder="NY"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Zip/Postal Code</Text>
        <TextInput
          style={styles.input}
          value={formData.zipCode}
          onChangeText={(text) => handleChange('zipCode', text)}
          placeholder="10001"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.input}
          value={formData.country}
          onChangeText={(text) => handleChange('country', text)}
          placeholder="United States"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={formData.phone}
          onChangeText={(text) => handleChange('phone', text)}
          placeholder="+1 (555) 123-4567"
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Save Address</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    backgroundColor: '#0000FF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddressForm;