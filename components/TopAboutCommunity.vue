<template>
    <div>
        <div class = "community-wrapper">
                <div class = "box text-contents">
                    <div class ="title-box">
                    <p class="title">コミュニティ</p>
                    </div>
                    <div class ="description">
                    <p>九工大のサークル、C3です。</p>
                    <p>Unityを使ってゲームを作ったり、Webの開発、Blenderで3Dモデリングなど、コンピュータを使って色々な創作活動を行っているサークルです。</p>
                    </div>
                </div>

            <div class = "box community-icons">
                <div id="icon_set_1" class="icon_set">
                    <div class="icon_box">
                        <!-- メディアアートコミュニティのアイコン -->
                        <img class = "icon art" src = "https://3.bp.blogspot.com/-To8tA3yiE0k/VJF_QawmPdI/AAAAAAAAp0w/oihka8c4k90/s800/animalface_usagi.pngS"/>
                    </div>
                    <div class="icon_box">
                        <!--ゲームコミュニティのアイコン -->
                        <img class = "icon game" src = "https://1.bp.blogspot.com/-ZqRV1i42ELM/VJF_J7IvQjI/AAAAAAAApzk/GCpLXcqU6WE/s800/animalface_neko.png"/> 
                    </div>
                </div>
                <div id="icon_set_2" class="icon_set">  
                    <div class="icon_box">
                        <!-- ハックコミュニティのアイコン -->
                        <img class = "icon hack" src = "https://2.bp.blogspot.com/-fhkRCjjEO98/VJF_LkOt_bI/AAAAAAAApzs/jYqrTFF6XA4/s800/animalface_niwatori.png"/>
                    </div>
                    <div class="icon_box">
                        <!-- CGコミュニティのアイコン -->
                        <img class = "icon cg" src = "https://4.bp.blogspot.com/-co9Gfae-aWE/XNE-4L7WvLI/AAAAAAABStA/kX0r_XmPRcgt8x69YxtLM3rZ_53H4Y-MgCLcBGAs/s800/food_niku_buta_ro-su.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
}
</script>


<style lang = "scss" scoped>
    
    /* ページ全体 */
    .community-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        /* チェック用  */
        /* background-color: lightgreen; */

    }
    
    
    /* 文章全体 */
    .text-contents {
        width: 60%;

        /* チェック用 */
        /* background-color: skyblue; */
    }

    
    /* 小見出し */
    .title {
        text-align: left;
        font-size: $font-size-contents-title;
        color: $base-font-color;
        
        /* チェック用 */
        /* background-color: orange; */
    }
    
    
    /* 説明文章 */
    p {
        text-align: left;
        font-size: $font-size-contents-description;
        color: $base-font-color;
    }

    
    /* アイコン全体 */
    .community-icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 320px;
        height: 320px;
        margin-left: 5%;
        margin-right: 5%;

        /* チェック用 */
        /* background-color: tomato; */
    }

    .icon_set {
        display: flex;
        justify-content: space-between;
        width: 320px;
        height: 160px;
    }

    #icon_set_1 {
        display: flex;
        align-items: flex-start;
    }

    #icon_set_2 {
        display: flex;
        align-items: flex-end;
    }

    .icon_box {
        width: 100px;
        height: 100px;
        position: relative;

        border-radius: 50%;
        background-color: $base-font-color;
        text-align: center;
        
    }
    
    /* 各アイコン */
    .icon {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    
    /* 画面小さくしたら縦並びになる仕様 */
    @media not all and (min-width: 1400px) {
        .text-contents {
            width: 100%;
            margin-left: 124px;
            margin-right: 124px;
        }


       .community-icons {
           position: absolute;
           left: 0;
           right: 0;
           margin: auto;
       }
       .community-wrapper {
            position: relative;
            margin: auto;
        }

        .title {
            text-align: center;
            padding-bottom: 200px;
            width: 100%;
        }
        .description {
            padding-top: 200px;
        }

      
    }
</style>