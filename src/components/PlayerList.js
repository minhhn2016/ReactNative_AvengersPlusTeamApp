import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { playersFetch } from '../actions';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {
    componentWillMount() {
        this.props.playersFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
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
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
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
