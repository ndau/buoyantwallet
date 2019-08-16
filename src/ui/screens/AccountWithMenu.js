import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import IconsLockOpen1 from "../symbols/IconsLockOpen1";
import IconsLock1 from "../symbols/IconsLock1";
import IconsArrowAltUp1 from "../symbols/IconsArrowAltUp1";
import IconsArrowAltDown1 from "../symbols/IconsArrowAltDown1";

export default class AccountWithMenu extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.address}>
          <Svg viewBox={"-0.5 -0.5 345 3"} style={styles.line5Copy5}>
            <Path
              strokeWidth={1}
              fill={"transparent"}
              stroke={"rgba(69,91,130,1)"}
              d={"M0.00 0.50 L343.00 0.50 "}
            />
          </Svg>
          <View style={styles.btnSmallOutline}>
            <View style={styles.btnPrimary}>
              <View style={styles.btn} />
              <TextInput placeholder={"Share"} style={styles.textInput19} />
            </View>
          </View>
          <TextInput placeholder={"Address"} style={styles.textInput17} />
          <TextInput
            placeholder={"ndar34097g0d87fvs0dfv786209…"}
            style={styles.textInput18}
          />
        </View>
        <View style={styles.eai}>
          <Svg viewBox={"-0.5 -0.5 345 3"} style={styles.line5Copy2}>
            <Path
              strokeWidth={1}
              fill={"transparent"}
              stroke={"rgba(69,91,130,1)"}
              d={"M0.00 0.50 L343.00 0.50 "}
            />
          </Svg>
          <View style={styles.iconsInfoCircle}>
            <Svg viewBox={"-0 -0 24 24"} style={styles.path}>
              <Path
                strokeWidth={0}
                fill={"rgba(78,149,122,1)"}
                d={
                  "M1.55 12.00 C1.55 17.78 6.23 22.45 12.00 22.45 C17.78 22.45 22.45 17.77 22.45 12.00 C22.45 6.20 17.74 1.55 12.00 1.55 C6.22 1.55 1.55 6.23 1.55 12.00 Z M24.00 12.00 C24.00 18.63 18.63 24.00 12.00 24.00 C5.37 24.00 0.00 18.63 0.00 12.00 C0.00 5.38 5.37 0.00 12.00 0.00 C18.63 0.00 24.00 5.38 24.00 12.00 Z M10.26 16.65 L10.84 16.65 L10.84 10.84 L10.26 10.84 L9.68 10.26 L9.68 9.87 L10.26 9.29 L12.58 9.29 L13.16 9.87 L13.16 16.65 L13.74 16.65 L14.32 17.23 L14.32 17.61 L13.74 18.19 L10.26 18.19 L9.68 17.61 L9.68 17.23 L10.26 16.65 Z M13.55 6.58 C13.55 7.44 12.86 8.13 12.00 8.13 C11.14 8.13 10.45 7.44 10.45 6.58 C10.45 5.73 11.14 5.03 12.00 5.03 C12.86 5.03 13.55 5.73 13.55 6.58 Z"
                }
              />
            </Svg>
          </View>
          <TextInput
            placeholder={"14% annualized incentive (EAI)"}
            style={styles.textInput8}
          />
          <TextInput
            placeholder={"Weighted average age (WAA):"}
            style={styles.textInput9}
          />
          <TextInput
            placeholder={"Current EAI based on WAA:"}
            style={styles.textInput10}
          />
          <TextInput
            placeholder={"Lock bonus EAI:"}
            style={styles.textInput11}
          />
          <TextInput
            placeholder={"EAI being sent to:"}
            style={styles.textInput12}
          />
          <TextInput placeholder={"Account 2"} style={styles.textInput13} />
          <TextInput placeholder={"4%"} style={styles.textInput14} />
          <TextInput placeholder={"34 days"} style={styles.textInput15} />
          <TextInput placeholder={"10%"} style={styles.textInput16} />
        </View>
        <View style={styles.accountStatus}>
          <Svg viewBox={"-0.5 -0.5 345 3"} style={styles.line5Copy4}>
            <Path
              strokeWidth={1}
              fill={"transparent"}
              stroke={"rgba(69,91,130,1)"}
              d={"M0.00 0.50 L343.00 0.50 "}
            />
          </Svg>
          <View style={styles.lock}>
            <IconsLockOpen1 style={styles.iconsLockOpen1} />
            <View style={styles.rectangle} />
          </View>
          <TextInput placeholder={"Account status"} style={styles.textInput6} />
          <TextInput placeholder={"Unlocked"} style={styles.textInput7} />
        </View>
        <View style={styles.buttons}>
          <View style={styles.rectangleCopy3} />
          <View style={styles.btnUnlock}>
            <View style={styles.btnPrimaryCopy3}>
              <View style={styles.btn1} />
              <View style={styles.group}>
                <IconsLock1 style={styles.iconsLock1} />
                <TextInput placeholder={"Lock"} style={styles.textInput5} />
              </View>
            </View>
          </View>
          <View style={styles.btnSend}>
            <View style={styles.btnPrimaryCopy}>
              <View style={styles.btn2} />
              <View style={styles.group1}>
                <IconsArrowAltUp1 style={styles.iconsArrowAltUp1} />
                <TextInput placeholder={"Send"} style={styles.textInput3} />
              </View>
            </View>
          </View>
          <View style={styles.btnReceive}>
            <View style={styles.btnPrimaryCopy2}>
              <View style={styles.btn3} />
              <View style={styles.group2}>
                <IconsArrowAltDown1 style={styles.iconsArrowAltDown1} />
                <TextInput placeholder={"Receive"} style={styles.textInput4} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.amount}>
          <Image
            source={require("../assets/images/816d78f48814dcedba0fa53600340b365b4fec87.png")}
            style={styles.ndauIconCopy}
          />
          <TextInput placeholder={"411.00"} style={styles.textInput2} />
        </View>
        <View style={styles.titleBar}>
          <View style={styles.rectangle1} />
          <View style={styles.iconsArrowLeft}>
            <Svg
              viewBox={"-0 -0 23.99997321428571 23.89820758982154"}
              style={styles.path1}
            >
              <Path
                strokeWidth={0}
                fill={"rgba(78,149,122,1)"}
                d={
                  "M12.40 23.71 L12.78 23.33 C13.03 23.08 13.03 22.67 12.78 22.42 L3.22 12.86 L23.36 12.86 C23.71 12.86 24.00 12.57 24.00 12.22 L24.00 11.68 C24.00 11.33 23.71 11.04 23.36 11.04 L3.22 11.04 L12.78 1.48 C13.03 1.23 13.03 0.82 12.78 0.57 L12.40 0.19 C12.15 -0.06 11.75 -0.06 11.49 0.19 L0.19 11.49 C-0.06 11.75 -0.06 12.15 0.19 12.40 L11.49 23.71 C11.75 23.96 12.15 23.96 12.40 23.71 Z"
                }
              />
            </Svg>
          </View>
          <View style={styles.iconsBars}>
            <Svg viewBox={"-0 -0 4.784688995215311 24"} style={styles.path2}>
              <Path
                strokeWidth={0}
                fill={"rgba(255,255,255,1)"}
                d={
                  "M2.39 9.47 C3.72 9.47 4.78 10.60 4.78 12.00 C4.78 13.40 3.72 14.53 2.39 14.53 C1.07 14.53 0.00 13.40 0.00 12.00 C0.00 10.60 1.07 9.47 2.39 9.47 Z M2.39 0.00 C3.72 0.00 4.78 1.13 4.78 2.53 C4.78 3.92 3.72 5.05 2.39 5.05 C1.07 5.05 0.00 3.92 0.00 2.53 C0.00 1.13 1.07 0.00 2.39 0.00 Z M2.39 18.95 C3.72 18.95 4.78 20.08 4.78 21.47 C4.78 22.87 3.72 24.00 2.39 24.00 C1.07 24.00 0.00 22.87 0.00 21.47 C0.00 20.08 1.07 18.95 2.39 18.95 Z"
                }
              />
            </Svg>
          </View>
          <TextInput
            placeholder={"Account 1 details"}
            style={styles.textInput}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(10,23,36,1)"
  },
  address: {
    top: "76.76%",
    left: "4.27%",
    width: "91.47%",
    height: "12.14%",
    position: "absolute"
  },
  line5Copy5: {
    top: "46.30%",
    left: "-0.15%",
    width: "100.58%",
    height: "3.70%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  btnSmallOutline: {
    top: "60.49%",
    left: "81.05%",
    width: "18.95%",
    height: "39.51%",
    position: "absolute"
  },
  btnPrimary: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute"
  },
  btn: {
    top: "0.00%",
    left: "0.00%",
    width: "99.67%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderRadius: 2,
    borderColor: "rgba(78,149,122,1)",
    borderWidth: 2
  },
  textInput19: {
    top: "12.50%",
    left: 11.83,
    width: 38.16,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 12.17,
    fontSize: 16,
    fontFamily: "titilliumweb-regular",
    lineHeight: 24,
    letterSpacing: 0.34,
    textAlign: "center"
  },
  textInput17: {
    top: "0.00%",
    left: "0.00%",
    width: 71.98,
    height: 32,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "titilliumweb-semibold",
    lineHeight: 32,
    letterSpacing: 0.45
  },
  textInput18: {
    top: "69.14%",
    left: "0.00%",
    width: 202.06,
    height: 18,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "opensans-semibold",
    lineHeight: 18,
    letterSpacing: 0.3
  },
  eai: {
    top: "44.68%",
    left: "4.27%",
    width: "91.47%",
    height: "26.09%",
    position: "absolute"
  },
  line5Copy2: {
    top: "20.98%",
    left: "-0.15%",
    width: "100.58%",
    height: "1.72%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  iconsInfoCircle: {
    top: "2.30%",
    left: "85.13%",
    width: "7.00%",
    height: "13.79%",
    position: "absolute"
  },
  path: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  textInput8: {
    top: "0.00%",
    left: "0.00%",
    width: 284.64,
    height: 32,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "titilliumweb-semibold",
    lineHeight: 32,
    letterSpacing: 0.45
  },
  textInput9: {
    top: "31.61%",
    left: "0.00%",
    width: 205.66,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "opensans-regular",
    lineHeight: 24,
    letterSpacing: 0.34
  },
  textInput10: {
    top: "49.43%",
    left: "0.00%",
    width: 193.42,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "opensans-regular",
    lineHeight: 24,
    letterSpacing: 0.34
  },
  textInput11: {
    top: "67.82%",
    left: "0.00%",
    width: 115.36,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "opensans-regular",
    lineHeight: 24,
    letterSpacing: 0.34
  },
  textInput12: {
    top: "86.21%",
    left: "0.00%",
    width: 123.05,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "opensans-regular",
    lineHeight: 24,
    letterSpacing: 0.34
  },
  textInput13: {
    top: "86.21%",
    left: "76.09%",
    width: 83.49,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "opensans-bold",
    lineHeight: 24,
    letterSpacing: 0.34,
    textAlign: "right"
  },
  textInput14: {
    top: "67.82%",
    left: "92.71%",
    width: 22.02,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "opensans-bold",
    lineHeight: 24,
    letterSpacing: 0.34,
    textAlign: "right"
  },
  textInput15: {
    top: "31.03%",
    left: "81.92%",
    width: 51.73,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "opensans-bold",
    lineHeight: 24,
    letterSpacing: 0.34,
    textAlign: "right"
  },
  textInput16: {
    top: "49.43%",
    left: "90.09%",
    width: 30.36,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "opensans-bold",
    lineHeight: 24,
    letterSpacing: 0.34,
    textAlign: "right"
  },
  accountStatus: {
    top: "26.99%",
    left: "4.27%",
    width: "91.47%",
    height: "11.69%",
    position: "absolute"
  },
  line5Copy4: {
    top: "48.08%",
    left: "-0.15%",
    width: "100.58%",
    height: "3.85%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  lock: {
    top: "73.08%",
    left: "0.00%",
    width: "5.83%",
    height: "20.51%",
    position: "absolute"
  },
  iconsLockOpen1: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  rectangle: {
    top: "50.00%",
    left: "0.00%",
    width: "65.00%",
    height: "43.75%",
    backgroundColor: "rgba(78,149,122,1)",
    position: "absolute"
  },
  textInput6: {
    top: "0.00%",
    left: "0.00%",
    width: 130.53,
    height: 32,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "titilliumweb-semibold",
    lineHeight: 32,
    letterSpacing: 0.45
  },
  textInput7: {
    top: "69.23%",
    left: "8.16%",
    width: 64.95,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "opensans-regular",
    lineHeight: 24,
    letterSpacing: 0.34
  },
  buttons: {
    top: "15.59%",
    left: "0.00%",
    width: "100.00%",
    height: "7.80%",
    position: "absolute"
  },
  rectangleCopy3: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(41,62,99,1)",
    position: "absolute",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOpacity: 1,
    shadowRadius: 4
  },
  btnUnlock: {
    top: "19.23%",
    left: "68.00%",
    width: "27.73%",
    height: "61.54%",
    position: "absolute"
  },
  btnPrimaryCopy3: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute"
  },
  btn1: {
    top: "0.00%",
    left: "0.00%",
    width: "99.67%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderRadius: 16,
    borderColor: "rgba(78,149,122,1)",
    borderWidth: 1
  },
  group: {
    top: "12.50%",
    left: 26,
    height: 24,
    position: "absolute",
    right: 26
  },
  iconsLock1: {
    top: "16.67%",
    left: "73.08%",
    width: "26.92%",
    height: 16,
    backgroundColor: "transparent",
    position: "absolute"
  },
  textInput5: {
    top: "0.00%",
    left: 0,
    width: 34.25,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 19,
    fontSize: 16,
    fontFamily: "titilliumweb-regular",
    lineHeight: 24,
    letterSpacing: 0.34,
    textAlign: "center"
  },
  btnSend: {
    top: "19.23%",
    left: "4.27%",
    width: "27.73%",
    height: "61.54%",
    position: "absolute"
  },
  btnPrimaryCopy: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute"
  },
  btn2: {
    top: "0.00%",
    left: "0.00%",
    width: "99.67%",
    height: "100.00%",
    backgroundColor: "rgba(78,149,122,1)",
    position: "absolute",
    borderRadius: 16
  },
  group1: {
    top: "12.50%",
    left: 24,
    height: 24,
    position: "absolute",
    right: 24
  },
  iconsArrowAltUp1: {
    top: "16.67%",
    left: "71.43%",
    width: 16,
    height: 16,
    backgroundColor: "transparent",
    position: "absolute"
  },
  textInput3: {
    top: "0.00%",
    left: 0,
    width: 33.38,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 20,
    fontSize: 16,
    fontFamily: "titilliumweb-regular",
    lineHeight: 24,
    letterSpacing: 0.34,
    textAlign: "center"
  },
  btnReceive: {
    top: "19.23%",
    left: "36.27%",
    width: "27.73%",
    height: "61.54%",
    position: "absolute"
  },
  btnPrimaryCopy2: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute"
  },
  btn3: {
    top: "0.00%",
    left: "0.00%",
    width: "99.67%",
    height: "100.00%",
    backgroundColor: "rgba(78,149,122,1)",
    position: "absolute",
    borderRadius: 16
  },
  group2: {
    top: "12.50%",
    left: 14,
    height: 24,
    position: "absolute",
    right: 15
  },
  iconsArrowAltDown1: {
    top: "16.67%",
    left: "78.67%",
    width: 16,
    height: 16,
    backgroundColor: "transparent",
    position: "absolute"
  },
  textInput4: {
    top: "0.00%",
    left: 0,
    width: 53.94,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 20,
    fontSize: 16,
    fontFamily: "titilliumweb-regular",
    lineHeight: 24,
    letterSpacing: 0.34,
    textAlign: "center"
  },
  amount: {
    top: "10.04%",
    left: "37.07%",
    width: "25.87%",
    height: "4.20%",
    position: "absolute"
  },
  ndauIconCopy: {
    top: "21.43%",
    left: "0.00%",
    width: "17.53%",
    height: "78.57%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  textInput2: {
    top: "0.00%",
    left: "21.65%",
    width: 68.22,
    height: 27,
    backgroundColor: "transparent",
    color: "rgba(140,199,79,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "titilliumweb-light",
    lineHeight: 27,
    letterSpacing: 0.51
  },
  titleBar: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "8.55%",
    position: "absolute"
  },
  rectangle1: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(15,39,72,1)",
    position: "absolute"
  },
  iconsArrowLeft: {
    top: "31.58%",
    left: "4.27%",
    width: "6.40%",
    height: "42.11%",
    position: "absolute"
  },
  path1: {
    top: "0.21%",
    left: "0.00%",
    width: "100.00%",
    height: "99.58%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  iconsBars: {
    top: "28.07%",
    left: "94.40%",
    width: "1.33%",
    height: "42.11%",
    position: "absolute"
  },
  path2: {
    top: "0.00%",
    left: "0.00%",
    width: "95.69%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  textInput: {
    top: "28.07%",
    left: "32.27%",
    width: 117.81,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "TitilliumWeb-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.34,
    textAlign: "center"
  }
});
