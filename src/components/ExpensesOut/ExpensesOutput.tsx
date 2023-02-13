import { View } from "react-native";

import { Expense } from "../../models";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";

interface Props {
	expenses?: Expense[];
	expensesPeriod: string;
}

const DUMMY_DATA = [
	{
		id: "1",
		description: "Test",
		amount: 10.55,
		date: new Date("2021-12-10")
	},
	{
		id: "2",
		description: "Test 2",
		amount: 190.91,
		date: new Date("2021-12-11")
	},
	{
		id: "3",
		description: "Test 3",
		amount: 277.12,
		date: new Date("2021-12-21")
	},
	{
		id: "4",
		description: "Test 4",
		amount: 19.19,
		date: new Date("2022-01-01")
	},
	{
		id: "5",
		description: "Test 5",
		amount: 20,
		date: new Date("2022-02-15")
	}
];

export const ExpensesOutput = ({ expenses = DUMMY_DATA, expensesPeriod }: Props) => {
	return (
		<View>
			<ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
			<ExpensesList expenses={expenses} />
		</View>
	);

};
