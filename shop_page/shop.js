var inp_start = document.querySelector('.start_value'),
    inp_end = document.querySelector('.end_value'),
    range_start = document.querySelector('.start_value_range'),
    range_end = document.querySelector('.end_value_range');

    console.log(inp_start.value)
    

    var timer = setInterval(function() {
        inp_start.value = range_start.value
        inp_end.value = range_end.value
    },10)

