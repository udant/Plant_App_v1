import React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import PlantInfoScreen from "../screens/PlantInfo";
import OrderScreen from "../screens/Order";

export const AppTabNavigator = createBottomTabNavigator({
  BookDonate: {
    screen: PlantInfoScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/plants_icon.jpg")}
          style={{
            width: 20,
            height: 20
          }}
        />
      ),
      tabBarLabel: "Plants"
    }
  },
  BookRequest: {
    screen: OrderScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/request-book.png")}
          style={{
            width: 20,
            height: 20
          }}
        />
      ),
      tabBarLabel: "Order"
    }
  }
});
