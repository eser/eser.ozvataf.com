function Conditional(props) {
    if (!props.test) {
        return null;
    }

    return props.children;
}

export {
    Conditional as default,
};
