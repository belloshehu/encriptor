import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: "green" },
				headerTitleStyle: {
					color: "white",
					fontFamily: "cursive",
					fontWeight: "bold",
					fontSize: 25,
				},
			}}
		>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="+not-found" />
		</Stack>
	);
}
