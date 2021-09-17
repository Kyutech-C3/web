<template>
    <div>
        <div class = "community-wrapper">
                <div class = "box text-contents">
                    <h1>コミュニティ</h1>
                    <p>九工大のサークル、C3です。</p>
                    <p>Unityを使ってゲームを作ったり、Webの開発、Blenderで3Dモデリングなど、コンピュータを使って色々な創作活動を行っているサークルです。</p>
                </div>

            <div class = "box community-icons">
                <!-- アイコンはお好きな順番で -->
                <!-- メディアアートコミュニティのアイコン -->
                <img class = "icon art" src = "https://3.bp.blogspot.com/-To8tA3yiE0k/VJF_QawmPdI/AAAAAAAAp0w/oihka8c4k90/s800/animalface_usagi.pngS"/>

                <!--ゲームコミュニティのアイコン -->
                <img class = "icon game" src = "https://1.bp.blogspot.com/-ZqRV1i42ELM/VJF_J7IvQjI/AAAAAAAApzk/GCpLXcqU6WE/s800/animalface_neko.png"/> 
                    
                <!-- ハックコミュニティのアイコン -->
                <img class = "icon hack" src = "https://2.bp.blogspot.com/-fhkRCjjEO98/VJF_LkOt_bI/AAAAAAAApzs/jYqrTFF6XA4/s800/animalface_niwatori.png"/>

                <!-- CGコミュニティのアイコン -->
                <img class = "icon cg" src = "https://4.bp.blogspot.com/-co9Gfae-aWE/XNE-4L7WvLI/AAAAAAABStA/kX0r_XmPRcgt8x69YxtLM3rZ_53H4Y-MgCLcBGAs/s800/food_niku_buta_ro-su.png">
                
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
        flex-wrap: wrap;
        padding: 30px;

        /* チェック用  */
        /* background-color: lightgreen; */
    }
    
    
    /* 文章全体 */
    .text-contents {
        width: 50%;
        height: 10%;
        margin-right: 5%;
        margin-bottom: 5%;  
        margin-left:5%;

        /* チェック用 */
        /* background-color: skyblue; */
    }

    
    /* 小見出し */
    h1 {
        text-align: center;
        font-size: $font-size-contents-title;
        color: $base-font-color;
        width: 70%;
        height: 10%;
        
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
        width: 32%;
        height: 10%;
        margin-top: 6%;
        margin-right: 3%;
        margin-bottom: 3%;
        padding-left: 3%;

        /* アイコンを常に2＊2で並べるバージョン */
        /* dislay: grid; */
        /* grid-template-columns: 2fr 2fr; */

        /* チェック用 */
        /* background-color: tomato; */
    }

    
    /* アイコン1個 */
    .icon {
        /* アイコンのサイズ */
        width: 80px;
        height: 80px;

        /* アイコンの背景の円 */
        border-radius: 50%;
        background-color: $base-font-color;
    }

    
    /* 画面小さくしたら縦並びになる仕様 */
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
            padding-left: 16%;
        }
    }
</style>