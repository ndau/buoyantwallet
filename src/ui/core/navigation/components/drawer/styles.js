import { StyleSheet, Platform } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import AppConstants from '@src/data/constants/AppConstants'

export default (styles = StyleSheet.create({
  opaqueOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.9
  },
  outerDrawerContainer: {
    flex: 1,
    height: hp('100%')
  },
  drawerContainerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  drawerContainer: {
    flex: 1,
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('100%'),
    marginTop: hp('2%'),
    marginBottom: hp('2.5%'),
    backgroundColor: '#0A1724'
  },
  drawerExit: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: wp('4%'),
    marginBottom: hp('3%')
  },
  drawerButton: {
    paddingLeft: wp('4%')
  },
  drawerEntry: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: wp('4%'),
    marginBottom: hp('2.5%')
  },
  drawerVersionEntry: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: wp('4%'),
    marginBottom: hp('2.5%')
  },
  drawerTextBottom: {
    color: AppConstants.TEXT_COLOR,
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: '200',
    marginLeft: wp('2%'),
    paddingBottom: 0
  },
  drawerText: {
    color: AppConstants.TEXT_COLOR,
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: '200',
    marginLeft: wp('2%'),
    paddingTop: 0
  },
  drawerHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: wp('100%'),
    maxHeight: hp('6%'),
    color: '#000000'
  },
  drawerHeaderText: {
    color: AppConstants.TEXT_COLOR,
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: '200',
    width: wp('76%'),
    height: hp('6%'),
    textAlign: 'center',
    paddingTop: 4
  },
  contactSupportHeaderStyle: {
    // mostly copied from drawerHeaderText
    color: AppConstants.TEXT_COLOR,
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: '200',
    width: wp('76%'),
    height: hp('6%'),
    textAlign: 'center',
    paddingTop: 4,
    marginLeft: '-10%',
    zIndex: -1,
    textAlign: 'left',
    flex: 1
  },
  drawerBorder: {
    borderBottomColor: '#455B82',
    borderBottomWidth: 1,
    marginBottom: hp('3%'),
    ...Platform.select({
      android: {
        width: '68%'
      }
    })
  }
}))
