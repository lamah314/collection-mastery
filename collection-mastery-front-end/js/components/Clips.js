import Add from './add'
import Comments from './ratings'



// List the Clips // 
function renderClips(clips) {
    return ` 
    <div>
        <ul class="clips">
        ${clips.map(clip => {
            return ` 
                    <li class="clip">
                        <h5 class="clip__title clickable">${clip.clipLocation}</h5>
                    </li>
                    `;

        })
        .join("")}
        </ul>
    </div>
        `;

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
        <iframe class="landingClip" width="560" height="315" src="${clip.clipLocation}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h4 class="clip__rating">Average Rating: ${clip.avgRating}</h4>
        <h4 class="clip__comments">Comments</h4>
            ${Comments.renderClipComments(clip)}
        <div class="user-input">
            ${Add.addRatingAndCommentClip(clip)}
        </div>
        `;
        // Adding the Ability // 
}
export default {
    renderClipsAdd, renderClip,
}
        