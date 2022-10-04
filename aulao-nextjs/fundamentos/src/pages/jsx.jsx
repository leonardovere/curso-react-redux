import Layout from '../components/Layout'

export default function Jsx() {
    const a = 2
    const b = 3

    return (
        <div>
            <Layout titulo="JSX">
                <h1>JSX é um conceito central</h1>
                <h2>{JSON.stringify({ resposta: a * b })}</h2>
            </Layout>
        </div>
    )
}