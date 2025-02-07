export function encrypt(text: string, secretKey: string) {
	let encrypted = text
		.split("")
		.map((char, index) => {
			let keyChar = secretKey[index % secretKey.length]; // Cycle through key
			let encryptedChar = char.charCodeAt(0) ^ keyChar.charCodeAt(0); // XOR encryption
			return String.fromCharCode(encryptedChar);
		})
		.join("");

	return btoa(encrypted); // Convert to Base64 for safe storage/transmission
}

export function decrypt(encryptedText: string, secretKey: string) {
	let decoded = atob(encryptedText); // Decode Base64

	let decrypted = decoded
		.split("")
		.map((char, index) => {
			let keyChar = secretKey[index % secretKey.length]; // Cycle through key
			let decryptedChar = char.charCodeAt(0) ^ keyChar.charCodeAt(0); // Reverse XOR
			return String.fromCharCode(decryptedChar);
		})
		.join("");

	return decrypted;
}

export const generateSecretKey = (length: number) => {
	for (var i = 0, secretKey = ""; i < length; i++) {
		secretKey += String.fromCharCode(Math.floor(Math.random() * 100)).trim();
	}
	return secretKey;
};
// Example Usage
const secretKey = "MySecretKey123"; // Your custom key
const originalText = "Hello, Secure World!";
const encryptedText = encrypt(originalText, secretKey);
const decryptedText = decrypt(encryptedText, secretKey);

console.log("Original:", originalText);
console.log("Encrypted:", encryptedText);
console.log("Decrypted:", decryptedText);
