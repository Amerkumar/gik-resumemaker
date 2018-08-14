
function dateRangePicker() {
    $('input[name="daterange"]').daterangepicker({
        "showDropdowns": true,
        locale: {
            cancelLabel: 'Clear'
        }
    });
}

// to intialize already present dates
dateRangePicker();

let eduSecCount = 1;

// function for adding education section
function addEducation() {
    var div = document.querySelector('#dEducationSection');
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = "dEducationSection-" + eduSecCount;
    // console.log(clone.childNodes);
    clone.childNodes[7].id = 'dDeletePopoverEducation-' + eduSecCount;
    clone.childNodes[7].childNodes[1].id = "dDeletePopoverButtonEducation-" + eduSecCount;
    document.querySelector('#dEducationWrapper').appendChild(clone);
    addDeletePopover('#dEducationSection-' + eduSecCount,
        '#dDeletePopoverEducation-' + eduSecCount,
        "#dDeletePopoverButtonEducation-" + eduSecCount);
    // we need to call this every time to make date and range picker responsive
    //  for new added sections
    dateRangePicker();
    eduSecCount++;
}
// Bind event to add education button
$(document).on('click', '#bAddEducation', addEducation);


let workSecCount = 1;

// function for adding work section
function addWorkExperience() {
    var div = document.querySelector('#dWorkExperienceSection');
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = "dWorkExperienceSection-" + workSecCount;
    console.log(clone.childNodes);
    clone.childNodes[11].id = 'dDeletePopoverWorkExperience-' + workSecCount;
    clone.childNodes[11].childNodes[1].id = "dDeletePopoverButtonWorkExperience-" + workSecCount;
    document.querySelector('#dWorkExperienceWrapper').appendChild(clone);
    addDeletePopover('#dWorkExperienceSection-' + workSecCount,
        '#dDeletePopoverWorkExperience-' + workSecCount,
        "#dDeletePopoverButtonWorkExperience-" + workSecCount);
     // we need to call this every time to make date and range picker responsive
    //  for new added sections
    dateRangePicker();    
    workSecCount++;
}
// Bind event to add education button
$(document).on('click', '#bAddWorkExperience', addWorkExperience);



let projSecCount = 1;

// function for adding academic project section
function addAcademicProjects() {
    var div = document.querySelector('#dAcademicProjectsSection');
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = "dAcademicProjectsSection-" + projSecCount;
    // console.log(clone.childNodes);
    clone.childNodes[11].id = 'dDeletePopoverAcademicProjects-' + projSecCount;
    clone.childNodes[11].childNodes[1].id = "dDeletePopoverButtonAcademicProjects-" + projSecCount;
    document.querySelector('#dAcademicProjectsWrapper').appendChild(clone);
    addDeletePopover('#dAcademicProjectsSection-' + projSecCount,
        '#dDeletePopoverAcademicProjects-' + projSecCount,
        "#dDeletePopoverButtonAcademicProjects-" + projSecCount);
     // we need to call this every time to make date and range picker responsive
    //  for new added sections
    dateRangePicker();    
    projSecCount++;
}
// Bind event to add education button
$(document).on('click', '#bAddAcademicProjects', addAcademicProjects);


let achSecCount = 1;

// function for adding achievement section
function addAchievement() {
    var div = document.querySelector('#dAchievementSection');
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = "dAchievementSection-" + achSecCount;
    // console.log(clone.childNodes);
    clone.childNodes[11].id = 'dDeletePopoverAchievement-' + achSecCount;
    clone.childNodes[11].childNodes[1].id = "dDeletePopoverButtonAchievement-" + achSecCount;
    document.querySelector('#dAchievementWrapper').appendChild(clone);
    addDeletePopover('#dAchievementSection-' + achSecCount,
        '#dDeletePopoverAchievement-' + achSecCount,
        "#dDeletePopoverButtonAchievement-" + achSecCount);
     // we need to call this every time to make date and range picker responsive
    //  for new added sections
    dateRangePicker();    
    achSecCount++;
}
// Bind event to add education button
$(document).on('click', '#bAddAchievement', addAchievement);



let skillSecCount = 1;

// function for adding Skills section
function addSkills() {
    var div = document.querySelector('#dSkillsSection');
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = "dSkillsSection-" + skillSecCount;
    // console.log(clone.childNodes);
    clone.childNodes[5].id = 'dDeletePopoverSkills-' + skillSecCount;
    clone.childNodes[5].childNodes[1].id = "dDeletePopoverButtonSkills-" + skillSecCount;
    document.querySelector('#dSkillsWrapper').appendChild(clone);
    addDeletePopover('#dSkillsSection-' + skillSecCount,
        '#dDeletePopoverSkills-' + skillSecCount,
        "#dDeletePopoverButtonSkills-" + skillSecCount);
     // we need to call this every time to make date and range picker responsive
    //  for new added sections
    dateRangePicker();    
    achSecCount++;
}
// Bind event to add education button
$(document).on('click', '#bAddSkills', addSkills);




function addDeletePopover(holderId, templateId, deletePopoverButtonId) {
    console.log(holderId);
    console.log(templateId);
    tippy(holderId, {
        html: templateId,
        position: 'left',
        arrow: true,
        delay: 100,
        size: 'large',
        duration: 500,
        animation: 'scale',
        interactive: true,
    });

    $(document).on('click', deletePopoverButtonId, removeElement);

}

function removeElement() {
    // Removes an element from the document
    var elementId = this.getAttribute('id');
    var temp = elementId.split('Button');
    var result = temp[1].split('-');
    var secName = result[0];
    var secNumber = result[1];
    var dSECTION = "#d" + secName + "Section-" + parseInt(secNumber);
    let deleteNode = document.querySelector(dSECTION);
    clearInner(deleteNode);
    // console.log(deleteNode.parentNode.removeChild(deleteNode));
    deleteNode.parentNode.removeChild(deleteNode);
}

function clearInner(node) {
    while (node.hasChildNodes()) {
      clear(node.firstChild);
    }
  }
  
  function clear(node) {
    while (node.hasChildNodes()) {
      clear(node.firstChild);
    }
    node.parentNode.removeChild(node);
    // console.log(node, "cleared!");
  }