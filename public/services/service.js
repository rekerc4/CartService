function CartService($http){
   const vm = this; 
   vm.cart = {}
   vm.getAllItems = () => {
       return $http({
           url: "/router", 
           method: "GET"
       }).then((response) => {
           console.log(response.data);
           vm.cart = response.data;
           return vm.cart; 
       })
   }
   vm.addItem = (obj) => {
       console.log(obj.name);
    return $http({
        url: "/router/", 
        method: "POST", 
        data: obj 
    }).then((response) => {
        vm.cart = response.data; 
    });
   } 

   vm.removeItem = (id) => {
            console.log("remove items ran " + id);
            return $http({
                url: "/router/" + id,  
                method: "DELETE"
            }).then((response) => {
                console.log("then ran")
                vm.cart = response.data; 
            }).catch((response) => {
                console.log(response);
            });
   }
}

angular.module("App").service("CartService", CartService); 