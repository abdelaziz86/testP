(function(e){e(document).ready(function(){a.init()}),e(".engoj-collection-sidebar")&&History.Adapter.bind(window,"statechange",function(){var i=History.getState();if(!a.fillterClick){a.filterParams();var t=a.filterCreateUrl();a.filterGetContent(t),a.resetFilter()}a.fillterClick=!1});var a={init:function(){this.initCollectionFilter(),this.initCollectionSorting()},initReview:function(){},initToggle:function(){},filterCategories:function(){},fillterTagEvents:function(){e("body").delegate('.filter-tag a:not(".clear"), .filter-tag label',"click",function(i){e(this).toggleClass("active");var t=[];if(Shopify.queryParams.constraint&&(t=Shopify.queryParams.constraint.split("+")),!window.filter_mul_choice&&!e(this).prev().is(":checked")){var r=e(this).parents(".filter-tag").find("input:checked");if(r.length>0){var n=r.val();if(n){var o=t.indexOf(n);o>=0&&t.splice(o,1)}}}var n=e(this).prev().val();if(n){var o=t.indexOf(n);o>=0?t.splice(o,1):t.push(n)}t.length?Shopify.queryParams.constraint=t.join("+"):delete Shopify.queryParams.constraint,a.filterAjaxClick(),i.preventDefault()})},filterMapClearAll:function(){e("body").delegate(".refined-widgets a.clear-all","click",function(i){delete Shopify.queryParams.constraint,delete Shopify.queryParams.q,a.filterAjaxClick(),i.preventDefault(),e('.filter-tag a:not(".clear"), .filter-tag label').removeClass("active")}),e("body").delegate(".filter-block .clear","click",function(i){var t=[],r=e(this).parent().parent();Shopify.queryParams.constraint&&(t=Shopify.queryParams.constraint.split("+")),r.find("input:checked").each(function(){var o=e(this),n=o.val();if(n){var l=t.indexOf(n);l>=0&&t.splice(l,1)}}),r.find("a").each(function(){e(this).removeClass("active")}),t.length?Shopify.queryParams.constraint=t.join("+"):delete Shopify.queryParams.constraint,a.filterAjaxClick(),i.preventDefault()})},filterMapClear:function(){e(".filter-tag").each(function(){var i=e(this);i.find("input:checked").length>0&&i.find(".clear").show().click(function(t){var r=[];Shopify.queryParams.constraint&&(r=Shopify.queryParams.constraint.split("+")),i.find("input:checked").each(function(){var o=e(this),n=o.val();if(n){var l=r.indexOf(n);l>=0&&r.splice(l,1)}}),r.length?Shopify.queryParams.constraint=r.join("+"):delete Shopify.queryParams.constraint,a.filterAjaxClick(),t.preventDefault()})})},filterParams:function(){if(Shopify.queryParams={},location.search.length)for(var i,t=0,r=location.search.substr(1).split("&");t<r.length;t++)i=r[t].split("="),i.length>1&&(Shopify.queryParams[decodeURIComponent(i[0])]=decodeURIComponent(i[1]))},filterMapEvents:function(){a.fillterTagEvents()},resetFilter:function(){e(".filter-custom .active, .filter-links .active").removeClass("active"),e(".filter-tag input:checked").attr("checked",!1);var i=location.pathname.match(/\/collections\/(.*)(\?)?/);i&&i[1]&&e(".filter-links a[href='"+i[0]+"']").addClass("active")},filterMapData:function(i){var t=e(".grid-uniform"),r=e(i).find(".grid-uniform");t.replaceWith(r),e(".pagination").length>0&&e(".pagination").replaceWith(e(i).find(".pagination")),e(".filter-blocks").replaceWith(e(i).find(".filter-blocks")),a.filterMapClear(),quickView();var o={cartContainer:".enj-minicart-ajax",addToCartSelector:".enj-add-to-cart-btn",cartCountSelector:".enj-cartcount",cartCostSelector:".enj-cartcost",moneyFormat:null};jQuery(function(l){ajaxCart.init(o)});function n(){e(".loadmore").children("a").on("click",function(l){e(".loadmore").addClass("d-none"),e(".loading.tshopify-popup").addClass("active");var c=e(".loadmore").children("a").attr("href");c!="#"?(e(".load-data").load(c+" .product-grid-view .row"),setTimeout(function(){e(".load-data .js_loadmore").each(function(){e(this).appendTo(".product-grid-view .row")}),e(".loadmore").eq(0).remove(),n(),quickView();var f={cartContainer:".enj-minicart-ajax",addToCartSelector:".enj-add-to-cart-btn",cartCountSelector:".enj-cartcount",cartCostSelector:".enj-cartcost",moneyFormat:null};jQuery(function(s){ajaxCart.init(f)}),e(".loading.tshopify-popup").removeClass("active")},2e3)):e(".loadmore").remove(),l.preventDefault()})}n(),jQuery(".engoj_select_color a").each(function(){jQuery(this).on("click",function(){var l=jQuery(this).data("engojvariant-img");return jQuery(this).parents(".engoj_grid_parent").find(".engoj_find_img img").attr({src:l}),!1})})},filterCreateUrl:function(i){var t=e.param(Shopify.queryParams).replace(/%2B/g,"+");return i?t!=""?i+"?"+t:i:location.pathname+"?"+t},filterAjaxClick:function(i){delete Shopify.queryParams.page;var t=a.filterCreateUrl(i);a.fillterClick=!0,History.pushState({param:Shopify.queryParams},t,t),a.filterGetContent(t)},filterGetContent:function(i){e.ajax({type:"get",url:i,beforeSend:function(){showPopup(".loading")},success:function(t){a.filterMapData(t),a.filterMapClear(),hidePopup(".loading"),hidePopup(".filter-to-left , .js-bg")},error:function(t,r){hidePopup(".loading"),hidePopup(".filter-to-left, .js-bg"),e(".ajax-error-message").text(e.parseJSON(t.responseText).description),showPopup(".ajax-error-modal")}})},initCollectionFilter:function(){e(".engoj-collection-sidebar").length>0&&(a.filterParams(),a.filterMapEvents(),a.filterMapClear(),a.filterMapClearAll())},initCollectionSorting:function(i){e(".collection-sorting a").click(function(t){t.preventDefault(),e(this).parent().hasClass("active")||(Shopify.queryParams.sort_by=e(this).attr("href"),a.filterAjaxClick(),e(".collection-sorting li.active").removeClass("active"),e(this).parent().addClass("active"));var r=e(this).text();e(this).closest(".dropdown").find(".dropdown-label").text(r),e(this).closest(".dropdown-content").removeClass("active")})},initCollectionViewMode:function(){},initCollectionShow:function(){},initPaging:function(){}}})(jQuery);
//# sourceMappingURL=/s/files/1/0414/0069/6999/t/6/assets/collection.js.map?v=7161792383928204669
