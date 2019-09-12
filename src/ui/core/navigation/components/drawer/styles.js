import { StyleSheet, Platform } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import AppConstants from '@src/data/constants/AppConstants'

export default (styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0A1724'
  },
  drawerExit: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: wp('4%'),
    marginBottom: hp('3%')
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
  drawerText: {
    color: AppConstants.TEXT_COLOR,
    fontFamily: 'Open Sans',
    fontSize: 18,
    marginLeft: wp('2%'),
    paddingTop: 0
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
