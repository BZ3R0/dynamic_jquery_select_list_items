/**
 *  jQuery.SelectListActions
 *  https://github.com/esausilva/jquery.selectlistactions.js
 *
 *  (c) http://esausilva.com
 */

(function ($) {
    //Moves selected item(s) from sourceList to destinationList
	
	function montar(sourceList, tipo, target){
				/* tipo 1 = um, ou mais de uma selecão;
				   tipo 2 = para todos os 	
				*/
				result =  '';
				
				if (tipo === 1){
					sourceListOption = $('#'+sourceList + ' option:selected');
				}else{
					sourceListOption = $('#'+sourceList + ' option');
				}				
				
				var result ="";
				sourceListOption.each(function(){
						var label = $(this).text();
						var    id = $(this).val();
						if(sourceList == "lstBox1"){
							//lvl1 = 'Serviços'							
							lvl = 1
							target = 'lvl_'+lvl; group = "dinamic_"+lvl;
							document.getElementById(group).innerHTML += get_html(label, id, 'lista_servicos', target,0 );							
						} else if (sourceList == "lista_servicos" ){
							//lvl2 = 'ativos'
							lvl = 2
							target = 'lvl_'+lvl; group = "dinamic_"+lvl;
							var targetgroup  = document.getElementById(group)
							if ($('#'+target+'_'+id).length == 0){ 
								targetgroup.innerHTML += get_html(label, id, 'lista_ativos', target,0 );
							}
						}else if (sourceList == "lista_ativos" ){
							//lvl3 = 'computadores'
							lvl = 3
							target = 'lvl_'+lvl; group = "dinamic_"+lvl;	
							var targetgroup  = document.getElementById(group)
							if ($('#'+target+'_'+id).length == 0){ 
								targetgroup.innerHTML += get_html(label, id, 'lista_computadores', target,0 );
							}							
						};	
					});
				//return result;		
	};
		
		
		/*
		<div class="row">
					<div class="col-md-3 col-sm-3 col-xs-3 add-btns">
						<input type="button" id="btn01" value=">" onclick="teste('#lista_sevicos', '#negocio01');" class="btn btn-default" />
					</div>
					<div class="col-md-9 col-sm-9 col-xs-9">
						<label class="control-label">Inovação/Dev</label>
						<div class="selected-left">
							<select multiple class="form-control" id="negocio01">
								<!--<option value="654">ERP</option>-->
							</select>
						</div>
						<div class="selected-right">
							<!--<button type="button" class="btn btn-default btn-sm" id="btnAvengerUp">
								<span class="glyphicon glyphicon-chevron-up"></span>
							</button>
							<button type="button" class="btn btn-default btn-sm" id="btnAvengerDown">
								<span class="glyphicon glyphicon-chevron-down"></span>
							</button>-->
							<button type="button" class="btn btn-default btn-sm" onclick="remove('#negocio01');" id="btnRemove01">
								<span class="glyphicon glyphicon-remove"></span>
							</button>
						</div>
					</div>
				</div>
		*/
		
	
		function get_html(label, id, sourceList,target, isfinal ){
			var row = '<div class="row" id ="row_'+id+'">'
						+ '<div class="col-md-3 col-sm-3 col-xs-3 add-btns">';
							if(!isfinal){
								row += '<input type="button" id="btn_' +id+ '" value=">" onclick="insert(\''+sourceList+'\',\''+target+'_'+id+'\',1,0)" ';
							}else{
								row += '<input type="button" id="btn_' +id+ '" value=">" onclick="insert(\''+sourceList+'\',\''+target+'_'+id+'\',1,1)" ';
							}
							row += 'class="btn btn-default" />'
						+ '</div>'
						+ '<div class="col-md-9 col-sm-9 col-xs-9">'
							+ '<label class="control-label col-md-12">'+label+'</label>'
							+ '<div class="selected-left">'
								+ '<select multiple class="form-control" id="'+target+'_'+id+ '">'
								+ '</select>'
							+ '</div>'
							+ '<div class="selected-right">' 
								+ '<button type="button" class="btn btn-default btn-sm" onclick="remove(\'#'+target+'_'+id+ '\',1);" id="btnRemove_' +id+ '">'
									+ '<span class="glyphicon glyphicon-remove"></span>'
								+ '</button>'
							+ '</div>'
						+ '</div>'
					+ '</div>';
					return row;
					//return row.replace(/\'/g, "\\\'");
		}
	
    $.fn.moveToList = function (sourceList, destinationList, type, remove) {	
	
		if (type === 1){
				var	opts = $('#'+sourceList + ' option:selected');
		}else{
				var	opts = $('#'+sourceList + ' option');		}			
        
		var optsDest = $('#'+destinationList + ' option');
		var exist = false;	
			opts.each(function(){
						
						var    id = $(this).val();
							optsDest.each(function(){								
								if ($(this).val()== id){
									exist = true;
								};
							})
						
		})
		
		if(!exist){ 
			if (opts.length == 0) {
				alert("Nenhum item selecionado para mover");
			}
			
			
			montar(sourceList, type, destinationList);
			if(remove){
				$(opts).remove();
			}
			$('#'+destinationList).append($(opts).clone());
		};
    };

    //Moves all items from sourceList to destinationList
    $.fn.moveAllToList = function (sourceList, destinationList) {
        var opts = $(sourceList + ' option');
        if (opts.length == 0) {
            alert("Nenhum item selecionado para mover");
        }

        $(destinationList).append($(opts).clone());
    };

    //Moves selected item(s) from sourceList to destinationList and deleting the
    // selected item(s) from the source list
    $.fn.moveToListAndDelete = function (sourceList, destinationList) {		
        var opts = $(sourceList + ' option:selected');
        if (opts.length == 0) {
            alert("Nenhum item selecionado para mover");
        }

        $(opts).remove();
        $(destinationList).append($(opts).clone());
    };

    //Moves all items from sourceList to destinationList and deleting
    // all items from the source list
    $.fn.moveAllToListAndDelete = function (sourceList, destinationList) {
        var opts = $(sourceList + ' option');
        if (opts.length == 0) {
            alert("Nenhum item selecionado para mover");
        }

        $(opts).remove();
        $(destinationList).append($(opts).clone());
    };

    //Removes selected item(s) from list
    $.fn.removeSelected = function (list) {
        var opts = $(list + ' option:selected');
        if (opts.length == 0) {
            alert("Nenhum item selecionado para remover");
        }

        $(opts).remove();
    };

    //Moves selected item(s) up or down in a list
    $.fn.moveUpDown = function (list, btnUp, btnDown) {
        var opts = $(list + ' option:selected');
        if (opts.length == 0) {
            alert("Nenhum item selecionado para mover");
        }

        if (btnUp) {
            opts.first().prev().before(opts);
        } else if (btnDown) {
            opts.last().next().after(opts);
        }
    };
})(jQuery);
