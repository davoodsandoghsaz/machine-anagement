import * as React from 'react';
import * as Font from "expo-font"
import {
	Poppins_100Thin,
	Poppins_100Thin_Italic,
	Poppins_200ExtraLight,
	Poppins_200ExtraLight_Italic,
	Poppins_300Light,
	Poppins_300Light_Italic,
	Poppins_400Regular,
	Poppins_400Regular_Italic,
	Poppins_500Medium,
	Poppins_500Medium_Italic,
	Poppins_600SemiBold,
	Poppins_600SemiBold_Italic,
	Poppins_700Bold,
	Poppins_700Bold_Italic,
	Poppins_800ExtraBold,
	Poppins_800ExtraBold_Italic,
	Poppins_900Black,
	Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import AppContextProvider from './src/context/AppContext';
import AppNavigation from './src/components/Navigation';

export default function App() {
	React.useEffect(() => {
		async function prepare() {
			try {
				// Pre-load fonts, make any API calls you need to do here
				await Font.loadAsync({
					Poppins_100Thin,
					Poppins_100Thin_Italic,
					Poppins_200ExtraLight,
					Poppins_200ExtraLight_Italic,
					Poppins_300Light,
					Poppins_300Light_Italic,
					PoppinsRegular: Poppins_400Regular,
					Poppins_400Regular_Italic,
					PoppinsMedium: Poppins_500Medium,
					Poppins_500Medium_Italic,
					PoppinsSemiBold: Poppins_600SemiBold,
					Poppins_600SemiBold_Italic,
					PoppinsBold: Poppins_700Bold,
					Poppins_700Bold_Italic,
					Poppins_800ExtraBold,
					Poppins_800ExtraBold_Italic,
					Poppins_900Black,
					Poppins_900Black_Italic,
				})
				// Artificially delay for two seconds to simulate a slow loading
				// experience. Please remove this if you copy and paste the code!
				await new Promise((resolve) => setTimeout(resolve, 2000))
			} catch (e) {
				console.warn("eee", e)
			}
		}
		prepare()
	}, [])

	return (
		<AppContextProvider>
			<AppNavigation />
		</AppContextProvider>
	);
}