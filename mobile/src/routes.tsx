import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import OrphanageMap from './page/OrphanageMap'
import OrphanageDetails from './page/OrphanageDetails'

export default function Routes() {
    return(
        <NavigationContainer>
            <Navigator screenOptions = {{headerShown: false}}>
                
                <Screen name = "OrphanageMap" component = {OrphanageMap} />

                <Screen name = "OrphanageDetails" component = {OrphanageDetails} />

            </Navigator>
        </NavigationContainer>
    )
}