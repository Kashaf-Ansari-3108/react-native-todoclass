import React from 'react'

import { View } from 'react-native'
import AppNavigation from './config/navigation'
import Login from './screen/login'
import Todo from './screen/todo'

export default function App(){
    return <>
    {/* <Todo /> */}
    {/* <Login /> */}
    <AppNavigation />
    </>
}