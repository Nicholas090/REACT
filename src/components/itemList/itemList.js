import React, {Component} from 'react';
import './itemList.css';


export default class ItemList extends Component {

    render() {
        // const ListGroup2 = styled.ul`
        
        // `
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
        );
    }
}