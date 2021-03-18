// capitalize first letter of search inputs

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// if customer name exists in the list, set background to green

$(".search-name").on("submit", function (e) {
	e.preventDefault();
	$(".cust-li").css("background-color", "white");
	let first = $(".first-name").val().toLowerCase();

	let last = $(".last-name").val().toLowerCase();

	let full = capitalizeFirstLetter(first) + " " + capitalizeFirstLetter(last);
	let list = $(".customer-list").html();
	$(document).ready(function () {
		if (!list.includes(full)) {
			alert(`Customer ${full} not found, please try again.`);
		} else {
			$(`li:contains(${full})`).css("background-color", "#0D5727");
		}
	});
});
