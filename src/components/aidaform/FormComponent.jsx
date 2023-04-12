import { useEffect } from "react";

const FormComponent = ({ form }) => {
    const dayForm = <div
        data-aidaform-widget="form-2019-12"
        data-url="https://samhepburn98.aidaform.com/greenshields-wedding"
        data-width="100%"
        data-height="500px"
        data-do-resize
    >
    </div>

    const nightForm = <div
        data-aidaform-widget="form-2019-12"
        data-url="https://samhepburn98.aidaform.com/greenshields-wedding-night"
        data-width="100%"
        data-height="500px"
        data-do-resize
    >
    </div>

    const veganForm = <div
        data-aidaform-widget="form-2019-12"
        data-url="https://samhepburn98.aidaform.com/greenshields-wedding-vegan3"
        data-width="100%"
        data-height="500px"
        data-do-resize
    >
    </div>

    const LoadForm = () => {
        let r, d = document, gt = d.getElementById, cr = d.createElement, tg = d.getElementsByTagName,
            id = "aidaform-embed";
        if (!gt.call(d, id)) {
            r = cr.call(d, "script");
            r.id = id;
            r.src = "https://embed.aidaform.com/embed.js";
            (d.head || tg.call(d, "head")[0]).appendChild(r);
        }
    }

    useEffect(
        () => LoadForm(), []
    )

    return (
        <>
            {
                form === "day" &&
                dayForm
            }
            {
                form === "night" &&
                nightForm
            }
            {
                form === "vegan" &&
                veganForm
            }
        </>
    )
};

export default FormComponent;
