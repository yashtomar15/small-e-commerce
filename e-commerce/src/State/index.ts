export interface Prodtypes{
    _id:string;
    name:string;
    avatar:string;
    description:string;
    price:number;
    category:string;
    developerEmail:string;
    createdAt:string;
    updatedAt:string;
    __v:number
}

export interface Categorytypes{
    _id:string;
    name:string;
    createdAt:string;
    updatedAt:string;
    __v:number
}
export interface CategoryOptionstype{
    value:string;
    label:string;
    checked:boolean;
}

export interface Actiontypes{
    type:string;
    payload:Array<Prodtypes> | Array<CategoryOptionstype>
}

export interface Statetypes{
    productsData:Array<Prodtypes>;
    displayProdData:Array<Prodtypes>
   }