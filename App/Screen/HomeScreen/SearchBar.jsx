import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function SearchBar({searchedLocation}) {
  return (
    <View style = {styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails= {true}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          searchedLocation(details?.geometry?.location)
        }}
        query={{
          key: 'AIzaSyB7kMr1KI8r0U00pKKTrGY4i3NBi0yzxkk',
          language: 'en',
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    padding:10,
    marginTop:5,

  }
})