<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">FrameCop</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse" v-if="$auth.ready()">
              <ul class="nav navbar-nav">
                <li><a v-link="{ path: '/search' } " v-if="!$auth.check()">Search</a></li>
                <li><a v-link="{ path: '/request' }" v-if="$auth.check()">request</a></li>
                <li><a v-link="{ path: '/login' }" v-if="!$auth.check()">Login</a></li>
              </ul>
            </div><!--/.nav-collapse -->
          </div>
        </nav>

        <div class="container">
              <router-view></router-view>
        </div>
    </div>
</template>

<style>
body {
    padding-top: 70px;
    font-family: Helvetica, sans-serif;
}
</style>
