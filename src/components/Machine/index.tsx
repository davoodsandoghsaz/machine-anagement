import React from 'react';
import { Text, StyleSheet, Dimensions, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, Button } from '@rneui/themed';
import { AppContext } from '../../context/AppContext'

const Machine = props => {
    const { name, index } = props;
    const { categories, machines, setMachines } = React.useContext(AppContext);

    return (
        <ScrollView style={styles.container}>
            <View style={{marginBottom: 20}}>
                <View style={styles.categoriesContainer}>
                    {
                        machines.map((item, index) => (
                            <View style={styles.card} key={index}>
                                <Card>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Divider style={{marginBottom: 22}}/>
                                </Card>
                            </View>
                        ))
                    }
                </View>
            <Button onPress={() => setMachines(name, index)}>Add new {name}</Button>
            </View>
        </ScrollView>
    )
}

export default Machine

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