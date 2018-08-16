// general toggle func in which class in second parameter is toggled
// toggleFunc(domElement, classToCheck)
function toggleFunc() {
    var classToCheck = 'is-active';
    if (this.classList.contains(classToCheck) == false) {
             this.classList.add('is-active');
    } else {
        this.classList.remove('is-active');
    }
}

$(document).on('click', '#dFacultySelectDropDown', toggleFunc);
