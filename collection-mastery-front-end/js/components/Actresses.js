function renderActresses(actress) {
    return ` 
    <div>
        <ul class="actresses">
        ${actress.map(actress => {
            // Actresses or Actress? 
        return ` 
                    <li class="actress">
                        <h5 class="actress__name clickable">${actress.name}</h5>
                        <h3 class="actress__img><img src=">${actress.image}</h3>
                    </li>
                    `;

    })
            .join("")}
        </ul>
    </div>
        `;

}

function listActresses(actresses) {
    return (actresses.map(actress => {
        return `   
            <option value="${actress.id}">${actress.name}</option>    
            `;

    })
        .join(""))
}

export default {
    renderActresses, listActresses,
}
