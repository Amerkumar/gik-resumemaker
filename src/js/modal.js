import tingle from 'tingle.js';


// instanciate new modal
var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // first we get value from mail and mobile input and 
        // put into respective fields
        
        let email = document.querySelector("#mail").value;
        if (email != ""){
            document.querySelector("#emailContact").innerHTML = email;
        }
        

        let phone = document.querySelector("#mobile").value;
        if (phone != "") {
            document.querySelector("#mobileContact").innerHTML = phone;
        }
        
        

        // get dom element for contact wrapper
        let contactWrapper = document.querySelector("#dContactWrapper");
        // now for optional checkboxes 
        // first check for location checkbox
        if (document.querySelector('#locationCheckbox').checked == true) {
            //icon is hardcorded
            let icon = `<i class="fas fa-map-marker-alt"></i>`;
            if (document.querySelector("#locationItem") == null) {
                let content = document.querySelector("#location").value;
                if (content == ""){
                    alert("Input must be filled. Checkbox selected");
                    return false;
                }
                let div = document.createElement('div');
                div.id = "locationItem";
                div.className = 'level-item has-text-centered';
                div.innerHTML = addSocialMediaIntoDOM(icon,content);
                contactWrapper.appendChild(div);
            }
        } else {
            let locationItem = document.querySelector("#locationItem");
            if (locationItem != null)
                locationItem.parentElement.removeChild(locationItem);
        }

        if (document.querySelector('#linkedinCheckbox').checked == true) {
            //icon is hardcorded
            let icon = `<i class="fab fa-linkedin"></i>`;
            if (document.querySelector("#linkedinItem") == null) {
                let content = document.querySelector("#linkedin").value;
                if (content == ""){
                    alert("Input must be filled. Checkbox selected");
                    return false;
                }
                let div = document.createElement('div');
                div.id = "linkedinItem";
                div.className = 'level-item has-text-centered';
                div.innerHTML = addSocialMediaIntoDOM(icon,content);
                contactWrapper.appendChild(div);
            }
        } else {
            let linkedinItem = document.querySelector("#linkedinItem");
            if (linkedinItem != null)
                linkedinItem.parentElement.removeChild(linkedinItem);
        }
        if (document.querySelector('#skypeCheckbox').checked == true) {
            //icon is hardcorded
            let icon = `<i class="fab fa-skype"></i>`;
            if (document.querySelector("#skypeItem") == null) {
                let content = document.querySelector("#skype").value;
                if (content == ""){
                    alert("Input must be filled. Checkbox selected");
                    return false;
                }
                let div = document.createElement('div');
                div.id = "skypeItem";
                div.className = 'level-item has-text-centered';
                div.innerHTML = addSocialMediaIntoDOM(icon,content);
                contactWrapper.appendChild(div);
            }
        } else {
            let skypeItem = document.querySelector("#skypeItem");
            if (skypeItem != null)
                skypeItem.parentElement.removeChild(skypeItem);
        }
        // e.g. save content before closing the modal
        return true; // close the modal
    }
});

// set content
modal.setContent(`
                <div class="columns">
                    <div class="column">
                        <div class="columns">
                            <div class="column top-padding-30">
                                <i class="far fa-envelope is-size-4"></i>
                            </div>
                            <div class="column">
                                <input id="mail" class="input is-size-4 has-text-weight-semibold white-bottom-border is-inline" type="text" placeholder="amer.tanwani@gmail.com" required>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column top-padding-30">
                            <i class="fas fa-mobile-alt is-size-4"></i> 
                            </div>
                            <div class="column">
                                <input id="mobile" class="input is-size-4 has-text-weight-semibold white-bottom-border is-inline" type="text" placeholder="03123011155" required>
                                </div>
                            </div>
                    </div>
                    <div class="column">
                        <div class="columns">
                            <div class="column top-padding-30 is-2 is-offset-1">
                                <i class="fas fa-map-marker-alt is-size-4"></i>&nbsp;
                                <input id="locationCheckbox" class="is-size-4" type="checkbox">
                            </div>
                            <div class="column">
                                    <input id="location" class="input is-size-5 has-text-weight-normal is-inline white-bottom-border" type="text" placeholder="Islamabad,PK">
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column top-padding-30 is-2 is-offset-1">
                                <i class="fab fa-linkedin is-size-4"></i>&nbsp;
                                <input id="linkedinCheckbox" class="is-size-4" type="checkbox">
                            </div>
                            <div class="column">
                                 <input id="linkedin" class="input is-size-5 is-inline has-text-weight-normal white-bottom-border" type="text" placeholder="linked.com/in/amerkumar">
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column top-padding-30 is-2 is-offset-1">
                                <i class="fab fa-skype is-size-4"></i>&nbsp;
                                <input id="skypeCheckbox" class="is-size-4" type="checkbox">
                            </div>
                            <div class="column">       
                                    <input id="skype" class="input is-size-5 is-inline has-text-weight-normal white-bottom-border" type="text" placeholder="amer.kumar">
                            </div>
                        </div>
                    </div>
                </div>
                    
                    `);

// add a button
modal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});

function addSocialMediaIntoDOM(icon,content) {
    return `
        
            <div>
                <p class="is-size-7 has-text-weight-light">` + icon + `&nbsp;` + content + `</p> 
            </div>
       
    `;
}
// open modal
document.querySelector("#dContactWrapper").addEventListener("click", function() {
    modal.open();
});