import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spiner from '../spiner/index';
import ErrorMessage from '../error';

const Field = ({item, field, label}) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
        <span className="term">{label}</span>
        <span>{item[field]}</span>
    </li>
    )
}

export {
    Field
}; 

export default class ItemDetails extends Component {
    
    gotService = new gotService();
        state = {
             item: null,
             loading: true,
             error: false
                }
   

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    }

        onItemError = () => {
            this.setState({
                item:null,
                error: true,
                loading: false
            })
        }

    updateItem() {
        const {itemId, getData} = this.props;

        if (!itemId) {
            return;
        }

        this.setState({
            loading: true
        })

        getData(itemId)
        .then(this.onItemLoaded)
        .catch(this.onItemError);
    }
       
    
    componentDidCatch(){
        this.setState({
            error: true,
            item: null})
          
    }
   
    
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

    if (!this.state.item && this.state.error) {
        return <ErrorMessage/>
    } else if (!this.state.item) {
        return <Selecterror>Please select a character</Selecterror>
    }
    const {item} = this.state;
    const {name} = item;

    if (this.state.loading) {
        return (
            <Chardetails className="rounded">
                <Spiner/>
            </Chardetails>
        )
    }

    return (
        <Chardetails className="rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                    })
                }
            </ul>
        </Chardetails>
    );
}
}