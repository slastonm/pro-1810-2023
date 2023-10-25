let buyItem = prompt('Type item name');
switch (buyItem){
    case 'milk':
    case 'MILK':
    case 'Milk':
        console.log(`Milk cost $1`);
        break;
    case 'orange':
        console.log(`Milk cost $1`);
        break;
    default:
        console.log(`Sorry any information about ${buyItem}`);
}