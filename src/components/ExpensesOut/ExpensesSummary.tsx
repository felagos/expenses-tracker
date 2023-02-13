import { useMemo } from "react";
import { Text, View } from "react-native";

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
		<View>
			<Text>{periodName}</Text>
			<Text>{`$${sum.toFixed(2)}`}</Text>
		</View>
	);
};