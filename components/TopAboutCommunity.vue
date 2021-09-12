<template>
    <div>
        <div class = "community-wrapper">
            <div class = "about-community">
                <div class ="sub-title">
                    <h1>コミュニティ</h1>
                </div>
                <div class = "text-contents">
                    <p>九工大のサークル、<span>C3</span>です。</p>
                    <p><span>Unity</span>を使ってゲームを作ったり、<span>Web</span>の開発、<span>Blender</span>で<span>3D</span>モデリングなど、コンピュータを使って色々な創作活動を行っているサークルです。</p>
                </div>
            </div>

            <div class = "community-icons">
                <div class = "community-icon">
                <img  class = "icon art" src = "https://3.bp.blogspot.com/-To8tA3yiE0k/VJF_QawmPdI/AAAAAAAAp0w/oihka8c4k90/s800/animalface_usagi.pngS"/>
                </div>

                <div class = "community-icon">
                <img  class = "icon game" src = "https://1.bp.blogspot.com/-ZqRV1i42ELM/VJF_J7IvQjI/AAAAAAAApzk/GCpLXcqU6WE/s800/animalface_neko.png"/> 
                </div>
                    
                <div class = "community-icon">  
                <img class = "icon hack" src = "https://2.bp.blogspot.com/-fhkRCjjEO98/VJF_LkOt_bI/AAAAAAAApzs/jYqrTFF6XA4/s800/animalface_niwatori.png"/>
                </div>

                <div class = "community-icon">
                <img class = "icon cg" src = "https://4.bp.blogspot.com/-co9Gfae-aWE/XNE-4L7WvLI/AAAAAAABStA/kX0r_XmPRcgt8x69YxtLM3rZ_53H4Y-MgCLcBGAs/s800/food_niku_buta_ro-su.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// JavaScript使わん
export default {

}
</script>

<style lang = "scss" scoped>
/* しも先輩にきく SCSSわからん*/

    /* .community-icon {
        height:100px;
        width:100px;
        border-radius:50%;
    } */

    .community-wrapper {
        /* ↓チェック用  */
        /* background-color: lightgreen; */
        width: 100%;
        height: 500px;
    
        /* flex-wrap: wrap;  */
        display: flex;
        /* align-content: center; */
    }

    .sub-title {
        width: 60%;
        height: 129px;
        /* ↓チェック用 */
        /* background-color: orange; */
        margin-left: 10%;
        
        font: var(--unnamed-font-style-normal) normal medium $font-size-contents-title/160px Yu Gothic;
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-707070);
        text-align: center;
        font: normal normal medium $font-size-contents-title/160px Yu Gothic;
        letter-spacing: 0px;
        color: #707070;
    }

    .text-contents {
        width: 70%;
        height: 171px;
        /* ↓チェック用 */
        /* background-color: skyblue; */
        margin-left: 10%;
        margin-bottom: 5%;

        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) $font-size-contents-description/45px Yu Gothic;
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-707070);
        text-align: left;
        font: normal normal normal $font-size-contents-description/45px Yu Gothic;
        letter-spacing: 0px;
        color: #707070;
    }

    span {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 28px/45px var(--unnamed-font-family-inter);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-707070);
        text-align: left;
        font: normal normal normal 18px/45px Inter;
        letter-spacing: 0px;
        color: #707070;
    }

    .community-icons {
        position: relative;
        width: 30%;
        height: 300px;
        /* ↓チェック用 */
        /* background-color: tomato; */
        /* right: 30% */
        margin-right: 10%;
        margin-top: 5%;
        margin-bottom: 5%;
        display: grid;
        grid-template-columns: 2fr 2fr;
    }

    .icon {
        width: 80px;
        height: 80px;
        margin-top: 50%;
        /* margin-bottom: 30%; */
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* .community-wrapper {
        top: 0px;
        left: 0px;
        width: 1920px;
        height: 7000px; */
        
        /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; */
        /* background: #FFFFFF 0% 0% no-repeat padding-box;
        opacity: 1;
    }
    
    .sub-title { */
        /* top: 1847px;
        left: 120px;
        width: 600px;
        height: 129x;

        /* letter-spacing: var(--unnamed-character-spacing-0); */
        /* color: var(--unnamed-color-707070); */
        /* text-align: center;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1; */
    /* }; */
    
    /* h1 {
        top: 0px;
        left: 0px;
        width: 600px;
        height: 129px; */

        /* font: var(--unnamed-font-style-normal) normal medium 100px/160px Yu Gothic; */
        /* letter-spacing: var(--unnamed-character-spacing-0); */
        /* color: var(--unnamed-color-707070); */
        /* text-align: center;
        font: normal normal medium 100px/160px Yu Gothic;
        letter-spacing: 0px;
        color: #707070;
    }; */

    /* .text-contents {
        top: 2036px;
        left: 140px;
        width: 1014px;
        height: 171px; */
        
        /* letter-spacing: var(--unnamed-character-spacing-0); */
        /* color: var(--unnamed-color-707070); */
        /* text-align: left;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
    };

    .text-contents p {
        top: 45px;
        left: 772px;
        width: 224px;
        height: 36px; */
        /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 28px/45px Yu Gothic; */
        
        /* letter-spacing: var(--unnamed-character-spacing-0); */
        /* color: var(--unnamed-color-707070); */
        /* text-align: left;
        font: normal normal normal 28px/45px Yu Gothic;
        letter-spacing: 0px;

    };

    span {
        top: 45px;
        left: 434px;
        width: 59px;
        height: 36px; */

        /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 28px/45px var(--unnamed-font-family-inter); */
        /* letter-spacing: var(--unnamed-character-spacing-0); */
        /* color: var(--unnamed-color-707070); */
        /* text-align: left;
        font: normal normal normal 28px/45px Inter;
        letter-spacing: 0px;
        color: #707070;
    };

    .community-icons {
        top: 1887px;
        left: 1280px;
        width: 320px;
        height: 320px;
        
        opacity: 1; */
    /* }; */


</style>
