import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const MoreButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoreButton;

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: 'flex-end',
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnText: {
    paddingHorizontal: 16,
    color: 'white',
    paddingVertical: 8,
  },
});
