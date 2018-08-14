// Date and Range Picker
function dateRangePicker() {
    console.log("Date and Range picker");
    $('input[name="daterange"]').daterangepicker({
        "showDropdowns": true,
        locale: {
            cancelLabel: 'Clear'
        }
    });
}