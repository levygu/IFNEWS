import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Image, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Details from './pages/Details';
import Search from './pages/Search';
import Community from './pages/Community';
import Salvos from './pages/Salvos';
import Menu from './pages/Menu';
import ButtonSearch from './components/ButtonSearch';
import NewsGenerals from './pages/NewsGenerals';
import AllNews from './pages/AllNews';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs (){
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarStyle: {
                backgroundColor: 'black',
                borderTopColor: 'transparent',
                paddingBottom: 5,
                paddingTop: 5, 
        },
            tabBarActiveTintColor: '#C41400',
            tabBarInactiveTintColor: '#fff',
            tabBarHideOnKeyboard: 'true',
        }}
        >
            <Tab.Screen name= "Início"
             component={Home}
             options= {{
                 tabBarLabel: 'Início',
                 tabBarLabelStyle: {fontFamily: 'Raleway_600SemiBold'},
                 tabBarIcon: ({size, color}) =>(
                     <Feather name='home' size= {size} color={color} />
                 ),
                 headerShown: false,
                 headerTitle :'',
                 }}
            />

            <Tab.Screen name= "Comunidade"
             component={Community}
             options= {{
                tabBarLabel: 'Comunidade',
                tabBarLabelStyle: {fontFamily: 'Raleway_600SemiBold'},
                tabBarIcon: ({size, color}) =>(
                    <Feather name='users' size= {size} color={color} />
                ),
                headerShown: false,
                headerTitle :'',
            }}
            />

            <Tab.Screen name= "Pesquisar"
             component={Search}
             options= {{
                tabBarLabel: '',
                tabBarIcon: ({size, focused}) =>(
                    <ButtonSearch size = {size} focused = {focused}/>
                ),
                headerShown: false,
                headerTitle :'',
            }}
            />
            <Tab.Screen name= "Salvos"
             component={Salvos}
             options= {{
                tabBarLabel: 'Salvos',
                tabBarLabelStyle: {fontFamily: 'Raleway_600SemiBold'},
                tabBarIcon: ({size, color}) =>(
                    <Feather name='bookmark' size= {size} color={color} />
                ),
                headerShown: false,
                headerTitle :'',
            }}
            />

            <Tab.Screen name= "Menu" 
            component={Menu} 
            options= {{
                tabBarLabel: 'Menu',
                 tabBarLabelStyle: {fontFamily: 'Raleway_600SemiBold'},
                tabBarIcon: ({size, color}) =>(
                    <Feather name='menu' size= {size} color={color} />
                ),
                headerShown: false,
                headerTitle :'',
            }}
            />

        </Tab.Navigator>
    )
}

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                 name='home'
                 component={Tabs}
                 options={{
                     title:'IFNEWS',
                     headerTitleStyle:{
                        fontFamily: 'Raleway_800ExtraBold',
                        color:'#FFF'    
                     },
                     headerLeft: () => (
                         <TouchableOpacity style={{marginLeft: 5}}>
                             <Image
                             source={require('../assets/images/365px-Instituto_Federal_Marca_2015.svg.png')}
                             fadeDuration ={0}
                             style={{ width: 32, height: 41, left:10, }}
                             />
                         </TouchableOpacity>
                     ),
                     headerRight: () => (
                        <TouchableOpacity style ={{marginRight: 15}}>
                            <Feather
                            name ='bell'
                            size={24}
                            color= 'white'
                            />
                        </TouchableOpacity>
                     ),
                     headerStyle : {
                         backgroundColor: 'black'
                     }
                     
                 }}
                 />
                <Stack.Screen
                 name='Detalhes' 
                 component={Details}
                 options= {{
                    title:'Editais',
                    headerTitleStyle:{
                       fontFamily: 'Raleway_800ExtraBold',
                       color:'#FFF'    
                    },
                     headerStyle : {
                        backgroundColor: 'black'
                    },
                    headerBackVisible: true,
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 5}}>
                            <Image
                            source={require('../assets/images/365px-Instituto_Federal_Marca_2015.svg.png')}
                            fadeDuration ={0}
                            style={{ width: 32, height: 41, right:10, }}
                            />
                        </TouchableOpacity>
                    ),
                    headerBackImage: () => (
                        <Feather
                        name = 'arrow-left'
                        size = {24}
                        color='white'
                        />
                    )
                 }}
                 />
                <Stack.Screen
                 name='Generals' 
                 component={NewsGenerals}
                 options= {{
                    title:'',
                    headerTitleStyle:{
                       fontFamily: 'Raleway_800ExtraBold',
                       color:'#FFF'    
                    },
                     headerStyle : {
                        backgroundColor: 'black'
                    },
                    headerBackVisible: true,
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 5}}>
                            <Image
                            source={require('../assets/images/365px-Instituto_Federal_Marca_2015.svg.png')}
                            fadeDuration ={0}
                            style={{ width: 32, height: 41, right:10, }}
                            />
                        </TouchableOpacity>
                    ),
                    headerBackImage: () => (
                        <Feather
                        name = 'arrow-left'
                        size = {24}
                        color='white'
                        />
                    )
                 }}
                 />
                 <Stack.Screen
                 name='AllNews' 
                 component={AllNews}
                 options= {{
                    title:'',
                    headerTitleStyle:{
                       fontFamily: 'Raleway_800ExtraBold',
                       color:'#FFF'    
                    },
                     headerStyle : {
                        backgroundColor: 'black'
                    },
                    headerBackVisible: true,
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 5}}>
                            <Image
                            source={require('../assets/images/365px-Instituto_Federal_Marca_2015.svg.png')}
                            fadeDuration ={0}
                            style={{ width: 32, height: 41, right:10, }}
                            />
                        </TouchableOpacity>
                    ),
                    headerBackImage: () => (
                        <Feather
                        name = 'arrow-left'
                        size = {24}
                        color='white'
                        />
                    )
                 }}
                 />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;