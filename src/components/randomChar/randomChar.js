import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spiner from '../spiner/index';
import ErrorMessage from '../error/';


export default class RandomChar extends Component {
    constructor() {
        super();
        this.updateChar();
     
    }
   gotService = new gotService();
        state = {
            char: {},
            loading: true,
            error: false
    }

    componentDidMount(){
        console.log('mounting');
    }

    componentWillUnmount(){
        console.log('unmounting');
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updateChar = () => {
       
        const id = Math.floor(Math.random()*140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }


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
    console.log('render');
    
        const {char, loading, error} = this.state;
        
     
        const errorMessage = error ? <ErrorMessage/> : null ;
        const spiner = loading ? <Spiner/>  : null;
        const content = !(loading || error)?  <View char={char}/>: null ;
        return (
            <Randomblock className=" rounded">
                {errorMessage}
                {spiner}
                {content}   
            </Randomblock>
        );
    }
}

const View = ({char}) => {
        const {name, gender, born, died, culture} = char;

       const Term = styled.span`
        font-weight: bold;
       `
       const listUl = 'list-group list-group-flush';
       const listLi = 'list-group-item d-flex justify-content-between';

    return (
        <>
           <h4>Random Character: {name}</h4>
                <ul className={listUl}>
                    <li className={listLi}>
                        <Term >Gender </Term>
                        <span>{gender}</span>
                    </li>
                    <li className={listLi}>
                        <Term >Born </Term>
                        <span>{born}</span>
                    </li>
                    <li className={listLi}>
                        <Term >Died </Term>
                        <span>{died}</span>
                    </li>
                    <li className={listLi}>
                        <Term >Culture </Term>
                        <span>{culture}</span>
                    </li>
                </ul>   
        </>
    )
}