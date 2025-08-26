interface ColorSpinnerType {
	id: number;
	color: string;
	class?: string
}
export let Colorspinner: ColorSpinnerType[] = [
	{ id: 1, color: "primary" },
	{ id: 5, color: "secondary" },
	{ id: 6, color: "success" },
	{ id: 7, color: "danger" },
	{ id: 8, color: "warning" },
	{ id: 9, color: "info" },
	{ id: 10, color: "light" },
	{ id: 11, color: "dark" }
],
	Buttonspinner: ColorSpinnerType[] = [
		{ id: 1, color: "primary-light", class: "" },
		{ id: 2, color: "secondary-light", class: "" },
		{ id: 3, color: "success-light", class: "" },
		{ id: 4, color: "info-light", class: "" },
		{ id: 5, color: "warning-light", class: "" },
		{ id: 6, color: "danger-light", class: "" },
		{ id: 7, color: "light", class: "" },
		{ id: 8, color: "dark", class: "text-dark" }
	];
