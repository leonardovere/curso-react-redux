interface BotaoProps{
    cor?: 'blue' | 'green' | 'gray' | 'red'
    className?: string
    children: any
    onClick?: Function
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'

    return (
        <button onClick={_ => props.onClick()} className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white font-semibold px-4 py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}