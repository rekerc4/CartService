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
       })
   }
}

angular.module("App").service("CartService", CartService); 