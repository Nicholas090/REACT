export default class GotService {
   constructor() {
       this._apiBase = 'https://www.anapioficeandfire.com/api';
   }
     getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`could not fetch ${url}, status ${res.status}`)
        }
    
            return await res.json();
    };
    getAllCharacters = async () => {
        const res = await this.getResource("/characters/?page=5&pageSize=10");
        return res.map(this._transformCharacter)
    }

     getCharacter = async (id) => {
            const character = await this.getResource(`/characters/${id}`);
            return this._transformCharacter(character);
        }

      getAllBooks = async () => {
            const res = await this.getResource('/books/');
            return res.map(this._transformBooks);
        }

      getBook = async (id) => {
            const book = await this.getResource(`/books/${id}`);
            return this._transformBooks(book);
        }

    
     getAllHouses = async () => {
        const res = await this.getResource('/houses/');
        return res.map(this._transformHouses);
    }
     getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouses(house);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _extraDate = (item) => {
        return item.match(/(\d{4}[./-]\d{2}[./-]\d{2})/g)
        
    }

    _transformCharacter = (char) => {
        return{      
            id: this._extractId(char),              
         name:  char.name !=='' ? char.name : 'No info' ,
        gender:  char.gender !=='' ? char.gender : 'No info',
        born:  char.born !=='' ? char.born : 'No info',
        died: char.died !=='' ? char.died : 'No info',
        culture: char.culture !=='' ? char.culture : 'No info' 
        }
    }

    _transformHouses = (house) => {
        return {
            id: this._extractId(house),        
            name: house.name !=='' ? house.name : 'No Info',
            region: house.region !=='' ? house.region : 'No Info',
            words: house.words !=='' ? house.words : 'No Info',
            titles: house.titles !=='' ? house.titles: 'No Info',
            coatOfArms: house.coatOfArms !=='' ? house.coatOfArms : 'No Info',
            overlord: house.overlord !=='' ? house.overlord : 'No Info',
        }
    }
    _transformBooks = (book) => {
        return {
            id: this._extractId(book),        
            name: book.name !=='' ? book.name : 'No Information',
            authors: book.authors !=='' ? book.authors : 'No Information',
            numberOfPages: book.numberOfPages !=='' ? book.numberOfPages : 'No Information',
            publiser: book.publiser !=='' ? book.publisher : 'No Information',
            released: book.released !=='' ? this._extraDate(book.released) : 'No Information'
 
        }
    }
} 
