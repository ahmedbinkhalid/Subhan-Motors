export const LoginValidator = () : boolean => {
    const token = localStorage.getItem("token");
    if (token) {
        return true;
      }
      return false;
}