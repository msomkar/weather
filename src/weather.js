$(document).ready(function(){
	console.log('Document is ready');
	$('#result').hide();
	$('#forecast1').click(function(){
		// Clear all old data
		$('tbody>tr').remove();
		var cityName=$('#input1').val();
		var days=$('#sel1').val();
		// console.log(cityName);
		var urlStr='http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt='+days+'&appid=27d43832d2a4adcb97fcbfa23db130aa';
		console.log('Before calling Ajax');
		$.ajax({
		   url: urlStr,
		   error: function() {
		      console.log("error occured");
		   },
		   success: function(data) {
			for(i=0;i<days;i++){
		   	console.log('got data');
		   	console.log(data);
		   	var date=new Date(data.list[i].dt*1000);
		   	var dateStr=date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
		   	var tempmin=Math.round((data.list[i].temp.min-273.5)*100)/100 + ' &#8451;';
				var tempmax=Math.round((data.list[i].temp.max-273.5)*100)/100 + ' &#8451;';
		   	var humidity=data.list[i].humidity;
		   	var weather=data.list[i].weather[0].description;
		   	$('#textInfo').text('Forecast for '+days+'days'+' '+cityName+','+data.city.country);
			 var innerHtml = '<tr><td>'+dateStr+'</td><td>'+tempmin+'</td><td>'+tempmax+'</td><td>'+humidity+'</td><td>'+weather+'</td></tr>';
			 $('tbody').append(innerHtml);
			 $('#result').show();
		 }

			},
		});
	});
	$('#forecast').click(function(){
		// Clear all old data
		$('tbody>tr').remove();
		var cityName=$('#input1').val();

		// console.log(cityName);
		var urlStr='http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt={1}&appid=27d43832d2a4adcb97fcbfa23db130aa';
		console.log('Before calling Ajax');
		$.ajax({
			 url: urlStr,
			 error: function() {
					console.log("error occured");
			 },
			 success: function(data) {

				console.log('got data');
				console.log(data);
				var date=new Date(data.list[0].dt*1000);
				var dateStr=date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
				var tempmin=Math.round((data.list[0].temp.min-273.5)*100)/100 + ' &#8451;';
				var tempmax=Math.round((data.list[0].temp.max-273.5)*100)/100 + ' &#8451;';
				var humidity=data.list[0].humidity;
				var weather=data.list[0].weather[0].description;
				$('#textInfo').text('Current Weather for city '+cityName+','+data.city.country);
			 var innerHtml = '<tr><td>'+dateStr+'</td><td>'+tempmin+'</td><td>'+tempmax+'</td><td>'+humidity+'</td><td>'+weather+'</td></tr>';
			 $('tbody').append(innerHtml);
			 $('#result').show();


			},
		});
	});
	console.log('After registering click event');
});

console.log('Hello');
