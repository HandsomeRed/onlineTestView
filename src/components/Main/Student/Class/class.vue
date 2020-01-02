<template>
    <div class="header-wrapper">
        <div class="header-title">
            <div class="header-tab active">
                <a href="">我的班级</a>
            </div>
            <div class="header-tab">
                <a href="">加入班级</a>
            </div>
        </div>

        <div class="split"></div>

        <div class="body-wrapper">
                <!--
                <div class="content-empty">
                    <div class="empty-header">
                        <img class="img" src="https://s1.kaoshixing.com/static/base/images/empty-page.png">
                    </div>
                    <div class="empty-title">空空荡荡的～</div>
                </div>
                -->
                <div class="item-wrapper item-exam-wrapper clearfix"  v-for="(studentClass, index) in cl" v-bind:key='index'>
                    {{index}}
                    <div class="item item-exam item-normal animate">
                        <div class="item-title">
                            {{studentClass.name}}
                        </div>

                        <div class="item-row item-start-time">
                            <div class="item-label">序列号：</div>
                            <div class="item-data">{{studentClass.classCode}}</div>
                        </div>

                        <div class="item-row item-row-score">
                            <div class="item-label">教师：</div>
                            <div class="item-data">李大红</div>
                        </div>

                        <div class="item-row item-row-score">
                            <div class="item-label">总人数：</div>
                            <div class="item-data">10人</div>
                        </div>

                        <el-button type="primary" class="exam-btn">查看班级</el-button>
                    </div>
                </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "class",
        data(){
        },
        computed: {
          cl:{
            get(){
              window.console.log(this.$store.getters.studentClass)
              window.console.log(111111)
              return this.$store.getters.studentClass
            }
          }
        },
        methods:{
        }

    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: inherit;
    }

    .header-wrapper{
        line-height: 55px;
        position: relative;
        padding-right: 200px;
    }
    .header-wrapper .header-title{
        font-size: 18px;
        color: #27274A;
        width: 80vh;
    }
    .header-tab{
        margin-left: 17px;
        display: inline-block;
        color: #C1C1CB;

    }
    .header-tab.active{
        color: #27274A;
    }
    .split{
        margin-bottom: 24px;
        border-bottom: 1px solid #dedede;
        width: 100vh;
    }
    .item-wrapper .item-exam.item-normal, .item-wrapper .item-exam.item-waitting, .item-wrapper .item-exam.item-pass{
        border-left-color: #1A8CFE;
    }
    .item-wrapper .item-exam{
        width: 390px;
        height: 200px;
        padding: 20px;
        margin-right: 24px;
        margin-bottom: 24px;
        border-left: 4px solid #C1C1CB;
    }
    .item-wrapper .item{
        float: left;
        position: relative;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(58,62,81,0.20);
        border-radius: 4px;
        overflow: hidden;
        top: 0;
    }
    .item-wrapper .item-exam .item-title{
        line-height: 28px;
        font-size: 20px;
        color: #2F3445;
        margin-bottom: 10px;
        height: 56px;
    }
    .item-wrapper .item-exam .item-row{
        padding-left: 72px;
        color: #666;
        line-height: 20px;
        position: relative;
    }
    .item-wrapper .item-exam .item-row + .item-row{
        margin-top: 6px;
    }
    .item-wrapper .item-exam .item-row .item-label{
        position: absolute;
        top: 0;
        left: 0;
    }
    .exam-btn{
        margin-left: 280px;
    }
</style>