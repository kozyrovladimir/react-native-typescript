import * as React from 'react';
import { Card, Button, Text, TouchableRipple } from 'react-native-paper';

const MyComponent = () => (
    <Card style={{width: '100%', padding: 5, borderWidth: 1}}>
        <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)"
        >
            <Card.Cover style={{height: 414, aspectRatio: 1/1}} source={require('../assets/video.png')} />
        </TouchableRipple>
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
        <Card.Content>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta quidem sit.</Text>
        </Card.Content>
    </Card>
);

export default MyComponent;
