
import app, { db } from '../../backend/config'
import { collection, getFirestore, QueryDocumentSnapshot, SnapshotOptions, deleteDoc, doc, updateDoc, addDoc, getDoc, query, getDocs } from "firebase/firestore";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRespositorio";

export default class ColecaoCliente implements ClienteRepositorio {
    #conversor = {
        toFirestore(cliente: Cliente): any {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente {
            const dados = snapshot?.data(options);
            return new Cliente(dados.nome, dados.idade, snapshot?.id);
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        console.log(cliente);

        if (cliente?.id) {
            await updateDoc(this.doc(cliente.id), {
                nome: cliente.nome,
                idade: cliente.idade,
            });
            
            return cliente;
        }

        const docRef = await addDoc(this.colecao(), cliente);
        cliente = (await getDoc(docRef)).data();

        return cliente;
    }

    async excluir(cliente: Cliente): Promise<boolean> {
        try {
            await deleteDoc(this.doc(cliente.id));
            return true;
        } catch (error) {
            return false;
        }
    }
    
    async listar(): Promise<Cliente[]> {
        try {
            const q = query(this.colecao())
            const querySnapshot = await getDocs(q);

            return querySnapshot.docs.map(querySnapshot => querySnapshot.data()) ?? [];
        } catch (error) {
            return [];
        }
    }

    private doc(id: string) {
        return doc(db, 'clientes', id).withConverter(this.#conversor);
    }
    
    private colecao() {
        return collection(db, 'clientes').withConverter(this.#conversor);
    }

}