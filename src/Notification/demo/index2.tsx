import React from "react";
import Notice from "..";
export default () => {
    return (
        <div>
            <Notice type="info"
                text="Info"
                txt='This is a notification!'
            />
            <Notice type="error"
                text="Error"
                txt='This is a notification!'
            />
            <Notice type="warning"
                text="Warning"
                txt='This is a notification!'
            />
            <Notice type="success"
                text="Success"
                txt='This is a notification!'
            />
            <Notice type="normal"
                text="Normal"
                txt='This is a notification!'
            />
            <Notice type="loading"
                text="Loading"
                txt='This is a notification!'
            />
        </div>
    )
}
