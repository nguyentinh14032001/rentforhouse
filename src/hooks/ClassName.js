export default function ClassName(...args){
    return args.reduce((acc,val)=>{
        
      if(typeof val  === 'string'){
        console.log(acc);
        return acc.concat(val.split(" "))
      }  
    },[]).join(" ")

}
export function ClassName1(...args){
   console.log(args);
}