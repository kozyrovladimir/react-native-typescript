import * as React from 'react';
import { DataTable } from 'react-native-paper';
import {VideoCardsType} from "./VideoCards";


const MyComponent = (props: VideoCardsType) => {

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title numeric>Phase</DataTable.Title>
                <DataTable.Title numeric>Season</DataTable.Title>
                <DataTable.Title numeric>Element</DataTable.Title>
                <DataTable.Title numeric>Organ</DataTable.Title>
            </DataTable.Header>

            {props.videoList.map(video => {
                return (
                    <DataTable.Row key={video.id}>
                        <DataTable.Cell>{video.title}</DataTable.Cell>
                        <DataTable.Cell numeric>{video.phase}</DataTable.Cell>
                        <DataTable.Cell numeric>{video.season}</DataTable.Cell>
                        <DataTable.Cell numeric>{video.element}</DataTable.Cell>
                        <DataTable.Cell numeric>{video.organ}</DataTable.Cell>
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
    );
}

export default MyComponent;
