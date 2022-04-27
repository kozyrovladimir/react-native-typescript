import React from 'react';
import {View, Text} from "react-native";

const NoResults = () => {
    return (
        <View style={{height: 200, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 18}}>No results!</Text>
        </View>
    );
};

export default NoResults;
