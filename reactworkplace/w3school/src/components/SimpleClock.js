/*
Follow [Canvas with React.js](https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258)
*/
import React, { useRef, useEffect } from 'react'

/*
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock() {
  ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
}
*/

const SimpleClock = props => {
  const canvasRef = useRef(null)

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return (
    <canvas ref = {canvasRef} {...props} />
  )
}

export default SimpleClock
