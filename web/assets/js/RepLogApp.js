'use strict';   //because variable  Helper is same as "var Helper", javascript parse it like a "var Helper", use strict it will be only Helper
// we correctly use    var statement

(function (winodw, $) {
    window.RepLogApp = {
    initialize: function ($wrapper) {
        this.$wrapper = $wrapper;
        this.helper = new Helper($wrapper);
        // Helper.initialize($wrapper);

        this.$wrapper.find('.js-delete-rep-log').on(
            'click',
            this.handleRepLogDelete.bind(this)
        );

        this.$wrapper.find('tbody tr').on(
            'click',
            this.handleRowClicked.bind(this)
        );
//                var newThis = {cat: 'meow', dog: 'woof'};
////                this.whatIsThis('hello');
//                var boundWhatIsThis = this.whatIsThis.bind(this);
//                boundWhatIsThis.call(newThis, 'hellllo');  //ked das call tak this je len meow..
    },
//
//            whatIsThis: function (greeting) {
//                console.log(this, greeting)
//            },

    updateTotalWeightLifted: function () {
        // var totalWeight = 0;
    //     this.$wrapper.find("tbody tr").each(function () {
    //         totalWeight += $(this).data('weight');
    //     });
    //
        this.$wrapper.find(".js-total-weight").html(
            // this._calcutateTotalWeight()
            this.helper.calcutateTotalWeight()
        );
    },

    handleRepLogDelete: function (e) {
        e.preventDefault();
        // e.stopPropagation();
        // e.target.className += ' text-danger';


        var $link = $(e.currentTarget);  //change $(this) to $link
        $link.addClass('text-danger');    //change $(this) to $link
        $link.find('.fa')      //change $(this) to $link
            .removeClass('fa-trash')
            .addClass('fa-spinner')
            .addClass('fa-spin');


        var deleteUrl = $link.data('url');     //change $(this) to $link
//                var deleteUrl = $(this)[0].dataset.url;   //change $(this) to $link
        var $row = $link.closest('tr');   //change $(this) to $link
//                var $totalWeightContainer = RepLogApp.$wrapper.find('.js-total-weight');
//                var newWeight = $totalWeightContainer.html() - $row.data('weight');

        var self = this;
        $.ajax({
            url: deleteUrl,
            method: 'DELETE',
            success: function () {
                $row.fadeOut('normal', function() {
                    $row.remove();
                    self.updateTotalWeightLifted();
                });
//                        $totalWeightContainer.html(newWeight);
            }
        })
    },

    handleRowClicked: function () {
        console.log('row clicked!');
    }
};

/*
 * A "private" object
 */
var Helper = function ($wrapper) {
        this.$wrapper = $wrapper;

    };

    Helper.calcutateTotalWeight = function () {
        var totalWeight = 0;
        this.$wrapper.find("tbody tr").each(function () {
            totalWeight += $(this).data('weight');
        });
        return totalWeight;
    };
})(window, jQuery);

//
//            $table.find('.js-delete-rep-log').on('click', function (e) {
//                e.preventDefault();
//                // e.stopPropagation();
//                // e.target.className += ' text-danger';
//
//                $(this).addClass('text-danger');
//                $(this).find('.fa')
//                    .removeClass('fa-trash')
//                    .addClass('fa-spinner')
//                    .addClass('fa-spin');
//
//
////                var deleteUrl = $(this).data('url');
//                var deleteUrl = $(this)[0].dataset.url;
//                var $row = $(this).closest('tr');
//                var $totalWeightContainer = $table.find('.js-total-weight');
//                var newWeight = $totalWeightContainer.html() - $row.data('weight');
//
//                $.ajax({
//                    url: deleteUrl,
//                    method: 'DELETE',
//                    success: function () {
//                        $row.fadeOut();
//                        $totalWeightContainer.html(newWeight);
//                    }
//                })
//            });
//
////                    $.ajax({
////                        url: deleteUrl,
////                        method: 'DELETE'
////                    }).then(function () {
////                        $row.fadeOut('normal', function () {
////                            $(this).remove();
////                            self.updateTotalWeightLifted();
////                        });
////                    })
////                },
//
//
////                console.log(e.currentTarget === this);
////                console.log(
////                    e.target,
////                    $(e.target)[0] === e.target,
////                    $('fa-trash')[1] === e.target
////                );
//
//
//            $table.find('tbody tr').on('click', function () {
//                console.log('row clicked!');
//            });
// {#});#}
// {#</script>#}
//
//     {#{% endblock %}#}
//
//     {#{% block stylesheets %}#}
//     {#{{ parent() }}#}
//
// {#<link rel="stylesheet" href="https://cdn.jsdelivr.net/sweetalert2/6.1.0/sweetalert2.min.css"/>#}
// {#{% endblock %}#}
//
// {#{% block javascripts %}#}
// {#{{ parent() }}#}
//
// {#<script src="https://cdn.jsdelivr.net/sweetalert2/6.1.0/sweetalert2.min.js"></script>#}
//     {#<script src="{{ asset('assets/js/RepLogApp.js') }}"></script>#}
//
//         {#<script>#}
//         {#$(document).ready(function() {#}
//             {#var $wrapper = $('.js-rep-log-table');#}
//             {#var repLogApp = new RepLogApp($wrapper);#}
//             {#});#}
//         {#</script>#}
//
//             {#<script type="text/template" id="js-rep-log-row-template">#}
//             {#<tr data-weight="<%= totalWeightLifted %>">#}
//             {#<td><%= itemLabel %></td>#}
//                 {#<td><%= reps %></td>#}
//                     {#<td><%= totalWeightLifted %></td>#}
//                         {#<td>#}
//                         {#<a href="#"#}
//                         {#class="js-delete-rep-log"#}
//                         {#data-url="<%= links._self %>"#}
//                         {#>#}
//                         {#<span class="fa fa-trash"></span>#}
//                             {#</a>#}
//                                 {#</td>#}
//                                     {#</tr>#}
//                                         {#</script>#}
//                                             {#{% endblock %}#}
