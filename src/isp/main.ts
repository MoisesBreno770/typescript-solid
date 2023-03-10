/*
Interface segregation principle (Princípio da segregação de interface) -
os clientes não devem ser forçados a depender de types, interfaces ou membros 
abstratos que não utilizam
*/

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { NoDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer('Moises', 'Carvalho', '111.111.111-11'); 
const enterpriseCustomer = new EnterpriseCustomer('Empresa Gigante', '222');
const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.9)); 
shoppingCart.addItem(new Product('Caderno', 9.9123)); 
shoppingCart.addItem(new Product('Lápis', 1.59)); 

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);