import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { EncriptionForm } from "../components/encription-form";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Encryption form</Text>
			<EncriptionForm />
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		fontWeight: "bold",
		color: "green",
		fontSize: 20,
	},
});
