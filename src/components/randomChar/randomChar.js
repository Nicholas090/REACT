import React, {Component} from 'react';
import styled from 'styled-components';
export default class RandomChar extends Component {

    render() {
        const Randomblock = styled.div`
         background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
 h4 {
    margin-bottom: 20px;
    text-align: center;
}

`
        const Term = styled.span`
         font-weight: bold;
        `
        const listUl = 'list-group list-group-flush';
        const listLi = 'list-group-item d-flex justify-content-between';
        return (
            <Randomblock className=" rounded">
                <h4>Random Character: John</h4>
                <ul className={listUl}>
                    <li className={listLi}>
                        <Term >Gender </Term>
                        <span>male</span>
                    </li>
                    <li className={listLi}>
                        <Term >Born </Term>
                        <span>11.03.1039</span>
                    </li>
                    <li className={listLi}>
                        <Term >Died </Term>
                        <span>13.09.1089</span>
                    </li>
                    <li className={listLi}>
                        <Term >Culture </Term>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </Randomblock>
        );
    }
}
