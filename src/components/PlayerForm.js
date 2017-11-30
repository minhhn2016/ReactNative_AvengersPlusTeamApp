import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { playerUpdate } from '../actions';
import { CardSection, Input } from './common';

class PlayerForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        labelText="Name"
                        placeholderText="player's name"
                        value={this.props.name}
                        onChangeText={value => this.props.playerUpdate({ prop: 'name', value })}
                    />
                </CardSection> 
                <CardSection>
                    <Input
                        labelText="Email"
                        placeholderText="player's email"
                        value={this.props.email}
                        onChangeText={value => this.props.playerUpdate({ prop: 'email', value })}
                    />
                </CardSection> 
                <CardSection>
                    <Input
                        labelText="Phone"
                        placeholderText="player's phone number"
                        value={this.props.phone}
                        onChangeText={value => this.props.playerUpdate({ prop: 'phone', value })}
                    />
                </CardSection> 
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, email, phone } = state.playerForm;

    return { name, email, phone };
};

export default connect(mapStateToProps, { playerUpdate })(PlayerForm);
