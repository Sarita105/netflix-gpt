export const validate = (email, password) => {
  const ispasswordvalid = /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/.test(password);
  const isemailvaid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

  if(!isemailvaid) return 'email is not valid';
  if(!ispasswordvalid) return 'password is not valid';
  return null;
}