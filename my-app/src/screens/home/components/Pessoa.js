import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

export default function Pessoa({ pessoa }) {


    const avatar = () => {
        return <Avatar.Image size={48} source={{ uri: pessoa.image }} />
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title={pessoa.username} left={avatar} />
                <Card.Content>
                    <View style={styles.label}>
                        <Text variant='bodyLarge' style={{ fontWeight: 'bold' }}>Name:</Text>
                        <Text variant='bodyLarge' >{pessoa.firstName} {pessoa.lastName}</Text>
                    </View>
                    <View style={styles.label}>
                        <Text variant='bodyLarge' style={{ fontWeight: 'bold' }}>Age:</Text>
                        <Text variant='bodyLarge' >{pessoa.age}</Text>
                    </View>
                    <View style={styles.label}>
                        <Text variant='bodyLarge' style={{ fontWeight: 'bold' }}>E-mail:</Text>
                        <Text variant='bodyLarge' >{pessoa.email}</Text>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    card: {

    },
    label: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})