function make() {
        const canvas = document.getElementById('canvas')!;
        const imgout = document.getElementById('out')!;
        const inputFile = document.getElementById('rawimage').files[0];
        const upper = document.getElementById('upper').value.toUpperCase();
        const lower = document.getElementById('lower').value.toUpperCase();
        const reader = new FileReader();
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
                ctx.strokeStyle = 'white';

                ctx.lineWidth = 10;
                ctx.strokeText(upper, src.width / 2, 50);
                ctx.strokeText(lower, src.width / 2, src.height - 20);
                ctx.lineWidth = 1;
                ctx.fillText(upper, src.width / 2, 50);
                ctx.fillText(lower, src.width / 2, src.height - 20);

                imgout.src = canvas.toDataURL();
                canvas.width = canvas.height = 0;
        };
        if(inputFile) {
                reader.readAsDataURL(inputFile);
        }
}
