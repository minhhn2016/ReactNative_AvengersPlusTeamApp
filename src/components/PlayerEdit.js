import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { playerUpdate, playerSave } from '../actions';
import { Card, CardSection, Button } from './common';

class PlayerEdit extends Component {
    componentWillMount() {
        _.each(this.props.player, (value, prop) => {
            this.props.playerUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, email, phone } = this.props;
        
        this.props.playerSave({ name, email, phone, uid: this.props.player.uid });
    }

    render() {
        return (
            <Card>
                <PlayerForm />
                <CardSection>
                    <Button whenPressed={this.onButtonPress.bind(this)}>
                        Save Changes
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
    playerSave
 })(PlayerEdit);
