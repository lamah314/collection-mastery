export default function Actresses(actresses) {
    return `
        

     <main class="main__wrapper">
     ${actresses.map(actress => {
         return `
         <div class="main__content">
                <div class="content__img><img src="${actress.name}"</div>
                <div class="main__text">`;

                
     }).join('')}
    
`}
