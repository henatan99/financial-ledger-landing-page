import React from "react";

const ContentWithGridImages = (props) => {
    const { entryText, title, description, bizImages } = props;
    
    return (
        <div className="px-[20px] md:px-[32px] lg:px-8 pt-[60px] lg:pt-[80px] pb-[50px] lg:pb-[70px] flex flex-col items-center gap-8 md:gap-10 text-custom_black">
            <p className="text-18 w-[207px] md:w-full">{entryText}</p>
            <h2 className="text-40-32 w-[207px] md:w-full">{title}</h2>
            <p className="text-18 w-[207px] md:w-full">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 w-full">
                {
                    bizImages && bizImages.length > 0 &&
                    bizImages.map((img) => (
                        <div key={img.id} className={`flex flex-col ${img.role && 'gap-2 md:gap-4'}`}>
                            <img src={img.src} className="w-full h-full object-cover"></img>
                            {img.name ? <h2 className="text-32-20">{img.name}</h2> : null}
                            {img.role ? <p className="mb-3 text-18">{img.role}</p> : null}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ContentWithGridImages;