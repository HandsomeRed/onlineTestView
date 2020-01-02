<template>
    <div id="app">
        <section class="el-container viewFrameWork admin is-vertical" element-loading-text="拼命加载中"
                 element-loading-background="rgba(0, 0, 0, 0.8)">
            <header class="el-header viewFrameWork-header">
                <div class="header">
                    <div class="header-left">
                        <img src="https://cdnoss.kaoshixing.com/ksxing_static/logo.png" alt="" class="item item-logo">
                    </div>
                    <div class="header-middle">
                        <div data-v-54d77e2e="" class="body-toolbar clearfix">
                            <div data-v-54d77e2e="" class="toolbar-left fl">
                                <span data-v-54d77e2e="" class="system-name">
                                    欢迎您
                                    <span data-v-54d77e2e="">李大红老师</span>
                                </span>
                                <span data-v-54d77e2e="" class="version-name">教师系统</span>
                            </div>
                        </div>
                    </div>
                    <div class="header-right">
                        <div id="stateUser" class="status-item item-user">
                            <div class="user-picture">
                                <img src="https://s1.kaoshixing.com/static/account/images/default-pic.png">
                            </div>
                            <i class="icon item-icon icon-a_arrow_down"></i>
                            <div class="item-wrap">
                                <div class="item-header">
                                    <div class="picture">
                                        <img src="https://s1.kaoshixing.com/static/account/images/default-pic.png">
                                    </div>
                                    <div class="name ellipsis">无限梦想有限公司</div>
                                    <div class="company ellipsis">无限梦想有限公司</div>
                                </div>
                                <div class="item-list">
                                    <div class="li">
                                        <a href="https://admin.kaoshixing.com/setting/admin/admin_information">
                                            <div class="icon left icon-a_personal_edit"></div>
                                            <div class="title">修改个人信息</div>
                                            <div class="icon right icon-a_arrow_right"></div>
                                        </a></div>
                                    <div class="li">
                                        <div class="icon left icon-a_personal_exit"></div>
                                        <div class="title">退出</div>
                                        <div class="icon right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="stateMessage" class="status-item item-notification">
                            <i class="icon item-icon icon-p_top_message"></i>
                            <span class="message-count">0</span>
                        </div>
                    </div>
                </div>
            </header>

        </section>
    </div>
</template>

<script>
    export default {
        name: "TeacherHeader"
    }
</script>

<style scoped>
    html,
    body,
    div,
    ul,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    dl,
    dt,
    dd,
    ol,
    form,
    input,
    textarea,
    th,
    td,
    select {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    html,
    body {
        min-height: 100%;
    }

    body {
        font-size: 14px;
        font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: normal;
    }

    ul,
    ol {
        list-style: none;
    }

    img {
        border: none;
        vertical-align: middle;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    table {
        border-collapse: collapse;
        table-layout: fixed;
    }

    input,
    textarea {
        outline: none;
        border: none;
        font-size: 14px;
    }

    textarea {
        resize: none;
        overflow: auto;
    }


    .clearfix {
        zoom: 1;
    }

    .clearfix:after {
        content: ".";
        width: 0;
        height: 0;
        visibility: hidden;
        display: block;
        clear: both;
        overflow: hidden;
    }

    .fl {
        float: left
    }


    .is-error .error, .is-v-error .v-error{
        width: 100%;
        display: block;
        position: absolute;
        font-size: 12px;
        line-height: 2;
        color: #ff0000;
    }
    .is-error *, .is-v-error *{
        border-color: #ff0000;
    }
    .is-error .mint-cell-wrapper, .is-v-error .mint-cell-wrapper{
        background-image: linear-gradient(180deg, #ff0000, #ff0000 50%, transparent 50%);
    }
    .is-error .mint-cell:last-child, .is-v-error .mint-cell:last-child{
        background-image: linear-gradient(0deg, #ff0000, #ff0000 50%, transparent 50%);
    }



    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder{
        color: #D8D8D8;
        font-weight: 400;
    }
    input::-moz-placeholder,
    textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */
        color:#D8D8D8;
        font-weight: 400;
    }
    input:-moz-placeholder,
    textarea::-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        color:#D8D8D8;
        font-weight: 400;
    }
    input:-ms-input-placeholder,
    textarea::-moz-placeholder{  /* Internet Explorer 10-11 */
        color:#D8D8D8;
        font-weight: 400;
    }

    :focus{
        outline: none;
    }
    @media (max-width: 768px){
        .hidden-xs{
            display: none;
        }

        .visible-xs-flex{
            display: flex;
        }

        .visible-xs{
            display: block;
        }
    }

    .fit_config_container{
        font-size:0;
        line-height: 0px;
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
    }
    .fit_config_btn{
        margin-left:0!important;
        margin-right:10px!important;
        padding-left:15px!important;
        padding-right: 15px!important;
    }
    .fit_config_btn i{
        margin-right:8px!important;
    }
    .fit_config_btn span{
        margin-left:0px!important;
    }
    .fit_config_div{
        margin-left:0!important;
        margin-right:10px!important;
    }
    .fit_config_div i{
        margin-right:8px!important;
    }
    .fit_config_div span{
        margin-left:0px!important;
    }

    .viewFrameWork-header {
        box-shadow: 0 1px 4px 0 rgba(58,62,81,.2);
        padding: 0;
        position: relative;
        z-index: 999;
    }
    .admin .viewFrameWork-header .header {
        padding-right: 140px;
        padding-left: 160px;
        line-height: 70px;
    }
    .admin .viewFrameWork-header .header .header-left {
        height: 70px;
        width: 160px;
        line-height: 70px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
    }
    .admin .viewFrameWork-header .header .header-left .item-logo {
        max-height: 90%;
        max-width: 70%;
    }
    .admin .viewFrameWork-header .header .header-middle {
        width: 100%;
        padding: 0 18px 0 30px;
    }
    .system-name[data-v-54d77e2e] {
        font-size: 24px;
        color: #27274a;
        font-weight: 500;
        vertical-align: middle;
    }
    .system-name span[data-v-54d77e2e] {
        font-size: 18px;
        color: #27274a;
    }
    .version-name[data-v-54d77e2e] {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
        background: #fe8545;
        border-radius: 4px;
        font-size: 12px;
        color: #fff;
        margin-left: 6px;
    }
    .admin .viewFrameWork-header .header .header-right {
        height: 100%;
        line-height: 70px;
        position: absolute;
        top: 0;
        right: 30px;
        font-size: 0;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user {
        font-size: 0;
    }
    .admin .viewFrameWork-header .header .header-right .status-item {
        float: right;
        font-size: 20px;
        color: #3a3e51;
        position: relative;
        cursor: pointer;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user>.user-picture {
        display: inline-block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        top: -2.5px;
        vertical-align: middle;
        margin-right: 10px;
        text-align: center;
        line-height: 1;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user>.user-picture img {
        max-width: 100%;
        height: 100%;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-icon {
        vertical-align: middle;
        font-size: 12px;
        transform: scale(.67);
        -webkit-transform: scale(.67);
        -moz-transform: scale(.67);
        -o-transform: scale(.67);
        -ms-transform: scale(.67);
    }
    .admin .viewFrameWork-header .header .header-right .status-item .item-icon {
        line-height: inherit;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap {
        display: none;
        position: absolute;
        top: 52px;
        right: 0;
        background: #fff;
        border: 1px solid #f1f3f8;
        box-shadow: 0 2px 20px 0 rgba(39,39,74,.05);
        border-radius: 2px;
        width: 285px;
        line-height: normal;
        z-index: 9999;
        cursor: auto;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap .item-header {
        padding: 30px 20px 20px;
        border-bottom: 1px solid #f1f3f8;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap .item-header .picture {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        text-align: center;
        margin: auto;
        margin-bottom: 10px;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap .item-header .picture img {
        width: 100%;
        min-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap .item-header .name {
        font-size: 16px;
        color: #27274a;
        text-align: center;
        margin-bottom: 5px;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap .item-header .company {
        font-size: 12px;
        color: #656577;
        text-align: center;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap .item-list {
        padding: 10px 0;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap .item-list .li {
        line-height: 45px;
        padding: 0 65px;
        font-size: 14px;
        color: #27274a;
        position: relative;
        cursor: pointer;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap .item-list .li .icon.left {
        left: 30px;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap .item-list .li .icon {
        font-size: 16px;
        position: absolute;
        top: 0;
        line-height: 45px;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap .item-list .li .icon.right {
        right: 20px;
        font-size: 12px;
        transform: scale(.83);
        -webkit-transform: scale(.83);
        -moz-transform: scale(.83);
        -o-transform: scale(.83);
        -ms-transform: scale(.83);
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user .item-wrap .item-list .li .icon {
        font-size: 16px;
        position: absolute;
        top: 0;
        line-height: 45px;
    }
    .admin .viewFrameWork-header .header .header-right .status-item+.status-item {
        margin-right: 30px;
    }
    .admin .viewFrameWork-header .header .header-right .status-item {
        float: right;
        font-size: 20px;
        color: #3a3e51;
        position: relative;
        cursor: pointer;
    }
    .admin .viewFrameWork-header .header .header-right .status-item .item-icon {
        line-height: inherit;
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-notification .message-count {
        position: absolute;
        background: #fe8545;
        font-size: 12px;
        border-radius: 100px;
        line-height: 20px;
        text-align: center;
        color: #fff;
        top: 17px;
        left: 10px;
        display: inline-block;
        width: 20px;
        height: 20px;
        transform: scale(.67);
        -webkit-transform: scale(.67);
        -moz-transform: scale(.67);
        -o-transform: scale(.67);
        -ms-transform: scale(.67);
    }
    .admin .viewFrameWork-header .header .header-right .status-item.item-user>.user-picture {
        display: inline-block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        top: -2.5px;
        vertical-align: middle;
        margin-right: 10px;
        text-align: center;
        line-height: 1;
    }
</style>