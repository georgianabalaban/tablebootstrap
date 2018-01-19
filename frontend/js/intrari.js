/*global $*/

// READ recods on page load
$(document).ready(function () {
    readRecords(); // calling function
    $("#articles").tableExport();//exports table to csv and txt
});

// READ records
function readRecords() {
    $.get("/intrari", {}, function (data, status) {
        data.forEach(function(value) {
            
            var row = '<tr id="row_id_'+ value.id +'">'
            			+ displayColumns(value)
        				+ '</tr>';
            $('#articles').append(row);
            
        });
    });
}

function displayColumns(value) {
    if(value.stare_factura=='Returnata'){
    return 	'<td>'+value.id+'</td>'
            + '<td class="nr_intrare">'+value.nr_intrare+'</td>'
			+ '<td class="data_intrare">'+value.data_intrare+'</td>'
			+ '<td class="furnizori">'+value.furnizori+'</td>'
			+ '<td class="nr_factura">'+value.nr_factura+'</td>'
			+ '<td class="data_factura">'+value.data_factura+'</td>'
			+ '<td class="model_document">'+value.model_document+'</td>'
			+ '<td class="data_scadenta">'+value.data_scadenta+'</td>'
			+ '<td class="valoare_totala">'+value.valoare_totala+'</td>'
			+ '<td class="stare_factura" style="color:blue">'+value.stare_factura+'</td>'
			+ '<td class="trimitereInConta">DA</td>'
			+ '<td align="center">'
			+	'<button onclick="viewRecord('+ value.id +')" class="btn btn-edit">Update</button>'
			+ '</td>'
			+ '<td align="center">'
			+	'<button onclick="deleteRecord('+ value.id +')" class="btn btn-danger">Delete</button>'
			+ '</td>';
    }else if(value.stare_factura=='Valida'){
        return 	'<td>'+value.id+'</td>'
            + '<td class="nr_intrare">'+value.nr_intrare+'</td>'
			+ '<td class="data_intrare">'+value.data_intrare+'</td>'
			+ '<td class="furnizori">'+value.furnizori+'</td>'
			+ '<td class="nr_factura">'+value.nr_factura+'</td>'
			+ '<td class="data_factura">'+value.data_factura+'</td>'
			+ '<td class="model_document">'+value.model_document+'</td>'
			+ '<td class="data_scadenta">'+value.data_scadenta+'</td>'
			+ '<td class="valoare_totala">'+value.valoare_totala+'</td>'
			+ '<td class="stare_factura" style="color:green">'+value.stare_factura+'</td>'
			+ '<td class="trimitereInConta">NU</td>'
			+ '<td align="center">'
			+	'<button onclick="viewRecord('+ value.id +')" class="btn btn-edit">Update</button>'
			+ '</td>'
			+ '<td align="center">'
			+	'<button onclick="deleteRecord('+ value.id +')" class="btn btn-danger">Delete</button>'
			+ '</td>';
    }else if(value.stare_factura=='Initiala'){
            return 	'<td>'+value.id+'</td>'
            + '<td class="nr_intrare">'+value.nr_intrare+'</td>'
			+ '<td class="data_intrare">'+value.data_intrare+'</td>'
			+ '<td class="furnizori">'+value.furnizori+'</td>'
			+ '<td class="nr_factura">'+value.nr_factura+'</td>'
			+ '<td class="data_factura">'+value.data_factura+'</td>'
			+ '<td class="model_document">'+value.model_document+'</td>'
			+ '<td class="data_scadenta">'+value.data_scadenta+'</td>'
			+ '<td class="valoare_totala">'+value.valoare_totala+'</td>'
			+ '<td class="stare_factura" style="color:yellow">'+value.stare_factura+'</td>'
			+ '<td class="trimitereInConta">NU</td>'
			+ '<td align="center">'
			+	'<button onclick="viewRecord('+ value.id +')" class="btn btn-edit">Update</button>'
			+ '</td>'
			+ '<td align="center">'
			+	'<button onclick="deleteRecord('+ value.id +')" class="btn btn-danger">Delete</button>'
			+ '</td>';
    }else if(value.stare_factura=='Anulata'){
        return 	'<td>'+value.id+'</td>'
            + '<td class="nr_intrare">'+value.nr_intrare+'</td>'
			+ '<td class="data_intrare">'+value.data_intrare+'</td>'
			+ '<td class="furnizori">'+value.furnizori+'</td>'
			+ '<td class="nr_factura">'+value.nr_factura+'</td>'
			+ '<td class="data_factura">'+value.data_factura+'</td>'
			+ '<td class="model_document">'+value.model_document+'</td>'
			+ '<td class="data_scadenta">'+value.data_scadenta+'</td>'
			+ '<td class="valoare_totala">'+value.valoare_totala+'</td>'
			+ '<td class="stare_factura" style="color:red">'+value.stare_factura+'</td>'
			+ '<td class="trimitereInConta">NU</td>'
			+ '<td align="center">'
			+	'<button onclick="viewRecord('+ value.id +')" class="btn btn-edit">Update</button>'
			+ '</td>'
			+ '<td align="center">'
			+	'<button onclick="deleteRecord('+ value.id +')" class="btn btn-danger">Delete</button>'
			+ '</td>';
    }else{
        return 	'<td>'+value.id+'</td>'
            + '<td class="nr_intrare">'+value.nr_intrare+'</td>'
			+ '<td class="data_intrare">'+value.data_intrare+'</td>'
			+ '<td class="furnizori">'+value.furnizori+'</td>'
			+ '<td class="nr_factura">'+value.nr_factura+'</td>'
			+ '<td class="data_factura">'+value.data_factura+'</td>'
			+ '<td class="model_document">'+value.model_document+'</td>'
			+ '<td class="data_scadenta">'+value.data_scadenta+'</td>'
			+ '<td class="valoare_totala">'+value.valoare_totala+'</td>'
			+ '<td class="stare_factura">'+value.stare_factura+'</td>'
			+ '<td class="trimitereInConta">NU</td>'
			+ '<td align="center">'
			+	'<button onclick="viewRecord('+ value.id +')" class="btn btn-edit">Update</button>'
			+ '</td>'
			+ '<td align="center">'
			+	'<button onclick="deleteRecord('+ value.id +')" class="btn btn-danger">Delete</button>'
			+ '</td>';
    }
			
}

function addRecord() {
    $('#id').val('');
    $('#nr_intrare').val('');
    $('#data_intrare').val('');
    $('#furnizori').val('');
    $('#nr_factura').val('');
    $('#data_factura').val('');
    $('#model_document').val('');
    $('#data_scadenta').val('');
    $('#valoare_totala').val('');
    $('#stare_factura').val('');
    $('#myModalLabel').html('Adauga o noua intrare');
    $('#furnizori').on('click',function(){
        if($('#furnizori').val()=='Metro'){
            $('#taxa').val(100);
        }else if($('#furnizori').val()=='Carffour'){
            $('#taxa').val(200);
        }else if($('#furnizori').val()=='Altex'){
            $('#taxa').val(300);
        }else if($('#furnizori').val()=='Emag'){
            $('#taxa').val(400);
        }
    });

}

function date(){
    var date=$('#data_intrare').val();
    $('#data_factura').val(date);
    
    var initial=document.querySelector('#data_intrare').value;
    var data_scadenta=document.querySelector('#data_scadenta');
    var scadenta = initial.split("-");
    scadenta = new Date(scadenta[0], scadenta[1] - 1, scadenta[2]);
    scadenta.setDate(scadenta.getDate() + 30);
    data_scadenta.valueAsDate = null;
    data_scadenta.valueAsDate = scadenta;
}

function viewRecord(id) {
    var url = "/intrari/" + id;
    
    $.get(url, {}, function (data, status) {
        //bind the values to the form fields
        $('#nr_intrare').val(data.nr_intrare);
        $('#data_intrare').val(data.data_intrare);
        $('#furnizori').val(data.furnizori);
        $('#nr_factura').val(data.nr_factura);
        $('#data_factura').val(data.data_factura);
        $('#model_document').val(data.model_document);
        $('#data_scadenta').val(data.data_scadenta);
        $('#valoare_totala').val(data.valoare_totala);
        $('#stare_factura').val(data.stare_factura);

        $('#id').val(id);
        $('#myModalLabel').html('Edit intrare');
        
        $('#add_new_record_modal').modal('show');
        

        if($('#furnizori').val()=='Metro'){
            $('#taxa').val(100);
        }else if($('#furnizori').val()=='Carffour'){
            $('#taxa').val(200);
        }else if($('#furnizori').val()=='Altex'){
            $('#taxa').val(300);
        }else if($('#furnizori').val()=='Emag'){
            $('#taxa').val(400);
        }

    });
}

function saveRecord() {
    var formData = $('#record_form').serializeObject();
    if(formData.id) {
        updateRecord(formData);
    } else {
        createRecord(formData);
    }
}

function createRecord(formData) {
    $.ajax({
        url: '/intrari/',
        type: 'POST',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            if($('#nr_intrare').val()=='' || $('#data_intrare').val()=='' || $('#furnizori').val()=='' || $('#model_document').val()=='' || $('#valoare_totala').val()==''){
                alert('Please enter the required values');
            }else{
            $('#add_new_record_modal').modal('hide');
            
            var row = '<tr id="row_id_'+ data.id +'">'
            			+ displayColumns(data)
        				+ '</tr>';
            $('#articles').append(row);
            }
        } 
    });
}

function updateRecord(formData) {
    $.ajax({
        url: '/intrari/'+formData.id,
        type: 'PUT',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            $('#row_id_'+formData.id+'>td.nr_intrare').html(formData.nr_intrare);
            $('#row_id_'+formData.id+'>td.data_intrare').html(formData.data_intrare);
            $('#row_id_'+formData.id+'>td.furnizori').html(formData.furnizori);
            $('#row_id_'+formData.id+'>td.nr_factura').html(formData.nr_factura);
            $('#row_id_'+formData.id+'>td.data_factura').html(formData.data_factura);
            $('#row_id_'+formData.id+'>td.model_document').html(formData.model_document);
            $('#row_id_'+formData.id+'>td.data_scadenta').html(formData.data_scadenta);
            $('#row_id_'+formData.id+'>td.valoare_totala').html(formData.valoare_totala);
            $('#row_id_'+formData.id+'>td.stare_factura').html(formData.stare_factura);
            $('#add_new_record_modal').modal('hide');
            
        } 
    });
}

function deleteRecord(id) {
    $.ajax({
        url: '/intrari/'+id,
        type: 'DELETE',
        success: function(data) {
            $('#row_id_'+id).remove();
        }
    });
}

function search() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("articles");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
    