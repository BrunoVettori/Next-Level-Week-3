import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import OrphanageMap from './page/OrphanageMap'
import OrphanageDetails from './page/OrphanageDetails'

import SelectMapPosition from './page/CreateOrphanage/SelectMapPosition'
import OrphanageData from './page/CreateOrphanage/OrphanageData'
import Header from './components/Header'

export default function Routes() {
    return(
        <NavigationContainer>
            <Navigator screenOptions = {{headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' }}}>
                
                <Screen name = "OrphanagesMap" component = {OrphanageMap} />

                <Screen name = "OrphanageDetails" 
                component = {OrphanageDetails}
                options = {{headerShown: true, header: () => <Header showCancel = {false} title = "Orfanato" />}} />

                <Screen name = "SelectMapPosition" 
                component = {SelectMapPosition} 
                options = {{headerShown: true, header: () => <Header title = "Selecione no Mapa" />}} />

                <Screen name = "OrphanageData" 
                component = {OrphanageData} 
                options = {{headerShown: true, header: () => <Header title = "Informe os dados" />}} />

            </Navigator>
        </NavigationContainer>
    )
}