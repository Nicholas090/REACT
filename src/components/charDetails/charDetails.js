import React, {Component} from 'react';
import styled from 'styled-components';

export default class CharDetails extends Component {
    render() {
        const Chardetails = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
 h4 {
    margin-bottom: 20px;
    text-align: center;
}  
        `
        const Selecterror = styled.div`
         color: #fff;
    text-align: center;
    font-size: 26px;
        `
       const listUl = 'list-group list-group-flush';
       const listLi = 'list-group-item d-flex justify-content-between';

        return (
            <Chardetails className="rounded">
                <h4>John Snow</h4>
                <ul className={listUl}>
                    <li className={listLi}>
                        <span className="term">Gender</span>
                        <span>male</span>
                    </li>
                    <li className={listLi}>
                        <span className="term">Born</span>
                        <span>1783</span>
                    </li>
                    <li className={listLi}>
                        <span className="term">Died</span>
                        <span>1820</span>
                    </li>
                    <li className={listLi}>
                        <span className="term">Culture</span>
                        <span>First</span>
                    </li>
                </ul>
            </Chardetails>
        );
    }
}