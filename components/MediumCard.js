function MediumCard({img, title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-3 " >
            <img className='relative h-80 w-80 rounded-xl' src={img} ></img>
            <h1>{title}</h1>
        </div>
    )
}

export default MediumCard
