import * as React from 'react';
import { Card, Button, Text, TouchableRipple } from 'react-native-paper';
import { VideoType } from '../store/video-list-reducer';

type VideoListItemType = {
    video: VideoType
}

//source={require('../assets/video.png')

const MyComponent = (props: VideoListItemType) => {
    const path: string = `${props.video.photoPath}`;

    return(
    <Card style={{width: '100%', padding: 5, borderWidth: 1}}>
        <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)"
        >
            {/*fix types*/}
            <Card.Cover style={{height: 414, aspectRatio: 1/1}} source={props.video.photoPath} />
        </TouchableRipple>
        <Card.Actions>
            <Card.Content>
                <Text>{props.video.title}</Text>
            </Card.Content>
            <Button>{props.video.phase}</Button>
            <Button>{props.video.element}</Button>
        </Card.Actions>
        <Card.Content>
            <Text>{props.video.description}</Text>
        </Card.Content>
    </Card>
)};

export default MyComponent;
