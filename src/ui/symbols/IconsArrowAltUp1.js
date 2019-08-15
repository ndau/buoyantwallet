import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class IconsArrowAltUp1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox={"-0 -0 63.01247971931172 63.85910022791222"}
          style={styles.path3}
        >
          <Path
            strokeWidth={0}
            fill={"rgba(10,23,36,1)"}
            d={
              "M22.38 56.37 L22.38 31.93 L5.71 31.93 L4.90 29.98 L29.43 5.42 L33.58 5.42 L58.11 29.98 L57.30 31.93 L40.63 31.93 L40.63 56.37 L37.70 59.30 L25.32 59.30 L22.38 56.37 Z M25.32 63.86 L37.70 63.86 L45.19 56.37 L45.19 36.49 L57.30 36.49 L61.34 26.76 L36.81 2.20 L26.20 2.20 L1.67 26.76 L5.71 36.49 L17.82 36.49 L17.82 56.37 L25.32 63.86 Z"
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
  path3: {
    top: "0.22%",
    left: "0.22%",
    width: "98.46%",
    height: "99.78%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  }
});
