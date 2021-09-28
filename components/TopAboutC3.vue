<template>
    <div class="area">
        <div class="icon">C3</div>
            <div class="main-area">
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
        
        
    </div>
</template>

<style lang="scss" scoped>
.area{
    display: flex;
    width: 100%;
}
.icon{
    margin: 0 0 0 120px;
width: 400px;
height: 400px;
line-height: 242px;

border: solid #555555;
border-radius: 200px;
background: #555555;
color: $white;
font-size: 200px;
font-family: "Inter";
text-align: center;
}
.main-area{
    
}
.top{
padding: 0 0 0 100px;
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

@media screen and (max-width: 1024px){
.area{
width: 100%;
height: 659px;
}
.main-area{
        position: relative;
        top: -279px;
        left: 0px;
        width: 100%;

}
.top{
position: relative;
top: 0px;
margin: 0 26%;
width: 48%;
height: 92px;
line-height: 115px;
font-size: 72px;
}
.icon{position: relative;
top: 132px;
margin: 0 32.5%;
width: 279px;
height: 279px;
line-height: 181px;
border-radius: 200px;
font-size: 150px;
}
.sentence{position: relative;
top: 359px;
margin: 0 7.5%;
width: 85%;
height: 148px;
line-height: 34px;
text-align: center;
font-size: 21px;
}
.link{position: relative;
top: 359px;
left: 220px;
margin: 0 auto;  
}
.frame{position: relative;
top: 0px;
left: 0px;
margin: 0 auto; 
}
}

</style>