import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';

const Select = ({ text, options, onSelect, defaultValue = "" }) => {
    return (
        <SelectDropdown
            data={options}
            defaultValue={defaultValue}
            onSelect={(selectedItem) => {
                onSelect(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem) => {
                return selectedItem;
            }}
            rowTextForSelection={(item) => {
                return item;
            }}
            defaultButtonText={text}
            renderDropdownIcon={(isOpened) => {
                return (
                    <AntDesign
                        name={isOpened ? 'up' : 'down'}
                        size={18}
                        color='#430951'
                    />
                );
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
        />
    );
};

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
        // width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    dropdown1BtnTxtStyle: {
        color: '#cbc1cd',
        textAlign: 'left',
        // opacity: 0.3,
    },
    dropdown1DropdownStyle: { backgroundColor: '#fff' },
    dropdown1RowStyle: {
        backgroundColor: '#fff',
        borderBottomColor: '#C5C5C5',
        borderBottomEndRadius: 14,
        borderTopEndRadius: 14,
    },
    dropdown1RowTxtStyle: { color: '#878787', textAlign: 'left' },
});

export default Select;
