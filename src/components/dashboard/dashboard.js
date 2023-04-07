import React, { Component } from 'react';
import './dashboard.css';
import {Apps} from '../data/util/dashboard';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            apps: {}
        };
    }
    componentWillMount() {
        this.setState({
            apps: Apps
        });
    }

    render() {
        return (
            <div>
                <div class="cards-list">
                    {Object.keys(this.state.apps).map((key) => (
                        <Card key={key} index={key} details={this.state.apps[key]} />
                    ))}
                </div>
            </div>

        );
    }
}
class Card extends React.Component {
    render() {
      return (
        <div className={this.props.details.id}>
        <div class="card_image"> <img src={this.props.details.image} alt=""/> </div>
        <div class="card_title title-white">
            <p>{this.props.details.title}</p>
        </div>
    </div>
      )
    }
  }


export default Main;