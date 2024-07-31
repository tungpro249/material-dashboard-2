// eslint-disable-next-line prefer-regex-literals
export const detectWhiteSpace: RegExp = new RegExp(/\s+/g);
// Explain: do not allow entering special characters in the name
// eslint-disable-next-line prefer-regex-literals
export const validUserRegex: RegExp = new RegExp(
  /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỂẾưạảấầẩẫậắằẳẵặẹẻẽềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵýỷỹ \d]+$/
);
// Explain: detect special characters in code fields
// eslint-disable-next-line prefer-regex-literals
export const detectSpecialCharacterInCodeFields: RegExp = new RegExp(/^[a-zA-Z\d]+$/);
