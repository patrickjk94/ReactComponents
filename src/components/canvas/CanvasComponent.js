import React from 'react'; 

export default class CanvasComponent extends React.Component {

    constructor(){
        super(); 
        this.getRandomInt = this.getRandomInt.bind(this); 
        this.createCactus = this.createCactus.bind(this); 
    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        let canvas = document.getElementById('mood-canvas');
        
        if(this.refs.canvas != null) {
            //This code is so that the canvas doens't get streched out 
            this.refs.canvas.setAttribute('width', '' + this.props.canvasDimensions.width);
            this.refs.canvas.setAttribute('height', '' + this.props.canvasDimensions.height);        
        }
        
        let cacti = []; 
        for(let x = 3; x>0; x-- ) {
            cacti.push(this.createCactus()); 
        }

        console.log(cacti); 
        
        let y = 0; 
        for (let cactus of cacti) {
            this.drawCactus(cactus, 1); 
        }
          
    }    

    drawCactus(cactus, level) {
        const ctx = this.refs.canvas.getContext('2d');            

        //Get the view width and height 
        let vw = this.props.canvasDimensions.width;  //view height 
        let vh = this.props.canvasDimensions.height; //view width 

        //Set the cactus height based on cactus min-height and max-height and viewport 
        let ch = 0; 
        if(level == 1)
            ch = cactus.min_height/9 * vh; 
        else 
            ch = ((( cactus.max_height - cactus.min_height ) * level/9) + cactus.min_height/9) * vh; 

        //Set the cactus width based on cactus min-width and max-width and viewport 
        let cw = 0; 
        if(level == 1)
            cw = cactus.min_width/12 * vw; 
        else 
            cw = ((( cactus.max_width - cactus.min_width ) * level/9) + cactus.min_width/9) * vh; 

        //Set the cactus x-position 
        let x = parseInt( (cactus.x_pos/20) * vw); 
        let y = parseInt(vh - ch) + 0.50; 

        console.log("ch: " + ch); console.log("cw: " + cw); console.log("x: " + x); console.log("y:" + y);  


        /** Set the color of the stroke **/
        ctx.strokeStyle = "#237543";
        ctx.fillStyle = "#237543";

        //Make the arc
        ctx.beginPath();
        ctx.arc((x + cw/2), y, cw/2 - 1, 0, Math.PI , true); // Outer circle
        ctx.lineTo(x, y);
        ctx.closePath();    
        ctx.fill();

        ctx.fillRect(x, y, cw, ch);
        ctx.stroke();       
        ctx.closePath(); 

        //draw the highlighting 
        ctx.fillStyle = "#2F7F4F";        
        ctx.strokeStyle = "#2F7F4F";

        let hw = cw/18; 
        let hx_pos = parseInt(x + hw/2); 
        ctx.fillRect( hx_pos + 0  * hw, y, hw  , ch );
        ctx.fillRect( hx_pos + 3  * hw, y, hw*2, ch );
        ctx.fillRect( hx_pos + 7  * hw, y, hw*3, ch );
        ctx.fillRect( hx_pos + 12  * hw, y, hw*2, ch );
        ctx.fillRect( hx_pos + 16 * hw, y, hw  , ch );

    }


    render() {
        return (
            <canvas ref={this.refCallback} className="mood-canvas" ref="canvas" />
        );
    }

    getRandomInt(max) {
        return Math.random() * Math.floor(max); 
      }
            

    createCactus() {
        let cactus = {
            x_pos: 0, 
            min_width: 0, 
            max_height: 0, 
            min_height: 0, 
            max_height: 0
        };

        cactus.x_pos = Math.floor(this.getRandomInt(20)); 

        cactus.min_width = 1 + this.getRandomInt(2); 
        while(cactus.max_width < cactus.min_width) { 
            cactus.max_width = this.getRandomInt(4); 
        }

        cactus.min_height = this.getRandomInt(3); 
        while(cactus.max_height < cactus.min_height) { 
            cactus.max_height = this.getRandomInt(8); 
        }

        return cactus; 
    /*
        How the cactus will grow 

        cactus : {
            min_width: rand(1-2) / 10
            max_width:  rand(1-4) / 10
            min_height: rand(1 - 3) / 9 
            max_height: rand(2 - 8) / 9 
        }

        if(level == 1)
            width = min_width; 
        else 
            width = min_width + ((max_level - min_width) * level))/max_level

        note: max_level = 8 and same rules for height
    */
    }
}

/** 
 * Sources: 
 * for getting the height and width of parent element: 
 *     https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
 * for not stretching out the x-axis and y-axis of canvas 
 *     https://stackoverflow.com/questions/2588181/canvas-is-stretched-when-using-css-but-normal-with-width-height-properties
 */