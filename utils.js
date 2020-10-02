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

/**
 * Cek keaslian Image Base64
 */
function isValidImageBase64(base64) {
  const pattern = new RegExp(/^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/);
  return pattern.test(base64);
}

/**
 * Konversi angka besar menjadi angka singkatan seperti rb, jt, m, t
 * @param {number} number
 */
function toAbbreviateNumber(number) {
  switch (true) {
    case number > 1e3:
      return `Rp ${number / 1e3}rb`;
    case number > 1e6:
      return `Rp ${number / 1e6}jt`;
    case number > 1e9:
      return `Rp ${number / 1e9}m`;
    case number > 1e12:
      return `Rp ${number / 1e12}t`;
  }
}
