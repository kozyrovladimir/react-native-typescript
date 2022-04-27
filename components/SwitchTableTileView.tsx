import * as React from 'react';
import { Switch } from 'react-native-paper';
import {useDispatch} from "react-redux";
import {setIsTableViewAC} from "../store/search-options-reducer";

type SwitchTableTileViewPropsType = {
    isTableView: boolean,
    switchChangeHandler: () => void
}

const SwitchTableTileView = (props: SwitchTableTileViewPropsType) => {
    //const [isSwitchOn, setIsSwitchOn] = React.useState<boolean>(false);
    const dispatch = useDispatch();
    const onToggleSwitch = () => dispatch(setIsTableViewAC(!props.isTableView));
    return <Switch value={props.isTableView} onValueChange={() => {props.switchChangeHandler() } } />;
};

export default SwitchTableTileView;
