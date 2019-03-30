function renderActresses(actresses) {
    return ` 
    <div>
        <ul class="actresses">
        ${actresses.map(actress => {
            // Actress accesses 
        return ` 
                    <li class="actress">
                        <h5 class="actress__name clickable">${actress.name}</h5>
                        <img class="actress__image clickable"src="${actress.image}" /> 
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
