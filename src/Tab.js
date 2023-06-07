import {Fragment, useState} from 'react';

const activeStyle = "py-2 px-3 rounded bg-slate-300 text-slate-900 hover:bg-slate-300 duration-150 border-2 border-slate-900";
export default function Tab({children}) {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full h-screen p-10 rounded  bg-stone-100">
            <div className="flex gap-8 justify-center text-2xl text-stone-500 border-b-2 pb-5">
                {children.map((children, index) =>
                    <button
                        className={activeTab === index ? activeStyle : 'py-2 px-3 rounded bg-slate-900 text-slate-100 hover:bg-slate-300 duration-150 border-2 border-slate-900 hover:text-slate-900'}
                        key={index}
                        onClick={() => setActiveTab(index)}
                    >{children.props.title}</button>)}

            </div>
            {children.map((children, index) => activeTab === index && childElement(children.props.title, children.props.children, index))}

        </div>
    );
}

Tab.Item = function ({children, title}) {

    return (
        <Fragment>
            <span>{title}</span>
            <p>{children}</p>
        </Fragment>
    )
}

function childElement(title, content, keyIndex) {

    return (
        <div className="mt-10" key={keyIndex}>
            <h1 className="text-stone-900 font-bold text-3xl mb-4">{title}</h1>
            <p className="text-stone-500 text-xl">{content}</p>
        </div>
    )
}