import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class IconsArrowAltDown1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox={"-0 -0 63.01247971931171 63.85910022791222"}
          style={styles.path1}
        >
          <Path
            strokeWidth={0}
            fill={"rgba(10,23,36,1)"}
            d={
              "M37.70 4.56 L40.63 7.49 L40.63 31.93 L57.30 31.93 L58.11 33.88 L33.58 58.44 L29.43 58.44 L4.90 33.88 L5.71 31.93 L22.38 31.93 L22.38 7.49 L25.32 4.56 L37.70 4.56 Z M37.70 0.00 L25.32 0.00 L17.82 7.49 L17.82 27.37 L5.71 27.37 L1.68 37.10 L26.21 61.66 L36.81 61.66 L61.34 37.10 L57.30 27.37 L45.19 27.37 L45.19 7.49 L37.70 0.00 Z"
            }
          />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  path1: {
    top: "0.00%",
    left: "0.21%",
    width: "98.46%",
    height: "99.78%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  }
});
