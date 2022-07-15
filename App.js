import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Header, Main } from './components';
import MyTabBar from './utils/TabBar';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Filter from './screens/Filter';
import Search from './screens/Search';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <StatusBar style='auto' />
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Header /> */}
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
          {/* <Tab.Navigator> */}
          <Tab.Screen
            name='Home'
            component={Main}
            options={{
              header: () => <Header />,
            }}
          />
          <Tab.Screen name='Filter' component={Filter} />
          <Tab.Screen name='Search' component={Search} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    borderWidth: 1,
  },
});
