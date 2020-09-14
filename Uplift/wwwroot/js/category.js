var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/admin/category/GetAll", 
            "type": "GET",
            "datatype": "json"
        }, 
        "columns": [
            {
                "data": "name",
                "width": "50%"
            },
            {
                "data": "displayOrder",
                "width": "20%"
            },
            {
                "data": "id",
                "render": function (data) {
                    return `<div class="text-center inline">
                                <a href="/Admin/category/Upsert/${data}" class="btn btn-success text-white" style="cursor:pointer; width: 100px;">
                                    <i class="fa fa-edit"></i> 
                                    Edit 
                                </a>
                             &nbsp;
                                <a onclick=Delete("/Admin/category/Delete/${data}") class="btn btn-danger text-white" style="cursor: pointer; width: 100px;"><i class="fa fa-trash"></i> 
                                Delete 
                                </a>
                            </div>
                            `;
                }, "width": "30%"
            }
        ],
        "language": {
            "emptyTable": "No Records Found."
        },
        "width": "100%"
    });
}

function Delete(url) {
    swal({
        title: "Are you sure you want to delete?",
        text: "Once deleted, Content can not be restored",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, Please delete content.",
        closeOnConfirm: true
    }, function () {
           $.ajax({
               type: 'DELETE',
               url: url,
               success: function (data) {
                   if (data.success) {
                       toastr.success(data.message);
                       dataTable.ajax.reload();
                   }
                   else {
                       toastr.error(data.message);
                   }
               }
        });
    });
}
