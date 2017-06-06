'use strict';

(function() {

    $(document).ready(function() {

        $('a').on('click', function(e){
            e.preventDefault();
        });

        //---------------------------------- Priority nav test

        $('.o-nav-local').prioritynav();
        $('.nav-tabs').prioritynav();
        $('.nav-pills').prioritynav();
        $('.navbar').prioritynav();

        //----------------- Priority nav test end

    });
})();

