let endings={
    conjugation2:{
        face1:{
            one:['у','ю'],
            many:['ём','ем']
        },
        face2:{
            one:['ёшь','ешь'],
            many:['ёте','ете']
        },
        face3:{
            one:['ёт','ет'],
            many:['ут','ют']
        },

    },
    conjugation1:{
        face1:{
            one:['у','ю'],
            many:['им']
        },
        face2:{
            one:['ишь'],
            many:['ите']
        },
        face3:{
            one:['ит'],
            many:['ат','ят']
        },

    }
}
const verbConjugation1=['вертеть', 'гнать', 'держать', 'смотреть', 'видеть', 'обидеть', 'ненавидеть', 'зависеть', 'терпеть', 'дышать', 'слышат']
const verbConjugation2=['брить', 'стелить']

const verb=(verb,pronout)=>{
    let vreb2or1=0
    let texts=[]
    let ending=[]
    verb.toLowerCase()
    pronout.toLowerCase()

    verbConjugation1.forEach(el=>{
        if(verb===el){
            vreb2or1=10
        }
        
    })
    verbConjugation2.forEach(el=>{
        if(verb===el){
            vreb2or1=20
        }
        
    })


    if(/ить/i.test(verb)&&vreb2or1!==20||vreb2or1===10){
         if(/я|мы/.test(pronout)){
             switch(pronout){
                    case 'я':
                        ending=[...endings.conjugation1.face1.one]
                    break
                    case 'мы':
                        ending=[...endings.conjugation1.face1.many]
                    break
             }

         }else if (/ты|вы/.test(pronout)){
            switch(pronout){
                case 'ты':
                    ending=[...endings.conjugation1.face2.one]
                break
                case 'вы':
                    ending=[...endings.conjugation1.face2.many]
                break
            }

         }else if (/он|она|они|оно/i.test(pronout)){
            switch(pronout){
                case 'он':
                case 'она':
                case 'оно':
                    ending=[...endings.conjugation1.face3.one]
                break
                case 'они':
                    ending=[...endings.conjugation1.face3.many]
                break
            }
        }

    }else{
        if(/я|мы/i.test(pronout)){
            switch(pronout){
                   case 'я':
                       ending=[...endings.conjugation2.face1.one]
                   break
                   case 'мы':
                       ending=[...endings.conjugation2.face1.many]
                   break
            }

        }else if (/ты|вы/i.test(pronout)){
           switch(pronout){
               case 'ты':
                   ending=[...endings.conjugation2.face2.one]
               break
               case 'вы':
                   ending=[...endings.conjugation2.face2.many]
               break
           }

        }else if (/он|она|они|оно/i.test(pronout)){
           switch(pronout){
               case 'он':
               case 'она':
               case 'оно':
                   ending=[...endings.conjugation2.face3.one]
               break
               case 'они':
                   ending=[...endings.conjugation2.face3.many]
               break
           }
       }
        
    }
    
    ending.forEach(pronout=>{
        let text=verb.slice(0,verb.length-3)
        if(/а/.test(verb)){
            texts.push(text+'a'+pronout)
        }else{
            
            texts.push(text+pronout)
        }
        
        
    })
    return texts
}
    
console.log(verb('уважать','ты')) 
  console.log(verb('любить','ты'))  
  console.log(verb('курить','ты')) 
  console.log(verb('раздражать','ты'))  
  console.log(verb('смотреть','ты')) 
  console.log(verb('видеть','ты'))
  console.log(verb('обнимать','ты')) 
  console.log(verb('бегать','ты'))
  console.log(verb('подражать','ты')) 
  console.log(verb('дарить','ты'))
  console.log(verb('уважать','они')) 
  console.log(verb('любить','они'))  
  console.log(verb('курить','я')) 
  console.log(verb('раздражать','он'))  
  console.log(verb('смотреть','мы')) 
  console.log(verb('видеть','вы'))
    

   
