import React from 'react';
import { Image } from 'react-native';
// import share from "../../assets/images/share.png"

const SlackIcon = () => {
  return (
    <Image
      source={require("../../assets/images/share.png")}
      fadeDuration={0}
      style={{ width: 20, height: 20, color: '#fff', }}
    />
  )
}

export default SlackIcon

