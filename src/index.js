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



document.getElementById("download").onclick = genPdf;

// Truncate text in objective -- could be used to limit any tag

function truncateText(selector, maxLength) {
    var element = document.querySelector(selector),
        truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}
//You can then call the function with something like what i have below.
function limitObjective() {
    document.querySelector('#objective').innerText = truncateText('#objective', 180);
}
// document.querySelector('#objective').addEventListener('keypress', limitObjective);