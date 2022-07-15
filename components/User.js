import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

const User = ({ id, name, message, date, unreadMessages, url }) => {
  console.log(name, id);
  return (
    <Pressable
      style={{ flex: 1, marginVertical: 4 }}
      onPress={() =>
        console.log({
          User: name,
          message: message,
          unreadMessages: unreadMessages,
          date: date,
        })
      }
    >
      <View style={styles.container}>
        <View style={{ marginRight: 12 }}>
          <Image
            style={styles.image}
            source={{
              uri: url,
            }}
          />
        </View>

        <View style={styles.chatContent}>
          <View
            style={{
              flexGrow: 1,
              justifyContent: 'space-between',
              // paddingVertical: 2,
            }}
          >
            {/* columns with name and chat */}
            <View style={{ marginVertical: 4 }}>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>{name}</Text>
            </View>
            <View style={{ marginVertical: 4 }}>
              <Text
                style={{
                  color: 'hsl(0, 0%, 53%)',
                  fontSize: 14,
                }}
              >
                {message}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginRight: 5,
            }}
          >
            {/* columns with time and unread messages */}
            <View style={{ marginVertical: 4 }}>
              <Text style={{ fontSize: 10 }}>
                {new Date(date).toLocaleTimeString([], { timeStyle: 'short' })}
              </Text>
            </View>
            {unreadMessages ? (
              <View
                style={{
                  backgroundColor: '#000000',
                  borderRadius: 9,
                  height: 18,
                  width: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 4,
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                  }}
                >
                  {unreadMessages}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  backgroundColor: '#E7E049',
                  borderRadius: 3,
                  height: 6,
                  width: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 4,
                }}
              ></View>
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 4,

    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  chatContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 16,
  },
});

export default User;
