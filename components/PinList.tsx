import { StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { useState } from 'react';

import { View } from './Themed';
import Pin from './Pin';

interface IPinList {
  pins: {
    id: string;
    image: string;
    title: string;
  }[];
};

const PinList = ({pins}: IPinList) => {
  //const [numColumns, setNumColumns] = useState(2);
  const width = useWindowDimensions().width;

  //const numColumns = width < 500 ? 2  : 3;
  const numColumns = Math.ceil(width / 300);

  return (
    <ScrollView>
      <View style={styles.container}>
      {Array.from(Array(numColumns)).map((_, colIndex) => (
        <View style={styles.column}>
          {pins
          .filter((_, index) => index % numColumns === colIndex)
          .map((pin) => (
          <Pin pin={pin} key={pin.id} />
        ))}
      </View>
      ))}
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'row',
    },
    column: {
      flex: 1,
    }
  });
  

export default PinList;