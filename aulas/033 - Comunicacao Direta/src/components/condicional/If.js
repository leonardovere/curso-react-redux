export default (props) => {
    const { cond, children } = props;

    /**
     * Filtra dentro dos filhos do componente se existe um componente else
     */
    const elseChild = children.filter(child =>
        child.type && child.type.name === 'Else'
    )[0];

    const ifChildren = children.filter(child =>
        child !== elseChild
    );

    console.log(ifChildren);

    if (cond) {
        return ifChildren;
    } else if (elseChild) {
        return elseChild;
    }

    return false;
}

export const Else = (props) => props.children;