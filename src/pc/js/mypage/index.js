var itemJs = require('./_items');
$(document).ready(function () {


    if ($('ul#tabClip').length) {
        itemJs($('ul#tabClip li.clip'));
    }


});