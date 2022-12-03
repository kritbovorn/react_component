import TextTitle from 'components/text/text_title';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Colors from 'styles/colors';
import SizeConfig from '../../utils/size_config';

interface Props {
  caption: string;
  onPress(): void;
}

const FilledRoundedButton: React.FC<Props> = ({ caption, onPress }) => {
  return (
    <TouchableHighlight
      style={[styles.button]}
      onPress={() => onPress()}
      underlayColor={Colors.secondaryLight}>
      <Text style={[styles.text, { fontSize: SizeConfig.title, }]}>{caption}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: Colors.secondary,
    borderRadius: SizeConfig.midBorder,
    justifyContent: 'center'
  },
  text: {
    color: Colors.light,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default FilledRoundedButton;
