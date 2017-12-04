import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { playerUpdate } from '../../actions';
import PlayerForm from '../player/PlayerForm';
import { Card, CardSection, Button } from '../common';

class RequestAccountForm extends Component {
    onButtonPress() {
        const { name, email, phone } = this.props;

        Communications
        .text('0401765747', `I am ${name}.
        Please create an account for me with email: ${email},
        and phone number: ${phone}. Thank you!`);        
    }

    render() {
        return (
            <Card>
                <PlayerForm />
                <CardSection>
                    <Button whenPressed={this.onButtonPress.bind(this)}>
                        Submit
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

export default connect(mapStateToProps, { playerUpdate })(RequestAccountForm);
