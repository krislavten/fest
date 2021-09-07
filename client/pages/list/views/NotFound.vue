<template>
  <a-result status="404" title="404" sub-title="抱歉，此页面不存在">
    <template #extra>
      <a-button type="primary">
        <router-link to="/">回到首页</router-link>
      </a-button>
    </template>
  </a-result>
</template>
