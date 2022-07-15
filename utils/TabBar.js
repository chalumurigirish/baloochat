import { View, TouchableOpacity } from 'react-native';
import HomeIcon from '../assets/icons/HomeIcon';
import FilterIcon from '../assets/icons/Filter';
import SearchIcon from '../assets/icons/Search';

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        // flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#1E1E1E',
        paddingVertical: 4,
      }}
    >
      {state.routes.map((route, index) => {
        // console.log('route: ', route)
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ width: 60, alignItems: 'center' }}
          >
            {label === 'Home' && <HomeIcon height={28} width={28} />}
            {label === 'Filter' && <FilterIcon height={28} width={28} />}
            {label === 'Search' && <SearchIcon height={28} width={28} />}
            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text> */}
            {isFocused && (
              <View
                style={{ width: 30, height: 2, backgroundColor: 'yellow' }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
