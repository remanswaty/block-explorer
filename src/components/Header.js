import React from 'react'
import bgImage from '../images/bg-image.png';
import bgImageMobile from '../images/bg-image-mobile.png';
import bgImageFull from '../images/bg-image-full.jpg';
import bgImageFull2 from '../images/bg-image-full-2.png';
import searchIcon from '../images/search-icon.svg';

const Header = () => {
  return (
    <div className="h-72 px-2 sm:px-4 bg-[url('data:image/jpeg;base64,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')]">
        <div className="pt-20 pb-32">
            <h1 className="text-2xl mb-6">Goerli Testnet Explorer</h1>
            <div className="flex w-full h-10 px-1 bg-white rounded-md border-[0.6px] border-black border-opacity-25 max-w-2xl">
                  <select className="focus:outline-grey my-1.5 mr-2 pb-[2px] pl-1 hidden sm:block">
                    <option>All Filters</option>
                    <option>Addresses</option>
                    <option>Tokens</option>
                    <option>Name Tages</option>
                    <option>Domain Names</option>
                    <option>Labels</option>
                    <option>Websites</option>
                  </select>
                <input className="flex-1 flex w-80 h-5 my-2 px-1 py-3 text-md mr-2 pr-5 focus:outline-grey" placeholder="Search by Address / Txn Hash / Block /Token" />
                <img className="w-7 h-7 my-1" src={searchIcon} />
            </div>
        </div>
    </div>
  )
}

export default Header
