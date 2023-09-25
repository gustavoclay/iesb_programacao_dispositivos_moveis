import React from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'


export default function Produto({ route }) {

    const produto = route.params

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title={produto.title} titleVariant='titleLarge' titleStyle={{ fontWeight: 'bold' }}></Card.Title>
                {/* <Card.Cover source={{ uri: produto.thumbnail }} /> */}
                <Card.Content style={styles.cardContentArea}>


                    <View style={styles.labelArea}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={produto.images}
                            renderItem={({ item }) => {
                                return (
                                    <Image
                                        style={styles.image}
                                        resizeMode='stretch'
                                        source={{ uri: item }}
                                    />
                                )
                            }
                            } />
                    </View>

                    <View style={styles.labelArea}>
                        <Text variant='titleLarge' style={styles.labelText}>Nome:</Text>
                        <Text variant='titleLarge'>{produto.title}</Text>
                    </View>

                    <View style={styles.labelArea}>
                        <Text variant='titleLarge' style={styles.labelText}>Marca:</Text>
                        <Text variant='titleLarge'>{produto.brand}</Text>
                    </View>

                    <View style={styles.labelArea}>
                        <Text variant='titleLarge' style={styles.labelText}>Preço:</Text>
                        <Text variant='titleLarge'>$ {produto.price}</Text>
                    </View>

                    <View style={styles.labelArea}>
                        <Text variant='titleLarge' style={styles.labelText}>Desconto:</Text>
                        <Text variant='titleLarge'>{produto.discountPercentage} %</Text>
                    </View>

                    <View style={styles.labelArea}>
                        <Text variant='titleLarge' style={styles.labelText}>Avaliações:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Avatar.Icon size={28} icon="star" />
                            <Text variant="titleLarge"> {produto.rating}</Text>
                        </View>
                    </View>

                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    card: {
        borderWidth: 1,
        padding: 10,
        width: '90%',
        justifyContent: 'center'
    },
    cardContentArea: {
        paddingTop: 10
    },
    labelArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    labelText: {
        fontWeight: '700'
    },
    image: {
        width: 250,
        height: 200,
        margin: 10,
        borderRadius: 10
    }
})