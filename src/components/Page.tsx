import {PropsWithChildren} from "react";

export default function Page(props: PropsWithChildren<any>) {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto m-6">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    {props.children}
                </div>
            </div>
        </div>
    );
}