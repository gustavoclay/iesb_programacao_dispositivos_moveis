import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper'

export default function ProdutoItem({ produto, navigation }) {

    function navegarParaProduto() {
        navigation.navigate('Produto', produto)
    }

    return (
        <View>
            <Card style={styles.card}>
                <Card.Title title={produto.title} titleVariant='titleLarge' titleStyle={{ fontWeight: 'bold' }}></Card.Title>
                <Card.Cover source={{ uri: produto.thumbnail }} />
                <Card.Content style={styles.cardContentArea}>
                    <Text variant="titleLarge">$ {produto.price}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar.Icon size={28} icon="star" />
                        <Text variant="titleLarge"> {produto.rating}</Text>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <Button icon="information-outline" onPress={navegarParaProduto}>Informações</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        padding: 10,
        marginTop: 10
    }, cardContentArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    }

})