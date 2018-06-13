import React from 'react'; 
import './DragNDropComponent.css'; 

export default class DragNDropComponent extends React.Component {
    state = {
        tasks: [
            {name:"item 1",category:"wip", bgcolor: "yellow"},
            {name:"item 2", category:"wip", bgcolor:"pink"},
            {name:"item 3", category:"complete", bgcolor:"skyblue"}
          ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {/**t.name**/ }
                </div>
            );
        });

        return (
            <div> 
                <h2 className="DND-header"> DRAG N DROP </h2>
                <div className="container-drag-drop">
                    <div className="container-drag"
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>{this.onDrop(e, "wip")}}>
                        <span className="task-header">STAGE 1</span>
                        {tasks.wip}
                    </div>
                    <div className="container-drop" 
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDrop(e, "complete")}>
                        <span className="task-header">STAGE 2</span>
                        {tasks.complete}
                    </div> 
                </div>
            </div> 
        );
    }
}
