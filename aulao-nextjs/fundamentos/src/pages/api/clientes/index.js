export const clientes = [
    { id: 1, nome: 'Maria' },
    { id: 2, nome: 'Guilherme' },
    { id: 3, nome: 'João' },
    { id: 4, nome: 'Claúdio' },
    { id: 5, nome: 'Claudia' },
    { id: 6, nome: 'Orlando' },
    { id: 7, nome: 'Vinícius' },
    { id: 8, nome: 'Leonardo' },
    { id: 9, nome: 'Gustavo' },
    { id: 10, nome: 'Joana' }
]

/**
 * Obrigatoriamente a função não pode ser anônima, recebe dois parâmetros, requisição e resposta
 */
export default function cliente(req, res) {
    /**
     * .send() -> envia status de resposta para o cliente
     * .json({}) -> envia um objeto JSON como resposta
     */
    if (req.method !== 'GET') {
        res.status(405).send()
    } else {
        res.status(200).json({
            metodo: req.method,
            params: req.query,
            dados: clientes
        })
    }
}