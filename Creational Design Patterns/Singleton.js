//Singleton is a creational design pattern that lets you ensure that a 
//class has only one instance, while providing a global access point to this instance.
const Singleton = (function(){
    function ProcessManager() { 
        this.numProcess = 0
     }
  
     let pManager
     
    function createProcessManager()
    {
      pManager = new ProcessManager()
      return pManager
    }
  
    return {
        getProcessManager: () =>
        {
          if(!pManager)
            pManager = createProcessManager()
          return pManager
        }
    }
  })()
  
  const singleton = Singleton.getProcessManager()
  const singleton2 = Singleton.getProcessManager()
  
  console.log(singleton === singleton2) // true