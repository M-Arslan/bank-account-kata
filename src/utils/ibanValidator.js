export const isValidIBAN = (iban) => {
    const pattern = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/;
    return pattern.test(iban);
  };