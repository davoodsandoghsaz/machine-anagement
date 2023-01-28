import React from "react"

import { View, Text, TextInput, StyleSheet } from "react-native"

const Input = ({ label, onChangeText, value, placeholder='' }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.input}>
				<TextInput
					style={styles.textInput}
					value={value}
					onChangeText={onChangeText}
					placeholder={placeholder}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	label: {
		fontSize: 16,
		color: "#430951",
		backgroundColor: '#F7F0F9',
		display: 'flex',
		position: 'absolute',
		top: -12,
		left: 10,
		zIndex: 2,
		borderColor: '#9e9e9e',
		borderWidth: 1,
		paddingHorizontal: 5,
		paddingVertical: 0,
		borderRadius: 5
	},
	container: {
		position: 'relative',
		fontFamily: "PoppinsMedium",
	},
	textInput: {
		color: "#430951",
	},
	input: {
		backgroundColor: "#F7F0F9",
		height: 50,
		borderRadius: 5,
		paddingLeft: 20,
		justifyContent: "center",
		fontSize: 16,
		minWidth: 130,
		borderColor: '#9e9e9e',
		borderWidth: 1
	},
})

export default Input
