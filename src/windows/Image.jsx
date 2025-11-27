import WindowWrapper from '#hoc/WindowWrapper.jsx';
import useWindowsStore from "#store/Window.jsx";
import {WindowControlls} from "#components/index.js";


const Image = () => {
    const {windows}=useWindowsStore()
    const data=windows.imgfile?.data

    if(!data)return null;

    const {name,imageUrl}=data

    return <>
        <div id="window-header">
            <WindowControlls target="imgfile"/>
            <h2>{name}</h2>
        </div>

        <div className="p-5 bg-white">
            {
                imageUrl?(
                    <div className="w-full">
                        <img src={imageUrl} alt={name}
                        className="w-full h-auto max-h-[70vh] object-contain rounded"/>

                    </div>
                ):null

            }

        </div>

    </>
}

const ImageWrapper=WindowWrapper(Image,"imgfile");

export default ImageWrapper
