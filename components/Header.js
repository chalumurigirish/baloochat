import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://picsum.photos/200',
        }}
      />
      <Text style={styles.headerText}>Girish Chalumuri</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    height: 90,
    backgroundColor: '#000000',
    flexDirection: 'row',
  },
  image: {
    marginLeft: 20,
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 40,
    color: 'white',
  },
});

export default Header;
