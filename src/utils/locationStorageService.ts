const localStorageService = {
    set,
    get,
    setObject,
    getObject,
    clear,
    remove,
  };
  function set(key: string, value: any) {
    localStorage[key] = value;
    return localStorage[key];
  }
  function get(key: string, defaultValue: any) {
    return localStorage[key] || defaultValue;
  }
  function setObject(key: string, value: any) {
    localStorage[key] = JSON.stringify(value);
    return localStorage[key];
  }
  
  function getObject(key: string, value: any) {
    return JSON.parse(localStorage[key] || "{}");
  }
  
  function clear() {
    return localStorage.clear();
  }
  
  function remove(key: string) {
    return localStorage.removeItem(key);
  }
  
  export default localStorageService;