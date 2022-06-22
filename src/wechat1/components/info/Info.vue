<template>
  <div class="Info">
    <FriendInfo v-if="selectedFriend.wxid!=='1' && selectedFriend.wxid!=='2'"></FriendInfo>
    <GroupInfo v-if="selectedFriend.wxid==='2'"></GroupInfo>
    <NewFriendInfo v-if="selectedFriend.wxid==='1'"></NewFriendInfo>
  </div>
</template>

<script>
import FriendInfo from "./FriendInfo";
import GroupInfo from "./GroupInfo";
import NewFriendInfo from "./NewFriendInfo";
export default {
  components: {
    FriendInfo,
    GroupInfo,
    NewFriendInfo,
  },
  computed: {

  },
  methods: {},
};
</script>

<style lang="stylus" scoped></style>

