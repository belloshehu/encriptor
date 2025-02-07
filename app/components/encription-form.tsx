import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
} from "react-native";
import CopyText from "./copy-text";
import { copyHandler } from "../utils/clipboard";
import { useState } from "react";
import { encrypt, generateSecretKey } from "../utils/algorithms";
import CustomButton from "./custom-button";
import { Feather } from "@expo/vector-icons";

export const EncriptionForm = () => {
	const [encryptedText, setEncyptedText] = useState("");
	const [secretKey, setSecretKey] = useState("");
	const [plaiText, setPlainText] = useState("");

	const handleEncrypt = () => {
		// Encrypt logic goes here
		const encrypted = encrypt(plaiText, secretKey);
		setEncyptedText(encrypted);
	};
	const generateKey = () => {
		setSecretKey(generateSecretKey(42));
	};

	return (
		<View style={styles.wrapper}>
			{/* Form fields go here */}
			<View>
				<TextInput
					placeholder="Secret key"
					style={styles.textInput}
					onChangeText={setSecretKey}
					value={secretKey}
				/>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<TouchableOpacity onPress={generateKey}>
						<Text style={{ color: "green" }}>Generate secret key</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => copyHandler(secretKey)}
						style={{ marginTop: 5 }}
					>
						<Feather name="copy" size={20} />
					</TouchableOpacity>
				</View>
			</View>
			<TextInput
				placeholder="Plain text"
				style={styles.multilineInput}
				onChangeText={setPlainText}
			/>
			<CustomButton
				onPress={handleEncrypt}
				enabled={secretKey !== "" && plaiText !== ""}
				title="Encrypt"
			/>

			{encryptedText && (
				<CopyText
					text={encryptedText}
					copyHandler={() => {
						copyHandler(encryptedText);
					}}
					title="Encrypted text"
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
