require('./css/mystyle.scss');
require('./js/popover');
require('./js/modal');

// code for generating pdf
function genPdf() {
    html2canvas(document.getElementById("cv-wrapper")).then(function(canvas) {
        
        var img = canvas.toDataURL("image/png");
        var doc = new jsPDF('p', 'mm', "a4");
        var width = doc.internal.pageSize.width;    
        var height = doc.internal.pageSize.height; 
         
        doc.addImage(img, 'JPEG', 0, 0, width, height);
        // change the file name to something dynamic -- replace it with reg #
        filename = document.querySelector("#filename").value;
        if (filename == "")
          filename = "gik_resumeMaker.pdf";
        doc.save(filename + '.pdf'); 
    });    
}

// function saveAs(uri, filename) {
//     var link = document.createElement('a');
//     if (typeof link.download === 'string') {
//       link.href = uri;
//       link.download = filename;

//       //Firefox requires the link to be in the body
//       document.body.appendChild(link);

//       //simulate click
//       link.click();

//       //remove the link when done
//       document.body.removeChild(link);
//     } else {
//       window.open(uri);
//     }
//   }

document.getElementById("download").onclick = genPdf;