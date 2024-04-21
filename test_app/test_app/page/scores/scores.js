frappe.pages['scores'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Scores',
		single_column: true
	});
}