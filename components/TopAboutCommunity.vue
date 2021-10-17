<template>
    <div>
        <div class = "community_wrapper">
                <div class = "text_contents">
                    <div class="title">
                    <p>コミュニティ</p>
                    </div>
                    <div class ="description">
                    <p>九工大のサークル、C3です。</p>
                    <p>Unityを使ってゲームを作ったり、Webの開発、Blenderで3Dモデリングなど、コンピュータを使って色々な創作活動を行っているサークルです。</p>
                    </div>
                </div>

            <div class = "community_icons">
                <div id="icon_set_1" class="icon_set">
                    <div class="icon_box">
                        <!-- 左上のアイコン -->
                        <img class = "icon 1" src = "https://3.bp.blogspot.com/-To8tA3yiE0k/VJF_QawmPdI/AAAAAAAAp0w/oihka8c4k90/s800/animalface_usagi.pngS"/>
                    </div>
                    <div class="icon_box">
                        <!--右上のアイコン -->
                        <img class = "icon 2" src = "https://1.bp.blogspot.com/-ZqRV1i42ELM/VJF_J7IvQjI/AAAAAAAApzk/GCpLXcqU6WE/s800/animalface_neko.png"/> 
                    </div>
                </div>
                <div id="icon_set_2" class="icon_set">  
                    <div class="icon_box">
                        <!-- 左下のアイコン -->
                        <img class = "icon 3" src = "https://2.bp.blogspot.com/-fhkRCjjEO98/VJF_LkOt_bI/AAAAAAAApzs/jYqrTFF6XA4/s800/animalface_niwatori.png"/>
                    </div>
                    <div class="icon_box">
                        <!-- 右下のアイコン -->
                        <img class = "icon 4" src = "https://4.bp.blogspot.com/-co9Gfae-aWE/XNE-4L7WvLI/AAAAAAABStA/kX0r_XmPRcgt8x69YxtLM3rZ_53H4Y-MgCLcBGAs/s800/food_niku_buta_ro-su.png">
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
    
    .community_wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: center;
    }
    
    .text_contents {
        width: 60%;
        font-size: $font-size-contents-description;
        color: $base-font-color;
    }

    .title {
        font-size: $font-size-contents-title;
        color: $base-font-color;
        margin-top: -100px;
    }
    
    .community_icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 320px;
        height: 320px;
        margin-left: 5%;
        margin-right: 5%;
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
    
    .icon {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


    @media screen and (max-width: 1000px) {
        .community_wrapper {
            width: 100%;
            position: relative;
        }

        .text_contents {
            width: 100%;
            text-align: center;
        }

        .title {
            padding-bottom: 200px;
            text-align: center;
        }

        .description {
            padding-top: 200px;
        }

        .community_icons {
           position: absolute;
           left: 0;
           right: 0;
           margin: auto;
        }
    }

    @media screen and (min-width: 1000px) {
        .title {
            white-space: nowrap;
        }
    }

    
</style>