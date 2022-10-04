import { clientes } from "."

export default function handler(req, res) {
    const { codigo } = req.query;
    const filtrado = clientes.filter(c => c.id == codigo)[0] ?? { res: `Cliente ${codigo} Não encontrado !!` }

    res.status(200).json(filtrado)
}