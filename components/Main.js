import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import UserAddIcon from '../assets/icons/UserAdd';

import User from './User';
import { data } from '../data';

const Main = () => {
  return (
    <View style={styles.outerContainer}>
      <ScrollView style={styles.main}>
        {data.map((item) => (
          <User
            key={item.id}
            id={item.id}
            name={item.name}
            message={item.message}
            date={item.date}
            unreadMessages={item.unreadMessages}
            url={item.url}
          />
        ))}
      </ScrollView>
      <View style={styles.float}>
        <Pressable onPress={() => console.log('clicked on add contact')}>
          <UserAddIcon width={50} height={50} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 12,
    borderWidth: 1,
  },
  float: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'darkblue',
  },
});

export default Main;
