import { Text } from "react-native"

export default function MinMax(props) {

    const { min, max } = props;
    console.warn(props);

    return (
        <Text>{max} é maior que {min}</Text>
    )
}