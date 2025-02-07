import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
} from "react-native";
import CopyText from "./copy-text";
import { useState } from "react";
import { decrypt } from "../utils/algorithms";
import * as Clipboard from "expo-clipboard";
import { copyHandler } from "../utils/clipboard";
import CustomButton from "./custom-button";

export const DecryptionForm = () => {
	const [decryptedText, setDecyptedText] = useState("");
	const [secretKey, setSecretKey] = useState("");
	const [cipherText, setCipherText] = useState("");

	const handleDecrypt = () => {
		// Decrypt logic goes here
		const encrypted = decrypt(cipherText, secretKey);
		setDecyptedText(encrypted);
	};

	return (
		<View style={styles.wrapper}>
			{/* Form fields go here */}
			<TextInput
				placeholder="Secret key"
				style={styles.textInput}
				onChangeText={setSecretKey}
			/>
			<TextInput
				placeholder="Cipher text here"
				style={styles.multilineInput}
				onChangeText={setCipherText}
			/>
			<CustomButton
				enabled={secretKey !== "" && cipherText !== ""}
				title="Decrypt"
				onPress={handleDecrypt}
			/>

			{decryptedText && (
				<CopyText
					text={decryptedText}
					copyHandler={() => {
						copyHandler(decryptedText);
					}}
					title="Decrypted text"
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		gap: 20,
		width: "100%",
		padding: 20,
	},
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
	textInput: {
		width: "100%",
		borderWidth: 1,
		padding: 15,
		borderRadius: 10,
		borderColor: "#ccc",
	},
	multilineInput: {
		width: "100%",
		minHeight: 120,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
		borderColor: "#ccc",
	},
});
