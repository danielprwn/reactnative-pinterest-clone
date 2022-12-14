import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import pins from '../assets/data/pins';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const PinScreen = () => {
    //const pin = pins[1];
    const [ratio, setRatio] = useState(1);

    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const route = useRoute();

    const pinId = route.params?.id;
    const pin = pins.find((p) => p.id === pinId);


    useEffect(() => {
        if (pin?.image) {
            Image.getSize(pin.image, (width, height) => setRatio(width / height));
        }
    }, [pin]);

    const goBack = () => {
        navigation.goBack();
    };

    if (!pin) {
        return (
            <Text>Pin is not found!</Text>
        );
    };

    return (
        <SafeAreaView style={{ backgroundColor: "black" }}>
            <StatusBar style="light" />
            <View style={styles.root}>
                <Image source={{ uri: pin.image }} style={[styles.image, { aspectRatio: ratio }]} />
                <Text style={styles.title}>{pin.title}</Text>
            </View>
            <Pressable onPress={goBack} style={[styles.back, { top: insets.top + 20 }]}>
                <Ionicons name={"chevron-back"} size={35} color={"white"} />
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        height: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    image: {
        width: "100%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    title: {
        margin: 10,
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        lineHeight: 35,
    },
    back: {
        position: "absolute",
        left: 10,
    }
});


export default PinScreen;