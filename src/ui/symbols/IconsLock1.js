import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class IconsLock1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox={"-0 -0 55.89083820662768 63.87536036218356"}
          style={styles.path}
        >
          <Path
            strokeWidth={0}
            fill={"rgba(10,23,36,1)"}
            d={
              "M55.89 33.93 L55.89 57.89 L49.90 63.88 L5.99 63.88 L0.00 57.89 L0.00 33.93 L5.99 27.95 L7.98 27.95 L7.98 19.96 C7.98 19.96 16.97 -0.04 28.01 0.00 C39.04 0.04 47.91 20.15 47.91 20.15 L47.91 27.95 L49.90 27.95 L55.89 33.93 Z M11.98 27.95 L43.91 27.95 L43.91 19.96 C43.91 19.96 36.75 3.99 27.95 3.99 C19.14 3.99 11.98 19.96 11.98 19.96 L11.98 27.95 Z M51.90 57.89 L51.90 33.93 L49.90 31.94 L5.99 31.94 L3.99 33.93 L3.99 57.89 L5.99 59.88 L49.90 59.88 L51.90 57.89 Z"
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
  path: {
    top: "0.19%",
    left: "0.00%",
    width: "99.81%",
    height: "99.81%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  }
});
