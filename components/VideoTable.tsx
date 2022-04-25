import * as React from 'react';
import { DataTable } from 'react-native-paper';
import {VideoCardsType} from "./VideoCards";
import {ScrollView, Text} from "react-native";


const MyComponent = (props: VideoCardsType) => {

    return (
        <ScrollView horizontal={true} style={{ height: 880 }}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title style={{width: 200, overflow: 'hidden'}} >Name</DataTable.Title>
                    <DataTable.Title style={{width: 120, overflow: 'hidden'}} numeric>Phase</DataTable.Title>
                    <DataTable.Title style={{width: 120, overflow: 'hidden'}} numeric>Season</DataTable.Title>
                    <DataTable.Title style={{width: 120, overflow: 'hidden'}} numeric>Element</DataTable.Title>
                    <DataTable.Title style={{width: 120, overflow: 'hidden'}} numeric>Organ</DataTable.Title>
                </DataTable.Header>
                    {props.videoList.map(video => {
                        return (
                            <DataTable.Row key={video.id}>
                                <DataTable.Cell style={{width: 200}}>
                                    <Text style={{overflow: 'hidden'}}>
                                        {video.title}
                                    </Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{width: 120}} numeric>
                                    <Text style={{overflow: 'hidden'}}>
                                        {video.phase}
                                    </Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{width: 120}} numeric>
                                    <Text style={{overflow: 'hidden'}}>
                                        {video.season}
                                    </Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{width: 120}} numeric>
                                    <Text style={{overflow: 'hidden'}}>
                                        {video.element}
                                    </Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{width: 120}} numeric>
                                    <Text style={{overflow: 'hidden'}}>
                                        {video.organ}
                                    </Text>
                                </DataTable.Cell>
                            </DataTable.Row>
                        )
                    })}
                {/*    <DataTable.Row>*/}
                {/*        <DataTable.Cell>Frozen yogurt</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>159</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>6.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>159</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>6.0</DataTable.Cell>*/}
                {/*    </DataTable.Row>*/}

                {/*    <DataTable.Row>*/}
                {/*        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>237</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*    </DataTable.Row>*/}

                {/*    <DataTable.Row>*/}
                {/*        <DataTable.Cell>Frozen yogurt</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>159</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>6.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>6.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>6.0</DataTable.Cell>*/}
                {/*    </DataTable.Row>*/}

                {/*    <DataTable.Row>*/}
                {/*        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>237</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*    </DataTable.Row>*/}

                {/*    <DataTable.Row>*/}
                {/*        <DataTable.Cell>Frozen yogurt</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>159</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>6.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>6.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>6.0</DataTable.Cell>*/}
                {/*    </DataTable.Row>*/}

                {/*    <DataTable.Row>*/}
                {/*        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>237</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*    </DataTable.Row>*/}

                {/*    <DataTable.Row>*/}
                {/*        <DataTable.Cell>Frozen yogurt</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>159</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>6.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>6.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>6.0</DataTable.Cell>*/}
                {/*    </DataTable.Row>*/}

                {/*    <DataTable.Row>*/}
                {/*        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>237</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*        <DataTable.Cell numeric>8.0</DataTable.Cell>*/}
                {/*    </DataTable.Row>*/}
            </DataTable>
        </ScrollView>
    );
}

export default MyComponent;
