import Router from "vue-router";
import City from "@/components/City.vue";
import Reports from "@/components/Reports.vue";
import CityReport from "@/components/CityReport.vue";

const router = new Router({
	mode: "history",
	routes: [
		{
			name: "City",
			path: "/",
			component: City
		},
		{
			name: "Reports",
			path: "/all",
			component: Reports
		},
		{
			name: "CityReport",
			path: "/:city",
			component: CityReport
		}
		
	],
});

export default router;