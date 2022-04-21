import * as React from 'react';
import {List} from 'react-native-paper';
import {Provider} from "react-native-paper";

const SearchOption = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <Provider>
            <List.Section title="Accordions">
                <List.Accordion
                    title="Uncontrolled Accordion"
                    left={props => <List.Icon {...props} icon="folder"/>}>
                    <List.Item title="First item"/>
                    <List.Item title="Second item"/>
                </List.Accordion>

                <List.Accordion
                    title="Controlled Accordion"
                    left={props => <List.Icon {...props} icon="folder"/>}
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title="First item"/>
                    <List.Item title="Second item"/>
                </List.Accordion>
            </List.Section>
        </Provider>
    );
};

export default SearchOption;
