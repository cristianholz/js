$(document).ready(function() {
//SELECT
    (function() {
        $('select').each(function() {
            var title = $(this).attr('title');
            title = $('option:selected', this).text();
            if (title === undefined) {
                title = '';
            }
            $(this).css({
                'z-index': 10,
                'opacity': 0,
                '-khtml-appearance': 'none'
            }).after('<span class="contato-span">' + title + '</span>').change(function() {
                val = $('option:selected', this).text();
                $(this).next().text(val);
            });
        });
    })();

    //BLOCOS
    $('.bloco').matchHeight();
    if ($(window).width() < 800) {
        $('.bloco').matchHeight({ remove: true });
    };

    //PLACEHOLDER
    $(function() {
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    });
});
