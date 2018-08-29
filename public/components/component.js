const component = {
    template: `
    <p>Template Works</p>
    <div ng-repeat="item in $ctrl.cart">{{item}}</div>
    
  `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        vm.cart = {};
        CartService.getAllItems().then((response) => {
            console.log(CartService.cart);
            vm.cart = CartService.cart;
          });
    }]
}

angular.module("App").component("component", component);

    // vm.delete = (index) => {
    //     vm.list.splice(index, 1);
    // }
    // vm.moreInfo = (index) => {
    //     vm.show = index;
    // }
    // vm.closeInfo = () => {
    //     vm.show = null;
    // }
    // vm.changePath = (path) => {
    //     $location.path(path);
    // }