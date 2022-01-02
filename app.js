$(document).ready(() => {
    //for dropdown menu

    $('.nav_bar_list_company').mouseenter(() => {
        $('.nav_bar_hidden_company').slideDown(300)
    })
    $('.nav_bar_list_company').mouseleave(() => {
        $('.nav_bar_hidden_company')
            .delay(200)
            .slideUp(300)
    })
    $('.nav_bar_list_products').mouseenter(() => {
        $('.nav_bar_hidden_products').slideDown(300)
    })
    $('.nav_bar_list_products').mouseleave(() => {
        $('.nav_bar_hidden_products')
            .delay(200)
            .slideUp(300)
    })
    $('.nav_bar_list_data').mouseenter(() => {
        $('.nav_bar_hidden_data').slideDown(300)
    })
    $('.nav_bar_list_data').mouseleave(() => {
        $('.nav_bar_hidden_data')
            .delay(200)
            .slideUp(300)
    })
    $('.nav_bar_list_news').mouseenter(() => {
        $('.nav_bar_hidden_news').slideDown(300)
    })
    $('.nav_bar_list_news').mouseleave(() => {
        $('.nav_bar_hidden_news')
            .delay(200)
            .slideUp(300)
    })
    $('.nav_bar_list_career').mouseenter(() => {
        $('.nav_bar_hidden_career').slideDown(300)
    })
    $('.nav_bar_list_career').mouseleave(() => {
        $('.nav_bar_hidden_career')
            .delay(200)
            .slideUp(300)
    })
    $('.nav_bar_list_contacts').mouseenter(() => {
        $('.nav_bar_hidden_contacts').slideDown(300)
    })
    $('.nav_bar_list_contacts').mouseleave(() => {
        $('.nav_bar_hidden_contacts')
            .delay(200)
            .slideUp(300)
    })
    $('.len').mouseenter(() => {
        $('.hidden_len').slideDown(300)
    })
    $('.len').mouseleave(() => {
        $('.hidden_len')
            .delay(200)
            .slideUp(300)
    })

    //carousel

    var counter = 1

    $('.carouel_arrow_right_cont').click(() => {
        var carouselItem = document.getElementsByClassName('carousel_item')
        var slideNumber = carouselItem.length
        var width = carouselItem[0].clientWidth

        if (counter < slideNumber - 3) {
            for (var i = 0; i < slideNumber; i++) {
                carouselItem[i].style.transform =
                    'translateX(' + -counter * width + 'px)'
            }
            counter++
            if (counter == 1) {
                $('.carouel_arrow_left_cont').css('visibility', 'hidden')
            } else {
                $('.carouel_arrow_left_cont').css('visibility', 'visible')
            }
            if (counter == slideNumber - 3) {
                $('.carouel_arrow_right_cont').css('visibility', 'hidden')
            } else {
                $('.carouel_arrow_right_cont').css('visibility', 'visible')
            }
        }
    })

    $('.carouel_arrow_left_cont').click(() => {
        var carouselItem = document.getElementsByClassName('carousel_item')
        var slideNumber = carouselItem.length
        var width = carouselItem[0].clientWidth

        if (counter > 1) {
            counter -= 2
            for (var i = 0; i < slideNumber; i++) {
                carouselItem[i].style.transform =
                    'translateX(' + -counter * width + 'px)'
            }
            counter++
            if (counter == 1) {
                $('.carouel_arrow_left_cont').css('visibility', 'hidden')
            } else {
                $('.carouel_arrow_left_cont').css('visibility', 'visible')
            }
            if (counter == slideNumber - 3) {
                $('.carouel_arrow_right_cont').css('visibility', 'hidden')
            } else {
                $('.carouel_arrow_right_cont').css('visibility', 'visible')
            }
        }
    })

    //header img slide show
    var textHeader = [
        'Argo Loan',
        'Business Loan',
        'Mortgage Loan',
        'Auto Pawn',
        'Start Up Loan'
    ]
    var subText = [
        '',
        'Business Loan - For Your Business <br>Development!',
        'Buy, build or renovate your apartment, <br>house, summerhouse or office!',
        'Auto Pawn - Enjoy simplified procedures!',
        'Turn Your Idea into a Business!'
    ]

    var currentSlide = 0
    var timer = setInterval(imgTimer, 3000)

    function imgTimer() {
        var img = $('.main_img_cont_img')
        if (currentSlide == img.length) {
            currentSlide = 0
        }
        $('.thumbnail')
            .eq(0)
            .removeClass('thumbnail_1')
        if (currentSlide == 4) {
            $('.thumbnail')
                .eq(0)
                .addClass('thumbnail_1')
        }
        for (var i = 0; i < img.length; i++) {
            img.eq(i).css('opacity', '0')
            $('.thumbnail')
                .eq(i)
                .removeClass('thumbnail_active')
        }
        img.eq(currentSlide).css('opacity', '1')
        $('.thumbnail')
            .eq(currentSlide + 1)
            .addClass('thumbnail_active')
        currentSlide++
        if (currentSlide == 5) {
            $('.main_img_text_header').html(textHeader[0])
            $('.main_img_sub_text').html(subText[0])
        } else {
            $('.main_img_text_header').html(textHeader[currentSlide])
            $('.main_img_sub_text').html(subText[currentSlide])
        }
    }

    //thimbnail clicks

    $('.thumbnail')
        .eq(0)
        .click(() => {
            var img = $('.main_img_cont_img')
            for (var i = 0; i < $('.thumbnail').length; i++) {
                $('.thumbnail')
                    .eq(i)
                    .removeClass('thumbnail_active')
                img.eq(i).css('opacity', '0')
            }
            currentSlide = 4
            img.eq(currentSlide).css('opacity', '1')
            clearInterval(timer)
                /*this setTimeout is because without it when you click on a thubnail setInterval needs double time to work
                                      but setTimeout does first change instantly and then setInterval continues working normally .*/
            setTimeout(() => {
                var img = $('.main_img_cont_img')
                if (currentSlide == img.length) {
                    currentSlide = 0
                }
                $('.thumbnail')
                    .eq(0)
                    .removeClass('thumbnail_1')
                if (currentSlide == 4) {
                    $('.thumbnail')
                        .eq(0)
                        .addClass('thumbnail_1')
                }
                for (var i = 0; i < img.length; i++) {
                    img.eq(i).css('opacity', '0')
                    $('.thumbnail')
                        .eq(i)
                        .removeClass('thumbnail_active')
                }
                img.eq(currentSlide).css('opacity', '1')
                $('.thumbnail')
                    .eq(currentSlide + 1)
                    .addClass('thumbnail_active')
                currentSlide++
                if (currentSlide == 5) {
                    $('.main_img_text_header').html(textHeader[0])
                    $('.main_img_sub_text').html(subText[0])
                } else {
                    $('.main_img_text_header').html(textHeader[currentSlide])
                    $('.main_img_sub_text').html(subText[currentSlide])
                }
            }, 0)
            timer = setInterval(imgTimer, 3000)
            $('.thumbnail')
                .eq(0)
                .addClass('thumbnail_active')
        })

    $('.thumbnail')
        .eq(1)
        .click(() => {
            var img = $('.main_img_cont_img')
            for (var i = 0; i < $('.thumbnail').length; i++) {
                $('.thumbnail')
                    .eq(i)
                    .removeClass('thumbnail_active')
                img.eq(i).css('opacity', '0')
            }
            currentSlide = 0
            img.eq(currentSlide).css('opacity', '1')
            clearInterval(timer)
            setTimeout(() => {
                var img = $('.main_img_cont_img')
                if (currentSlide == img.length) {
                    currentSlide = 0
                }
                $('.thumbnail')
                    .eq(0)
                    .removeClass('thumbnail_1')
                if (currentSlide == 4) {
                    $('.thumbnail')
                        .eq(0)
                        .addClass('thumbnail_1')
                }
                for (var i = 0; i < img.length; i++) {
                    img.eq(i).css('opacity', '0')
                    $('.thumbnail')
                        .eq(i)
                        .removeClass('thumbnail_active')
                }
                img.eq(currentSlide).css('opacity', '1')
                $('.thumbnail')
                    .eq(currentSlide + 1)
                    .addClass('thumbnail_active')
                currentSlide++
                if (currentSlide == 5) {
                    $('.main_img_text_header').html(textHeader[0])
                    $('.main_img_sub_text').html(subText[0])
                } else {
                    $('.main_img_text_header').html(textHeader[currentSlide])
                    $('.main_img_sub_text').html(subText[currentSlide])
                }
            }, 0)
            timer = setInterval(imgTimer, 3000)
            $('.thumbnail')
                .eq(1)
                .addClass('thumbnail_active')
        })

    $('.thumbnail')
        .eq(2)
        .click(() => {
            var img = $('.main_img_cont_img')
            for (var i = 0; i < $('.thumbnail').length; i++) {
                $('.thumbnail')
                    .eq(i)
                    .removeClass('thumbnail_active')
                img.eq(i).css('opacity', '0')
            }
            currentSlide = 1
            img.eq(currentSlide).css('opacity', '1')
            clearInterval(timer)
            setTimeout(() => {
                var img = $('.main_img_cont_img')
                if (currentSlide == img.length) {
                    currentSlide = 0
                }
                $('.thumbnail')
                    .eq(0)
                    .removeClass('thumbnail_1')
                if (currentSlide == 4) {
                    $('.thumbnail')
                        .eq(0)
                        .addClass('thumbnail_1')
                }
                for (var i = 0; i < img.length; i++) {
                    img.eq(i).css('opacity', '0')
                    $('.thumbnail')
                        .eq(i)
                        .removeClass('thumbnail_active')
                }
                img.eq(currentSlide).css('opacity', '1')
                $('.thumbnail')
                    .eq(currentSlide + 1)
                    .addClass('thumbnail_active')
                currentSlide++
                if (currentSlide == 5) {
                    $('.main_img_text_header').html(textHeader[0])
                    $('.main_img_sub_text').html(subText[0])
                } else {
                    $('.main_img_text_header').html(textHeader[currentSlide])
                    $('.main_img_sub_text').html(subText[currentSlide])
                }
            }, 0)
            timer = setInterval(imgTimer, 3000)
            $('.thumbnail')
                .eq(2)
                .addClass('thumbnail_active')
        })

    $('.thumbnail')
        .eq(3)
        .click(() => {
            var img = $('.main_img_cont_img')
            for (var i = 0; i < $('.thumbnail').length; i++) {
                $('.thumbnail')
                    .eq(i)
                    .removeClass('thumbnail_active')
                img.eq(i).css('opacity', '0')
            }
            currentSlide = 2
            img.eq(currentSlide).css('opacity', '1')
            clearInterval(timer)
            setTimeout(() => {
                var img = $('.main_img_cont_img')
                if (currentSlide == img.length) {
                    currentSlide = 0
                }
                $('.thumbnail')
                    .eq(0)
                    .removeClass('thumbnail_1')
                if (currentSlide == 4) {
                    $('.thumbnail')
                        .eq(0)
                        .addClass('thumbnail_1')
                }
                for (var i = 0; i < img.length; i++) {
                    img.eq(i).css('opacity', '0')
                    $('.thumbnail')
                        .eq(i)
                        .removeClass('thumbnail_active')
                }
                img.eq(currentSlide).css('opacity', '1')
                $('.thumbnail')
                    .eq(currentSlide + 1)
                    .addClass('thumbnail_active')
                currentSlide++
                if (currentSlide == 5) {
                    $('.main_img_text_header').html(textHeader[0])
                    $('.main_img_sub_text').html(subText[0])
                } else {
                    $('.main_img_text_header').html(textHeader[currentSlide])
                    $('.main_img_sub_text').html(subText[currentSlide])
                }
            }, 0)
            timer = setInterval(imgTimer, 3000)
            $('.thumbnail')
                .eq(3)
                .addClass('thumbnail_active')
        })

    $('.thumbnail')
        .eq(4)
        .click(() => {
            var img = $('.main_img_cont_img')
            for (var i = 0; i < $('.thumbnail').length; i++) {
                $('.thumbnail')
                    .eq(i)
                    .removeClass('thumbnail_active')
                img.eq(i).css('opacity', '0')
            }
            currentSlide = 3
            img.eq(currentSlide).css('opacity', '1')
            clearInterval(timer)
            setTimeout(() => {
                var img = $('.main_img_cont_img')
                if (currentSlide == img.length) {
                    currentSlide = 0
                }
                $('.thumbnail')
                    .eq(0)
                    .removeClass('thumbnail_1')
                if (currentSlide == 4) {
                    $('.thumbnail')
                        .eq(0)
                        .addClass('thumbnail_1')
                }
                for (var i = 0; i < img.length; i++) {
                    img.eq(i).css('opacity', '0')
                    $('.thumbnail')
                        .eq(i)
                        .removeClass('thumbnail_active')
                }
                img.eq(currentSlide).css('opacity', '1')
                $('.thumbnail')
                    .eq(currentSlide + 1)
                    .addClass('thumbnail_active')
                currentSlide++
                if (currentSlide == 5) {
                    $('.main_img_text_header').html(textHeader[0])
                    $('.main_img_sub_text').html(subText[0])
                } else {
                    $('.main_img_text_header').html(textHeader[currentSlide])
                    $('.main_img_sub_text').html(subText[currentSlide])
                }
            }, 0)
            timer = setInterval(imgTimer, 3000)
            $('.thumbnail')
                .eq(4)
                .addClass('thumbnail_active')
        })

    // responsive menu icon img animation

    $('.nav_bar_responsive_icon').click(() => {
        if ($('.nav_bar_responsive_icon_img').css('left') == '0px') {
            var img = $('.nav_bar_responsive_icon_img')
            setTimeout(() => {
                img.css('left', '-34px')
            }, 0)
            setTimeout(() => {
                img.css('left', '-68px')
            }, 50)
            setTimeout(() => {
                img.css('left', '-102px')
            }, 100)
            setTimeout(() => {
                img.css('left', '-136px')
            }, 150)
            setTimeout(() => {
                img.css('left', '-170px')
            }, 200)
            setTimeout(() => {
                img.css('left', '-204px')
            }, 250)
            setTimeout(() => {
                img.css('left', '-238px')
            }, 300)
            setTimeout(() => {
                img.css('left', '-272px')
            }, 350)
            setTimeout(() => {
                img.css('left', '-306px')
            }, 400)
            setTimeout(() => {
                img.css('left', '-340px')
            }, 450)
            setTimeout(() => {
                img.css('left', '-374px')
            }, 500)
            setTimeout(() => {
                img.css('left', '-408px')
            }, 550)
            setTimeout(() => {
                img.css('left', '-442px')
            }, 600)
            setTimeout(() => {
                img.css('left', '-476px')
            }, 650)
            setTimeout(() => {
                img.css('left', '-510px')
            }, 700)
        }

        if ($('.nav_bar_responsive_icon_img').css('left') == '-510px') {
            var img = $('.nav_bar_responsive_icon_img')
            setTimeout(() => {
                img.css('left', '-476px')
            }, 0)
            setTimeout(() => {
                img.css('left', '-442px')
            }, 50)
            setTimeout(() => {
                img.css('left', '-408px')
            }, 100)
            setTimeout(() => {
                img.css('left', '-374px')
            }, 150)
            setTimeout(() => {
                img.css('left', '-340px')
            }, 200)
            setTimeout(() => {
                img.css('left', '-306px')
            }, 250)
            setTimeout(() => {
                img.css('left', '-272px')
            }, 300)
            setTimeout(() => {
                img.css('left', '-238px')
            }, 350)
            setTimeout(() => {
                img.css('left', '-204px')
            }, 400)
            setTimeout(() => {
                img.css('left', '-170px')
            }, 450)
            setTimeout(() => {
                img.css('left', '-136px')
            }, 500)
            setTimeout(() => {
                img.css('left', '-102px')
            }, 550)
            setTimeout(() => {
                img.css('left', '-68px')
            }, 600)
            setTimeout(() => {
                img.css('left', '-34px')
            }, 650)
            setTimeout(() => {
                img.css('left', '-0px')
            }, 700)
        }
    })

    //on scroll change nav_bar_responsive  position.

    var prevPos = 0
    window.onscroll = function() {
        var curntPos = window.pageYOffset
        if (prevPos < curntPos) {
            $('.header').css('top', '-75px')
        } else {
            $('.header').css('top', '0px')
        }
        prevPos = curntPos
    }

    //show responsive menu

    $('.nav_bar_responsive_icon_img').click(() => {
        if ($('.nav_bar_responsive_icon_img').css('left') == '0px') {
            $('.responsive_menu').slideDown(300)
        }
        if ($('.nav_bar_responsive_icon_img').css('left') == '-510px') {
            $('.responsive_menu').slideUp(300)
        }
    })

    //show res_menu_hidden contents on icon click

    $('.res_menu_company_arrow').click(() => {
        for (var i = 0; i < $('.res_menu_arrow').length; i++) {
            $('.res_menu_arrow')
                .eq(i)
                .css('transform', 'rotate(0deg)')
            $('.res_menu_hidden')
                .eq(i)
                .slideUp(300)
        }
        if ($('.res_menu_hiden_company').css('display') == 'none') {
            $('.res_menu_hiden_company').slideDown(300)
            $('.res_menu_company_arrow').css('transform', 'rotate(90deg)')
        } else {
            $('.res_menu_hiden_company').slideUp(300)
            $('.res_menu_company_arrow').css('transform', 'rotate(0deg)')
        }
    })
    $('.res_menu_products_arrow').click(() => {
        for (var i = 0; i < $('.res_menu_arrow').length; i++) {
            $('.res_menu_arrow')
                .eq(i)
                .css('transform', 'rotate(0deg)')
            $('.res_menu_hidden')
                .eq(i)
                .slideUp(300)
        }
        if ($('.res_menu_hiden_products').css('display') == 'none') {
            $('.res_menu_hiden_products').slideDown(300)
            $('.res_menu_products_arrow').css('transform', 'rotate(90deg)')
        } else {
            $('.res_menu_hiden_products').slideUp(300)
            $('.res_menu_products_arrow').css('transform', 'rotate(0deg)')
        }
    })

    $('.res_menu_fd_arrow').click(() => {
        for (var i = 0; i < $('.res_menu_arrow').length; i++) {
            $('.res_menu_arrow')
                .eq(i)
                .css('transform', 'rotate(0deg)')
            $('.res_menu_hidden')
                .eq(i)
                .slideUp(300)
        }
        if ($('.res_menu_hiden_fd').css('display') == 'none') {
            $('.res_menu_hiden_fd').slideDown(300)
            $('.res_menu_fd_arrow').css('transform', 'rotate(90deg)')
        } else {
            $('.res_menu_hiden_fd').slideUp(300)
            $('.res_menu_fd_arrow').css('transform', 'rotate(0deg)')
        }
    })

    $('.res_menu_news_arrow').click(() => {
        for (var i = 0; i < $('.res_menu_arrow').length; i++) {
            $('.res_menu_arrow')
                .eq(i)
                .css('transform', 'rotate(0deg)')
            $('.res_menu_hidden')
                .eq(i)
                .slideUp(300)
        }
        if ($('.res_menu_hiden_news').css('display') == 'none') {
            $('.res_menu_hiden_news').slideDown(300)
            $('.res_menu_news_arrow').css('transform', 'rotate(90deg)')
        } else {
            $('.res_menu_hiden_news').slideUp(300)
            $('.res_menu_news_arrow').css('transform', 'rotate(0deg)')
        }
    })

    $('.res_menu_career_arrow').click(() => {
        for (var i = 0; i < $('.res_menu_arrow').length; i++) {
            $('.res_menu_arrow')
                .eq(i)
                .css('transform', 'rotate(0deg)')
            $('.res_menu_hidden')
                .eq(i)
                .slideUp(300)
        }
        if ($('.res_menu_hiden_career').css('display') == 'none') {
            $('.res_menu_hiden_career').slideDown(300)
            $('.res_menu_career_arrow').css('transform', 'rotate(90deg)')
        } else {
            $('.res_menu_hiden_career').slideUp(300)
            $('.res_menu_career_arrow').css('transform', 'rotate(0deg)')
        }
    })

    $('.res_menu_contacts_arrow').click(() => {
        for (var i = 0; i < $('.res_menu_arrow').length; i++) {
            $('.res_menu_arrow')
                .eq(i)
                .css('transform', 'rotate(0deg)')
            $('.res_menu_hidden')
                .eq(i)
                .slideUp(300)
        }
        if ($('.res_menu_hiden_contacts').css('display') == 'none') {
            $('.res_menu_hiden_contacts').slideDown(300)
            $('.res_menu_contacts_arrow').css('transform', 'rotate(90deg)')
        } else {
            $('.res_menu_hiden_contacts').slideUp(300)
            $('.res_menu_contacts_arrow').css('transform', 'rotate(0deg)')
        }
    })

    //mbc & nbg rates application

    $('.s2_currency_nbg').click(() => {
        $('.s2_currency_nbg').removeClass('s2_mbc_ngb_add_css_passive')
        $('.s2_currency_nbg').addClass('s2_mbc_ngb_add_css_active')
        $('.s2_currency_mbc').removeClass('s2_mbc_ngb_add_css_active')
        $('.s2_currency_mbc').addClass('s2_mbc_ngb_add_css_passive')
        $('.s2_currency_table_nbg').css('display', 'grid')
        $('.s2_currency_table_mbc').css('display', 'none')
    })
    $('.s2_currency_mbc').click(() => {
        $('.s2_currency_nbg').removeClass('s2_mbc_ngb_add_css_active')
        $('.s2_currency_nbg').addClass('s2_mbc_ngb_add_css_passive')
        $('.s2_currency_mbc').addClass('s2_mbc_ngb_add_css_passive')
        $('.s2_currency_mbc').addClass('s2_mbc_ngb_add_css_active')
        $('.s2_currency_table_nbg').css('display', 'none')
        $('.s2_currency_table_mbc').css('display', 'grid')
    })

    //keyup method

    $('.currency_text_input').keyup(() => {
        var inputValue = $('.currency_text_input').val()
        if (($('.currency_from').val() == 'gel') & ($('.currency_to').val() == 'gel')) {
            //gel to gel
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(inputValue)
            }
        }
        if (($('.currency_from').val() == 'gel') & ($('.currency_to').val() == 'usd')) {
            //gel to usd
            var rate = 0.29
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'gel') & ($('.currency_to').val() == 'eur')) {
            //gel to eur
            var rate = 0.25
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'gel') & ($('.currency_to').val() == 'rub')) {
            //gel to rub
            var rate = 22.47
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'usd') & ($('.currency_to').val() == 'gel')) {
            //usd to gel
            var rate = 3.42
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'usd') & ($('.currency_to').val() == 'usd')) {
            //usd to usd
            var rate = 1
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'usd') & ($('.currency_to').val() == 'eur')) {
            //usd to eur
            var rate = 0.84;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }
        if (($('.currency_from').val() == 'usd') & ($('.currency_to').val() == 'rub')) {
            //eur to rub
            var rate = 76.74;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }
        if (($('.currency_from').val() == 'eur') & ($('.currency_to').val() == 'gel')) {
            //eur to gel
            var rate = 4.06;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'eur') & ($('.currency_to').val() == 'usd')) {
            //eur to usd
            var rate = 1.19;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'eur') & ($('.currency_to').val() == 'eur')) {
            //eur to eur
            var rate = 1;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }
        if (($('.currency_from').val() == 'eur') & ($('.currency_to').val() == 'rub')) {
            //eur to rub
            var rate = 91.24;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }


        if (($('.currency_from').val() == 'rub') & ($('.currency_to').val() == 'gel')) {
            //rub to gel
            var rate = 0.04;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'rub') & ($('.currency_to').val() == 'usd')) {
            //rub to usd
            var rate = 0.01;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'rub') & ($('.currency_to').val() == 'eur')) {
            //rub to eur
            var rate = 0.01;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }
        if (($('.currency_from').val() == 'rub') & ($('.currency_to').val() == 'rub')) {
            //rub to rub
            var rate = 1;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }
    });

    //change currencies right after choosing an item form form list

    $('.currency').click(() => {
        var inputValue = $('.currency_text_input').val()
        if (($('.currency_from').val() == 'gel') & ($('.currency_to').val() == 'gel')) {
            //gel to gel
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(inputValue)
            }
        }
        if (($('.currency_from').val() == 'gel') & ($('.currency_to').val() == 'usd')) {
            //gel to usd
            var rate = 0.29
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'gel') & ($('.currency_to').val() == 'eur')) {
            //gel to eur
            var rate = 0.25
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'gel') & ($('.currency_to').val() == 'rub')) {
            //gel to rub
            var rate = 22.47
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'usd') & ($('.currency_to').val() == 'gel')) {
            //usd to gel
            var rate = 3.42
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'usd') & ($('.currency_to').val() == 'usd')) {
            //usd to usd
            var rate = 1
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'usd') & ($('.currency_to').val() == 'eur')) {
            //usd to eur
            var rate = 0.84;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }
        if (($('.currency_from').val() == 'usd') & ($('.currency_to').val() == 'rub')) {
            //eur to rub
            var rate = 76.74;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }
        if (($('.currency_from').val() == 'eur') & ($('.currency_to').val() == 'gel')) {
            //eur to gel
            var rate = 4.06;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'eur') & ($('.currency_to').val() == 'usd')) {
            //eur to usd
            var rate = 1.19;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'eur') & ($('.currency_to').val() == 'eur')) {
            //eur to eur
            var rate = 1;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }
        if (($('.currency_from').val() == 'eur') & ($('.currency_to').val() == 'rub')) {
            //eur to rub
            var rate = 91.24;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }


        if (($('.currency_from').val() == 'rub') & ($('.currency_to').val() == 'gel')) {
            //rub to gel
            var rate = 0.04;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'rub') & ($('.currency_to').val() == 'usd')) {
            //rub to usd
            var rate = 0.01;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2)
            if (inputValue == '') {
                $('.currency_text_output').html('')
            } else {
                $('.currency_text_output').html(result)
            }
        }
        if (($('.currency_from').val() == 'rub') & ($('.currency_to').val() == 'eur')) {
            //rub to eur
            var rate = 0.01;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }
        if (($('.currency_from').val() == 'rub') & ($('.currency_to').val() == 'rub')) {
            //rub to rub
            var rate = 1;
            var result =
                Math.round(rate * inputValue * Math.pow(10, 2)) / Math.pow(10, 2);
            if (inputValue == '') {
                $('.currency_text_output').html('');
            } else {
                $('.currency_text_output').html(result);
            }
        }
    });


    //document ready end
})