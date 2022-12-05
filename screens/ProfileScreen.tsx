//import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';
import { StyleSheet, Image, ScrollView } from 'react-native';
import pins from '../assets/data/pins';

//import EditScreenInfo from '../components/EditScreenInfo';
import PinList from '../components/PinList';
import { Text, View } from '../components/Themed';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <Feather name="share" size={24} color="white" style={styles.icon} />
          <Entypo name="dots-three-horizontal" size={24} color="white" style={styles.icon} /> 

        </View>

        <Image source={{uri: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",}} style={styles.image}/>
        <Text style={styles.title}>Daniel Prvvn</Text>
        <Text style={styles.subtitle}>Followers: 3689 | Followings: 1950 </Text>
      </View>
      
      <PinList pins={pins}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    //flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 12,
  },
  subtitle: {
    fontWeight: "600",
    //color: "black",
  },
  header: {
    alignItems: "center",
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
    marginTop: 10,
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,

  },
});
