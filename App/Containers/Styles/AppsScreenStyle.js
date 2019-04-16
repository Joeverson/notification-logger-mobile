import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  listLogsContainer: {
    flexDirection: 'column'
  },
  headerList: {
    // flex: 0.7,
    height: '11%',
    // backgroundColor: 'blue'
  },
  contentList: {
    // flex: 0.7,
    height: '74%',
    // backgroundColor: 'blue'
  },
  footerList: {
    // flex: 0.3,
    height: '15%',
    backgroundColor: '#3d3d3d',
  },
  footerListItens: {
    backgroundColor: '#4A74FF',
    width: 85,
    height: 85,
    margin: 5,
    borderRadius: 10
  }
})
