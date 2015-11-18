import React, { Component } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const { StyleSheet, View, Text, TouchableOpacity } = React;

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    position: 'relative'
  },
  counter: {
      marginTop: 40,
      fontSize: 200,
      color: '#e74c3c'
  },
  button: {
      position: 'absolute',
      left: 100,
  },
  button2: {
    left: 200
  },
  text: {
    fontSize: 50,
    color: '#e74c3c'
  }
});

class starterpack extends Component {
    render() {
        const { actions, counter } = this.props;
        return (
            <View style={styles.wrapper}>
                <Text style={styles.counter}>{counter}</Text>
                <TouchableOpacity style={styles.button} onPress={() => actions.increment()}>
                        <Text style={styles.text}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.button2]} onPress={() => actions.decrement()}>
                        <Text style={styles.text}>-</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(starterpack);
