import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { playerUpdate, playerSave, playerDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class PlayerEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.player, (value, prop) => {
            this.props.playerUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, email, phone } = this.props;
        
        this.props.playerSave({ name, email, phone, uid: this.props.player.uid });
    }

    onAccept() {
        const { uid } = this.props.player;

        this.props.playerDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
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

                <CardSection>
                    <Button whenPressed={() => this.setState({ showModal: !this.state.showModal })}>
                        Remove Player
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are your sure you want to remove this player?
                </Confirm>
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
    playerSave,
    playerDelete
 })(PlayerEdit);
