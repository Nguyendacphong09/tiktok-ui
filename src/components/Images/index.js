import { useState, forwardRef } from 'react';
import images from '~/assets/images';
const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState([]);
    const handleError = () => {
        setFallback(customFallback);
    };
    return <img ref={ref} src={src || fallback} alt={alt} {...props} onError={handleError} />;
});

export default Image;
