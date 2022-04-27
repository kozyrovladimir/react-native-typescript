import * as React from 'react';
import {Button, DataTable } from 'react-native-paper';
import {VideoCardsType} from "./VideoCards";
import {ScrollView, Text} from "react-native";
import {defineElementColor, definePhaseColor, ucFirst} from "../utils/helper_functions";
import {
    ElementOptionsType,
    filterVideosAC, OrganOptionsType,
    PhaseOptionsType,
    SearchOptionsType,
    SeasonOptionsType
} from "../store/search-options-reducer";
import {setCurrentPageTileAC} from "../store/pagination-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {useNavigation} from "@react-navigation/native";


const MyComponent = (props: VideoCardsType) => {
    const dispatch = useDispatch();
    const options = useSelector<AppRootStateType, SearchOptionsType>(state => state.searchOptions);
    const navigation = useNavigation();

    function filterPhase(phase: PhaseOptionsType) {
        dispatch(filterVideosAC(
            {
                ...options,
                nameFlow: '',
                season: "all",
                element: "all",
                organ: "all",
                phase
            }
        ))
        dispatch(setCurrentPageTileAC(1));
    }

    function filterSeason(season: SeasonOptionsType) {
        dispatch(filterVideosAC(
            {
                ...options,
                nameFlow: '',
                phase: "all",
                element: "all",
                organ: "all",
                season
            }
        ))
        dispatch(setCurrentPageTileAC(1));
    }

    function filterElement(element: ElementOptionsType) {
        dispatch(filterVideosAC(
            {
                ...options,
                nameFlow: '',
                phase: "all",
                season: "all",
                organ: "all",
                element
            }
        ))
        dispatch(setCurrentPageTileAC(1));
    }

    function filterOrgan(organ: OrganOptionsType) {
        dispatch(filterVideosAC(
            {
                ...options,
                nameFlow: '',
                phase: "all",
                season: "all",
                element: "all",
                organ
            }
        ))
        dispatch(setCurrentPageTileAC(1));
    }
    return (
        <ScrollView horizontal={true} style={{ height: 880 }}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title style={{width: 240, overflow: 'hidden'}} >Name</DataTable.Title>
                    <DataTable.Title style={{width: 120, overflow: 'hidden'}}>Phase</DataTable.Title>
                    <DataTable.Title style={{width: 120, overflow: 'hidden'}}>Season</DataTable.Title>
                    <DataTable.Title style={{width: 120, overflow: 'hidden'}}>Element</DataTable.Title>
                    <DataTable.Title style={{width: 120, overflow: 'hidden'}}>Organ</DataTable.Title>
                </DataTable.Header>
                    {props.videoList.map(video => {
                        const phaseColor = definePhaseColor(video.phase);
                        const elementColor= defineElementColor(video.element);
                        const phaseName = ucFirst(video.phase);
                        const seasonName = ucFirst(video.season);
                        const elementName = ucFirst(video.element);
                        const organName = ucFirst(video.organ);
                        return (
                            <DataTable.Row key={video.id}>
                                <DataTable.Cell style={{width: 240}}>
                                    {/*@ts-ignore*/}
                                    <Text onPress={()=> navigation.navigate('Details')} style={{overflow: 'hidden'}}>
                                        {video.title}
                                    </Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{width: 140}}>
                                    <Text onPress={() =>filterPhase(video.phase) } style={{overflow: 'hidden', color: phaseColor}}>
                                        {phaseName}
                                    </Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{width: 140}}>
                                    <Text onPress={() =>filterSeason(video.season) } style={{overflow: 'hidden'}}>
                                        {seasonName}
                                    </Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{width: 140}}>
                                    <Text onPress={() =>filterElement(video.element) } style={{overflow: 'hidden', color: elementColor}}>
                                        {elementName}
                                    </Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{width: 140}}>
                                    <Text onPress={() =>filterOrgan(video.organ) } style={{overflow: 'hidden'}}>
                                        {organName}
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
