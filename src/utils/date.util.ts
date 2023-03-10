export const getFormattedDate = (date: Date): string => {
	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}-${month}-${year}`;
};