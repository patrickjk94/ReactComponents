import React from 'react'; 

import './MoodTracker.css';
import CanvasComponent from '../canvas/CanvasComponent'; 

export default class MoodTracker extends React.Component {

    state = {
        canvasDimensions: null,
    };

    constructor() {
        super(); 
    }

    componentDidMount() {
        this.setState({
            canvasDimensions: {
              width: this.container.offsetWidth,
              height: this.container.offsetHeight,
            }
          });
    }    

    renderCanvas() {
        const { canvasDimensions } = this.state;

        return (
            <CanvasComponent canvasDimensions={canvasDimensions} className="cactusCanvas"></CanvasComponent> 
        );
    }

    render(){
        const { canvasDimensions } = this.state;

        return (
            <React.Fragment>
                {/** Header **/}
                <div className="mood-header">Mood Tracker</div>
                <div className="mood-container"> 
                    <div className="mood-content">
                        <div className="my-button-row">
                            <button className="mood-button mood-happy-button"> 6 </button>
                            <button className="mood-button mood-happy-button"> 7 </button> 
                            <button className="mood-button mood-happy-button"> 8 </button> 
                            <button className="mood-button mood-happy-button"> 9 </button> 
                            <button className="mood-button mood-happy-button"> 10 </button> 
                        </div>
                        <div className="my-button-row">
                            <button className="mood-button mood-sad-button" > 1 </button>
                            <button className="mood-button mood-sad-button" > 2 </button>
                            <button className="mood-button mood-sad-button" > 3 </button>
                            <button className="mood-button mood-sad-button" > 4 </button>
                            <button className="mood-button mood-sad-button" > 5 </button>
                        </div>
                    </div>
                    <div className="canvas_component_div" ref={el => (this.container = el)} > 
                        {canvasDimensions && this.renderCanvas()}
                    </div> 
                </div> 
                {/* <button className="mood-results-button"> View Graph </button>  */}
            </React.Fragment> 
        )
    }
}

/** 
 * Sources: 
 * For finding the height and width of parent element: 
 *     https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
 * 
 */