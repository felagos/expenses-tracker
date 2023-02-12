import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "../constants";
import { Screens } from "../enums";
import { AllExpensesScreen, ManageExpenseScreen, RecentExpenseScreen } from "../screens";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

interface Icon {
	color: string;
	size: number;
}

interface BottomIcon extends Icon {
	name?: keyof typeof Ionicons.glyphMap;
}

const getIcon = ({ color, name, size }: BottomIcon) => <Ionicons name={name} size={size} color={color} />;

const getTabOptions = (screen: Screens) => {
	switch (screen) {
	case Screens.RecentExpenses:
		return {
			title: "Recent Expenses",
			tabBarLabel: "Recent",
			tabBarIcon: ({ color, size }: Icon) => getIcon({ color, size, name: "hourglass" })
		};
	case Screens.AllExpenses:
		return {
			title: "All Expenses",
			tabBarLabel: "All Recent",
			tabBarIcon: ({ color, size }: Icon) => getIcon({ color, size, name: "calendar" })
		};
	default:
		return {};
	}
};

const ExpensesOverview = () => (
	<BottomTabs.Navigator screenOptions={{
		headerStyle: { backgroundColor: Colors.primary500 },
		headerTintColor: Colors.white,
		tabBarStyle: { backgroundColor: Colors.primary500 },
		tabBarActiveTintColor: Colors.accent500,
	}}>
		<BottomTabs.Screen
			name={Screens.RecentExpenses}
			component={RecentExpenseScreen}
			options={getTabOptions(Screens.RecentExpenses)}
		/>
		<BottomTabs.Screen
			name={Screens.AllExpenses}
			component={AllExpensesScreen}
			options={getTabOptions(Screens.AllExpenses)}
		/>
	</BottomTabs.Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name={Screens.ExpensesOverview}
				component={ExpensesOverview}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name={Screens.ManageExpenses} component={ManageExpenseScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);