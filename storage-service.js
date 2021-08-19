class LocalStorageService {
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  
    get(key) {
      return localStorage.getItem(key)
    }
  }
  
  export default new LocalStorageService();