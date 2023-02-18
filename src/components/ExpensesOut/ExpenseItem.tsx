import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants";
import { Expense } from "../../models";
import { getFormattedDate } from "../../utils";

interface Props {
	expense: Expense;
}

export const ExpenseItem = ({ expense }: Props) => (
	<Pressable>
		<View style={styles.container}>
			<View>
				<Text style={[styles.textBase, styles.description]}>{expense.description}</Text>
				<Text style={styles.textBase}>{getFormattedDate(expense.date)}</Text>
			</View>
			<View style={styles.amountContainer}>
				<Text style={styles.amount}>{expense.amount}</Text>
			</View>
		</View>
	</Pressable>
);

const styles = StyleSheet.create({
	container: {
		padding: 12,
		marginVertical: 8,
		backgroundColor: Colors.primary500,
		flexDirection: "row",
		justifyContent: "space-between",
		borderRadius: 6,
		shadowColor: Colors.gray500,
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowOpacity: 0.4,
		shadowRadius: 4,
		elevation: 3,
	},
	textBase: {
		color: Colors.primary50
	},
	description: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 4,
	},
	amountContainer: {
		paddingHorizontal: 12,
		paddingVertical: 4,
		backgroundColor: Colors.white,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	amount: {
		color: Colors.primary500,
		fontWeight: "bold",
	}
});