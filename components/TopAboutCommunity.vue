<template>
    <div>
        <div class = "community-wrapper">
            <!-- <div class = "about-community"> -->
                <!-- <div class ="box sub-title"> -->
                    
                <!-- </div> -->
                <div class = "box text-contents">
                    <h1>Community</h1>
                    <p>九工大のサークル、<span>C3</span>です。</p>
                    <p><span>Unity</span>を使ってゲームを作ったり、<span>Web</span>の開発、<span>Blender</span>で<span>3D</span>モデリングなど、コンピュータを使って色々な創作活動を行っているサークルです。</p>
                    
                </div>
            <!-- </div> -->

            <div class = "box community-icons">
                <!-- <div class = "community-icon"> -->
                <img class = "icon art" src = "https://3.bp.blogspot.com/-To8tA3yiE0k/VJF_QawmPdI/AAAAAAAAp0w/oihka8c4k90/s800/animalface_usagi.pngS"/>
                <!-- </div> -->

                <!-- <div class = "community-icon"> -->
                <img class = "icon game" src = "https://1.bp.blogspot.com/-ZqRV1i42ELM/VJF_J7IvQjI/AAAAAAAApzk/GCpLXcqU6WE/s800/animalface_neko.png"/> 
                <!-- </div> -->
                    
                <!-- <div class = "community-icon">   -->
                <img class = "icon hack" src = "https://2.bp.blogspot.com/-fhkRCjjEO98/VJF_LkOt_bI/AAAAAAAApzs/jYqrTFF6XA4/s800/animalface_niwatori.png"/>
                <!-- </div> -->

                <!-- <div class = "community-icon"> -->
                <img class = "icon cg" src = "https://4.bp.blogspot.com/-co9Gfae-aWE/XNE-4L7WvLI/AAAAAAABStA/kX0r_XmPRcgt8x69YxtLM3rZ_53H4Y-MgCLcBGAs/s800/food_niku_buta_ro-su.png">
                <!-- </div> -->
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

    .community-wrapper {
        /* ↓チェック用  */
        /* background-color: lightgreen; */
        width: 100%;
    
        display: flex;
        flex-wrap: wrap; 
        padding: 30px;
    }

    .text-contents {
        width: 60%;
        height: 10%;
        margin-right: 2%;
        margin-bottom: 5%;  

        /* チェック用 */
        /* background-color: skyblue; */
    }

    p {
        text-align: left;
        font: normal normal normal $font-size-contents-description/45px Yu Gothic;
        letter-spacing: 0px;
        color: $base-font-color;
    }

    h1 {
        text-align: center;
        font: normal normal medium $font-size-contents-title/160px Yu Gothic;
        letter-spacing: 0px;
        color: $base-font-color;
        width: 70%;
        height: 10%;
        
        /* チェック用 */
        /* background-color: orange; */
    }

    span {
        text-align: left;
        font: normal normal normal 18px/45px Inter;
        letter-spacing: 0px;
        color: $base-font-color;
    }

    .community-icons {
        width: 32%;
        height: 10%;
        margin-top: 6%;
        margin-right: 3%;
        margin-bottom: 3%;
        padding-left: 3%;
        /* display: flex; */

        /* アイコンを常に2＊2で並べるバージョン */
        /* dislay: grid; */
        /* grid-template-columns: 2fr 2fr; */

        /* チェック用 */
        /* background-color: tomato; */
    }

    .icon {
        width: 80px;
        height: 80px;

        /* 背景の円 */
        border-radius: 50%;
        background: $base-font-color;
    }

    @media not all and (min-width: 600px) {
        .box {
            width: 100%;
        }
        h1 {
            width: 100%;
        }
        .text-contents {
            padding-right:5%;

        }
        .community-icons {
            /* width: 100%; */
            padding-left: 16%;
        }


    }
</style>