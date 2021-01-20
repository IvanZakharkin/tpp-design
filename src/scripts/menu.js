$(function () {
	$('.menu-burger').click(function (e) {
		$this = $(this);
		e.preventDefault();
		if ($('.menu__list').css('display') === 'none') {
			$this.addClass('menu-burger_active');
			$('.menu__list').addClass('menu__list_active');
		} else {
			$this.removeClass('menu-burger_active');
			$('.menu__list').removeClass('menu__list_active');
		}
	});

	$('.menu__item-show-hover').on('click', function() {
		$(this).toggleClass('show');
		$(this).parent().siblings('.menu__item-hover').toggleClass('show');
	});


	// $('.menu__list').moreNav();
	// function setMoreNav() {
	// 	var menu = $('.menu__list'),
	// 			menuWidth = menu.outerWidth(),
	// 			moreLink = $('<li class="nav-item menu__item menu__item_more"><a href="#" class="nav-link menu__link"><i class="fas fa-ellipsis-h"></i></a><ul class="menu__item-hover"></ul></li>'),
	// 			menuItemsWidth = 0;
				
	// 			if (window.innerWidth < 767)  {
					
	// 				if (menu.find('.menu__item_more').length > 0 ) {
	// 					var more = menu.find('.menu__item_more .menu__item-hover .more');
	// 					more.removeClass('.more');
	// 					menu.append(more);
	// 					menu.find('.menu__item_more').remove();
	// 				}
	// 				return;
	// 			} else {
	// 				console.log($('.menu__item-hover.show'));
	// 				if ($('.menu__item-hover.show').length > 0) {
	// 					$('.menu__item-hover.show').removeClass('show');
	// 				}
	// 			}

	// 			if (menu.find('.menu__item_more').length > 0 ) {
	// 				menu.append(menu.find('.menu__item_more .menu__item-hover .more'));
	// 				menu.find('.menu__item_more').remove();
	// 			}
	// 			$.each(menu.find('.nav-item.menu__item'), function(i, elem) {
	// 				menuItemsWidth += $(elem).outerWidth();
	// 			});
	// 			console.log(menuItemsWidth, menuWidth);
	// 			if (menuItemsWidth > menuWidth) {
	// 				menu.append(moreLink);
	// 				menuWidth -= moreLink.outerWidth();

	// 				menuItemsWidth = 0;
	// 				$.each(menu.find('.nav-item.menu__item'), function(i, elem){
	// 					menuItemsWidth += $(elem).outerWidth();

	// 					if( !$(elem).is('.menu__item_more') ) {
	// 						if (menuItemsWidth < menuWidth) {
	// 							$(elem).removeClass('more');
	// 						} else {
	// 							$(elem).addClass('more');
	// 						}
	// 					}
	// 				});
	// 				moreLink.find('.menu__item-hover').append($('.more'));
	// 			}
	// };
	// setMoreNav();
	// window.addEventListener('resize',function(){
    // setMoreNav();
});

// $.fn.moreNav = function() {
// 	var nav = $(this);
	
// 	function setMoreNav() {
		
// 		var nav_width = nav.outerWidth(),
// 			nav_elem_width = 0,
// 			more_link = $('<li class="nav-item menu__item menu__item_more"><a href="#" class="nav-link menu__link"><i class="fas fa-ellipsis-h"></i></a><ul class="menu__item-hover collapse"></ul></li>'),
// 			class_nav_item = 'nav-item1',
// 			class_nav_item_more = 'nav-item-more1';
		
// 		if( nav.find('.menu__item_more').length > 0 ) {
// 			nav.append(nav.find('.menu__item_more ul li'));
// 			nav.find('.menu__item_more').remove();
// 		} 
		
// 		$.each(nav.find('li'), function(i, elem){
// 			var elem_width = $(elem).outerWidth();
			
// 			nav_elem_width += elem_width;
// 		});
		
// 		if( nav_elem_width > nav_width ) {
// 			nav.append(more_link);
// 			nav_width -= more_link.outerWidth();
			
// 			nav_elem_width = 0;
			
// 			$.each(nav.find('li'), function(i, elem){
// 				var elem_width = $(elem).outerWidth();
				
// 				nav_elem_width += elem_width;
				
// 				if( !$(elem).is('.menu__item_more') ) {
// 					if( nav_elem_width < nav_width ) {
// 						$(elem).addClass(class_nav_item).removeClass(class_nav_item_more);
// 					} else {
// 						$(elem).addClass(class_nav_item_more).removeClass(class_nav_item);
// 					}
// 				}
// 			});
// 		}
		
// 		more_link.find('.menu__item-hover').append($('.' + class_nav_item_more));
		
// 	}
// 	setMoreNav();
// 	$(window).resize(function(){
// 		setMoreNav();
// 	});
// };