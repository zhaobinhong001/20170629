$(document).ready(function () {


    /************************************
     Basic Data Table
     ************************************/
    $('#basic-datatable').dataTable({
        "oLanguage": {
            "oPaginate": {
                /*
                 * 默认值为First
                 * 当使用全数字类型的分页组件的时候，到第一页按钮上的文字
                 */
                /*    "sFirst": "First page",*/
                /*
                 * 默认值为Last
                 * 当使用全数字类型的分页组件的时候，到最后一页按钮上的文字
                 */
                /*   "sLast": "Last page",*/
                /*
                 * 默认值为Next
                 * 当使用全数字类型的分页组件的时候，到下一页按钮上的文字
                 */
                "sNext": ">",
                /*
                 * 默认值为Previous
                 * 当使用全数字类型的分页组件的时候，到前一页按钮上的文字
                 */
                "sPrevious": "<"
            }
        }
    });
    $('#basic-datatable1').DataTable({
        "oPaginate": {
            /*
             * 默认值为First
             * 当使用全数字类型的分页组件的时候，到第一页按钮上的文字
             */
            /*    "sFirst": "First page",*/
            /*
             * 默认值为Last
             * 当使用全数字类型的分页组件的时候，到最后一页按钮上的文字
             */
            /*   "sLast": "Last page",*/
            /*
             * 默认值为Next
             * 当使用全数字类型的分页组件的时候，到下一页按钮上的文字
             */
            "sNext": ">",
            /*
             * 默认值为Previous
             * 当使用全数字类型的分页组件的时候，到前一页按钮上的文字
             */
            "sPrevious": "<"
        }
        /* "bPaginate": false, //开关，是否显示分页器
         "bInfo": false //开关，是否显示表格的一些信息*/
    });


    /************************************
     Toggle Column
     ************************************/
    var toggleColumnTable = $('#toggleColumn-datatable').DataTable();

    $('a.toggle-vis').on('click', function (e) {
        e.preventDefault();

        // Get the column API object
        var column = toggleColumnTable.column($(this).attr('data-column'));

        // Toggle the visibility
        column.visible(!column.visible());
    });


    /* Formatting function for row details - modify as you need */
    function format(d) {
        // `d` is the original data object for the row
        return '<table class="extra-info">' +
            '<tr>' +
            '<td>Full name:</td>' +
            '<td>' + d.name + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Extension number:</td>' +
            '<td>' + d.extn + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Extra info:</td>' +
            '<td>And any further details here (images etc)...</td>' +
            '</tr>' +
            '</table>';
    }


    var table = $('#hiddendta-datatable').DataTable({
        "ajax": "assets/js/plugins/datatables/objects.txt",
        "columns": [
            {
                "class": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": '<a class="btn btn-link"><i class="fa fa-plus-square"></i></a>'
            },
            {"data": "name"},
            {"data": "position"},
            {"data": "office"},
            {"data": "salary"}
        ],
        "order": [[1, 'asc']]
    });

    // Add event listener for opening and closing details
    $('#hiddendta-datatable tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});