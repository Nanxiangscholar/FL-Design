import React from "react";
import Notice from "..";
export default () => {
    return (
        <div>
            <Notice type="info"
                text="topLeft"
                txt='左上角的提示框'
                direction="topLeft"
            />
            <Notice type="info"
                text="topRight"
                txt='右上角的提示框'
                direction="topRight"
            />
            <Notice type="info"
                text="bottomLeft"
                txt='左下角的提示框'
                direction="bottomLeft"
            />
            <Notice type="info"
                text="bottomRight"
                txt='右下角的提示框'
                direction="bottomRight"
            />
        </div>
        
    )
}