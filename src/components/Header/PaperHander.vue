<template>

        <div class="header-wrapper">

            <div class="logo-wrapper">
                <a href="/exam" title="logo">
                    <img class="icon-logo logo-ksx" src="https://cdnoss.kaoshixing.com/ksxing_static/website/base/logo-transparent-header.svg">
                </a>
            </div>


            <div class="exam-name ellipsis">考试标题</div>
            <div class="user ellipsis">
                <i class="icon icon-a_nav_my"></i>
                无限梦想有限公司
            </div>

            <a type="button" class="btn btn-default logout" id="logoutBtn">
                <el-button type="primary" plain>退出</el-button>
            </a>

        </div>

</template>

<script>
    export default {
        name: "PaperHander"
    }
</script>

<style scoped>

    .header-wrapper {
        height: 70px;
        width: 100%;
        line-height: 70px;

        background: #FFFFFF;
        box-shadow: 0 2px 4px 0 rgba(153,153,153,0.10);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1040;
    }
    .header-wrapper .logo-wrapper {
        height: 100%;
        width: 211px;
        position: absolute;
        left: 0;
        top: 0;
        text-align: right;
    }
    a, a:hover, a:focus {
        color: inherit;
        outline-offset: 0;
        outline: none;
    }
    a {
        color: #1A8CFE;
        text-decoration: none;
    }
    .header-wrapper .logo-wrapper .icon-logo {
        max-width: 90%;
        max-height: 54.3%;
        margin-top: 20px;
        margin-right: 30px;
    }
    mg {
        vertical-align: middle;
    }

    .ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 220px;
    }
    .header-wrapper .user {
        position: absolute;
        right: 210px;
        top: 0;
        max-width: 160px;
    }
    .ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .header-wrapper .user .icon {
        color: #1A8CFE;
        font-size: 16px;
        margin-right: 7px;
        line-height: 70px;
    }
    .icon[class*="icon-a_"], .icon[class*="icon-p_"], .icon[class*="icon-m_"] {
        position: relative;
        top: 1px;
    }

    .header-wrapper .logout {
        position: absolute;
        top: 18px;
        right: 80px;
        padding: 0 20px;
        line-height: 32px;
        height: 34px;
    }
</style>