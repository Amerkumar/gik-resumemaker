require('./css/mystyle.scss');
require('./js/popover.js')

function genPdf() {
    html2canvas(document.getElementById("cv-wrapper")).then(function(canvas) {
        
        var img = canvas.toDataURL("image/png");
        var doc = new jsPDF('p', 'mm', "a4");
        var width = doc.internal.pageSize.width;    
        var height = doc.internal.pageSize.height; 
         
        doc.addImage(img, 'JPEG', 0, 0, width, height);
        // change the file name to something dynamic -- replace it with reg #
        doc.save('test.pdf'); 
        // saveAs(canvas.toDataURL(), 'canvas.png');

    });    
}

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

document.getElementById("download").onclick = genPdf;

// Date and Range Picker
$(function() {
    $('input[name="daterange"]').daterangepicker({
        "showDropdowns": true,
        locale: {
            cancelLabel: 'Clear'
        }
    });

  });

// document.getElementById("pdfDownload").addEventListener("click", genPdf);

// Education Popover 
tippy('#hEducationPopoverHolder', {
    html: '#dEducationPopover',
    delay: 100,
    size: 'large',
    duration: 500,
    animation: 'scale',
    interactive: true,
});

// add education function
let i = 1;
function addEducation() {
    console.log("Add Education");
    var div = document.getElementById('dEducationSection'),
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = "dEducationSection-" + i;
    document.getElementById('dEducationWrapper').appendChild(clone);
    i++;
}
console.log("listener");
// document.getElementById("baddeducation").onclick = addEducation;
$(document).on('click', '#bAddEducation', addEducation);