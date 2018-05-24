import React from 'react'; 
import MyCard from './MyCard';

class CardList extends React.Component {
    constructor(){
        super();
        this.state = {
            my_list: ["Happy", "Sad"]
        }
        this.happyButtonClicked = this.happyButtonClicked.bind(this); 
        this.sadButtonClicked = this.sadButtonClicked.bind(this); 
    }

    happyButtonClicked(){
        this.setState({my_list: [...this.state.my_list, "Happy"] }); 
    }

    sadButtonClicked(){
        this.setState({my_list: [...this.state.my_list, "Sad"] }); 
    }

    render(){
        return (
            <div className="cardListComponent"> 
                <div className="cardList "> 
                    {this.state.my_list.map(function(listValue){
                        if(listValue == "Sad")
                            return <MyCard m_color="sad" m_mood={listValue}></MyCard>;
                        else 
                            return <MyCard m_color="happy" m_mood={listValue}></MyCard>; 
                    })}
                </div> 
                <div classname="my-button-row"> 
                    <button className="card-button" onClick={this.happyButtonClicked}> Happy </button> 
                    <button className="card-button sad-button" onClick={this.sadButtonClicked}> Sad </button> 
                </div>
           </div>
        )
    }
}

export default CardList; 