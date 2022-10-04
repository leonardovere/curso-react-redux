export default function Titulo(props): JSX.Element {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl border-b-4 border-purple-600">{props.children}</h1>
        </div>
    )
}