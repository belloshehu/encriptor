import {
	StyleSheet,
	StyleSheetProperties,
	Text,
	TouchableOpacity,
} from "react-native";

export default function CustomButton({
	title,
	onPress,
	enabled,
	style = {},
}: {
	title: string;
	onPress: () => void;
	enabled: boolean;
	style?: {};
}) {
	return (
		<TouchableOpacity
			style={{
				...styles.button,
				backgroundColor: enabled ? "green" : "gray",
				...style,
			}}
			onPress={onPress}
			disabled={!enabled}
		>
			<Text style={{ color: "white" }}>{title}</Text>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	button: {
		width: "100%",
		borderRadius: 10,
		backgroundColor: "green",
		padding: 15,
		color: "white",
		flexDirection: "row",
		justifyContent: "center",
		elevation: 2,
	},
});
