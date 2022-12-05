import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Pin = (props) => {

  //Props destructuring form
  const { id, image, title } = props.pin;

  const [ratio, setRatio] = useState(1);
  const navigation = useNavigation();


  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  const onLike = () => {

  };

  const goToPin = () => {
    navigation.navigate("Pin", { id });
  };

  return (
    <Pressable onPress={goToPin} style={styles.pin}>
      <View>
        <Image source={{
          uri: image,
        }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Pressable onPress={onLike} style={styles.likeBtn}>
          <Ionicons name="heart-circle" size={24} color="black" />
        </Pressable>
      </View>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: '100%',
    padding: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22,
    margin: 6,
    //color: 'white',
    color: '181818',
  },
  image: {
    width: '100%',
    borderRadius: 25,
  },
  likeBtn: {
    backgroundColor: "#dedede",
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 50,
  }
});

export default Pin;