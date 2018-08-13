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
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
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
                                <input class="input is-size-4 has-text-weight-semibold white-bottom-border is-inline" type="text" placeholder="amer.tanwani@gmail.com">
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column top-padding-30">
                            <i class="fas fa-mobile-alt is-size-4"></i> 
                            </div>
                            <div class="column">
                                <input class="input is-size-4 has-text-weight-semibold white-bottom-border is-inline" type="text" placeholder="03123011155">
                                </div>
                            </div>
                    </div>
                    <div class="column">
                        <div class="columns">
                            <div class="column top-padding-30 is-2 is-offset-1">
                                <i class="fas fa-map-marker-alt is-size-4"></i>&nbsp;
                                <input class="is-size-4" type="checkbox">
                            </div>
                            <div class="column">
                                    <input class="input is-size-5 has-text-weight-normal is-inline white-bottom-border" type="text" placeholder="Islamabad,PK">
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column top-padding-30 is-2 is-offset-1">
                                <i class="fab fa-linkedin is-size-4"></i>&nbsp;
                                <input class="is-size-4" type="checkbox">
                            </div>
                            <div class="column">
                                 <input class="input is-size-5 is-inline has-text-weight-normal white-bottom-border" type="text" placeholder="linked.com/in/amerkumar">
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column top-padding-30 is-2 is-offset-1">
                                <i class="fab fa-skype is-size-4"></i>&nbsp;
                                <input class="is-size-4" type="checkbox">
                            </div>
                            <div class="column">       
                                    <input class="input is-size-5 is-inline has-text-weight-normal white-bottom-border" type="text" placeholder="amer.kumar">
                            </div>
                        </div>
                    </div>
                </div>
                    
                    `);

// add a button
modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});


// open modal
modal.open();
