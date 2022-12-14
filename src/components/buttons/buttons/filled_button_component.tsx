import React from "react";
import { ColorValue, FlexAlignType, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { gbs, sc } from '../../../utils/import/import_options';

type Props = {
  title: string,
  width?: number | string,
  color?: string,
  backgroundColor?: string,
  fontSize?: number,
  alignItems?: FlexAlignType,
  underlayColor?: ColorValue | string,
  onPress(): void
}

const FilledButtonComponent = ({ title, width, color, backgroundColor, fontSize, alignItems, underlayColor, onPress }: Props) => {
  return (
    <TouchableHighlight underlayColor={underlayColor ?? 'transparent'} onPress={() => onPress()} style={[styles.button, { height: sc.buttonHeight, width: width ?? '100%', backgroundColor: backgroundColor ?? "red" }]}>
      <Text style={[gbs.head, { fontSize: fontSize ?? sc.body, color: color ?? "white" }]}>{title}</Text>
    </TouchableHighlight>
  );
}

export default FilledButtonComponent;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sc.minPad
  }
});



