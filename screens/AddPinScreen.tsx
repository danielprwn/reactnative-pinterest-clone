import React, { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AddPinScreen() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
        setImage(result.uri);
    }
  };

  const onSubmit = () => {};

  return (
    <View style={styles.root}>
      <Button title="Add your Pin image!" onPress={pickImage} />
      {image && (
        <>
            <Image 
                source={{ uri: image }} 
                style={styles.image} 
            />
            <TextInput 
                placeholder='Write title of pin...' 
                value={title} 
                onChangeText={setTitle} 
                style={styles.input}
            />
            <Button title="Add Your Pin!" onPress={onSubmit} /> 
        </>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 10,

    },
    input: {
        borderWidth: 3, 
        borderColor: "darkgreen",
        padding: 5,
        width: "90%",
        margin: 10,
        borderRadius: 10,
    },
    image: {
        width: "100%", 
        aspectRatio: 1,
        marginVertical: 10,
        borderRadius: 10,
    }
  });
  