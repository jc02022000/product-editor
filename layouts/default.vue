<template>
  <div>
    <nav class="sticky top-0 z-10">
      <NavigationBar />
    </nav>
    <main>
      <div>
        <SectionHeader />
        <slot></slot>
        <!-- <SectionTool />
      <div class="w-[96%] mt-8">
        <slot></slot>
      </div> -->
      </div>
    </main>

    <footer class="h-[90px] w-full sticky bg-[#323e53] flex items-center mt-[100px] flex">
      <div class="ml-5 text-white w-5/6">
        <p>Copyright©2023 Camrbidge University Press and Assessment</p>
      </div>
      <div class="ml-5 text-white underline absoute float-right right-0">
        <div><a href="/products">Books</a></div>
        <div><a href="/userTypes">User Types</a></div>
      </div>
    </footer>
  </div>
</template>
