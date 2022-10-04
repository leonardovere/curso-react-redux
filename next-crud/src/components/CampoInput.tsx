interface CampoInputProps {
    label: string
    tipo?: 'text' | 'number'
    valor?: any
    leitura?: boolean
    onChange?: (valor: any) => void
}

export default function CampoInput(props: CampoInputProps) {
    return (
        <div className="flex flex-col my-2">
            <label className="mb-2">{props.label}</label>

            <input type={props.tipo ?? 'text'} value={props.valor} onChange={ev => props?.onChange(
                (props.tipo && props.tipo === 'number') 
                    ? parseInt(ev.target.value) 
                    : ev.target.value)
                } 
            readOnly={props.leitura ?? false} className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-200 px-4 py-2 ${!props.leitura ? 'focus:bg-white' : 'border-gray-300 text-gray-400 cursor-not-allowed'}`}/>
        </div>
    )
}