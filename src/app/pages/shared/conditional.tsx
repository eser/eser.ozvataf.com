// eslint-disable-next-line no-explicit-any
function Conditional(props: any) {
  if (!props.test) {
    return null;
  }

  return props.children;
}

export { Conditional as default };
