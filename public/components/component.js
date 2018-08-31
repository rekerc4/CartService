const component = {
    template: `
    <p>Template Works</p>
    <form class="adding" id="adding" ng-submit="$ctrl.add($ctrl.inp)">
        <h2> Add New Product </h2>
        <label for="name-in" class="label">Name: </label>
        <label for="quantity-in" class="label">Qunatity: </label>
        <label for="price-in" class="label">Price:</label>
        <input type="text" class="in name-in" id="name-in" ng-model="$ctrl.inp.name">
        <input type="number" class="in quantity-in" id="quantity-in" ng-model="$ctrl.inp.quantity">
        <input type="text" class="in price-in" id="price-in" ng-model="$ctrl.inp.price">
        <button class="add" id="add"></button>
    </form>
    <div class="container" id="$index" ng-repeat="item in $ctrl.cart track by $index">
        <div class="item">
            <div class="product">{{item.product}}</div>
            <div class="price">{{item.price}}</div>
            <input class="in change-quan" ng-model="item.quantity[$index]">
            <div class="quantity">{{item.quantity}}</div>

        </div> 
        <button class="delete" ng-click="$ctrl.deleteItem(item.id)">XX</button>
        <button class="update" ng-click="$ctrl.updateItem($index)">Update</button> 
    </div>
    
  `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        vm.cart = {};

        CartService.getAllItems().then((response) => {
            console.log(CartService.cart);
            vm.cart = CartService.cart;
          });
        
        vm.deleteItem = (id) => {
            console.log(id); 
            CartService.removeItem(id).then((response) => {
                console.log(response); 
                vm.cart = CartService.cart; 
            });

        }
        
        vm.add = (product, price, quantity) => {
            CartService.addItem(product, price, quantity).then((response) => {
                vm.cart = CartService.cart
            });
        }

        
        
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