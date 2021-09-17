

var attractions = new Array();

fetch("./attractionsData.json")
.then(response => response.json())
.then(data => {
	attractions = data;
	filterData();
});

function filterData(category){
	let filtered = attractions;

	 /* filtering by category */
	if (category && category != "all"){
		filtered = filtered.filter(function(row,index){
			return row.Category == category;
		});
	}

	const sorted = filtered.sort(function(a,b){
		return b.Visitors - a.Visitors;
	});

	const top = sorted.filter(function(i,d){
		return i < 5;
	});

	renderBarChart(top);
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

document.querySelector('#attraction-category')
  .addEventListener('change',(event) => {
	filterData(event.target.value);
});