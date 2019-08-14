import React, { Component } from 'react';

import CharacterBox from './character-box';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Allen Iverson',
        img: 'img/250x180/allen-iverson.png',
        clicked: false
    },
    {
        name: 'Blake Griffin',
        img: 'img/250x180/blake-griffin.png',
        clicked: false
    },
    {
        name: 'Carmelo Anthony',
        img: 'img/250x180/carmelo-anthony.png',
        clicked: false
    },
    {
        name: 'Derrick Rose',
        img: 'img/250x180/derrick-rose.png',
        clicked: false
    },
    {
        name: 'Kevin Durant',
        img: 'img/250x180/kevin-durant.png',
        clicked: false
    },
    {
        name: 'Kyrie Irving',
        img: 'img/250x180/kyrie-irving.png',
        clicked: false
    },
    {
        name: 'Lebron James',
        img: 'img/250x180/lebron-james.png',
        clicked: false
    },
    {
        name: 'Lonzo-Ball',
        img: 'img/250x180/lonzo-ball.png',
        clicked: false
    },
    {
        name: 'Russell Westbrook',
        img: 'img/250x180/russell-westbrook.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            
        }
        
    }

}
