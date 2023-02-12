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
	name: any;
	color: string;
	size: number;
}

const getIcon = ({ color, name, size }: Icon) => <Ionicons name={name} size={size} color={color} />;

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
			options={{
				title: "Recent Expenses",
				tabBarLabel: "Recent",
				tabBarIcon: ({ color, size }) => getIcon({ color, size, name: "hourglass" })
			}}
		/>
		<BottomTabs.Screen 
			name={Screens.AllExpenses} 
			component={AllExpensesScreen} 
			options={{
				title: "All Expenses",
				tabBarLabel: "All Recent",
				tabBarIcon: ({ color, size }) => getIcon({ color, size, name: "calendar" })
			}}
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