import React from "react";
import Notice from "..";
export default () => {
    return (
        <div>
            <Notice type="info"
                text="测试"
                txt='自定义操作按键'
                clearable={true}
            />
        </div>
    )
} 