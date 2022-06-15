let shareTweetBtn = document.querySelector('.share-tweet-btn');
let tweet = document.querySelector('.tweet-msg');
let tweets_container = document.querySelector('.tweets-container');


shareTweetBtn.addEventListener('click', function () {
    tweets_container.innerHTML += ` <div class="tweets">
    <div class="user-pics"><img src="./img/1.jpg" alt="user3"></div>
    <div class="user-content-box">
      <div class="user-names">
        <hi class="full-name">Khaled al absi</hi>
        <p class="user-name">@khaled_absi</p>
        <p class="time"> . 58mins</p>
      </div>

      <div class="user-content">
        <p class="post">
       ${tweet.value}
          </p>
      </div>

      <div class="content-icons">
        <i class="far fa-comment blue"> 109</i>
        <i class="fas fa-retweet green"> 865</i>
        <i class="far fa-heart red">1.6k</i>
        <i class="fas fa-chevron-up blue"></i>
      </div>
    </div>
  </div>`
})

