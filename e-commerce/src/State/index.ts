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

export interface Actiontype{
    type:string;
    payload:Array<Prodtypes>
}

export interface Statetypes{
    productsData:Array<Prodtypes>;
    displayProdData:Array<Prodtypes>
   }