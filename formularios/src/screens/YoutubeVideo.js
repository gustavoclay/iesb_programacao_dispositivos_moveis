import React, {useState, useCallback } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function YoutubeVideo() {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);


    return (
        <View>

            <YoutubePlayer
                height={300}
                play={playing}
                videoId={"uY4efoSe-Kc"}
                onChangeState={onStateChange}
            />

            <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
    )
}

const styles = StyleSheet.create({})