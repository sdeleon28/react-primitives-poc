import React from 'react';
import { StyleSheet, Text, Touchable, View } from 'react-primitives';

const pt = React.PropTypes;

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: '#ff5f5f',
    borderWidth: 3,
    backgroundColor: '#074d61',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    color: 'white',
  },
});

const Button = ({ label, onPress }) => (
  <Touchable onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  </Touchable>
);

Button.propTypes = {
  label: pt.string.isRequired,
  onPress: pt.func.isRequired,
};

export default Button;

