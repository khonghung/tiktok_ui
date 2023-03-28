import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, className, customFallBack, ...props }, ref) => {
    const[fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    }

    // eslint-disable-next-line jsx-a11y/alt-text
    return <img className={classNames(styles.wrapper, className)} ref={ref} src={fallBack || src} {...props} onError={handleError}/>;
});

export default Image;