<template>
    <div class="layout">
        <nav class="layout__nav">
            <slot name="nav"></slot>
        </nav>
        <header class="layout__header" >
            <slot name="header"></slot>
        </header>
        <section class="layout__content">
            <slot></slot>
        </section>
        <footer class="layout__footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style lang="scss">
.layout {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    overflow: hidden;
    --layout-nav-width: 100px;
    //--layout-nav-padding: 16px 12px;
    //--layout-nav-background-color: #FFFFFF;
    //--layout-header-height: 108px;
    //--layout-header-padding: 40px 32px;
    //--layout-footer-height: 64px;
    //--layout-footer-padding: 24px 20px;
    &__nav {
        height: 100%;
        width: var(--layout-nav-width);
        float: left;
        //background-color: #1b396a;
        background-color:  #245C4F;
    }
}
</style>
