import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import OrphanageMap from './page/OrphanageMap'
import OrphanageDetails from './page/OrphanageDetails'

import SelectMapPosition from './page/CreateOrphanage/SelectMapPosition'
import OrphanageData from './page/CreateOrphanage/OrphanageData'

export default function Routes() {
    return(
        <NavigationContainer>
            <Navigator screenOptions = {{headerShown: false}}>
                
                <Screen name = "OrphanageMap" component = {OrphanageMap} />

                <Screen name = "OrphanageDetails" component = {OrphanageDetails} />

                <Screen name = "SelectMapPosition" component = {SelectMapPosition} />

                <Screen name = "OrphanageData" component = {OrphanageData} />

            </Navigator>
        </NavigationContainer>
    )
}