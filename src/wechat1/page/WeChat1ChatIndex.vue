<template>
  <div class="content">
    <div class="msgList">
      <SearchList :placeholder="placeholder"></SearchList>
      <ChatList></ChatList>
    </div>
    <div class="chatBox">
      <MessageChat class="message" :key="selectChatId"></MessageChat>
      <VText class="text"></VText>
    </div>
    <div v-if="isShow" class="chatInfo">
      <FriendChatInfo v-if="selectedChat.type == 1" id="info"></FriendChatInfo>
      <GroupChatInfo v-if="selectedChat.type == 2" id="info"></GroupChatInfo>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchList from "@/wechat1/components/search/SearchList.vue";
import ChatList from "@/wechat1/components/chatlist/ChatList.vue";
import FriendChatInfo from "@/wechat1/components/chatlist/FriendChatInfo.vue";
import GroupChatInfo from "@/wechat1/components/chatlist/GroupChatInfo.vue";
import MessageChat from "@/wechat1/components/message/MessageChat.vue";
import VText from "@/wechat1/components/text/Text.vue";
import {ref} from "vue";

const placeholder = ref("搜索")
// 是否展示聊天框，还是展示默认的微信界面
const isShow = ref(false)


</script>

<style lang="scss" scoped>
.content {
  display: flex;
  width: 100%;

  .msgList {
    width: 250px;
    background: #E6E6E6;
    border-right: 1px solid #d6d6d6;
  }

  .chatBox {
    height: 630px;
    flex: 1;

    .message {
      height: 480px;
    }

    .text {
      height: 150px;
    }
  }

  .chatInfo {
    position: absolute;
    right: -250px;
    height: 630px;
    width: 250px;
    background-color: #F5F5F5;
    border-left: 1px solid #ECECEC;
  }
}
</style>
