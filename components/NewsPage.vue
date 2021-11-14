<template>
    <div>
        <div class = "news_wrapper">
            <div class = "page_title">
                お知らせ
            </div>
            <div class = "page">
                <div v-for='item in news' 
                :key='item'
                >
                <div class = "text_title_date">
                    <div class = "text_title">{{item.news_box.title}}</div> 
                    <div class = "text_date">{{item.news_box.date}}</div>
                </div>    
                <div class = "message">
                    <p>{{item.news_box.message}}</p>
                </div>    
                </div>
            </div>    
        </div>    
    </div>
</template>

<script>
export default {
    data () {
        return {
            news: [
                {
                    news_box: {
                        title:'オフィシャルサイト更新！！',
                        date:'2021.9.30',
                        message:'九工大のサークル、C3です。Unityを使ってゲームを作ったり、Webの開発、Blenderで3Dモデリングなど、コンピュータを使っていろいろな創作活動を行っているサークルです。',
                    }
                },
                {
                    news_box: {
                        title:'こたつ満員御礼！！',
                        date:'2021.8.30',
                        message:'九工大のサークル、C3です。 こたつの利用料は30分1000円です。',
                    }
                },
                {
                    news_box: {
                        title:'台風で日本が沈没したので部会は休みです',
                        date:'2021.7.30',
                        message:'休みったら休みです。',
                    }
                },
            ]
        }

    },
}
</script>

<style lang = "scss" scoped>
    .news_wrapper {
        margin-top: 200px;
        /* background-color: tomato; */
        font-family: 'Inter', '游ゴシック';
        width: 100%;
    }

    .page_title {
        font-size: $font-size-other-title;
        color: $base-font-color;
        margin-top: 200px;
    }

    .page {
        display: flex;
        flex-direction: column;
    }

    .text_title_date {
        display: flex;
        margin-top: 60px;
        align-items: center;
    }

    .text_title {
        font-size: $font-size-other-contents-title;
        color: $base-font-color;
    }

    .text_date {
        font-size: $font-size-other-contents-date;
        color:$light-gray;
        margin-left: 20px;
    }

    .message {
        font-size: $font-size-other-contents-description;
        color: $base-font-color;
        margin-top: 40px;
    }

    .message p {
        margin: 0;
    }
    
</style>