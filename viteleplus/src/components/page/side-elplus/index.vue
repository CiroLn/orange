<template>
    <el-menu :default-active="defaultActive" router>
        <SideBasic />
        <SideForm />
        <SideData />
        <SideNav />
        <SideFeedback />
        <SideOthers />
    </el-menu>
</template>

<script setup>
import SideBasic from './SideBasic.vue';
import SideForm from './SideForm.vue';
import SideData from './SideData.vue';
import SideNav from './SideNav.vue';
import SideFeedback from './SideFeedback.vue';
import SideOthers from './SideOthers.vue';

const defaultActive = '/border/styles';

</script>