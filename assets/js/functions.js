function ajaxDelete(a,e){var t=document.baseURI,i=a,n=e;$.ajax({type:"GET",url:t+"administrator/jadwal_akademik/auth_del",data:{id:i,si_akademik:cookie},success:function(a){$(".result").html(a).fadeIn(300).delay(700).fadeOut(300),$(n).addClass("animated zoomOutDown").fadeOut(2e3,function(){$(n).remove()})},error:function(a){}})}var btn=$("#updateJadwal tr");for(i=0;i<btn.length;i++){var btnDel=btn[i].querySelectorAll(".btn-delete");$(btnDel).click(function(){var a=$(this).attr("data-panel"),e=$(this).parent().parent();ajaxDelete(a,e)})}var getCookie=document.cookie,arrCookie=getCookie.split(";"),cookie=arrCookie[2],cookieIndex="si_akademik";$("#filterTa").on("change",function(){var a=$(this).val();$(".tahun_ajaran").val(a)}),$("#filterSr").on("change",function(){var a=$(this).val();$(".semester").val(a)}),$("#nis").click(function(){$(".result-nilai").fadeOut(220);var a=document.baseURI,e=$("#nis").attr("data-nis"),t=$(".tahun_ajaran").val(),i=$(".semester").val();$.ajax({type:"GET",url:a+"administrator/report/getNilai",data:{id:e,ta:t,str:i},success:function(a){$(".result-nilai").html(a).fadeIn(500).removeClass("hide")},error:function(){}})});
var htmlFooter=$(".navbar-fixed-bottom"),textFooter="<p>Copyright <strong>&copy;</strong> 2015 | <a href='http://twitter.com/ghun_tur'>@Guntur</a> <strong>JavaStudio NET</strong></p>";htmlFooter.html(textFooter),$("#homeBtn").click(function(){$(".logo-dp").addClass("animated bounceInDown")}),$("#btnKelas10").click(function(){$("#tabKelas12").removeClass("show bounceInRight").addClass("deactivated animated"),$("#tabKelas11").removeClass("show bounceInRight").addClass("deactivated animated"),$("#tabKelas10").addClass("show animated bounceInRight")}),$("#btnKelas11").click(function(){$("#tabKelas12").removeClass("show bounceInRight").addClass("deactivated animated"),$("#tabKelas10").removeClass("show bounceInRight").addClass("deactivated animated"),$("#tabKelas11").addClass("show animated bounceInRight")}),$("#btnKelas12").click(function(){$("#tabKelas10").removeClass("show bounceInRight").addClass("deactivated animated"),$("#tabKelas11").removeClass("show bounceInRight").addClass("deactivated animated"),$("#tabKelas12").addClass("show animated bounceInRight")}),$("#addRowJadwal").click(function(){var a=$("#jadwalAkademik"),t=$("#rowFirst");a.append("<tr id='rowFirst'>"+t.html()+"</tr>");var e=document.getElementById("jadwalAkademik"),n=e.querySelectorAll("tr");for(i=0;i<n.length;i++){var o=n[i].querySelectorAll("#delRow");$(o).click(function(){var a=this,t=a.parentElement.parentElement;t.remove()})}return!1}),$(".upjk").hide(),$(".btn-show").click(function(){$(".upjk").show()});
var _btnReqNilai=$("#getRequestNilai");_btnReqNilai.on("click",function(){var a=$("#sKelas").val(),t=$("#sTa").val(),e=$("#sSemester").val(),s=$("#sMapel").val(),n=$(this).attr("data-nip");$("#show_dataTable").fadeOut(100),$.ajax({type:"GET",url:window.location.origin+"/staff/data_nilai/reqDataSiswa",data:{nip:n,kelas:a,tahun_ajaran:t,semester:e,mapel:s},success:function(n){return $("#show_dataTable").fadeIn(100,function(){$(".result-nilai-siswa").fadeIn(100,function(){$(this).html(n),$(".show_nama_kelas").html(a),$(".show_tahun_ajaran").html(t),$(".show_semester").html(e),$(".show_mapel").html(s)})}),!1},error:function(){}})});
document.write('<script src="http://'+(location.host||"localhost").split(":")[0]+':35729/livereload.js?snipver=1"></script>');
$("#btnLogin").mouseenter(function(){$(this).removeClass("fa-lock").addClass("fa-unlock")}).mouseout(function(){$(this).removeClass("fa-unlock").addClass("fa-lock")});
$("#inputNip").on("keyup",function(){var i=$(this).val();""===i?($(this).css("border-color","red"),$(".nip-invalid").show().html("NIP Wajib Di Isi...!!!")):$.ajax({type:"GET",url:window.location.origin+"/administrator/staff/cekNip",data:{nip:i},success:function(i){"succes"===i?($("#inputNip").css("border-color","lime"),$(".nip-invalid").hide()):"failed"===i&&($("#inputNip").css("border-color","red"),$(".nip-invalid").show().html("NIP Sudah Terpakai"))},error:function(){}})});
$("#inputNis").on("keyup",function(){var i=$(this).val();""===i?($(this).css("border-color","red"),$(".nis-invalid").show().html("NIS Wajib Di Isi...!!!")):$.ajax({type:"GET",url:window.location.origin+"/administrator/panel_siswa/cekNis",data:{nis:i},success:function(i){"succes"===i?($("#inputNis").css("border-color","lime"),$(".nis-invalid").hide()):"failed"===i&&($("#inputNis").css("border-color","red"),$(".nis-invalid").show().html("NIS Sudah Terpakai"))},error:function(){}})});
function closeWindow(){window.close()}function printWindow(n){var o=$(n).html();$(".btn").remove(),window.print(o),window.close()}
