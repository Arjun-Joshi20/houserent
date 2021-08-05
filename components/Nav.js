import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon} from '@heroicons/react/solid'

function Nav() {
    return (
        <header className="sticky bg-white top-0 z-50 flex flex-row py-5 md:px-5 shadow-md">
            <img className='h-16' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1628091208/Screenshot_2021-08-04_at_9.03.16_PM_oaguoh.png' ></img>
            <div className='flex border-2 rounded-full py-2 md:shadow-sm ml-[15vw]' >
                <input className='pl-5 w-72 bg-transparent outline-none' placeholder='Start Your Search' ></input>
                <SearchIcon className=' md:mx-2 hidden md:inline-flex h-9 p-1 purple-bg text-white rounded-full cursor-pointer mr-3' />
            </div>
            <div className='flex items-center space-x-4 text-gray-500 ml-[15vw] mr-5' >
                <p>Become a host</p>
                <GlobeAltIcon className='h-8' />
            </div>
            <div className='flex items-center border-2 p-2 rounded-full purple-font cursor-pointer ' >
                <MenuIcon className='h-6' />
                <UserCircleIcon className='h-6' />
            </div>
        </header>
    )
}

export default Nav
