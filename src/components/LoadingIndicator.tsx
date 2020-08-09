import React from 'react';
import { ActivityIndicator, View } from 'react-native'

interface IProps {
  style?: any
}

export default function LoadingIndicator(props: IProps) {
  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }, props.style]}>
      <ActivityIndicator size="small" animating={true} color="purple" />
    </View>
  );
}