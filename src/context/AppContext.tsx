import React, { useEffect, createContext, useState } from 'react';
import {  AsyncStorage } from 'react-native';

export const AppContext = createContext<any>({});

const AppContextProvider = ({children}) => {
    const [categoriesInitialized, setCategoriesInitialized] = useState(false);
    const [machinesInitialized, setMachinesInitialized] = useState(false);
    const [machines, setAppMachines] = useState([]);
    const [categories, setAppCategories] = useState([]);

    useEffect(() => {
        AsyncStorage
          .getItem('categories')
          .then(data => {
            if (data) {
                let parsedCategories = JSON.parse(data);  
                setAppCategories(parsedCategories || []);
            }
            setCategoriesInitialized(true)
          })
        
        AsyncStorage
          .getItem('machines')
          .then(data => {
            if (data) {
                let parsedMachines = JSON.parse(data);  
                setAppMachines(parsedMachines || []);
            }
            setMachinesInitialized(true)
          })
      }, [])

    const setCategories = (type: string, index: number = 0, fieldIndex: number = 0, value: string = '') => {
        // addCategory, changeName, changeTitleField, changeField, changeFieldType, removeCategory, addField, removeField

        const newCategories = [ ...categories ];
        switch(type) {
            case 'addCategory':
                newCategories.push({
                    name: 'New category',
                    titleField: 'name',
                    fields: [
                        {
                            value: '',
                            type: 'Text'
                        }
                    ]
                })
                break;
            case 'changeName': 
                newCategories[index].name = value;
                break;
            case 'changeTitleField':
                newCategories[index].titleField = value;
                break;
            case 'changeField': 
                newCategories[index].fields[fieldIndex].value = value;
                break;
            case 'changeFieldType':
                newCategories[index].fields[fieldIndex].type = value;
                break;
            case 'removeCategory':
                newCategories.splice(index, 1);
                break;
            case 'addField':
                newCategories[index].fields.push({
                    value: '',
                    type: 'Text'
                })
                break;
            case 'removeField':
                newCategories[index].fields.splice(fieldIndex, 1);
                break;
            default: 
                break;
        }
        console.log('newCategories', newCategories)
        setAppCategories(newCategories)
        AsyncStorage.setItem('categories', JSON.stringify(newCategories))
    }

    const setMachines = (type: string, categoryIndex) => {
        const machineCategory = categories[categoryIndex]
        // addMachine
        const newMachines = [ ...machines ];
        switch(type) {
            case 'addMachine':
                newMachines.push(
                    machineCategory.fields.reduce((acc, item) => {
                        return {
                            ...acc,
                            [item.value]: ''
                        }
                    } , {})
                )
                break;
            case 'changeField': 
            // newMachines[index].fields[fieldIndex].value = value;
                break;
        }
    }

    return (
        <AppContext.Provider value={{
            categories,
            categoriesInitialized,
            setCategories,
            machines,
            setMachines
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider