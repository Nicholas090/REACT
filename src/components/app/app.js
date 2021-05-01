import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../error';
import CharacterPage from '../pages/characterPage';
import gotService from '../../services/gotService';
import {BooksPage, BooksItem} from '../pages/booksPage';
import HousesPage from '../pages/housesPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import styled from 'styled-components';

export default class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            display: true,
            error: false,
            
        }
        
    }
   
    gotService = new gotService();

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    changeDisplay() {
        this.setState(prevState => ({
            display: !prevState.display
          }));
       
    };

  


    render(){
        const Body = styled.div`
                background: url('/img/got.jpeg') center center no-repeat;
                background-size: cover;
                height: 1000px;	
        `
        const {display}= this.state
        const Char = display ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
    <Router>
        <Body> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                          {Char}
                            <Button color="primary" onClick={this.changeDisplay.bind(this)}>Click me</Button>
                        </Col>
                    </Row>
                    <Route path='/characters'  component={CharacterPage}/>                 
                    <Route path='/houses'  component={HousesPage}/>
                    <Route path='/books' exact component={BooksPage}/>
                    <Route path='/books/:id' render={
                        ({match}) => {
                            const {id}= match.params;
                        return <BooksItem bookId={id}/>}
                    }/>
                </Container>
               
            </Body>
    </Router>
        );
    }

  
};

 