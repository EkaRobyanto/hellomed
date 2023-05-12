export type ScientificMed = {
	id: number;
	name: string;
	desc: string;
	manufacturer: string;
	activeIngredient: string;
	image: string;
};

export type MedicineTypes = {
	id:number;
	name:string;
	image:string;
	title:string;
	description?:string;
}

export type MedicineDetail = {
	name: string;
	image: string;
	description: string;
	usage_rules : string
	ways_to_use: string
	ingredients: ingredients[]
}

export type ingredients = {
	name: string,
	image: string,
}