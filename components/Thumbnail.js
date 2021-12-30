import { forwardRef } from 'react';


const Thumbnail = forwardRef(({result}, ref) => {
    return (
        <div ref={ref} className="p-5 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <a href={result.url}>
                <img className=" w-auto h-80"
                    
                    src={result.urlToImage}
                />
                <div className="p-2">
                    <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                        {result.title}
                    </h2>

                    <p className="line-clamp-3 max-w-md"> {result.description} </p>                  
                </div>
            </a>
        </div>
    );
})

export default Thumbnail;
