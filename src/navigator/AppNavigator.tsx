import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Screens } from "../enums";
import { AllExpensesScreen, ManageExpenseScreen, RecentExpenseScreen } from "../screens";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => (
	<BottomTabs.Navigator>
		<BottomTabs.Screen name={Screens.RecentExpenses} component={RecentExpenseScreen} />
		<BottomTabs.Screen name={Screens.AllExpenses} component={AllExpensesScreen} />
	</BottomTabs.Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name={Screens.ExpensesOverview} component={ExpensesOverview} />
			<Stack.Screen name={Screens.ManageExpenses} component={ManageExpenseScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);