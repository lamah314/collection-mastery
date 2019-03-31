import Clips from './Clips'
import Add from './Add'

// List All Tags //

function renderTags(tags) {
    return ` 
    <div>
        <ul class="tags">
        ${tags.map(tag => {
            return ` 
                    <li class="tag">
                    <h5 class="tag_type clickable">${tag.tag}</h5>
                    </li>
                    `;
        })
        .join("")}
        </ul>
    </div>
        `;

}
// Listing All Tags, Gives User option to Add Tag // 

function renderTagsAdd(tags) {
    return `
        ${renderTags(tags)}
        <div class="user-input">
            ${Add.addTag()}
        </div>
        `;

// List of Tags to Choose From //
}

function listTags(tags) {
    return (tags.map(tag=> {
        return `   
            <option value="${tag.id}">${tag.tag}</option>    
            `;

    })
        .join(""))
}
    
    

export default {
renderTags,
renderTagsAdd, 
listTags


}