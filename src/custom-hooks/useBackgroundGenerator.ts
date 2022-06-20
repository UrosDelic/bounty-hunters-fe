export function useBackgroundGenerator(){
    const data = ['bg-1', 'bg-2', 'bg-3','bg-4','bg-5','bg-6'];
    let random = Math.floor(Math.random() *( data.length + 1) );

    if(random < data.length){
        return data[random]
    }else{
        return data[1]
    }
    
    

}