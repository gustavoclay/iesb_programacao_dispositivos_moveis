import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Avatar, Button } from 'react-native-paper';


export default function App() {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="Titulo" left={LeftContent} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button >Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


