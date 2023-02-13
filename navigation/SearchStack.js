import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../Screens/Search';
import Home from '../Screens/Home';
import SelectTime from '../Screens/SelectTime';
import Appoint from '../Screens/Appoint';

const SearchStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{headerShown:false}}
        >
            <Stack.Screen name="Main" component={Search} />
            <Stack.Screen name="Results" component={Home} />
            <Stack.Screen name="SelectTime" component={SelectTime} />
            <Stack.Screen name="Appoint" component={Appoint} />
        </Stack.Navigator>
    )
}

export default SearchStack;