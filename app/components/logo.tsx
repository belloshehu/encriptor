import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Logo({ color = "green" }: { color: string }) {
	return (
		<View style={styles.logoWrapper}>
			<MaterialIcons name="security" size={30} color={color} />
			<Text style={styles.headerTitleStyle}>Encdecriptor</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	headerTitleStyle: {
		color: "green",
		fontFamily: "cursive",
		fontWeight: "bold",
		fontSize: 25,
	},
	logoWrapper: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
});
