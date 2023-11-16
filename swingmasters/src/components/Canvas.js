import {useEffect, useRef} from 'react'
import Game from './Game';

const Canvas = props => {
    const ref=useRef();
    
    useEffect(() => {
      const canvas = document.querySelector("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 600;
      canvas.height = 600;

      const game = new Game(canvas. ctx);

      function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        game.draw(context);
        requestAnimationFrame(animate);
      } 

      animate();
    }, []);

    return <canvas ref={ref} {...props}/>
}

export default Canvas;