import { Text, View } from "react-native";
import { DecryptionForm } from "../components/decrytion-form";

export default function Decryption() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Decryption form</Text>
			<DecryptionForm />
		</View>
	);
}
