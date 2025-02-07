import * as Clipboard from "expo-clipboard";

export const copyHandler = (decryptedText: string) => {
	// Clipboard logic goes here
	Clipboard.setStringAsync(decryptedText);
};
