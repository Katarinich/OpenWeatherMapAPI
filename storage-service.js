class LocalStorageService {
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }
  
  export default new LocalStorageService();