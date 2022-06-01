export const initialFormValues = {
  fullName: "",
  street: "",
  cpf: "",
  cep: "",
  dataNasc: "",
  city: "",
  state: "",
  number: "",
};

export const initialFormAddValues = {
  name: "",
  dataStart: "",
  dataEnd: "",
  number: "",
};

export const cpfMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};
export const cepMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
};

export const CpfValid = (value) => {
  if (value.length != 14) {
    return false;
  }
  return true;
};

export const CepValid = (value) => {
  if (value.length != 9) {
    return false;
  }
  return true;
};

export const NumberValid = (value) =>{
  let onlyNumbers = new RegExp('^[0-9]*$');
  if(onlyNumbers.test(value)){
    return true
  }
  return false
}
export const isNull = (value) => {
  if(value=="" || value ==null){
    return true;
  }
  return false
};

export const verifyLogin = (data) => {
  let message = "CPF invalido";
  let cpf = data.get("cpf");
  if (CpfValid(cpf)) {
    return true;
  }
  return message;
};


export const verifyCadastro = (data) => {
  let message = "CPF invalido ou não cadastrado";
  let cpf = data.get("cpf");
  let cep = data.get("cep");
  let fullName = data.get("fullName");
  let dataNasc =  data.get("dataNasc");
  let state = data.get("state");
  let street = data.get("street");
  let city = data.get("city");
  let number = data.get("number");

  if (!CpfValid(cpf)) {
    return message;
  }
  if (!CepValid(cep)) {
    message = "CEP";
    return message;
  }

  if (isNull(fullName)) {
    message = `Campo Nome Completo deve ser preenchido`;
    return message;
  }
  if (isNull(dataNasc)) {
    message = `Campo data de nascimento deve ser preenchido`;
    return message;
  }
  if (isNull(city)) {
    message = `Campo cidade deve ser preenchidos`;
    return message;
  }
  if (isNull(state)) {
    message = `Campo estado deve ser preenchidos`;
    return message;
  }
  if (isNull(street)) {
    message = `Campo rua deve ser preenchidos`;
    return message;
  }
  if (isNull(number)) {
    message = `O campo numero deve ser preenchidos`;
    return message;
  }

  if (!NumberValid(number)) {
    message = `O campo numero deve ser um numero`;
    return message;
  }

  return true;
};
export const verifyAdd = (data) =>{
  let message = "Nome não pode ser vazio";
  let name = data.get("name");
  let dataStart =  data.get("dataStart");
  let dataEnd =  data.get("dataEnd");
  let number = data.get("number");

  if (isNull(name)) {
    message = `Campo Nome Completo deve ser preenchido`;
    return message;
  }
  if (isNull(number)) {
    message = `O campo numero de candidatos deve ser preenchidos`;
    return message;
  }
  if (!NumberValid(number)) {
    message = `O campo numero de candidatos deve ser um numero`;
    return message;
  }
  if (isNull(dataStart)) {
    message = `Campo data de inicio deve ser preenchido`;
    return message;
  }
  if (isNull(dataEnd)) {
    message = `Campo data de fim deve ser preenchido`;
    return message;
  }


  return true;
}