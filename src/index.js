require('./css/mystyle.scss');
require('./js/popover');
require('./js/modal');
import html2pdf from 'html2pdf.js';

// code for generating pdf
function genPdf() {
    
    var filename = document.querySelector("#filename").value;
        if (filename == "")
          filename = "resume.pdf";
    var element = document.querySelector('#cv-wrapper');
    var opt = {
        filename:     filename,
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      
      // New Promise-based usage:
      html2pdf().from(element).set(opt).save();    
}



document.querySelector("#download").onclick = genPdf;

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
