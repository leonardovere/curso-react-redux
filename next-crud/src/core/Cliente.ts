import { DocumentData } from "firebase/firestore";

export default class Cliente {
    /**
     * # -> Informa que o atributo é privado
     */
    #id: string;
    #nome: string;
    #idade: number;

    constructor(nome: string, idade: number, id?: string) {
        this.#id = id;
        this.#nome = nome;
        this.#idade = idade;
    }

    public static vazio() {
        return new Cliente('', 0);
    }

    public get id(): string {
        return this.#id;
    }

    public get nome(): string {
        return this.#nome;
    }

    public get idade(): number {
        return this.#idade;
    }
}