import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class IconsLockOpen1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox={"-0 -0 79.84405458089668 63.87536036218356"}
          style={styles.path6}
        >
          <Path
            strokeWidth={0}
            fill={"rgba(10,23,36,1)"}
            d={
              "M79.84 20.15 L79.84 30.44 L78.35 31.94 L77.35 31.94 L75.85 30.44 L75.85 19.96 C75.85 19.96 68.64 3.94 59.80 3.99 C50.99 4.04 43.91 20.14 43.91 20.14 L43.91 27.95 L49.90 27.95 L55.89 33.93 L55.89 57.89 L49.90 63.88 L5.99 63.88 L0.00 57.89 L0.00 33.93 L5.99 27.95 L39.92 27.95 L39.92 19.96 C39.92 19.96 48.90 -0.04 59.95 0.00 C70.97 0.04 79.84 20.15 79.84 20.15 Z M5.99 31.94 L3.99 33.93 L3.99 57.89 L5.99 59.88 L49.90 59.88 L51.90 57.89 L51.90 33.93 L49.90 31.94 L5.99 31.94 Z"
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
  path6: {
    top: "0.19%",
    left: "0.00%",
    width: "99.81%",
    height: "99.81%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  }
});
