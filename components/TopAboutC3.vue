<template>
    <div class="area">
        <div class="icon">C3</div>
            <div class="top">
                C3について
            </div>
            <div class="sentence">
                九工大のサークル、C3です。<br>
                Unityを使ってゲームを作ったり、Webの開発、Blenderで3Dモデリングなど、コンピュータを使って色々な創作活動を行っているサークルです。
            </div>
            <a class="link" href="about">
                <div class="frame">
                    詳しく見る
                </div>
            </a>
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
margin: 0 0 0 120px;
width: 400px;
height: 400px;
line-height: 400px;
border: solid #555555;
border-radius: 50%;
background: #555555;
color: $white;
font-size: 200px;
font-family: "Inter";
text-align: center;
}

.top{
padding: 0 0 0 100px;
width: 100%;
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
padding: 60px 0 0 108px;
width: 1014px;
height: 178px;
line-height: 45px;
text-align: left;
max-width: $max-width;
color: $gray;
font-family: "Inter","游ゴシック";
font-style: Regular;
font-size: $font-size-contents-description;
}
.link{margin: 0 0 0 495px;
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
height: 800px;
justify-content: center;
}

.top{
padding: 0 0;
text-align: center;
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