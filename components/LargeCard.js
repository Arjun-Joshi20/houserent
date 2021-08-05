function LargeCard({img, title, desc, buttonTitle}) {
    return (
        <div className="relative py-16 cursor-pointer rounded-md" >
            <div className="relative h-96 min-w-[300px]" >
                <img src={img} ></img>  
            </div>
            <div className="absolute top-32 left-12" >
                <h1 class='text-4xl mb-3 w-64' >{title}</h1>
                <h1>{desc}</h1>
                <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5" >{buttonTitle}</button>
            </div>
        </div>
    )
}

export default LargeCard
