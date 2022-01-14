<template>
    <div class="footer">
        <div class="footer-wrapper">
            <div class="left-container">
                <div class="c3-icon-container">
                    <img src="../c3_logo.png" alt="C3アイコン" class="c3-icon">
                </div>
                <div>
                    <div class="official-text">
                        C3 Official Website
                    </div>
                    <nuxt-link to="/contact" class="inquiry-text-container">
                        <div class="inquiry-text">
                            <font-awesome-icon :icon="['fas','envelope-open-text']" />
                            お問い合わせはこちら
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="center-container">
                <div class="icon-container">
                    <a href="/">
                        <font-awesome-icon :icon="['fas','box-open']" class="icons"/>
                    </a>
                    <a href="https://twitter.com/c3_kyutech">
                        <font-awesome-icon :icon="['fab','twitter']" class="icons" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw">
                        <font-awesome-icon :icon="['fab','youtube']" class="icons"/>
                    </a>
                    <a href="https://github.com/Kyutech-C3">
                        <font-awesome-icon :icon="['fab','github']" class="icons"/>
                    </a>
                </div>
                <div class="copyright">
                    © 2021 C3
                </div>
            </div>
            <div class="right-container">
                <a href="#" id="return-top">
                    <div>
                        <font-awesome-icon :icon="['fas','angle-up']" class="angle-icon"/><br>
                        <div>
                            PAGE TOP
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    margin: 0 0;
    background-color: $gray;
}
.footer-wrapper{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.left-container{
    width: 25%;

}
.center-container{
    width: 50%;
    text-align: center;
}
.right-container{
    width: 25%;
    text-align: center;
}
.c3-icon{
    padding: 60px 0 0 8.3%;
    width: 120px;
}
.official-text{
    padding: 40px 0 0 6.25%;
    width: 300px;
    font-size: $font-size-other-contents-date;
    font-family: "Inter";
    font-style: Regular;
    color: $white;
}
.inquiry-text-container{
    text-decoration: none;
}
.inquiry-text{
    padding: 47px 0 0 6.45%;
    font-size: 20px;
    font-family: "游ゴシック";
    font-style: Medium;
    color: #C9CFD5;
}
.icon-container{
    width: 100%;
    padding: 179px 0 0 0;
    font-size: 60px;
    font-style: Regular;
}
.icons{
    padding: 0 4.7%;
    color: $light-gray;
}
.copyright{
    padding: 120px 0 56px 0;
    font-size: 20px;
    font-family: "Inter";
    font-style: Medium;
    color: #AAAAAAE6;
    text-align: center;
}
.angle-icon{
    font-size: 40px;
    font-style: Regular;
    color: #FFFFFFE6;
}
.right-container #return-top{
    position: relative;
    top: 60px;
    font-size: 20px;
    font-family: "Inter";
    font-style: Medium;
    color: #FFFFFFE6;
    text-decoration: none;
    scroll-behavior: smooth;
}



//タブレット用
@media screen and (max-width: 1200px){
.left-container{
    width: 85%;
    height: 150px;
    order: 1;
    display: flex;
    flex-wrap: wrap;
}
.center-container{
    width: 100%;
    order: 3;
}
.right-container{
    width: 15%;
    order: 2;
}
.c3-icon-container{
    padding: 0 20px;
}
.c3-icon{
    width: 90px;
    height: 90px;
    padding: 40px 0 0 7.5%;
}
.official-text{
    padding: 48px 0 0 2.5%;
}
.inquiry-text{
    padding: 26px 0 0 2.5%;
    font-size: 15px;
}
.icon-container{
    padding: 32px 0 0 0;
    font-size: 40px;
}
.icons{
    padding: 0 15px;
}
.copyright{
    padding: 50px 0 39px 0;
    font-size: 15px;
}



//スマホ用
@media screen and (max-width: 510px){
.footer-wrapper{
    position: relative;
}
.left-container{
    display: block;
    width: 100%;
    height: auto;
    order: 1;
}
.center-container{
    width: 100%;
    height: auto;
    order:2;
}
.right-container{
    position: absolute;
    top: -40px;
    right: 10px;
    text-align: center;
}
.official-text{
    width: 100%;
    text-align: center;
    padding:30px 0;
}
.inquiry-text{
    width: 100%;
    text-align: center;
    padding: 0;
}
.icon-container{
    width: 67%;
    padding: 32px 16.5% 0 16.5%;
    font-size: 50px;
}
.icons{
    padding: 24px;
}
.c3-icon-container{
    width: 100%;
    padding: 0;
    text-align: center;
}
.c3-icon{
    width: 40%;
    height: auto;
    padding-left: 0;
    padding-right: 0;
}
.angle-icon{
    width: 100%;
    font-size: 40px;
    font-style: Regular;
}
.right-container #return-top{
    font-size: 17px;
}
.copyright{
    padding: 26px 0 39px 0;
    font-size: 15px;
}
}
}
</style>