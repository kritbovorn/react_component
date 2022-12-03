import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import SizeConfig from '../../size_config/size_config';

import Colors from 'styles/colors';

interface Props {
  caption: string;
  onPress(): void;
}

const OutlinedRoundedButton: React.FC<Props> = ({caption, onPress}) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onPress()}
      underlayColor={Colors.secondaryLight}>
        <Text style={[styles.text, {fontSize: SizeConfig.title}]}>{caption}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: SizeConfig.midBorder,
    borderColor: Colors.secondary,
    borderWidth: SizeConfig.minBorder
  },
  text: {
    color: Colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default OutlinedRoundedButton;
