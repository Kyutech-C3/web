<template>
    <div class="area">
        <img src="../c3_logo.png" alt="C3アイコン" class="icon">
            <div class="top">
                C3について
            </div>
            <div class="sentence">
                九工大のサークル、C3です。<br>
                Unityを使ってゲームを作ったり、Webの開発、Blenderで3Dモデリングなど、コンピュータを使って色々な創作活動を行っているサークルです。
            </div>
            <nuxt-link to="/about" class="link">
                <div class="frame">
                    詳しく見る
                </div>
            </nuxt-link>
    </div>
</template>

<style lang="scss" scoped>
.area{
display: flex;
flex-direction: column;
flex-wrap: wrap;
height: 500px;
}
.icon{
margin: 0 0 0 6.25%;
width: 400px;
border-radius: 50%;
}

.top{
padding: 0 0 0 5.2%;
width: 536px;
height: 129px;
line-height: 160px;
max-width: $max-width;
color: $gray;
font-family: "Inter","游ゴシック";
font-style: Regular;
font-style: Medium;
font-size: $font-size-contents-title;
}
.sentence{
padding: 60px 0 0 5.6%;
width: 51.2%;
line-height: 45px;
text-align: left;
max-width: $max-width;
max-height: 200px;
color: $gray;
font-family: "Inter","游ゴシック";
font-style: Regular;
font-size: $font-size-contents-description;
}
.link{
margin: 28px 0 0 25.7%;
width: 240px;
height: 60px;
line-height: 39px;
max-width: $max-width;
color: $gray;
text-decoration: none;
letter-spacing: 0px;
font-family: "游ゴシック";
font-style: Medium;
font-size: $font-size-button;
}
.frame{
width: 240px;
height: 60px;
max-width: $max-width;
color: $gray;
border: 1px solid;
border-color: $gray;
border-radius: 53px;
text-align: center;
display: table-cell;
vertical-align: middle;
}

.frame:hover{
color: $white;
background-color: $gray;
}

@media screen and (max-width: 1000px){
.area{
height: auto;
justify-content: center;
}

.top{
padding: 0 0;
text-align: center;
width: 100%;
height: 92px;
line-height: 115px;
font-size: $font-size-contents-title;
order: 1;
}
.icon{
margin: 40px auto 0 auto;
width: 279px;
height: 279px;
line-height: 279px;
font-size: 150px;
order: 2;
}
.sentence{
padding: 40px 7.5% 0 7.5%;
width: 85%;
height: auto;
line-height: 34px;
text-align: center;
font-size: $font-size-contents-description;
order: 3;
}
.link{
margin: 15px auto 0 auto;
font-size: $font-size-button;
order: 4;
}

}

</style>