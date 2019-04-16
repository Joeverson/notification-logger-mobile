import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AppsScreenStyle'

class AppsScreen extends Component {
  state = {
    seeLogs: [], 
    logs: Array.from('casinhadaveiamano').map(n => {
      return {
        name: `MOBOY-${n}`,
        sigla: 'MB',
        logs: [{
          message: 'asdasd asdapisdj asd',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        },
        {
          message: 'tytytyty iiiiiii ddff',
          createAt: Date.now()
        }]
      }
    })
  }

  headerSearch() {
    return (
      <View style={styles.input}>
        <TextInput style={{flex: 0.9, fontSize: 24, paddingLeft: 20}}></TextInput>
        <Icon 
          name="search"
          size={ 30 }
          style = {{
            flex: 0.1,
            padding: 10
          }}
          color = "#b7b7b7" />
      </View>
    )
  }

  empty () {
    return (
      <View style={styles.centered}>
        <Icon name="align-justify" size={30}></Icon>
        <Text>Não há logs</Text>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.listLogsContainer}>
        <View
          style={styles.headerList}>
          {
            this.headerSearch()
          }
        </View>
        <View
          style={styles.contentList}>
          <FlatList
            data={this.state.seeLogs}
            ListEmptyComponent={this.empty}
            renderItem={({item}) => (
              <View style={{ flexDirection: 'row', padding: 20 }}>
                <Icon style={{ marginRight: 30 }} name="file-o" size={30}></Icon>
                <View style={{
                  flexDirection: 'column'  
                }}>
                  <Text>{item.message}</Text>
                  <Text>{item.createAt}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View
          style={styles.footerList}>
          <FlatList
            horizontal
            data={this.state.logs}
            renderItem={({item}) => (
              <TouchableHighlight onPress={() => this.setState({ seeLogs: item.logs })}>
                <View style={styles.footerListItens}>
                  <Text style={styles.sigla}>{item.sigla}</Text>
                  <Text style={styles.subtitle}>{item.name}</Text>
                </View>
              </TouchableHighlight>
            )}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppsScreen)
