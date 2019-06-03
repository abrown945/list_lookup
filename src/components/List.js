import './List.css';
import React from 'react';
import ListItem from './ListItem';
import ListOutput from './ListOutput'

class List extends React.Component {
    state = {
        person: [
            {id:'hsdkfa', name: 'Ash', occupation: 'Trainer', birthday: '2/01', selected: false},
            {id:'ljhkj', name: 'Lucio', occupation: 'Musician', birthday: '5/06', selected: false},
            {id:'oiuytg', name: 'Shrek', occupation: 'King', birthday: '7/17', selected: false},
            {id:'qwedf', name: 'Miss Piggy', occupation: 'Actress', birthday: '8/08', selected: false},
            {id:'poiujhn', name: 'Mulan', occupation: 'Warrior', birthday: '12/24', selected: false},
            {id:'ujhgh', name: 'Murphy', occupation: 'Companion', birthday: '4/17', selected: false},
            {id:'bjkil,mnh', name: 'Jessica', occupation: 'Programmer', birthday: '8/14', selected: false},
            {id:'zxcghnm', name: 'Merlin', occupation: 'Wizard', birthday: '1/31', selected: false}
        ],
        personPassed:
            { name: "Ash", occupation: "Trainer", birthday: "2/01"}
    }

    loadPersonInfo = (id) => {
        const personIndex = this.state.person.findIndex( p => {
            return p.id === id;
        });

        const selectedPerson = {
            ...this.state.person[personIndex]
        };

        const personUpdate = this.state.person.map(person => {
            // console.log(person.selected);
            if (person.id === id) return { ...person, selected: !person.selected };
            return person;
        });

        this.setState({ 
            personPassed: selectedPerson,
            person: personUpdate
         });
    }

    render() {

        const people = 
            <div className="card-content">
            {this.state.person.map((person, index) => {
                return <ListItem 
                        selectedStyle={this.state.selected}
                        name={person.name}
                        key={person.id} 
                        click={() => this.loadPersonInfo(person.id)} />                        
            })} 
        </div>

        
        let selected =  <ListOutput 
                    name={this.state.personPassed.name}
                    birthday={this.state.personPassed.birthday}
                    occupation={this.state.personPassed.occupation}
                />

        return (
            <section className="section">
                <div className="columns is-mobile">
                    <div className="column is-half">
                        <div className="card">
                            {people}
                        </div>
                    </div>
                    <div className="column is-half">
                        {selected}
                    </div>
                </div>
            </section>           
        );
    }
}

export default List;