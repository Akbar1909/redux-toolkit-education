import React,{useEffect, memo} from 'react';

const Child2 = ({lastName,onUpdateLastName}) => {


    // useEffect(() => {
    //     console.log("child 2 render")
    // });

    return (
        <div>
            child 2 {lastName}
        </div>
    );
}

export default memo(Child2);
