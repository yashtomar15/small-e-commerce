import { Fragment, useState,useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import { ProductList } from './Productlist';
import { CategoryOptionstype, Prodtypes } from '../State';
import {useSelector,useDispatch} from 'react-redux';
import {useAppDispatch} from '../State/hooks';
import { setDisplayProdsData } from '../Redux/actions';
import { FilterButton,IconDiv,Span } from '../styledComponents/Home.styled';
import {MdFilterList} from 'react-icons/md';

interface FiltetrPropsType{
    categoryOptions:Array<CategoryOptionstype>;
  }
  
export default function Products({categoryOptions}:FiltetrPropsType) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isFilterShow, setIsFilterShow ] = useState(window.innerWidth<=1023);
  const [filterCats,setfilterCats]=useState(['']);
  const {productsData,displayProdData}=useSelector((state:any)=>state);

  const dispatch=useAppDispatch();

  const handleFilter=()=>{
    setMobileFiltersOpen(!mobileFiltersOpen);
  }

  useEffect(()=>{
    console.log(filterCats);
    // filtering products
    filterProducts();

    // check screensize for show filter ui
    function handleResize() {
      // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      if(window.innerWidth<=1023){
        console.log('true');
          setIsFilterShow(true);
      }else if(window.innerWidth>=1024){
          setIsFilterShow(false);
      }
    
  }
  
    window.addEventListener('resize', handleResize)
  },[filterCats])

  const filterProducts=async ()=>{
    if(filterCats.length<=1){
      dispatch(setDisplayProdsData(productsData));
    }else{
      const filterProd=productsData.filter((prod:Prodtypes)=>{
        return filterCats.indexOf(prod.category)!==-1;
      })
      // console.log(filterProd,'filter prod');
          dispatch(setDisplayProdsData(filterProd.reverse()));
    }
  }
  
const handleChange=(e:any)=>{
 console.log(e.target.value);
 const index=filterCats.indexOf(e.target.value);
 if(index===-1){
  setfilterCats([...filterCats,e.target.value]);
 }else{
  const updatedFilterCat=filterCats.filter((cat)=>cat!==e.target.value);
  setfilterCats(updatedFilterCat);
 }
  }

  const filters = [
    {
      id: 'category',
      name: 'Category',
      options: categoryOptions,
    },
  ]

  return (
    <div className="bg-white" >
                {isFilterShow && <FilterButton className='filterButton' onClick={handleFilter} >
            <IconDiv><MdFilterList /></IconDiv> <Span>Filter</Span></FilterButton> }  
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6" defaultOpen>
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        
        {/* <button onClick={handleFilter}>Filters</button> */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

          </div>
          <section aria-labelledby="products-heading" className="pt-6 pb-24">

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6">
              {/* Pc Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6" defaultOpen>
                    {({ open}) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={handleChange}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-5">
                {/* Replace with your content */}
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full" style={{marginLeft:"30px"}}>
                <ProductList displayProdData={displayProdData} />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
