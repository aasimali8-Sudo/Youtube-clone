let videosHTML ='';
videos.forEach((video)=>{
videosHTML +=`<div class="video-card">
                <div class="video-thumbnail">
                <a href="https://www.youtube.com/watch?v=${video.vid}">
                    <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail">
                </a>
                <div class="video-duration">${video.duration}</div>
                </div>
                <div class="video-info-grid">
                <div>
                    <a href="https://www.youtube.com/${video.channel}">
                    <img src="${video.channelIcon}" class="profile-pic" alt="profile">
                    </a>
                </div>
                <div class="video-info">
                    <a href="https://www.youtube.com/watch?v=${video.vid}">
                    <p class="video-title">${video.title}</p>
                    </a>
                    <a href="https://www.youtube.com/${video.channel}">
                    <p class="video-author">${video.author} </p>
                    </a>
                    <p class="video-stats">${video.views} views &#183; ${video.uploadTime} ago</p>
                </div>
                </div>
            </div>`
});

document.querySelector('.js-video-grid').innerHTML += videosHTML;