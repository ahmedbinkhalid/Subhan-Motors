// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleNavigation = (path : string, navigate : any, openModal : any, LoginValidator : any) => {
    if (LoginValidator()) {
      navigate(path);
    } else {
      openModal("login", () => {
        navigate(path); 
      });
    }
  };