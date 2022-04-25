<template>
    <nav>
        <ul class="nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name:'navbar-component'
}
</script>
<style>
nav{
    width: 100%;

}
.nav{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.nav li{
    margin: 0 30px;
}
.nav li a{
    font-size: 1.8em;
    color: orange;
}
</style>