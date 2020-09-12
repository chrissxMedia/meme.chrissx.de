'use strict';

function make() {
        var output = document.getElementById('output');
        var inputFile = document.getElementById('rawimage').files[0];
        var upper = document.getElementById('upper').value.toUpperCase();
        var lower = document.getElementById('lower').value.toUpperCase();
        var reader = new FileReader();
        reader.onload = function() {
                var dataURL = reader.result;
                var src = new Image();
                src.src = dataURL;
                src.decode().then(function() {
                        output.setAttribute('width', src.width);
                        output.setAttribute('height', src.height);
                        var ctx = output.getContext('2d');
                        ctx.drawImage(src, 0, 0);
                        ctx.font = '60px mimpact';
                        ctx.textAlign = 'center';
                        ctx.shadowColor = 'white';
                        ctx.shadowOffsetX = -5;
                        ctx.shadowOffsetY = -5;
                        ctx.fillText(upper, src.width / 2, 50);
                        ctx.fillText(lower, src.width / 2, src.height - 20);
                        ctx.shadowOffsetX = 5;
                        ctx.fillText(upper, src.width / 2, 50);
                        ctx.fillText(lower, src.width / 2, src.height - 20);
                        ctx.shadowOffsetX = -5;
                        ctx.shadowOffsetY = 5;
                        ctx.fillText(upper, src.width / 2, 50);
                        ctx.fillText(lower, src.width / 2, src.height - 20);
                        ctx.shadowOffsetX = 5;
                        ctx.fillText(upper, src.width / 2, 50);
                        ctx.fillText(lower, src.width / 2, src.height - 20);
                });
        };
        if(inputFile) {
                reader.readAsDataURL(inputFile);
        }
}
