let count = 0;

document.onkeyup = function (e) {
    var evt = window.event || e;   
        if (evt.keyCode == 80 && evt.altKey) {
            var div = document.createElement("div");
            div.classList.add("draggable");
            div.classList.add("draggable-box");
            div.classList.add("latex-box");

            var s = document.createElement("span");

            s.id = "answer" + count.toString();

            // p.append(s);
            div.append(s);
            
            document.body.append(div);

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
                      var cx = e.pageX - initX,
                            cy = e.pageY - initY;
                      if (cx < 0) {
                        cx = 0;
                      }
                      if (cy < 0) {
                        cy = 0;
                      }
                      if (window.innerWidth - e.pageX + initX < width) {
                        cx = window.innerWidth - width;
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

            var answerSpan = document.getElementById('answer' + count.toString());
            var answerMathField = MQ.MathField(answerSpan, {
              handlers: {
                edit: function() {
                  var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
                //   checkAnswer(enteredMath);
                }
              }
            });

            count++;
        }
}