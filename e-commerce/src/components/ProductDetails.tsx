import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import { Prodtypes } from "../State";
import { ProdCont,ImageDiv,Image,DescriptionDiv,Name,Price,Description,FavouriteButton,RemoveButton,ButtonsDiv } from "../styledComponents/productrDetails.styled";
import {useAppDispatch} from '../State/hooks';
import { addFavourite, setDisplayProdsData, setProdsData } from "../Redux/actions";
import {useNavigate} from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

type currProdtypes=Prodtypes[] | never[];
export const ProdDetails=()=>{
    const [currProd,setCurrProd]=useState<currProdtypes>([]);
    const {productsData,displayProdData,favouriteProd}=useSelector((state:any)=>state);
    console.log(favouriteProd,'favourites details')
    const dispatch=useAppDispatch();
    const navigate=useNavigate();
    const toast = useToast()

    const{id}=useParams();
    const localCurrProd =localStorage.getItem('currProd');
    useEffect(()=>{
        // let isPresent=false;
        if(displayProdData.length===0 && localCurrProd){
         setCurrProd([JSON.parse(localCurrProd)]);
        }else{
            displayProdData.forEach((prod:Prodtypes)=>{
                if(prod._id===id){
                 // isPresent=true;
                 setCurrProd([{...prod}]);
                 localStorage.setItem('currProd',JSON.stringify(prod));
                }
              })
        }
    },[])

    const handleFavouriteAdd=async ()=>{
        let existedFavouriteProd= localStorage.getItem('favouriteProds') || '[]';
        if(currProd[0]){
            let isPresent=false;
            favouriteProd.forEach((prod:Prodtypes) => {
                if(prod._id===currProd[0]._id){
                isPresent=true;
                }
            });

            console.log(isPresent,'found');
            if(!isPresent){
                const updateFavoriteProd=[...favouriteProd,currProd[0]];
                dispatch(addFavourite(updateFavoriteProd));
                existedFavouriteProd= await JSON.parse(existedFavouriteProd);
                localStorage.setItem('favouriteProds',JSON.stringify([...existedFavouriteProd,currProd[0]]));
            }

        }
      handleToast("Item is Added to favourites");
    }

    const handleRemove=async ()=>{ 
        console.log(displayProdData,'existed');
     const updateDisplayProdData=await displayProdData.filter((prod:Prodtypes)=>{
          return prod._id!==currProd[0]._id;
     })
     console.log(updateDisplayProdData,'updated');
     const updateProdData=productsData.filter((prod:Prodtypes)=>{
        return prod._id!==currProd[0]._id
   })
   dispatch(setProdsData(updateProdData));
   dispatch(setDisplayProdsData(updateDisplayProdData));
   navigate('/');
   handleToast('Product is deleted succesfully');
    }

    const handleToast=(title:string)=>{
        toast({
            title: title,
            position: 'top',
            status:'success',
            duration:3000,
            isClosable: true,
          })
    }
console.log(currProd);
    return (<>
 {currProd[0] && currProd.map((prod)=>{
return ( <ProdCont key={prod._id}>
    <ImageDiv>
        <Image src={prod.avatar} />
    </ImageDiv>
    <DescriptionDiv>
        <Name>{prod.name}</Name>
        <Price>${prod.price}</Price>
        <Description>{prod.description}</Description>
        {/* <ButtonsDiv> */}
        <div>
            <FavouriteButton onClick={handleFavouriteAdd}>ADD TO FAVOURITE</FavouriteButton>
        </div>
        <div>
            <RemoveButton onClick={handleRemove}>REMOVE PRODUCT</RemoveButton>
        </div>
        {/* </ButtonsDiv> */}
    </DescriptionDiv>
    </ProdCont>)
 })}
 

    </>)
}