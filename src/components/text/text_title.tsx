import React from "react";
import { TextStyle ,Text } from 'react-native';
import Colors from "../../styles/colors";
import SizeConfig from "../../utils/size_config";

interface Props {
    title: string;
    color?: string;
    fontweight?: TextStyle['fontWeight'];
    fontFamily?: TextStyle['fontFamily'];
}

const   TextTitle: React.FC<Props> = ({title, color, fontweight, fontFamily}) => {
  return (  
    <Text style={{ fontSize: SizeConfig.title, color: color ?? Colors.dark, fontWeight: fontweight ?? 'normal', fontFamily: fontFamily }}>{title}</Text>
  );
}

export default TextTitle;



