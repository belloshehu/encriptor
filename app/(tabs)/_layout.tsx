import { FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Logo from "../components/logo";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "green",
				headerTitleStyle: {
					color: "green",
					fontFamily: "cursive",
					fontWeight: "bold",
					fontSize: 25,
				},
				headerTitle: (props) => <Logo color="green" />,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Encryption",
					tabBarIcon: ({ color, focused, size }) => (
						<FontAwesome6
							name="lock"
							size={size}
							color={focused ? "green" : color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="decryption"
				options={{
					title: "Decryption",
					tabBarIcon: ({ color, focused, size }) => (
						<FontAwesome6
							name="unlock"
							size={size}
							color={focused ? "green" : color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
