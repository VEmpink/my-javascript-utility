/**
 * Fungsi untuk mengakses atau mendapatkan nilai dari
 * sebuah Object Property dengan menggunakan string
 *
 * Contoh String yang valid:
 * "obj"
 * "obj.nested.prop"
 *
 * @param {string} str - Object Property tapi menggunakan string
 * @param {object} dataObject - Data object yang ingin diakses
 *
 * @returns - Mengembalikan value dari Object Property yang telah diakses
 *            secara Looping
 */
function accessObjectPropertyByString(str, dataObject) {
  return str.split('.').reduce((obj, prop) => {
    return obj[prop];
  }, dataObject);
}

/**
 * Mengambil List Object Property yang dapat diakses
 *
 * Contoh hasil
 * "['obj', 'obj.prop', 'obj.prop2']"
 */
function getAccessableObjectProperty(dataObject, prefix = '') {
  return Object.keys(dataObject).reduce(function(result, objProp) {
    if ( Array.isArray(dataObject[objProp]) ) {
      return result;
    } else if ( typeof dataObject[objProp] === 'object' && dataObject[objProp] !== null ) {
      return [
        ...result,
        ...getAccessableObjectProperty(dataObject[objProp], prefix + objProp + '.')
      ];
    }

    return [...result, prefix + objProp];
  }, []);
}
