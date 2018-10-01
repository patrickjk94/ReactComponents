import React from 'react'; 

export default class CanvasComponent extends React.Component {

    constructor(){
        super(); 
    }

    componentDidMount() {
        this.updateCanvas();

    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0, 0, this.props.dimensions.height, this.props.dimensions.width);
    }    

    render() {
        return (
            <canvas ref={this.refCallback} className="mood-canvas" ref="canvas" />
        );
    }
}

/** 
 * Sources: 
 * for getting the height and width of parent element: 
 *     https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
 * 
 * 
 */