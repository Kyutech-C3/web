<template>
    <div class="flex-box">
        <community-detail :items="items[id]" />
    </div>
</template>

<script>
import CommunityDetail from "../../components/CommunityDetail.vue";
export default {
    components:{CommunityDetail},
    data(){
        
        return{
            id: this.$route.params.id,
                items: [{
                    title: "GAME",
                    description: "ゲームコミュニティではアクション、シューティング、ノベルゲームなど様々なジャンルのゲームを制作・公開しています。CGやメディアアートコミュニティのメンバーと協力して制作することもあります。ゲーム制作で分からないことがあったら先輩や仲間に聞ける良い環境です。ゲームコミュニティではアクション、シューティング、ノベルゲームなど様々なジャンルのゲームを制作・公開しています。CGやメディアアートコミュニティのメンバーと協力して制作することもあります。ゲーム制作で分からないことがあったら先輩や仲間に聞ける良い環境です。ゲームコミュニティではアクション、シューティング、ノベルゲームなど様々なジャンルのゲームを制作・公開しています。CGやメディアアートコミュニティのメンバーと協力して制作することもあります。ゲーム制作で分からないことがあったら先輩や仲間に聞ける良い環境です。",
                    img: "https://placehold.jp/1920x1080.png"
                },
                {
                    title: "CG",
                    description: "CGコミュニティではBlenderやXISMOなどのモデリングソフトを用いて3DモデルやMMDでアニメーションを制作しています。CGコミュニティではBlenderやXISMOなどのモデリングソフトを用いて3DモデルやMMDでアニメーションを制作しています。CGコミュニティではBlenderやXISMOなどのモデリングソフトを用いて3DモデルやMMDでアニメーションを制作しています。CGコミュニティではBlenderやXISMOなどのモデリングソフトを用いて3DモデルやMMDでアニメーションを制作しています。CGコミュニティではBlenderやXISMOなどのモデリングソフトを用いて3DモデルやMMDでアニメーションを制作しています。CGコミュニティではBlenderやXISMOなどのモデリングソフトを用いて3DモデルやMMDでアニメーションを制作しています。CGコミュニティではBlenderやXISMOなどのモデリングソフトを用いて3DモデルやMMDでアニメーションを制作しています。",
                    img: "https://placehold.jp/1920x1080.png"
                },
                {
                    title: "HACK",
                    description: "Hackコミュニティは、元々ProgrammingコミュニティーとWebコミュニティに分かれていたものが合体してできたコミュニティーです。現在は、Web制作やアプリ開発、CPU開発、Bot作成など様々な領域で開発に取り組んでいます。このサイトで展示されている作品の中には、大学生になってパソコンを持った子が制作した作品もあります。Hackコミュニティは、元々ProgrammingコミュニティーとWebコミュニティに分かれていたものが合体してできたコミュニティーです。現在は、Web制作やアプリ開発、CPU開発、Bot作成など様々な領域で開発に取り組んでいます。このサイトで展示されている作品の中には、大学生になってパソコンを持った子が制作した作品もあります。Hackコミュニティは、元々ProgrammingコミュニティーとWebコミュニティに分かれていたものが合体してできたコミュニティーです。",
                    img: "https://placehold.jp/1920x1080.png"
                },
                {
                    title: "MEDIA_ART",
                    description: "メディアアートコミュニティではAfter EffectやPremiere Proなどでの動画編集・制作やStudio Oneでの音楽制作、Clip Studioでのイラスト制作を行っております！メディアアートコミュニティではAfter EffectやPremiere Proなどでの動画編集・制作やStudio Oneでの音楽制作、Clip Studioでのイラスト制作を行っております！メディアアートコミュニティではAfter EffectやPremiere Proなどでの動画編集・制作やStudio Oneでの音楽制作、Clip Studioでのイラスト制作を行っております！メディアアートコミュニティではAfter EffectやPremiere Proなどでの動画編集・制作やStudio Oneでの音楽制作、Clip Studioでのイラスト制作を行っております！メディアアートコミュニティではAfter EffectやPremiere Proなどでの動画編集・制作やStudio Oneでの音楽制作、Clip Studioでのイラスト制作を行っております！",
                    img: "https://placehold.jp/1920x1080.png"
                }
                ]
            }
        },
}
</script>