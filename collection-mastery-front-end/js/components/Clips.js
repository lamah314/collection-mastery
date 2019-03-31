import Add from './Add'
import Tags from './Tags'

// List the Clips // 
function renderClips(clips) {
    return ` 
    <div>
        <ul class="clips">
        ${clips.map(clip => {
            return ` 
                    <li class="clip">
                        <h5 class="clip__name clickable">${clip.name}</h5> 
                        <iframe class="clip__embedded clickable" width="560" height="315" src="${clip.clipLocation}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
                    `;

        })
        .join("")}
        </ul>
    </div>
        `;

}

function renderClipsHeader(clips) {
    return `
    <div>
    <h4 class="clip__header">Clips</h4>
    ${renderClips(clips)}
    `
}
// Adding Clips //
function renderClipsAdd(clips) {
    return `
    ${renderClips(clips)}
    <div class="user-input">
        ${Add.addClip()}
    </div>
        `;
}

// Looking at one single clip //
function renderClip(clip) {
    return ` 
        <iframe class="landingClip" width="560" height="315" src="${clip.clipLocation}&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h4 class="clip__rating">Average Rating: ${clip.avgRating}</h4>
        <h4 class="clip__tags">Tags</h4>
            ${Tags.renderTags(clip.tags)}
        <div class="user-input">
            ${Add.addRatingClip(clip)}
            ${Add.addTagToClip(clip)}
        </div>
        `;
        // Adding the Ability // 
}
export default {
    renderClipsAdd, renderClip, renderClips, renderClipsHeader
}
        