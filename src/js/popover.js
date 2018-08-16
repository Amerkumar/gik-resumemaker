/*
    This file adds popover of addition button to all elements.
*/

// This code adds addition popover such as popover for add education, add work etc.

// in the sections first items is popover holder and other is popover while each element is each section in cv
var sections = [
                ['#hEducationPopoverHolder', '#dEducationPopover'],
                ['#hWorkExperiencePopoverHolder', '#dWorkExperiencePopover'],
                ['#hAcademicProjectsPopoverHolder', '#dAcademicProjectsPopover'],
                ['#hAchievementPopoverHolder', '#dAchievementPopover'],
                ['#hSkillsPopoverHolder', '#dSkillsPopover'],
                ['#hInterestPopoverHolder', '#dInterestPopover']
               ];
for (let i = 0; i < sections.length; i++) {
    tippy(sections[i][0], {
        html: sections[i][1],
        delay: 100,
        size: 'large',
        duration: 500,
        animation: 'scale',
        interactive: true,
    });
}

// now we have to add functions for each section

require('./sectionAddRemoveLogic');




  
  