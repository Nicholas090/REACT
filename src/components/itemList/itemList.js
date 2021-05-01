import React, {Component} from 'react';
import styled from 'styled-components';
import Spiner from '../spiner';
import ErrorMessage from '../error/';


export default class ItemList extends Component {

    // gotService = new gotService();

    state = {
        itemList: null,
        error: false
    }

    componentDidMount(){
        const {getData} = this.props;

        getData()
        .then( (itemList) => {
            this.setState({
                itemList,
                error: false
            });
        })
        .catch(this.onCharError);
    }

    onCharError = () => {
        this.setState({
            char:null,
            error: true,
            loading: false
        })
    }

    componentDidCatch(){
        this.setState({
            error: true,
            itemList: null})
          
    }
   
    renderItems(arr) {
        return arr.map((item) => {
                const label = this.props.renderItem(item);

            const {id} = item
           return (
            <li 
                key={id}
                className="list-group-item"
                onClick={() => this.props.onItemSelected(id)}
                >
                {label}
            </li>
           )
        })
    }
    
    render() {
        const Ul = styled.ul`
            cursor: pointer;
        `
        
       
        const {itemList, error} = this.state

        if (!itemList) {
            return <Spiner/>
        }
         if (error){
            return <ErrorMessage/>
        }

        const items = this.renderItems(itemList)

        return (
            <Ul>
               {items}
            </Ul>
        );
    }
}