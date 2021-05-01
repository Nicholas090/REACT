import React, {Component} from 'react';
import gotService from '../../../services/gotService';
import ItemDetails , {Field} from '../../itemDetails';

export default class BooksItem extends Component {
    gotService = new gotService();

    state = {
        error: false
    }
    render(){
        return(
            <ItemDetails itemId={this.props.bookId} getData={this.gotService.getBook}>
            <Field field='authors' label='Authors' />
            <Field field='numberOfPages' label='NumberOfPages' />
            <Field field='publiser' label='Publiser' />
            <Field field='released' label='Released' />
        </ItemDetails>
        )
    }
}
