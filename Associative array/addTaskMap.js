let map = new Map();
map.set('Jhon Doe', '+1234545657');
map.set('Lisa Smith', '+2367625243');
map.set('Jane DOe', '+653434213234');
map.set('Ivan Ivanov', '+765421234213');
map.set('Peter Petrow', '+123345346464');
map.set('Pesho Smith', '+123245657678');


console.log(map.get('Lisa Smith'))

if (map.has('Jhon Doe')) {
    console.log('Founded!')
}
map.delete('Jane DOe')

for (let keys of map.entries()) {
    console.log(keys)
}


