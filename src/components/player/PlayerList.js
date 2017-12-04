import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from '../common';
import { playersFetch } from '../../actions';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {

    componentWillMount() {
        this.props.playersFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    onButtonPress() {
        Actions.playerCreate();
    }

    createDataSource({ players }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(players);
    }

    renderRow(player) {
        return <PlayerListItem player={player} />;
    }

    render() {
        console.log(this.props);
        return (
            <Card>            
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <CardSection>
                    <Button whenPressed={this.onButtonPress.bind(this)}>
                        Add a Player
                    </Button> 
                </CardSection>                              
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const players = _.map(state.players, (val, uid) => {
        return { ...val, uid };
    });

    return { players };
};

export default connect(mapStateToProps, { playersFetch })(PlayerList);
