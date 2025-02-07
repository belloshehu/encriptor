import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import React from "react";
import CustomButton from "./custom-button";

export default function CopyText({
	text,
	copyHandler,
	title,
}: {
	text: string;
	copyHandler: () => void;
	title: string;
}) {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		let timer = null;
		if (copied) {
			timer = setTimeout(() => {
				copyHandler();
				setCopied(false);
			}, 2000);
		}
		return () => {
			clearTimeout(timer!);
		};
	}, [copied]);

	return (
		<View style={{ gap: 5 }}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.wrapper}>
				<Text style={{ padding: 10, paddingTop: 30 }}>{text} </Text>
				<CustomButton
					onPress={copyHandler}
					enabled={text !== ""}
					title="Copy"
					style={{
						backgroundColor: "rgba(0, 150,0,0.6)",
						padding: 10,
						marginTop: 10,
						elevation: 0,
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		width: "100%",
		borderRadius: 10,
		elevation: 5,
		padding: 5,
		backgroundColor: "white",
		position: "relative",
		minHeight: 100,
		color: "black",
	},
	copyIcon: {
		position: "absolute",
		right: 2,
		top: 2,
	},
	title: {
		textAlign: "right",
		fontSize: 12,
		alignItems: "center",
		flexDirection: "row",
		gap: 5,
		color: "green",
	},
});
