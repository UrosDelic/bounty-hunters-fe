export function backgroundGenerator(){
    const data = ['bg-1', 'bg-2', 'bg-3','bg-4','bg-5','bg-6'];
    var random = Math.floor(Math.random() * data.length /2 );

    return data[random];

}