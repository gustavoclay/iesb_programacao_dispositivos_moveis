import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Avatar, Card, IconButton } from 'react-native-paper'

import Api from '../../services/Api'

export default function Home(props) {

    const navigation = props.navigation
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        Api.get('/users')
            .then(response => {

                setUsuarios(response.data.users)

            })
            .catch(error => {
                console.error("DEU ERRO AO BUSCAR USUARIOS", error)
            })

    }, [])


    return (
        <View>

            <FlatList
                data={usuarios}
                renderItem={({ item }) => {
                    return (
                        <Card onPress={() => {
                            navigation.navigate('Usuário', { id: item.id })
                        }}>
                            <Card.Title
                                title={item.username}
                                subtitle={item.email}
                                left={() => <Avatar.Image size={48} source={{ uri: item.image }} />}
                                right={() => <IconButton icon="chevron-right" />}
                            />
                        </Card>
                    )
                }}
            />

        </View >
    )
}

const styles = StyleSheet.create({})