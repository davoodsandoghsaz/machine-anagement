import React from 'react';
import { Text, StyleSheet, Dimensions, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, Button } from '@rneui/themed';
import Input from '../UI/Input';
import Select from '../UI/Select';
import { AppContext } from '../../context/AppContext'
import removeIcon from "../../assets/images/remove.png"

const { width, height } = Dimensions.get('window');
const ManageCategories = () => {
    const { categories, setCategories } = React.useContext(AppContext);

    return (
        <ScrollView style={styles.container}>
            <View style={{marginBottom: 20}}>
                <View style={styles.categoriesContainer}>
                {
                    categories.map((item, index) => (
                        <View style={styles.card} key={index}>
                            <Card>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Divider style={{marginBottom: 22}}/>
                                <Input label={"Category name"}  value={item.name} onChangeText={value => setCategories('changeName', index, 0, value)}/>
                                {
                                    item.fields.map((field, fieldIndex) => (
                                        <View style={styles.fields} key={fieldIndex}>
                                            <View style={styles.fieldsLeft}>
                                                <Input label={"Field"} value={field.value} onChangeText={value => setCategories('changeField', index, fieldIndex, value)}/>
                                                <Select text='' options={['Text', 'Number', 'Date', 'Checkbox']} defaultValue={field.type} onSelect={value => setCategories('changeFieldType', index, fieldIndex,value)} />
                                            </View>
                                            <View>
                                                <TouchableOpacity style={styles.remove} onPress={() => setCategories('removeField', index, fieldIndex)}>
                                                    <Image source={removeIcon} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    ))
                                }
                                <View style={styles.buttonContainer}>
                                    <Button style={styles.categoryButton} onPress={() => setCategories('addField', index)}>Add new field</Button>
                                    <Button style={styles.categoryButton} onPress={() => setCategories('removeCategory', index)}>Remove</Button>
                                </View>
                                <View style={styles.titleField}>
                                    <Select text='' options={item.fields.filter(item => !!item).map(field => field.value)} defaultValue={item.titleField} onSelect={value => setCategories('changeTitleField', index, 0,value)} />
                                </View>
                            </Card>
                        </View>
                    ))
                }
                </View>
                <Button onPress={() => setCategories('addCategory')}>Add new category</Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        fontSize: 22,
        color: '#000000',
        textAlign: 'center',
    },
    categoriesContainer: {
        paddingBottom: 20
    },
    card: {
        width: 400,
        maxWidth: 400
    },
    fields: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    fieldsLeft: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        width: '80%',
        borderColor: "#eee",
        borderWidth: 1,
        padding: 5
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-around'
    },
    categoryButton: {
        backgroundColor: "#fff",
        color: "black",
        width: '45%'
    },
    remove: {
        backgroundColor: '#FFF',
        padding: 0
    },
    titleField: {
        display: 'flex'
    }
})

export default ManageCategories