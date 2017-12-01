import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playerUpdate, playerCreate, playerFormClear } from '../actions';
import { Card, CardSection, Button } from './common';
import PlayerForm from './PlayerForm';


class PlayerCreate extends Component {
    componentDidMount() {
        this.props.playerFormClear();
    }

    onButtonPress() {
        const { name, email, phone } = this.props;

        this.props.playerCreate({ name, email, phone });
    }

    render() {
        return (
            <Card>
                <PlayerForm {...this.props} />
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
    playerCreate,
    playerFormClear    
})(PlayerCreate);
