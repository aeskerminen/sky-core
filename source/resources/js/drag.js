document.querySelectorAll(".draggable").forEach(div => {
    div.onmousedown = function(e) {
        var isMouseDown, initX, initY, height = div.offsetHeight, width = div.offsetWidth;
        document.querySelectorAll('.draggable').forEach(div => div.style.zIndex = 0);
        div.style.zIndex = 1;

        initX = e.offsetX;
        initY = e.offsetY;
        isMouseDown = true;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e){
            if (isMouseDown) {
              var cx = e.clientX - initX,
                    cy = e.clientY - initY;
              if (cx < 0) {
                cx = 0;
              }
              if (cy < 0) {
                cy = 0;
              }
              if (window.innerWidth - e.clientX + initX < width) {
                cx = window.innerWidth - width;
              }
              if (e.clientY > window.innerHeight - height+ initY) {
                cy = window.innerHeight - height;
              }
              div.style.left = cx + 'px';
              div.style.top = cy + 'px';
            }
        }

        function mouseup(){
            isMouseDown = false;
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
        }
    }
})
