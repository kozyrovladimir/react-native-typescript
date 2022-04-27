import * as React from 'react';
import { Card, Button, Text, TouchableRipple } from 'react-native-paper';
import { VideoType } from '../store/video-list-reducer';
import {useNavigation} from "@react-navigation/native";
import {defineElementColor, definePhaseColor} from "../utils/helper_functions";
import {View, Image} from "react-native";

type VideoListItemType = {
    video: VideoType
}

//source={require('../assets/video.png')

const MyComponent = (props: VideoListItemType) => {
    const path: string = `${props.video.photoPath}`;
    const navigation = useNavigation();
    const phaseColor = definePhaseColor(props.video.phase);
    const elementColor= defineElementColor(props.video.element);

    return(
    // <Card style={{padding: 5, borderWidth: 1}}>
    //     <TouchableRipple
    //         onPress={() => {
    //             console.log('Pressed');
    //             // @ts-ignore
    //             navigation.navigate('Details');
    //         }}
    //         rippleColor="rgba(0, 0, 0, .32)"
    //     >
    //         {/*fix types*/}
    //         <Card.Cover style={{aspectRatio: 1/1}} source={props.video.photoPath} />
    //     </TouchableRipple>
    //     <Card.Actions>
    //         <View style={{flex: 1}}>
    //             <View>
    //                 <Card.Content>
    //                     <Text>{props.video.title}</Text>
    //                 </Card.Content>
    //             </View>
    //             <View style={{flexDirection: 'row'}}>
    //                 <Button color={phaseColor}>{props.video.phase}</Button>
    //                 <Button color={elementColor}>{props.video.element}</Button>
    //             </View>
    //         </View>
    //     </Card.Actions>
    //     <Card.Content>
    //         <Text>{props.video.description}</Text>
    //     </Card.Content>
    // </Card>
        <Card style={{padding: 5, borderWidth: 1, marginBottom: 10}}>
            <TouchableRipple
                    onPress={() => {
                        console.log('Pressed');
                        // @ts-ignore
                        navigation.navigate('Details');
                    }}
                    rippleColor="rgba(0, 0, 0, .32)"
                    >
                <Image
                    style={{maxWidth: '100%'}}
                    source={props.video.photoPath}
                />
            </TouchableRipple>
            <View style={{paddingTop: 20}}>
                <Text style={{fontSize: 20}}>
                    {props.video.title}
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Button color={phaseColor}>{props.video.phase}</Button>
                    <Button color={elementColor}>{props.video.element}</Button>
                </View>
                <Text>{props.video.description}</Text>
            </View>
        </Card>
)};

export default MyComponent;
