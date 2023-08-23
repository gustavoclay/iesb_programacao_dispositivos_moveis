import { Text } from "react-native"

export default function MinMax(props) {

    // const max = props.max;
    // const min = props.min;

    const { min, max } = props;
    console.warn(props);



    return (
        <Text>{max}</Text>
    )
}