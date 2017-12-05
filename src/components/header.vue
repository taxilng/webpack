<template>
    <div class='head'>
        <router-link to='/'>
            <img src='../assets/cnodejs.svg' title='cnodejs.svg'>
        </router-link>
        <el-input type="text" placeholder="请输入内容" class="searchBox" prefix-icon="el-icon-search"></el-input>
        <el-button type='text' @click='dialogVisible=true'>关于</el-button>
        <el-dialog title='Vue.js重写CnodeJS社区' :visible.sync='dialogVisible' center width="500px">
            <div class='dialogDiv'>
                <span>
                    <strong>作者: &nbsp;&nbsp;</strong>
                </span>
                <a href='https://github.com/taxilng' target='_blank'>卡卡罗特</a>
                </span>
                <br>
                <span>
                    <strong>源代码: &nbsp;&nbsp;</strong>
                </span>
                <a href='https://github.com/taxilng/webpack/tree/element' target='_blank'>Github</a>
                <span class='star'>&nbsp;&nbsp;Star Star</span>
                <br>
                <br>
                <span>
                    <strong>技术栈: </strong>
                </span>
                <ul>
                    <li>Vue.js</li>
                    <li>Vue-router</li>
                    <li>Axios</li>
                    <li>Element</li>
                    <li>CnodeJS API</li>
                </ul>
            </div>
        </el-dialog>
    </div>
</template>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>

    export default {
        data() {
            return {
                dialogVisible: false,
            };
        },
    };
</script>

<style scoped>
    /*@import url("https://cdn.bootcss.com/element-ui/1.2.8/theme-default/index.css");*/
    html, body {
        margin: 0;
        padding: 0;
    }

    .searchBox {
        margin-left: 50px;
        width: 150px;
        height: 3.6rem;
        display: inline-block;
        line-height: 3.6rem;
    }
    .head {
        background: #324057;
        height: 3.6rem;
        width: 100%;
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
    }

    .head img {
        float: left;
        width: 10rem;
        height: 3.5rem;
        margin-left: 10rem;
    }

    .head > button {
        display: inline-block;
        float: right;
        line-height: 3.6rem;
        margin-right: 10rem;
        font-weight: bold;
        font-size: 20px;
        color: white;
        letter-spacing: 2px;
        padding-top: 0.2rem;
    }

    .head .dialogDiv {
        font-size: 17px;
    }

    .head ul {
        margin-left: 1rem;
    }

    .head a {
        text-decoration: none;
        color: #13CE66;
    }

    .head .star {
        font-weight: bold;
        color: #1D8CE0;
        font-size: 20px;
    }
</style>
