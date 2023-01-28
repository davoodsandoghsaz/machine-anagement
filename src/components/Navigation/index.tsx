import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Dashboard'
import ManageCategories from '../ManageCategories'
import Machine from '../Machine';
import { AppContext } from '../../context/AppContext'

const Drawer = createDrawerNavigator();
const AppNavigation = () => {
    const { categories } = React.useContext(AppContext);

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                {
                    categories?.filter(item => !!item?.name?.trim()).map((item, index) => (
                        <Drawer.Screen name={item.name} key={index}>
                            {props => <Machine {...props} name={item.name} index={index} />}
                        </Drawer.Screen>
                    ))
                }
                <Drawer.Screen name="Manage Categoriesss" component={ManageCategories} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;