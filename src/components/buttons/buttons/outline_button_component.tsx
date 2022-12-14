import React from "react";
import { ColorValue, FlexAlignType, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { colors, gbs, sc } from '../../../utils/import/import_options';

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

const OutlineButtonComponent = ({ title, width, color, backgroundColor, fontSize, alignItems, underlayColor, onPress }: Props) => {
    return (
        <TouchableHighlight underlayColor={underlayColor ?? 'lightgrey'} onPress={() => onPress()} style={[styles.button, { height: sc.buttonHeight, width: width ?? '100%', backgroundColor: backgroundColor ?? 'white' }]}>
            <Text style={[gbs.head, { color: color ?? 'red', fontSize: fontSize ?? sc.body }]}>{title}</Text>
        </TouchableHighlight>
    );
}

export default OutlineButtonComponent;

const styles = StyleSheet.create({
    button: {
        borderWidth: sc.minSpace,
        borderColor: colors.backgroundNavbar,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sc.minPad
    }
});
