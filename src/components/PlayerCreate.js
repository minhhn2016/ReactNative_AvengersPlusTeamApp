import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playerUpdate, playerCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class PlayerCreate extends Component {
    onButtonPress() {
        const { name, email, phone } = this.props;

        this.props.playerCreate({ name, email, phone });
    }

    render() {
        return (
            <Card>
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
                <CardSection>
                    <Button whenPressed={this.onButtonPress.bind(this)}>
                        Create Player
                    </Button>    
                </CardSection>               
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, email, phone } = state.playerForm;

    return { name, email, phone };
};

export default connect(mapStateToProps, { 
    playerUpdate,
    playerCreate
})(PlayerCreate);
