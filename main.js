function make() {
        var canvas = document.getElementById('canvas');
        var imgout = document.getElementById('out');
        var inputFile = document.getElementById('rawimage').files[0];
        var upper = document.getElementById('upper').value.toUpperCase();
        var lower = document.getElementById('lower').value.toUpperCase();
        var reader = new FileReader();
        reader.onload = async function() {
                var dataURL = reader.result;
                var src = new Image();
                src.src = dataURL;
                await src.decode();

                canvas.setAttribute('width', src.width);
                canvas.setAttribute('height', src.height);
                var ctx = canvas.getContext('2d');

                ctx.drawImage(src, 0, 0);
                ctx.font = '60px Impact';
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

                imgout.src = canvas.toDataURL();
                canvas.width = canvas.height = 0;
        };
        if(inputFile) {
                reader.readAsDataURL(inputFile);
        }
}
