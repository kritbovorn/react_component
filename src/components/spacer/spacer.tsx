import React from "react";
import { Text, View } from 'react-native';
import SizeConfig from '../../utils/size_configs/size_config';

const Spacer = () => {
  return (
    <View style={{ height: SizeConfig.maxPad }}></View>
  );
}

export default Spacer;



