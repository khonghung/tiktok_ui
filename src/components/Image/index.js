import classNames from 'classnames';
import PropTypes from 'prop-types';
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

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    customFallBack: PropTypes.string,
}

export default Image;