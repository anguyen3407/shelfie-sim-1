import React, {Component} from 'react';
import '../../reset.css';
import '../../App.css'
import {Link} from 'react-router-dom';
// import {getShelf} from '../../services/userService'
import axios from 'axios';

export default class BinList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bins: [],
            id: ""
        }
        this.getShelf = this.getShelf.bind(this);
    }

    // setID(){
    //     this.setState({
    //         id: this.props.match.params.id,
    //     })
    // }

    
    getShelf() {
        console.log('fug dis')
        return axios.get(`http://localhost:3001/api/shelf/${this.props.match.params.id}`).then(res => {
            this.setState({
                bins: res.data,
            })
        }).catch(err => console.log(err));
    }

    componentDidMount(){
        // this.setID();
        this.getShelf();
    }

        render() {
            let bins = this.state.bins.map ((e,i) => {
                console.log(e);
                return <Link to={`/api/bin/${e.shelfletter+e.binnumber}`} key={i}>
                    <h3 className="shelf">BIN {e.binnumber}</h3>
                </Link>
            })

            return(
                <div>
                    <div className="papadiv">
                        <div className="header"></div>
                        {bins}
                    </div>
                </div>
            )
        }

}