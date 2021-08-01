import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View>
        <RoundedButton size={75} title="1" onPress={() => onChangeTime(1)} />
      </View>
      <View>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
