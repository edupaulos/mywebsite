'use client';

import { Box } from './Box.types';

const Box = (props: Box) => {
    return <div className={props.className}>{props.children}</div>;
};
export default Box;
