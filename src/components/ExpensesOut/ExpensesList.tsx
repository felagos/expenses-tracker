import { FlatList } from "react-native";

import { Expense } from "../../models";
import { ExpenseItem } from "./ExpenseItem";

interface Props {
	expenses: Expense[];
}

export const ExpensesList = ({ expenses }: Props) => {

	const renderItems = ({ item }: { item: Expense }) => (
		<ExpenseItem expense={item} />
	);

	const keyExtractor = (item: Expense) => item.id;

	return (
		<FlatList
			data={expenses}
			renderItem={renderItems}
			keyExtractor={keyExtractor}
		/>
	);

};