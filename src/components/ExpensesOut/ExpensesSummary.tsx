import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants";
import { Expense } from "../../models";

interface Props {
	periodName: string;
	expenses: Expense[];
}

export const ExpensesSummary = ({ periodName, expenses }: Props) => {

	const sum = useMemo(() => {
		return expenses.reduce((acc, cur) => acc + cur.amount, 0);
	}, [expenses]);

	return (
		<View style={styles.container}>
			<Text style={styles.period}>{periodName}</Text>
			<Text style={styles.sum}>{`$${sum.toFixed(2)}`}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 8,
		backgroundColor: Colors.primary50,
		borderRadius: 6,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	period: {
		fontSize: 12,
		color: Colors.primary400,
	},
	sum: {
		fontSize: 16,
		fontWeight: "bold",
		color: Colors.primary500,
	}
});