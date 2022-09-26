import React from 'react';
import { Prodtypes } from '../State';
import {NavLink} from '../styledComponents/Home.styled';

interface  ProdPropTypes{
    displayProdData:Array<Prodtypes>
}
export const ProductList=({displayProdData}:ProdPropTypes)=>{
    return (
        <div className="bg-white" >
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ProductContRelative" >
            {displayProdData.map((product:Prodtypes) => (
              <NavLink to={`/proddetails/${product._id}`} key={product._id}>
              <div  className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.avatar}
                    alt={"product image"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                {/* <button className="pointer-events-auto" onClick={(e)=>{alert('click');console.log(e,'event1')}} style={{backgroundColor:'black',color:'white'}}>onClick</button> */}
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      {/* <a href={""}> */}
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      {/* </a> */}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    )
}