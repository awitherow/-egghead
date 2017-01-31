import React, { Component } from 'react'
import {
  ListView,
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: ds.cloneWithRows(props.list),
      percentageOffSet: 1,
    };

    this.rowsChanged = this.rowsChanged.bind(this)
    this.handleScroll = this.handleScroll.bind(this)

    // default height: 100
    // max height: 200
    // grow distance = max - default
  }

  rowsChanged(visibleRows, changedRows) {
    this.setState({
      featuredRow: Object.keys(visibleRows.s1)[1],
    })
    console.table({
      visible: visibleRows.s1,
      changed: changedRows.s1,
    })
    console.log(this.state)
  }

  handleScroll(event) {
    this.setState({
      percentageOffSet: (event.nativeEvent.contentOffset.y % 100 / 100),
    })
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        onScroll={this.handleScroll}
        onChangeVisibleRows={this.rowsChanged}
        renderRow={(rowData) => <View style={{
          height: rowData.id === this.state.featuredRow ?
            (this.state.percentageOffSet * 100) + 100 : 100,
          paddingTop: rowData.id === this.state.featuredRow ? -(this.state.percentageOffSet * 100) : 0,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: rowData.color,
        }}>
          <Text>{rowData.id}</Text>
        </View>}
      />
    );
  }
}
