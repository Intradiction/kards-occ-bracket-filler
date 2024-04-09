import { Button } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#191A15";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let img = new Image();

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "bold 30px franklin gothic";
      ctx.fillText("SPOKER", 500, 327);
    }

    img.onerror = (err) => {
      console.log(err)
    }

    img.src = './emptyBracket.png';


  }, [])

  const copyImg = () => {
    var img = document.createElement('img');
    img.src = canvasRef.current.toDataURL()
    
    var div = document.createElement('div');
    div.contentEditable = true;
    div.appendChild(img);
    document.body.appendChild(div);
    
    // do copy
    SelectText(div);
    document.execCommand('Copy');
    document.body.removeChild(div);
  }

  function SelectText(element) {
    var doc = document;
    if (doc.body.createTextRange) {
      var range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    } else if (window.getSelection) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  return (
    <>
      <Button onClick={copyImg} variant="contained">Copy to Clipboard</Button>
      <canvas
        ref={canvasRef}
        height={window.innerHeight}
        width={window.innerWidth}
      />

    </>

  )
}
