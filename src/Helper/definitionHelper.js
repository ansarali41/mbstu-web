import cx from 'clsx';
import _get from 'lodash/get';
import _set from 'lodash/set';
import _forEach from 'lodash/forEach';
import _keys from 'lodash/keys';
import _union from 'lodash/union';

/**
 * Set the className in defns, if not already defined, to the class injected/provided by withStyles HOC/makeStyles hook.
 *
 * For example:
 * const styles = themes => { myContainer: { color: '#000 }, myLabel: { color: '#000' } };
 *
 * In getDefns():
 * let defns = { myContainer: { className: cx(customStyles) }, myLabel: { value: 'ABC' }}
 * setClassNameInDefns(defns, props.classes);
 *
 * 'defns' becomes: { myContainer: { className: cx(customStyles) }, myLabel: { value: 'ABC', className: props.classes.myLabel }}
 *
 * @param {*} defns
 * @param {*} classes
 */
export const setClassNameInDefns = (defns, classes) => {
    const defnKeys = _keys(defns);
    const keys = _keys(classes);
    _forEach(_union(defnKeys, keys), key => {
        if (_get(defns, `${key}.className`) === undefined) {
            const classNameMixin = _get(defns, `${key}.classNameMixin`);
            const className = classNameMixin === undefined ? _get(classes, key) : cx(_get(classes, key), classNameMixin);
            _set(defns, `${key}.className`, className);
        }
    });
};
