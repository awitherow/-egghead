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

    this.growDistance = props.maxHeight - props.minHeight
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
    const { minHeight } = this.props
    const percentageOffSet = (event.nativeEvent.contentOffset.y % minHeight / 100)
    if (percentageOffSet < 0) {
      return
    }
    this.setState({
      percentageOffSet,
    })
  }

  render() {
    const { percentageOffSet, featuredRow, dataSource } = this.state;
    const { minHeight } = this.props;

    return (
      <ListView
        dataSource={dataSource}
        onScroll={this.handleScroll}
        onChangeVisibleRows={this.rowsChanged}
        renderRow={(rowData) => {
          const isFeatRow = rowData.id === featuredRow;
          const growthPercent = -(percentageOffSet * this.growDistance);

          return (
            <View style={{
              height: isFeatRow ? growthPercent + minHeight : minHeight,
              // paddingTop: isFeatRow ? -(percentageOffSet * minHeight) : 0,
              zIndex: isFeatRow ? 2 : 1,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: rowData.color,
            }}>
              <Text>{rowData.id}</Text>
            </View>
          )
        }}
      />
    );
  }
}
