import React, { memo } from 'react'

export const Small = memo(({ value }) => {
    console.log("Me rellamo");
    return (
        <small>{value}</small>
    )
});
