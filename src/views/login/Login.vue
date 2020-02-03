<template>
  <div id="Login">
    <LoginHeader></LoginHeader>
    <LoginBody></LoginBody>
    <LoginFooter></LoginFooter>
  </div>
</template>

<script>
import LoginHeader from './ChildComponents/LoginHeader'
import LoginBody  from './ChildComponents/LoginBody'
import LoginFooter from './ChildComponents/LoginFooter'
export default {
    components:{
        LoginHeader,
        LoginBody,
        LoginFooter
    }

}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
</style>