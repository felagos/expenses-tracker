import { FlatList, Text } from "react-native";

import { Expense } from "../../models";

interface Props {
	expenses: Expense[];
}

export const ExpensesList = ({ expenses }: Props) => {

	const renderItems = ({ item }: { item: Expense }) => (
		<Text>{item.description}</Text>
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