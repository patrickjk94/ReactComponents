import React from 'react'; 
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import { Button, ListGroupItem } from 'react-bootstrap'; 

const SortableItem = SortableElement(({value, toggleValue, deleteValue}) =>
      /* // onClick={ onClick }
      // style={ { textDecoration: completed ? 'line-through' : 'none'} } */
  <ListGroupItem className="todo_element" > 
    <Button bsStyle="link" onClick={toggleValue} style={{float: "right", height: "2.0em"}}>
      <i className="fas fa-plus-circle"></i>
    </Button>  
    {value} 
    <Button bsStyle="link" onClick={deleteValue} style={{float: "right", height: "2.0em"}}>
      <i className="fas fa-minus-circle"></i>
    </Button>  
  </ListGroupItem> 
);

const SortableList = SortableContainer(({items, toggleValue, deleteValue}) => {
  return (
    <div className="listContainer">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} toggleValue={toggleValue} deleteValue={deleteValue}/>
      ))}
    </div>
  );
});

export default class SortableComponent extends React.Component {

  constructor(props){
    super();  
    if(props.items != undefined) {
      this.state = {
        items: props.items
      }
    }
    else {
      this.state = {
        items: ["Item 1", "Item 2", "Item 3", "Item 4"]
      }
    }
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  deleteValue(){
    console.log("deleting value!!"); 
  }

  toggleValue(){
    console.log("toggling value!!"); 
  }

  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} deleteValue={this.deleteValue} toggleValue={this.toggleValue}/>;
  }
}

// render(<SortableComponent/>, document.getElementById('root'));
