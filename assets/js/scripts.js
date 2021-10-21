$(function(){

    const token = "IGQVJXeUl3VnA0NlVvcXAwWktLb3c3LXFJRFZAHcG5ycmFQV0hpcVRXdXNCS3ZAxazYxanRGNllHVjBBZA0Uyd3BfY3BXV1ktSFhhcURVUjc1R2ppTnJoWm9FVHk2S2RSZAFRsaVV2Mi1xUWtBRE1CNFJUSgZDZD";
    const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function(response){
        //console.log('retorno: ', response.data);
        let jsonData = response.data;
        let content = '<div class="row style="margin-left:12px">';

        for (let i=0; i<jsonData.length; i++) {
            let feed = jsonData[i];
            let title = feed.caption !== null ? feed.caption : '';
            let type = feed.media_type;
            let image = feed.media_url;
            let link = feed.permalink;
            let video = feed.media_url;
            if(type === 'VIDEO') {
                content += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 video">\
                                <video class="link" autoplay muted loop playsinline><source src="'+video+'" type="video/mp4"></video>\
                            </div>'
            } else if(type === 'IMAGE') {
                content += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 image">\
                                <img class="link" src="'+image+'" title="'+title+'" alt="'+title+'" onclick="window.open(\''+link+'\');" />\
                            </div>'
            }
        }
        content += '</div>';
        $("#insta").html(content);
    })
});