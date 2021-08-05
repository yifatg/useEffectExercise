import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}
export const checkProps = (component, conformingProps) =>{
    //component.propTypes object
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    //if props passes error will be undefined
    expect(propError).toBeUndefined();
}