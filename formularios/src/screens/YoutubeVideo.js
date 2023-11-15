import React, { useCallback, useState } from 'react';
import { Button, ImageBackground, StyleSheet, View } from 'react-native';
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
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <ImageBackground style={{ flex: 1, justifyContent: 'center' }} resizeMode="cover" source={{ uri: 'https://img.freepik.com/vetores-gratis/design-de-colagem-desenhado-a-mao_23-2149543516.jpg?w=1380&t=st=1700007951~exp=1700008551~hmac=c51650866918a07203f91ae937c59be6494e8fd25528005be442b4eafb39e564' }}>

                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={"uY4efoSe-Kc"}
                    onChangeState={onStateChange}
                />

                <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({})