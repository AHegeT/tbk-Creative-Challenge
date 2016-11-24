        // Set timeout variable to show modal after [seconds] * [milliseconds]
        var timeout = 3 * 100;
        
        // Bind elements that will be animated
        var $shaving = $('.js-shaving');
        var $chisel = $('.js-chisel');
        
        // Bind modal to a variable to check for scroll
        var $modal = $('#subscribeModal');
        
        // Check if the modal has been dismissed previously, show if false
        if(localStorage.getItem('dismissed') == 'true') {
            setTimeout(function() {
                $modal.modal('show');
            }, timeout);
        }
        
        // Register modal-dismissal event, flag the event in the browser
        $('.modal-header .close').on('click', function() {
            localStorage.setItem('dismissed', 'true');
        });
        
        // Translate elements on the y axis when a scroll is registered on the modal
        $modal.scroll(function() {
            var topDistance = $modal.scrollTop();
            console.log(topDistance);
            $shaving.css({
                '-Webkit-transform':'translate3d(0,' + topDistance + 'px,0)',
                'transform':'translate3d(0,' + topDistance + 'px,0)'
            });
            $chisel.css({
                '-Webkit-transform':'translate3d(0,' + -topDistance + 'px,0)',
                'transform':'translate3d(0,' + -topDistance + 'px,0)'
            });
        });